// pages/home/home.js
const TOP_DISTANCE = 1000;
const types = ['pop', 'new', 'sell'];
import {
	getMultiData,
	getGoodsData
} from "../../service/home"
Page({

	data: {
		banners: [],
		recommends: [],
		titles: ['流行', '新款', '精选'],
		types: ['pop', 'new', 'sell'],
		tabScrollTop: 0,
		goods: {
			pop: {
				page: 0,
				list: []
			},
			new: {
				page: 0,
				list: []
			},
			sell: {
				page: 0,
				list: []
			},
		},
		currentType: 'pop',
		showBacktop: false,
		isTabFixed: false
	},

	onLoad: function (options) {
		this._getMultidata();
		this._getGoodsData('pop');
		this._getGoodsData('new');
		this._getGoodsData('sell');
	},

	onShareAppMessage: () => {

	},

	/*---------------------事件监听函数---------------------*/
	handleTabclick(event) {
		const index = event.detail.index;
		this.setData({
			currentType: types[index]
		})
	},
	onReachBottom() {
		this._getGoodsData(this.data.currentType);
	},

	handleImageLoad() {
		wx.createSelectorQuery().select('#tab-control').boundingClientRect(rect => {
			this.data.tabScrollTop=rect.top
		}).exec();
		
	},

	onPageScroll(option) {
		const scrollTop = option.scrollTop;
		const flag1 = scrollTop >= TOP_DISTANCE;
		if (flag1 != this.data.showBacktop) {
			this.setData({
				showBacktop: flag1
			})
		}
		const flag2 = scrollTop >= this.data.tabScrollTop;
		if (flag2 != this.data.isTabFixed) {
			this.setData({
				isTabFixed: flag2
			})
		}

	},

	/* ---------------------网络请求函数---------------------*/
	_getMultidata() { //获得首页上半部分数据
		getMultiData().then(res => {
			const Banners = res.data.data.banner.list;
			const Recommends = res.data.data.recommend.list;
			this.setData({
				banners: Banners,
				recommends: Recommends
			})
		})
	},
	_getGoodsData(type) { //获得下半部分商品数据
		const page = this.data.goods[type].page + 1;
		getGoodsData(type, page).then(res => {
			const list = res.data.data.list;
			const oldList = this.data.goods[type].list;
			oldList.push(...list);

			const typekey = `goods.${type}.list`
			const pagekey = `goods.${type}.page`
			this.setData({
				[typekey]: oldList,
				[pagekey]: page
			})
		})
	}
});