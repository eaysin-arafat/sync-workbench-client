import { notifications } from "@mantine/notifications";
import React from "react";

// Define the props type for the ToastNotification component
interface ToastNotificationProps {
  title: string;
  message: string;
  type?: "success" | "error" | "info";
  mt?: string | number;
}

const colorMap = {
  error: "red",
  success: "var(--primary)",
  info: "blue",
};

const notification: React.FC<ToastNotificationProps> = ({
  title,
  message,
  type = "info",
}) => {
  const color = colorMap[type] || colorMap.success;

  return notifications.show({
    title,
    message,
    color,
    autoClose: 5000,
    bottom: 20,
    right: 20,
  });
};

export default notification;
