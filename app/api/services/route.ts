export const dynamic = 'force-dynamic'

import { ServiceDAOPrisma } from "@/app/lib/serviceDAOPrisma"
import { NextRequest, NextResponse } from "next/server"

export async function GET() {
    const serviceDAO = new ServiceDAOPrisma()
    const services = await serviceDAO.GetAllServices()
    return NextResponse.json(services)
}

export async function POST(req: NextRequest) {
    const data = await req.json();
    console.log(data)
}