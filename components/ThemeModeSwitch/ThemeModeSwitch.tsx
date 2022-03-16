import { FC, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import styled from '@emotion/styled';
import Box from '@mui/material/Box';
import LightModeIcon from '@mui/icons-material/LightMode';
import ModeNightIcon from '@mui/icons-material/ModeNight';
import { useTheme } from '@mui/material/styles';

import { selectTheme, toggleTheme } from 'redux/slices/theme';

import THEME_MODES from 'enums/themeModes';

const StyledBox = styled(Box)`
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.palette.colors.main1};
  border-radius: 10px;
  display: flex;
  cursor: pointer;
`;

const GreyBox = styled(Box)`
  width: 50%;
  height: 100%;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 5px;
  padding-bottom: 5px;
`;

const ColoredBox = styled(Box)`
  width: 50%;
  height: 100%;
  padding: 2px;
  border-radius: 10px;
  background: ${({ theme }) => theme.palette.colors.main1};
`;

const InnerColoredBox = styled(Box)`
  width: 100%;
  height: 100%;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.palette.colors.main2};
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 5px;
  padding-bottom: 5px;
`;

const LightModeIconIconFunction = () => {
  const theme = useTheme();
  return (
    <>
      <svg width={0} height={0}>
        <linearGradient id="linearColors" x1={1} y1={1} x2={0} y2={1}>
          <stop offset="0%" stopColor={theme.palette.colors.col1} />
          <stop offset="100%" stopColor={theme.palette.colors.col4} />
        </linearGradient>
      </svg>
      <LightModeIcon sx={{ fill: 'url(#linearColors)' }} />
    </>
  );
};

const ModeNightIconIconFunction = () => {
  const theme = useTheme();
  return (
    <>
      <svg width={0} height={0}>
        <linearGradient id="linearColors" x1={1} y1={1} x2={0} y2={1}>
          <stop offset="0%" stopColor={theme.palette.colors.col1} />
          <stop offset="100%" stopColor={theme.palette.colors.col4} />
        </linearGradient>
      </svg>
      <ModeNightIcon sx={{ fill: 'url(#linearColors)' }} />
    </>
  );
};

const ThemeModeSwitch: FC = () => {
  const dispatch = useDispatch();
  const themeMode = useSelector(selectTheme);

  const handleThemeModeChange = useCallback(() => dispatch(toggleTheme()), [dispatch]);

  return (
    <StyledBox onClick={handleThemeModeChange}>
      {themeMode === THEME_MODES.DARK ? (
        <>
          <GreyBox>
            <LightModeIcon />
          </GreyBox>
          <ColoredBox>
            <InnerColoredBox>
              <ModeNightIconIconFunction />
            </InnerColoredBox>
          </ColoredBox>
        </>
      ) : (
        <>
          <ColoredBox>
            <InnerColoredBox>
              <LightModeIconIconFunction />
            </InnerColoredBox>
          </ColoredBox>
          <GreyBox>
            <ModeNightIcon />
          </GreyBox>
        </>
      )}
    </StyledBox>
  );
};

export default ThemeModeSwitch;
