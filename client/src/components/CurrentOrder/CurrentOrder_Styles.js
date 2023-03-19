const styles = {
  desc: {
    display: "flex",
    gap: "46px",
  },
  img: {
    width: "40px",
    height: "40px",
    objectFit: "cover",
    borderRadius: "999px",
    marginTop: "4px"
  },
  price: {
    pointerEvents: "none",
    fontSize: "19px",
    height: "30px",
    marginTop: "6px"
  },
  wrapper: {
    width: "100%",
    // height: "100px",
    gap: 2,
    display: "flex",
    flexDirection: "row",
    height: "50px",
  },
  pseudo: {
    height: "45px",
    width: "54px",
    borderRadius: "8px",
    border: "1px solid #ebebeb",
    position: 'relative',
    marginLeft: "-2px"
  },
  qty: {
    height: "20px",
    width: "25px",
    border: "none",
    position: 'absolute',
    top: '50%',
    left: '50%',    
    transform: "translate(-50%, -50%)",
    fontSize: '20px'
  },
  requirement: {
    height: "42px",
    width: "236px",
    borderRadius: "8px",
    border: "1px solid #ebebeb",
    padding: "10px",
  },
  card: {
    padding: "12px",
    marginTop: '10px'
  },
  additionInfo: {
    display: "flex",
    gap: "20px",
    marginTop: "3px",
  },
  wrapperTrash: {
    position: "relative",
    width: "50px",
    border: "1px solid #ea736d",
    borderRadius: "8px",
    textAlign: "center",
    color: "#ea736d",
    cursor: "pointer",
  },
  trashIcon: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
  },
  sparateLineDash: {
    width: '90%',
    borderTop: "2px dashed #ebebeb",
    margin: '15px auto'
  },
  subTotal: {
    display: 'flex',
    justifyContent: 'space-between'
  },
  printBillBtn: {
    width: '100%',
    height: '48px',
    
  },
  priceInfo: {
    marginTop: '20px'
  }
};


export default styles