import * as React from 'react';
import './style.css';

export default function AddContact({ clickadd }) {
  const [user, setUser] = React.useState({ name: '', email: '' });

  const sendClick = (e) => {
    if (user.name === '' || user.email === '') {
      alert('All fields are mandatory');
      return;
    }
    if (!user.email.includes('@')) {
      alert('Invalid email');
      return;
    }
    clickadd(e, user);
    setUser({ name: '', email: '' });
  };

  return (
    <div>
      <h1>Add Contact</h1>
      <div>
        <label>Name</label>
        <input
          type="text"
          name="Name"
          placeholder="Name"
          value={user.name}
          onChange={(e) => setUser({ ...user, name: e.target.value })}
        />
      </div>
      <div>
        <label>Email</label>
        <input
          type="text"
          name="Email"
          placeholder="Email"
          value={user.email}
          onChange={(e) => setUser({ ...user, email: e.target.value })}
        />
      </div>
      <button onClick={sendClick}>Add</button>
    </div>
  );
}
