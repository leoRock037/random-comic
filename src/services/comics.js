import axios from "axios";
import { URL } from "./config.js";

export default new (class ComicsServices {

  get_current_commic() {
    return axios({
      url: `${URL}/info.0.json`,
      method: "get"
    })
      .then(resp => {
        return resp;
      })
      .catch(err => {
        return err;
      });
  }

  get_random_commic(comicId) {
    return axios({
      url: `${URL}/${comicId}/info.0.json `,
      method: "get"
    })
      .then(resp => {
        return resp;
      })
      .catch(err => {
        return err;
      });
  }
})();
