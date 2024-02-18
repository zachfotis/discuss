'use client';

import { useSession } from 'next-auth/react';

export default function Profile() {
  const { data: session } = useSession();

  if (session?.user) {
    return <div>From client: {session.user.name}</div>;
  }

  return <div>From client: user not signed in</div>;
}
