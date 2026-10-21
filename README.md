# Nassau ↔ Eleuthera

Pages autonomes (un seul fichier chacune, données embarquées, rechargement en direct quand le réseau passe).

| Page | Rôle |
|---|---|
| `retour.html` | Cockpit du retour Cocodimama → Nassau : score par heure de départ, carte de route, ciel, arrivée, mode Avion GHB → NAS |
| `index.html` | Compagnon de la traversée aller Nassau → Eleuthera (18 octobre 2026) |
| `eleuthera.html` | Carnet de séjour, semaine du 19 au 25 octobre |
| `ciel.html` | Prédicteur de soleil pour Alabaster Bay (ensembles, modèles, satellite) |
| `houlometre.html` | Houlomètre par accéléromètre |

Hébergement : branche `page`, déploiement GitHub Pages par `.github/workflows/pages.yml` une fois Pages activé (Settings → Pages → Source : GitHub Actions). En attendant : `https://htmlpreview.github.io/?https://github.com/Jeanculess/Nassau/blob/page/retour.html`.

Sources : Open-Meteo (modèles, ensembles, mer), NOAA CO-OPS (marées), NHC/TAFB (bulletins), NOAA NESDIS (GOES-19), GADM (trait de côte).
