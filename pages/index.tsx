import type { NextPage } from 'next';
import React, { FC } from 'react';

import Box from '@mui/material/Box';

import Layout from 'components/Layout/Layout';

import Wrapper from 'sections/homepage/Wrapper/Wrapper';

const HomePage: FC<NextPage> = () => {
  return (
    <Layout>
      <Box width="100%">
        <Wrapper />
      </Box>
    </Layout>
  );
};

export default HomePage;
