import Axios from "axios";

export default Axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID TGDLSj8kcYP1_Aw2MxdmaznAGFBTKpQ-SDVHNIHMDqA",
  },
});
