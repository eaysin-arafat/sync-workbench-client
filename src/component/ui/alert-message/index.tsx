import toast, { IconTheme } from "react-hot-toast";

interface ToastOptions {
  type: "success" | "error" | "info";
  message?: string;
  duration?: number;
  position?:
    | "top-right"
    | "top-center"
    | "top-left"
    | "bottom-right"
    | "bottom-center"
    | "bottom-left";
  iconTheme?: IconTheme;
}

const showToast = ({
  type,
  message,
  duration = 4000,
  position = "top-center",
}: ToastOptions) => {
  toast.dismiss();

  const defaultMessages = {
    success: "Operation completed successfully",
    error: "An error occurred. Please try again.",
    info: "Here is some information for you",
  };

  const displayMessage = message || defaultMessages[type];

  const toastMap = {
    success: toast.success,
    error: toast.error,
    info: toast, // `info` typically just uses the default toast
  };

  toastMap[type](displayMessage, {
    position,
    duration,
  });
};

export default showToast;
