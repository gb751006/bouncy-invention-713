import React from "react";
import { Box, Heading } from "@chakra-ui/react";
import { ArrowForwardIcon, ArrowBackIcon } from "@chakra-ui/icons";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Details = () => {
  const NextArrow = ({ className, onClick }) => {
    return (
      <div
        className={className}
        onClick={onClick}
        style={{
          backgroundColor: "white",
        }}
      >
        <ArrowForwardIcon boxSize={6} color="green" />
      </div>
    );
  };

  const PrevArrow = ({ className, onClick }) => {
    return (
      <div
        className={className}
        onClick={onClick}
        style={{ backgroundColor: "white" }}
      >
        <ArrowBackIcon boxSize={6} color="green" />
      </div>
    );
  };
  const settings = {
    speed: 1000,
    autoplaySpeed: 2000,
    slidesToShow: 4,
    swipeToSlide: true,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  let data = [
    {
      src: "https://images.gofundme.com/2_N7kajzmr-w6SMT3kxplb69d68=/720x405/https://d2g8igdw686xgo.cloudfront.net/40534472_1562771420576268_r.jpeg",
      title: "Support for the Nathon Family",
      desc: "15-year-old McKinney North student, Aaron Hill, recently passed away while swimming in a McKinney pond.  The Hill family has faced a lot of tragedies, loss, and heartache, especially over recent years",
      price: "$9,140 raised",
      donation: "120 Donation",
    },
    {
      src: "https://images.gofundme.com/S47LGdBz_rRUQf4nbqwLBviFKzQ=/720x405/https://d2g8igdw686xgo.cloudfront.net/74558611_1691361599174931_r.jpeg",
      title: "Donate to help John Doe",
      desc: "My brother Jacob was in a serious motorcycle accident on August 4, 2023. He suffered serious head trauma and is currently in Hamilton General’s trauma unit. He will likely be in hospital for a couple more weeks and has a long journey to recovery ahead of him.",
      price: "$5,240 raised",
      donation: "40 Donation",
    },
    {
      src: "https://images.gofundme.com/c6oBLSJIK0dmW3kZ50O7XmSib2w=/720x405/https://d2g8igdw686xgo.cloudfront.net/45887922_1583160434192652_r.jpeg",
      title: "Support for Brandon's family",
      desc: "As many of you know, The Corwin family experienced a tragedy this past weekend when their precious two year old daughter was hit by a car. Sweet baby  Ellie did not make it & her funeral will be held this Friday",
      price: "$30,240 raised",
      donation: "450 Donation",
    },
    {
      src: "https://images.gofundme.com/pucTVNJF7Mbhy4K3LecS3SAR2B4=/720x405/https://d2g8igdw686xgo.cloudfront.net/71239481_1676918102793943_r.png",
      title: "Team Addison Canada",
      desc: "Addison's Disease (adrenal insufficiency) is a rare life-threatening auto-immune disease. Someone living with Addison's Disease requires the replacement of life-sustaining hormones daily and lives every day with a risk of a life-threatening adrenal crisis.",
      price: "$1,120 raised",
      donation: "10 Donation",
    },
    {
      src: "https://images.gofundme.com/goBjKOKJPdFLtqP5IdIvdlttZKg=/720x405/https://d2g8igdw686xgo.cloudfront.net/50183484_1692052191282587_r.png",
      title: "Education Fund",
      desc: "Every year, thousands of teachers start Charity Hero’s to help their students succeed. Together, we can support their work, and the future of education. One donation to the Education Fund helps many teachers pay for supplies, programs, and more., especially over recent years",
      price: "$100,240 raised",
      donation: "1000 Donation",
    },
    {
      src: "https://images.gofundme.com/D5uS3obUbbB5MaC9lpedH2ALfL8=/720x405/https://d2g8igdw686xgo.cloudfront.net/74757345_1692136550471247_r.jpeg",
      title: "Financial support for the family of Jerry Wilson",
      desc: "With great sadness, on Friday, August 11th, we said goodbye to Jerry, a loving husband/father/grandfather/brother/uncle and friend. With this unexpected loss comes many unexpected costs.",
      price: "$5,240 raised",
      donation: "48 Donation",
    },
  ];

  return (
    <Box
      className="product"
      ml={{ base: "0", sm: "150px" }}
      width={{ base: "100%", sm: "80%" }}
      style={{
        background: "rgb(98,207,120)",
        background:
          "radial-gradient(circle, rgba(98,207,120,1) 0%, rgba(70,252,124,0) 100%)",
      }}
    >
      <p>Happening near you</p>
      <h1>Change in Community..</h1>

      <Slider {...settings}>
        {data.map((item, i) => (
          <Box key={i} padding={{ base: "10px", sm: "20px" }}>
            <img src={item.src} alt={item.title} />
            <Heading as="h4" size="sm" p="4px">
              {item.title}
            </Heading>
            <Heading as="h5" size="sm" p="5px" color="blackAlpha.600">
              {item.desc}
            </Heading>
            <Heading as="h6" size="sm" p="4px">
              {item.price}-{item.donation}
            </Heading>
          </Box>
        ))}
      </Slider>
    </Box>
  );
};

export default Details;
