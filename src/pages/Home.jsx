import React, { useEffect, useState } from "react";
import About from "../components/home/About.jsx";
import Services from "../components/home/Services.jsx";
import Destination from "../components/home/Destination.jsx";
import Package from "../components/home/Package.jsx";
import Booking from "../components/home/Booking.jsx";
import Process from "../components/home/Process.jsx";
import Team from "../components/home/Team.jsx";
import Contactus from "../components/home/Contactus.jsx";
export default function Home() {

  useEffect(() => {
    scrollTo(0, 0);
  }, []);
  return (
    <div>
      <About />
      <Services />
      <Destination />
      <Package />
      <Booking />
      <Process />
      <Team />
      <Contactus />
    </div>
  );
}
