-- DropIndex
DROP INDEX "Form_name_userId_key";

-- AlterTable
ALTER TABLE "Form" ADD COLUMN     "isGlobal" BOOLEAN NOT NULL DEFAULT false,
ALTER COLUMN "userId" DROP NOT NULL;
