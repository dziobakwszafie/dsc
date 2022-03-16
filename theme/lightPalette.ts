import { Colors, Palette } from '@mui/material/styles';
import common, { RecursivePartial } from './common';

const colors: Colors = {
  ...common.colors,
  main1: '#FFFFFF',
  main2: '#E9E9E9',
  main3: '#CACACA',
  main4: '#14131C',
  main5: '#000000',
};

const palette: RecursivePartial<Palette> = {
  ...common,
  background: {
    default: colors.main1,
  },
  buttons: {
    ...common.buttons,
    default: {
      basic: {
        background: colors.main2,
        text: colors.main4,
        border: 'transparent',
      },
      hover: {
        background: colors.main3,
        text: colors.main4,
        border: 'transparent',
      },
      disabled: {
        background: colors.main1,
        text: colors.main4,
        border: 'transparent',
      },
    },
    gradientOutline: {
      basic: {
        background: colors.main1,
        text: colors.main4,
        border: common.gradients.grad2,
      },
      hover: {
        background: common.gradients.grad2,
        text: colors.main4,
        border: common.gradients.grad2,
      },
      disabled: {
        background: colors.main1,
        text: colors.main4,
        border: common.gradients.grad2,
      },
    },
  },
  text: {
    primary: colors.main4,
    secondary: colors.main3,
    disabled: colors.main3,
  },
  error: {
    main: colors.col5,
  },
  success: {
    main: colors.col2,
  },
  colors,
};

export default palette;
