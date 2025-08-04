// creating a table

import {doublePrecision, integer, pgTable, text, varchar} from "drizzle-orm/pg-core";

export const productsTable = pgTable("products", {
    id: integer("product_id").primaryKey().generatedByDefaultAsIdentity(),
    name: varchar({ length: 255 }).notNull(),
    description: text(),
    image: varchar({ length: 255 }),
    price: doublePrecision().notNull(),
})