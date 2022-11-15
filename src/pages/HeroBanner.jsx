import React from 'react';
import { BsGoogle } from 'react-icons/bs';
import { ImFacebook } from 'react-icons/im';
import { FiGithub } from 'react-icons/fi';
import { FaLinkedinIn } from 'react-icons/fa';

const HeroBanner = () => {
    return (
        <section
            id="hero-banner"
            className="xl:border-b-[1px] xl:border-[#ccc]"
        >
            <div className="hero__banner-bg">
                <div className="flex justify-center items-center w-full">
                    <div className="relative text-[whitesmoke] text-left">
                        <h5 className="text-[2.4rem] xl:text-[3rem] font-mono font-normal mb-[1rem] xl:mb-[0.6rem] tracking-[1px] leading-none">
                            Hello
                        </h5>
                        <h2 className="my-[1rem] font-bold text-[3.8rem] xl:text-[5.5rem] leading-tight">
                            I am Đức Trình.
                        </h2>
                        <h4 className="text-[1.8rem] xl:text-[2.8rem] tracking-[0] font-mono leading-none mb-3 pt-4 pb-8">
                            Front-end Developer
                        </h4>
                        <ul className="m-0 p-0 list-none">
                            <li className="mx-[3px] inline-block">
                                <a
                                    rel="noopener noreferrer"
                                    target="_blank"
                                    href="https://www.facebook.com/d.trinh2012/"
                                >
                                    <div className="w-[40px] h-[40px] bg-overlay-icon rounded-full text-center leading-[43px] xl:hover:bg-[#ff2a39]">
                                        <ImFacebook
                                            size={'18px'}
                                            className="inline-block"
                                        />
                                    </div>
                                </a>
                            </li>
                            <li className="mx-[3px] inline-block">
                                <a
                                    rel="noopener noreferrer"
                                    target="_blank"
                                    href="mailto:trinhhhd2000@gmail.com"
                                >
                                    <div className="w-[40px] h-[40px] bg-overlay-icon rounded-full text-center leading-[43px] xl:hover:bg-[#ff2a39]">
                                        <BsGoogle
                                            size={'18px'}
                                            className="inline-block"
                                        />
                                    </div>
                                </a>
                            </li>
                            <li className="mx-[3px] inline-block">
                                <a
                                    rel="noopener noreferrer"
                                    target="_blank"
                                    href="https://github.com/HHHDTrinh"
                                >
                                    <div className="w-[40px] h-[40px] bg-overlay-icon rounded-full text-center leading-[43px] xl:hover:bg-[#ff2a39]">
                                        <FiGithub
                                            size={'18px'}
                                            className="inline-block"
                                        />
                                    </div>
                                </a>
                            </li>
                            <li className="mx-[3px] inline-block">
                                <a
                                    rel="noopener noreferrer"
                                    target="_blank"
                                    href="https://www.linkedin.com/in/tr%C3%ACnh-h%E1%BB%93-huy-%C4%91%E1%BB%A9c-957357256/"
                                >
                                    <div className="w-[40px] h-[40px] bg-overlay-icon rounded-full text-center leading-[43px] xl:hover:bg-[#ff2a39]">
                                        <FaLinkedinIn
                                            size={'18px'}
                                            className="inline-block"
                                        />
                                    </div>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroBanner;
