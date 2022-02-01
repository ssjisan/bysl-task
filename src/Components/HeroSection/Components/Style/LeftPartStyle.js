import { makeStyles } from "@mui/styles";

export default makeStyles((theme) => ({
  "@-webkit-keyframes hue": {
    from: {
      " -webkit-filter": "hue-rotate(0deg)",
    },
    to: {
      " -webkit-filter": "hue-rotate(-360deg)",
    },
  },
  header: {
    fontFamily: "Poppins",
    fontSize: "96px",
    fontWeight: "bold",
    color: "#f35626",
    backgroundImage: " -webkit-linear-gradient(92deg, #f35626, #feab3a)",
    "-webkit-background-clip": "text",
    "-webkit-text-fill-color": "transparent",
    "-webkit -animation": "hue 10s infinite linear",
  },
}));
