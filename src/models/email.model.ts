import { z } from "zod";

export const EmailSchema = z.object({
  date: z.string(),
  company: z.string(),
  address: z.string(),
  manager: z.string(),
  employee1: z.string(),
  employee2: z.string(),
  employee3: z.string(),
  employee4: z.string(),
  attendanceNotes: z.string(),
  cash: z.boolean(),
  cashCancellation: z.boolean(),
  clubMember: z.boolean(),
  employeeAttendance: z.boolean(),
  employeeNotes: z.string(),
  envelopes: z.boolean(),
  safe: z.boolean(),
  smallRegister: z.boolean(),
  envelopesInDay: z.boolean(),
  folder: z.boolean(),
  keys: z.boolean(),
  otherDocuments: z.boolean(),
  redemption: z.boolean(),
  register: z.boolean(),
  registerNotes: z.string(),
  safeNotes: z.string(),
  stockNotes: z.string(),
  unloadedDocuments: z.boolean(),
  unusualAmounts: z.boolean(),
  warehouseStock: z.boolean(),
  emailAddress: z.string(),
  cameras: z.boolean(),
  managerOption: z.string(),
  buzzerDetector :z.boolean(),
  buzzersInItems :z.boolean(),
  warehouseDoor :z.boolean(),
  securityNotes: z.string(),
  time: z.string(),
});

export type Email = z.infer<typeof EmailSchema>;

export const SavedEmailSchema = z.object({
  date: z.string(),
  company: z.string(),
  address: z.string(),
  htmlContent: z.string(),
  emailAddress: z.string(),
  time: z.string(),
});

export type SavedEmail = z.infer<typeof SavedEmailSchema>;