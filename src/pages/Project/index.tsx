import { motion } from "framer-motion";
import { animatePage } from "../../shared/animations/variants";
import { Carrousel } from "./components/Carrousel";
import { mockDataCarrousel } from "./components/mocks";

export const Project = () => {
  return (
    <main className="h-[87.8vh]">
      <motion.section
        className="h-full flex items-center justify-center"
        variants={animatePage}
        initial="hidden"
        animate="visible"
        exit="leave"
      >
        <div className="flex flex-col items-start mx-[6%] laptop:mx-[4%] laptop:w-[70%] desktop:w-[55%]">
          <hgroup>
            <h4 className="laptop:text-2xl">Meus</h4>
            <h3 className="text-[#5416a4] text-3xl font-bold mt-1 laptop:text-4xl">
              Projetos
            </h3>
          </hgroup>
          <Carrousel infos={mockDataCarrousel}/>
        </div>
      </motion.section>
    </main>
  );
};
