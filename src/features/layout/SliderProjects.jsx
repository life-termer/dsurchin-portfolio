import { Autoplay, Pagination, EffectCreative, Zoom } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/autoplay";
import styled from "styled-components";
import { LazyLoadImage } from "react-lazy-load-image-component";

const SwiperWrapper = styled.div`
  width: 100%;
  height: 100%;
  .swiper,
  .swiper-zoom-container {
    height: 100%;
  }
  .swiper-wrapper {
    position: relative;
    .swiper-slide {
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .lazy-load-image-background {
      height: 100%;
    }
    img {
      filter: none;
      object-fit: cover;
      border-radius: var(--border-radius-lg);
      mask-image: linear-gradient(to top, transparent 1%, black 11%);
      @media (max-width: 991px) {
        object-fit: contain;
      }
    }
  }
  .swiper-slide-zoomed img {
    cursor: grab;
  }
  .swiper-slide-zoomed:active img {
    cursor: grabbing;
  }
  .swiper-pagination {
    position: absolute;
    bottom: 1.75rem;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    gap: 0.6rem;
    z-index: 99;
  }
  .swiper-pagination-bullet {
    height: 0.85rem;
    width: 0.85rem;
    background-color: var(--color-brand-50);
    border-radius: 50%;
    transition: all 0.3s ease-out;
  }
  .swiper-pagination-bullet:not(.swiper-pagination-bullet-active) {
    cursor: pointer;
  }
  .swiper-pagination-bullet-active {
    background-color: var(--color-brand);
  }
`;
function SliderProjects({ images }) {
  return (
    <SwiperWrapper>
      <Swiper
        modules={[Autoplay, Pagination, EffectCreative, Zoom]}
        spaceBetween={0}
        slidesPerView={1}
        speed={1500}
        loop={true}
        pagination={{ clickable: true }}
        effect="creative"
        creativeEffect={{
          prev: {
            translate: [0, 0, -400],
          },
          next: {
            translate: ["100%", 0, 0],
          },
        }}
        zoom={{
          minRatio: 1,
          maxRatio: 1.5,
          // panOnMouseMove: true,
        }}
        autoplay={{ delay: 3000, disableOnInteraction: true, pauseOnMouseEnter: true }}
      >
        {images.map((image, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="swiper-zoom-container">
                <LazyLoadImage
                  src={image}
                  width="100%"
                  height="100%"
                  // placeholderSrc={placeholderImg}
                  alt={image}
                  effect="opacity"
                  wrapperProps={{
                    // If you need to, you can tweak the effect transition using the wrapper style.
                    style: { transitionDelay: "0.25s", transitionDuration: "1s" },
                  }}
                />
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </SwiperWrapper>
  );
}

export default SliderProjects;
