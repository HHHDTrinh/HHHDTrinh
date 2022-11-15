import { useEffect, useState } from 'react';
import { Link } from 'react-scroll';
import { MdOutlineClose } from 'react-icons/md';
import { HiOutlineMenu } from 'react-icons/hi';
import { FiDownload } from 'react-icons/fi';

import MyResume from '../assets/pdf/CV_Ho_Huy_Duc_Trinh_Frontend_Developer.pdf';

const Navbar = ({ isMobile }) => {
    const [openMenu, setOpenMenu] = useState(false);
    const handleMenu = () => {
        setOpenMenu(!openMenu);
    };

    window.addEventListener('scroll', function () {
        const navElement = document.getElementById('navbar');
        if (
            document.body.scrollTop > 20 ||
            document.documentElement.scrollTop > 20
        ) {
            navElement.style.background = '#f5f5f5';
        } else {
            navElement.style.background = 'transparent';
        }
    });

    useEffect(() => {
        if (openMenu) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'visible';
        }
    }, [openMenu]);

    return (
        <nav
            id="navbar"
            className="px-4 flex justify-between items-center text-purple-900
            h-[80px] min-h-[80px] lg:h-[90px] lg:min-h-[90px] fixed w-full uppercase text-[1.8rem] lg:text-[2rem] z-10 top-[-5px]"
        >
            <h1 className="text-[3rem] xl:text-6xl font-montez italic">HHDT</h1>
            {openMenu && isMobile ? (
                <div className="fixed flex flex-col justify-between px-4 py-2 inset-0 bg-[#f5f5f5] animate-slideleft overscroll-contain">
                    <div className="flex items-center justify-between h-[60px] min-h-[60px]">
                        <h1 className="text-[3rem] xl:text-6xl font-montez italic">
                            HHDT
                        </h1>
                        <MdOutlineClose
                            size={'24px'}
                            className="cursor-pointer"
                            onClick={handleMenu}
                        />
                    </div>
                    <ul className="flex flex-col items-center gap-10 -translate-y-20">
                        <li>
                            <Link
                                onClick={handleMenu}
                                className="text-black"
                                offset={-30}
                                activeClass="active"
                                spy={true}
                                smooth={true}
                                duration={300}
                                to="hero-banner"
                            >
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link
                                onClick={handleMenu}
                                className="text-black"
                                offset={-80}
                                activeClass="active"
                                spy={true}
                                smooth={true}
                                duration={300}
                                to="about"
                            >
                                About
                            </Link>
                        </li>
                        <li>
                            <Link
                                onClick={handleMenu}
                                className="text-black"
                                // offset={-10}
                                activeClass="active"
                                spy={true}
                                smooth={true}
                                duration={300}
                                to="portfolio"
                            >
                                Portfolio
                            </Link>
                        </li>
                        <li>
                            <Link
                                onClick={handleMenu}
                                className="text-black"
                                // offset={-80}
                                activeClass="active"
                                spy={true}
                                smooth={true}
                                duration={300}
                                to="contact"
                            >
                                Contact
                            </Link>
                        </li>
                        <button className="btn btn-animation w-[60%] max-w-[165px]">
                            <span className="bg-[whitesmoke]"></span>
                            <span className="bg-[#ff2625]"></span>
                            <span className="bg-[#191624]"></span>
                            <span className="bg-[whitesmoke]">
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
                    </ul>
                    <div className="border-t-2">This is footer</div>
                </div>
            ) : !openMenu && isMobile ? (
                <HiOutlineMenu
                    size={'24px'}
                    className="cursor-pointer"
                    onClick={handleMenu}
                />
            ) : (
                <div className="">
                    <ul className="flex gap-10 justify-end">
                        <li>
                            <Link
                                className="text-purple-900 cursor-pointer hover:text-[#ff2a39]"
                                activeClass="active"
                                spy={true}
                                offset={-30}
                                smooth={true}
                                duration={300}
                                to="hero-banner"
                            >
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link
                                className="text-purple-900 cursor-pointer hover:text-[#ff2a39]"
                                activeClass="active"
                                spy={true}
                                offset={-100}
                                smooth={true}
                                duration={300}
                                to="about"
                            >
                                About
                            </Link>
                        </li>
                        <li>
                            <Link
                                className="text-purple-900 cursor-pointer hover:text-[#ff2a39]"
                                activeClass="active"
                                spy={true}
                                offset={-100}
                                smooth={true}
                                duration={300}
                                to="portfolio"
                            >
                                Portfolio
                            </Link>
                        </li>
                        <li>
                            <Link
                                className="text-purple-900 cursor-pointer hover:text-[#ff2a39]"
                                activeClass="active"
                                spy={true}
                                offset={-100}
                                smooth={true}
                                duration={300}
                                to="contact"
                            >
                                Contact
                            </Link>
                        </li>
                    </ul>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
