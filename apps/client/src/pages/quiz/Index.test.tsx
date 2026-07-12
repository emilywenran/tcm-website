import { render, screen, fireEvent, act } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import QuizPage from './Index';

// Mock LanguageContext and matchMedia
vi.mock('@/i18n/LanguageContext', () => ({
  useLanguage: () => ({ language: 'zh', isEnglish: false })
}));

Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: vi.fn().mockImplementation(query => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: vi.fn(), // Deprecated
    removeListener: vi.fn(), // Deprecated
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
    dispatchEvent: vi.fn(),
  })),
});

const clickAnswer = async (index: number) => {
  const buttons = screen.getAllByRole('button');
  const answerButton = buttons[index];
  fireEvent.click(answerButton);
};

describe('QuizPage Scoring Logic', () => {
  it('TestCase 1: All Pinghe -> Pinghe Result', async () => {
    render(<QuizPage />);
    
    // Click Start
    fireEvent.click(screen.getByText('开始测评'));
    
    // Click Gender (Male)
    const maleBtn = screen.getByText('男性');
    fireEvent.click(maleBtn);
    
    // Loop through 19 questions, selecting Pinghe (usually index 2 or index with '正常', '没有', etc.)
    // For simplicity, we can look for specific texts or just select the last option for most, but let's be precise.
    // Actually, Pinghe is option index 2 for all questions EXCEPT Q19 where there is NO pinghe option.
    for (let i = 0; i < 18; i++) {
      await clickAnswer(2);
    }
    // Q19 has 3 options: yangxu, qiyu, yinxu. We pick index 0 (yangxu).
    await clickAnswer(0);
    
    // Verify result
    expect(screen.getByText('平和质')).toBeDefined();
    // Verify not showing any concurrent notice
    expect(screen.queryByText('当下兼挟注意')).toBeNull();
  });

  it('TestCase 2: Yangxu 5 + Yinxu 4 -> Hedging works', async () => {
    render(<QuizPage />);
    fireEvent.click(screen.getByText('开始测评'));
    fireEvent.click(screen.getByText('男性'));
    
    // We can simulate answers manually.
    // Yangxu: Q1(B), Q3(A), Q6(B), Q11(A), Q15(A) => 5 questions.
    // Yinxu: Q4(A), Q8(B), Q12(A), Q16(B) => 4 questions.
    // Let's create an answer array: 
    // Q1: B (Yangxu)
    // Q2: C (Pinghe)
    // Q3: A (Yangxu)
    // Q4: A (Yinxu)
    // Q5: C (Pinghe)
    // Q6: B (Yangxu)
    // Q7: C (Pinghe)
    // Q8: B (Yinxu)
    // Q9: C (Pinghe)
    // Q10: C (Pinghe)
    // Q11: A (Yangxu)
    // Q12: A (Yinxu)
    // Q13: C (Pinghe)
    // Q14: C (Pinghe)
    // Q15: A (Yangxu)
    // Q16: B (Yinxu)
    // Q17: C (Pinghe)
    // Q18: C (Pinghe)
    // Q19: B (Qiyu, to avoid adding to Yangxu or Yinxu)
    
    const answers = [
      1, 2, 0, 0, 2, 1, 2, 1, 2, 2, 0, 0, 2, 2, 0, 1, 2, 2, 1
    ];
    
    for (let i = 0; i < 19; i++) {
      await clickAnswer(answers[i]);
    }
    
    // Primary should be Yangxu
    expect(screen.getByText('阳虚质')).toBeDefined();
    
    // Secondary Yinxu is hedged, so it should NOT be in title
    expect(screen.queryByText(/兼挟/)).toBeNull();
  });

  it('TestCase 3: Yinxu 5 + Shire 4 -> Fusion works', async () => {
    render(<QuizPage />);
    fireEvent.click(screen.getByText('开始测评'));
    fireEvent.click(screen.getByText('男性'));
    
    // Yinxu: Q4(A), Q8(B), Q12(A), Q16(B), Q19(C) -> 5
    // Shire: Q3(B), Q5(B), Q7(B), Q10(B) -> 4
    
    const answers = [
      2, // Q1 Pinghe
      2, // Q2 Pinghe
      1, // Q3 Shire (B)
      0, // Q4 Yinxu (A)
      1, // Q5 Shire (B)
      2, // Q6 Pinghe
      1, // Q7 Shire (B)
      1, // Q8 Yinxu (B)
      2, // Q9 Pinghe
      1, // Q10 Shire (B)
      2, // Q11 Pinghe
      0, // Q12 Yinxu (A)
      2, // Q13 Pinghe
      2, // Q14 Pinghe
      2, // Q15 Pinghe
      1, // Q16 Yinxu (B)
      2, // Q17 Pinghe
      2, // Q18 Pinghe
      2  // Q19 Yinxu (C)
    ];
    
    for (let i = 0; i < 19; i++) {
      await clickAnswer(answers[i]);
    }
    
    // Should display Fusion title
    expect(screen.getByText('阴虚 兼挟 湿热')).toBeDefined();
  });
});
