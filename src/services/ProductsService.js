class ProductsService {
  axios;
  baseUrl;

  constructor(axios) {
    this.axios = axios;
    this.baseUrl, "//api.jsonbin.io/b/";
  }

  getAll(params) {
    let self = this;
    return self.axios.get(`//api.jsonbin.io/b/5b665c1b7b212953678ad6b5/3`);
  }

  getById(id) {
    let self = this;
    self.axios
      .get(`//api.jsonbin.io/b/5b665c1b7b212953678ad6b5/1`)
      .then(response => {
        let items = response.data.items;
        items.forEach(item => {
          if (item.id == id) {
            console.log(item);
            return item;
          }
        });
        return null;
      })
      .catch(err => null);
  }
}

export default ProductsService;
