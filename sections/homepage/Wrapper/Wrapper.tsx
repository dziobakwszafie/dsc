import { FC } from 'react';

import styled from '@emotion/styled';

import Box from '@mui/material/Box';

import Calculator from 'sections/homepage/Calculator/Calculator';

const BigWrapper = styled(Box)`
  width: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const InnerWrapper = styled(Box)`
  max-width: 500px;
  background-color: ${({ theme }) => theme.palette.colors.main2};
  border-radius: 10px;
  padding: 20px;
  margin: 20px auto;
`;

const HomePage: FC = () => {
  return (
    <BigWrapper>
      <InnerWrapper>
        <Calculator />
      </InnerWrapper>
    </BigWrapper>
  );
};

export default HomePage;
