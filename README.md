# Login-register-postgres

A small login and registration site built with Node, Express and EJS, storing users in PostgreSQL. I made it to practice form handling and database queries from Express.

## What it does
- Register page that saves username, name, email and password to a `register` table
- Login page that checks the email and password and shows a welcome page with the username
- Forgot password page that sets a new password for an existing email
- Basic client-side checks on the register form (email format, matching passwords)
- Shows messages for "email already exists", "incorrect password" and "email not found"

## Tech stack
Node.js (ES modules), Express, EJS, pg, dotenv, plain CSS and JavaScript.

## Running it locally
You need Node 18+ and a PostgreSQL database.

1. Create a table matching the queries in `index.js`:
   `register(id serial primary key, us_name text, per_name text, email text, pass text)`
2. Create a `.env` file in the project root:
   ```
   DATABASE_URL=postgres://postgres:your_password@localhost:5432/your_db
   ```
   The app listens on port 9000 by default. The connection uses SSL with certificate checking turned off, so for a local database without SSL you will need to change `database.js`.
3. Install and start:
   ```
   npm install
   node index.js
   ```
4. Open http://localhost:9000

## Routes
- `GET /` and `GET /login`: login page
- `POST /login`: check credentials
- `GET /newRegister`, `POST /registeruser`: sign up
- `GET /forgotpassword`, `POST /resetpass`: change password

## Notes
This is a learning project. Passwords are stored and compared as plain text and the queries load the whole table, so it is not something to use for real accounts. There are also Zoho Catalyst config files (`catalyst.json`, `app-config.json`) from when I tried hosting it there.
