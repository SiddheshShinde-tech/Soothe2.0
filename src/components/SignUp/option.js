import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import ButtonBase from "@material-ui/core/ButtonBase";
import Typography from "@material-ui/core/Typography";
import {Link} from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import halflogo from "../images/fullLogo.jpeg";
// import halflogo from "../images/fullLogo.jpeg";
// CSS File
import "./signup.css";

const images = [
  {
    url: "https://i.ibb.co/Gvyr8CK/volunteer.jpg",
    title: "Volunteer",
    width: "45%",
  },
  {
    url:
      "https://www.boldbusiness.com/wp-content/uploads/2019/07/Founders-Depression_featured-image.jpg",
    title: "Patient",
    width: "45%",
  },
];

var string = "";
// console.log(string);

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "space-evenly",
    flexWrap: "wrap",
    minWidth: 300,
    width: "80%",
    gap: 70,
  },
  image: {
    position: "relative",
    height: 300,
    [theme.breakpoints.down("xs")]: {
      width: "100% !important", // Overrides inline-style
      height: 100,
    },
    "&:hover, &$focusVisible": {
      zIndex: 1,
      "& $imageBackdrop": {
        opacity: 0.15,
      },
      "& $imageMarked": {
        opacity: 0,
      },
      "& $imageTitle": {
        border: "4px solid currentColor",
      },
    },
  },
  focusVisible: {},
  imageButton: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: theme.palette.common.white,
  },
  imageSrc: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundSize: "cover",
    backgroundPosition: "center 40%",
  },
  imageBackdrop: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: theme.palette.common.black,
    opacity: 0.4,
    transition: theme.transitions.create("opacity"),
  },
  imageTitle: {
    position: "relative",
    padding: `${theme.spacing(2)}px ${theme.spacing(4)}px ${
      theme.spacing(1) + 6
    }px`,
  },
  imageMarked: {
    height: 3,
    width: 18,
    backgroundColor: theme.palette.common.white,
    position: "absolute",
    bottom: -2,
    left: "calc(50% - 9px)",
    transition: theme.transitions.create("opacity"),
  },
}));

export default function ButtonBases() {
  const classes = useStyles();
  console.log("We are in the ButtonBases");
  // console.log("/"+image.title);

  return (
    <div>
      <Navbar bg="dark" variant="light" bd="#cef1c4" expand="lg">
        <img src={halflogo} height="50" width="120" alt="Soothe"></img>
      </Navbar>
      <h1 className="option-head-text">I'm here as a</h1>

      <div className="center-my-div">
        <div className={classes.root}>
          {images.map((image) => (
            <ButtonBase
              focusRipple
              key={image.title}
              className={classes.image}
              focusVisibleClassName={classes.focusVisible}
              style={{
                width: image.width,
              }}
            >
              {(string = "/" + image.title)}
              <span
                className={classes.imageSrc}
                style={{
                  backgroundImage: `url(${image.url})`,
                }}
              />
              <span className={classes.imageBackdrop} />
              <span className={classes.imageButton}>
                <Typography
                  component="span"
                  variant="subtitle1"
                  color="inherit"
                  className={classes.imageTitle}
                >
                  <Link className="link" to={string}>
                    {image.title}
                    <span className={classes.imageMarked} />
                  </Link>
                </Typography>
              </span>
            </ButtonBase>
          ))}
        </div>
      </div>
    </div>
  );
}
