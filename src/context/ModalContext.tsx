import { ReactNode, createContext, useContext, useState } from 'react';

interface Modal {
  channel: string;
  isModalOpen: boolean;
}

interface ModalContextValue {
  modal: Modal;
  setModal: React.Dispatch<React.SetStateAction<Modal>>;
}

export const ModalContext = createContext<ModalContextValue | undefined>(
  undefined,
);

export const ModalProvider = ({ children }: { children: ReactNode }) => {
  const [modal, setModal] = useState<Modal>({
    channel: '',
    isModalOpen: false,
  });

  return (
    <ModalContext.Provider value={{ modal, setModal }}>
      {children}
    </ModalContext.Provider>
  );
};

export const useModalContext = () => {
  const modalContext = useContext(ModalContext);

  if (modalContext === undefined) {
    throw new Error('useModalContext must be inside a ModalProvider');
  }

  return modalContext;
};
