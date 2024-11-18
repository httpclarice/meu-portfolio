import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { ReactNode } from "react";
import { IMockDataCarrousel } from "../mocks";

interface IHandleSlideButton {
  children: ReactNode;
  nextSlide: boolean;
}

interface ICarrouselProps {
  infos: IMockDataCarrousel[];
}

export const Carrousel = ({ infos }: ICarrouselProps) => {
  const HandleSlideButton = ({ children, nextSlide }: IHandleSlideButton) => {
    const swiper = useSwiper();

    return (
      <button
        onClick={() => (nextSlide ? swiper.slideNext() : swiper.slidePrev())}
        className="z-10 bg-primary uppercase font-bold text-2xl rounded-[0.25rem] mt-3 mr-4 w-8 h-8"
      >
        {children}
      </button>
    );
  };

  return (
    <div className="flex flex-col items-start -z-0 text-[#fff] w-full laptop:my-8">
      <Swiper
        modules={[Pagination]}
        spaceBetween={10}
        slidesPerView={1}
        pagination={{ clickable: true }}
        className="w-full"
      >
        {infos.map((project, i) => (
          <SwiperSlide key={`slide-project-${i + 1}`}>
            <div className="flex h-72 text-xl text-center rounded-lg laptop:text-left laptop:h-96">
              <div className="bg-primary flex flex-col items-center justify-evenly w-full rounded-tl-lg rounded-bl-lg laptop:items-start">
                <hgroup className="flex items-center laptop:ml-8">
                  <h2 className="mr-4 text-[#5416a4] font-bold text-3xl laptop:text-5xl">
                    {i + 1}
                  </h2>
                  <h2 className="laptop:text-3xl">{project.titleProject}</h2>
                </hgroup>
                <a
                  href={project.linkRepository}
                  className="italic text-base laptop:ml-8 laptop:text-lg underline"
                  target="_blank"
                >
                  🐛 Ver repositório
                </a>
                <p className="overflow-scroll max-w-52 max-h-36 text-sm laptop:overflow-hidden laptop:max-w-none laptop:ml-8 laptop:w-[80%] laptop:leading-7 laptop:text-lg">
                  {project.descriptionProject}
                </p>
                <ul
                  id="contain-techs-project"
                  className="flex justify-center items-center bg-[#5416a4] p-2 font-bold text-sm rounded-[0.25rem] laptop:ml-8"
                >
                  {project.techList.map((tech, i) => (
                    <li key={`tech-project-${i + 1}`} className="mx-2">{tech}</li>
                  ))}
                </ul>
              </div>
              <img
                src={project.srcImage}
                alt="project"
                className="hidden tablet:w-[40%] h-full rounded-tr-lg rounded-br-lg laptop:flex"
              />
            </div>
          </SwiperSlide>
        ))}
        <div id="container-button-swiper" className="flex ml-auto">
          <HandleSlideButton nextSlide={false}>{"<"}</HandleSlideButton>
          <HandleSlideButton nextSlide={true}>{">"}</HandleSlideButton>
        </div>
      </Swiper>
    </div>
  );
};
