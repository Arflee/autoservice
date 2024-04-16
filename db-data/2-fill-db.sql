INSERT INTO Osoba (Email, Jmeno, Prijmeni, TelCislo)
VALUES ('jan@gmail.com', 'Jan', 'Novak', '+42056394739');

INSERT INTO Role (osobaid)
VALUES (1);

INSERT INTO Administrator (bankovniucet, plat, heslo, email)
VALUES ('test123', 100500, '123', 'login@asd');