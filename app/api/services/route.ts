export const dynamic = 'force-dynamic' // defaults to auto

import { prisma } from "@/app/lib/data-mapper"
import { NextResponse } from "next/server"

export async function GET() {
    const services = await prisma.sluzba.findMany()
    return NextResponse.json(services)
}