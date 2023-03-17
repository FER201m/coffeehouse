const styles = {
  wrapper: {
    color: "#fff",
    "& > .MuiBox-root > .MuiBox-root": {
      p: 1,
      fontSize: "0.875rem",
      fontWeight: "700",
    },
  },
  navigation: {
    gridArea: "nav",
    background: "orange",
  },
  productList: {
    background: "orange",
    gridArea: "mainContent",
  },
  header: {
    gridArea: "header",
    bgcolor: "primary.main",
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
    background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
    color: "white",
  },
  order: {
    gridArea: "order",
    background: "hotpink",
  },
  containerGrid: {
    display: "grid",
    gridTemplateColumns: "100px auto auto 400px",
    gridTemplateRows: "100px 100vh",
    gridTemplateAreas: `"nav header header header"
                          "nav mainContent mainContent order"
                          "nav mainContent mainContent  order"`,
  },
};

export default styles;
