import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/layout/Header";
import Sidebar from "./components/layout/SideBar";
import Dashboard from "./components/dashboard/Dashboard";

function App() {
  return (
    <Router>
      <div className="flex justify-between">
        <Sidebar />
        <div className="bg-gray-50 w-full px-4">
          <Header />
          <Routes>
            <Route path="/" element={<Dashboard />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
