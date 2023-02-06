import {signIn, signOut, useSession} from 'next-auth/react';

export default function Home() {
  const {data, status} = useSession();

  return (
    <div>
      {data?.user?.name ? (
        <button onClick={() => signOut()}>Sign Out</button>
      ) : (
        <button onClick={() => signIn('google')}>Sign In</button>
      )}

      {data?.user?.name}
    </div>
  );
}
