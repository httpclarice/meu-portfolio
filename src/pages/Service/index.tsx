import { motion } from "framer-motion";
import { animatePage } from "../../shared/animations/variants";
import { mockDataService } from "./components/mocks";
import { Card } from "./components/Card";

export const Service = () => {
  return (
    <main className="h-[87.8vh]">
      <motion.section
        className="h-full flex items-center justify-center text-[#fff]"
        variants={animatePage}
        initial="hidden"
        animate="visible"
        exit="leave"
      >
        <div className="flex flex-col items-start justify-center text-left mx-[6%] mt-[30rem] h-full tablet:mt-0 laptop:mx-[4%]">
          <hgroup>
            <h4 className="laptop:text-2xl">Conheça meus</h4>
            <h3 className="text-[#5416a4] text-3xl font-bold mt-1 laptop:text-4xl">Serviços</h3>
          </hgroup>
          <div className="flex flex-col laptop:flex-row">
            {mockDataService.map((service, i) => (
              <Card key={`card-service-${i + 1}`} infos={service} />
            ))}
          </div>
        </div>
      </motion.section>
    </main>
  );
};
