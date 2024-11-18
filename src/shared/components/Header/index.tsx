import { AnimatePresence, motion } from "framer-motion";
import { useModalHeader } from "../../../contexts/ModalHeaderProvider";
import { Modal } from "./components/Modal";
import { Link,  useLocation, useOutlet } from "react-router-dom";
import { IHeaderProps } from "../../interfaces/components";
import { cloneElement } from "react";

export const Header = ({ options }: IHeaderProps) => {
  const { modalIsOpen, handleModal } = useModalHeader();
  const location = useLocation();
  const currentPage = useOutlet();

  return (
    <>
      <header className="bg-primary p-3 tablet:p-4">
        <div id="container" className="flex items-center justify-between">
          <h2 className="ml-[4%] text-2xl uppercase font-black tablet:text-3xl">
            Logo
          </h2>
          {!modalIsOpen && (
            <button
              id="menu-header"
              className="mr-[4%] bg-[url('/assets/svg/menu.svg')] bg-no-repeat bg-contain bg-center p-4 tablet:hidden"
              aria-label="menu"
              onClick={handleModal}
            ></button>
          )}
          <nav className="hidden tablet:flex">
            <ul className="flex">
              {options.map(({ path, text }, i) => {
                if (text !== "Contato") {
                  return (
                    <motion.li
                      key={`option-header-tablet-${i + 1}`}
                      className="ml-8 tablet:text-lg tablet:font-medium desktop:ml-16"
                      whileHover={{ scale: 1.5, color: '#2f0e5a' }}
                    >
                      <Link to={path ? path : ""} className="font-medium">
                        {text}
                      </Link>
                    </motion.li>
                  );
                }

                return "";
              })}
            </ul>
          </nav>
          <a
            href="mailto:Clarice.mariadossantos2@hotmail.com"
            className="hidden tablet:block tablet:mr-[4%] tablet:bg-[#5516A4] tablet:rounded-[0.25rem] tablet:p-2 tablet:text-sm tablet:font-bold"
          >
            Contato &nbsp;☏
          </a>
        </div>
      </header>
      <AnimatePresence>
        {modalIsOpen && <Modal handleModal={handleModal} options={options} />}
      </AnimatePresence>
      <AnimatePresence mode="wait">
        {currentPage && cloneElement(currentPage, { key: location.pathname })}
      </AnimatePresence>
    </>
  );
};
