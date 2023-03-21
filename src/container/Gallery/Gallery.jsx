import React from 'react';
import { images } from '../../constants';
import { SubHeading } from '../../components';
import { BsInstagram, BsArrowLeftShort, BsArrowRightShort } from 'react-icons/bs';
import './Gallery.css';

const galleryimages = [images.gallery01, images.gallery02, images.gallery03, images.gallery04];
const Gallery = () => {
  const scrollRef = React.useRef(null);
  const scroll = (direction) => {
    const { current } = scrollRef;
    if (direction === 'left') {
      current.scrollLeft -= 300;
    }
    else {
      current.scrollLeft += 300;
    }
  }
  return (
    <div className="gallery flex__center" id="gallery">
      <div className="gallery_content">
        <SubHeading title="Instagram" />
        <h1 className="headtext__cormorant">Photo Gallery</h1>
        <p className="p__opensans" style={{ color: '#AAA', marginTop: '2rem' }}> Chef Anuj and FoodyMe share a mission: to build a kinder, brave world. Chef Anuj has encouraged his followers to practise kindness in their communities both online and offline through the Born This Way Foundation. We can enable young people to spread more compassion with your assistance. </p>
        <button className="custom__button" type="button">View More</button>
      </div>
      <div className="gallery_images">
        <div className="gallery_images_container" ref={scrollRef}>
          {galleryimages.map((image, index) => (
            <div className="gallery_images_card flex__center" key={`gallery_image-${index + 1}`}>
              <img src={image} alt="gallery" />
              <BsInstagram className="gallery_image_icon" />
            </div>
          ))}
        </div>
        <div className="gallery_images_arrows">
          <BsArrowLeftShort className="gallery_arrow_icon" onClick={() => scroll('left')} />
          <BsArrowRightShort className="gallery_arrow_icon" onClick={() => scroll('right')} />
        </div>
      </div>
    </div>
  )
};

export default Gallery;
