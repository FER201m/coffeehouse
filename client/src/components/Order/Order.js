import Link from "@mui/joy/Link";
import Card from "@mui/joy/Card";
import Chip from "@mui/joy/Chip";
import Typography from "@mui/joy/Typography";
import { withStyles } from "@mui/styles";

const styles = {
  card: {
    width: 920,
    "&:hover": {
      boxShadow: "md",
      borderColor: "neutral.outlinedHoverBorder",
    },
    marginTop: "30px",
    border: "1px solid orange",
    alignItems: 'center'
  },
  desc: {
    marginLeft: "auto",
  },
};

function Order(props) {
  const { classes } = props;

  return (
    <Card variant="outlined" orientation="horizontal" className={classes.card}>
      <div>
        <Typography level="h2" fontSize="lg" id="card-description" mb={0.5}>
          Orders: #907653
        </Typography>
        <Typography fontSize="sm" aria-describedby="card-description" mb={1}>
          <Link
            overlay
            underline="none"
            href="#interactive-card"
            sx={{ color: "text.tertiary" }}
          >
            Table: T1
          </Link>
        </Typography>
        <Chip
          variant="outlined"
          color="primary"
          size="sm"
          sx={{ pointerEvents: "none" }}
        >
          Qta: 4
        </Chip>
      </div>
      <div className={classes.desc}>
        <div>20:30pm</div>
        <div>
          <Typography level="h4">$40,49</Typography>
        </div>
      </div>
    </Card>
  );
}

export default withStyles(styles)(Order);
