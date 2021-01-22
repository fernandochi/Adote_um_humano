import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import axios from "axios";
import { useEffect, useState } from "react";
import { Card, CardImage, CardInfo } from "./style";

const Carrossel = ({ deviceType }) => {
  const [animals, setAnimals] = useState([]);

  const getAnimals = () => {
    axios.get("https://adote-um-humano.herokuapp.com/animals").then((res) => {
      setAnimals(res.data);
    });
  };

  useEffect(() => {
    getAnimals();
  }, []);

  return (
    <div
      style={{
        paddingBottom: "30px",
        width: "300px",
        backgroundColor: "##D6EFC7",
      }}
    >
      <Carousel
        ssr
        additionalTransfrom={0}
        arrows
        autoPlay
        autoPlaySpeed={3000}
        infinite
        centerMode={false}
        className=""
        containerClass="container-with-dots"
        dotListClass=""
        draggable
        focusOnSelect={false}
        itemClass=""
        keyBoardControl
        minimumTouchDrag={80}
        renderButtonGroupOutside={false}
        renderDotsOutside={false}
        deviceType={deviceType}
        responsive={{
          desktop: {
            breakpoint: {
              max: 3000,
              min: 1024,
            },
            items: 1,
            partialVisibilityGutter: 1,
          },
          mobile: {
            breakpoint: {
              max: 464,
              min: 0,
            },
            items: 1,
            partialVisibilityGutter: 1,
          },
          tablet: {
            breakpoint: {
              max: 1024,
              min: 464,
            },
            items: 1,
            partialVisibilityGutter: 1,
          },
        }}
        showDots={false}
        sliderClass=""
        slidesToSlide={1}
        swipeable
      >
        {animals.map((animal) => {
          return (
            <Card>
              <CardImage>
                <img src={animal.avatar} alt={animal.name} />
              </CardImage>
              <CardInfo>
                <span>{animal.name}</span>
              </CardInfo>
            </Card>
          );
        })}
      </Carousel>
    </div>
  );
};

export default Carrossel;
