import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
export { prisma };

export const formatDateTime = (dateTime: Date) => {
  return dateTime.toLocaleString("cs-CZ", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
  });
};