import React, { PureComponent } from "react";
import { View, Text, Image, Modal, Linking, Dimensions, TouchableOpacity } from "react-native";
import theme from "../theme";
const { width, height } = Dimensions.get("window");
const contentWidth = 300;

const cards = [
	{
		title: "Call Support",
		url: "tel: +919028313632",
		icon: "https://cdn2.iconfinder.com/data/icons/font-awesome/1792/phone-512.png"
	},
	{
		title: "Whatsapp Support",
		url: "https://wa.me/9028313632",
		icon: "https://seeklogo.com/images/W/whatsapp-logo-112413FAA7-seeklogo.com.png"
	}
];
export default class Contact extends PureComponent {
	handleDownload = (url) => {
		Linking.openURL(url);
	};

	renderCard = (card) => {
		const handlePress = () => this.handleDownload(card.url);
		return (
			<TouchableOpacity onPress={handlePress} style={style.card}>
				<Text style={style.cardTxt}>
					{card.title}
				</Text>
				<View style={style.cardBtn}>
					<Image source={card.icon} style={style.icon} />
				</View>
			</TouchableOpacity>
		);
	};

	handleClose = () => {
		this.props.onClose();
	}

	render() {
		const { v } = this.props;
		return (
			<Modal visible={v} transparent animationType="fade" onRequestClose={this.handleClose}>
				<TouchableOpacity activeOpacity={1} onPress={this.handleClose} style={style.main}>
					<TouchableOpacity activeOpacity={1} onPress={() => {}} style={style.content}>
						<View style={style.header}>
							<Text style={style.headerTxt}>
								Contact
							</Text>
						</View>
						{cards.map(this.renderCard)}
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
		outline: 'none',
		cursor: 'normal'
	},
	content: {
		cursor: 'normal',
		outline: 'none',
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

	card: {
		outline: 'none',
		height: 50,
		flexDirection: "row",
		paddingHorizontal: 10,
		justifyContent: "space-between",
		alignItems: "center",
	},
	cardTxt: {
		fontSize: 17,
		color: theme.black,
		fontWeight: "bold",
	},
	cardBtn: {		
		borderRadius: 100,
		backgroundColor: theme.primaryLight,
		width: 30,
		height: 30,
		justifyContent: "center",
		alignItems: "center",
	},
	icon: {
		width: 19,
		height: 19,
		tintColor: theme.primary,
	},
};