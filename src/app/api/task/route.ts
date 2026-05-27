/* import { connectDB } from "@/lib/mongodb";
import { Task } from "@/database/models/task";
import { NextResponse } from "next/server";

export async function GET() {
    await connectDB();

    const newTask = await Task.create({
        title: "Aprender MongoDB",
    });

    return NextResponse.json(newTask);
} */