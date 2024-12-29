import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import DeleteIcon from '@mui/icons-material/Delete';

function DeleteButton({ className = "", ...rest }) {
  return (
    <>
      <Stack direction="row" spacing={1}>
      <IconButton aria-label="delete" size="large">
        <DeleteIcon  className={`${className} deleteBtn`} {...rest}/>
      </IconButton>
      </Stack>
    </>
  );
}

export default DeleteButton;
