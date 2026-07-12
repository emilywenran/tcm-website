const assert = require('assert');

// The logic extracted from Index.tsx
function calculateResultData(scores) {
  const pingheScore = scores.pinghe ?? 0;
  const biasedEntries = Object.entries(scores)
    .filter(([key]) => key !== "pinghe")
    .sort((a, b) => b[1] - a[1]);
    
  const maxBiasedScore = biasedEntries.length > 0 ? biasedEntries[0][1] : 0;
  
  if (pingheScore >= 10 && maxBiasedScore <= 3.0) {
    return { primary: "pinghe" };
  }
  
  if (biasedEntries.length === 0) {
    return { primary: "pinghe" };
  }
  
  const top1 = biasedEntries[0];
  const top2 = biasedEntries.length > 1 ? biasedEntries[1] : null;
  
  if (!top2 || top1[1] < 3.0 || top2[1] < 3.0 || (top1[1] - top2[1] > 1.5)) {
    return { primary: top1[0] };
  }
  
  const c1 = top1[0];
  const c2 = top2[0];
  
  const isConflictPair = (a, b, target1, target2) => 
    (a === target1 && b === target2) || (a === target2 && b === target1);

  if (isConflictPair(c1, c2, "yangxu", "yinxu")) {
    return { primary: c1 };
  }
  if (isConflictPair(c1, c2, "yangxu", "shire")) {
    return { primary: c1, secondary: c2, isHedging: true };
  }
  
  const fusionPairs = [
    ["yinxu", "shire"],
    ["qixu", "yangxu"],
    ["qiyu", "xueyu"],
    ["qixu", "tanshi"]
  ];
  
  const isFusion = fusionPairs.some(pair => isConflictPair(c1, c2, pair[0], pair[1]));
  if (isFusion) {
    return { primary: c1, secondary: c2, isHedging: false };
  }
  
  return { primary: c1 };
}

// Test 1: All Pinghe
{
  const result = calculateResultData({ pinghe: 18, yangxu: 1 }); // Q19 adds yangxu 1
  assert.strictEqual(result.primary, "pinghe");
  assert.strictEqual(result.secondary, undefined);
  console.log("Test 1 (All Pinghe) passed");
}

// Test 2: Yangxu 5 + Yinxu 4
{
  const result = calculateResultData({ pinghe: 10, yangxu: 5, yinxu: 4 });
  assert.strictEqual(result.primary, "yangxu");
  assert.strictEqual(result.secondary, undefined);
  console.log("Test 2 (Yangxu + Yinxu Hedging) passed");
}

// Test 3: Yinxu 5 + Shire 4
{
  const result = calculateResultData({ pinghe: 10, yinxu: 5, shire: 4 });
  assert.strictEqual(result.primary, "yinxu");
  assert.strictEqual(result.secondary, "shire");
  assert.strictEqual(result.isHedging, false);
  console.log("Test 3 (Yinxu + Shire Fusion) passed");
}

console.log("All logic tests passed!");
