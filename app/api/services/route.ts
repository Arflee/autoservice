export const dynamic = 'force-dynamic'

import { ServiceDAOPrisma } from "@/app/lib/serviceDAOPrisma"
import { NextResponse } from "next/server"

export async function GET() {
    const serviceDAO = new ServiceDAOPrisma()
    const services = await serviceDAO.GetAllServices()
    return NextResponse.json(services)
}