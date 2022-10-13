import { makeStyles } from "@material-ui/core/styles";
import backgroundImg from "../../../assets/back.svg";
export default makeStyles((theme) => ({
  sidebar: {
    width: `calc(100% - 240px)`,
    height: `100vh`,
    display: "flex",
    flexDirection: "column",
    backgroundColor: "#EFF3FD",
  },
  home: {
    backgroundImage: `url(${backgroundImg})`,
    // backgroundRepeat: "repeat-y",
    // backgroundSize: "cover",
    // backgroundPosition: "center",
    backgroundColor: "#EFF3FD",
    & .navbar{
      height: "100vh", backgroundColor: "blue"
    }
  },

}));