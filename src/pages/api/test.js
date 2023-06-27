import { NextRequest, NextResponse } from "next/server";
import * as qs from "qs";

export const config = {
  runtime: "edge",
  unstable_allowDynamic: [
    "/node_modules/function-bind/**",
    "/node_modules/function-bind/*.js",
    "**/node_modules/function-bind/**",
    "**/node_modules/function-bind/*.js",
    "**/function-bind/**",
    "**/function-bind/*.js",
    "**",
  ],
};

export default async (request) => {
  console.log(qs.stringify({ foo: 1 }));
};
