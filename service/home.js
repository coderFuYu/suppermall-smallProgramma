import request from "./network"
import {
	BASEURL
} from "./config.js"

export function getMultiData() {
	return request({
		url: BASEURL + "/home/multidata"
	})
}