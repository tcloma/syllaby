import { defineConfig } from "drizzle-kit";

export default defineConfig({
	out: "./migrations",
	schema: "./schema.ts",
	dialect: "postgresql",
	dbCredentials: {
		url: process.env.DB_DIRECT_URL as string,
	},
});
