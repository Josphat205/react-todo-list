import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import TodoItem from './TodoItem';

function TodosList({ todos, setTodos }) {
  const handleComplete = (id) => {
    console.log('id check', id);
    const updateCompleted = [...todos].map((el) => {
      if (el.id === id) {
        return {
          ...el,
          completed: !el.completed,
        };
      }
      return el;
    });
    setTodos(updateCompleted);
  };
  const deleteTodo = (id) => {
    console.log('check id', id);
    const updateTodos = [...todos].filter((item) => item.id !== id);
    setTodos(updateTodos);
  };
  return (
    <Div>
      <Ul>
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            deleteTodo={() => deleteTodo(todo.id)}
            setTodos={setTodos}
            handleComplete={() => handleComplete(todo.id)}
          />
        ))}
      </Ul>
    </Div>
  );
}
const Div = styled.div`
  position: relative;
  width: 80%;
  margin: 50px auto;
  justify-content: center;
  align-items: center;
`;
const Ul = styled.ul`
  width: 80%;
  justify-content: center;
  position: absolute;
  left: 4%;
  margin: 10px 0;
`;

TodosList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.shape({ todo: PropTypes.string })),
  setTodos: PropTypes.string,
};
TodosList.defaultProps = {
  todos: [],
  setTodos: '',
};

export default TodosList;
