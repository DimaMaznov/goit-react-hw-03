import { useState, useEffect} from "react";
import ContactList from "./ContactList";
import SearchBox from "./SearchBox";
import ContactForm from "./ContactForm";

export default function App() {
    
  

    const [values, setValues] = useState(() => {
      const saved = localStorage.getItem("contacts");
      return JSON.parse(saved).length > 4 ? JSON.parse(saved) : [
        { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
        { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
        { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
        { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' }
      ];
    });

      const [filter, setFilter] = useState('');
      
      const handleDelete = (id) => {
        setValues(values.filter(value => value.id !== id));
      };
      const visibleTasks = values.filter((value) =>
        value.name.toLowerCase().includes(filter.toLowerCase())
      );
      const addContact = (newContact) => {
        setValues((prevContact) => {
          return [...prevContact, newContact];
        });
      };
      useEffect(() => {
        localStorage.setItem("contacts", JSON.stringify(values));
    }, [values]);
    
    return (
    <div>
    <h1>Phonebook</h1>
    <ContactForm addContact={addContact} />
    <SearchBox value= {filter} onFilter = {setFilter} />
    <ContactList values={visibleTasks} onDelete={handleDelete} />
  </div>
);}