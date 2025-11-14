"use client";
import { create } from "zustand";

export const useLoadingStore = create((set) => ({
  isLoading: true, // loader shows on first page load
  hasSeenLoader: false, // NEW FLAG
  setIsLoading: (value) => set({ isLoading: value }),
  setHasSeenLoader: (value) => set({ hasSeenLoader: value }),
}));
