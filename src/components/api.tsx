/* We can create our main base api to access from everywhere easly. */
/* Basitçe burada kendi ana api üzerinden get post delete update yapabileceğimiz bir component oluşturuyoruz */
import axios from "axios";

export const Api = () => {
    return axios.create({
        baseURL : "https://62286b649fd6174ca82321f1.mockapi.io/case-study",
    })
}

