// src/services/connectors/contact.connector.ts
import request from "../request";

class BackendConector {
  async sendContactForm(data) {
 return request.post({ url: "/contact", data });
  }
}

export default new BackendConector();
