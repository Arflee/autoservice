export const dynamic = "force-dynamic";

import { prisma } from "@/app/lib/data-mapper";
import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import validator from "validator";
import { Reservation } from "@/app/lib/definitions";
import { error } from "console";

const schema = z.object({
  givenName: z.string().min(3),
  familyName: z.string().min(5),
  email: z.string().email(),
  telNumber: z.string().refine(validator.isMobilePhone),
  vehicleModel: z.string().min(7),
  spz: z.string().min(6),
  date: z.string(),
  time: z.string(),
  service: z.string().min(5)
});

export async function GET(req: NextRequest) {
  if (req.nextUrl.searchParams.has("list")) {
    const reservations = await prisma.$queryRaw<Reservation>`select
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
    join sluzba on rezervace.id_sluzba=sluzba.id_sluzba`
    return NextResponse.json(reservations);
  } else {
    const reservations = await prisma.rezervace.findMany();
    return NextResponse.json(reservations);
  }
  
}

export async function POST(req: NextRequest, res: NextResponse) {
  const data = await req.json();
  console.log(data)
  const parsed = schema.safeParse(data);
  
  if (!parsed.success) {
    console.log(parsed.error.issues);
    return NextResponse.json({}, {status:404});
  }
  console.log(parsed.data)
  let person;
  person = await prisma.osoba.findFirst({
    where: {
      email: parsed.data.email,
      tel: parsed.data.telNumber,
    },
  });

  if (!person) {
    person = await prisma.osoba.create({
      data: {
        jmeno: parsed.data.givenName,
        prijmeni: parsed.data.familyName,
        tel: parsed.data.telNumber,
        email: parsed.data.email,
      },
    });

    const createdVehicle = await prisma.vozidlo.create({
      data: {
        id_osoba: person.id_osoba,
        model: parsed.data.vehicleModel,
        reg_znacka: parsed.data.spz,
      },
    });

    await prisma.rezervace.create({ data: {
      id_osoba: person.id_osoba,
      id_sluzba: 1,
      id_vozidlo: createdVehicle.id_vozidlo,
      datum: parsed.data.date,
      cas: parsed.data.time
    }})
  }

  const createdVehicle = await prisma.vozidlo.findFirst({
    where: {
      id_osoba: person.id_osoba,
      model: parsed.data.vehicleModel,
      reg_znacka: parsed.data.spz,
    },
  });

  if (!createdVehicle) {
    const createdVehicle = await prisma.vozidlo.create({
      data: {
        id_osoba: person.id_osoba,
        model: parsed.data.vehicleModel,
        reg_znacka: parsed.data.spz,
      },
    });

    const reservation = await prisma.rezervace.create({ data: {
      id_osoba: person.id_osoba,
      id_sluzba: 1,
      id_vozidlo: createdVehicle.id_vozidlo,
      datum: parsed.data.date,
      cas: parsed.data.time
    }})
  }

  return NextResponse.json(parsed.data);
}
