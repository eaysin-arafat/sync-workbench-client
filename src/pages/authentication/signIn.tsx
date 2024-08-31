import AuthLogo from "@/assets/AuthLogo";
import GoogleIcon from "@/assets/GoogleIcon";
import LogoDark from "@/assets/images/logo/logo-dark.svg";
import Logo from "@/assets/images/logo/logo.svg";
import Input from "@/component/ui/molecules/input";
import PasswordInput from "@/component/ui/molecules/password-input";
import { useLoginUserMutation } from "@/features/auth/auth-api";
import { getSignupLink } from "@/routes/router-link";
import React, { useEffect, useState } from "react";
import { CiUser } from "react-icons/ci";
import { FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
type FormDataType = {
  username: string;
  password: string;
};

const initialState: FormDataType = {
  username: "",
  password: "",
};

const SignIn = () => {
  const [formData, setFormData] = useState<FormDataType>({ ...initialState });
  const [error, setError] = useState<string | null>("");

  const [userLogin, { isError, error: loginError }] = useLoginUserMutation();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));

    if (error) setError(null);
  };

  const handleSignIn = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);
    userLogin({ identifier: formData.username, password: formData.password });
  };

  useEffect(() => {
    if (isError && loginError) {
      const errorMessage = "An error occurred. Please try again.";
      setError(errorMessage);
    }
  }, [isError, loginError]);

  return (
    <>
      <div className="rounded-sm bg-white h-screen flex items-center justify-center">
        <div className="flex flex-wrap items-center h-full">
          <div className="hidden w-full xl:block xl:w-1/2">
            <div className="py-17.5 px-26 text-center">
              <Link className="mb-5.5 inline-block" to="/">
                <img className="hidden dark:block" src={Logo} alt="Logo" />
                <img className="dark:hidden" src={LogoDark} alt="Logo" />
              </Link>

              <p className="2xl:px-20">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit
                suspendisse.
              </p>

              <span className="mt-15 inline-block">
                <AuthLogo />
              </span>
            </div>
          </div>

          <div className="w-full flex items-center h-full border-stroke xl:w-1/2 xl:border-l-2">
            <div className="w-full p-4 sm:p-12.5 xl:p-17.5">
              <span className="mb-1.5 block font-medium">Start for free</span>
              <h2 className="mb-9 text-2xl font-bold text-black dark:text-white sm:text-title-xl2">
                Sign In to Sync-Workbench
              </h2>

              <form onSubmit={(e) => handleSignIn(e)} className="space-y-4">
                <div className="space-y-4">
                  <Input
                    label="Username"
                    name="username"
                    value={formData?.username}
                    onChange={handleChange}
                    required
                    icon={<CiUser size={18} />}
                  />

                  <PasswordInput
                    label="Password"
                    name="password"
                    value={formData?.password}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="mb-5">
                  {error && (
                    <div
                      role="alert"
                      className={
                        "alert flex items-center justify-between text-dangerColor gap-1 text-red-600 rounded-sm px-1 mb-2"
                      }
                    >
                      <div className="text-sm font-medium flex gap-1 items-center">
                        {error}
                      </div>
                      <button
                        type="button"
                        onClick={() => setError("")}
                        className=""
                      >
                        <FaTimes size={12} />
                      </button>
                    </div>
                  )}

                  <input
                    type="submit"
                    value="Sign In"
                    className="w-full cursor-pointer rounded-lg border border-primary bg-primary px-4 py-2.5 text-white transition hover:bg-opacity-90"
                  />
                </div>

                <button className="flex w-full items-center justify-center gap-3.5 rounded-lg border border-stroke bg-gray px-4 py-2.5 hover:bg-opacity-50">
                  <span>
                    <GoogleIcon />
                  </span>
                  Sign in with Google
                </button>

                <div className="mt-6 text-center">
                  <p>
                    Don’t have any account?{" "}
                    <Link to={getSignupLink()} className="text-primary">
                      Sign Up
                    </Link>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignIn;
