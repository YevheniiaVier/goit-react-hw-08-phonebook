import { Section } from 'components/Section/Section';
import { WelcomeMessage, Box } from './HomePage.styled';

const HomePage = () => {
  return (
    <Section>
      <Box>
        <WelcomeMessage>Welcome to Phonebook!</WelcomeMessage>
      </Box>
    </Section>
  );
};

export default HomePage;
