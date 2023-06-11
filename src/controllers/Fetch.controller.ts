import { Fetch } from "@src/infraestructure/Fetch";

export class FetchController {
  async get<T>(url: string) {
    try {
      const response = await Fetch.get<T>(url);
      return response;
    } catch (error) {
      console.log(error);
    }
  }
  async post<T, K>(url: string, data: K) {
    try {
      const response = await Fetch.post<T, K>(url, data);
      return response;
    } catch (error) {
      console.log(error);
    }
  }
}
