import React from 'react';

import MyResume from '../assets/pdf/CV_Ho_Huy_Duc_Trinh_Frontend_Developer.pdf';
import { FiDownload, FiMail } from 'react-icons/fi';

const About = () => {
    return (
        <section id="about" className="mt-[80px] overflow-hidden">
            <div className="container">
                <div className="row">
                    <div className="flex items-center basis-full xl:basis-7/12 col">
                        <div className="xl:pr-[88px] xl:pb-[50px] leading-none">
                            <h2 className="text-[3.5rem] font-bold font-mono leading-[45px] text-[#040c2c] mb-5 tracking-[1px]">
                                About me
                            </h2>
                            <h6 className="text-[#333] tracking-[1px] mb-[30px] text-[1.6rem]">
                                Front-End Developer
                            </h6>
                            <p className="text-justify xl:text-left pb-[2rem] mb-5 text-[#444] leading-[30px] text-[16px]">
                                I am Hồ Huy Đức Trình, I was attracted to
                                programming and website design, so I continued
                                to study more about HTML, CSS, and Javascript.
                                Later, I learned more about ReactJS from web
                                pages and videos on YouTube. I'm hoping the
                                knowledge I learn will make it easier for me to
                                get a job with the company.
                            </p>
                            <div className="flex flex-col xl:flex-row items-center gap-4 xl:gap-10">
                                <button className="btn btn-animation w-full h-[55px] xl:w-[40%] xl:h-[48px]">
                                    <span className="bg-[whitesmoke]"></span>
                                    <span className="bg-[#ff2625]"></span>
                                    <span className="bg-[wheat]"></span>
                                    <span className="bg-[whitesmoke]">
                                        <a
                                            className="capitalize"
                                            href="mailto:trinhhhd2000@gmail.com"
                                        >
                                            hire me
                                        </a>
                                        <FiMail
                                            size={'16px'}
                                            className="ml-[6px] pb-1"
                                        />
                                    </span>
                                </button>
                                <button className="btn btn-animation w-full h-[55px] xl:w-[40%] xl:h-[48px]">
                                    <span className="bg-[whitesmoke]"></span>
                                    <span className="bg-[#ff2625]"></span>
                                    <span className="bg-[#191624]"></span>
                                    <span className="bg-[whitesmoke]">
                                        <a
                                            className="text-[1.45rem] capitalize"
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
                        </div>
                    </div>
                    <div className="col basis-full xl:basis-5/12">
                        <img
                            src="https://media.giphy.com/media/qgQUggAC3Pfv687qPC/giphy.gif"
                            align="right"
                            alt="about media"
                            className="w-full md:h-[80%] shadow-about-shadow mt-12 xl:mt-0"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
