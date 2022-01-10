import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import styles from '../styles/Home.module.scss';


 
export default function Gallery(){
  const slider = (
    <AwesomeSlider>
        <div height="100" data-src='https://cdn.pixabay.com/photo/2017/10/01/00/52/architecture-2804083_960_720.jpg' />
            <div   data-src='https://cdn.pixabay.com/photo/2017/10/01/00/52/architecture-2804083_960_720.jpg' />
            <div  data-src='https://cdn.pixabay.com/photo/2018/03/10/09/45/businessman-3213659_960_720.jpg' />
    </AwesomeSlider>
  );
  return( slider)
  }
