<<<<<<< HEAD
INSERT INTO Osoba (Email, Jmeno, Prijmeni, TelCislo)
VALUES ('jan@gmail.com', 'Jan', 'Novak', '+42056394739');

INSERT INTO Role (osobaid)
VALUES (1);

INSERT INTO Administrator (bankovniucet, plat, heslo, email)
VALUES ('test123', 100500, '123', 'login@asd');
=======
insert into Osoba (Email, Jmeno, Prijmeni, TelCislo) values ('mhartill0@about.me', 'Maryanne', 'Hartill', '+63 986 551 0604');
insert into Osoba (Email, Jmeno, Prijmeni, TelCislo) values ('afetherby1@desdev.cn', 'Alva', 'Fetherby', '+380 934 664 1723');
insert into Osoba (Email, Jmeno, Prijmeni, TelCislo) values ('ycandlish2@blog.com', 'York', 'Candlish', '+63 230 564 8518');
insert into Osoba (Email, Jmeno, Prijmeni, TelCislo) values ('bsmall3@chicagotribune.com', 'Blinny', 'Small', '+86 816 180 1221');
insert into Osoba (Email, Jmeno, Prijmeni, TelCislo) values ('pcockren4@dailymail.co.uk', 'Palm', 'Cockren', '+86 697 290 1275');
insert into Osoba (Email, Jmeno, Prijmeni, TelCislo) values ('slaxon5@google.co.uk', 'Shay', 'Laxon', '+86 212 914 1109');
insert into Osoba (Email, Jmeno, Prijmeni, TelCislo) values ('mnoad6@php.net', 'Myrah', 'Noad', '+7 113 824 5586');
insert into Osoba (Email, Jmeno, Prijmeni, TelCislo) values ('ashernock7@wikimedia.org', 'Axel', 'Shernock', '+1 616 608 7710');
insert into Osoba (Email, Jmeno, Prijmeni, TelCislo) values ('thovy8@parallels.com', 'Thomas', 'Hovy', '+7 282 782 8237');
insert into Osoba (Email, Jmeno, Prijmeni, TelCislo) values ('erannie9@sourceforge.net', 'Elisabetta', 'Rannie', '+86 638 729 9574');
insert into Osoba (Email, Jmeno, Prijmeni, TelCislo) values ('erutlanda@youtube.com', 'Eugenia', 'Rutland', '+62 645 907 8043');
insert into Osoba (Email, Jmeno, Prijmeni, TelCislo) values ('cizakoffb@msn.com', 'Candie', 'Izakoff', '+254 437 390 7003');
insert into Osoba (Email, Jmeno, Prijmeni, TelCislo) values ('mkendallc@cdc.gov', 'Minnie', 'Kendall', '+7 130 637 7305');
insert into Osoba (Email, Jmeno, Prijmeni, TelCislo) values ('gcousind@jugem.jp', 'Gwenneth', 'Cousin', '+46 246 786 3991');
insert into Osoba (Email, Jmeno, Prijmeni, TelCislo) values ('dmatskive@woothemes.com', 'Davy', 'Matskiv', '+355 873 907 9755');
insert into Osoba (Email, Jmeno, Prijmeni, TelCislo) values ('istitsonf@uol.com.br', 'Irena', 'Stitson', '+7 759 926 9645');
insert into Osoba (Email, Jmeno, Prijmeni, TelCislo) values ('smaccarrickg@reddit.com', 'Sidnee', 'MacCarrick', '+62 718 789 6010');
insert into Osoba (Email, Jmeno, Prijmeni, TelCislo) values ('mprobetsh@scribd.com', 'Maridel', 'Probets', '+66 913 604 0705');
insert into Osoba (Email, Jmeno, Prijmeni, TelCislo) values ('tchurcheri@soup.io', 'Thoma', 'Churcher', '+62 451 194 9552');
insert into Osoba (Email, Jmeno, Prijmeni, TelCislo) values ('dgethynj@dmoz.org', 'Danie', 'Gethyn', '+33 543 193 6332');

insert into Administrator (BankovniUcet, Plat) values ('2534287389', 26601);
insert into Administrator (BankovniUcet, Plat) values ('4755287332', 27162);
insert into Administrator (BankovniUcet, Plat) values ('4666400206', 22736);

insert into Mechanik (BankovniUcet, Plat, Specializace) values ('3628047234', 25105, 'Engine Specialist');
insert into Mechanik (BankovniUcet, Plat, Specializace) values ('5489966807', 23357, 'Transmission Expert');
insert into Mechanik (BankovniUcet, Plat, Specializace) values ('8946908424', 28543, 'AC Technician');

insert into Zakaznik values (DEFAULT);
insert into Zakaznik values (DEFAULT);
insert into Zakaznik values (DEFAULT);
insert into Zakaznik values (DEFAULT);
insert into Zakaznik values (DEFAULT);
insert into Zakaznik values (DEFAULT);
insert into Zakaznik values (DEFAULT);
insert into Zakaznik values (DEFAULT);
insert into Zakaznik values (DEFAULT);
insert into Zakaznik values (DEFAULT);
insert into Zakaznik values (DEFAULT);
insert into Zakaznik values (DEFAULT);
insert into Zakaznik values (DEFAULT);
insert into Zakaznik values (DEFAULT);
insert into Zakaznik values (DEFAULT);
insert into Zakaznik values (DEFAULT);
insert into Zakaznik values (DEFAULT);
insert into Zakaznik values (DEFAULT);
insert into Zakaznik values (DEFAULT);
insert into Zakaznik values (DEFAULT);

insert into Role (OsobaID) values (1);
insert into Role (OsobaID) values (2);
insert into Role (OsobaID) values (3);
insert into Role (OsobaID) values (4);
insert into Role (OsobaID) values (5);
insert into Role (OsobaID) values (6);
insert into Role (OsobaID) values (7);
insert into Role (OsobaID) values (8);
insert into Role (OsobaID) values (9);
insert into Role (OsobaID) values (10);
insert into Role (OsobaID) values (11);
insert into Role (OsobaID) values (12);
insert into Role (OsobaID) values (13);
insert into Role (OsobaID) values (14);
insert into Role (OsobaID) values (15);
insert into Role (OsobaID) values (16);
insert into Role (OsobaID) values (17);
insert into Role (OsobaID) values (18);
insert into Role (OsobaID) values (19);
insert into Role (OsobaID) values (20);

insert into Sluzba (Nazev, OdhadovanaDobaProvedeni, PribliznaCena, RezervaceID) values ('Air Filter Replacement', '3 hours 30 min', 2100, 1);
insert into Sluzba (Nazev, OdhadovanaDobaProvedeni, PribliznaCena, RezervaceID) values ('Battery Replacement', '1 hour', 3751, 2);
insert into Sluzba (Nazev, OdhadovanaDobaProvedeni, PribliznaCena, RezervaceID) values ('Oil Change', '1 hour 30 min', 2278, 3);
insert into Sluzba (Nazev, OdhadovanaDobaProvedeni, PribliznaCena, RezervaceID) values ('Emission System Service', '3 hours', 3947, 4);
insert into Sluzba (Nazev, OdhadovanaDobaProvedeni, PribliznaCena, RezervaceID) values ('Engine Diagnostic', '4 hours', 3057, 5);
insert into Sluzba (Nazev, OdhadovanaDobaProvedeni, PribliznaCena, RezervaceID) values ('Suspension Repair', '1 hour 30 min', 3939, 6);
insert into Sluzba (Nazev, OdhadovanaDobaProvedeni, PribliznaCena, RezervaceID) values ('PCV Valve Replacement', '3 hours', 1498, 7);
insert into Sluzba (Nazev, OdhadovanaDobaProvedeni, PribliznaCena, RezervaceID) values ('Wheel Balancing', '3 hours 30 min', 2314, 8);
insert into Sluzba (Nazev, OdhadovanaDobaProvedeni, PribliznaCena, RezervaceID) values ('Tire Rotation', '5 hours', 3404, 9);
insert into Sluzba (Nazev, OdhadovanaDobaProvedeni, PribliznaCena, RezervaceID) values ('Wheel Balancing', '1 hour', 3015, 10);
insert into Sluzba (Nazev, OdhadovanaDobaProvedeni, PribliznaCena, RezervaceID) values ('Spark Plug Replacement', '2 hours 30 min', 2708, 11);
insert into Sluzba (Nazev, OdhadovanaDobaProvedeni, PribliznaCena, RezervaceID) values ('Fuel System Cleaning', '1 hour', 2443, 12);
insert into Sluzba (Nazev, OdhadovanaDobaProvedeni, PribliznaCena, RezervaceID) values ('Differential Service', '4 hours 30 min', 1073, 13);
insert into Sluzba (Nazev, OdhadovanaDobaProvedeni, PribliznaCena, RezervaceID) values ('Muffler Replacement', '3 hours 30 min', 2345, 14);
insert into Sluzba (Nazev, OdhadovanaDobaProvedeni, PribliznaCena, RezervaceID) values ('AC Recharge', '4 hours', 2790, 15);
insert into Sluzba (Nazev, OdhadovanaDobaProvedeni, PribliznaCena, RezervaceID) values ('Fuel System Cleaning', '5 hours', 3175, 16);
insert into Sluzba (Nazev, OdhadovanaDobaProvedeni, PribliznaCena, RezervaceID) values ('Power Steering Flush', '1 hour 30 min', 2509, 17);
insert into Sluzba (Nazev, OdhadovanaDobaProvedeni, PribliznaCena, RezervaceID) values ('Power Steering Flush', '5 hours', 1799, 18);
insert into Sluzba (Nazev, OdhadovanaDobaProvedeni, PribliznaCena, RezervaceID) values ('Windshield Wiper Replacement', '1 hour 30 min', 3944, 19);
insert into Sluzba (Nazev, OdhadovanaDobaProvedeni, PribliznaCena, RezervaceID) values ('Oil Change', '1 hour 30 min', 2532, 20);

insert into Vozidlo (Model, Spz, ZakaznikID) values ('Nissan Altima', 'OLP147', 1);
insert into Vozidlo (Model, Spz, ZakaznikID) values ('Tesla Model S', 'RFV963', 2);
insert into Vozidlo (Model, Spz, ZakaznikID) values ('Ferrari 488 GTB', 'QWE369', 3);
insert into Vozidlo (Model, Spz, ZakaznikID) values ('Lexus RX', 'EDC147', 4);
insert into Vozidlo (Model, Spz, ZakaznikID) values ('Hyundai Sonata', 'MNB147', 5);
insert into Vozidlo (Model, Spz, ZakaznikID) values ('Chevrolet Corvette', 'RFV963', 6);
insert into Vozidlo (Model, Spz, ZakaznikID) values ('Tesla Model S', 'QWE321', 7);
insert into Vozidlo (Model, Spz, ZakaznikID) values ('Mazda CX-5', 'GHJ258', 8);
insert into Vozidlo (Model, Spz, ZakaznikID) values ('Ford Mustang', 'UIO741', 9);
insert into Vozidlo (Model, Spz, ZakaznikID) values ('Lexus RX', 'BNM741', 10);
insert into Vozidlo (Model, Spz, ZakaznikID) values ('Ford Mustang', 'WSX258', 11);
insert into Vozidlo (Model, Spz, ZakaznikID) values ('Ford Mustang', 'MNB147', 12);
insert into Vozidlo (Model, Spz, ZakaznikID) values ('Mercedes-Benz C-Class', 'QWE369', 13);
insert into Vozidlo (Model, Spz, ZakaznikID) values ('Porsche 911', 'FDS852', 14);
insert into Vozidlo (Model, Spz, ZakaznikID) values ('Subaru Outback', 'ABC123', 15);
insert into Vozidlo (Model, Spz, ZakaznikID) values ('Nissan Altima', 'QWE369', 16);
insert into Vozidlo (Model, Spz, ZakaznikID) values ('Toyota Camry', 'BNM741', 17);
insert into Vozidlo (Model, Spz, ZakaznikID) values ('Mercedes-Benz C-Class', 'ZXC147', 18);
insert into Vozidlo (Model, Spz, ZakaznikID) values ('BMW M5', 'FDS852', 19);
insert into Vozidlo (Model, Spz, ZakaznikID) values ('Audi A4', 'ZXC147', 20);

insert into Rezervace (Cas, Cena, Datum, MechanikID, VozidloID) values ('20:30', 2107, '13/04/2024', 2, 1);
insert into Rezervace (Cas, Cena, Datum, MechanikID, VozidloID) values ('17:30', 3378, '28/04/2024', 3, 2);
insert into Rezervace (Cas, Cena, Datum, MechanikID, VozidloID) values ('20:00', 3938, '26/04/2024', 3, 3);
insert into Rezervace (Cas, Cena, Datum, MechanikID, VozidloID) values ('10:30', 4758, '24/04/2024', 3, 4);
insert into Rezervace (Cas, Cena, Datum, MechanikID, VozidloID) values ('20:00', 2730, '15/04/2024', 1, 5);
insert into Rezervace (Cas, Cena, Datum, MechanikID, VozidloID) values ('11:30', 3431, '10/04/2024', 3, 6);
insert into Rezervace (Cas, Cena, Datum, MechanikID, VozidloID) values ('19:30', 3932, '15/04/2024', 3, 7);
insert into Rezervace (Cas, Cena, Datum, MechanikID, VozidloID) values ('15:00', 1560, '15/04/2024', 1, 8);
insert into Rezervace (Cas, Cena, Datum, MechanikID, VozidloID) values ('20:00', 1506, '21/04/2024', 1, 9);
insert into Rezervace (Cas, Cena, Datum, MechanikID, VozidloID) values ('10:30', 4804, '19/04/2024', 3, 10);
insert into Rezervace (Cas, Cena, Datum, MechanikID, VozidloID) values ('13:00', 1712, '26/04/2024', 1, 11);
insert into Rezervace (Cas, Cena, Datum, MechanikID, VozidloID) values ('19:30', 1212, '15/04/2024', 1, 12);
insert into Rezervace (Cas, Cena, Datum, MechanikID, VozidloID) values ('15:00', 4699, '29/04/2024', 1, 13);
insert into Rezervace (Cas, Cena, Datum, MechanikID, VozidloID) values ('14:30', 4883, '03/04/2024', 1, 14);
insert into Rezervace (Cas, Cena, Datum, MechanikID, VozidloID) values ('17:30', 2885, '03/04/2024', 3, 15);
insert into Rezervace (Cas, Cena, Datum, MechanikID, VozidloID) values ('20:00', 3634, '23/04/2024', 2, 16);
insert into Rezervace (Cas, Cena, Datum, MechanikID, VozidloID) values ('13:30', 4255, '14/04/2024', 3, 17);
insert into Rezervace (Cas, Cena, Datum, MechanikID, VozidloID) values ('19:30', 1620, '18/04/2024', 2, 18);
insert into Rezervace (Cas, Cena, Datum, MechanikID, VozidloID) values ('13:30', 2691, '24/04/2024', 1, 19);
insert into Rezervace (Cas, Cena, Datum, MechanikID, VozidloID) values ('13:30', 4765, '06/04/2024', 1, 20);
>>>>>>> 3cd13420758153ac2ed29779d635f06718cba357
