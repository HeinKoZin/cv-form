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
   Font,
} from "@react-pdf/renderer";
import { Grid, Button } from "@material-ui/core";
import photo from "../../images/thumb.png";
import font from "../../fonts/Myanmar3_2018.ttf";
// Create styles

Font.register({
   family: "Myanmar3",
   src: font,
   fontStyle: "normal",
   fontWeight: 700,
});

const styles = StyleSheet.create({
   page: {
      flexDirection: "row",
      backgroundColor: "#ffffff",
      fontFamily: "Myanmar3",
   },
   section: {
      margin: 10,
      marginTop: 10,
      padding: 20,
      paddingTop: 65,
      flexGrow: 1,
   },
   title: {
      width: "100%",
      textAlign: "center",
      fontSize: "25pt",
      position: "absolute",
      top: 15,
      marginLeft: 25,
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
      top: 30,
      right: 20,
      objectFit: "cover",
   },
   data: {
      width: 340,
      // fontFamily: "Padauk",
      "&::before": {
         content: `:`,
      },
   },
   footer: {
      position: "absolute",
      textAlign: "center",
      bottom: 6,
      fontSize: "9pt",
      marginLeft: 30,
   },
});

// Create Document Component
const MyDocument = (props) => (
   <Document author="Hein Ko Zin">
      <Page size="A4" style={styles.page}>
         <View style={styles.section}>
            <Text style={styles.title}>CURRICULUM VITAE</Text>
            <Image
               src={props.data.photo === null ? photo : props.data.photo}
               style={styles.photo}
            />
            <View style={styles.view}>
               <Text>{props.checked === true ? "အမည်" : "Name"}</Text>
               <Text style={styles.data}>: {props.data.name}</Text>
            </View>
            <View style={styles.view}>
               <Text>
                  {props.checked === true ? "အဖ အမည်" : "Father's Name"}
               </Text>
               <Text style={styles.data}>: {props.data.father_name}</Text>
            </View>
            <View style={styles.view}>
               <Text>
                  {props.checked === true ? "မွေးသက္ကရာဇ်" : "Birthday"}
               </Text>
               <Text style={styles.data}>: {props.data.birthday}</Text>
            </View>
            <View style={styles.view}>
               <Text>
                  {props.checked === true ? "မှတ်ပုံတင်အမှတ်" : "NRC No."}
               </Text>
               <Text style={styles.data}>
                  :{" "}
                  {props.data.nrc === ""
                     ? props.checked === true
                        ? "လျှောက်ထားစဲ"
                        : "Pending..."
                     : props.data.nrc}
               </Text>
            </View>
            <View style={styles.view}>
               <Text>{props.checked === true ? "လူမျိုး" : "Nationality"}</Text>
               <Text style={styles.data}>: {props.data.nationality}</Text>
            </View>
            <View style={styles.view}>
               <Text>{props.checked === true ? "ကျား/မ" : "Sex"}</Text>
               <Text style={styles.data}>: {props.data.sex}</Text>
            </View>
            <View style={styles.view}>
               <Text>{props.checked === true ? "အရပ်အမြင့်" : "Height"}</Text>
               <Text style={styles.data}>: {props.data.height}</Text>
            </View>
            <View style={styles.view}>
               <Text>
                  {props.checked === true ? "ကိုယ်အလေးချိန်" : "Weight"}
               </Text>
               <Text style={styles.data}>: {props.data.weight}</Text>
            </View>
            <View style={styles.view}>
               <Text>
                  {props.checked === true
                     ? "အိမ်ထောင်ရှိ/မရှိ"
                     : "Marital Status"}
               </Text>
               <Text style={styles.data}>: {props.data.marital_status}</Text>
            </View>
            <View style={styles.view}>
               <Text>
                  {props.checked === true
                     ? "ပညာအရည်အချင်း"
                     : "Education Qualification"}
               </Text>
               <Text style={styles.data}>: {props.data.education}</Text>
            </View>
            <View style={styles.view}>
               <Text>
                  {props.checked === true
                     ? "အခြားပညာအရည်အချင်း"
                     : "Other Qualification"}
               </Text>
               <Text style={styles.data}>: {props.data.other_education}</Text>
            </View>
            <View style={styles.view}>
               <Text>
                  {props.checked === true ? "နေရပ်လိပ်စာ" : "Contact Address"}
               </Text>
               <Text style={styles.data}>: {props.data.contact_address}</Text>
            </View>
            {props.data.email === "" ? (
               <View />
            ) : (
               <View style={styles.view}>
                  <Text>
                     {props.checked === true
                        ? "အီးမေးလ်လိပ်စာ"
                        : "Email Address"}
                  </Text>
                  <Text style={styles.data}>: {props.data.email}</Text>
               </View>
            )}
            <View style={styles.view}>
               <Text>
                  {props.checked === true
                     ? "လုပ်ငန်းအတွေ့အကြုံ"
                     : "Working Experience"}
               </Text>
               <Text style={styles.data}>
                  :{" "}
                  {props.data.working_experience === ""
                     ? "No working experience."
                     : props.data.working_experience}
               </Text>
            </View>
            <View style={styles.view}>
               <Text>
                  {props.checked === true
                     ? "ဆယ်သွယ်ရမည့်ဖုန်း"
                     : "Contact Phone"}
               </Text>
               <Text style={styles.data}>: {props.data.contact_phone}</Text>
            </View>
            <View style={styles.view}>
               <Text>
                  {props.checked === true
                     ? "လျှောက်ထားလိုသည့်နေရာ"
                     : "Apply Post"}
               </Text>
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
               {props.checked === true ? "(လက်မှတ်)" : "(Signature)"}
            </Text>
            <Text style={styles.footer}>Generated with PY780N CV</Text>
         </View>
      </Page>
   </Document>
);

const PDFForm = (props) => (
   <Grid item container>
      <PDFDownloadLink
         document={<MyDocument data={props.data} />}
         fileName="CV Form (Created With cv-form-generator.web.app).pdf">
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
         <MyDocument data={props.data} checked={props.checked} />
      </PDFViewer>
   </Grid>
);

export default PDFForm;
