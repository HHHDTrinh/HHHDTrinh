import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { MdOutlineClose } from 'react-icons/md';
import { HiOutlineMenu } from 'react-icons/hi';
import { FiDownload } from 'react-icons/fi';

import MyResume from '../assets/pdf/CV_Ho_Huy_Duc_Trinh_Frontend_Developer.pdf';

const Navbar = ({ isMobile }) => {
    const [openMenu, setOpenMenu] = useState(false);
    const handleMenu = () => {
        setOpenMenu(!openMenu);
    };

    useEffect(() => {
        if (openMenu) {
            document.body.style.overflow = 'hidden';
        }
    }, [openMenu]);

    return (
        <nav className="flex relative justify-between items-center text-white h-fit lg:mx-5 text-[2rem]">
            <h1 className="text-[3rem] lg:text-6xl font-montez italic">HHDT</h1>
            {openMenu && isMobile ? (
                <div className="fixed flex flex-col justify-between inset-0 p-4 bg-purple-500 animate-slideright overscroll-contain">
                    <div className="flex items-center justify-between">
                        <h1 className="text-[3rem] lg:text-6xl font-montez italic">
                            HHDT
                        </h1>
                        <MdOutlineClose
                            size={'24px'}
                            className="cursor-pointer"
                            onClick={handleMenu}
                        />
                    </div>
                    <div className="flex flex-col items-center gap-10">
                        <NavLink
                            onClick={handleMenu}
                            className={({ isActive }) =>
                                isActive ? 'text-black' : 'text-[wheat]'
                            }
                            to="/"
                        >
                            Home
                        </NavLink>
                        <NavLink
                            onClick={handleMenu}
                            className={({ isActive }) =>
                                isActive ? 'text-black' : 'text-[wheat]'
                            }
                            to="/about"
                        >
                            About me
                        </NavLink>
                        <NavLink
                            onClick={handleMenu}
                            className={({ isActive }) =>
                                isActive ? 'text-black' : 'text-[wheat]'
                            }
                            to="/contact"
                        >
                            Contact
                        </NavLink>
                        <NavLink
                            onClick={handleMenu}
                            className={({ isActive }) =>
                                isActive ? 'text-black' : 'text-[wheat]'
                            }
                            to="/portfolio"
                        >
                            Portfolio
                        </NavLink>
                        <button className="btn btn-animation w-[60%] max-w-[165px]">
                            <span></span>
                            <span></span>
                            <span></span>
                            <span>
                                <a
                                    href={MyResume}
                                    download="CV_Ho_Huy_Duc_Trinh_Frontend_Developer"
                                >
                                    My Resume
                                </a>
                                <FiDownload
                                    size={'16px'}
                                    className="ml-[6px] pb-1"
                                />
                            </span>
                        </button>
                    </div>
                    <div className="border-t-2">This is footer</div>
                </div>
            ) : !openMenu && isMobile ? (
                <HiOutlineMenu
                    size={'24px'}
                    className="cursor-pointer"
                    onClick={handleMenu}
                />
            ) : (
                <>
                    <div className="flex gap-10 ml-[50%]">
                        <NavLink
                            className={({ isActive }) =>
                                isActive ? 'text-purple-900' : 'text-white'
                            }
                            to="/"
                        >
                            Home
                        </NavLink>
                        <NavLink
                            className={({ isActive }) =>
                                isActive ? 'text-purple-900' : 'text-white'
                            }
                            to="/about"
                        >
                            About me
                        </NavLink>
                        <NavLink
                            className={({ isActive }) =>
                                isActive ? 'text-purple-900' : 'text-white'
                            }
                            to="/contact"
                        >
                            Contact
                        </NavLink>
                        <NavLink
                            className={({ isActive }) =>
                                isActive ? 'text-purple-900' : 'text-white'
                            }
                            to="/portfolio"
                        >
                            Portfolio
                        </NavLink>
                    </div>
                    <button className="btn btn-animation w-[10%]">
                        <span></span>
                        <span></span>
                        <span></span>
                        <span>
                            <a
                                href={MyResume}
                                download="CV_Ho_Huy_Duc_Trinh_Frontend_Developer"
                            >
                                My Resume
                            </a>
                            <FiDownload
                                size={'16px'}
                                className="ml-[6px] pb-1"
                            />
                        </span>
                    </button>
                </>
            )}
        </nav>
    );
};

export default Navbar;
