import { useState } from "react";
import "./App.css";
import Navber from "./pages/Navber/Navber";
import Bnner from "./pages/Home/Banner/Bnner";
import Hero from "./pages/Home/Hero/Hero";
import About from "./pages/Home/About/about";
import CountDown from "./pages/Home/CountDown/CountDown";
import RoleConditions from "./pages/Home/RoleConditions/RoleConditions";
import CardPage from "./pages/Home/CardPage/CardPage";
import Notifiction from "./pages/Home/Notifiction/Notifiction";

function App() {
  return (
    <div>
      <Navber />
      <Bnner />
      <Hero />
      <About />
      <CountDown />
      <RoleConditions />
      <CardPage />
      <Notifiction />
    </div>
  );
}

export default App;
