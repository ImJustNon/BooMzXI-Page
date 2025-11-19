"use client";

import { personal } from "@/app/resource/content";
import Link from "next/link";
import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 1, ease: "easeOut" } },
};

const PersonalData = () => {
  return (
    <div className="z-10 overflow-hidden">
      {personal && (
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          className="w-full flex flex-col items-center justify-center"
        >
          <div className="text-[#363636] w-full h-40 flex items-center justify-center text-3xl md:text-7xl flex-col z-10">
            <p>{personal.title}</p>
            <p className="text-[#363636] text-[16px] md:text-xl mt-2">
              {personal.description}
            </p>
          </div>
          <div className="w-full h-[calc(100vh-320px)] flex z-10">
            <div className="w-full h-full p-3 flex flex-col">
              {personal.social && (
                <div className="w-full">
                  <div className="w-full h-72 md:h-32 flex flex-col md:flex-row gap-5 justify-center items-center">
                    {personal.social.map((sc, i) => (
                      <Link
                        href={sc.href}
                        key={i}
                        className={`text-[#595959] w-1/2 bg-[#8affff] md:w-auto h-10 p-3 rounded-xl flex gap-2 md:shadow-[0_0_11px_#00FFFF] transition-all duration-300 shadow-[0_0_11px_#4c4c4c] hover:scale-105 hover:text-white! ` + sc.hoverColorClass}
                      >
                        <div className="w-1/5 flex items-center justify-center">
                          {sc.icon}
                        </div>
                        <div className={`w-4/5 flex items-center justify-center`}>
                          {sc.title}
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default PersonalData;
