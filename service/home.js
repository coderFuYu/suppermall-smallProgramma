import request from "./network"
import {
	BaseURL
} from "./config.js"

export function getMultiData() {
	return request({
		url: BaseURL + "/home/multidata"
	})
}