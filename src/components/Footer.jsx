import React from 'react';

import { BsGoogle } from 'react-icons/bs';
import { ImFacebook } from 'react-icons/im';
import { FiGithub } from 'react-icons/fi';
import { FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
    return (
        <section className="bg-purple-500 py-[40px] xl:py-[60px]">
            <div className="container text-center">
                <h1 className="text-[4rem] font-montez italic mb-[1rem] xl:mb-[2rem]">
                    HHDT
                </h1>
                <div className="flex items-center justify-center gap-8">
                    <a
                        className="bg-overlay-icon/20 rounded-full text-center leading-[43px] xl:hover:bg-white w-[40px] h-[40px]"
                        rel="noopener noreferrer"
                        target="_blank"
                        href="https://www.facebook.com/d.trinh2012/"
                    >
                        <ImFacebook size={'18px'} className="inline-block" />
                    </a>
                    <a
                        className="bg-overlay-icon/20 rounded-full text-center leading-[43px] xl:hover:bg-white w-[40px] h-[40px]"
                        rel="noopener noreferrer"
                        target="_blank"
                        href="mailto:trinhhhd2000@gmail.com"
                    >
                        <BsGoogle size={'18px'} className="inline-block" />
                    </a>
                    <a
                        className="bg-overlay-icon/20 rounded-full text-center leading-[43px] xl:hover:bg-white w-[40px] h-[40px]"
                        rel="noopener noreferrer"
                        target="_blank"
                        href="https://github.com/HHHDTrinh"
                    >
                        <FiGithub size={'18px'} className="inline-block" />
                    </a>
                    <a
                        className="bg-overlay-icon/20 rounded-full text-center leading-[43px] xl:hover:bg-white w-[40px] h-[40px]"
                        rel="noopener noreferrer"
                        target="_blank"
                        href="https://www.linkedin.com/in/tr%C3%ACnh-h%E1%BB%93-huy-%C4%91%E1%BB%A9c-957357256/"
                    >
                        <FaLinkedinIn size={'18px'} className="inline-block" />
                    </a>
                </div>
                <h6 className="text-[#333] pt-[12px] mb-3 font-serif">
                    Made with love by{' '}
                    <a
                        className="text-purple-900 font-mono"
                        href="https://www.facebook.com/d.trinh2012/"
                    >
                        Đức Trình
                    </a>
                </h6>
                <p className="uppercase font-serif">
                    &#169; Đức Trình - ALL RIGHTS RESERVED
                </p>
            </div>
        </section>
    );
};

export default Footer;
