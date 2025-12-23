import  axios from "axios";

export default axios.create({
    baseURL:"https://api.rawg.io/api",
    params:{
        key:"7fed01883c18418daf879adb7f9d833e"
    }
})