'use client';

import { useState } from 'react';
import css from './TagsMenu.module.css';
import Link from 'next/link';

const statusList: string[] = [
  'All',
  'Todo',
  'Work',
  'Personal',
  'Meeting',
  'Shopping',
];

const TagsMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <div className={css.menuContainer}>
      <button className={css.menuButton} onClick={toggle}>
        Notes ▾
      </button>
      {isOpen && (
        <ul className={css.menuList}>
          {statusList.map((note) => (
            <li className={css.menuItem} key={note}>
              <Link onClick={toggle} href={`/notes/filter/${note}`}>
                {note}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default TagsMenu;
