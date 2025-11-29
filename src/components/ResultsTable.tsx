import { capitalizeFirstLetter } from "../utils/string";
import { FaExchangeAlt, FaChevronRight } from "react-icons/fa"; // Import icons to replace Bootstrap icons
import { useUnitContext } from "../context/useUnitContext";

const ResultsTable = () => {
  const { results, selectedUnit, selectedCategory } = useUnitContext();

  if (!selectedCategory) {
    return null; // Don't render anything if no category is selected
  }
  return (
    <div>
      <h6 className="d-flex align-items-center mb-3">
        <FaExchangeAlt className="me-2 text-primary" />
        Conversion Results
      </h6>
      <div className="table-responsive">
        <table className="table table-hover">
          <thead className="table-light">
            <tr>
              <th scope="col" className="text-start">
                Unit
              </th>
              <th scope="col" className="text-end">
                Result
              </th>
            </tr>
          </thead>
          <tbody>
            {Object.entries(results).map(([unit, value]) => (
              <tr key={unit} className={unit === selectedUnit ? "table-primary" : ""}>
                <td className="align-middle">
                  <div className="d-flex align-items-center">
                    <FaChevronRight className="me-2 text-primary" />
                    {capitalizeFirstLetter(unit)}
                  </div>
                </td>
                <td className="text-end fw-medium">
                  {value.toLocaleString(undefined, {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 6,
                  })}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ResultsTable;
