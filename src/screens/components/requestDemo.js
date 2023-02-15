import React, { Component } from "react";
import {
	View,
	Text,
	Modal,
	Dimensions,
	TouchableOpacity,
	TextInput,
	ActivityIndicator
} from "react-native";
import theme from "../theme";
import toast from "react-hot-toast";
const { width, height } = Dimensions.get("window");
const contentWidth = 300;
const inputWidth = contentWidth - 20;

export default class CCPicker extends Component {
	constructor(props) {
		super(props);
		this.state = {
			busy: false,
		};
	}

	setPhoneNumber = (phone) => {
		this.setState({ phone })
	}
	setAddress = (address) => {
		this.setState({ address })
	}
	setAdditionalMessage = (message) => {
		this.setState({ message })
	}

	handleClose = () => {
		this.props.onClose();
	};

	requestDemo = async () => {
		const {
			phone,
			message,
			address,
			busy
		} = this.state;
		if(busy)return;

		const _phone = parseInt(phone);
		if(phone?.length !== 10 || isNaN(_phone)){
			toast.error("Invalid Phone Number!");
			return;
		}else if(!(address?.length > 0)){
			toast.error("Please Enter Address!");
			return;
		}else if(!(message?.length > 0)){
			toast.error("Please Enter Message!");
			return;
		}
		this.setState({
			busy: true
		})
		setTimeout(() => {
			this.handleClose();
			this.setState({
				busy: false
			}, () => {
				toast.success("Request Submitted Successfully!");
			})
		}, 2000);
	};

	render() {
		const { v } = this.props;
		const {
			busy
		} = this.state;
		return (
			<Modal
				visible={v}
				transparent
				animationType="fade"
				onRequestClose={this.handleClose}
			>
				<TouchableOpacity
					activeOpacity={1}
					onPress={this.handleClose}
					style={style.main}
				>
					<TouchableOpacity
						activeOpacity={1}
						onPress={() => {}}
						style={style.content}
					>
						<View style={style.header}>
							<Text style={style.headerTxt}>Request Demo</Text>
						</View>
							<TextInput
								placeholder="Phone no"
								placeholderTextColor={theme.grey}
								style={style.input}
								onChangeText={this.setPhoneNumber}
							/>
							<TextInput
								placeholder="Address"
								placeholderTextColor={theme.grey}
								style={style.input}
								onChangeText={this.setAddress}
							/>
							<TextInput
								placeholder="Additional Message"
								placeholderTextColor={theme.grey}
								style={style.input}
								onChangeText={this.setAdditionalMessage}
							/>

							<TouchableOpacity onPress={this.requestDemo} style={style.button}>
								<Text style={style.btnTxt}>Submit</Text>
							</TouchableOpacity>

						{busy ? <View style={style.busy}>
							<ActivityIndicator size={40} color={theme.primary} />
						</View> : null}
					</TouchableOpacity>
				</TouchableOpacity>
			</Modal>
		);
	}
}

const style = {
	main: {
		width,
		height,
		backgroundColor: theme.blackTrans,
		justifyContent: "center",
		alignItems: "center",
		outline: "none",
		cursor: "normal",
	},
	content: {
		overflow: 'hidden',
		cursor: "normal",
		outline: "none",
		width: contentWidth,
		borderRadius: 10,
		backgroundColor: theme.white,
	},
	header: {
		height: 50,
		borderBottomWidth: 1,
		borderColor: theme.grey,
		justifyContent: "center",
		alignItems: "center",
	},
	headerTxt: {
		fontSize: 16,
		color: theme.black,
		fontWeight: "bold",
	},

	input: {
		borderWidth: 1,
		borderColor: theme.grey,
		borderRadius: 10,
		paddingLeft: 10,
		width: inputWidth,
		height: 45,
		outline: "none",
		alignSelf: "center",
		marginTop: 10,
	},

	button: {
		width: inputWidth,
		height: 45,
		justifyContent: "center",
		borderRadius: 10,
		alignItems: "center",
		alignSelf: "center",
		marginTop: 10,
		marginBottom: 10,
		backgroundColor: theme.primary,
	},
	btnTxt: {
		fontSize: 15,
		color: theme.white,
		fontWeight: "bold",
	},

	busy: {
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: "#ffffffb4",
		position: 'absolute',
		width: '100%',
		height: '100%'
	}
};