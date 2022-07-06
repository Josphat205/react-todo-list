import React from 'react';
import styled from 'styled-components';

function Header() {
  return (
    <div>
      <Title>TODOS</Title>
    </div>
  );
}

const Title = styled.h1`
 text-align:center;
 color: black;
 font-weight:bold;
 margin-top: 50px;
 font-size: 42px;
`;
export default Header;
