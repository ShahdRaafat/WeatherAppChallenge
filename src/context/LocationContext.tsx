import { createContext, useContext, useState, type ReactNode } from "react";

interface LocationContextType {
  location: string;
  setLocation: (location: string) => void;
}
const LocationContext = createContext<LocationContextType | undefined>(
  undefined,
);
export function LocationProvider({ children }: { children: ReactNode }) {
  const [location, setLocation] = useState("Berlin");
  return (
    <LocationContext.Provider value={{ location, setLocation }}>
      {children}
    </LocationContext.Provider>
  );
}
export function useLocation() {
  const context = useContext(LocationContext);
  if (!context) {
    throw new Error("useLocation must be used within a LocationProvider");
  }
  return context;
}
