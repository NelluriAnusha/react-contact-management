import * as React from 'react';
import AddContact from './AddContact';
import ContactList from './ContactList';
import './style.css';

export default function App() {
  const initContact = [
    {
      id: 1,
      name: 'ABC',
      email: 'abc@abc.com',
    },
    {
      id: 2,
      name: 'XYZ',
      email: 'xyz@abc.com',
    },
  ];

  const [contact, setContact] = React.useState(initContact);

  const handleAdd = (e, u) => {
    if (
      contact.filter((us) => us.name === u.name && us.email === u.email)
        .length > 0
    ) {
      alert('Contact already available');
      return;
    }

    setContact([...contact, u]);
  };

  return (
    <div>
      <h1>Contact Management App</h1>
      <AddContact clickadd={handleAdd} />
      <ContactList items={contact} />
    </div>
  );
}
