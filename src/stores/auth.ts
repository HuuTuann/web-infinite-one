"use client";

import { create } from "zustand";
import { createJSONStorage, devtools, persist } from "zustand/middleware";

type AuthState = {
  isAuthenticated: boolean;
  login: () => void;
  register: () => void;
  logout: () => void;
};

export const useAuthStore = create<AuthState>()(
  devtools(
    persist(
      (set) => ({
        isAuthenticated: false,
        login: () => set({ isAuthenticated: true }),
        register: () => set({ isAuthenticated: true }),
        logout: () => set({ isAuthenticated: false }),
      }),
      {
        name: "auth-storage",
        storage: createJSONStorage(() => localStorage),
      }
    )
  )
);
