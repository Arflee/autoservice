export const dynamic = "force-dynamic";

import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import validator from "validator";
import { ReservationDAOPrisma } from "@/app/lib/reservationDAOPrisma";

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
  const reservationDao = new ReservationDAOPrisma();
  if (req.nextUrl.searchParams.has("list")) {
    const reservationList = await reservationDao.GetReservationAllInfo();
    return NextResponse.json(reservationList);
  } else {
    const reservations = await reservationDao.GetAllReservations()
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
  const reservationDao = new ReservationDAOPrisma();
  await reservationDao.PostReservation(parsed.data)
  return NextResponse.json(parsed.data);
}
