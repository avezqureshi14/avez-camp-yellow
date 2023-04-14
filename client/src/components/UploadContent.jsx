import React from "react";
import { Button, Input, InputLabel, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import GetAppIcon from '@material-ui/icons/GetApp';
import IconButton from "@material-ui/core/IconButton";
import RangeSlider from "./RangeSlider";
const useStyles = makeStyles((theme) => ({
  outlinedButton: {
    color: "#fff", // text color
    borderColor: "#fff", // border color

    textTransform: "uppercase",
    marginTop:'2rem'

  },
  filledButton: {
    color: "#fff",
    background: "#4e34e1",
    marginRight: "10px",
    marginBottom:'0.5rem',
    '&:hover': {
        background: '#1c00b8',
      },
  },
  link:{
    cursor:'pointer',
    color:'#fff',
    textDecoration:'underline'
  },
  gradientButton: {
    background: 'linear-gradient(to right, #f54ea2, #ff7676, #ffae7f)',
    color: '#fff',
    '&:hover': {
      background: 'linear-gradient(to right, #f54ea2, #ff7676, #ffae7f)',
    },
    marginTop:'2rem',
    marginBottom:'1rem',

  },
  icon: {
    color: '#fff',
  },


}));
const UploadContent = () => {
  const classes = useStyles();
  return (
    <>
          <Input type="text" placeholder="Enter Your App Name"></Input>
          
            <div className="uploadGame">
              <h1>Upload Game Files</h1>
              <div className="upload_btns">
                <Button variant="contained" className={classes.filledButton}>
                  CSV for Story
                </Button>
                <Button variant="contained" className={classes.filledButton}>
                  Game Assets
                </Button>
                <Button variant="contained" className={classes.filledButton}>
                  App Icon
                </Button>
              </div>
   
     
            </div>
            <Button variant="contained" className={`${classes.gradientButton}  grdBtn`}>
            Click to Build Game
          </Button>
    <Typography
          variant="body1"
          color="primary"
          className={classes.link}
        >
        Download sample files
        <IconButton
        className={classes.icon}
          href="https://example.com/sample-files.zip"
          download
        >
          <GetAppIcon />
        </IconButton>
        </Typography>

        <RangeSlider/>
        <h5>02:00 minutes remaining</h5>
    </>
  );
};

export default UploadContent;
