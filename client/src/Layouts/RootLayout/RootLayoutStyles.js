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
    padding: "120px 80px"
  },
  header: {
    gridArea: "header",
    background: "linear-gradient(45deg, #af804e 30%, #cd9f68 90%)",
    color: "white",
    position: 'relative',
  },
  order: {
    gridArea: "order",
    background: "#ab7e49",
    padding: "0 20px"
  },
  containerGrid: {
    display: "grid",
    gridTemplateColumns: "100px auto auto 400px",
    gridTemplateRows: "100px 100vh",  
    gridTemplateAreas: `"nav header header header"
                          "nav mainContent mainContent order"
                          "nav mainContent mainContent  order"`,
  },
  defaultMainContent: {
    gridArea: "mainContent",
  }
};

export default styles;
