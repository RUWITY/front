import { NextResponse } from "next/server";
import { type NextRequest } from "next/server";

function getParameterByName(url: any, name: any) {
  name = name.replace(/[\[\]]/g, "\\$&");
  var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
    results = regex.exec(url);
  if (!results) return null;
  if (!results[2]) return "";
  return decodeURIComponent(results[2].replace(/\+/g, " "));
}

export async function GET(request: NextRequest) {
  var access_token = getParameterByName(request.url, "access_token");
  var refresh_token = getParameterByName(request.url, "refresh_token");

  const response = NextResponse.json({ access_token, refresh_token });

  return response;
}
