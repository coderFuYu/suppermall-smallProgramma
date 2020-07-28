// pages/home/home.js
import {
	getMultiData
} from "../../service/home"
Page({

	data: {
		banners:[],
		recommends:[],
	},

	onLoad: function (options) {
		getMultiData().then(res => {
			const Banners=res.data.data.banner.list;
			const Recommends=res.data.data.recommend.list;
			this.setData({
				banners:Banners,
				recommends:Recommends
			})

		})
	},

	onShareAppMessage: () => {

	}
})