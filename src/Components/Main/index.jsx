import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Form from "../Form";
import { makeStyles } from "@material-ui/core";

const styles = makeStyles({
   main_title: {
      marginTop: 40,
      marginBottom: 50,
      fontFamily: "Ubuntu",
   },
});

export default function Main() {
   const classes = styles();
   return (
      <Grid
         container
         alignContent="center"
         alignItems="center"
         direction="column">
         <Grid item>
            {" "}
            <Typography
               variant="h4"
               color="initial"
               gutterBottom={true}
               paragraph={true}
               className={classes.main_title}>
               CV Form Generator
            </Typography>
         </Grid>
         <Form />
      </Grid>
   );
}
