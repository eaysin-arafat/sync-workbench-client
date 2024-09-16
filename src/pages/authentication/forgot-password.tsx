import { useForgotPasswordMutation } from "@/features/auth/auth-api";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import * as Yup from "yup";

interface ForgotPasswordFormData {
  email: string;
}

const initialState: ForgotPasswordFormData = {
  email: "",
};

const validationSchema = Yup.object({
  email: Yup.string()
    .email("Please enter a valid email address")
    .required("Email is required"),
});

const ForgotPassword = () => {
  const [error, setError] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  const {
    handleSubmit,
    control,
    formState: { errors },
    reset,
  } = useForm<ForgotPasswordFormData>({
    resolver: yupResolver(validationSchema),
    defaultValues: initialState,
  });

  const [forgotPassword, {}] = useForgotPasswordMutation();

  const onSubmit = async (data: ForgotPasswordFormData) => {
    setError(null);
    setSuccessMessage(null);

    try {
      forgotPassword({ email: data.email });
      setSuccessMessage(
        "Password reset email has been sent. Please check your inbox."
      );
      reset();
    } catch (err) {
      setError("An error occurred. Please try again.");
    }
  };

  return (
    <div className="forgot-password-container">
      <h2>Forgot Password</h2>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <Controller
            name="email"
            control={control}
            render={({ field }) => (
              <input
                type="email"
                placeholder="Enter your email"
                {...field}
                className={`input ${errors.email ? "input-error" : ""}`}
              />
            )}
          />
          {errors.email && (
            <p className="error-message">{errors.email.message}</p>
          )}
        </div>

        {error && <p className="error-message">{error}</p>}
        {successMessage && <p className="success-message">{successMessage}</p>}

        <button type="submit" className="submit-button">
          Send Reset Email
        </button>
      </form>
    </div>
  );
};

export default ForgotPassword;
