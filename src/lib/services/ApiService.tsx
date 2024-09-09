import axios, { AxiosInstance, AxiosRequestConfig } from 'axios'

class ApiServiceClass {
  private axiosInstance: AxiosInstance

  constructor() {
    this.axiosInstance = axios.create({
      baseURL: process.env.NEXT_PUBLIC_BACKEND_URL,
    })
  }

  public async get<T>(endpoint: string, config?: AxiosRequestConfig): Promise<T> {
    const res = await this.axiosInstance.get<T>(endpoint, config)
    return res.data
  }

  public async post<T>(
    endpoint: string,
    data: any,
    config?: AxiosRequestConfig,
  ): Promise<T> {
    const res = await this.axiosInstance.post<T>(endpoint, data, config)
    return res.data
  }

  public async delete<T>(
    endpoint: string,
    config?: AxiosRequestConfig,
  ): Promise<T | null> {
    try {
      const res = await this.axiosInstance.delete<T>(endpoint, config)
      console.log(res)

      return res.data
    } catch (error) {
      console.error(`Failed to delete at ${endpoint}:`, error)
      return null
    }
  }
}

const ApiService = new ApiServiceClass()
export { ApiService }
