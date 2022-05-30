import { HttpClient } from "./http-client";
import { API_ENDPOINTS } from "./api-endpoints";

class Client {
  posts = {
    all: () => {
      return HttpClient.get(API_ENDPOINTS.POSTS);
    },
    get: (id: string) => {
      return HttpClient.get(API_ENDPOINTS.POSTS + `${id}`);
    },
    create: (data: any) => {
      return HttpClient.post(API_ENDPOINTS.POSTS, data);
    },
    update: (data: any) => {
      return HttpClient.put(API_ENDPOINTS.POSTS, data);
    },
    delet: (id: string) => {
      return HttpClient.delete(API_ENDPOINTS.POSTS + `${id}`);
    },
  };
  users = {};
}

export default new Client();
