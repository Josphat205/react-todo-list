import React from 'react';
import styled from 'styled-components';
import { BsFillPlusCircleFill } from 'react-icons/bs';
import PropTypes from 'prop-types';

function InputTodo({
  setTodos, todos, inputText, setInputText,
}) {
  const handleChange = (e) => {
    setInputText(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputText === '') {
      alert('Please add item');
      return;
    }
    setTodos([
      ...todos, {
        id: todos.length,
        title: inputText,
        completed: false,
      },
    ]);
    setInputText('');
  };
  return (
    <Div>
      <form>
        <Input type="text" onChange={handleChange} name="name" value={inputText} placeholder="Add todo...." />
        <PlusIcon onClick={handleSubmit} />
      </form>
    </Div>
  );
}
const Input = styled.input`
-webkit-border-radius: 20px;
-moz-border-radius: 20px;
 border-radius: 20px;
 border: 1px solid #2d9fd9;
 color: #a0d18c;
 height: 35px;
 padding-left: 10px;
 width:80%;
 margin: 0 auto;
 `;
const PlusIcon = styled(BsFillPlusCircleFill)`
  color:green;
  font-size:25px;
  position: absolute;
  right:10%;
  top:15%;
  opacity:0.7;
  cursor:pointer;
  &:hover {
    opacity:1;
}
 `;
const Div = styled.div`
 position: relative;
 height:40px;
 text-align:center;
 width:80%;
 margin: 0 auto;
 `;

InputTodo.propTypes = {
  setTodos: PropTypes.string,
  todos: PropTypes.string,
  inputText: PropTypes.string,
  setInputText: PropTypes.func,
};
InputTodo.defaultProps = {
  setTodos: '',
  todos: '',
  inputText: '',
  setInputText: '',
};
export default InputTodo;
