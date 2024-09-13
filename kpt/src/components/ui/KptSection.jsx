import React,{useState} from 'react'
import styled from 'styled-components';

const Wrapper = styled.div`
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 10px;
  padding: 20px;
  margin: 20px 0;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 500px;
`;

const Input = styled.input`
  padding: 10px;
  margin-bottom: 10px;
  width: calc(100% - 22px);
  border: 1px solid #ddd;
  border-radius: 5px;
  font-size: 16px;
  box-sizing: border-box;
`;

const Button = styled.button`
  padding: 10px 15px;
  background-color: #4CAF50;
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  margin-top: 10px;

  &:hover {
    background-color: #45a049;
  }
`;

const List = styled.ul`
  list-style-type: none;
  padding: 0;
  margin-top: 20px;
`;

const ListItem = styled.li`
  padding: 10px;
  border-bottom: 1px solid #ddd;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const DeleteButton = styled.button`
  background-color: #ff4d4d;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 5px 10px;
  cursor: pointer;

  &:hover {
    background-color: #ff1a1a;
  }
`;

export default function KptSection({title,items,addItem,deleteItem}){
  const [input, setInput] = useState('');

  const handleAddItem = () => {
    if(input.trim()){
      addItem(input);
      setInput('');
    }
    else{
      alert('내용을 작성해주세요')
    }
    
  };
  const handleInput = (event) =>{
    setInput(event.target.value);
  }
    return (
    <Wrapper>
      <h3>{title}</h3>
      <Input type="text" value={input}  onChange={handleInput}/>
      <Button onClick={handleAddItem}>추가하기</Button>
      <List>
      {items.map((item,index)=> (
        <ListItem key={index}>{item} <DeleteButton onClick={()=>{deleteItem(index)}}>삭제하기</DeleteButton>
        </ListItem>
      ))}
        
      </List>
    </Wrapper>
  )
}
