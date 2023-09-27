import { createMessage } from "@/lib/utils/messages";
import { NextResponse } from "next/server";


export function GET(request: Request) {
  return new Response(JSON.stringify({ hello: true }));
}


export async function POST(request: Request) {
  // console.log(await request.json());

  const form = await request.json();

  if (!form || typeof form != "object") {
    return NextResponse.json({ message: "invalid_input" }, { status: 400 });
  } else if (!form.name || typeof form.name != "string" || form.name.length < 2) {
    return NextResponse.json({ message: "invalid_input" }, { status: 400 });
  } else if (!form.email || typeof form.email != "string" || form.email.length < 2) {
    return NextResponse.json({ message: "invalid_input" }, { status: 400 });
  } else if (!form.message || typeof form.message != "string" || form.message.length < 2) {
    return NextResponse.json({ message: "invalid_input" }, { status: 400 });
  }



  const created = await createMessage(form.name, form.email, form.message);

  if (!created) {
    return NextResponse.json({ message: "unknown" }, { status: 400 });
  }


  return NextResponse.json({ success: true });
}