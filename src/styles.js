import { makeStyles } from '@material-ui/core/styles';
import { findByLabelText } from '@testing-library/dom';

export const useStyles = makeStyles({
  paper: {
    padding: "30px 30px",
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
  }
});