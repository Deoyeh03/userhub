import { notFound } from 'next/navigation';
import usersData from '@/data/users.json';
import UserProfile from '@/components/UserProfile';

interface UserDetailPageProps {
  params: Promise<{ id: string }>;
}

export default async function UserDetailPage({ params }: UserDetailPageProps) {
  const { id } = await params;
  const user = usersData.find((u) => u.id === parseInt(id));

  if (!user) {
    notFound();
  }

  return <UserProfile user={user} />;
}
