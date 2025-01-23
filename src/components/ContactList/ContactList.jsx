import { useSelector } from "react-redux";

import { selectFilteredContacts } from "../../redux/slices/selectors";

import Contact from "../Contact/Contact";
import style from "./ContactList.module.css";

const ContactList = () => {
  const filteredContacts = useSelector(selectFilteredContacts);

  return (
    <ul className={style.list}>
      {filteredContacts.length === 0 ? (
        <h2>No any contacts</h2>
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
