import { Pool } from 'pg'

let db

const POSTGRES_USER = process.env.POSTGRES_USER
const POSTGRES_PASSWORD = process.env.POSTGRES_PASSWORD
const POSTGRES_HOST = process.env.POSTGRES_HOST
const POSTGRES_PORT = process.env.POSTGRES_PORT
const POSTGRES_DATABASE = process.env.POSTGRES_DATABASE
const isSSL = process.env.NEXT_PUBLIC_VERCEL_ENV === 'PRODUCTION' ? { rejectUnauthorized: false } : false

if (!db) {
  db = new Pool({
    user: POSTGRES_USER,
    password: POSTGRES_PASSWORD,
    host: POSTGRES_HOST,
    port: POSTGRES_PORT,
    database: POSTGRES_DATABASE,
    ssl: isSSL
  })
}

export { db }