'use client'

import Image from "next/image"
import { motion } from "framer-motion"
import { about } from "@/app/resource/content"

const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 1, ease: "easeOut" } },
}


const AboutPageData = () => {
    return (
        <div className="overflow-auto md:overflow-hidden"> {about &&
            <motion.div
                initial="hidden"
                animate="visible"
                variants={fadeInUp}
                className="w-full flex flex-col"
            >
                <div className="w-full min-h-[800px] md:min-h-[calc(100vh-80px)] p-10 ">
                    <div className="w-full h-3/4 flex flex-col md:flex-row items-center md:items-start gap-5">
                        <div className="w-full h-[700px] md:h-full flex flex-col gap-7">

                            <div className="text-black w-full h-auto md:h-1/3 px-10 py-7 flex flex-col bg-white shadow-[0_0_11px_#00c5c5]  rounded-xl">
                                <p className="text-3xl mb-3 font-[600]">{about.aboutmeTitle}</p>
                                <p>{about.description}</p>
                            </div>

                            <div className="text-black w-full h-auto md:h-1/3 flex flex-col px-10 py-7 bg-white shadow-[0_0_11px_#00c5c5]  rounded-xl">
                                <p className="text-3xl mb-3 font-[600]">{about.educationTitle}</p>
                                <p className="text-lg">{about.education}</p>
                                <p className="text-lg">{about.bachelor}</p>
                            </div>

                            <div className="text-black w-full h-auto md:h-1/3 flex flex-col px-10 py-7 bg-white shadow-[0_0_11px_#00c5c5]  rounded-xl mb-3">
                                <p className="text-3xl mb-3 font-[600]">{about.hobbiesTitle}</p>
                                <p className="text-lg">{about.hobbies}</p>
                            </div>
                        </div>

                    </div>
                </div>
            </motion.div>
        }
        </div>
    )
}
export default AboutPageData