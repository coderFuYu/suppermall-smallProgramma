import request from "./network"
import {
	BaseURL
} from "./config.js"

export function getMultiData() {
	return request({
		url: BaseURL + "/home/multidata"
	})
}
export function getGoodsData(type, page) {
	return request({
		url: BaseURL + "/api/m3/home/data",
		data: {
			type,
			page
		}
	})
}