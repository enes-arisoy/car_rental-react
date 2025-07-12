import type { FC } from "react";
import Button from "./../button/index";
import { motion } from "framer-motion";

const Hero: FC = () => {
  return (
    <div className="hero padding-x padding-y">
      <div className="sm:pt-20 flex-1 max-h-[920px]">
        <motion.h1
          initial={{ translateY: -50, opacity: 0 }}
          animate={{ translateY: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.2, type: "spring" }}
          className="hero-title"
        >
          Özgürlüğü Hisset, Yolculuğa Başla
        </motion.h1>
        <motion.p
          initial={{ translateY: -50, opacity: 0 }}
          animate={{ translateY: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.6, type: "spring" }}
          className="hero-subtitle"
        >
          Altın standartta hizmetle unutulmaz bir yolculuğa hazır mısın? Araç
          kiralama deneyimini Altın Seçenekleri ile taçlandırarak her anını özel
          kılabilirsin.
        </motion.p>
        <motion.div initial={{ translateY: -50, opacity: 0 }}
          animate={{ translateY: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.8, type: "spring" }}
        >
          <Button text="Arabaları Keşfet" designs="mt-12" />
        </motion.div>
      </div>

      <div className="flex justify-center items-center">
        <motion.div
          initial={{ translateX: 200, scale: 0.5, opacity: 0 }}
          animate={{ translateX: 0, scale: 1, opacity: 1 }}
          transition={{ duration: 1, delay: 1, type: "spring", bounce: 0.3 }}
          className="relative"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-primary-blue/30 to-accent/30 rounded-full blur-3xl -z-10 " />
          <img
            src="hero.png"
            className="object-contain xl:w-[600px] xl:h-[477.5px] drop-shadow-2xl"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
