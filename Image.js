import React from 'react';
import styled from 'styled-components';

const ImageWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  ${(props) => props.$useBorder && 'border: 1px solid black;'}
  ${(props) => props.$useBorderRadius && 'border-radius: 10px;'}
  overflow: hidden;
`;

const StyledImage = styled.img`
  width: 100%;
`;

const Image = ({ src, useBorder, useBorderRadius }) => {
  return (
    <ImageWrapper $useBorder={useBorder} $useBorderRadius={useBorderRadius}>
      <StyledImage src={src} alt="Styled Image" />
    </ImageWrapper>
  );
};

export default Image;
