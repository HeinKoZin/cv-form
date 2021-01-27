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
import kyani from "knayi-myscript";
import font from "../../fonts/Zawgyi-One.ttf";
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
      height: 79,
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
            <Text style={styles.title}>
               {props.checked === true
                  ? kyani.fontConvert(
                       "ကိုယ်ရေးမှတ်တမ်းအကျဥ်း",
                       "zawgyi",
                       "unicode"
                    )
                  : "CURRICULUM VITAE"}
            </Text>
            <Image
               src={props.data.photo === null ? photo : props.data.photo}
               style={styles.photo}
            />
            <View style={styles.view}>
               <Text>
                  {props.checked === true
                     ? kyani.fontConvert("အမည်", "zawgyi")
                     : "Name"}
               </Text>
               <Text style={styles.data}>
                  : {kyani.fontConvert(props.data.name, "zawgyi")}
               </Text>
            </View>
            <View style={styles.view}>
               <Text>
                  {props.checked === true
                     ? kyani.fontConvert("အဖ အမည်", "zawgyi")
                     : "Father's Name"}
               </Text>
               <Text style={styles.data}>
                  : {kyani.fontConvert(props.data.father_name, "zawgyi")}
               </Text>
            </View>
            <View style={styles.view}>
               <Text>
                  {props.checked === true
                     ? kyani.fontConvert("မွေးသက္ကရာဇ်", "zawgyi")
                     : "Birthday"}
               </Text>
               <Text style={styles.data}>
                  : {kyani.fontConvert(props.data.birthday, "zawgyi")}
               </Text>
            </View>
            <View style={styles.view}>
               <Text>
                  {props.checked === true
                     ? kyani.fontConvert("မှတ်ပုံတင်အမှတ်", "zawgyi")
                     : "NRC No."}
               </Text>
               <Text style={styles.data}>
                  :{" "}
                  {props.data.nrc === ""
                     ? props.checked === true
                        ? kyani.fontConvert("လျှောက်ထားစဲ", "zawgyi")
                        : "Pending..."
                     : kyani.fontConvert(props.data.nrc, "zawgyi")}
               </Text>
            </View>
            <View style={styles.view}>
               <Text>
                  {props.checked === true
                     ? kyani.fontConvert("လူမျိုး", "zawgyi")
                     : "Nationality"}
               </Text>
               <Text style={styles.data}>
                  :{" "}
                  {kyani.fontConvert(
                     props.data.nationality,
                     "zawgyi",
                     "unicode"
                  )}
               </Text>
            </View>
            <View style={styles.view}>
               <Text>
                  {props.checked === true
                     ? kyani.fontConvert("ကျား/မ", "zawgyi")
                     : "Sex"}
               </Text>
               <Text style={styles.data}>
                  : {kyani.fontConvert(props.data.sex, "zawgyi")}
               </Text>
            </View>
            <View style={styles.view}>
               <Text>
                  {props.checked === true
                     ? kyani.fontConvert("အရပ်အမြင့်", "zawgyi")
                     : "Height"}
               </Text>
               <Text style={styles.data}>
                  : {kyani.fontConvert(props.data.height, "zawgyi")}
               </Text>
            </View>
            <View style={styles.view}>
               <Text>
                  {props.checked === true
                     ? kyani.fontConvert("ကိုယ်အလေးချိန်", "zawgyi")
                     : "Weight"}
               </Text>
               <Text style={styles.data}>
                  : {kyani.fontConvert(props.data.weight, "zawgyi")}
               </Text>
            </View>
            <View style={styles.view}>
               <Text>
                  {props.checked === true
                     ? kyani.fontConvert("အိမ်ထောင်ရှိ/မရှိ", "zawgyi")
                     : "Marital Status"}
               </Text>
               <Text style={styles.data}>
                  :{" "}
                  {kyani.fontConvert(
                     props.data.marital_status,
                     "zawgyi",
                     "unicode"
                  )}
               </Text>
            </View>
            <View style={styles.view}>
               <Text>
                  {props.checked === true
                     ? kyani.fontConvert("ပညာအရည်အချင်း", "zawgyi")
                     : "Education Qualification"}
               </Text>
               <Text style={styles.data}>
                  : {kyani.fontConvert(props.data.education, "zawgyi")}
               </Text>
            </View>
            <View style={styles.view}>
               <Text>
                  {props.checked === true
                     ? kyani.fontConvert(
                          "အခြားပညာအရည်အချင်း",
                          "zawgyi",
                          "unicode"
                       )
                     : "Other Qualification"}
               </Text>
               <Text style={styles.data}>
                  :{" "}
                  {kyani.fontConvert(
                     props.data.other_education,
                     "zawgyi",
                     "unicode"
                  )}
               </Text>
            </View>
            <View style={styles.view}>
               <Text>
                  {props.checked === true
                     ? kyani.fontConvert("နေရပ်လိပ်စာ", "zawgyi")
                     : "Contact Address"}
               </Text>
               <Text style={styles.data}>
                  : {kyani.fontConvert(props.data.contact_address, "zawgyi")}
               </Text>
            </View>
            {props.data.email === "" ? (
               <View />
            ) : (
               <View style={styles.view}>
                  <Text>
                     {props.checked === true
                        ? kyani.fontConvert("အီးမေးလ်လိပ်စာ", "zawgyi")
                        : "Email Address"}
                  </Text>
                  <Text style={styles.data}>
                     : {kyani.fontConvert(props.data.email, "zawgyi")}
                  </Text>
               </View>
            )}
            <View style={styles.view}>
               <Text>
                  {props.checked === true
                     ? kyani.fontConvert("လုပ်ငန်းအတွေ့အကြုံ", "zawgyi")
                     : "Working Experience"}
               </Text>
               <Text style={styles.data}>
                  :{" "}
                  {props.data.working_experience === ""
                     ? props.checked === true
                        ? kyani.fontConvert(
                             "လုပ်ငန်းအတွေ့အကြုံ မရှိသေးပါ။",
                             "zawgyi"
                          )
                        : "No working experience."
                     : kyani.fontConvert(
                          props.data.working_experience,
                          "zawgyi"
                       )}
               </Text>
            </View>
            <View style={styles.view}>
               <Text>
                  {props.checked === true
                     ? kyani.fontConvert("ဆယ်သွယ်ရမည့်ဖုန်း", "zawgyi")
                     : "Contact Phone"}
               </Text>
               <Text style={styles.data}>
                  : {kyani.fontConvert(props.data.contact_phone, "zawgyi")}
               </Text>
            </View>
            <View style={styles.view}>
               <Text>
                  {props.checked === true
                     ? kyani.fontConvert("လျှောက်ထားလိုသည့်နေရာ", "zawgyi")
                     : "Apply Post"}
               </Text>
               <Text style={styles.data}>
                  :{" "}
                  {props.data.apply_post === ""
                     ? "..................................................................."
                     : kyani.fontConvert(props.data.apply_post, "zawgyi")}
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
               {props.checked === true
                  ? kyani.fontConvert("(လက်မှတ်)", "zawgyi", "unicode")
                  : "(Signature)"}
            </Text>
            <Text style={styles.footer}>Generated with PY780N CV</Text>
         </View>
      </Page>
   </Document>
);

const PDFForm = (props) => (
   <Grid item container>
      <PDFDownloadLink
         document={<MyDocument data={props.data} checked={props.checked} />}
         fileName="CV Form (Generated With cv-form-generator.web.app).pdf">
         {({ blob, url, loading, error }) =>
            loading ? (
               props.checked === true ? (
                  kyani.fontConvert("လုပ်ဆောင်နေပါသည်...", "unicode")
               ) : (
                  "Loading document..."
               )
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
