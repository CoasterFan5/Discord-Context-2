import { integer, pgTable, varchar } from "drizzle-orm/pg-core";


const currencyTable = pgTable('currency', {
    id: varchar('id').notNull().primaryKey(),
    name: varchar('name').notNull(),
    code: varchar('symbol').notNull(),
    value: integer('value').notNull(),
})