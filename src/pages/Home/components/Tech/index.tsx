import { ITechProps } from "../../../../shared/interfaces/components";

export const Tech = ({ title, url }: ITechProps) => (
  <div
    key={`tech-${title}`}
    className="h-full flex flex-col items-center justify-between"
  >
    <img src={url} alt={title} className="w-12 h-12 tablet:w-[4.4rem] tablet:h-[4.4rem]" />
    <p
      className={`text-[0.7rem] text-[#3e1278] uppercase font-bold mt-2 tablet:text-base`}
    >
      {title}
    </p>
  </div>
);
