import { notFound } from 'next/navigation';
import usersData from '@/data/users.json';
import UserProfile from '@/components/UserProfile';
import Modal from '@/components/Modal';

export default async function UserModal({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const user = usersData.find((u) => u.id === parseInt(id));

  if (!user) {
    notFound();
  }

  return (
    <Modal>
      <UserProfile user={user} isModal={true} />
    </Modal>
  );
}
