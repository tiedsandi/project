"use client";

import AuthForm from "@/components/AuthForm";
import React from "react";
import { signUp } from "@/lib/actions/auth";
import { signUpSchema } from "@/lib/validation";

const Signup = () => {
  return (
    <AuthForm
      type="SIGN_UP"
      schema={signUpSchema}
      defaultValues={{
        email: "",
        password: "",
        fullName: "",
        universityId: 0,
        universityCard: "",
      }}
      onSubmit={signUp}
    />
  );
};

export default Signup;
