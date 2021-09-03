import React from "react";
import Lottie from "react-lottie";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardMedia from "@material-ui/core/CardMedia";
import { Link } from "react-router-dom";

import Button from "@material-ui/core/Button";

import vision from "../assets/vision.svg";
import consultation from "../assets/consultationIcon.svg";
import mockup from "../assets/mockupIcon.svg";
import review from "../assets/reviewIcon.svg";
import design from "../assets/designIcon.svg";
import build from "../assets/buildIcon.svg";
import launch from "../assets/launchIcon.svg";
import maintain from "../assets/maintainIcon.svg";
import iterate from "../assets/iterateIcon.svg";
import technologyAnimation from "../animations/technologyAnimation/data.json";
import customSoftwareIcon from "../assets/Custom Software Icon.svg";
import mobileAppsIcon from "../assets/mobileIcon.svg";
import websitesIcon from "../assets/websiteIcon.svg";
import revolutionBackground from "../assets/repeatingBackground.svg";
import infoBackground from "../assets/infoBackground.svg";
import background from "../assets/computer.png";
import backgroundSmall from "../assets/computer_small.png";
import wave from "../assets/wave.svg";
import waveS from "../assets/wave_small.svg";
import reptile from "../assets/lights.jpg";
import lights from "../assets/lights2.png";
import table from "../assets/table.jpg";
import gradient from "../assets/gradient.png";

import CallToAction from "./ui/CallToAction";

const useStyles = makeStyles(theme => ({
  rowContainer: {
  
    width: "100%",
  },
  cardContainer: {
    marginTop: "1.5rem"
  },
  cardItem: {
    height: "18em",
    backgroundColor: "white",
    width: "12em",
    margin: "1em",
  },
  projects: {
    backgroundColor: "white",
    padding: "2rem",
  },
  subHeading: {
    
    paddingRight: "2rem",
    fontFamily: "Pacifico",
    display: "inline-block",
    marginBottom: "2rem",
    borderBottom: "3px solid #3F3F3F",
  },
}));

export default function Revolution(props) {
  const classes = useStyles();
  const theme = useTheme();
  const matchesMD = useMediaQuery(theme.breakpoints.down("md"));
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
  const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));

  const defaultOptions = {
    loop: true,
    autoplay: false,
    animationData: technologyAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };

  return (
    <Grid container direction="column">
      
    <Grid item className={classes.projects}>
        <Typography
          variant="h2"
          align="left"
          className={classes.subHeading}
          style={
            matchesXS
              ? {
                  fontSize: "1.75rem",
                }
              : {}
          }
        >
          Projects
        </Typography>
        <Typography
          variant="body1" style={{ fontWeight: 700 }} paragraph>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer mattis, sem non auctor lacinia, massa sapien congue magna, sodales. </Typography>
        <Grid
          container
          direction="row"
          justifyContent="flex-start" 
          alignItems= "flex-start"
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
                color="primary"
                component={Link}
                to="/example"
              >
                View
              </Button>
            </CardActions>
          </Card>
        </Grid>
        <Typography variant="body1" paragraph style={{paddingTop: "1em"}}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer mattis, sem non auctor lacinia, massa sapien congue magna, sodales bibendum nisi purus non nisi. Sed hendrerit tortor quis velit bibendum fermentum non vestibulum tellus. Ut at metus odio. Donec eu ante molestie, vestibulum dolor id, porttitor felis. Nulla egestas velit nec nisl condimentum efficitur. Duis tempor tortor quis tortor varius, ut commodo nulla ultrices. Phasellus et sagittis est, vestibulum gravida magna. Donec eget consequat ex, sit amet fermentum tellus. Donec a maximus ipsum, id cursus ante. Maecenas eleifend ligula nec fermentum finibus. Nunc venenatis varius arcu, vel sodales nulla rhoncus vel. Aenean laoreet lacus vitae elit vehicula aliquet.
      </Typography>
      <Typography variant="body1" paragraph style={{paddingTop: "1em"}}>
Etiam consectetur neque id mi elementum eleifend. Donec ornare diam neque, sit amet sodales libero lacinia eget. Suspendisse finibus purus et elit tempor auctor. Pellentesque et pretium dolor. Aenean in porta tortor. In vestibulum mollis eleifend. Sed nec orci facilisis, ornare enim non, cursus justo. Integer est ligula, pharetra in lacus nec, rhoncus efficitur ligula. Pellentesque lobortis justo lacinia interdum convallis. 
      </Typography>
      </Grid>
      

       
        
      
     </Grid>
     
  );
}
