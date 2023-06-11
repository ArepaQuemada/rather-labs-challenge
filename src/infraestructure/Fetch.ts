import axios from "axios";

export class Fetch {
  static async get<T>(url: string): Promise<T> {
    const response = await axios.get<T>(url);
    return response.data;
  }

  static async post<T, K>(url: string, data: K): Promise<T> {
    const response = await axios.post<T>(url, data);
    return response.data;
  }

  static async put<T, K>(url: string, data: K): Promise<T> {
    const response = await axios.put<T>(url, data);
    return response.data;
  }

  static async delete<T>(url: string): Promise<T> {
    const response = await axios.delete<T>(url);
    return response.data;
  }
}
