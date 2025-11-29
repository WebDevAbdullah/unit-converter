import { useUnitContext } from "../context/useUnitContext";
import { capitalizeFirstLetter } from "../utils/string";

const Header = () => {
  const { selectedCategory } = useUnitContext();
  return (
    <>
      <h1 className="text-center mb-4 text-primary fw-medium display-6 display-md-5 display-lg-4">{capitalizeFirstLetter(selectedCategory)} Converter</h1>
      <hr className="mb-5 text-primary" />
    </>
  );
};

export default Header;
