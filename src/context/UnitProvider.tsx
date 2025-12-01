import { useState } from "react";
import { UnitContext } from "./UnitContext";

export const UnitProvider = ({ children }: { children: React.ReactNode }) => {
  const [selectedCategory, setSelectedCategory] = useState("Length");
  const [results, setResults] = useState<Record<string, number>>({});
  const [selectedUnit, setSelectedUnit] = useState<string>("");

  return (
    <UnitContext.Provider
      value={{
        selectedCategory,
        setSelectedCategory,
        results,
        setResults,
        selectedUnit,
        setSelectedUnit,
      }}
    >
      {children}
    </UnitContext.Provider>
  );
};
