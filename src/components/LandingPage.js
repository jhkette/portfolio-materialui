import React, { useRef } from "react";

import { makeStyles, useTheme } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import ButtonArrow from "../components/ui/ButtonArrow";
import Typography from "@material-ui/core/Typography";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardMedia from "@material-ui/core/CardMedia";
import { useSpring, animated } from "@react-spring/web";

import customSoftwareIcon from "../assets/Custom Software Icon.svg";
import mobileAppsIcon from "../assets/mobileIcon.svg";

import revolutionBackground from "../assets/repeatingBackground.svg";
import infoBackground from "../assets/infoBackground.svg";

import wave from "../assets/wave.svg";
import waveS from "../assets/wave_small.svg";
import reptile from "../assets/lights.jpg";
import lights from "../assets/lights2.png";
import table from "../assets/table.jpg";
import gradient from "../assets/gradient.png";
import coding from "../assets/drawing.svg";
import codingDark from "../assets/drawingcopy.svg";
import polygon from "../assets/polygon.svg";
import polygonDark from "../assets/polygon_dark.svg";
import circle from "../assets/circle.svg";
import triangle from "../assets/triangle.svg";
import triangle2 from "../assets/triangle2.svg";
import triangle3 from "../assets/triangle3.svg";
import arrow from "../assets/arrow.svg";
import up from "../assets/up.svg";

const useStyles = makeStyles((theme) => ({
  main: {
    position: "relative",
    top: "-65px",
  },
  estimateButton: {
    ...theme.typography.estimate,
    backgroundColor: theme.palette.common.orange,
    borderRadius: 50,
    height: 45,
    width: 145,
    marginRight: 40,
    "&:hover": {
      backgroundColor: theme.palette.secondary.light,
    },
  },
  buttonContainer: {
    marginTop: "1em",
    [theme.breakpoints.down("xs")]: {
      // justifyContent: "",
      marginLeft: "-3rem",
      zIndex: "1000",
    },
  },
  learnButtonHero: {
    ...theme.typography.learnButton,
    height: 45,
    width: 150,
    "&:hover": {
      backgroundColor: theme.palette.primary.light,
    },

    [theme.breakpoints.down("xs")]: {
      justifyContent: "flex-start",
      position: "absolute",
      left: "1.15rem",
      zIndex: "250",
      fontSize: ".8rem",
    },
  },
  learnButton: {
    ...theme.typography.learnButton,
    fontSize: "0.95rem",
    height: "40px",
    width: "145px",
    marginTop: "1em",
    [theme.breakpoints.down("sm")]: {
      marginBottom: "2em",
    },
  },

  stripe4: {
    height: "3.8rem",
    width: "100%",
    backgroundColor: theme.palette.common.dark,
    position: "relative",
    top: "-5.7rem",

    transform: "skewY(-1.5deg)",
  },
  mainContainer: {
    marginTop: "5em",
    [theme.breakpoints.down("md")]: {
      marginTop: "3em",
    },
    [theme.breakpoints.down("xs")]: {
      marginTop: "2em",
    },
  },
  heroContainer: {
    backgroundColor: theme.palette.common.blue,
  },
  shapeContainer: {
    position: "absolute",
    width: "100%",
    height: "45rem",

    zIndex: "-100",
  },
  stripe: {
    width: "100%",
    background:
      "linear-gradient(to top right, #003C6B calc(50% - 1px),  #14171F calc(50% + 1px) )",
    height: "100px",
  },
  stripe2: {
    width: "100%",
    background:
      "linear-gradient(to top left, #2377BD calc(50% - 1px),  #003C6B calc(50% + 1px) )",
    height: "100px",
  },

  stripe3: {
    width: "100%",
    background:
      "linear-gradient(to top right, #fff calc(50% - 1px),  #2377BD calc(50% + 1px) )",
    height: "100px",
  },
  heroTextContainer: {
    minWidth: "21.5em",
    marginLeft: "1em",
    position: "relative",
    [theme.breakpoints.down("md")]: {
      marginTop: "3em",
    },
    [theme.breakpoints.down("xs")]: {
      marginLeft: 0,
    },
  },
  specialText: {
    fontFamily: "Pacifico",
    color: theme.palette.common.orange,
  },
  subtitle: {
    marginBottom: "1em",
  },
  icon: {
    marginLeft: "2em",
    [theme.breakpoints.down("xs")]: {
      marginLeft: 0,
    },
  },
  serviceContainer: {
    paddingTop: "6em",
    paddingBottom: "6em",
    backgroundColor: "#2176BD",

    [theme.breakpoints.down("sm")]: {
      paddingTop: "5em",
      paddingBottom: "2em",
    },
  },
  projects: {
    backgroundColor: theme.palette.common.dark,
    paddingBottom: "2em",
  },
  revolutionBackground: {
    backgroundImage: `url(${revolutionBackground})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    height: "100%",
    width: "100%",
  },
  revolutionCard: {
    boxShadow: theme.shadows[10],
    borderRadius: 15,
    padding: "1em",
    width: "14em",
    zIndex: "200",
    [theme.breakpoints.down("sm")]: {},
  },
  mainTitle: {
    [theme.breakpoints.down("md")]: {
      marginTop: "2em",
    },
  },
  infoBackground: {
    backgroundImage: `url(${infoBackground})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    height: "100%",
    width: "100%",
  },

  wave: {
    backgroundColor: "#2e3a59",
    backgroundImage: `url(${wave})`,
    zIndex: "10",
    [theme.breakpoints.down("sm")]: {
      backgroundImage: `url(${waveS})`,
    },
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    height: "42rem",
    width: "100%",
    position: "relative",
  },

  cardContainer: {
    // minHeight: "45em",
    backgroundColor: theme.palette.common.dark,
    padding: "0rem 1rem",
    position: "relative",
  },
  cardItem: {
    height: "18em",
    backgroundColor: "white",
    width: "12em",
    margin: "1em",
    zIndex: "300",
    position: "relative",
  },
  footerTransition: {
    height: "12em",
    width: "100%",
    backgroundColor: theme.palette.common.blue,
    transform: "skewY(4deg)",
    position: "relative",
    top: "-3.5rem",
  },
  subHeading: {
    margin: "0 2rem",
    paddingRight: "2rem",
    fontFamily: "Pacifico",
    display: "inline-block",
    borderBottom: "3px solid #3F3F3F",
    fontWeight: "100",
  },
}));

export default function LandingPage(props) {
  const classes = useStyles();
  const theme = useTheme();
  const matchesMD = useMediaQuery(theme.breakpoints.down("md"));
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
  const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));

  const styles = useSpring({
    
  
    config: { duration: 7000 },

    from: { transform: "translate(0,40%)" },
    to: [{ transform: "translate(0,70%)" }, { transform: "translate(0,40%)" }],
    loop: true,
  });

  const styles1 = useSpring({
   
    config: { duration: 7000 },
    from: { transform: "translate(0,20%)" },
    to: [{ transform: "translate(0,-40%)" }, { transform: "translate(0,20%)" }],
    loop: true,
  });

  const styles2 = useSpring({
    from: { transform: "translate(0,20%)" },
    to: [{ transform: "translate(0,-20%)" }, { transform: "translate(0,20%)" }],
    config: { duration: 8500 },
   
    loop: true
  });

  const styles3 = useSpring({ 
    config: { duration: 7000 },
    from: { transform: "translate(0,30%)" },
    to: [{ transform: "translate(0,-30%)" }, { transform: "translate(0,30%)" }],
    loop: true
  });

  const styles4 = useSpring({
    config: { duration: 6000 },
    from: { transform: "translate(0,35%)" },
    to: [{ transform: "translate(0,-40%)" }, { transform: "translate(0,35%)" }],
   
    loop: true,
  });
  // for grid info see https://material-ui.com/components/grid/
  // a grid system that uses flexbox
  //  the api is here https://material-ui.com/api/grid/
  // good blog https://www.dmcinfo.com/latest-thinking/blog/id/10114/a-simple-guide-to-material-ui-grids
  // <Grid container justify="flex-end" alignItems="center" direction="row"> -- this is the container

  return (
    <Grid container direction="column" className={classes.main}>
      <Grid item className={classes.heroContainer}>
        {" "}
        {/*-----Hero Block-----*/}
        <Grid
          container
          justify="space-around"
          alignItems="center"
          direction="row"
          className={classes.wave}
          style={{ position: "relative" }}
        >
          <div className={classes.shapeContainer}>
            <animated.div
              style={{
                width: 190,
                height: 190,
                display: "flex",
                justifyContent: "center",
                position: "absolute",
                color: "blue",
                left: "75%",
                top: "12rem",
                zIndex: "900",
                ...styles4,
              }}
            >
              <img src={coding} style={{ height: "95px" }} />
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
              <img src={coding} style={{ height: "105px" }} />
            </animated.div>
            <animated.div
              style={{
                width: 140,
                height: 140,
                display: "flex",
                justifyContent: "center",

                position: "absolute",
                left: "85%",
                top: "3rem",
                zIndex: "900",
                ...styles1,
              }}
            >
              <img src={arrow} style={{ height: "100px" }} />
            </animated.div>
            <animated.div
              style={{
                display: "flex",
                justifyContent: "center",

                position: "absolute",
                left: "85%",
                top: "18rem",
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
                left: "59%",
                top: "22rem",
                ...styles3,
              }}
            >
              <img src={triangle} style={{ height: "120px" }} />
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
              <img src={arrow} style={{ height: "120px" }} />
            </animated.div>
            <animated.div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                position: "absolute",
                left: "5%",
                top: "2rem",
                ...styles,
              }}
            >
              <img src={polygon} style={{ height: "150px" }} />
            </animated.div>
            <animated.div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                position: "absolute",
                left: "-5%",
                top: ".5rem",
                ...styles,
              }}
            >
              <img src={circle} />
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
              <img src={triangle2} style={{ height: "100px" }} />
            </animated.div>
            <animated.div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                position: "absolute",
                left: "90%",
                top: "32rem",
                ...styles2,
              }}
            >
              <img src={triangle2} style={{ height: "90px" }} />
            </animated.div>
            <img src={polygonDark} />
            <img
              src={triangle3}
              style={{
                height: "30px",
                position: "absolute",
                left: "70%",
                top: "190px",
              }}
            />
            <img src={polygonDark} style={{ height: "30px" }} />
            <img
              src={codingDark}
              style={{
                height: "20px",
                position: "absolute",
                left: "25%",
                top: "190px",
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
            <img src={polygonDark} style={{ height: "30px" }} />
            <img
              src={codingDark}
              style={{
                height: "20px",
                position: "absolute",
                left: "350px",
                top: "290px",
              }}
            />
            <img
              src={triangle3}
              style={{
                height: "30px",
                position: "absolute",
                left: "150px",
                top: "490px",
              }}
            />
            <img src={polygonDark} style={{ height: "30px" }} />
            <img src={codingDark} style={{ height: "50px" }} />
            <img
              src={triangle3}
              style={{
                height: "30px",
                position: "absolute",
                left: "80%",
                top: "790px",
              }}
            />
            <img src={polygonDark} style={{ height: "30px" }} />
            <img src={codingDark} style={{ height: "50px" }} />
          </div>

          {/* Lazy Layouts (Auto-layout) 
          here the breakpoints xs */}
          <Grid xs item className={classes.heroTextContainer}>
            <Typography
              variant="h1"
              align="center"
              style={
                matchesXS
                  ? {
                      fontSize: "1.75rem",
                      textAlign: "left",
                      marginLeft: "1rem",
                    }
                  : {}
              }
            >
              <span
                style={
                  matchesXS ? { fontSize: "2.25" } : { fontSize: "4.9rem" }
                }
              >
                Hello!
              </span>
              <br />
              My Name is John Doe
            </Typography>
            <Grid
              container
              justify="center"
              className={classes.buttonContainer}
            >
              <Grid item>
                <Button
                  component={Link}
                  to="/revolution"
                  className={classes.learnButtonHero}
                  variant="outlined"
                  onClick={() => props.setValue(2)}
                >
                  <span style={{ marginRight: 10 }}>Learn More</span>
                  <ButtonArrow
                    width={15}
                    height={15}
                    fill={theme.palette.common.blue}
                  />
                </Button>
              </Grid>
            </Grid>
          </Grid>
          <Grid
            xs={12}
            md={5}
            lg={5}
            item
            className={classes.mainContainer}
          ></Grid>
        </Grid>
      </Grid>
      <div className={classes.stripe} />
      <Grid item className={classes.projects}>
        <Typography
          variant="h2"
          align="left"
          className={classes.subHeading}
          style={
            matchesXS
              ? {
                  fontSize: "1.75rem",

                  color: "white",
                }
              : {
                  color: "white",
                }
          }
        >
          Projects
        </Typography>
        <Grid
          container
          direction="row"
          justifyContent={matchesSM ? "center" : "flex-start"}
          alignItems={matchesXS ? "center" : "flex-start"}
          className={classes.cardContainer}
        >
          <Card className={classes.cardItem}>
            <CardActionArea component={Link} to="/example">
              <CardMedia
                component="img"
                alt="Contemplative Reptile"
                height="170"
                image={reptile}
                title="Contemplative Reptile"
              />
              <CardContent>
                <Typography variant="body2">Hello</Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button
                size="small"
                variant="outlined"
                color="primary"
                component={Link}
                to="/example"
              >
                View
              </Button>
            </CardActions>
          </Card>

          <Card className={classes.cardItem}>
            <CardActionArea component={Link} to="/example">
              <CardMedia
                component="img"
                alt="Contemplative Reptile"
                height="170"
                image={table}
                title="Contemplative Reptile"
              />
              <CardContent>
                <Typography variant="body2">Hello</Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button
                size="small"
                variant="outlined"
                color="primary"
                component={Link}
                to="/example"
              >
                View
              </Button>
            </CardActions>
          </Card>

          <Card className={classes.cardItem}>
            <CardActionArea component={Link} to="/example">
              <CardMedia
                component="img"
                alt="Contemplative Reptile"
                height="170"
                image={lights}
                title="Contemplative Reptile"
              />
              <CardContent>
                <Typography variant="body2">Hello</Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button
                size="small"
                variant="outlined"
                color="primary"
                component={Link}
                to="/example"
              >
                View
              </Button>
            </CardActions>
          </Card>

          <Card className={classes.cardItem}>
            <CardActionArea component={Link} to="/example">
              <CardMedia
                component="img"
                alt="Contemplative Reptile"
                height="170"
                image={gradient}
                title="Contemplative Reptile"
              />
              <CardContent>
                <Typography variant="body2">Hello</Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button
                size="small"
                variant="outlined"
                color="primary"
                component={Link}
                to="/example"
              >
                View
              </Button>
            </CardActions>
          </Card>
          <Card className={classes.cardItem}>
            <CardActionArea component={Link} to="/example">
              <CardMedia
                component="img"
                alt="Contemplative Reptile"
                height="170"
                image={lights}
                title="Contemplative Reptile"
              />
              <CardContent>
                <Typography variant="body2">Hello</Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button
                size="small"
                color="primary"
                variant="outlined"
                component={Link}
                to="/example"
              >
                View
              </Button>
            </CardActions>
          </Card>

          <Card className={classes.cardItem}>
            <CardActionArea component={Link} to="/example">
              <CardMedia
                component="img"
                alt="Contemplative Reptile"
                height="170"
                image={gradient}
                title="Contemplative Reptile"
              />
              <CardContent>
                <Typography variant="body2">Hello</Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button
                size="small"
                variant="outlined"
                color="primary"
                component={Link}
                to="/example"
              >
                View
              </Button>
            </CardActions>
          </Card>
          <Card className={classes.cardItem}>
            <CardActionArea component={Link} to="/example">
              <CardMedia
                component="img"
                alt="Contemplative Reptile"
                height="170"
                image={reptile}
                title="Contemplative Reptile"
              />
              <CardContent>
                <Typography variant="body2">Hello</Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button
                size="small"
                variant="outlined"
                color="primary"
                component={Link}
                to="/example"
              >
                View
              </Button>
            </CardActions>
          </Card>

          <Card className={classes.cardItem}>
            <CardActionArea component={Link} to="/example">
              <CardMedia
                component="img"
                alt="Contemplative Reptile"
                height="170"
                image={table}
                title="Contemplative Reptile"
              />
              <CardContent>
                <Typography variant="body2">Hello</Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button
                size="small"
                variant="outlined"
                color="primary"
                component={Link}
                to="/example"
              >
                View
              </Button>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
      <div className={classes.stripe2} />
      <Grid item style={{ backgroundColor: theme.palette.common.blue }}>
        {" "}
        {/*-----Custom Software Block-----*/}
        <Grid
          container
          direction="row"
          justify={matchesSM ? "center" : undefined}
          className={classes.serviceContainer}
          style={{ padding: "2em" }}
        >
          <Grid item>
            <Typography
              variant="h4"
              style={matchesXS ? { textAlign: "left" } : {}}
            >
              Custom Software Development
            </Typography>
            <Typography
              variant="subtitle1"
              className={classes.subtitle}
              style={matchesXS ? { textAlign: "left" } : {}}
            >
              Save Energy. Save Time. Save Money.
            </Typography>
            <Typography
              variant="subtitle1"
              style={matchesXS ? { textAlign: "left" } : {}}
            >
              Complete digital solutions, from investigation to{" "}
              <span className={classes.specialText}>celebration.</span>
            </Typography>
            <Button
              component={Link}
              to="/customsoftware"
              variant="outlined"
              className={classes.learnButton}
              onClick={() => {
                props.setValue(1);
                props.setSelectedIndex(1);
              }}
            >
              <span style={{ marginRight: 10 }}>Learn More</span>
              <ButtonArrow
                width={10}
                height={10}
                fill={theme.palette.common.blue}
              />
            </Button>
          </Grid>
          <Grid item>
            <img
              className={classes.icon}
              alt="custom software icon"
              src={customSoftwareIcon}
              style={{ marginLeft: matchesXS ? "3rem" : undefined }}
            />
          </Grid>
        </Grid>
      </Grid>

      <Grid item>
        {" "}
        {/*-----iOS/Android Block-----*/}
        <Grid
          container
          direction="row"
          justify={matchesSM ? "center" : "flex-end"}
          className={classes.serviceContainer}
        >
          <Grid
            item
            style={{
              textAlign: matchesSM ? "center" : undefined,
              width: matchesSM ? undefined : "35em",
            }}
          >
            <Typography variant="h4">iOS/Android App Development</Typography>
            <Typography variant="subtitle1" className={classes.subtitle}>
              Extend Functionality. Extend Access. Increase Engagement.
            </Typography>
            <Typography variant="subtitle1">
              Integrate your web experience or create a standalone app
              {matchesSM ? null : <br />}with either mobile platform.
            </Typography>
            <Button
              component={Link}
              to="/mobileapps"
              variant="outlined"
              className={classes.learnButton}
              onClick={() => {
                props.setValue(1);
                props.setSelectedIndex(2);
              }}
            >
              <span style={{ marginRight: 10 }}>Learn More</span>
              <ButtonArrow
                width={10}
                height={10}
                fill={theme.palette.common.blue}
              />
            </Button>
          </Grid>
          <Grid item style={{ marginRight: matchesSM ? 0 : "5em" }}>
            <img
              className={classes.icon}
              alt="mobile phone icon"
              src={mobileAppsIcon}
              width="250em"
            />
          </Grid>
        </Grid>
      </Grid>
      <div className={classes.stripe3} />
    </Grid>
  );
}
