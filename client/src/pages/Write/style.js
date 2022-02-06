import styled from 'styled-components';
import { FaPlus } from 'react-icons/fa';

const Container = styled.div`
  width: 1540px;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  background-color: #fff;
  padding: 10px;
`;

const WriteIcon = styled(FaPlus)`
  width: 25px;
  height: 25px;
  font-size: 20px;
  border: 1px solid;
  border-radius: 50%;
  color: rgb(129, 125, 125);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

const Form = styled.form`
  position: relative;
`;

const InputContainer = styled.div`
  margin-left: 150px;
  display: flex;
  align-items: center;
`;

const Input = styled.input`
  font-size: 30px;
  border: none;
  padding: 20px;
  width: 70vw;
  :focus {
    outline-style: none;
  }
  ::placeholder {
    color: rgb(189, 185, 185);
    font-weight: 400;
  }
`;

const Textarea = styled.textarea`
  font-size: 30px;
  border: none;
  padding: 20px;
  width: 70vw;
  height: 100vh;
  font-family: inherit;
  :focus {
    outline-style: none;
  }
  ::placeholder {
    color: rgb(189, 185, 185);
    font-weight: 400;
  }
`;

const Submit = styled.button`
  position: absolute;
  top: 20px;
  right: 50px;
  color: white;
  background-color: teal;
  padding: 10px;
  border: none;
  border-radius: 10px;
  font-size: 16px;
  cursor: pointer;
  display: flex;
  align-items: center;
`;

// exporting variables
export { Container, WriteIcon, Form, InputContainer, Input, Textarea, Submit };
