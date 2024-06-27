"use server";

import { db } from ".";
import { patients } from "./schema";
import { eq } from "drizzle-orm";

export const addPatient = async (data: any) => {
  const result = await db.insert(patients).values(data);
  return result;
};

export const deletePatient = async (id: string) => {
  const result = await db.delete(patients).where(eq(patients.id, id));
  return result;
};

export const updatePatient = async (id: string, data: any) => {
  const result = await db.update(patients).set(data).where(eq(patients.id, id));
  return result;
};

export const verifyPassword = async (password: string) => {
  const result = (password == process.env.ADMIN_PASSWORD) as boolean;
  return result;
};
