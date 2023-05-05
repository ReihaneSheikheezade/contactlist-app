import { Link } from "react-router-dom";
import Contact from "../Component/Contact";
import { useEffect, useState } from "react";
import getContacts from "../Services/getContactsService";
import deleteOneContact from "../Services/deleteOneContactService";


const ContactList = () => {
  const [contacts, setContacts] = useState(null);
  let [allContacts, setAllContacts] = useState(null);
  const [searchTerm, setSearchTerm] = useState(null);

  useEffect(() => {
    getContacts()
      .then((res) => {
        setContacts(res.data);
        setAllContacts(res.data);
      })
      .catch((err) => console.log(err.message));
    console.log("refresh");
  }, []);

  const onDelete = async (id) => {
    try {
      await deleteOneContact(id);
      // const filteredContacts = contacts.filter((c) => c.id !== id);
      // setContacts(filteredContacts);
      const { data } = await getContacts();
      setContacts(data);
    } catch (error) {
      console.log(error);
    }
  };
  const searchHandler = async (e) => {
    try {
      setSearchTerm(e.target.value);
      const search = e.target.value;
      const { data } = await getContacts();
      allContacts = [...data];
      const filteredContacts = allContacts.filter((c) => {
        return Object.values(c)
          .slice(0, 2)
          .join(" ")
          .toLowerCase()
          .includes(search.toLowerCase());
      });

      if (search === "") {
        setContacts(allContacts);
      } else {
        setContacts(filteredContacts);
      }
    } catch (error) {
      console.log(error);
    }
  };
  console.log(contacts);

  return (
    <section className="w-full flex justify-center items-center">
      <div className="w-[500px] flex flex-col items-start ">
        <div className="w-full max-w-md  flex justify-between items-stretch mb-6">
          <h1 className="text-2xl font-bold font-sans ">Contacts</h1>
          <Link to="/" className="flex items-center justify-center mr-3">
            <button className="border-2 border-meshki text-meshki font-medium  px-4 py-1 rounded-lg">
              add
            </button>
          </Link>
        </div>
        <div className="w-full max-w-md  flex justify-between items-stretch mb-8">
          <label htmlFor="search" className="text-xl font-medium">
            Search
          </label>
          <input
            type="text"
            id="search"
            value={searchTerm}
            placeholder="Enter name,email.."
            onChange={searchHandler}
            className="w-44 bg-sabz outline-0 border-2 border-meshki px-1.5 py-1 rounded-lg "
          />
        </div>
        {contacts ? (
          contacts.map((contact) => {
            return <Contact contact={contact} onDelete={onDelete} />;
          })
        ) : (
          <p>loading...</p>
        )}
      </div>
    </section>
  );
};

export default ContactList;
