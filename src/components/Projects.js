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


import reptile from "../assets/lights.jpg";
import lights from "../assets/lights2.png";
import table from "../assets/table.jpg";
import gradient from "../assets/gradient.png";



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
    backgroundColor: "#2E3A59",
    padding: "2rem",

  },
  subHeading: {
    color: "#fff",
    paddingRight: "2rem",
    fontFamily: "Pacifico",
    display: "inline-block",
    marginBottom: "2rem",
    borderBottom: "3px solid #fff",
    fontWeight: "100"
  },
  container: {
    backgroundColor: "#2E3A59"
  }
}));

export default function Revolution(props) {
  const classes = useStyles();
  const theme = useTheme();
  const matchesMD = useMediaQuery(theme.breakpoints.down("md"));
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
  const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));

  

  return (
    <Grid container direction="column" className={classes.container}>
      
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
          variant="body1" style={{ fontWeight: 700 }} paragraph>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
          Lorem Ipsum has been the industry’s standard dummy. Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
          Integer mattis, sem non auctor lacinia, massa sapien congue magna, sodales. </Typography>
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
        <Typography variant="body1" paragraph style={{paddingTop: "1em", paddingBottom: "4em"}}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer mattis, sem non auctor lacinia, massa sapien congue magna, sodales bibendum nisi purus non nisi. Sed hendrerit tortor quis velit bibendum fermentum non vestibulum tellus. Ut at metus odio. Donec eu ante molestie, vestibulum dolor id, porttitor felis. Nulla egestas velit nec nisl condimentum efficitur. Duis tempor tortor quis tortor varius, ut commodo nulla ultrices. Phasellus et sagittis est, vestibulum gravida magna. Donec eget consequat ex, sit amet fermentum tellus. Donec a maximus ipsum, id cursus ante. Maecenas eleifend ligula nec fermentum finibus. Nunc venenatis varius arcu, vel sodales nulla rhoncus vel. Aenean laoreet lacus vitae elit vehicula aliquet.
      </Typography>
      
      </Grid>
      

       
        
      
     </Grid>
     
  );
}
