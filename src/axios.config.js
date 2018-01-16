import axios from 'axios'

const configAxios = () => {
	axios.defaults.baseURL = 'https://jsonplaceholder.typicode.com'
	axios.defaults.headers.common['authorization'] = 'AUTH TOKEN'

	axios.interceptors.request.use(request => {
		return request
	}, error => {
		// every request error can be handled locally, but all of them get printed to the console here globally
		console.log(error)
		return Promise.reject(error)
	})

	axios.interceptors.response.use(response => {
		return response
	}, error => {
		// every response error can be handled locally, but all of them get printed to the console here globally
		console.log(error)
		return Promise.reject(error)
	})	
}

export default configAxios