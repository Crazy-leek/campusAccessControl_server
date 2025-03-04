import {
	myRequest
} from './baseRequest.js'
export const login = data => myRequest({
	url: '/api/login',
	method: "post",
	data
})
export const register = data => myRequest({
	method: 'post',
	url: '/api/register',
	data
})
export const getClasses = () => myRequest({
	url: '/api/getclasses'
})
export const getUserInfo = () => {
	console.log("6666666666666666")
	return myRequest({
		url: '/my/getuserinfo'
	})
}
export const getFaceInfo = () => myRequest({
	url: '/my/getfaceinfo'
})
export const upEmail = data => myRequest({
	url: '/my/upemail',
	method: 'post',
	data
})
export const upPassword = data => myRequest({
	url: '/my/uppassword',
	method: 'post',
	data
})
export const upHeadPortrait = data => myRequest({
	url: '/my/upHeadPortrait',
	method: 'post',
	data
})
export const postFacePic = ({
	name,
	filePath
}) => uploadfile({
	url: 'http://192.168.43.24:8081/my/postFacePic',
	name,
	filePath
})
export const alterFacePic = ({
	name,
	filePath
}) => uploadfile({
	url: 'http://192.168.43.24:8081/my/alterFacePic',
	name,
	filePath
})
export const getApplication = (data = null) => myRequest({
	url: '/app/getApp',
	data
})
export const postApplication = data => myRequest({
	url: '/app/postApp',
	method: 'post',
	data
})
export const cancelApp = data => myRequest({
	url: '/app/cancelApp',
	method: 'post',
	data
})
export const toExamineApp = data => myRequest({
	url: '/app/alterApp',
	method: 'post',
	data
})
// export const uploadFile = ({
// 	name,
// 	filePath
// }) => uploadfile({
// 	name,
// 	url: 'http://192.168.43.24:8088/upload',
// 	filePath
// })