import React,{useState} from 'react'
import './style/galery.css'
import ImageGallery from 'react-image-gallery';

import img0 from './img/img0.jpg'
import img1 from './img/img1.jfif'
import img2 from './img/img2.jfif'
import img3 from './img/img3.jfif'
import img4 from './img/img4.jfif'
import img5 from './img/img5.jfif'
import img6 from './img/img6.jfif'
import img7 from './img/img7.jfif'
import img8 from './img/img8.jfif'
import img9 from './img/img9.jfif'
import img10 from './img/img10.jfif'
import img11 from './img/img11.jfif'
import img12 from './img/img12.jfif'
import img13 from './img/img13.jfif'
import img14 from './img/img14.jfif'
import img15 from './img/img15.jfif'
import img16 from './img/img16.jfif'
import img17 from './img/img17.jfif'
import img18 from './img/img18.jfif'
import img19 from './img/img19.jfif'
import img20 from './img/img20.jfif'
import img21 from './img/img21.jfif'
import img22 from './img/img22.jfif'
import img23 from './img/img23.jfif'
import img24 from './img/img24.jfif'
import img25 from './img/img25.jfif'
import img26 from './img/img26.jfif'
import img27 from './img/img27.jfif'
import img28 from './img/img28.jfif'
import img29 from './img/img29.jfif'
import img30 from './img/img30.jfif'
import img31 from './img/img31.jfif'





const images = [
  {
    original: img0,
    thumbnail: img0,
  },
  {
    original: img1,
    thumbnail: img1,
  },
  {
    original: img2,
    thumbnail: img2,
  },
  {
    original: img3,
    thumbnail: img3,
  },
  {
    original: img4,
    thumbnail: img4,
  },{
    original: img5,
    thumbnail: img5,
  },{
    original: img6,
    thumbnail: img6,
  },{
    original: img7,
    thumbnail: img7,
  },{
    original: img8,
    thumbnail: img8,
  },{
    original: img9,
    thumbnail: img9,
  },{
    original: img10,
    thumbnail: img10,
  },{
    original: img11,
    thumbnail: img11,
  },{
    original: img12,
    thumbnail: img12,
  },{
    original: img13,
    thumbnail: img13,
  },{
    original: img14,
    thumbnail: img14,
  },{
    original: img15,
    thumbnail: img15,
  },{
    original: img16,
    thumbnail: img16,
  },{
    original: img17,
    thumbnail: img17,
  },{
    original: img18,
    thumbnail: img18,
  },{
    original: img19,
    thumbnail: img19,
  },{
    original: img20,
    thumbnail: img20,
  },{
    original: img21,
    thumbnail: img21,
  },{
    original: img22,
    thumbnail: img22,
  },{
    original: img23,
    thumbnail: img23,
  },
  {
    original: img24,
    thumbnail: img24,
  },{
    original: img25,
    thumbnail: img25,
  },{
    original: img26,
    thumbnail: img26,
  },{
    original: img27,
    thumbnail: img27,
  },{
    original: img28,
    thumbnail: img28,
  },{
    original: img29,
    thumbnail: img29,
  },{
    original: img30,
    thumbnail: img30,
  },{
    original: img31,
    thumbnail: img31,
  },
];

class MyGallery extends React.Component {
  render() {
    return (
        <div id='div-galeria'>
            <ImageGallery items={images} />
        </div>
    )
  }
}

export default MyGallery