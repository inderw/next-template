import Image from "next/image";
import Mynav from "./Navbar";
import styles from '../styles/Home.module.scss';

const about = () => {
    return(<>
   
    <Mynav />
    <div style={{textAlign:"center"}}>
    <h1> About</h1>
    <Image src="/demo.jpg" alt="demo" width="500" height="300"></Image>
    </div>
  
    </>
    )
}

export default about;