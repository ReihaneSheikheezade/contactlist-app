import { useState } from "react";
import addOneContact from "../Services/addOneContactService";
import { Link, useNavigate } from "react-router-dom";

const AddContact = () => {
  const [contact, setContact] = useState({
    name: "",
    email: "",
  });

  const navigate = useNavigate();
  const changeHandler = (e) => {
    const { target } = e;
    setContact({ ...contact, [target.name]: target.value });
  };

  const submitForm = async (e) => {
    e.preventDefault();
    if (!contact.name || !contact.email) {
      alert("all fildes are mandatory!");
      return;
    }
    await addOneContact(contact);
    setContact({ name: "", email: "" });
    navigate("/contactlist");
  };

  return (
    <div className="w-full flex flex-col items-center  ">
      <form
        onSubmit={submitForm}
        className="w-full  max-w-xs shadow-lg flex flex-col items-center border border-gray-400 rounded-md p-5 mb-8 "
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
          Add Contact
        </button>
      </form>
      <Link to="/contactlist" className=" flex justify-start">
        <p>contactlist ?</p>
      </Link>
    </div>
  );
};

export default AddContact;
