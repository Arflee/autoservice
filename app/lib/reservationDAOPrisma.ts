import { rezervace } from "@prisma/client";
import { Reservation } from "./definitions";
import { ReservationDAO } from "./reservationDAO";
import { prisma } from "./data";

export class ReservationDAOPrisma implements ReservationDAO {
  public async PostReservation(data: Reservation): Promise<void> {
    let person;
    person = await prisma.osoba.findFirst({
      where: {
        email: data.email,
        tel: data.telNumber,
      },
    });

    if (!person) {
      person = await prisma.osoba.create({
        data: {
          jmeno: data.givenName,
          prijmeni: data.familyName,
          tel: data.telNumber,
          email: data.email,
        },
      });

      const createdVehicle = await prisma.vozidlo.create({
        data: {
          id_osoba: person.id_osoba,
          model: data.vehicleModel,
          reg_znacka: data.spz,
        },
      });

      await prisma.rezervace.create({
        data: {
          id_osoba: person.id_osoba,
          id_sluzba: 1,
          id_vozidlo: createdVehicle.id_vozidlo,
          datum: data.date,
          cas: data.time,
        },
      });
    }

    const createdVehicle = await prisma.vozidlo.findFirst({
      where: {
        id_osoba: person.id_osoba,
        model: data.vehicleModel,
        reg_znacka: data.spz,
      },
    });

    if (!createdVehicle) {
      const createdVehicle = await prisma.vozidlo.create({
        data: {
          id_osoba: person.id_osoba,
          model: data.vehicleModel,
          reg_znacka: data.spz,
        },
      });

      const reservation = await prisma.rezervace.create({
        data: {
          id_osoba: person.id_osoba,
          id_sluzba: 1,
          id_vozidlo: createdVehicle.id_vozidlo,
          datum: data.date,
          cas: data.time,
        },
      });
    }
  }
  public async GetAllReservations(): Promise<rezervace[]> {
    const reservations = await prisma.rezervace.findMany();
    return reservations;
  }
  public async GetReservationAllInfo(): Promise<Reservation[]> {
    {
      const reservations = await prisma.$queryRaw<Reservation[]>`select
            osoba.jmeno as givenName,
            osoba.prijmeni as familyName,
            osoba.email,
            osoba.tel as telNumber,
            vozidlo.model as vehicleModel,
            vozidlo.reg_znacka as spz,
            rezervace.datum,
            rezervace.cas as time,
            sluzba.nazev as service
            from rezervace
            join vozidlo on rezervace.id_vozidlo=vozidlo.id_vozidlo
            join osoba on rezervace.id_osoba=osoba.id_osoba
            join sluzba on rezervace.id_sluzba=sluzba.id_sluzba`;

      return reservations;
    }
  }
}
