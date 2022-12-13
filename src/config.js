import dotenv from 'dotenv'
dotenv.config()

export const db={
    dbName:process.env.DB_NAME,
    user:process.env.DB_USER,
    password:process.env.PASS,
    host:process.env.HOST,
    dialect:process.env.DIALECT,
  }
export const SECRETKEY = process.env.SECRET