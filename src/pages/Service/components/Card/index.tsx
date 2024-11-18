import { IMockDataServiceProps } from "../mocks";
import { motion } from 'framer-motion'

interface ICardProps {
  infos: IMockDataServiceProps;
}

export const Card = ({ infos }: ICardProps) => (
  <motion.div
    whileHover={{ scale: 1.1 }}
    className={`bg-primary rounded-[0.25rem] flex flex-col items-start mt-5 laptop:mr-10 laptop:w-[30rem] laptop:h-[20rem] cursor-pointer shadow-[0_10px_0_0_#280555]`}
  >
    <div className="flex items-center">
      <img src={infos.imgSrc} alt="bd-icon" />
      <h3 className="ml-3 font-bold uppercase">{infos.title}</h3>
    </div>
    <p className="m-6">{infos.description}</p>
  </motion.div>
);
