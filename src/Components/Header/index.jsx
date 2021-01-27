import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { makeStyles, Switch, Grid } from "@material-ui/core";
import { Description } from "@material-ui/icons";
import FlagIcon from "../../Components/FlagIcon";

const styles = makeStyles({
   header_title: {
      fontFamily: "Ubuntu",
      flex: 1,
   },
});
function Header(props) {
   const classes = styles();
   return (
      <div>
         <AppBar position="static" color="primary">
            <Toolbar>
               <Description />
               <Typography
                  variant="h6"
                  className={classes.header_title}
                  alignItems="center"
                  components="label">
                  PY780N CV
               </Typography>

               <div>
                  <Grid
                     container
                     component="label"
                     alignItems="center"
                     spacing={1}>
                     <Grid item>
                        <FlagIcon code="us" Component="span" />
                     </Grid>
                     <Grid item>
                        <Switch
                           onChange={(e) =>
                              props.changeLanguage(e.target.checked)
                           }
                           checked={props.checked}
                           // disabled
                        />
                     </Grid>
                     <Grid item>
                        <FlagIcon code="mm" />
                     </Grid>
                  </Grid>
               </div>
            </Toolbar>
         </AppBar>
      </div>
   );
}

export default Header;
