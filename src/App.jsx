import React from "react";
import Home from "@/pages/Home";
import { Toaster } from "sonner";

export default function App() {
  return (
    <>
      <Home />
      <Toaster richColors position="bottom-right" />
    </>
  );
}
