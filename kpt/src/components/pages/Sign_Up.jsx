import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
`
const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  padding: 40px 30px;
  border: 1px solid #ddd;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`
const Label = styled.label`
  margin-bottom: 5px;
  font-weight: bold;
  align-self: flex-start;
`;

const Input = styled.input`
  padding: 12px 15px;
  margin-bottom: 20px;
  width: 95%;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-size: 16px;
`;

const Button = styled.button`
  padding: 12px 15px;
  background-color: #d5f5f7;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  width: 100%;
  text-align: center;

  &:hover {
    background-color: #cbdddc;
  }
`;

export default function Sign_Up() {
  const [name,setName] = useState('');
  const [password,setPassword] = useState('');
  const [nickName,setNickName] = useState('');
  const navigate = useNavigate();

  const handleChange = (event) => {
    setName(event.target.value);
  }
  const handleChangePw = (event) => {
    setPassword(event.target.value);
  }
  const handleChangeNick = (event) => {
    setNickName(event.target.value)
  }
  const handleSubmit = (event) =>{
    event.preventDefault();
    localStorage.setItem('user', JSON.stringify({name,password,nickName}));
    navigate('/');
  }
  
  return (
    <Wrapper>
      <h2>회원 가입</h2>
      <Form onSubmit={handleSubmit}>
          <Label>
            아이디 : 
            <Input type="text" value={name} onChange={handleChange}  />
          </Label>
          <Label>
            비밀 번호 :
            <Input type="password" value={password} onChange={handleChangePw} />
          </Label>
          <Label>
            닉네임 :
            <Input type="text" value={nickName} onChange={handleChangeNick} />
          </Label>
          <Button type='submit'>회원 가입</Button>
      </Form>
    </Wrapper>
  )
}
