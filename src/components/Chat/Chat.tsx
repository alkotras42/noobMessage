import {Box, Button} from '@chakra-ui/react';
import { signOut } from 'next-auth/react';

interface IChatProps {}

const Chat: React.FC<IChatProps> = (props) => {
  return (
    <Box>
      <div>CHAT</div>
      <Button onClick={() => signOut()}>Logout</Button>
    </Box>
  );
};

export default Chat;
