'use client';
import { useRouter } from 'next/navigation';
import { fetchNoteById } from '@/lib/api';
import { useQuery } from '@tanstack/react-query';
import { useParams } from 'next/navigation';
import css from './NotePreview.module.css';
import Modal from '../../../../components/Modal/Modal';

const NotePreview = () => {
  const router = useRouter();
  const onClose = () => router.back();

  const { id } = useParams<{ id: string }>();
  const { data: note } = useQuery({
    queryKey: ['notes', id],
    queryFn: () => fetchNoteById(id),
    refetchOnMount: false,
  });

  return (
    <Modal onClose={onClose}>
      {note && (
        <div className={css.item}>
          <div className={css.header}>
            <h2>{note?.title}</h2>
          </div>
          <p className={css.content}>{note?.content}</p>
          <p className={css.date}>{note?.createdAt}</p>
        </div>
      )}
    </Modal>
  );
};

export default NotePreview;
