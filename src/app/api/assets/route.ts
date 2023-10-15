import { NextRequest, NextResponse } from "next/server";
import { asset_registry } from "../../../components/ConnectToExcel";

const assets = asset_registry()

export async function GET(request: NextRequest) {
    try {
        const response = NextResponse.json({assets: assets})
        return response;
    } catch (error: any) {
        NextResponse.json({
            message: error.message,
            status: 400
        })
    }
}
