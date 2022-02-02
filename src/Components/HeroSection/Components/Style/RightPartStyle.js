import { makeStyles } from "@mui/styles";

export default makeStyles((theme) => ({
  FirstCard: {
    backgroundColor: "#B7094C",
    width: "188px",
    opacity: "0.2",
    position: "absolute",
    left: "calc(50% - 188px/2 + 216px)",
    top: "138px",
    height: "218px",
  },
  Pic: {
    position: "absolute",
    width: "42px",
    height: "42px",
    left: "calc(50% - 42px/2 + 306px)",
    top: "128px",
  },
  SecondCard: {
    position: "absolute",
    width: "306.27px",
    height: "339.31px",
    left: "calc(50% - 306.27px/2 + 175.8px)",
    top: "384.29px",
    background: "#FFFFFF",
    boxShadow: "0px 40px 70px -18px rgba(0, 0, 0, 0.1)",
    borderRadius: "8px",
  },
  ThirdCard: {
    position: "absolute",
    width: "309px",
    height: "290.98px",
    left: "calc(50% - 309px/2 + 505.5px)",
    top: "167.01px",
    background: "#FFFFFF",
    boxShadow: "0px 28px 60px -12px rgba(0, 0, 0, 0.05)",
    borderRadius: "8px",
  },
  FourthCard: {
    position: "absolute",
    width: "380px",
    height: "113px",
    left: "calc(50% - 380px/2 + 551px)",
    top: "483px",
    background: "#FFFFFF",
    boxSizing: "border-box",
    borderRadius: "8px",
    padding:"20px"
  },
  FourthCardBox:{
    backgroundColor:"#F3F5FA",
    borderRadius:"6px"
  },
  Text14k:{
    fontSize:"40px",
    fontWeight:600,
    fontFamily:"Inter",
    padding:"5px",
    textAlign:"center"
  },
  Follower:{
    fontWeight:500, fontSize:"16px", fontFamily:"Inter", color:"#8A8E97"
  },
  FifthCard: {
    position: "absolute",
    width: "200px",
    height: "76px",
    left: "calc(50% - 200px/2 + 461px)",
    top: "621px",
    background: "#FFFFFF",
    boxShadow: "0px 35px 80px -14px rgba(0, 0, 0, 0.08)",
    borderRadius: "8px",
    display:"flex"
  },
}));
