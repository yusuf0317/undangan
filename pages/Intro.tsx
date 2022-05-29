import React, { useState } from "react";
import Image from "next/image";
import flowers from "../asset/img/flowers.svg";
import rantai from "../asset/img/rantai.svg";
import Link from "next/link";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function Intro() {

  let [name, setName] = useState<any>("name");
  useEffect(() => {
    AOS.init();
    AOS.refresh();
    const urlParams = new URLSearchParams(window.location.search);
    setName(urlParams.get("to"));
  }, []);


  return (
    <div className="flex justify-center">
      <div className="w-full bg-[#5B5B5B] h-[800px]">
        <div className="text-center">
          <div className="mt-44">
            <Image src={flowers} alt="flowers" />
          </div>
          <div data-aos="zoom-in" data-aos-delay="50" data-aos-duration="3000">
            <span className="birthstone text-[64px] text-[#B3B3B3]">Kiah </span>
            <span className="birthstone text-[64px] text-[#B3B3B3]">&</span>
            <span className="birthstone text-[64px] text-[#B3B3B3]">Dani</span>
          </div>
          <p className="balthazar text-[20px] text-white">05.06.2022</p>
          <div className="my-4">
            <Image src={rantai} alt="rantai" />
          </div>
          <p className="roboto text-[10px] font-[400] mb-2 text-white">
            Kepada Bpk/Ibu/Saudara/I.
          </p>
          <p
            className="atma text-[24px] font-[500] mb-2 text-white"
            data-aos="zoom-ot"
            data-aos-delay="50"
            data-aos-duration="3000"
          >
            {name}
          </p>
          <p className="roboto text-[10px] font-[400] text-white">
            Tanpa mengurangi rasa hormat, kami
            <br /> mengundang Anda di acara pernikahan kami.
          </p>
          <Link href="/User">
            <button
              className="bg-white w-[123px] h-[33px] rounded-[20px] text-center items-center text-black font-[13px] atma text-[13px] font-[13px] mt-9"
              data-aos="zoom-in"
              data-aos-delay="50"
              data-aos-duration="3000"
            >
              Buka Undangan
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
