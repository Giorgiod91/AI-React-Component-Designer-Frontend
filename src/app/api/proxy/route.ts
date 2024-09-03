import { NextResponse } from "next/server";
import fetch from "node-fetch";

interface ApiResponse {
  component_code?: string;
}

export async function POST(request: Request) {
  const API_URL = process.env.API_URL;

  if (!API_URL) {
    console.error("API_URL is not defined");
    return NextResponse.json(
      { error: "API_URL is not defined" },
      { status: 500 },
    );
  }

  try {
    const body = await request.json();
    console.log("Request body:", body);

    const response = await fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error("API request failed:", errorText);
      return NextResponse.json(
        { error: `API request failed: ${errorText}` },
        { status: response.status },
      );
    }

    const data = (await response.json()) as ApiResponse;
    console.log("API response data:", data);
    return NextResponse.json(data, { status: response.status });
  } catch (error) {
    console.error("Error in API route:", (error as Error).message);
    return NextResponse.json(
      { error: `Failed to fetch data from API: ${(error as Error).message}` },
      { status: 500 },
    );
  }
}
