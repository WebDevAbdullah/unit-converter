import { convertToAll } from "../utils/convert";
import type { AllCategories, AllUnits } from "../utils/units";
import { useState, useEffect } from "react";
import { FaRuler } from "react-icons/fa";
import { useUnitContext } from "../context/useUnitContext";
import { conversionTables } from "../utils/units";

const Card = () => {
  const { selectedCategory, setResults, selectedUnit, setSelectedUnit } = useUnitContext();
  const [value, setValue] = useState<string>("");

  function handleValueChange(e: React.ChangeEvent<HTMLInputElement>) {
    setValue(e.target.value);
  }
  function handleSelectChange(e: React.ChangeEvent<HTMLSelectElement>) {
    setSelectedUnit(e.target.value);
  }

  useEffect(() => {
    // Only calculate if we have all required inputs
    if (selectedCategory && selectedUnit && selectedUnit !== "" && value) {
      const numValue = Number(value);
      const category = selectedCategory as AllCategories;

      // Get results for all units in this category
      const results = convertToAll(numValue, selectedUnit as AllUnits, category);

      // Update context with results
      setResults(results);
    } else {
      // Clear results when inputs are invalid/incomplete
      setResults({});
    }
  }, [value, selectedUnit, selectedCategory, setResults]);

  let units: string[] = [];
  if (selectedCategory && selectedCategory in conversionTables) {
    units = Object.keys(conversionTables[selectedCategory as AllCategories]);
  }

  return (
    <div className="card w-100">
      <div className="card-body">
        <div className="row g-4">
          <div className="col-md-6">
            <label htmlFor="fromValue" className="form-label">
              Value
            </label>
            <div className="input-group">
              <span className="input-group-text">
                <FaRuler className="text-secondary" />
              </span>
              <input
                type="number"
                id="fromValue"
                className="form-control form-control-lg"
                placeholder="Enter value"
                min="0"
                max="1000000000000"
                value={value}
                onChange={(e) => handleValueChange(e)}
              />
            </div>
          </div>
          <div className="col-md-6">
            <label htmlFor="fromUnit" className="form-label">
              Unit
            </label>
            <div className="input-group">
              <span className="input-group-text">
                <FaRuler className="text-secondary" />
              </span>
              <select className="form-select form-select-lg" id="fromUnit" value={selectedUnit} onChange={(e) => handleSelectChange(e)}>
                <option>Select unit</option>
                {units.map((unit) => (
                  <option key={unit} value={unit}>
                    {unit}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
