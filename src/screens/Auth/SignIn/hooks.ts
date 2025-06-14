import { useForm } from "react-hook-form";
import { usePostHog } from "posthog-react-native";
import { useEffect, useState } from "react";

type FormData = {
  email: string;
  password: string;
};

export const useSignIn = () => {
  const posthog = usePostHog();

  const [submitted, setSubmitted] = useState(false);

  const {
    control,
    handleSubmit,
    formState: { errors, isValid, isSubmitting },
  } = useForm<FormData>({
    mode: "onBlur",
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = (data: FormData) => {
    console.log("Dados do formulário:", data);

    posthog.capture("user_sign_in", {
      user_email: data.email,
    });

    setSubmitted(true);
  };

  return {
    control,
    handleSubmit,
    errors,
    isValid,
    isSubmitting,
    submitted,
    setSubmitted,
    onSubmit,
  };
};
