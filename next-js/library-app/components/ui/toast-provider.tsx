"use client";

import * as Toast from "@radix-ui/react-toast";

import React, { createContext, useContext, useState } from "react";

type ToastContextType = {
  showToast: (title: string, description?: string) => void;
};

const ToastContext = createContext<ToastContextType | undefined>(undefined);

export const useToast = () => {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error("useToast must be used within a ToastProvider");
  }
  return context;
};

export default function ToastProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [open, setOpen] = useState(false);
  const [toastData, setToastData] = useState<{
    title: string;
    description?: string;
  }>({
    title: "",
    description: "",
  });

  const showToast = (title: string, description?: string) => {
    setToastData({ title, description });
    setOpen(false);
    setTimeout(() => setOpen(true), 10);
  };

  return (
    <ToastContext.Provider value={{ showToast }}>
      <Toast.Provider swipeDirection="right">
        {children}

        <Toast.Root
          className="bg-black text-white rounded-md shadow-lg p-4"
          open={open}
          onOpenChange={setOpen}
        >
          <Toast.Title className="font-bold">{toastData.title}</Toast.Title>
          {toastData.description && (
            <Toast.Description className="text-sm">
              {toastData.description}
            </Toast.Description>
          )}
        </Toast.Root>

        <Toast.Viewport className="fixed bottom-4 right-4 w-80 max-w-full outline-none" />
      </Toast.Provider>
    </ToastContext.Provider>
  );
}
