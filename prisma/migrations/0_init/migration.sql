-- CreateTable
CREATE TABLE "administrator" (
    "bankovniucet" VARCHAR(50) NOT NULL,
    "plat" DOUBLE PRECISION NOT NULL,
    "administratorid" SERIAL NOT NULL,

    CONSTRAINT "pk_administrator" PRIMARY KEY ("administratorid")
);

-- CreateTable
CREATE TABLE "mechanik" (
    "bankovniucet" VARCHAR(50) NOT NULL,
    "plat" DOUBLE PRECISION NOT NULL,
    "specializace" VARCHAR(50) NOT NULL,
    "mechanikid" SERIAL NOT NULL,

    CONSTRAINT "pk_mechanik" PRIMARY KEY ("mechanikid")
);

-- CreateTable
CREATE TABLE "osoba" (
    "email" VARCHAR(50) NOT NULL,
    "jmeno" VARCHAR(50) NOT NULL,
    "prijmeni" VARCHAR(50) NOT NULL,
    "telcislo" VARCHAR(50) NOT NULL,
    "osobaid" SERIAL NOT NULL,

    CONSTRAINT "pk_osoba" PRIMARY KEY ("osobaid")
);

-- CreateTable
CREATE TABLE "rezervace" (
    "cas" TIME(0) NOT NULL,
    "cena" DOUBLE PRECISION NOT NULL,
    "datum" DATE NOT NULL,
    "rezervaceid" SERIAL NOT NULL,
    "mechanikid" INTEGER,
    "vozidloid" INTEGER NOT NULL,

    CONSTRAINT "pk_rezervace" PRIMARY KEY ("rezervaceid")
);

-- CreateTable
CREATE TABLE "role" (
    "roleid" SERIAL NOT NULL,
    "osobaid" INTEGER NOT NULL,

    CONSTRAINT "pk_role" PRIMARY KEY ("roleid")
);

-- CreateTable
CREATE TABLE "sluzba" (
    "nazev" VARCHAR(50) NOT NULL,
    "odhadovanadobaprovedeni" VARCHAR(50),
    "pribliznacena" DOUBLE PRECISION,
    "sluzbaid" SERIAL NOT NULL,
    "rezervaceid" INTEGER NOT NULL,

    CONSTRAINT "pk_sluzba" PRIMARY KEY ("sluzbaid")
);

-- CreateTable
CREATE TABLE "vozidlo" (
    "model" VARCHAR(100) NOT NULL,
    "spz" VARCHAR(8) NOT NULL,
    "vozidloid" SERIAL NOT NULL,
    "zakaznikid" INTEGER NOT NULL,

    CONSTRAINT "pk_vozidlo" PRIMARY KEY ("vozidloid")
);

-- CreateTable
CREATE TABLE "zakaznik" (
    "zakaznikid" SERIAL NOT NULL,

    CONSTRAINT "pk_zakaznik" PRIMARY KEY ("zakaznikid")
);

-- AddForeignKey
ALTER TABLE "administrator" ADD CONSTRAINT "fk_administrator_role" FOREIGN KEY ("administratorid") REFERENCES "role"("roleid") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "mechanik" ADD CONSTRAINT "fk_mechanik_role" FOREIGN KEY ("mechanikid") REFERENCES "role"("roleid") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "rezervace" ADD CONSTRAINT "fk_rezervace_pridelena" FOREIGN KEY ("mechanikid") REFERENCES "mechanik"("mechanikid") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "rezervace" ADD CONSTRAINT "fk_rezervace_soucasti" FOREIGN KEY ("vozidloid") REFERENCES "vozidlo"("vozidloid") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "role" ADD CONSTRAINT "fk_role_osoba" FOREIGN KEY ("osobaid") REFERENCES "osoba"("osobaid") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "sluzba" ADD CONSTRAINT "fk_sluzba_bude" FOREIGN KEY ("rezervaceid") REFERENCES "rezervace"("rezervaceid") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "vozidlo" ADD CONSTRAINT "fk_vozidlo_je" FOREIGN KEY ("zakaznikid") REFERENCES "zakaznik"("zakaznikid") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "zakaznik" ADD CONSTRAINT "fk_zakaznik_role" FOREIGN KEY ("zakaznikid") REFERENCES "role"("roleid") ON DELETE NO ACTION ON UPDATE NO ACTION;

