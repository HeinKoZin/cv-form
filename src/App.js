import { Grid } from "@material-ui/core";
import React, { Component } from "react";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Main from "./Components/Main";
export default class App extends Component {
   state = {
      checked: false,
   };
   changeLanguage = (checked) => {
      this.setState({ checked: checked });
   };
   render() {
      return (
         <div>
            <Grid container direction="column">
               <Grid item>
                  <Header
                     changeLanguage={this.changeLanguage}
                     checked={this.state.checked}
                  />
               </Grid>
               <Grid item>
                  <Main checked={this.state.checked} />
               </Grid>
               <Grid item xs={12}></Grid>
               <Grid item>
                  <Footer />
               </Grid>
            </Grid>
         </div>
      );
   }
}
