## Luento 4 koodit

### Supabase
- Tarvitaan supabase-projekti: https://supabase.com/

Luotiin taulu "ranking" seuraavalla schemalla:
|---|---|---|
|id | int8 | primary (ei muutettu)|
|created_at|timestapmz| (ei muutettu)|
|points|int8|not null, default 0|
|nickname|text|not null|

- Asennettiin react-projektiin supabase-client https://supabase.com/docs/reference/javascript/introduction

- Supabasen API Docs-osiossa generoitiin typescript tyypit tietokannasta

- Lisää tarvittavat tiedot omasta supabase-projektista (ks. API Docs supabase-projektissa) tiedostoon /src/supabase_client.ts

### React-router
Otettiin käyttöön React-router: https://reactrouter.com/en/main/start/tutorial

