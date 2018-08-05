import Axios from "axios";
import ProductsService from "../services/ProductsService";

Axios.defaults.headers.common.Accept = "application/json";

export default {
  productsService: new ProductsService(Axios)
};
