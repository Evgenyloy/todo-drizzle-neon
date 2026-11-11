"use server";

import { db } from "../db/index";
import { todo } from "../db/schema";
import { eq } from "drizzle-orm";
import { revalidatePath } from "next/cache";

export async function getTodos() {
  return await db.select().from(todo).orderBy(todo.createdAt);
}

export async function addTodo(formData: FormData) {
  const text = formData.get("text") as string;
  if (!text) return;
  await db.insert(todo).values({ text });
  revalidatePath("/");
}

export async function toggleTodo(id: number) {
  const current = await db.select().from(todo).where(eq(todo.id, id));
  if (current.length === 0) return;
  await db.update(todo).set({ done: !current[0].done }).where(eq(todo.id, id));
  revalidatePath("/");
}

export async function deleteTodo(id: number) {
  await db.delete(todo).where(eq(todo.id, id));
  revalidatePath("/");
}
