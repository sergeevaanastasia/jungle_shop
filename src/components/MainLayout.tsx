import React from "react";
import Home from "./Home";
import ContactUs from "./ContactUs";
import PopularPlants from "./PopularPlants";
import PopularDecor from "./PopularDecor";
import Landscaping from "./Landscaping";

export default function MainLayout() {
  return (
    <div className="wrapper">
      <Home />

      <PopularPlants />

      <PopularDecor />

      <Landscaping />

      <ContactUs />
    </div>
  );
}
