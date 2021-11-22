import { Grid } from "@mui/material";

export function LayoutContainer({ children }) {
  return (
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justifyContent="center"
      style={{ minHeight: "80vh" }}
    >
      <Grid item xs={4}>
        {children}
      </Grid>
    </Grid>
  );
}
