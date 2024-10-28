import { defineConfig } from "drizzle-kit";

console.log(process.env.DATABASE_URL)

export default defineConfig({
    out: "./drizzle",
    schema: "./schema.ts",
    dialect: "postgresql",
    dbCredentials: {
        url: process.env.DATABASE_URL!,
    }
})