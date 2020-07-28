// pages/home/home.js
import {
	getMultiData
} from "../../service/home"
Page({

	data: {

	},

	onLoad: function (options) {
		getMultiData().then(res => {
			console.log(res)
		})
	},

	onShareAppMessage: () => {

	}
})