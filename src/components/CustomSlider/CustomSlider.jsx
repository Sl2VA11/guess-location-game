import React, { useState } from "react";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";

export function CustomSlider({ minValue, maxValue, sliderValue,setSliderValue }) {
  

  const handleChange = (value) => {
    setSliderValue(value);
  };

  return (
    <div>
      <Slider
        min={minValue}
        max={maxValue}
        value={sliderValue}
        onChange={handleChange}
        railStyle={{ backgroundColor: "#D9D9D9", height: "6px" }}
        trackStyle={{ backgroundColor: "#C61600", height: "6px" }}
        handleStyle={{
          borderColor: "#000000",
          backgroundColor: "#000000",
          borderWidth: "2px",
          width: "25px",
          height: "25px",
          opacity: 1,
          marginTop: "-9px",
          boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
        }}
      />
     
    </div>
  );
}
