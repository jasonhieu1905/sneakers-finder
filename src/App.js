import "./App.css";
import { Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: 200,
    },
  },
}));

function App() {
  const classes = useStyles();

  return (
    <Container maxWidth="sm">
      <form className={classes.root} noValidate autoComplete="off">
        <div>
          <TextField
            label="Size"
            id="standard-size-small"
            defaultValue="Nike, Adidas, Saucony ..."
            size="small"
          />
        </div>
      </form>
    </Container>
  );
}

export default App;
