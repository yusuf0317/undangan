import Image from "next/image"
import Header1 from "../asset/img/bg-header.png"
import flower1 from "../asset/img/1.svg"
import flower2 from "../asset/img/2.svg"
import flower3 from "../asset/img/3.svg"
import flower4 from "../asset/img/4.svg"
import flower5 from "../asset/img/5.svg"
import flower6 from "../asset/img/6.svg"
import flower8 from "../asset/img/8.svg"
import flower9 from "../asset/img/9.svg"
import Footer1 from '../asset/img/bg-footer.png'
import flowers from "../asset/img/flowers.svg"
import Header2 from "../asset/img/bg-main.png"
import aside from "../asset/img/bg-aside.png"
import rantai from "../asset/img/rantai.svg"
import Footer2 from '../asset/img/footer2.png'
import { BsInstagram } from "react-icons/bs";
import { IoLogoWhatsapp } from "react-icons/io";
import { IoMdMusicalNote } from "react-icons/io";
import { BsCalendar4 } from "react-icons/bs";
import { FiMapPin } from "react-icons/fi";
import { Link } from "react-scroll";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import ReactAudioPlayer from 'react-audio-player';


export default function User() {
    useEffect(() => {
      AOS.init();
      AOS.refresh();
    }, []);
    
  const audio = new Audio(
    "https://file-examples-com.github.io/uploads/2017/11/file_example_MP3_700KB.mp3"
  );
  const start = () => {
    audio.play();
  };
    return (
    <div className='flex justify-center' id="home">
        <div className='max-w-[400px] min-w-[360px] h-[800px]'>
            <div className="relative">
            <Image src={Header1}/>
            <div className="inset-0 absolute">
                <div className=" flex justify-between">
                    <div>
                        <Image src={flower1} className=""/>
                    </div>
                    <div className="mt-4 mr-6 fixed flex ml-80 z-50">
                        <button onClick={start} className="bg-[#5B5B5B] p-[5px] rounded-3xl"><span className="text-white "><IoMdMusicalNote/></span></button>
                    </div>    
                </div>
                <div className="text-center -mt-32">
                    <div className="flex ml-[80px] text">
                    <p className="birthstone text-[64px]" data-aos="zoom-ot" data-aos-offset="200" data-aos-delay="50" data-aos-duration="3000">Kiah</p>
                    <p className="birthstone text-[40px] mt-7 ml-7" data-aos="zoom-in" data-aos-offset="200" data-aos-delay="50" data-aos-duration="3000">&</p>
                    </div>
                    <p className="birthstone text-[64px] ml-24 -mt-7" data-aos="zoom-out" data-aos-offset="200" data-aos-delay="50" data-aos-duration="3000">Dani</p>
                </div>
                <ReactAudioPlayer
                src="../asset/audio/maher.ogg"
                autoPlay
                controls loop className="hidden"
                />
                <div className="scroll-downs">
                        <div className="mousey">
                            <div className="scroller"></div>
                        </div>
                    </div>
                <div className="flex justify-between">
                    <div>
                    <Image src={flower2}/>
                    </div>
                    <div className="-mt-24">
                    <Image src={flower3}/>
                    </div>
                </div>
                <div className="relative -mt-44 z-10">
                    <Image src={Footer1}/>
                    <div className="inset-0 absolute">
                        <div className="mt-16 flex justify-center" data-aos="" data-aos-offset="200" data-aos-delay="50" data-aos-duration="3000">
                          <Image src={flowers}/>
                        </div>
                        <div className="mt-8" data-aos="zoom-in" data-aos-offset="200" data-aos-delay="50" data-aos-duration="3000">
                              <p className="cormorant text-center text-white"><i>"Dan segala sesuatu Kami jadikan berpasang-<br/>pasangan supaya kamu mengingat kebesaran<br/>Allah."(Adz Dzariyat:49)</i></p>
                          </div>
                    </div>
                </div>
            </div>
            </div>
            <div className="relative -mt-2"  id="love">
            <Image src={Header1}/>
            <div className="inset-0 absolute"  id="love">
                <div className="-mt-[90px] ml-24">
                    <Image src={flower4} />
                </div>
                <div className="-mt-56 absolute mx-12">
                    <div className="z-50" data-aos="" data-aos-offset="200" data-aos-delay="50" data-aos-duration="3000"><p className="cormorant font-[600] text-[16px] text-[#5B5B5B]   text-center"><i>Assalamu'alaikum Warahmatullahi<br/>Wabarokatuh</i></p></div>
                    <p className="cormorant font-[]400 text-[12px] mt-5 text-center"data-aos="" data-aos-offset="200" data-aos-delay="50" data-aos-duration="3000">Bermaksud menyempurnakan separuh agama<br/>kami, perkenankanlah kami,</p>
                    <p className="text-center mt-6 birthstone font-[400] text-[48px]"data-aos="zoom-in" data-aos-offset="200" data-aos-delay="50" data-aos-duration="3000">Siti Rukiah</p>
                    <p className="text-center cormorant leading-[14.53px] text-[12px]"data-aos="" data-aos-offset="200" data-aos-delay="50" data-aos-duration="3000">Putri ke-2 dari<br/>Bpk. Rahmat Maulana & Ibu Ucih</p>
                    <div className="text-center leading-4 my-12">
                        <p className="rouge font-[400] text-[32px] mr-36"data-aos="" data-aos-offset="200" data-aos-delay="50" data-aos-duration="3000">Kiah</p>
                        <p className="pinyon font-[400] text-[48px]"data-aos="zoom-out" data-aos-offset="200" data-aos-delay="50" data-aos-duration="3000">&</p>
                        <p className="rouge font-[400] text-[32px] ml-36"data-aos="" data-aos-offset="200" data-aos-delay="50" data-aos-duration="3000">Dani</p>
                    </div>
                    <p className="text-center birthstone font-[400] text-[48px]"data-aos="zoom-in" data-aos-offset="200" data-aos-delay="50" data-aos-duration="3000">Dani Ramadan</p>
                    <p className="cormorant leading-[14.53px] text-[12px] text-center"data-aos="" data-aos-offset="200" data-aos-delay="50" data-aos-duration="3000">Putra ke-2 dari<br/>Bpk. Bentong Supendi(Allahuyarham) & Ibu Onih</p>
                </div>
                <div className="mt-32 absolute">
                    <Image src={flower5}/>
                </div>
            </div>
            </div>
            <div className="relative" id="date">
                <Image src={aside}/>
                <div className="inset-0 absolute text-center font-[400] mt-10">
                    <p className="rouge text-white text-[32px]" data-aos="" data-aos-offset="200" data-aos-delay="50" data-aos-duration="3000">Acara akan diselenggarakan</p>
                    <p className="roboto font-[400] text-[#B4B4B4]"data-aos="" data-aos-offset="200" data-aos-delay="50" data-aos-duration="3000"><i>Ahad, 05 . 06 .22</i></p>
                    <div className="relative" data-aos="zoom-in" data-aos-offset="200" data-aos-delay="50" data-aos-duration="3000">
                        <Image src={flower6}/>
                        <div className="inset-0 absolute mt-[65px]">
                            <p className="atma font-[400] text-[32px] text-white">14</p>
                            <p className="atma font-[700]
                            text-[22px] text-white">hari</p>
                        </div>
                    </div>
                    <div className="flex justify-between mx-16">
                        <div className="leading-6 text-white" data-aos="" data-aos-offset="200" data-aos-delay="50" data-aos-duration="3000">
                            <p className="atma text-[20px] font-[400]">20</p>
                            <p className="atama text-[20px]
                            font-[500]">Jam</p>
                        </div>
                        <div className="leading-6 text-white" data-aos="" data-aos-offset="200" data-aos-delay="50" data-aos-duration="3000">
                            <p className="atma text-[20px] font-[400]">20</p>
                            <p className="atama text-[20px]
                            font-[500]">Menit</p>
                        </div>
                        <div className="leading-6 text-white" data-aos="" data-aos-offset="200" data-aos-delay="50" data-aos-duration="3000">
                            <p className="atma text-[20px] font-[400]">20</p>
                            <p className="atama text-[20px]
                            font-[500]">Detik</p>
                        </div>
                    </div>
                    <button className="border rounded-3xl mt-5 px-3"data-aos="" data-aos-offset="200" data-aos-delay="50" data-aos-duration="3000">
                        <a href="https://calendar.google.com/calendar/u/0/r" className="flex justify-between items-center">
                            <div className="mr-2 text-white text-[18px]
                            "><BsCalendar4/></div>
                            <span className="cormorant text-white text-[16px]">Add Calender</span>
                        </a>
                    </button>
                </div>
            </div>
            <div className="relative -mt-1" id="map">
                <Image src={Header2}/>
                <div className="inset-0 absolute">
                    <div>
                    <Image src={flower1}/>
                    </div>
                    <p className="rouge font-[400] text-[36px] text-center -mt-[305px] absolute mx-20" data-aos="" data-aos-offset="200" data-aos-delay="50" data-aos-duration="3000"> Our Special Day</p>
                    <div className="absolute z-30" data-aos="zoom-in" data-aos-offset="200" data-aos-delay="50" data-aos-duration="3000">
                        <div className="text-center footer mx-9 px-5 -mt-56 border-4 border-white rounded-lg shadow-md py-5">
                        <div className="mb-4">
                            <p className="rouge font-[400] text-[30px] text-[#5B5B5B]">Akad Nikah</p>
                            <p className="roboto font-bold text-[15px]">05 . 06 .22</p>
                            <p className="cormorant text-[15px]">09.00 : 10.00 WIB</p>
                        </div>
                        <Image src={rantai}/>
                        <p className="rouge font-[400] text-[30px] text-[#5B5B5B] mt-4">Akad Nikah</p>
                        <p className="roboto font-bold text-[15px]">05 . 06 .22</p>
                        <p className="cormorant text-[15px]">10.00 : Selesai WIB</p>
                        <p className="cormorant font-[400] text-[16px] mt-6">Jl. Tangkil RT 01/05 Desa Sukaluyu, Kec. Tamansari, Kab. Bogor, Jawa Barat 16610</p>
                        <button className="border-2 border-black  rounded-3xl px-4 py-[1px] mt-4">
                            <a className="flex justify-between items-center" href="https://goo.gl/maps/SvE9SynwGUYerPTd8">
                             <div className="mr-2">
                                    <FiMapPin/>
                                </div>
                                <span className="cormorant font-[700]">Lihat Lokasi</span>
                            </a>
                        </button>
                        </div>
                    </div>
                    <div className="ml-10 -mt-12 absolute">
                        <Image src={flower8} />
                    </div>
                </div>
                <div className="relative -mt-20">
                    <Image src={Footer2}/>
                    <div className="inset-0 absolute">
                        <p className="cormorant font-[400] text-[16px] text-center mx-[26px] text-white mt-9 leading-[19.38px]"data-aos="" data-aos-offset="200" data-aos-delay="50" data-aos-duration="3000">Merupakan suatu kehormatan dan kebahagiaan bagi kami apabila Bapak/Ibu/Saudara/i berkenan hadir untuk memberikan do'a restu kepada kedua mempelai.</p>
                        <p className="cormorant text-[#D3D3D3] text-center mt-5 text-[16px]"data-aos="" data-aos-offset="200" data-aos-delay="50" data-aos-duration="3000"><i>Wassalamu’alikum Warahmatullahi Wabarakatuh</i></p>
                    </div>
                </div>
                <div className="pb-24">
                    <div className="text-center mt-2">
                        <Image src={flower9}/>
                    </div>
                    <div className="flex justify-between mx-10">
                        <div>
                            <div className="text-3xl flex justify-center"><BsInstagram/></div>
                            <p className="text-center inter text-[12px] mt-1">@bluegrey.digital</p>
                        </div>
                        <a href="https://boxicons.com/?query=wha" >
                            <a className="text-3xl flex justify-center"><IoLogoWhatsapp/></a>
                            <p className="text-center inter text-[12px] mt-1">+62 815-7497-2872</p>
                        </a>
                    </div>
                </div>
            </div>
            <div className="bg-[#FAFAFA] bottom-0 fixed max-w-[400px] min-w-[360px] pt-3 pb-2 border-t-2  z-50">
                <ul className="flex justify-between items-center mx-6">
                    <li>
                        <Link to="home" spy={true} smooth={true} duration={1000} activeClass="bg-[#5B5B5B] pt-4 pb-[2px] px-2 rounded-lg text-white" className="pt-4 pb-[2px] px-2"> 
                        <i className='bx bx-home-alt text-3xl'></i>
                        </Link>
                    </li>
                    <li>
                        <Link to="love" spy={true} smooth={true} duration={500} offset={50} activeClass="bg-[#5B5B5B] pt-4 pb-[2px] px-2 rounded-lg text-white" className="pt-4 pb-[2px] px-2"> 
                        <i className='bx bx-heart text-3xl'></i>
                        </Link>
                    </li>
                    <li>
                        <Link to="date" spy={true} smooth={true} duration={500} activeClass="bg-[#5B5B5B] pt-4 pb-[2px] px-2 rounded-lg text-white" className="pt-4 pb-[2px] px-2"> 
                        <i className='bx bx-calendar-alt text-3xl'></i>
                        </Link>
                    </li>
                    <li>
                        <Link to="map" spy={true} smooth={true} 
                        hashSpy={true}
                        offset={50}
                        duration={1500}
                        delay={300}
                        isDynamic={true}
                        ignoreCancelEvents={false} activeClass="bg-[#5B5B5B] pt-4 pb-[2px] px-2 rounded-lg text-white" className="pt-4 pb-[2px] px-2"> 
                        <i className='bx bx-map-alt text-3xl'></i>
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    </div>
  )
}