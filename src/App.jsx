import React from "react";
import "./App.css";
import Slider from "./components/Slider/Slider";

import image1 from "./assets/image1.jpg";
import image2 from "./assets/image2.jpg";
import image3 from "./assets/image3.jpg";

const App = () => {
  const slides = [
    {
      image: image1,
      title: "Slide 1",
      subtitle: "Subtitle 1",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
    },
    {
      image: image2,
      title: "Slide 2",
      subtitle: "Subtitle 2",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
    },
    {
      image: image3,
      title: "Slide 3",
      subtitle: "Subtitle 3",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
    },
  ];

  return (
    <div className="app-container">
      <Slider slides={slides} parallaxIntensity={-20} transitionSpeed={1000} />
    </div>
  );
};

export default App;
