import Image from 'next/image';

const Banner = () => {
  return ( 
    <div className="banner-container">
      <Image
        className="banner-image-1"
        src="/images/fragrance-banner.png"
        alt="Banner image"
        layout="responsive"
        width="100%"
        height="35vh"
      />
    </div>
   );
}
 
export default Banner;