
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles(() => ({
  StarRating__container :{
    display: 'flex',
    justifyContent: 'flex-start',
  },
StarRating__star :{
  width: '35px',
  height: '35px',
  margin: '10px',
  fill: 'none',
  stroke: '#AE4EFF',
  strokeWidth: '.4rem',
  '&:hover':{
    stroke:'none',
    fill: '#AE4EFF',
  }
},
 StarRating_container_button :{
  backgroundColor: 'transparent',
  border: 'none',
  cursor: 'pointer',
  '&:hover' :{
    transform: 'scale(1.1)',
  }
},
svg: {
  pointerEvents: 'none'
}
}));

export default useStyles