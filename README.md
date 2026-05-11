# Local development

Install dependencies and run the server (serves static files and provides APIs):

```bash
cd a:/shabeer
npm install
npm run start
```

Endpoints added:

- `POST /api/signup`  — body: `{ "email": "...", "password": "..." }`
- `POST /api/enquiry` — body: `{ "name": "...", "email": "...", "message": "..." }`
- `GET  /api/enquiries` — list recent enquiries

Notes:

- Server uses SQLite (`data.db`) created automatically in the project folder.
- Open `http://localhost:3000/` in a browser (do not open the file via `file://` when using APIs).
