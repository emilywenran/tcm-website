<!-- scaffold-contract: v2 -->
# Agent Guide (Scaffold Contract)

This project uses the standard self-host scaffold: React/Vite/Tailwind client, Hono server, Drizzle/libsql database helpers, Better Auth, and shared API envelopes.

Covered server/client exports documented for scaffold checks:

- DB core: `getDb`, `executeSql`, `isDatabaseConfigured`, `checkDatabaseHealth`, `DatabaseError`.
- Auth core: `getAuth`, `AuthUser`.
- Public URL: `getPublicBaseUrl`.
- Session middleware: `withSession`.
- Shared HTTP helpers: `apiSuccess`, `apiFailure`.
- Client API helpers: `apiFetch`, `startThirdPartyGoogleAuth`, `syncAuthTokenFromUrl`.
- Client API base helpers: `apiUrl`, `authUrl`, `API_BASE_URL`.
- Client auth helpers: `authClient`, `getAuthToken`, `setAuthToken`, `clearAuthToken`, `syncAuthTokenFromResult`.
- Storage service: `StoredFile`, `storagePut`, `storageGetForUser`, `storageDeleteForUser`, `storageGetByPath`, `storageGetDownloadUrl`, `storageErrorResponse`.
- Message service: `MessageServiceError`, `sendEmailVerificationCode`.

Server routes under `apps/server/routes/*.route.ts` are discovered automatically and mounted under `/api/<name>`. `isPublic = true` marks a whole API prefix public. Browser code should call product APIs only through `apiFetch`.

SQLite migration exemplar:

```sql
CREATE TABLE IF NOT EXISTS todos (
  id        TEXT    PRIMARY KEY,
  userId    TEXT    NOT NULL,
  title     TEXT    NOT NULL,
  done      INTEGER NOT NULL DEFAULT 0,
  createdAt TEXT    NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updatedAt TEXT    NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX IF NOT EXISTS idx_todos_userId ON todos (userId);
```

Service exemplar:

```ts
import { DatabaseError, getDb } from "../_core/db";
import { todos } from "../db/schema";

export async function listTodos(userId: string) {
  return getDb().select().from(todos);
}
```

Route exemplar:

```ts
import { Hono, type Context } from "hono";
import { apiFailure, apiSuccess } from "@repo/shared/http";
import { DatabaseError } from "../_core/db";
import { createTodo, listTodos } from "../services/todos";

export const todosRouter = new Hono();

todosRouter.get("/", async (c: Context) => {
  const user = c.var.user;
  if (!user) return c.json(apiFailure("UNAUTHORIZED", "Unauthorized"), 401);
  try {
    return c.json(apiSuccess({ todos: await listTodos(user.id) }), 200);
  } catch (error) {
    if (error instanceof DatabaseError) return c.json(apiFailure(error.code, error.message), 502);
    throw error;
  }
});
```
