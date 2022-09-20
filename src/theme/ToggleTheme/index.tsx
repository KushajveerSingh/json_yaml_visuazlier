import Button from '@mui/material/Button';
import { useAppDispatch } from '../../store/hooks';
import { toggleTheme } from '../themeSlice';

export const ToggleTheme = () => {
  const dispatch = useAppDispatch();

  return (
    <Button variant="outlined" onClick={() => dispatch(toggleTheme())}>
      Toggle Theme
    </Button>
  );
};
