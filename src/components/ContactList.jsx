import Contact from "./Contact";

export default function ContactList({ values, onDelete }) {
    return (
      <ul>
        {values.map((value) => (
          <li key={value.id}>
            <Contact id={value.id} name={value.name} number={value.number} onDelete={onDelete} />
          </li>
        ))}
      </ul>
    );
  }