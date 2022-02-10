import { makeStyles } from "@mui/styles";

 const useStyles = makeStyles((theme) => ({
  form: {
    padding: '10px'
  },
  main: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gridGap:'20px'
  },
  section: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: 200,
    },
  },
  contact: {
    border: '1px solid gray',
    padding: '10px',
    borderRadius: '5px'
  },
  score: {
    border: '1px solid purple',
    padding: '10px',
    margin: '20px 0px',
    borderRadius: '5px'
  },
}));
export default useStyles