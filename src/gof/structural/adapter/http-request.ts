import axios from "axios";

export default interface HttpRequest {
  get(uri: string): Promise<any>;
  post(uri: string, data: any): Promise<any>;
}

export class FetchAdapter implements HttpRequest {
  constructor() {}

  async get(uri: string): Promise<any> {
    const response = await fetch(uri);

    return response.json();
  }

  async post(uri: string, data: any): Promise<any> {
    const response = await fetch(uri, {
      method: "post",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    });

    return response.json();
  }
}

export class AxiosAdapter implements HttpRequest {
  async get(uri: string): Promise<any> {
    const response = await axios.get(uri);

    return response.data;
  }

  async post(uri: string, data: any): Promise<any> {
    const response = await axios.post(uri, data);

    return response.data;
  }
}
