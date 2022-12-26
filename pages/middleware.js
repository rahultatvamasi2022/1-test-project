/* eslint-disable import/no-anonymous-default-export */
import { NextResponse } from "next/server";

export function middleware(req) {
  console.log("Middleware File");
}

export const config = {
  matcher: "/",
};
