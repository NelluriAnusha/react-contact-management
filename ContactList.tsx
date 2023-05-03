import * as React from 'react';
import './style.css';

export default function ContactList({ items }) {
  return (
    <div>
      <h1>List Contact</h1>
      {items &&
        items.map((item) => (
          <ul>
            <li>{item.name}</li>
            <li>{item.email}</li>
          </ul>
        ))}
    </div>
  );
}
