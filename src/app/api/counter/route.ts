
// restful api asi se simple se crea

import { NextResponse } from "next/server";

export async function GET (request:Request) {
    

    return NextResponse.json({ count: 100 });
}