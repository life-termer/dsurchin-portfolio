import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { Tooltip } from "react-tooltip";

// Import Swiper styles
import "swiper/css";
import "swiper/css/autoplay";
import styled from "styled-components";

const SwiperWrapper = styled.div`
  width: 100%;

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 25%;
    background: linear-gradient(
      90deg,
      var(--color-bg-tile) 0%,
      rgba(0, 0, 0, 0) 100%
    );
    z-index: 10;
  }
  &::before {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    height: 100%;
    width: 25%;
    background: linear-gradient(
      90deg,
      rgba(0, 0, 0, 0) 0%,
      var(--color-bg-tile) 100%
    );
    z-index: 10;
  }
  .swiper-wrapper {
    -webkit-transition-timing-function: linear !important;
    -o-transition-timing-function: linear !important;
    transition-timing-function: linear !important;
    height: 28px;
  }
  .react-tooltip {
    font-size: 0.75rem;
    background: var(--color-grey-800);
    color: var(--color-grey-0);
  }
  svg:focus-visible,
  svg:focus {
    outline: none;
  }
`;
// TODO: mobile slides number
function SliderIcons({ slides, reverse }) {
  return (
    <SwiperWrapper>
      <Swiper
        modules={[Autoplay]}
        spaceBetween={5}
        slidesPerView={14}
        speed={5000}
        loop={true}
        allowTouchMove={false}
        autoplay={{ delay: 0, reverseDirection: reverse }}
      >
        {slides.map((icon, index) => {
          const { icon: Icon, name } = icon;
          return (
            <SwiperSlide key={index}>
              <Icon data-tooltip-id="my-tooltip" data-tooltip-content={name} />
            </SwiperSlide>
          );
        })}
      </Swiper>
      <Tooltip id="my-tooltip" />
    </SwiperWrapper>
  );
}

export default SliderIcons;
