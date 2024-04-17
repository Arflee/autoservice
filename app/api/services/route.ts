export const dynamic = 'force-dynamic' // defaults to auto

import { prisma } from "@/app/lib/data-mapper"
import { NextResponse } from "next/server"

export async function GET(request: Request) {
    const services = prisma.sluzba.count()
    return NextResponse.json(services)
}