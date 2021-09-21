import { createMuiTheme } from "@material-ui/core/styles";

const arcBlue = "#2377bd";
const arcOrange = "#FFBA60";
const arcGrey = "#868686";
const darkGrey = "#3f3f3f"
const darkBlue = "#003c6b"

export default createMuiTheme({
  palette: {
    common: {
      blue: arcBlue,
      orange: arcOrange,
      dark: darkBlue
    },
    primary: {
      main: arcBlue,
      light: "#C1E6FEAA"
    },
    secondary: {
      main: darkBlue
    },
   
},
  // typography for tabs,estimate and body etc
  typography: {
    tab: {
      fontFamily: "Raleway",
      textTransform: "none",
      fontWeight: 700,
      color: "#fff",
      fontSize: "1.05rem"
    },
    estimate: {
      fontFamily: "Pacifico",
      fontSize: "1rem",
      textTransform: "none",
      color: "white"
    },
    h1:{
      fontFamily: "Raleway",
      fontWeight: 700,
      fontSize: "3.65rem",
      color: "#fff",
      lineHeight: 1.5,

    },
    h2: {
      fontFamily: "Raleway",
      fontWeight: 900,
      fontSize: "2.65rem",
      color: darkGrey,
      lineHeight: 1.5,
      
    },
    h3: {
      fontFamily: "Pacifico",
      fontSize: "2.5rem",
      color: "arcBlue"
    },
    h4: {
      fontFamily: "Raleway",
      fontSize: "1.75rem",
      color: "white",
      fontWeight: 700
    },
    h6: {
      fontWeight: 500,
      fontFamily: "Raleway",
      color: "white"
    },
    subtitle1: {
      fontSize: "1.25rem",
      fontWeight: 400,
      color: 'white'
    },
    subtitle2: {
      color: "white",
      fontWeight: 300,
      fontSize: "1.25rem"
    },
    subtitle3: {
      color: darkGrey,
      fontWeight: 300,
      fontSize: "1.25rem",
      fontFamily: "Raleway",
    },
    body1: {
      fontSize: "1.25rem",
      color: "#fff",
      fontWeight: 300
    },
    body2: {
      fontSize: "1rem",
      color:"#fff",
      fontWeight: 400
    },
    body3: {
      fontSize: "1rem",
      color:"#1a1a1a",
      fontWeight: 400
    },
    caption: {
      fontSize: "1rem",
      fontWeight: 300,
      color: arcGrey
    },
    learnButton: {
      borderColor: arcBlue,
      borderWidth: 2,
      textTransform: "none",
      color: arcBlue,
      borderRadius: 5,
      fontFamily: "Roboto",
      fontWeight: "bold",
      backgroundColor: "white",
      fontSize: "1rem"
    }
  },
  // overides of materialui 
  // here we are overriding muiLabel
  overrides: {
    MuiInputLabel: {
      root: {
        color: arcBlue,
        fontSize: "1rem"
      }
    },
    MuiCardActionArea: {
      height: "190px"
    },
    MuiInput: {
      root: {
        color: arcGrey,
        fontWeight: 300
      },
      underline: {
        "&:before": {
          borderBottom: `2px solid ${arcBlue}`
        },
        "&:hover:not($disabled):not($focused):not($error):before": {
          borderBottom: `2px solid ${arcBlue}`
        }
      }
    }
  }
});