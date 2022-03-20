import Image from "next/image";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Banner = () => {
  return (
    <div className='banner-container'>
      <Carousel
        autoPlay={true}
        infiniteLoop={true}
        swipeable={true}
        stopOnHover={true}
        transitionTime={800}
        showStatus={false}
        emulateTouch={true}
        showThumbs={false}
      >
        <div>
          <Image
            priority={true}
            className='banner-image-1'
            src='/images/fragrance-banner.png'
            alt='Banner image'
            layout='responsive'
            width='100%'
            height='35vh'
          />
        </div>
        <div>
          <Image
            priority={true}
            className='banner-image-1'
            src='/images/fragrance-banner.png'
            alt='Banner image'
            layout='responsive'
            width='100%'
            height='35vh'
          />
        </div>
        <div>
          <Image
            priority={true}
            className='banner-image-1'
            src='/images/fragrance-banner.png'
            alt='Banner image'
            layout='responsive'
            width='100%'
            height='35vh'
          />
        </div>
      </Carousel>
    </div>
  );
};

export default Banner;
