import React from 'react'
import Image from 'next/image'
import flowers from "../asset/img/flowers.svg"
import rantai from '../asset/img/rantai.svg'
import Link from 'next/link'
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function Intro() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <div className='flex justify-center'>
        <div className='max-w-[400px] min-w-[360px] bg-[#5B5B5B] h-[800px]'>
            <div className='text-center'>
             <div className='mt-44'>
              <Image src={flowers}/>
             </div>
             <p className='balthazar text-[24px] text-white'>Walimatul 'Ursy</p>
             <div data-aos="zoom-in" data-aos-delay="50" data-aos-duration="3000">
              <span className='birthstone text-[64px] text-[#E0C1AD]'>Kiah </span>
              <span className='birthstone text-[64px] text-[#E0C1AD]'>&</span>
              <span className='birthstone text-[64px] text-[#E0C1AD]'>Dani</span>
              </div>
             <p className='balthazar text-[20px] text-white'>05.06.2022</p>
             <div className='my-4'>
             <Image src={rantai} />
             </div>
             <p className='roboto text-[10px] font-[400] mb-2 text-white'>Kepada Bpk/Ibu/Saudara/I.</p>
             <p className='atma text-[24px] font-[500] mb-2 text-white'  data-aos="zoom-ot" data-aos-delay="50" data-aos-duration="3000">Halimah</p>
             <p className='roboto text-[10px] font-[400] text-white'  data-aos="" data-aos-delay="50" data-aos-duration="1000">Tanpa mengurangi rasa hormat, kami<br/> Mengundang anda dia acara Pernikahan kami.</p>
             <Link href='/User'>
             <button className='bg-white w-[123px] h-[33px] rounded-[20px] text-center items-center text-black font-[13px] atma text-[13px] font-[13px] mt-9'  data-aos="zoom-in" data-aos-delay="50" data-aos-duration="3000">Buka Undangan</button>
             </Link>
            </div>
        </div>
    </div>
  )
}
