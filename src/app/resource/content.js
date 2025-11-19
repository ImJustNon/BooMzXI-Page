import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import GitHubIcon from '@mui/icons-material/GitHub';
import { SiCodewars } from "react-icons/si";
import { FaDiscord } from "react-icons/fa";

export const personal = 
    {
        title: "<Hi! I'm Patipol/>",
        description: "This is my website feel free to explore here!",
        social: [
            {
                icon: <InstagramIcon/>, 
                title: "Instragram",
                href:"https://www.instagram.com/patii0x/",
                hoverColorClass: "hover:bg-[#fc03a9]! hover:shadow-[0_0_11px_#fc03a9]!"
            },
            {
                icon: <FacebookIcon/>, 
                title: "Facebook",
                href:"https://www.facebook.com/patipon.pongsawat/",
                hoverColorClass: "hover:bg-[#037ffc]! hover:shadow-[0_0_11px_#037ffc]!"
            },
            {
                icon: <GitHubIcon/>, 
                title: "Github",
                href:"https://github.com/BooMzXI",
                hoverColorClass: "hover:bg-[#000000]! hover:shadow-[0_0_11px_#000000]!"
            },
            {
                icon: <FaDiscord/>, 
                title: "Discord",
                href:"https://discord.com/users/573794481686446081",
                hoverColorClass: "hover:bg-[#5203fc]! hover:shadow-[0_0_11px_#5203fc]!"
            },
            {
                icon: <SiCodewars/>, 
                title: "Codewar", 
                href:"https://www.codewars.com/users/PatipolCom-Engineering",
                hoverColorClass: "hover:bg-[#ff4d4d]! hover:shadow-[0_0_11px_#ff4d4d]!"
            },
        ],
    }

export const about = {
    aboutmeTitle: "< About Me />",
    educationTitle: "< Education />",
    hobbiesTitle: "< Hobbies />",
    description: (
        <>
            I&apos;m a newbie in coding. I think learning many coding languages ​​isn&apos;t easy, 
            but it&apos;s not too hard if you love it, right? So I&apos;ll keep learning til I become a software engineer!
            If you read this and have any ideas, knowledge, etc. that you think I don&apos;t know, 
            please feel free to tell me. I love learning.
        </>
    ),
    education: "King Mongkut's University Of Technology Thonburi (KMUTT)",
    bachelor: "Bachelor of Engineering in Computer Engineering (CPE)",
    hobbies: 'Sleep, Coding, Reading and Play game.',
    gameDiscription: "ปล.มาชวนเล่นได้นะ เหงาสุดๆTT  -->",
    game: [
        {img: "/hobbies/rov.png" , alt: "Rov Image", title: "Rov",},
        {img: "/hobbies/roblox.png" , alt: "Roblox Image", title: "Roblox",},
        {img: "/hobbies/pb.png" , alt: "PB Image", title: "PB",},
        {img: "/hobbies/minecraft.jpg" , alt: "Minecraft Image", title: "MC",},
        {img: "/hobbies/honkai.png" , alt: "Honkai Image", title: "hsr",},
    ]
}