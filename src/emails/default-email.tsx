import { FC } from 'react';

interface DefaultEmailProps {
  firstName: string;
}

export const DefaultEmail: FC<Readonly<DefaultEmailProps>> = ({
  firstName,
}) => {
  return (
    <div>
      <h1>Hello {firstName}</h1>
    </div>
  );
};

export default DefaultEmail;
