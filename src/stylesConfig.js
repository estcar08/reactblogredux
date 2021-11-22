import { makeStyles } from "@mui/styles";
import back from "./assets/img/myblog.jpg";

const useStyles = makeStyles((theme) => ({
  subtitle: {
    fontSize: "13px",
    fontWeight: "normal",
    lineHeight: "1.62",
    color: "#3e3e3c",
  },
  inputSpacer: {
    height: "27px",
  },
  orText: {
    textAlign: "center",
  },
  buttonContainer: {
    margin: "16px 0px",
  },
  btnForgotContainer: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: "16px",
  },
  btnForgot: {
    color: "#1e88e5",
    fontSize: "16px",
    fontWeight: 500,
    lineHeight: "1.5",
    letterSpacing: "0.09px",
    backgroundColor: "transparent",
    border: "none",
    textDecoration: "underline",
    cursor: "pointer",
  },
  backcover: {
    backgroundImage: `url(${back})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundAttachment: "fixed",
    backgroundPosition: "center center",
  },
}));

export default useStyles;
