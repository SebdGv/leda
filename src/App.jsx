import { Outlet } from "react-router-dom";
import "./App.css";
import Header from "./components/header/Header";
import PopBanner from "./components/popBanner/PopBanner";

function App() {
  return (
    <>
      <PopBanner />
      <Header />
      <Outlet />
    </>
  );
}

export default App;
