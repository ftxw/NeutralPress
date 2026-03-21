import { defineConfig } from "prisma/config";

// Prisma CLI 直接加载这个文件时不会解析项目里的路径别名。
// eslint-disable-next-line no-relative-import-paths/no-relative-import-paths
import { loadWebEnv } from "./scripts/load-env";

loadWebEnv();

const prismaCliUrl = process.env.DIRECT_URL ?? process.env.DATABASE_URL ?? "";

export default defineConfig({
  schema: "prisma/schema.prisma",
  migrations: {
    path: "prisma/migrations",
  },
  datasource: {
    url: prismaCliUrl,
  },
});
