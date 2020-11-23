import React from "react";

import {
   Page,
   Text,
   View,
   Document,
   StyleSheet,
   PDFDownloadLink,
   PDFViewer,
   Image,
} from "@react-pdf/renderer";
import { Grid, Button } from "@material-ui/core";

// Create styles
const styles = StyleSheet.create({
   page: {
      flexDirection: "row",
      backgroundColor: "#ffffff",
   },
   section: {
      margin: 10,
      marginTop: 10,
      padding: 20,
      paddingTop: 120,
      flexGrow: 1,
   },
   title: {
      textAlign: "center",
      fontSize: "25pt",
      position: "absolute",
      top: 15,
      marginLeft: 5,
      textDecoration: "underline",
   },
   view: {
      flexDirection: "row",
      justifyContent: "space-between",
      fontSize: "13pt",
      marginTop: 15,
   },
   photo: {
      width: 75,
      height: 75,
      position: "absolute",
      top: 10,
      right: 10,
   },
   data: {
      width: 340,
   },
});
// Create Document Component
const MyDocument = (props) => (
   <Document author="Hein Ko Zin">
      <Page size="A4" style={styles.page}>
         <View style={styles.section}>
            <Text style={styles.title}>CURRICULUM VITAE</Text>
            <Image
               src={props.data.photo === null ? "" : props.data.photo}
               style={styles.photo}
            />
            <View style={styles.view}>
               <Text>Name</Text>
               <Text style={styles.data}>: {props.data.name}</Text>
            </View>
            <View style={styles.view}>
               <Text>Father's Name</Text>
               <Text style={styles.data}>: {props.data.father_name}</Text>
            </View>
            <View style={styles.view}>
               <Text>Birthday</Text>
               <Text style={styles.data}>: {props.data.birthday}</Text>
            </View>
            <View style={styles.view}>
               <Text>N.R.C No.</Text>
               <Text style={styles.data}>: {props.data.nrc}</Text>
            </View>
            <View style={styles.view}>
               <Text>Nationality</Text>
               <Text style={styles.data}>: {props.data.nationality}</Text>
            </View>
            <View style={styles.view}>
               <Text>Sex</Text>
               <Text style={styles.data}>: {props.data.sex}</Text>
            </View>
            <View style={styles.view}>
               <Text>Height</Text>
               <Text style={styles.data}>: {props.data.height}</Text>
            </View>
            <View style={styles.view}>
               <Text>Weight</Text>
               <Text style={styles.data}>: {props.data.weight}</Text>
            </View>
            <View style={styles.view}>
               <Text>Education Qualification</Text>
               <Text style={styles.data}>: {props.data.education}</Text>
            </View>
            <View style={styles.view}>
               <Text>Other Qualification</Text>
               <Text style={styles.data}>: {props.data.other_education}</Text>
            </View>
            <View style={styles.view}>
               <Text>Contact Address</Text>
               <Text style={styles.data}>: {props.data.contact_address}</Text>
            </View>
            <View style={styles.view}>
               <Text>Working Experience</Text>
               <Text style={styles.data}>
                  :{" "}
                  {props.data.working_experience === ""
                     ? "No working experience."
                     : props.data.working_experience}
               </Text>
            </View>
            <View style={styles.view}>
               <Text>Contact Phone</Text>
               <Text style={styles.data}>: {props.data.contact_phone}</Text>
            </View>
            <View style={styles.view}>
               <Text>Apply Post</Text>
               <Text style={styles.data}>
                  :{" "}
                  {props.data.apply_post === ""
                     ? "..................................................................."
                     : props.data.apply_post}
               </Text>
            </View>
            <Text style={{ position: "absolute", right: 10, bottom: 70 }}>
               ___________
            </Text>
            <Text
               style={{
                  position: "absolute",
                  right: 15,
                  bottom: 50,
                  fontSize: "13pt",
               }}>
               (Signature)
            </Text>
            <Text
               style={{
                  position: "absolute",
                  textAlign: "center",
                  bottom: 6,
                  fontSize: "9pt",
               }}>
               Generated with PY780N CV
            </Text>
         </View>
      </Page>
   </Document>
);

const PDFForm = (props) => (
   <Grid item container>
      <PDFDownloadLink
         document={<MyDocument data={props.data} />}
         fileName="CV Form (Created by cv-form-generator.web.app).pdf">
         {({ blob, url, loading, error }) =>
            loading ? (
               "Loading document..."
            ) : (
               <Button
                  style={{
                     textDecoration: "none",
                     marginTop: 20,
                     marginBottom: 20,
                  }}
                  variant="contained"
                  color="secondary">
                  Download Now
               </Button>
            )
         }
      </PDFDownloadLink>
      <PDFViewer
         width="100%"
         height="600px
      ">
         <MyDocument data={props.data} />
      </PDFViewer>
   </Grid>
);

export default PDFForm;
