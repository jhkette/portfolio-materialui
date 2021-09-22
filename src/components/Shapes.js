import React, { useRef } from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { useSpring, animated } from "@react-spring/web";
import useMediaQuery from "@material-ui/core/useMediaQuery";

import coding from "../assets/drawing.svg";
import coding2 from "../assets/drawing_small.svg";
import codingDark from "../assets/drawingcopy.svg";
import polygon from "../assets/polygon.svg";
import polygonDark from "../assets/polygon_dark.svg";
import circle from "../assets/circle.svg";
import circlesmall from "../assets/circle_small.svg";
import circleplain from "../assets/circle_plain.svg";
import rectangle from "../assets/rectangle.svg";
import triangle from "../assets/triangle.svg";
import triangle2 from "../assets/triangle2.svg";
import triangle3 from "../assets/triangle3.svg";
import triangle4 from "../assets/triangle4.svg";
import arrow from "../assets/arrow.svg";
import arrowgrey from "../assets/arrow_grey.svg";
import up from "../assets/up.svg";
import square from "../assets/square.svg";


const useStyles = makeStyles((theme) => ({
    shapeContainer: {
      position: "absolute",
      width: "100%",
      height: "45rem",

      zIndex: "-100",
    },
    shape: {
      display: "block",
      [theme.breakpoints.down("sm")]: {
        display: "none"
      }
    }
  }));

export default function Shapes(props) {
  const classes = useStyles();
  const theme = useTheme();
  const matchesMD = useMediaQuery(theme.breakpoints.down("md"));
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
  const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));

  const styles = useSpring({
    config: { duration: 7000 },

    from: { transform: "translate(0,55%)" },
    to: [{ transform: "translate(0,70%)" }, { transform: "translate(0,55%)" }],
    loop: true,
  });

  const styles1 = useSpring({
    config: { duration: 9000 },
    from: { transform: "translate(0,10%)" },
    to: [{ transform: "translate(0,0%)" }, { transform: "translate(0,10%)" }],
    loop: true,
  });

  const styles2 = useSpring({
    from: { transform: "translate(0,20%)" },
    to: [{ transform: "translate(0,-20%)" }, { transform: "translate(0,20%)" }],
    config: { duration: 9500 },

    loop: true,
  });

  const styles3 = useSpring({
    config: { duration: 9000 },
    from: { transform: "translate(0,30%)" },
    to: [{ transform: "translate(0,-30%)" }, { transform: "translate(0,30%)" }],
    loop: true,
  });

  const styles4 = useSpring({
    config: { duration: 9000 },
    from: { transform: "translate(0,35%)" },
    to: [{ transform: "translate(0,-20%)" }, { transform: "translate(0,35%)" }],

    loop: true,
  });


  return (
    <div className={classes.shapeContainer}>
      <animated.div
        style={{
          width: 190,
          height: 190,
          display: "flex",
          justifyContent: "center",
          position: "absolute",
          color: "blue",
          left: "70%",
          top: "12rem",
          zIndex: "900",
          ...styles4,
        }}
       
      >
        <img src={coding} style={{ height: "125px" }}  className={classes.shape} />
      </animated.div>
      <animated.div
        style={{
          width: 190,
          height: 190,
          display: "flex",
          justifyContent: "center",
          position: "absolute",
          color: "blue",
          left: "70%",
          top: "35rem",
          zIndex: "900",
          ...styles2,
        }}
      >
        <img src={coding2} style={{ height: "35px" }} />
      </animated.div>
      
      <animated.div
        style={{
          display: "flex",
          justifyContent: "center",

          position: "absolute",
          left: "55%",
          top: "22rem",
          zIndex: "900",
          ...styles2,
        }}
      >
        <img src={polygon} style={{ height: "290px" }} />
      </animated.div>
      <animated.div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          position: "absolute",
          left: "35%",
          top: "22rem",
          zIndex: "900",
          paddingTop: "75px",
          ...styles4,
        }}
      >
        <img src={circle} style={{ height: "190px" }} />
      </animated.div>
      <animated.div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                position: "absolute",
                left: "40%",
                top: "5rem",
                ...styles,
              }}
            >
              <img src={arrowgrey} style={{ height: "50px" }} />
            </animated.div>
     
      <animated.div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          position: "absolute",
          left: "40%",
          top: "5rem",
          ...styles,
        }}
      >
        <img src={arrowgrey} style={{ height: "50px" }} />
      </animated.div>
      <animated.div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          position: "absolute",
          left: "50%",
          top: "2rem",
          ...styles,
        }}
      >
        <img src={polygon} style={{ height: "150px"}} />
      </animated.div>
      <animated.div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          position: "absolute",
          left: "-19%",
          top: "6.5rem",
          ...styles1,
        }}
        
      >
        <img src={circle} style={{ height: "1550px" }}   className={classes.shape} />
      </animated.div>
      <animated.div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          position: "absolute",
          left: "25%",
          top: "2rem",
          ...styles,
        }} 
       
      >
        <img src={triangle2} style={{ height: "100px" }}  className={classes.shape} />
      </animated.div>
      <animated.div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          position: "absolute",
          left: "20%",
          top: "37rem",
          ...styles2,
        }}
      >
        <img src={triangle4} style={{ height: "90px" }}  className={classes.shape}/>
      </animated.div>
      <animated.div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                position: "absolute",
                left: "41%",
                top: "20rem",
                ...styles,
              }}
            >
              <img src={triangle} style={{ height: "240px" }} />
            </animated.div>
      <img src={polygonDark} />
      <img
        src={triangle3}
        style={{
          height: "50px",
          position: "absolute",
          left: "60%",
          top: "120px",
        }}
      />

      <img
        src={polygonDark}
        style={{
          height: "40px",
          position: "absolute",
          left: "80%",
          top: "290px",
        }}
      />
      <img
        src={triangle3}
        style={{
          height: "30px",
          position: "absolute",
          left: "35%",
          top: "90px",
        }}
      />

      
     
      <img
        src={polygonDark}
        style={{ height: "290px", position: "absolute", left: "50%" }} 
      />
     
      <img
        src={triangle3}
        style={{
          height: "30px",
          position: "absolute",
          left: "80%",
          top: "790px",
        }} 
        className={classes.shape}
      />

      <img src={circleplain} style={{ height: "280px" }} className={classes.shape} />
     

      <img
        src={rectangle}
        style={{
          height: "760px",
          position: "absolute",
          top: "45%",
          left: "79%",
        }}
      />
    </div>
  );
}
