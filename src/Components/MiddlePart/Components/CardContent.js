import {
  Avatar,
  Box,
  Card,
  Grid,
  IconButton,
  Skeleton,
  Typography,
} from "@mui/material";
import React from "react";
import { FaFacebookF } from "react-icons/fa";

export default function CardContent() {
  return (
    <Box>
      <Grid container spacing={2}>
        <Grid item lg={4}>
          <Card
            style={{
              background: " #FFFFFF",
              boxShadow: "-4px 4px 18px rgba(34, 82, 155, 0.1)",
              borderRadius: "20px",
              padding: "5%",
            }}
          >
            <Box
              style={{
                padding: "8px 68px",
                borderRadius: "10px",
                backgroundColor: "#FF9E00",
                color: "white",
              }}
            >
              <Typography>Product Updates</Typography>
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
                style={{ width: 56, height: 56, marginRight: "20px" }}
              />
              <Box>
                <Typography style={{ fontWeight: "bold" }}>
                  User Name
                </Typography>
                <Typography>Sub-Title</Typography>
              </Box>
            </Box>
            <Box style={{ marginTop: "40px" }}>
              <Grid container>
                <Grid item lg={6}>
                  <IconButton
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      width: 46,
                      height: 46,
                      background:
                        "linear-gradient(197.71deg, #243FE1 6.64%, #2F53E5 20.96%, #4C87ED 50.31%, #7BDAFB 91.77%, #84EAFE 99.8%)",
                    }}
                  >
                    <FaFacebookF style={{ color: "white", fontSize: 24 }} />
                  </IconButton>
                </Grid>
                <Grid item lg={6}>
                  <Box
                    style={{
                      backgroundColor: "#E9EBF6",
                      borderRadius: "10px",
                      padding: "5%",
                    }}
                  >
                    <Grid container justifyContent="center" alignItems="center">
                      <Grid item lg={4}>
                        {" "}
                        <Skeleton
                          animation="wave"
                          variant="circular"
                          width={40}
                          height={40}
                        />
                      </Grid>
                      <Grid item lg={8}>
                        {" "}
                        <Box>
                          <Skeleton
                            animation="wave"
                            height={10}
                            style={{ marginBottom: 6 }}
                          />
                          <Skeleton
                            animation="wave"
                            height={10}
                            style={{ marginBottom: 6 }}
                          />
                        </Box>
                      </Grid>
                      <Grid item lg={12}>
                        <Typography
                          style={{
                            padding: "5%",
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
        </Grid>
      </Grid>
    </Box>
  );
}
