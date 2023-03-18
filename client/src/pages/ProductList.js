import { experimentalStyled as styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import CardCofee from "../components/Card/Card";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

function ProductList() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid
        container
        // spacing={{ xs: 2, md: 4 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
        rowGap="100px"
        
      >
        {Array.from(Array(8)).map((_, index) => (
          <Grid justifyContent="center" item xs={2} sm={4} md={3} key={index}>
            <CardCofee />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default ProductList;
