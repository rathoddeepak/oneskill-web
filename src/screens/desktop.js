import React, { Component } from "react";
import {
	View,
	Text,
	Dimensions,
	TouchableOpacity
} from "react-native";
import StudyStdAnimation from "../assets/study_std.json";
import RequestDemo from './components/requestDemo';
import CCPicker from './components/ccPicker';
import Contact from './components/contact';
import Lottie from "lottie-react";
import theme from './theme';

const {
	width,
	height
} = Dimensions.get('window');
const leftContentWidth = width * 0.55;
const leftContentDataWidth = leftContentWidth * 0.80;
const rightContentWidth = width - leftContentWidth;
const rightContentDataWidth = rightContentWidth * 0.80;
const headerHeight = 60;

export default class Mobile extends Component {
	constructor(props){
		super(props);
		this.state = {
			ccVisible: false,
			rdVisible: false,
			cVisible: false
		}
	}

	showCarriculum = () => {
		this.setState({
			ccVisible: true
		});
	}

	requestDemo = () => {
		this.setState({
			rdVisible: true
		});
	}

	showContact = () => {
		this.setState({
			cVisible: true
		});
	}

	showFeatures = () => {

	}

	showAbout = () => {

	}

	render(){
		const {
			ccVisible,
			rdVisible,
			cVisible
		} = this.state;
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
						<Text style={style.subTitle}>
						 Integrating Academics with{'\n'}
						 21st Century Skills
						</Text>
						<Text style={style.description}>
						 Transforming <Text style={style.bold}>Indian</Text> education 🇮🇳 for Student <Text style={style.bold}>Holistic development</Text>
						</Text>

						<View style={style.row}>

							<TouchableOpacity onPress={this.showCarriculum} style={style.button}>
								<Text style={style.buttonTxt}>
									Carriculum
								</Text>
							</TouchableOpacity>

							<TouchableOpacity onPress={this.requestDemo} style={style.button}>
								<Text style={style.buttonTxt}>
									Request Demo
								</Text>
							</TouchableOpacity>

						</View>
					</View>
				</View>
				<View style={style.rightContent}>
					<View style={style.rightHeader}>
						<Text onPress={this.showFeatures} style={style.link}>
							Features
						</Text>
						<Text onPress={this.showAbout} style={style.link}>
							About us
						</Text>	
						<Text onPress={this.showContact} style={style.link}>
							Contact
						</Text>				
					</View>
					<View style={style.content2}>
						<Lottie 
							animationData={StudyStdAnimation}
							loop={true}
						/>
					</View>
				</View>

				<RequestDemo onClose={() => this.setState({ rdVisible: false })} v={rdVisible} />
				<CCPicker onClose={() => this.setState({ ccVisible: false })} v={ccVisible} />				
				<Contact onClose={() => this.setState({ cVisible: false })} v={cVisible} />
			</View>
		)
	}
}

const style = {
	main: {		
		width,
		height,
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: theme.white,
		flexDirection: 'row',
	},
	leftContent: {
		height,
		width: leftContentWidth,
		alignItems: 'center'
	},
	leftHeader: {
		width: leftContentDataWidth,
		height: headerHeight,
		justifyContent: 'center'
	},
	logoTitle: {
		fontSize: 30,
		fontWeight: 'bold',
		color: theme.primary
	},
	logoFix: {
		color: theme.black
	},
	subTitle: {
		fontSize: 50,
		fontWeight: 'bold',
		color: theme.black
	},
	description: {
		marginVertical: 40,
		fontSize: 20,
		color: theme.grey
	},
	rightContent: {
		height,
		width: rightContentWidth,
		backgroundColor: theme.primary,
		alignItems: 'center'
	},
	rightHeader: {
		width: rightContentDataWidth,
		height: headerHeight,
		alignItems: 'center',
		flexDirection: 'row',
	},
	link: {
		color: theme.white,
		fontSize: 17,
		fontWeight: 'bold',
		marginRight: 40
	},

	content: {
		flex: 1,
		width: leftContentDataWidth,
		justifyContent: 'center'
	},
	content2: {
		flex: 1,
		width: rightContentDataWidth,
		justifyContent: 'center'
	},

	bold: {
		fontWeight: 'bold'
	},
	button: {
		outline: 'none',
		minWidth: 70,
		paddingHorizontal: 20,
		borderRadius: 100,
		height: 50,
		borderWidth: 1,
		borderColor: theme.black,
		justifyContent: 'center',
		alignItems: 'center',
		flexDirection: 'row',
		marginRight: 20
	},
	buttonTxt: {
		color: theme.black,
		fontSize: 16,
		fontWeight: '500'
	},
	row: {
		flexDirection: 'row'
	}
}