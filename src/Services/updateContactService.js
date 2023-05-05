import http from "./httpService";

export default function updateContact(id,updatedContact){
  return http.put(`/contacts/${id}`,updatedContact);
}