'use client'

import React from 'react';
import {
  FacebookLogo ,
  TwitterLogo ,
  InstagramLogo,
  WhatsappLogo,
} from '@phosphor-icons/react';

import Link from 'next/link';

function Footer() {
  return (
    <footer className="bg-zinc-600 text-white py-40">
      <div className="container mx-auto flex flex-col items-center gap-5">
        <h3 className="text-xl text-center font-semibold mb-4">Siga-nos nas redes sociais <br /> <br /> 👇😊</h3>
        <div className="flex space-x-4 mb-4">
          <Link
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:text-blue-700"
          >
            <FacebookLogo  size={32} />
          </Link>
          <Link
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:text-blue-700"
          >
            <TwitterLogo  size={32} />
          </Link>
          <Link
            href="https://www.instagram.com/mlinkagency/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-pink-500 hover:text-pink-700"
          >
            <InstagramLogo size={32} />
          </Link>
        </div>
        <Link
          href="https://wa.me/5511934110891?text=Ol%C3%A1%2C+gostaria+de+conversar+com+a+M-LINK+Agency%21"
          className="bg-green-500 hover:bg-green-600 text-white text-center font-semibold py-2 px-4 rounded-full flex items-center"
        >
          <WhatsappLogo size={32} className="mr-2" />
          Converse agora no Whatsapp
        </Link>
      </div>
    </footer>
  );
}

export default Footer;
