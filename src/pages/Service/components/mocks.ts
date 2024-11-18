export interface IMockDataServiceProps {
  title: string;
  description: string;
  imgSrc: string;
}

export const mockDataService: IMockDataServiceProps[] = [
  {
    title: "Banco de dados",
    description:
      "Oferecemos serviços de criação, manutenção e otimização de bancos de dados SQL para garantir que seus dados sejam armazenados de maneira segura, acessível e eficiente.",
    imgSrc: "/assets/svg/bd-icon.svg",
  },
  {
    title: "Api's Restfull",
    description:
      "Criamos e integramos APIs RESTful para que seus sistemas se comuniquem de forma eficiente e escalável. Permite integrar seus aplicativos web e móveis com facilidade, promovendo uma comunicação simplificada entre plataformas.",
    imgSrc: "/assets/svg/api-icon.svg",
  },
  {
    title: "Integrações",
    description:
      "Oferecemos desenvolvimento de software personalizado, criando soluções de acordo com as necessidades específicas do seu negócio. Desde aplicativos móveis até sistemas corporativos completos, garantimos que sua solução seja eficiente e escalável.",
    imgSrc: "/assets/svg/code-icon.svg",
  },
];
