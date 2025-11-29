import { createContext } from "react";

// Define the context type
interface UnitContextType {
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
  results: Record<string, number>;
  setResults: (results: Record<string, number>) => void;
  selectedUnit: string;
  setSelectedUnit: (unit: string) => void;
}

// Create the context with default values
export const UnitContext = createContext<UnitContextType>({
  selectedCategory: "",
  setSelectedCategory: () => {},
  results: {},
  setResults: () => {},
  selectedUnit: "",
  setSelectedUnit: () => {},
});
