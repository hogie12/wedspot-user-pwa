import React, { useState, useEffect } from "react";
import Slider from "react-animated-slider";
import "react-animated-slider/build/horizontal.css";
import axios from "axios";
import img1 from "../asset/Arista.png";

const SimpleSlider = () => {
  const [data, setData] = useState([]);
  const getData = () => {
    axios
      .get("http://localhost:4000/data")
      .then((res) => {
        console.log(res);
        setData(res.data);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <Slider autoplay={3000} style={{ height: "50px" }}>
      {data.map((data, index) => (
        <div
          key={index}
          style={{
            width: "10rem",
          }}
          // style={{background: `url('${data.image_poster}') no-repeat center center` }}
        >
          <div
            className="center"
            style={{
              textAlign: "center",
              backgroundColor: "grey",
            }}
          >
            <img src={img1} width="100%" alt=""></img>
            {/* <p>{item.description}</p> */}
            {/* <button>{item.button}</button> */}
          </div>
        </div>
      ))}
    </Slider>
  );
};

export default SimpleSlider;
