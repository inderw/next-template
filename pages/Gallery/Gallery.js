
import React from "react";
import Slider from "react-slick";
import Image from "next/image";
import {Card} from 'react-bootstrap';
import styles from '../Gallery/Gallery.module.scss'
import dynamic from 'next/dynamic';
import Link from 'next/link';


// const Slider= dynamic(
//     () => import('react-slick'),
//     { ssr: false }
//   )

const Gallery = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
    return (
        <>
          
        <div className="Container px-5 mx-5 mt-5">
            <h1 className={styles.gl_head}>Featured Properties</h1>
            <Slider {...settings}>
    <div className='item'>
    <Card className={styles.gl_card} >
  <Card.Img variant="top" src="https://i16.moxi.onl/img-pr-001441/sra/c97ec49b3c70747467a557f3e9a862e0cac82934/1_2_small.jpg" />
  <Card.Body>
    <Card.Title className={styles.c_title}>4BR 4BA 3,129 Sqft <Link href="/about" passHref><span>Contact Agent</span></Link></Card.Title>
    <Card.Text className={styles.gl_text}>
    Rural Address, Dundurn Rm No. 314, SK S0K1K0
    </Card.Text>
  </Card.Body>
  <span className={styles.gl_ft_text}>Active <img src="https://templates.c21canada.moxiworks.net/files/2021/01/C21_Seal_RelentlessGold_4C-235x300.png"></img></span>
  <span className={styles.gl_divide}>&nbsp;</span>
</Card>
    </div>
    <div className='item' >
    <Card className={styles.gl_card}>
  <Card.Img variant="top" src="https://i8.moxi.onl/img-pr-001450/sra/d67341ce9931008382a7775b09e929e05c1e5de6/1_2_small.jpg" />
  <Card.Body>
    <Card.Title className={styles.c_title}>4BR 4BA 2,229 Sqft <Link href="/about" passHref><span>Contact Agent</span></Link></Card.Title>
    <Card.Text className={styles.gl_text}>
    Rural Address, Dundurn Rm No. 314, SK S0K1K0
    </Card.Text>
  </Card.Body>
  <span className={styles.gl_ft_text}>Active <img src="https://templates.c21canada.moxiworks.net/files/2021/01/C21_Seal_RelentlessGold_4C-235x300.png"></img></span>
  <span className={styles.gl_divide}>&nbsp;</span>
</Card>
    </div>
    <div className='item'>
    <Card className={styles.gl_card}>
    <Card.Img variant="top" src="https://i8.moxi.onl/img-pr-001450/sra/d67341ce9931008382a7775b09e929e05c1e5de6/1_2_small.jpg" />
  <Card.Body>
    <Card.Title className={styles.c_title}>4BR 4BA 1,837 Sqft <Link href="/about" passHref><span>Contact Agent</span></Link></Card.Title>
    <Card.Text className={styles.gl_text}>
    Rural Address, Dundurn Rm No. 314, SK S0K1K0
    </Card.Text>
  </Card.Body>
  <span className={styles.gl_ft_text}>Active <img src="https://templates.c21canada.moxiworks.net/files/2021/01/C21_Seal_RelentlessGold_4C-235x300.png"></img></span>
  <span className={styles.gl_divide}>&nbsp;</span>
</Card>
    </div>

    </Slider>
        </div>
  
       </>
    )
}

export default Gallery
