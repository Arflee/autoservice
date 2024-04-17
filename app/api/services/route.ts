export const dynamic = 'force-dynamic' // defaults to auto

import { prisma } from "@/app/lib/data-mapper"

export async function GET() {
    const services = await prisma.osoba.findMany()
    return Response.json(services)
}