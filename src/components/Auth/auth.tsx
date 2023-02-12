import {useMutation} from '@apollo/client';
import {Button, Center, Image, Input, Stack, Text} from '@chakra-ui/react';
import {Session} from 'next-auth';
import {signIn} from 'next-auth/react';
import {useState} from 'react';
import UserOperations from '../../graphql/operations/user';

interface IAuthProps {
  session: Session | null;
  reloadSession: () => void;
}

interface CreateUsernameData {
  createUsername: {
    success: boolean;
    error?: string;
  };
}

interface CreateUsernameInput {
  username: string;
}

const Auth: React.FC<IAuthProps> = ({session, reloadSession}) => {
  const [username, setUsername] = useState<string>('');

  const [createUsername, {data, loading, error}] = useMutation<CreateUsernameData, CreateUsernameInput>(
    UserOperations.Mutations.createUsername
  );

  const onSubmit = async () => {
    if (!username.trim()) return;
    try {
      await createUsername({variables: {username}});
    } catch (e) {}
  };

  return (
    <Center height='100vh'>
      <Stack spacing={8} align='center'>
        {session ? (
          <>
            <Text fontSize='3xl'>Create Username</Text>
            <Input placeholder='Enter the username' value={username} onChange={(e) => setUsername(e.target.value)} />
            <Button width='100%' onClick={onSubmit}>
              Save
            </Button>
          </>
        ) : (
          <>
            <Text fontSize='3xl'>noobMessager</Text>
            <Button onClick={() => signIn('google')} leftIcon={<Image height='20px' src='/images/googlelogo.png' />}>
              Continue with Google
            </Button>
          </>
        )}
      </Stack>
    </Center>
  );
};

export default Auth;
