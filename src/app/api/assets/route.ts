import { NextRequest, NextResponse } from "next/server";
import { asset_registry } from "../../../components/ConnectToExcel";

const assets = asset_registry()

export async function GET(request: NextRequest, search: string) {
    try {
        const response = NextResponse.json({message: assets})
        
        return response;

    } catch (error: any) {
        NextResponse.json({
            message: error.message,
            status: 400
        })
    }
}