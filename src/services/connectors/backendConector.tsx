import request from "../request";

class BackendConector {
  async sendContactForm(data: any) { 
    return request.post({ url: "/api/contact", data }); 
  }
}

export default new BackendConector();