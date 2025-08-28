import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from '@tanstack/react-query';
import { fetchNotes } from '../../../../lib/api';
import NotesClient from './Notes.client';

interface NotesProp {
  params: Promise<{ slug: string[] }>;
}

const NotesPage = async ({ params }: NotesProp) => {
  const { slug } = await params;
  const status = slug[0] === 'All' ? '' : slug[0];
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery({
    queryKey: ['notes', status],
    queryFn: async () => fetchNotes({ status }),
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <NotesClient status={status} />
    </HydrationBoundary>
  );
};

export default NotesPage;
