import React from "react";
import Lottie from "react-lottie";
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

import CallToAction from "./ui/CallToAction";

import animationData from "../animations/landinganimation/data";
import customSoftwareIcon from "../assets/Custom Software Icon.svg";
import mobileAppsIcon from "../assets/mobileIcon.svg";
import websitesIcon from "../assets/websiteIcon.svg";
import revolutionBackground from "../assets/repeatingBackground.svg";
import infoBackground from "../assets/infoBackground.svg";
import background from "../assets/computer.png";
import backgroundSmall from "../assets/computer_small.png";
import wave from "../assets/wave.svg";
import waveS from "../assets/wave_small.svg";
import reptile from "../assets/contemplative-reptile.jpeg";

const useStyles = makeStyles((theme) => ({
  animation: {
    maxWidth: "50em",
    minWidth: "21em",
    marginTop: "2em",
    marginLeft: "10%",
    [theme.breakpoints.down("sm")]: {
      maxWidth: "30em",
    },
  },
  main:{
    position: "relative",
    top: "-65px"
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
    fontSize: "1rem",
    height: 45,
    width: 150,

    [theme.breakpoints.down("xs")]: {
      justifyContent: "flex-start",
      position: "absolute",
      left: "1.15rem",
      zIndex: "250",
      fontSize: "1rem",
    },
  },
  learnButton: {
    ...theme.typography.learnButton,
    fontSize: "0.7rem",
    height: 25,
    padding: 2,
    [theme.breakpoints.down("sm")]: {
      marginBottom: "2em",
    },
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
  heroContainer:{
    paddingBottom: "2.5em",
    backgroundColor: theme.palette.common.blue
  },
  heroTextContainer: {
    minWidth: "21.5em",
    marginLeft: "1em",
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
  projects:{
    backgroundColor: theme.palette.common.green,
    padding: "2em"
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
  mainContainer: {
    // backgroundImage: `url(${background})`,
    // backgroundPosition: "center",
    // backgroundSize: "cover",
    // backgroundRepeat: "no-repeat",
    // minHeight: "35em",
    // width: "100%"
  },
  wave: {
    backgroundColor: theme.palette.primary.light,
    backgroundImage: `url(${wave})`,
    zIndex: "10",
    [theme.breakpoints.down("sm")]: {
      backgroundImage: `url(${waveS})`,
    },
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    height: "30em",
    width: "100%",
  },
  cardContainer: {
    // minHeight: "45em",
    backgroundColor: theme.palette.common.tertiary,
    padding: "2em 0",
  },
  cardItem: {
    height: "18em",
    backgroundColor: "white",
    width: "15em",
    margin: "1em"
  },
}));

export default function LandingPage(props) {
  const classes = useStyles();
  const theme = useTheme();
  const matchesMD = useMediaQuery(theme.breakpoints.down("md"));
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
  const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));

  // for grid info see https://material-ui.com/components/grid/
  // a grid system that uses flexbox
  //  the api is here https://material-ui.com/api/grid/
  // good blog https://www.dmcinfo.com/latest-thinking/blog/id/10114/a-simple-guide-to-material-ui-grids
  // <Grid container justify="flex-end" alignItems="center" direction="row"> -- this is the container

  return (
    <Grid container direction="column" className={classes.main}>
      <Grid item  className={classes.heroContainer}>
        {" "}
        {/*-----Hero Block-----*/}
        <Grid
          container
          justify="space-around"
          alignItems="center"
          direction="row"
          className={classes.wave}
          style={{ position: "relative"}}
        >
          {/* Lazy Layouts (Auto-layout) 
          here the breakpoints xs */}
          <Grid xs item className={classes.heroTextContainer}>
            <Typography
              variant="h2"
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
              Bringing West Coast Technology
              <br />
              to the Midwest
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
          <Grid xs={12} md={5} lg={5} item className={classes.mainContainer}>
            {matchesSM ? (
              <img
                src={backgroundSmall}
                style={{
                  height: "280px",
                  marginTop: "6.9rem",
                  position: "absolute",
                  top: "6rem",
                  left: "12rem",
                  zIndex: -50,
                }}
              />
            ) : (
              <img
                src={background}
                style={{ height: "355px", marginTop: "2rem" }}
              />
            )}
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
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
      
      <Grid item className={classes.projects} >
      <Typography
              variant="h2"
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
          Projects
        </Typography>
        <Grid
          container
          direction="row"
          justifyContent="space-around"
          alignItems="center"
          className={classes.cardContainer}
        >
          <Card className={classes.cardItem}>
            <CardContent>
              <p>Hello</p>
            </CardContent>
            <CardActions>
              <Button size="small" color="primary">
                View
              </Button>
            </CardActions>
          </Card>

          <Card className={classes.cardItem}>
            <CardActionArea>
              <CardMedia
                component="img"
                alt="Contemplative Reptile"
                height="140"
                image={reptile}
                title="Contemplative Reptile"
              />
              <CardContent>
                <p>Hello</p>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary">
                View
              </Button>
            </CardActions>
          </Card>

          <Card className={classes.cardItem}>
            <CardContent>
              <p>Hello</p>
            </CardContent>
            <CardActions>
              <Button size="small" color="primary">
                View
              </Button>
            </CardActions>
          </Card>

          <Card className={classes.cardItem}>
            <CardContent>
              <p>Hello</p>
            </CardContent>
            <CardActions>
              <Button size="small" color="primary">
                View
              </Button>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
  

      <Grid item>
        {/*-----Call To Action Block-----*/}
        <CallToAction setValue={props.setValue} />
      </Grid>
    </Grid>
  );
}
