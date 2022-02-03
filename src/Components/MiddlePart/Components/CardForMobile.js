import React, { useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import data from "../../../Assets/fakeData.json";
import "./slick.css"
import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";

import { Avatar, Box, Card, Grid, Skeleton, Typography } from "@mui/material";
import Slider from "react-slick";
export default function CardForMobile() {
  const [userData, setUserData] = useState(data);
  const [sad, setSad] = useState(0);
  const handleChange = (i) => {
    setSad(i);
  };
  const settings = {
    dots: true,
    autoplay: true,
    autoplaySpeed: 5000,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    speed: 500,
    adaptiveHeight: true,
    customPaging: function (i) {
      return (
        <Box
          style={{
            width: i === sad ? "50px" : "7px",
            backgroundColor:
              (i === 0 && "#FF9E00") ||
              (i === 1 && "#06D6A0") ||
              (i === 2 && "#023E8A") ||
              (i === 3 && "#F72585") ||
              (i === 4 && "#9D4EDD") ||
              (i === 5 && "#1E96FC"),
            height: "4px",
            borderRadius: "2px",
            marginTop: "30px",
            lazyLoad: true,
          }}
        ></Box>
      );
    },
  };
  return (
    <Box>
      <Slider
        {...settings}
        style={{ maxWidth: "98.5%" }}
        afterChange={(index) => handleChange(index)}
      >
        {userData.map((data, i) => (
          <Box key={i}>
            <Card
              style={{
                background: " #FFFFFF",
                borderRadius: "20px",
                padding: "5%",
              }}
            >
              <Box
                style={{
                  padding: "8px 68px",
                  borderRadius: "10px",
                  backgroundColor:
                    (data.id === 1 && "#FF9E00") ||
                    (data.id === 2 && "#06D6A0") ||
                    (data.id === 3 && "#023E8A") ||
                    (data.id === 4 && "#F72585") ||
                    (data.id === 5 && "#9D4EDD") ||
                    (data.id === 6 && "#1E96FC"),
                  color: "white",
                }}
              >
                <Typography style={{ fontSize: "16px", fontWeight: 600 }}>
                  Product Updates
                </Typography>
              </Box>
              <Box
                style={{
                  marginTop: "21px",
                  display: "flex",
                  flexDirection: "row",
                }}
              >
                <Avatar
                  src="https://i.ibb.co/KxJKhVf/developer2-1.png"
                  style={{ width: 48, height: 48, marginRight: "20px" }}
                />
                <Box>
                  <Typography style={{ fontWeight: "bold", fontSize: "14px" }}>
                    User Name
                  </Typography>
                  <Typography style={{ fontSize: "12px" }}>
                    Sub-Title
                  </Typography>
                </Box>
              </Box>
              <Box style={{ marginTop: "30px" }}>
                <Grid container justifyContent="flex-end" alignItems="flex-end">
                  <Grid item xs={6} sm={6} md={6} lg={6}>
                    <Grid
                      container
                      justifyContent="center"
                      alignItems="center"
                      spacing={3}
                    >
                      <Grid item xs={4} sm={4} md={4} lg={4}>
                        {" "}
                        <Box
                          style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            width: 46,
                            height: 46,
                            borderRadius: "23px",
                            boxShadow:
                              ((data.id === 1 || data.id === 6) &&
                                "3px 6px 15px 5px rgba(87, 153, 239, 0.39)") ||
                              ((data.id === 2 || data.id === 4) &&
                                "3px 6px 15px 5px rgba(173, 105, 240, 0.6)") ||
                              ((data.id === 3 || data.id === 5) &&
                                "3px 6px 15px 5px rgba(59, 211, 14, 0.25)"),
                            background:
                              ((data.id === 1 || data.id === 6) &&
                                "linear-gradient(197.71deg, #243FE1 6.64%, #2F53E5 20.96%, #4C87ED 50.31%, #7BDAFB 91.77%, #84EAFE 99.8%)") ||
                              ((data.id === 2 || data.id === 4) &&
                                "linear-gradient(202.41deg, #3A55D2 10.2%, #4651D5 21.3%, #6548DE 41.17%, #FF007A 95.07%)") ||
                              ((data.id === 3 || data.id === 5) &&
                                "linear-gradient(18.81deg, #6BDC4A 5.65%, #009A73 90.77%)"),
                          }}
                        >
                          {(data.id === 1 || data.id === 6) && (
                            <FaFacebookF
                              style={{ color: "white", fontSize: 24 }}
                            />
                          )}
                          {(data.id === 2 || data.id === 4) && (
                            <FaInstagram
                              style={{ color: "white", fontSize: 24 }}
                            />
                          )}
                          {(data.id === 3 || data.id === 5) && (
                            <FaWhatsapp
                              style={{ color: "white", fontSize: 24 }}
                            />
                          )}
                        </Box>
                      </Grid>
                      <Grid item xs={8} sm={8} md={8} lg={8}>
                        <Box>
                          <Skeleton
                            animation="wave"
                            height={10}
                            width="60%"
                            style={{ marginBottom: 6 }}
                          />
                          <Skeleton
                            animation="wave"
                            height={10}
                            width="80%"
                            style={{ marginBottom: 6 }}
                          />
                        </Box>
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item xs={6} sm={6} md={6} lg={6}>
                    <Box
                      style={{
                        backgroundColor: "#E9EBF6",
                        borderRadius: "10px",
                        padding: "5%",
                      }}
                    >
                      <Grid
                        container
                        justifyContent="center"
                        alignItems="center"
                        spacing={2}
                      >
                        <Grid item xs={4} sm={4} md={4} lg={4}>
                          <Skeleton
                            animation="wave"
                            variant="circular"
                            width={40}
                            height={40}
                          />
                        </Grid>
                        <Grid item xs={8} sm={8} md={8} lg={8}>
                          {" "}
                          <Box>
                            <Skeleton
                              animation="wave"
                              height={10}
                              width="60%"
                              style={{ marginBottom: 6 }}
                            />
                            <Skeleton
                              animation="wave"
                              height={10}
                              width="80%"
                              style={{ marginBottom: 6 }}
                            />
                          </Box>
                        </Grid>
                        <Grid item xs={12} sm={12} md={12} lg={12}>
                          <Typography
                            style={{
                              padding: "5%",
                              fontFamily: "poppins",
                              fontSize: "10px",
                              fontWeight: 500,
                              color: "white",
                            }}
                          >
                            52 minutes ago
                          </Typography>
                        </Grid>
                      </Grid>
                    </Box>
                  </Grid>
                </Grid>
              </Box>
            </Card>
          </Box>
        ))}
      </Slider>
    </Box>
  );
}
