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
  },
  productList: {
    background: "#fafafa",
    gridArea: "mainContent",
  },
  header: {
    gridArea: "header",
    bgcolor: "primary.main",
    background: "linear-gradient(45deg, #f0e6de 30%, #f0e6de 90%)",
    color: "white",
    position: 'relative'
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
