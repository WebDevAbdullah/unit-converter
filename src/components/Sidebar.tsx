import { useState } from "react";
import { FaRuler, FaWeight, FaTint, FaSquare, FaTachometerAlt, FaClock, FaDatabase, FaBolt, FaCalculator, FaBars, FaTimes } from "react-icons/fa";
import { FaGauge } from "react-icons/fa6";
import { useUnitContext } from "../context/useUnitContext";
import { capitalizeFirstLetter } from "../utils/string";

const Sidebar = () => {
  const { selectedCategory, setSelectedCategory, setSelectedUnit } = useUnitContext();
  const [isOpen, setIsOpen] = useState(false);

  function handleSelectedCategory(category: string) {
    setSelectedCategory(category);
    setSelectedUnit(""); // Reset selected unit when category changes
    setIsOpen(false); // Close sidebar on mobile after selection
  }

  // Add pressure icon
  const categories = [
    { name: "length", icon: <FaRuler /> },
    { name: "weight", icon: <FaWeight /> },
    { name: "volume", icon: <FaTint /> },
    { name: "area", icon: <FaSquare /> },
    { name: "speed", icon: <FaTachometerAlt /> },
    { name: "time", icon: <FaClock /> },
    { name: "data", icon: <FaDatabase /> },
    { name: "energy", icon: <FaBolt /> },
    { name: "pressure", icon: <FaGauge /> },
  ];

  return (
    <>
      {/* Toggle Button */}
      <button className="btn btn-primary d-md-none position-fixed top-0 start-0 mt-3 ms-3" onClick={() => setIsOpen(!isOpen)} style={{ zIndex: 1031 }}>
        {isOpen ? <FaTimes /> : <FaBars />}
      </button>

      <nav
        className={`bg-white shadow-sm border-end border-primary sidebar
          ${isOpen ? "show" : ""} col-8 col-sm-6 col-md-3`}
        style={{ zIndex: 1030 }}
      >
        <div className="mb-4 p-4 border-bottom border-primary">
          <h5 className="mb-0 d-flex align-items-center text-primary fs-4">
            <FaCalculator className="d-none d-md-block" />
            <span className="ms-5 ms-md-3">Unit Converter</span>
          </h5>
        </div>
        <div className="nav flex-column">
          {categories.map(({ name, icon }) => (
            <button
              key={name}
              onClick={() => handleSelectedCategory(name)}
              className={`
                btn btn-link w-100 d-flex p-3 align-items-center text-decoration-none
                ${selectedCategory === name ? "text-primary bg-light" : "text-dark"}
              `}
            >
              <span className="mx-3">{icon}</span>
              <span>{capitalizeFirstLetter(name)}</span>
            </button>
          ))}
        </div>
      </nav>
    </>
  );
};

export default Sidebar;
