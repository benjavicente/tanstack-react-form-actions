"use server";
import { formFactory } from "./shared";

export default async function someAction(prev: unknown, formData: FormData) {
  return await formFactory.validateFormData(formData);
}
