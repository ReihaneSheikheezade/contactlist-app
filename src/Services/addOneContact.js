import http from "./httpService";


export default function addOneContact(contact){
  return http.post("/contacts",contact);
}