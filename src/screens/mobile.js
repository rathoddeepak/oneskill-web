import React, { Component } from "react";
import { View, Text, Image, Dimensions, TouchableOpacity } from "react-native";
import StudyStdAnimation from "../assets/study_std.json";
import RequestDemo from "./components/requestDemo";
import CCPicker from "./components/ccPicker";
import Contact from "./components/contact";
import Lottie from "lottie-react";
import About from "./components/about";
import theme from "./theme";

const { width, height } = Dimensions.get("window");
const contentWidth = width * 0.9;
const headerHeight = 60;
const contentHeight = height - headerHeight;

const homeIcon = "https://gcdnb.pbrd.co/images/8WFXCAYC3dOO.png?o=1";
const aboutIcon = "https://gcdnb.pbrd.co/images/0pUvCIKeMZlm.png?o=1";
const supportIcon = "https://gcdnb.pbrd.co/images/ZL9BmhCUtlr6.png?o=1";

export default class Mobile extends Component {
	constructor(props) {
		super(props);
		this.state = {
			ccVisible: false,
			rdVisible: false,
			cVisible: false,
			aVisible: false,
		};
	}

	showCarriculum = () => {
		this.setState({
			ccVisible: true,
		});
	};

	requestDemo = () => {
		this.setState({
			rdVisible: true,
		});
	};

	showContact = () => {
		this.setState({
			cVisible: true,
		});
	};

	showFeatures = () => {};

	showAbout = () => {
		this.setState({
			aVisible: true,
		});
	};

	render() {
		const { ccVisible, rdVisible, aVisible, cVisible } = this.state;
		return (
			<View style={style.main}>
				<View style={style.leftContent}>
					<View style={style.leftHeader}>
						<Text style={style.logoTitle}>
							One
							<Text style={style.logoFix}>Skill</Text>
						</Text>
					</View>
					<View style={style.content}>
						<View style={style.animation}>
							<Lottie loop animationData={StudyStdAnimation} />
						</View>
						<Text style={style.subTitle}>
							Integrating Academics with 21st Century Skills
						</Text>
						<Text style={style.description}>
							Transforming <Text style={style.bold}>Indian</Text>{" "}
							education 🇮🇳 for Student{" "}
							<Text style={style.bold}>Holistic development</Text>
						</Text>

						<View style={style.row}>
							<TouchableOpacity
								onPress={this.showCarriculum}
								style={style.button}
							>
								<Text style={style.buttonTxt}>Carriculum</Text>
							</TouchableOpacity>

							<TouchableOpacity
								onPress={this.requestDemo}
								style={style.button}
							>
								<Text style={style.buttonTxt}>
									Request Demo
								</Text>
							</TouchableOpacity>
						</View>
					</View>
				</View>
				<View style={style.footer}>
					<View style={style.btn}>
						<Image
							style={[style.icon, { tintColor: theme.white }]}
							source={homeIcon}
						/>
						<Text style={[style.btnTxt, { color: theme.white }]}>
							Home
						</Text>
					</View>

					<TouchableOpacity
						style={style.btn}
						onPress={this.showAbout}
					>
						<Image style={style.icon} source={aboutIcon} />
						<Text style={style.btnTxt}>About</Text>
					</TouchableOpacity>

					<TouchableOpacity
						style={style.btn}
						onPress={this.showContact}
					>
						<Image style={style.icon} source={supportIcon} />
						<Text style={style.btnTxt}>Support</Text>
					</TouchableOpacity>
				</View>
				<RequestDemo
					onClose={() => this.setState({ rdVisible: false })}
					v={rdVisible}
				/>
				<CCPicker
					onClose={() => this.setState({ ccVisible: false })}
					v={ccVisible}
				/>
				<Contact
					onClose={() => this.setState({ cVisible: false })}
					v={cVisible}
				/>
				<About
					onClose={() => this.setState({ aVisible: false })}
					v={aVisible}
				/>
			</View>
		);
	}
}

const style = {
	animation: {
		height: 250,
		width: 250,
		left: -50,
	},
	main: {
		width,
		height,
		alignItems: "center",
		justifyContent: "center",
		backgroundColor: theme.pureBlack,
	},
	leftContent: {
		height: contentHeight,
		width: contentWidth,
		alignItems: "center",
	},
	leftHeader: {
		width: contentWidth,
		height: headerHeight,
		justifyContent: "center",
	},
	logoTitle: {
		fontSize: 30,
		fontWeight: "bold",
		color: theme.primary,
	},
	logoFix: {
		color: theme.white,
	},
	subTitle: {
		fontSize: 30,
		fontWeight: "bold",
		color: theme.white,
	},
	description: {
		marginVertical: 20,
		fontSize: 20,
		color: theme.grey,
	},
	content: {
		flex: 1,
		width: contentWidth,
		justifyContent: "center",
	},
	bold: {
		fontWeight: "bold",
	},
	button: {
		outline: "none",
		minWidth: 70,
		paddingHorizontal: 20,
		borderRadius: 100,
		height: 50,
		backgroundColor: theme.white,
		justifyContent: "center",
		alignItems: "center",
		flexDirection: "row",
		marginRight: 20,
	},
	buttonTxt: {
		color: theme.pureBlack,
		fontSize: 16,
		fontWeight: "500",
	},
	row: {
		flexDirection: "row",
	},

	footer: {
		width,
		height: headerHeight,
		backgroundColor: "#570b9b",
		justifyContent: "space-around",
		alignItems: "center",
		flexDirection: "row",
	},
	btn: {
		width: 50,
		height: 50,
		justifyContent: "center",
		alignItems: "center",
	},
	icon: {
		height: 25,
		width: 25,
		marginBottom: 4,
		tintColor: "#c78ffa",
	},
	btnTxt: {
		fontSize: 14,
		color: "#c78ffa",
	},
};