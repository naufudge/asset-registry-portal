import { NextRequest, NextResponse } from "next/server";
import assetCats from '../../../../public/asset_category_lists.json'
import assetNums from '../../../../public/asset_category_numbers.json'

// const assetCats = require('../../../../public/asset_category_lists.json')

export async function GET(request: NextRequest) {
    try {
        return NextResponse.json({
            assetCats, 
            assetNums
        });
    } catch (error: any) {
        NextResponse.json({
            message: error.message,
            status: 400
        })
    }
}



