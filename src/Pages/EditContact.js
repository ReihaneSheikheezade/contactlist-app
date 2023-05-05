import { useEffect, useState } from "react";
import getOneContact from "../Services/getOneContactService";
import { useNavigate, useParams } from "react-router-dom";
import updateContact from "../Services/updateContactService";

const EditContact = () => {
  const [contact , setContact] = useState({name:"",email:""});
  const params = useParams();
  const navigate = useNavigate();
  useEffect(()=>{
    getOneContact(params.id).then(res => setContact({...res.data}) ).catch(err => console.log(err))
  },[]);
  const changeHandler = (e)=>{
    const {target} = e;
    setContact({...contact,[target.name]:target.value})
  };
 
  const submitForm = (e)=>{   
  if(!contact.name || !contact.email){
    alert("all fildes are mandatory!")
    return;
  }
   e.preventDefault();
   updateContact(params.id,contact).then().catch(err => console.log(err.message));
   navigate("/contactlist");
  };
  return (
    <div className="flex justify-center ">
      <form
        onSubmit={submitForm}
        className="w-full max-w-xs shadow-lg flex flex-col items-center border border-gray-400 rounded-md p-5 mb-8 "
      >
        <div className="flex flex-col items-start mb-2 ">
          <label htmlFor="name" className="mb-0.5">
            Name
          </label>
          <input
            name="name"
            id="name"
            value={contact.name}
            onChange={changeHandler}
            className="rounded-md px-2 py-1 bg-neutral-100 border-2 border-slate-300 outline-0 focus:border-slate-500"
          />
        </div>
        <div className="flex flex-col items-start mb-4">
          <label htmlFor="email" className="mb-0.5">
            Email
          </label>
          <input
            name="email"
            id="email"
            value={contact.email}
            onChange={changeHandler}
            className="rounded-md px-2 py-1 bg-neutral-100 border-2 border-slate-300 outline-0 focus:border-slate-500"
          />
        </div>
        <button
          type="submit"
          className="bg-narangi text-neutral-50 rounded-md px-3 py-1"
        >
          Edit Contact
        </button>
      </form>
    </div>
  );
};

export default EditContact;
