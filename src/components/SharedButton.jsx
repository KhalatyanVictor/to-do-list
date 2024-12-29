import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

function SharedBtn({
  className = "",
  onClick = () => {},
  name,
  style,
  ...rest
}) {
  return (
    <>
      <Stack
        direction="row"
        sx={{
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Button
          className={`${className} sharedBtn`}
          onClick={onClick}
          style={style}
          {...rest}
        >
          {name}
        </Button>
      </Stack>
    </>
  );
}

export default SharedBtn;
