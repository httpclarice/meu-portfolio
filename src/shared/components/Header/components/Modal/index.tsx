import { createPortal } from "react-dom";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { variantsModal } from "./variants";
import { IOptionsHeaderProps } from "../../../../interfaces/components";

interface IModalProps {
  handleModal: () => void;
  options: IOptionsHeaderProps[];
}

export const Modal = ({ handleModal, options }: IModalProps) => {
  const modalPortal = document.getElementById("portal");

  return modalPortal
    ? createPortal(
        <motion.div
          id="container-modalPortal-header"
          variants={variantsModal}
          initial="hidden"
          animate="visible"
          exit="leave"
          className="bg-primary fixed top-0 right-0 bottom-0 left-0 flex flex-col justify-between items-center"
        >
          <nav>
            <ul className="text-primary">
              {options.map(({ path, text }, i) => (
                <li
                  key={`option-header-${i + 1}`}
                  className="flex bg-[#fff] text-center font-semibold rounded-[0.25rem] my-6 p-2 w-28"
                  onClick={handleModal}
                >
                  <Link to={path ? path : ""} className="w-full h-full">
                    {text}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <button
            className="mb-[10%] w-36 uppercase font-bold text-2xl border-solid border-2 border-white rounded-[0.25rem] p-2"
            onClick={handleModal}
          >
            Fechar
          </button>
        </motion.div>,
        modalPortal
      )
    : null;
};
