import React from 'react';
import styled from 'styled-components';

const CardWrapper = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  ${(props) => props.$useBorder && 'border: 1px solid black;'}
  ${(props) => props.$useBorderRadius && 'border-radius: 10px;'}
  text-align: center;
`;

const Card = ({ useBorder, useBorderRadius, children }) => {
  return (
    <CardWrapper $useBorder={useBorder} $useBorderRadius={useBorderRadius}>
      {children}
    </CardWrapper>
  );
};

export default Card;
