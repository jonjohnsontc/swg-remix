# Port SWG to Remix App

## What Do I need to Port over

- DB Model (SQLAlchemy) - Prisma
- DB Queries (SQLAlchemy) - Prisma
- Views (CLJS - Re-frame) - Remix/React
- API Endpoints (Flask/Python) - Remix
- Styles (Sass/SCSS) - Sass/SCSS or CSS

### Routes

- root (all the basics / header?)
- index (the header + search bar)
- search results (header + listings)
- $writer (closest matches / top level stats)

### DB

- Prisma
  - install prisma/client && prisma

#### Translating `Retrieve Neighbors`

- First pull neighbors for a given writer
- Pull writer records for each top match in neighbors
- FE shows top 5 records

## What's Left (3/2/22)

- [x] Burger Toggle
- [x] Error handling for not found routes
  - [x] should duplicate not found / if it's easier to,will improve
- [x] Page titling
