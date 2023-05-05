import { Link } from "react-router-dom";


const Contact = ({contact,onDelete}) => {
  const {name,email,id} = contact;

  return ( 
    <div
    key={contact.id}
    className="w-full bg-sabz  border border-gray-400 shadow-md mb-3 max-w-md flex justify-between items-center rounded-md  p-2"
  >
    <div className="flex items-center gap-x-1">
      <span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"
          />
        </svg>
      </span>
      <Link to={`/contact/${id}`} state={{ contact: contact }}>
        <div className="flex flex-col items-start">
          <p>name : {name}</p>
          <p>email : {email}</p>
        </div>
      </Link>
    </div>
    <div className="flex items-center gap-x-1">
    <Link to={`/edit/${id}`} state={{contact : contact}}>
    <button className="bg-narangi text-neutral-50 font-medium rounded-md px-3 py-1">Edit</button>
    </Link>
    <button
      onClick={() => onDelete(contact.id)}
      className="bg-narangi text-neutral-50 font-semibold rounded-md px-3 py-1"
    >
      delete
    </button>
    </div>
    
  </div>
   );
}
 
export default Contact;