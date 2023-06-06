import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'

const AboutCarousel = () => {
  return (
    <div className='w-1/2'>
    <Carousel
      showStatus={false}
      showIndicators={true}
      showThumbs={false}
      infiniteLoop={true}
      autoPlay={true}
      interval={3000}
      className="rounded-lg overflow-hidden"
    >
      <div>
        <img src="hike.jpg" alt="Hiking" />
      </div>
      <div>
        <img src="family.jpg" alt="Family" />
      </div>
      <div>
        <img src="music.jpg" alt="Music" />
      </div>
      <div>
        <img src="coding1.jpg" alt="Coding" />
      </div>
    </Carousel>
  </div>
  );
}
