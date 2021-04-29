import { Grid, TextField, Button, Avatar } from "@material-ui/core";
import React, { Component } from "react";
import MMNRC from "myanmar-nrc-x";
import { Save } from "@material-ui/icons";
import "./styles.scss";
import PDFForm from "../CVForm";
import myanmarNumber from "myanmar-numbers";
import kyani from "knayi-myscript";

kyani.setGlobalOptions({
	detector: {
		use_myanmartools: true,
	},
});
export default class Form extends Component {
	state = {
		nrc: null,
		nrcValidity: null,
		build: false,
		data: { photo: null },
	};

	// TODO: Upload image to CV Form.
	upload = (file) => {
		this.setState({ data: { photo: URL.createObjectURL(file) } });
	};

	// TODO: Check for invalid NRC.
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

	// * Collect data from user's input.
	name = React.createRef();
	father_name = React.createRef();
	birthday = React.createRef();
	nrc = React.createRef();
	nationality = React.createRef();
	sex = React.createRef();
	height = React.createRef();
	weight = React.createRef();
	marital_status = React.createRef();
	education = React.createRef();
	other_education = React.createRef();
	contact_address = React.createRef();
	working_experience = React.createRef();
	contact_phone = React.createRef();
	apply_post = React.createRef();
	email = React.createRef();

	// TODO: Build an CV Form.
	build = (e) => {
		const name = this.name.current.value;
		const father_name = this.father_name.current.value;
		const birthday = this.birthday.current.value;
		const nrc = this.nrc.current.value;
		const nationality = this.nationality.current.value;
		const sex = this.sex.current.value;
		const height = this.height.current.value;
		const weight = this.weight.current.value;
		const marital_status = this.marital_status.current.value;
		const education = this.education.current.value;
		const other_education = this.other_education.current.value;
		const contact_address = this.contact_address.current.value;
		const working_experience = this.working_experience.current.value;
		const contact_phone = this.contact_phone.current.value;
		const apply_post = this.apply_post.current.value;
		const email = this.email.current.value;

		// TODO: Check for valid data.
		if (name && father_name && birthday && nationality && sex !== "") {
			this.setState({
				build: true,
				data: {
					...this.state.data,
					name: name,
					father_name: father_name,
					birthday:
						this.props.checked === true
							? myanmarNumber(birthday, "my")
							: birthday,
					nrc: nrc,
					nationality: nationality,
					sex: sex,
					height: height,
					weight: weight,
					marital_status: marital_status,
					education: education,
					other_education: other_education,
					contact_address: contact_address,
					working_experience: working_experience,
					contact_phone: contact_phone,
					apply_post: apply_post,
					email: email,
				},
			});
		} else {
			this.props.checked === true
				? alert("")
				: alert(" You need to enter your personal's information.");
		}
	};

	// componentDidMount() {
	//    this.getFont("မြန်မာစာ", "normal 11px 'Roboto Regular'");
	// }

	render() {
		return (
			<Grid item container spacing={3} sm={10} xs={10} md={7} lg={7}>
				<Grid item xs={12} sm={12} md={4}>
					<TextField
						id="name"
						label={this.props.checked === true ? "အမည်" : "Name"}
						fullWidth
						variant="outlined"
						type="text"
						inputRef={this.name}
						required
					/>
				</Grid>
				<Grid item xs={12} sm={12} md={4}>
					<TextField
						id="father-name"
						label={this.props.checked === true ? "အဖ အမည်" : "Father's Name"}
						fullWidth
						type="text"
						inputRef={this.father_name}
						variant="outlined"
						required
					/>
				</Grid>
				<Grid item xs={12} sm={12} md={4}>
					<TextField
						id="birth"
						label={
							this.props.checked === true ? "မွေးသက္ကရာဇ်" : "Date of Birth"
						}
						type="date"
						inputRef={this.birthday}
						variant="outlined"
						InputLabelProps={{
							shrink: true,
						}}
						fullWidth
						required
					/>
				</Grid>
				<Grid item xs={12} sm={12} md={4}>
					<TextField
						id="nrc"
						inputRef={this.nrc}
						label={
							this.props.checked === true
								? this.state.nrcValidity == null
									? "မှတ်ပုံတင်အမှတ်"
									: this.state.nrcValidity === true
									? "မှတ်ပုံတင်အမှတ် မှန်ကန်ပါတယ် "
									: "မှတ်ပုံတင်အမှတ် မှားနေပါတယ်။"
								: this.state.nrcValidity == null
								? "N.R.C No."
								: this.state.nrcValidity === true
								? "N.R.C No is valid."
								: "N.R.C No is Invalid."
						}
						type="text"
						fullWidth
						onBlur={(e) => this.checkNrc(e.target.value)}
						variant="outlined"
						required
						helperText={
							this.props.checked === true
								? "မှန်ကန်သော မှတ်ပုံတင်ထည့်ရန်လိုအပ်ပါသည်။"
								: "You need to enter a valid NRC."
						}
					/>
				</Grid>
				<Grid item xs={12} sm={12} md={4}>
					<TextField
						id="nationality"
						inputRef={this.nationality}
						label={this.props.checked === true ? "လူမျိုး" : "Nationality"}
						fullWidth
						variant="outlined"
						required
					/>
				</Grid>

				<Grid item xs={12} sm={12} md={4}>
					<TextField
						id="sex"
						label={this.props.checked === true ? "ကျား/မ" : "Sex"}
						inputRef={this.sex}
						fullWidth
						variant="outlined"
						required
					/>
				</Grid>
				<Grid item xs={12} sm={12} md={4}>
					<TextField
						id="height"
						inputRef={this.height}
						label={this.props.checked === true ? "အရပ်အမြင့်" : "Height"}
						fullWidth
						variant="outlined"
					/>
				</Grid>
				<Grid item xs={12} sm={12} md={4}>
					<TextField
						id="weight"
						inputRef={this.weight}
						label={this.props.checked === true ? "ကိုယ်အလေးချိန်" : "Weight"}
						fullWidth
						variant="outlined"
					/>
				</Grid>
				<Grid item xs={12} sm={12} md={4}>
					<TextField
						id="marital_status"
						label={
							this.props.checked === true
								? "အိမ်ထောင်ရှိ/မရှိ"
								: "Marital Status"
						}
						fullWidth
						variant="outlined"
						inputRef={this.marital_status}
					/>
				</Grid>
				<Grid item xs={12} sm={12} md={4}>
					<TextField
						id="education"
						inputRef={this.education}
						label={
							this.props.checked === true
								? "ပညာအရည်အချင်း"
								: "Education Qualification"
						}
						fullWidth
						variant="outlined"
					/>
				</Grid>
				<Grid item xs={12} sm={12} md={4}>
					<TextField
						id="other_education"
						inputRef={this.other_education}
						label={
							this.props.checked === true
								? "အခြားပညာအရည်အချင်း"
								: "Other Qualification"
						}
						fullWidth
						variant="outlined"
					/>
				</Grid>

				<Grid item xs={12} sm={12} md={4}>
					<TextField
						id="contact_address"
						inputRef={this.contact_address}
						label={
							this.props.checked === true ? "နေရပ်လိပ်စာ" : "Contact Address"
						}
						fullWidth
						variant="outlined"
					/>
				</Grid>

				<Grid item xs={12} sm={12} md={4}>
					<TextField
						id="email"
						inputRef={this.email}
						type="mail"
						label={
							this.props.checked === true ? "အီးမေးလ်လိပ်စာ" : "Email Address"
						}
						fullWidth
						variant="outlined"
					/>
				</Grid>
				{/* For Working Experience */}

				<Grid item xs={12} sm={12} md={8}>
					<TextField
						id="working_experience"
						type="text"
						inputRef={this.working_experience}
						multiline={true}
						label={
							this.props.checked === true
								? "လုပ်ငန်းအတွေ့အကြုံ"
								: "Working Experience"
						}
						fullWidth
						variant="outlined"
						rows={5}
					/>
				</Grid>

				<Grid item xs={12} sm={12} md={4}>
					<TextField
						id="contact_phone"
						inputRef={this.contact_phone}
						label={
							this.props.checked === true
								? "ဆယ်သွယ်ရမည့်ဖုန်း"
								: "Contact Phone"
						}
						fullWidth
						variant="outlined"
						required
					/>
				</Grid>

				<Grid item xs={12} sm={12} md={4}>
					<TextField
						id="apply_post"
						inputRef={this.apply_post}
						label={
							this.props.checked === true
								? "လျှောက်ထားလိုသည့်နေရာ"
								: "Apply Post"
						}
						fullWidth
						variant="outlined"
					/>
				</Grid>

				<Grid item xs={12} sm={12} md={4}>
					<TextField
						id="photo"
						label={this.props.checked === true ? "ဓာတ်ပုံ" : "Photo"}
						type="file"
						inputProps={{ accept: "image/jpg, image/jpeg, image/png" }}
						fullWidth
						onChange={(e) =>
							e.target.files[0] === undefined
								? ""
								: this.upload(e.target.files[0])
						}
						variant="outlined"
						InputLabelProps={{
							shrink: true,
						}}
					/>
				</Grid>

				{/* Previewing Photo */}
				{this.state.data.photo === null ? (
					""
				) : (
					<Grid container item xs={12}>
						<Grid item xs={0} sm={0} md={4} />
						<Grid item xs={12} sm={12} md={4}>
							<Avatar
								src={this.state.data.photo}
								variant="rounded"
								className="cv-photo"
							>
								Your Photo
							</Avatar>
						</Grid>
						<Grid item xs={0} sm={0} md={4} />
					</Grid>
				)}

				{/* //  For Build Button Layout */}
				<Grid container item xs={12}>
					<Grid item xs={0} sm={0} md={4} />
					<Grid item xs={12} sm={12} md={4}>
						<Button
							variant="contained"
							color="secondary"
							fullWidth
							startIcon={<Save />}
							style={{ marginTop: 20 }}
							onClick={this.build}
						>
							Build CV
						</Button>
					</Grid>
					<Grid item xs={0} sm={0} md={4} />
				</Grid>

				{this.state.build !== false ? (
					<PDFForm data={this.state.data} checked={this.props.checked} />
				) : (
					""
				)}
			</Grid>
		);
	}
}
