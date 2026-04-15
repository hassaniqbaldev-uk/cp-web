import { create } from "zustand";

const useServiceStore = create((set) => ({
  selectedService: "",
  setSelectedService: (service) => set({ selectedService: service }),
}));

export default useServiceStore;
