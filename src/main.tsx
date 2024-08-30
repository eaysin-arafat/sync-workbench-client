import { MantineProvider } from "@mantine/core";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Toaster } from "react-hot-toast";
import { Provider } from "react-redux";
import App from "./App.tsx";
import { store } from "./app/store.ts";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <MantineProvider>
      <Provider store={store}>
        <Toaster position="top-center" />
        <App />
      </Provider>
    </MantineProvider>
  </StrictMode>
);
