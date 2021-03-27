import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles({
  paper: {
    padding: "30px 30px",
    background: "#8bd2a4",
  },
  postsWrapper: {
    display: "flex",
    flexWrap: "wrap",
  },
  postItem: {
    flex: 1,
    margin: "20px",
    minWidth: "300px",

  },
  button: {
    padding: "10px 10px",
    margin: "10px"
  },
  centreText: {
    textAlign: "center",
  },
  header: {
    fontWeight: "bold",
    textAlign: "center",
  },
  results: {
    display: "flex",
    flexDirection: "column",
    maxWidth: "350px",
    background: "white",
    alignItems: "center",
    margin: "0 auto",
    padding: "20px"
  }
});