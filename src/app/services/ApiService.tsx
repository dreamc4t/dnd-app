import axios, { AxiosRequestConfig } from 'axios'

class ApiServiceClass {
  baseURL = process.env.NEXT_PUBLIC_BACKEND_URL

  public async get<T>(endpoint: string, config?: AxiosRequestConfig): Promise<T> {
    const url = `${this.baseURL}/${endpoint}`
    const res = await axios.get(url, config)
    return res.data
  }
}

const ApiService = new ApiServiceClass()
export { ApiService }
