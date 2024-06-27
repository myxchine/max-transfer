"use server";

import { db } from ".";
import { Patient } from "@/types";
import { count, sql } from "drizzle-orm";
import { patients } from "./schema";

export async function getPatients(limit: number): Promise<Patient[]> {
  console.log("Fetching patients");
  try {
    const patients = await db.query.patients.findMany({
      limit: limit,
    });

    console.log("Patients fetched!");

    return patients as Patient[];
  } catch (error) {
    console.error("Error fetching patients:", error);
    throw new Error("Failed to fetch patients");
  }
}

export async function getPatient(id: string): Promise<Patient> {
  const result = await db.query.patients.findFirst({
    where: (patients, { eq }) => eq(patients.id, id),
  });

  return result as Patient;
}

type Result = {
  count: number;
}[];

export async function countPatients(): Promise<Result> {
  const result = await db.select({ count: count() }).from(patients);

  return result as Result;
}
