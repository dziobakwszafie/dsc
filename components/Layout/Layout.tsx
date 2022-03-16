import { FC, ReactNode, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import styled from '@emotion/styled';

import Container from '@mui/material/Container';
import Box from '@mui/material/Box';

import { setTheme } from 'redux/slices/theme';

import THEME_MODES from 'enums/themeModes';

export type LayoutProps = {
  children: ReactNode;
};

const StyledContainer = styled(Container)`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const StyledBox = styled(Box)`
  display: flex;
`;

const Layout: FC<LayoutProps> = ({ children }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    const theme = sessionStorage.getItem('dao-theme');

    dispatch(setTheme(theme === THEME_MODES.DARK ? THEME_MODES.DARK : THEME_MODES.LIGHT));
  }, [dispatch]);

  return (
    <StyledContainer>
      <StyledBox>{children}</StyledBox>
    </StyledContainer>
  );
};

export default Layout;
