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
    backgroundImage: "linear-gradient(90deg, rgba(183,9,76,1) 0%, rgba(137,43,100,1) 43%, rgba(0,40,85,1) 76%, rgba(0,24,69,1) 100%)",
    "-webkit-background-clip": "text",
    "-webkit-text-fill-color": "transparent",
    "-webkit -animation": "hue 10s infinite linear",
  },
}));
