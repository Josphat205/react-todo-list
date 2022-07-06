import React from 'react';
import styled from 'styled-components';
import { BsFillTrashFill } from 'react-icons/bs';
import PropTypes from 'prop-types';

function TodoItem({
  todo, deleteTodo, handleComplete,
}) {
  return (
    <>
      <Div key={todo.id}>
        <CheckText>
          <CheckBox
            type="checkbox"
            onChange={() => handleComplete()}
            checked={todo.completed}
          />
          <Li>{todo.title}</Li>
        </CheckText>
        <TrashIcon onClick={() => deleteTodo()} />
      </Div>
    </>
  );
}
const CheckBox = styled.input`
  font-size: 55px;
  color: red;
`;
const Li = styled.li`
  list-style: none;
  font-size: 17px;
  margin: 10px 0;
  flex:1;
  word-wrap:wrap;
`;
const Div = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  padding: 0 5px;
  &:hover {
    background: lightgrey;
  }
`;
const TrashIcon = styled(BsFillTrashFill)`
  font-size: 22px;
  color: maroon;
  cursor:pointer;
  opacity:.7
  &:hover {
    opacity:1;
  }
`;
const CheckText = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: black;
`;

TodoItem.propTypes = {
  todo: PropTypes.shape({
    title: PropTypes.string,
    id: PropTypes.number,
    completed: PropTypes.bool,
  }),
  deleteTodo: PropTypes.func,
  handleComplete: PropTypes.func,
};
TodoItem.defaultProps = {
  todo: {},
  deleteTodo: '',
  handleComplete: '',
};
export default TodoItem;
