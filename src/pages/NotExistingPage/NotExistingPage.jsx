import { Box, Title, StyledLink as Link } from './NotExistingPage.styled.';

const NotExistingPage = () => {
  return (
    <Box>
      <Title>Not Existing Page</Title>
      <Link to="/contacts">To my Contacts</Link>
    </Box>
  );
};

export default NotExistingPage;
