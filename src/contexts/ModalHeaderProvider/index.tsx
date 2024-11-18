import { createContext, useContext, useState } from "react";
import { IProviderProps } from "../../shared/interfaces/contexts";

interface ModalHeaderContextProps {
  modalIsOpen: boolean;
  handleModal: () => void;
}

const ModalHeaderContext = createContext({} as ModalHeaderContextProps);

export const ModalHeaderProvider = ({ children }: IProviderProps) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const handleModal = () => setModalIsOpen((prev) => !prev);

  return (
    <ModalHeaderContext.Provider value={{ modalIsOpen, handleModal }}>
      {children}
    </ModalHeaderContext.Provider>
  );
};

export const useModalHeader = () => useContext(ModalHeaderContext);
