import { Fetch } from "@src/infraestructure/Fetch";

export class FetchController {
  async get<T>(url: string): Promise<T> {
    const response = await Fetch.get<T>(url);
    return response;
  }
  async post<T, K>(url: string, data: K): Promise<T> {
    const response = await Fetch.post<T, K>(url, data);
    return response;
  }
}
