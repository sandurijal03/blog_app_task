import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: calc(100vh - 48px);
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url('/assets/register.jpeg');
  background-size: cover;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 500px;
  width: 500px;
`;

const Input = styled.input`
  padding: 10px;
  margin: 10px;
  font-size: 1.5rem;
  outline: none;
  border: none;
  border-radius: 10px;
`;

const Buttons = styled.div`
  margin: 0 auto;
  a {
    text-decoration: none;
    cursor: pointer;
  }
`;

const InputContainer = styled.div`
  width: 480px;
  height: 60px;
  margin-left: 10px;
  margin-top: 10px;
  display: flex;
  border-radius: 10px;
  justify-content: space-between;
  align-items: center;
  background-color: white;
  svg {
    font-size: 1.5rem;
    margin-right: 10px;
    cursor: pointer;
  }
`;

const Button = styled.button`
  padding: 10px;
  width: 200px;
  margin: 20px auto;
  border: none;
  border-radius: 10px;
  font-size: 1rem;
  cursor: pointer;
`;

const RegisterBtn = styled(Button)``;

export { RegisterBtn, Container, Buttons, Form, InputContainer, Input };
