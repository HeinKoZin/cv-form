import { Grid, TextField, Button } from "@material-ui/core";
import React, { Component } from "react";
import MMNRC from "myanmar-nrc-x";
import { Save } from "@material-ui/icons";

export default class Form extends Component {
   state = {
      date: null,
      nrc: null,
      nrcValidity: null,
   };

   test = (file) => {
      this.setState({ date: URL.createObjectURL(file) });
   };

   checkNrc = (nrc) => {
      //   let mmnrc = "";

      if (nrc !== "") {
         try {
            MMNRC(nrc);
            // console.log(nrc.getFormat()); // 12/OUKAMA(N)023456
            // console.log(nrc.getFormat("mm")); // ၁၂/ဥကမ(နိုင်)၀၂၃၄၅၆
            // console.log(nrc.getState()); // Yangon
            // console.log(nrc.getState("mm")); // ရန်ကုန်တိုင်း
            this.setState({ nrcValidity: true });
         } catch (e) {
            // console.log(e.message);
            this.setState({ nrcValidity: false });
         }
      } else {
         this.setState({ nrcValidity: null });
      }
   };

   render() {
      return (
         <Grid item container spacing={3} sm={10} xs={10} md={7} lg={7}>
            <Grid item xs={12} sm={12} md={4}>
               <TextField
                  id="name"
                  label="Name"
                  fullWidth
                  variant="outlined"
                  type="text"
               />
            </Grid>
            <Grid item xs={12} sm={12} md={4}>
               <TextField
                  id="name"
                  label="Father's Name"
                  fullWidth
                  type="text"
                  variant="outlined"
               />
            </Grid>
            <Grid item xs={12} sm={12} md={4}>
               <TextField
                  id="birth"
                  label="Date of Birth"
                  type="date"
                  variant="outlined"
                  InputLabelProps={{
                     shrink: true,
                  }}
                  fullWidth
               />
            </Grid>
            <Grid item xs={12} sm={12} md={4}>
               <TextField
                  id="name"
                  label={
                     this.state.nrcValidity == null
                        ? "N.R.C No."
                        : this.state.nrcValidity === true
                        ? "N.R.C No is valid."
                        : "N.R.C No is Invalid."
                  }
                  type="text"
                  fullWidth
                  onBlur={(e) => this.checkNrc(e.target.value)}
                  variant="outlined"
                  helperText="You need to enter an invalid NRC."
               />
            </Grid>
            <Grid item xs={12} sm={12} md={4}>
               <TextField
                  id="name"
                  label="Nationality"
                  fullWidth
                  variant="outlined"
               />
            </Grid>

            <Grid item xs={12} sm={12} md={4}>
               <TextField id="name" label="Sex" fullWidth variant="outlined" />
            </Grid>
            <Grid item xs={12} sm={12} md={4}>
               <TextField
                  id="name"
                  label="Height"
                  fullWidth
                  variant="outlined"
               />
            </Grid>
            <Grid item xs={12} sm={12} md={4}>
               <TextField
                  id="name"
                  label="Weight"
                  fullWidth
                  variant="outlined"
               />
            </Grid>
            <Grid item xs={12} sm={12} md={4}>
               <TextField
                  id="name"
                  label="Marital Status"
                  fullWidth
                  variant="outlined"
               />
            </Grid>
            <Grid item xs={12} sm={12} md={4}>
               <TextField
                  id="name"
                  label="Education Qualification"
                  fullWidth
                  variant="outlined"
               />
            </Grid>
            <Grid item xs={12} sm={12} md={4}>
               <TextField
                  id="name"
                  label="Other Qualification"
                  fullWidth
                  variant="outlined"
               />
            </Grid>

            {/* For Working Experience */}

            <Grid item xs={12} sm={12} md={12}>
               <TextField
                  id="name"
                  type="text"
                  multiline={true}
                  label="Working Experience"
                  fullWidth
                  variant="outlined"
                  rows={5}
               />
            </Grid>

            <Grid item xs={12} sm={12} md={4}>
               <TextField
                  id="name"
                  label="Contact Address"
                  fullWidth
                  variant="outlined"
               />
            </Grid>
            <Grid item xs={12} sm={12} md={4}>
               <TextField
                  id="name"
                  label="Contact Phone"
                  fullWidth
                  variant="outlined"
               />
            </Grid>
            <Grid item xs={12} sm={12} md={4}>
               <TextField
                  id="name"
                  label="Photo"
                  type="file"
                  fullWidth
                  onChange={(e) => this.test(e.target.files[0])}
                  variant="outlined"
                  InputLabelProps={{
                     shrink: true,
                  }}
               />
            </Grid>
            {/* //  For Build Button Layout */}
            <Grid container item xs={12}>
               <Grid item xs={0} sm={0} md={4} />
               <Grid item xs={12} sm={12} md={4}>
                  <Button
                     variant="contained"
                     color="secondary"
                     fullWidth
                     startIcon={<Save />}
                     style={{ marginTop: 20 }}>
                     Build CV Form
                  </Button>
               </Grid>
               <Grid item xs={0} sm={0} md={4} />
            </Grid>
         </Grid>
      );
   }
}
