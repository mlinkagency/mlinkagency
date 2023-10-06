"use client";

import React from "react";
import {
  CheckSquare,
  ListChecks,
  WhatsappLogo,
  Megaphone,
  InstagramLogo ,
  Rocket
} from "@phosphor-icons/react";

function Services() {
  return (
    <section className="bg-zinc-800 py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-screen-xl mx-auto text-left">
          <h2 className="text-3xl md:text-4xl lg:text-4xl font-bold mb-4">
            Nossos Serviços
          </h2>
          <h3 className="text-lg md:text-xl lg:text-xl mb-8">
            Veja o que oferecemos
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Serviço 1 */}
            <div className="bg-zinc-700 hover:bg-zinc-600 p-4 rounded-lg shadow-md cursor-pointer transition-all duration-150">
              <div className="flex items-center mb-4">
                <div className="bg-blue-500 w-10 h-10 p-2 rounded-full">
                  <CheckSquare size={24} color="white" />
                </div>
                <h4 className="ml-4 text-xl font-semibold">
                  Reunião de Kickoff
                </h4>
              </div>
              <p className="text-gray-200">
                É a primeira reunião que vamos fazer, para entender melhor você
                e o seu negócio.
              </p>
            </div>

            {/* Serviço 2 */}
            <div className="bg-zinc-700 hover:bg-zinc-600 p-4 rounded-lg shadow-md cursor-pointer transition-all duration-150">
              <div className="flex items-center mb-4">
                <div className="bg-blue-500 w-10 h-10 p-2 rounded-full">
                  <ListChecks size={24} color="white" />
                </div>
                <h4 className="ml-4 text-xl font-semibold">
                  Registrar informações
                </h4>
              </div>
              <p className="text-gray-200">
                Precisamos de informações específicas sobre o seu negócio para
                melhor eficiência nas nossas estratégias de marketing e vendas
                online.
              </p>
            </div>

            {/* Serviço 3 */}
            <div className="bg-zinc-700 hover:bg-zinc-600 p-4 rounded-lg shadow-md cursor-pointer transition-all duration-150">
              <div className="flex items-center mb-4">
                <div className="bg-blue-500 w-10 h-10 p-2 rounded-full">
                  <WhatsappLogo size={24} color="white" />
                </div>
                <h4 className="ml-4 text-xl font-semibold">
                  Automação de Whatsapp
                </h4>
              </div>
              <p className="text-gray-200">
                Fazemos toda automação de mensagens no whatsapp. Desde o
                primeiro atendimento ao cliente a remarketing, envio de
                mensagens de promoções, pagamentos, etc.
              </p>
            </div>

            {/* Serviço 4 */}
            <div className="bg-zinc-700 hover:bg-zinc-600 p-4 rounded-lg shadow-md cursor-pointer transition-all duration-150">
              <div className="flex items-center mb-4">
                <div className="bg-blue-500 w-10 h-10 p-2 rounded-full">
                  <Megaphone size={24} color="white" />
                </div>
                <h4 className="ml-4 text-xl font-semibold">
                  Gestão de Anúncios Online
                </h4>
              </div>
              <p className="text-gray-200">
                Na M-Link nossos gestores de tráfego são especialistas em levar
                o seu anúncio as pessoas certas, levando leads realmente
                interessados em comprar de você, diretamente para o seu
                whatsapp.
              </p>
            </div>

            {/* Serviço 5 */}
            <div className="bg-zinc-700 hover:bg-zinc-600 p-4 rounded-lg shadow-md cursor-pointer transition-all duration-150">
              <div className="flex items-center mb-4">
                <div className="bg-blue-500 w-10 h-10 p-2 rounded-full">
                  <InstagramLogo  size={24} color="white" />
                </div>
                <h4 className="ml-4 text-xl font-semibold">
                  Gestão de Mídias Sociais
                </h4>
              </div>
              <p className="text-gray-200">
                Analisamos todo o seu perfil nas redes sociais, criamos toda uma
                estratégia de growth (crescimento), e campanhas de engajamento
                para o seu negócio!
              </p>
            </div>

            {/* Serviço 6 */}
            <div className="bg-zinc-700 hover:bg-zinc-600 p-4 rounded-lg shadow-md cursor-pointer transition-all duration-150">
              <div className="flex items-center mb-4">
                <div className="bg-blue-500 w-10 h-10 p-2 rounded-full">
                  <Rocket  size={24} color="white" />
                </div>
                <h4 className="ml-4 text-xl font-semibold">
                  Assessoria Digital
                </h4>
              </div>
              <p className="text-gray-200">
                Otimização de mecanismos de busca
                (SEO) e, para aumentar a conversão, desenvolvemos landing pages
                e páginas de vendas de alta qualidade.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
