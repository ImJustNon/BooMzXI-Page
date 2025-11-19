import Link from "next/link"
import HomeIcon from '@mui/icons-material/Home';
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';

const ButtonGroup = ({ obj }) => {
    return (
        <>
            {obj && obj.map((obj, i) => (
                <Link 
                    href={obj.href} 
                    key={i} 
                    className="
                        h-full w-28 bg-white 
                        flex gap-1 transition-all duration-300 
                        hover:border-aqua-400 hover:shadow-[0_0_12px_#00FFFF] 
                        hover:scale-105 first:rounded-l-md last:rounded-r-md
                    "
                >
                    <div className="w-10 h-full flex items-center justify-end text-black">
                        {obj.icon}
                    </div>
                    <div className="w-20 h-full flex items-center justify-start text-black">
                        {obj.title}
                    </div>
                </Link>
            ))}
        </>
    );
}

const ButtonGroupList = [
    { icon: <HomeIcon fontSize="small" />, title: "Home", href: "/" },
    { icon: <InsertEmoticonIcon fontSize="small" />, title: "About", href: "/about" },
]

const Header = () => {
  return (
    <div className="w-full h-12 flex items-center justify-center mt-10 fixed z-20">
        <div className="w-auto h-4/5 bg-white rounded-md absolute flex border border-gray-300 shadow-md">
            <ButtonGroup obj={ButtonGroupList} />
        </div>
    </div>
  )
}

export default Header;
