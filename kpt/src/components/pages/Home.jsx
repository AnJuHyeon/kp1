import React,{useState,useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import KptSection from '../ui/KptSection';
import styled from 'styled-components';
//hello
const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 20px;
  gap: 20px;
  
`
const Title = styled.h2`
  text-align: center;
`
const Container = styled.div`
  display: flex;
  flex-direction: row-reverse;
`
const Button = styled.button`

  background-color: #d5f5f7;
  border: none;
  border-radius: 5px;
  font-size: 13px;
  font-weight: bold;
  cursor: pointer;
  text-align: center;

  &:hover {
    background-color: #cbdddc;
  }
`;

const FlexItem = styled.div`
  flex: 1 1 45%;
  max-width: 45%;
  min-width: 300px;

  &:nth-child(3) {
    flex: 1 1 100%;
    max-width: 100%;
  }
`;


export default function Home({isLoggedIn,handleLogout}) {
  const navigate = useNavigate();
  const [kptItems,setKptItems] = useState({keep : [], problem : [], try : []});

  useEffect(()=> {
    if(!isLoggedIn){
      navigate('/');
    }
    else{
      const storedKpt = JSON.parse(localStorage.getItem('kptItems'));
      if(storedKpt) {
        setKptItems(storedKpt);  
    }
  }
  }, [isLoggedIn,navigate])

  const handleAddItem = (type,value) => {
    if(!isLoggedIn){
      alert('로그인을 한 뒤 이용해주세요');
      navigate('/login');
      return;
    }
    const newItems = {...kptItems};
    newItems[type].push(value);
    setKptItems(newItems);
    localStorage.setItem('kptItems', JSON.stringify(newItems));
  }
    const handleDeleteItem = (type,index) => {
      const newItems = {...kptItems};
      newItems[type].splice(index,1);
      setKptItems(newItems);
      localStorage.setItem('kptItems', JSON.stringify(newItems));
    }
  
  return (<>
      {isLoggedIn ? (
        <Container>
            <Button onClick={handleLogout}>로그아웃</Button>
            <h3>안녕하세요, {JSON.parse(localStorage.getItem('user')).nickName}님</h3>
        </Container>
      ) : (
        <Container>
          <Button onClick={()=> navigate('/login')}>로그인</Button>
          <h3>로그인 후 이용해주세요.</h3>
          </Container>
      )}
      <Title>KPT 회고록</Title>
    <Wrapper>
      <FlexItem>
      <KptSection 
        title="Keep" 
        items={kptItems.keep} 
        addItem={(value) => handleAddItem('keep', value)} 
        deleteItem={(index) => handleDeleteItem('keep', index)} 
      />
      </FlexItem>
      <FlexItem>
      <KptSection
        title="Problem" 
        items={kptItems.problem} 
        addItem={(value) => handleAddItem('problem', value)} 
        deleteItem={(index) => handleDeleteItem('problem', index)} 
      />
      </FlexItem>
      <FlexItem>
      <KptSection 
        title="Try" 
        items={kptItems.try} 
        addItem={(value) => handleAddItem('try', value)} 
        deleteItem={(index) => handleDeleteItem('try', index)} 
      />
      </FlexItem>
    </Wrapper>
    </>
  )
}
