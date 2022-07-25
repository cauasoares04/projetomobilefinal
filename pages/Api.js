import axios from "axios";

const Api =axios.create({
baseURL:"https://majorcampeonatocsgo.azurewebsites.net/apimajor/v1/"
});

export default Api

