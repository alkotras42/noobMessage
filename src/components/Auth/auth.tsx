import {Button, Center, Image, Input, Stack, Text} from '@chakra-ui/react';
import {Session} from 'next-auth';
import {signIn} from 'next-auth/react';
import {useState} from 'react';

interface IAuthProps {
  session: Session | null;
  reloadSession: () => void;
}

const Auth: React.FC<IAuthProps> = ({session, reloadSession}) => {
  const [username, setUsername] = useState<string>('');

  const onSubmit = async () => {
    try {
    } catch (e) {}
  };

  return (
    <Center height='100vh'>
      <Stack spacing={8} align='center'>
        {session ? (
          <>
            <Text fontSize='3xl'>Create Username</Text>
            <Input placeholder='Enter the username' value={username} onChange={(e) => setUsername(e.target.value)} />
            <Button width='100%' onClick={onSubmit}>Save</Button>
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
