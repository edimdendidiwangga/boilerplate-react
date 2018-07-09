import apisauce from 'apisauce'
const apiURL = process.env.API_URL

const create = (baseURL = apiURL) => {
  const api = apisauce.create({
    baseURL,
    timeout: 10000
  })

  const headerWithToken = (token) => {
    return {headers: {
      Authorization: `${token}`
    }}
  }

  const headerFormWithToken = (token) => {
    return {headers: {
      'Content-Type': 'multipart/form-data',
      Authorization: `${token}`
    }}
  }

  const headerNoToken = {
    header: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    }
  }

  if (process.env.NODE_ENV !== 'production') {
    const naviMonitor = (response) => console.log('API DEBUG! response =', response.ok)
    api.addMonitor(naviMonitor)
  }

  const login = (data) => api.post(`${baseURL}users/login`, {...data}, headerNoToken)
  const logout = (token) => api.post(`${baseURL}users/logout?access_token=${token}`, {}, headerWithToken(token))
  // example with token auth
  const getUser = (token) => api.get(`${baseURL}users/profile`, {}, headerWithToken(token))
  const addPhotoUser = (token, data) => api.post(`${baseURL}containers/images/upload`, data, headerFormWithToken(token))
  const getCategory = () => api.get(`${baseURL}categories`, {}, headerNoToken)

  return {
    login,
    logout,
    getUser,
    addPhotoUser,
    getCategory
  }
}

// let's return back our create method as the default.
export default {
  create
}
