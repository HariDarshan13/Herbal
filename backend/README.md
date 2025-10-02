# Herbal Heritage - Backend

Simple Express + Mongoose backend to store and serve remedies.

## Setup

1. Install dependencies:
   ```bash
   npm install
   ```

2. Ensure `.env` contains:
   ```
   MONGODB_URI=<your mongodb uri>
   PORT=5000
   ```

3. Seed the database (this will insert 30 remedies):
   ```bash
   npm run seed
   ```

4. Start the server:
   ```bash
   npm start
   ```

API endpoints:
- `GET /api/remedies` - list all remedies
- `POST /api/remedies` - add a remedy (JSON body)

