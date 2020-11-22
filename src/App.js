import { Grid } from "@material-ui/core";
import React, { Component } from "react";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Main from "./Components/Main";
export default class App extends Component {
   render() {
      return (
         <div>
            <Grid container direction="column">
               <Grid item>
                  <Header />
               </Grid>
               <Grid item>
                  <Main />
               </Grid>
               <Grid item>
                  <Footer />
               </Grid>
            </Grid>
         </div>
      );
   }
}
