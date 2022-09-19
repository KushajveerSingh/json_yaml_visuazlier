import type { NextPage } from 'next';
import Head from 'next/head';

import Button from '@mui/material/Button';
import { ToggleTheme } from '../components/ToggleTheme';

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>JSON/YAML Graph Visualizer</title>
      </Head>

      <Button variant="contained">Contained</Button>
      <ToggleTheme />
    </div>
  );
};

export default Home;
