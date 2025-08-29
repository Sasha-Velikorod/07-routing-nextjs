import Link from 'next/link';
import css from './SidebarNotes.module.css';

const tagsList: string[] = [
  'All',
  'Todo',
  'Work',
  'Personal',
  'Meeting',
  'Shopping',
];

const SidebarNotes = () => {
  return (
    <ul className={css.menuList}>
      {tagsList.map((note) => (
        <li className={css.menuItem} key={note}>
          <Link href={`/notes/filter/${note}`} className={css.menuLink}>
            {note}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default SidebarNotes;
