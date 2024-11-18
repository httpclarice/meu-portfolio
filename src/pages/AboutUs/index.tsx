import { motion } from "framer-motion";
import { animatePage } from "../../shared/animations/variants";

export const AboutUs = () => {
  return (
    <main className="h-[87.8vh]">
      <motion.section
        className="h-full flex items-center justify-center"
        variants={animatePage}
        initial="hidden"
        animate="visible"
        exit="leave"
      >
        <div className="flex flex-col items-start mx-[6%] laptop:mx-[4%] laptop:w-[50%] desktop:w-[55%]">
          <hgroup>
            <h4>Que tal saber</h4>
            <h3 className="text-[#5416a4] text-3xl font-bold mt-1">
              Sobre mim
            </h3>
          </hgroup>
          <p className="text-sm mt-3 w-[97%] tablet:text-base tablet:w-[90%] desktop:leading-7 desktop:w-[70%]">
            Minha jornada na tecnologia começou quando descobri o poder das
            soluções digitais e como elas podem transformar a maneira como
            vivemos e trabalhamos.
          </p>
          <p className="text-sm mt-3 w-[97%] tablet:text-base tablet:w-[90%] desktop:leading-7 desktop:w-[70%]">
            Venho explorado uma ampla gama de tecnologias e metodologias, desde
            linguagens de programação até frameworks modernos.
          </p>
          <div className="flex text-sm">
            <button className="mt-10 mr-4 uppercase font-bold bg-primary rounded-[0.25rem] p-2 w-[9.375rem]">
              <a href="mailto:Clarice.mariadossantos2@hotmail.com">Contato &nbsp;☏</a>
            </button>
            <button className="mt-10 uppercase font-bold bg-primary rounded-[0.25rem] p-2 w-[9.375rem]">
              Serviços &nbsp;🖥️
            </button>
          </div>
        </div>
        <img className="hidden w-72 laptop:block laptop:w-80 desktop:w-[23rem]" src="/assets/svg/aboutus-perfil.svg" alt="aboutus-perfil" />
      </motion.section>
    </main>
  );
};
