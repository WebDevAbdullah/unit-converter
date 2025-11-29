import Sidebar from "./components/Sidebar";
import Card from "./components/Card";
import { UnitProvider } from "./context/UnitProvider";
import Header from "./components/Header";
import ResultsTable from "./components/ResultsTable";

const App = () => {
  return (
    <UnitProvider>
      <div className="container-fluid p-0 d-flex min-vh-100">
        <Sidebar />
        <div className="col-12 col-md-8 p-4 mx-auto debug">
          <Header />
          <Card />
          <div className="mt-4 pt-3 border-top">
            <ResultsTable />
          </div>
        </div>
      </div>
    </UnitProvider>
  );
};

export default App;
