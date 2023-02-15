import React, { PureComponent } from "react";
import { View, Text, Modal, Dimensions, TouchableOpacity } from "react-native";
import theme from "../theme";
const { width, height } = Dimensions.get("window");
const contentWidth = 300;
const contentTxt = `OneSkill up-skilling platform for K-12 students, we aim to provide 21st Century skills for overall holistic development.\n\nCurrently we are targeting to operate in 50+ Schools.`;

export default class About extends PureComponent {
	handleClose = () => {
		this.props.onClose();
	};

	render() {
		const { v } = this.props;
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
							<Text style={style.headerTxt}>About us</Text>
						</View>
						<Text style={style.contentTxt}>{contentTxt}</Text>
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
	contentTxt: {
		fontSize: 18,
		color: theme.black,
		marginVertical: 20,
		marginHorizontal: 20
	},
};