import React, { useEffect, useState } from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Form from "../Form";
import { makeStyles } from "@material-ui/core";
import { Description } from "@material-ui/icons";
import knayi from "knayi-myscript";

const styles = makeStyles((theme) => ({
   main_title: {
      marginTop: 40,
      textAlign: "center",
      marginBottom: 30,
      fontFamily: "Ubuntu",
      [theme.breakpoints.down("md")]: {
         fontSize: "1.5em",
      },
   },
   inform: {
      marginBottom: 30,
      fontSize: 18,
      textAlign: "center",
      [theme.breakpoints.down("md")]: {
         fontSize: 14,
      },
   },
}));

export default function Main(props) {
   const classes = styles();

   return (
      <Grid
         container
         alignContent="center"
         alignItems="center"
         direction="column">
         <Grid item sm={10} xs={11}>
            {" "}
            <Grid
               container
               direction="row"
               alignItems="center"
               className={classes.main_title}>
               <Description />
               <Typography variant="h4" color="initial">
                  CV Form Generator
               </Typography>
            </Grid>
            <Typography variant="h6" color="initial" className={classes.inform}>
               {props.checked === true
                  ? "ကျေးဇူးပြု၍ အချက်အလက်များကို မြန်မာလိုဖြည့်ပါ။"
                  : "Please enter your information in English."}
            </Typography>
         </Grid>
         <Form checked={props.checked} />
      </Grid>
   );
}
