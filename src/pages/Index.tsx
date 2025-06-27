import React, { useState } from 'react';

// Layout Component
import MainAppLayout from '@/components/layout/MainAppLayout';

// UI Components for the Login Form
import FormContainer from '@/components/Login/FormContainer';
import FormHeading from '@/components/Login/FormHeading';
import InputField from '@/components/Login/InputField';
import PrimaryButton from '@/components/Login/PrimaryButton';
import SecondaryText from '@/components/Login/SecondaryText';

/**
 * The main login page for the application.
 * It utilizes a centered layout to display the login form,
 * bringing together various form components into a cohesive UI.
 */
const IndexPage: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    // In a real application, you would handle the login logic here,
    // e.g., call an API with the username and password.
    console.log('Attempting to log in with:', { username, password });
  };

  return (
    <MainAppLayout>
      <FormContainer>
        <FormHeading />
        <InputField
          id="username"
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          autoComplete="username"
          aria-label="Username"
        />
        <InputField
          id="password"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          autoComplete="current-password"
          aria-label="Password"
        />
        <PrimaryButton onClick={handleLogin}>
          Log in
        </PrimaryButton>
        <SecondaryText />
      </FormContainer>
    </MainAppLayout>
  );
};

export default IndexPage;
