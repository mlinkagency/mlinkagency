// components/Hero.js
"use client";

import React from "react";
import { WhatsappLogo } from "@phosphor-icons/react";
import Link from "next/link";

function Hero() {
  return (
    <div className="bg-zinc-900 text-white py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-screen-xl mx-auto text-center">
          <h1 className="text-4xl  mx-auto md:text-5xl lg:text-6xl font-bold mb-4">
            A nossa missão é <br />vender o seu negócio!
          </h1>
          <p className="text-md md:text-xl lg:text-2xl mb-8">
            Veja como podemos fazer a sua empresa vender mais no mundo digital.
          </p>

          <div className="max-w-full mx-auto xl:max-w-[60%]">
            <div className="relative h-0 pb-[56.25%]">
              <iframe
                className="absolute inset-0 w-full h-full rounded-2xl shadow-blue-500 shadow-md drop-shadow-xl"
                src="https://www.youtube.com/embed/CmqEzihRlps"
                title="Como a V4 Company funciona?"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              ></iframe>
            </div>
          </div>

          <Link
            href="https://wa.me/5511934110891?text=Ol%C3%A1%2C+gostaria+de+conversar+com+a+M-LINK+Agency%21"
            className="mx-auto max-w-[300px] bg-green-500 hover:bg-green-600 text-white text-center font-semibold py-2 px-4 rounded-full flex items-center justify-center mt-8"
          >
            <WhatsappLogo size={24} className="mr-2" />
            Nos chame no whatsapp
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Hero;
