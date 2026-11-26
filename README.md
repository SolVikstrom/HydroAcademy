# HYDRO Academy — konceptunderlag

Klickbar blueprint-prototyp från designsprint. **Inte en färdig tjänst** — visar struktur, öppet/stängt och funktioner för vidare utveckling (t.ex. byrå).

## Köra lokalt

Öppna `index.html` i webbläsaren, eller:

```bash
npx --yes serve .
```

## Fake inloggning

Knappen **Logga in (demo)** sätter `localStorage` och låser upp Lär & använd, Sales Academy och Community. Ingen riktig auth.

## Delar

| Sida | Fil | Tillgång |
|------|-----|----------|
| Upptäck | `index.html` | Öppen |
| Praktiska case | `praktiken.html` | Öppen |
| Lär & använd | `lar.html` | Inloggad |
| Sales Academy | `sales.html` | Inloggad |
| Community | `community.html` | Inloggad |

## GitHub Pages

Publicera root (eller `/docs`) som Pages-källa när repot ligger på GitHub.
