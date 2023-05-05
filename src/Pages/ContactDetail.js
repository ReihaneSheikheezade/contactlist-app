import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import getOneContact from "../Services/getOneContactService";

const ContactDetail = () => {
  const [contact, setContact] = useState({});
  const params = useParams();
  useEffect(() => {
    getOneContact(params.id)
      .then((res) => setContact({ ...res.data }))
      .catch((err) => console.log(err));
  }, []);
  return (
    
      <div className="flex flex-col items-center ">
        <div className="w-full max-w-[300px] flex flex-col items-start mb-8 text-lg gap-y-1  border border-meshki rounded-md px-3 py-2">
          <p>name is : <span className="ml-3">{contact.name}</span></p>
          <p>email is : <span className="ml-3">{contact.email}</span></p>
        </div>
        <Link to="/contactlist">
          <button className="text-neutral-50 bg-narangi rounded-lg font-semibold px-4 py-1.5">
            go to Contact list
          </button>
        </Link>
      </div>
   
  );
};

export default ContactDetail;
