import React from 'react'
import css from "components/ContactList/ContactList.module.css"

export default function ContactList({ items, removeContact }) {
    const contacts = items.map(({ name, number, id }) => {
        return (
            <li key={id} className={css.item}>
                <span className={css.marker}></span>
                <p className={css.text}>{`${name}:  ${number}`}</p>
                <button
                    className={css.button}
                    type='button'
                    onClick={() => { removeContact(id) }}
                    >Delete
                </button>
            </li>)
    })
  return (
      <ul className={css.contactList}>{contacts}</ul>
  )
}


