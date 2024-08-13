import dotenv from 'dotenv'
dotenv.config({ path: [process.cwd(), '.env']})


export default {
    port : process.env.PORT,
    DATABASE_URL: process.env.BECKEND_URL
}
