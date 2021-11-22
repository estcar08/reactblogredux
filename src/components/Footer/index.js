import { Toolbar, Typography } from "@mui/material/";

export function Footer() {
  return (
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          © 2021 ITK Practice
        </Typography>
      </Toolbar>
  );
}
