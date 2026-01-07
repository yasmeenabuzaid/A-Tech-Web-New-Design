import axios from "axios";
import config from"../../config/index";

const instance = axios.create({
  baseURL: config.baseURL, 
});

export default {
get: (config) =>instance.get(config.url, { params: config.params }),
post: (config) => instance.post(config.url, config.data),
put: (config) => instance.put(config.url, config.data), 
delete: (config) => instance.delete(config.url, { data: config.data }), 
};