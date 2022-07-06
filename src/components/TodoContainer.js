import React, { useState } from 'react';
import styled from 'styled-components';
import Header from './Header';
import InputTodo from './InputTodo';
import TodosList from './TodosList';

function TodoContainer() {
  // eslint-disable-next-line
  const [todos, setTodos] = useState([]);
  const [inputText, setInputText] = useState('');

  return (
    <>
      <Container>
        <Header />
        <InputTodo
          todos={todos}
          setTodos={setTodos}
          inputText={inputText}
          setInputText={setInputText}
        />
        <TodosList todos={todos} setTodos={setTodos} />
      </Container>
    </>
  );
}
const Container = styled.div`
  width: 60%;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
  position: relative;
`;
export default TodoContainer;
