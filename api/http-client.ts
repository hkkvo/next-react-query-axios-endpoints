import axios from "axios";
import { responseSymbol } from "next/dist/server/web/spec-compliant/fetch-event";

const AXIOS = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
});

export class HttpClient {
  public static async get<T>(url: string, params?: unknown) {
    const reponse = await AXIOS.get<T>(url, { params });
    return reponse.data;
  }

  public static async post<T>(url: string, data: unknown, options?: any) {
    const reponse = await AXIOS.post<T>(url, data, options);
    return reponse.data;
  }

  public static async put<T>(url: string, data: unknown) {
    const reponse = await AXIOS.put<T>(url, data);
    return reponse.data;
  }

  public static async delete<T>(url: string) {
    const reponse = await AXIOS.delete<T>(url);
    return reponse.data;
  }
}
