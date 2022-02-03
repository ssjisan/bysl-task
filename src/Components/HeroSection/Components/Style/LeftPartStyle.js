import { makeStyles } from "@mui/styles";

export default makeStyles((theme) => ({
  header: {
    fontFamily: "Poppins",
    fontSize: "96px",
    fontWeight: "bold",
    color: "#f35626",
    backgroundImage:
      "linear-gradient(90deg, rgba(183,9,76,1) 0%, rgba(137,43,100,1) 43%, rgba(100,40,85,1) 76%, rgba(63,24,69,1) 100%)",
    "-webkit-background-clip": "text",
    "-webkit-text-fill-color": "transparent",
    animation: `$hue 3s infinite linear`,
    "@media (max-width: 1200px)": {
      fontSize: "86px",
    },
    "@media (max-width: 1100px)": {
      fontSize: "76px",
    },
    "@media (max-width: 1000px)": {
      fontSize: "70px",
    },
    "@media (max-width: 900px)": {
      fontSize: "60px",
    },
    "@media (max-width: 800px)": {
      fontSize: "50px",
    },
    "@media (max-width: 700px)": {
      fontSize: "40px",
    },
    "@media (max-width: 650px)": {
      fontSize: "36px",
    },
    "@media (max-width: 500px)": {
      fontSize: "32px",
    },
  },
  "@keyframes hue": {
    from: {
      filter: "hue-rotate(0deg)",
    },
    to: {
      filter: "hue-rotate(-360deg)",
    },
  },
  subHeader: {
    fontFamily:"Inter",
    marginTop: "20px",
    fontSize: "16px",
    fontWeight: 400,
    "@media (max-width: 650px)": {
      fontSize: "14px",
    },
  },
  Button: {
    marginTop: "40px",
    backgroundColor: "#002855",
    borderRadius: "50px",
    fontSize: "16px",
    "@media(max-width: 650px) ": {
      width: "250px",
      borderRadius: "10px",
      fontSize: "14px",
    },
  }
}));
