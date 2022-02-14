import Navigation from "./components/Navigation";
import 'bootstrap-icons/font/bootstrap-icons.css';
import Sidebar from "./components/Sidebar";
import Dashboard from "./components/Dashboard"

function App() {
  return (
    <>
    <Navigation />
    <div className="flex w-full">
    <Sidebar />
    <Dashboard />
    </div>
    </>
  );
}

export default App;
