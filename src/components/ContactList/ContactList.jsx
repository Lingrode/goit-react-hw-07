import { useSelector } from "react-redux";

import Contact from "../Contact/Contact";
import style from "./ContactList.module.css";

const ContactList = () => {
  const items = useSelector((state) => state.contacts.items);
  const filter = useSelector((state) => state.filters.name);

  const filteredContacts = items.filter((item) =>
    item.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <ul className={style.list}>
      {filteredContacts.length === 0 ? (
        <h2>Contacts not found😕</h2>
      ) : (
        filteredContacts.map(({ id, name, number }) => {
          return (
            <li className={style.item} key={id}>
              <Contact name={name} number={number} id={id} />
            </li>
          );
        })
      )}
    </ul>
  );
};

export default ContactList;
