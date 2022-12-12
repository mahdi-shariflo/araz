import API from "./axios";




export const editProfile = (data:any)=> API.put("/user/edit",data)