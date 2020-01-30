import React, { useState } from 'react';
import { Input, Button } from 'reactstrap';
import styled from 'styled-components';
import devcImage from '../../assets/img/logo-devc.png';
import { breakpoint } from 'styled-components-breakpoint';

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;

  ${breakpoint('sm')`
    background-color: #f4f3ef;
  `}
`;

const Logo = styled.img.attrs({
  src: devcImage,
})`
  margin-bottom: 30px;
`;

const Card = styled.div`
  width: 400px;
  height: 300px;
  display: flex;
  padding: 15px;
  border-radius: 5px;
  flex-direction: column;
  background-color: white;
  justify-content: center;
`;

const InputStyled = styled(Input)`
  margin-bottom: 10px;
`;

function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleOnClickToLogin() {
    console.log('cliquei');
  }

  function handleOnChangeEmail({ target: { value: emailToUpdate } }) {
    setEmail(emailToUpdate);
  }

  function handleOnChangePassword({ target: { value: passwordToUpdate } }) {
    setPassword(passwordToUpdate);
  }

  return (
    <Container>
      <Card>
        <Logo />
        <InputStyled
          value={email}
          type="email"
          onChange={handleOnChangeEmail}
          placeholder="Digite seu e-mail"
        />
        <InputStyled
          type="password"
          value={password}
          placeholder="Digite sua senha"
          onChange={handleOnChangePassword}
        />
        <Button onClick={handleOnClickToLogin}>Entrar</Button>
      </Card>
    </Container>
  );
}

export default SignIn;
