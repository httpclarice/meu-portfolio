export interface IMockDataCarrousel {
  titleProject: string;
  linkRepository: string;
  descriptionProject: string;
  techList: string[];
  srcImage: string;
}

export const mockDataCarrousel: IMockDataCarrousel[] = [
  {
    titleProject: "Api PHP",
    linkRepository: "https://github.com/httpclarice/backend.web",
    descriptionProject:
      "Projeto desenvolvido com o objetivo de obter e aprofundar os conceitos da linguagem PHP, bem como suas interações no banco de dados",
    techList: ["PHP", "MySQL", "VSCode"],
    srcImage: "/assets/img/woman-1.avif",
  },
  {
    titleProject: "APP Mobile",
    linkRepository: "https://github.com/httpclarice/mobile-app",
    descriptionProject:
      "Projeto que tem como função a aplicabilidade de aprendizagem na área mobile, linguagem Java fortemente usada",
    techList: ["Java", "IntelliJ"],
    srcImage: "/assets/img/woman-2.avif",
  },
  {
    titleProject: "Calculadora",
    linkRepository: "https://github.com/httpclarice/calculadora-media",
    descriptionProject:
      "Aplica os estudos da linguagem de prorgamação com o objetivo de solucionar um problema com o uso de operações matemáticas",
    techList: ["Python", "PyCharm"],
    srcImage: "/assets/img/woman-3.jpg",
  },
  {
    titleProject: "Banco de dados",
    linkRepository: "https://github.com/httpclarice/projeto-bd",
    descriptionProject:
      "Desenvolvido para treinar a linguagem sql, para que assim haja uma boa manipulação de dados, bem como a sua aprendizagem",
    techList: ["Sql", "MySQL"],
    srcImage: "/assets/img/woman-4.jpg",
  },
];
