DROP TABLE IF EXISTS administrator CASCADE;
DROP TABLE IF EXISTS mechanik CASCADE;
DROP TABLE IF EXISTS osoba CASCADE;
DROP TABLE IF EXISTS rezervace CASCADE;
DROP TABLE IF EXISTS sluzba CASCADE;
DROP TABLE IF EXISTS vozidlo CASCADE;
-- End of removing

CREATE TABLE administrator (
    id_admin INTEGER NOT NULL GENERATED ALWAYS AS IDENTITY,
    id_osoba INTEGER NOT NULL,
    heslo_hash VARCHAR(256) NOT NULL);
ALTER TABLE administrator ADD CONSTRAINT pk_administrator PRIMARY KEY (id_admin, id_osoba);
ALTER TABLE administrator ADD CONSTRAINT u_fk_administrator_osoba UNIQUE (id_osoba);

CREATE TABLE mechanik (
    id_mechanik INTEGER NOT NULL GENERATED ALWAYS AS IDENTITY,
    id_osoba INTEGER NOT NULL,
    heslo_hash VARCHAR(256) NOT NULL
);
ALTER TABLE mechanik ADD CONSTRAINT pk_mechanik PRIMARY KEY (id_mechanik, id_osoba);
ALTER TABLE mechanik ADD CONSTRAINT u_fk_mechanik_osoba UNIQUE (id_osoba);

CREATE TABLE osoba (
    id_osoba INTEGER NOT NULL GENERATED ALWAYS AS IDENTITY,
    tel VARCHAR(15) NOT NULL,
    jmeno VARCHAR(40) NOT NULL,
    prijmeni VARCHAR(40) NOT NULL,
    email VARCHAR(100) NOT NULL
);
ALTER TABLE osoba ADD CONSTRAINT pk_osoba PRIMARY KEY (id_osoba);

CREATE TABLE sluzba (
    id_sluzba INTEGER NOT NULL GENERATED ALWAYS AS IDENTITY,
    nazev VARCHAR(100) NOT NULL,
    cena INTEGER NOT NULL,
    popis VARCHAR(255) NOT NULL
);
ALTER TABLE sluzba ADD CONSTRAINT pk_sluzba PRIMARY KEY (id_sluzba);

CREATE TABLE rezervace (
    id_rezervace INTEGER NOT NULL GENERATED ALWAYS AS IDENTITY,
    id_sluzba INTEGER NOT NULL,
    id_vozidlo INTEGER NOT NULL,
    id_osoba INTEGER NOT NULL,
    id_mechanik INTEGER,
    mechanik_id_osoba INTEGER,
    datum VARCHAR(256) NOT NULL,
    cas VARCHAR(256) NOT NULL
);
ALTER TABLE rezervace ADD CONSTRAINT pk_rezervace PRIMARY KEY (id_rezervace, id_sluzba, id_vozidlo, id_osoba);
ALTER TABLE rezervace ADD CONSTRAINT c_fk_rezervace_mechanik CHECK ((id_mechanik IS NOT NULL AND mechanik_id_osoba IS NOT NULL) OR (id_mechanik IS NULL AND mechanik_id_osoba IS NULL));


CREATE TABLE vozidlo (
    id_vozidlo INTEGER NOT NULL GENERATED ALWAYS AS IDENTITY,
    id_osoba INTEGER NOT NULL,
    model VARCHAR(100) NOT NULL,
    reg_znacka VARCHAR(32) NOT NULL
);
ALTER TABLE vozidlo ADD CONSTRAINT pk_vozidlo PRIMARY KEY (id_vozidlo, id_osoba);

ALTER TABLE administrator ADD CONSTRAINT fk_administrator_osoba FOREIGN KEY (id_osoba) REFERENCES osoba (id_osoba) ON DELETE CASCADE;

ALTER TABLE mechanik ADD CONSTRAINT fk_mechanik_osoba FOREIGN KEY (id_osoba) REFERENCES osoba (id_osoba) ON DELETE CASCADE;

ALTER TABLE rezervace ADD CONSTRAINT fk_rezervace_sluzba FOREIGN KEY (id_sluzba) REFERENCES sluzba (id_sluzba) ON DELETE CASCADE;
ALTER TABLE rezervace ADD CONSTRAINT fk_rezervace_vozidlo FOREIGN KEY (id_vozidlo, id_osoba) REFERENCES vozidlo (id_vozidlo, id_osoba) ON DELETE CASCADE;
ALTER TABLE rezervace ADD CONSTRAINT fk_rezervace_mechanik FOREIGN KEY (id_mechanik, mechanik_id_osoba) REFERENCES mechanik (id_mechanik, id_osoba) ON DELETE CASCADE;

ALTER TABLE vozidlo ADD CONSTRAINT fk_vozidlo_osoba FOREIGN KEY (id_osoba) REFERENCES osoba (id_osoba) ON DELETE CASCADE;
