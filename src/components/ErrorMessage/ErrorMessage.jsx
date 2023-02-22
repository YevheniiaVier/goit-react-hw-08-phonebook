import { ErrorBox, ErrorText } from './ErrorMessage.styled';

export const ErrorMessage = ({ text, imgPath }) => {
  return (
    <ErrorBox>
      <ErrorText>{text}</ErrorText>
    </ErrorBox>
  );
};
