"use client";
import { FormApi, mergeForm, useTransform } from "@tanstack/react-form";
import { useFormState } from "react-dom";
import { formFactory } from "./shared";
import someAction from "./action";

export function Form() {
  const [state, action] = useFormState(someAction, formFactory.initialFormState);

  const { useStore, Subscribe, handleSubmit, Field } = formFactory.useForm({
    transform: useTransform((baseForm: FormApi<any, any>) => mergeForm(baseForm, state), [state]),
  });

  const formErrors = useStore((formState) => formState.errors);

  return null;
}
