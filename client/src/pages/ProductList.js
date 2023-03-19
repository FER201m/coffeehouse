import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import CardCofee from "../components/Card/Card";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchDrinks } from "~/redux/action/actions";

function ProductList() {

  const dispatch = useDispatch();
  const listDrinks = useSelector((state) => state?.drinks?.drinksList)

  useEffect(() => {
    dispatch(fetchDrinks())
  }, [])

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid
        container
        columns={{ xs: 4, sm: 8, md: 12 }}
        rowGap="100px"
      >
        {listDrinks.map((drink, index) => (
          <Grid justifyContent="center" item xs={2} sm={4} md={3} key={drink._id}>
            <CardCofee drink={drink}/>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default ProductList;
