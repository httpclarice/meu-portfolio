import { useModalHeader } from "../../contexts/ModalHeaderProvider";
import { animatePage } from "../../shared/animations/variants";
import { Tech } from "./components/Tech";
import { techs, textsAboutUs } from "./mocks";
import { motion } from "framer-motion";

export const Home = () => {
  const { handleModal } = useModalHeader();

  return (
    <main className="h-[87.8vh]">
      <motion.section
        variants={animatePage}
        initial="hidden"
        animate="visible"
        exit="leave"
        className="h-full flex items-center justify-center"
      >
        <div className="h-full flex flex-col items-start justify-center mx-[6%] desktop:w-[70%]">
          <div
            id="content-main"
            className="flex justify-between items-center mobile-h:mt-60 tablet:mt-0"
          >
            <div id="left">
              <p>Prazer, Clarice 👋</p>
              <h1 className="text-[1.7rem] font-bold tablet:text-4xl tablet:mt-4">
                Desenvolvedora <span className="text-[#5516A4]">FullStack</span>
              </h1>
              {textsAboutUs.map((text, i) => (
                <p
                  key={`parágrafro-${i + 1}`}
                  className={`text-sm mt-${
                    i === 0 ? "3" : "2"
                  } w-[97%] tablet:text-base tablet:w-[90%] desktop:leading-7 desktop:w-[70%]`}
                >
                  {text}
                </p>
              ))}
              <button
                className="mt-10 uppercase font-bold bg-primary rounded-[0.25rem] p-2 w-[9.375rem]"
                onClick={handleModal}
              >
                Saiba mais &nbsp;+
              </button>
            </div>
            <img
              src="/assets/img/perfil.png"
              alt="perfil"
              className="hidden w-72 laptop:block laptop:w-96 desktop:w-[26rem]"
            />
          </div>
          <div
            id="content-tech"
            className="w-full mt-14 p-3 rounded-[0.25rem] bg-primary flex flex-wrap items-center justify-evenly tablet:p-4 tablet:mt-20"
          >
            {techs.map(({ title, url }) => (
              <Tech key={`tech-${title}`} title={title} url={url} />
            ))}
          </div>
        </div>
      </motion.section>
    </main>
  );
};
