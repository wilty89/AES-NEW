import Navbar from "./components/layout/navbar";
import { Outlet } from "react-router";
import Statusbar from "./components/layout/Statusbar";
function App() {
  return (
    <>
      <Navbar />
      <Outlet />
      <Statusbar />
    </>
  );
}

export default App;
