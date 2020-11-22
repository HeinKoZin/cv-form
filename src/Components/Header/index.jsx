import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core";

const styles = makeStyles({
   header_title: {
      fontFamily: "Ubuntu",
   },
});
function Header() {
   const classes = styles();
   return (
      <div>
         <AppBar position="static" color="primary">
            <Toolbar>
               <Typography variant="h6" className={classes.header_title}>
                  CV Form Generator
               </Typography>
            </Toolbar>
         </AppBar>
      </div>
   );
}

export default Header;
