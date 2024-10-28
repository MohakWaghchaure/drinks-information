// app/api/search/route.ts
import { NextResponse } from "next/server";

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);
    const drinkName = searchParams.get("drinkName");

    if (!drinkName) {
        return NextResponse.json({ error: "Missing drink name" }, { status: 400 });
    }

    try {
        const res = await fetch(
            `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${drinkName}`
        );
        if (!res.ok) throw new Error("Failed to fetch data");

        const data = await res.json();
        return NextResponse.json(data);
    } catch (error) {
        console.error("Error fetching drink data:", error);
        return NextResponse.json(
            { error: "Failed to fetch drink data" },
            { status: 500 }
        );
    }
}
