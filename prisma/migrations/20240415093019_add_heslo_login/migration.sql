/*
  Warnings:

  - Added the required column `heslo` to the `administrator` table without a default value. This is not possible if the table is not empty.
  - Added the required column `login` to the `administrator` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "administrator" ADD COLUMN     "heslo" VARCHAR(50) NOT NULL,
ADD COLUMN     "login" VARCHAR(50) NOT NULL;
