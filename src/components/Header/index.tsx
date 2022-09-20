import AppBar from '@mui/material/AppBar';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import IconButton from '@mui/material/IconButton';
import Link from '@mui/material/Link';
import Toolbar from '@mui/material/Toolbar';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';

import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';

export const Header = () => {
  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            JSON/YAML Graph Visualizer
          </Typography>

          <Typography
            variant="h5"
            noWrap
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            JSON/YAML
          </Typography>

          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            <Tooltip title="Walkthrough on how to use the website">
              <Link
                onClick={() => console.log('yes')}
                component="button"
                sx={{ mr: 2, color: 'inherit', textDecoration: 'none', fontSize: '1.32rem' }}
              >
                Tutorial
              </Link>
            </Tooltip>

            <Tooltip title="View source code">
              <Link
                href="https://github.com/KushajveerSingh/json_yaml_visuazlier"
                sx={{ pt: 0.5, mr: 2, color: 'inherit', textDecoration: 'none', fontSize: '1.32rem' }}
              >
                Github
              </Link>
            </Tooltip>

            <Tooltip title="Info about me">
              <Link href="https://www.kushajveersingh.com">
                <Avatar alt="Kushajveer Singh profile image" src="/json_yaml_visuazlier/profile.png" />
              </Link>
            </Tooltip>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
