"use client";
import { Card } from "../components/card";
import { Mail, Phone } from "lucide-react";
import { Navigation } from "../components/nav";
import Link from "next/link";
import Particles from "../components/particles";

const socials = [
  {
    icon: <Mail size={25} />,
    href: "mailto:efe@efeiskele.com",
    label: "Email",
    handle: "efe@efeiskele.com",
  },
  {
    icon: <Phone size={25} />,
    label: "0537 512 22 19",
    label2: "0534 978 61 05",
  },
];

export default function Example() {
  return (
    <div className=" bg-gradient-to-tl from-zinc-900/0 via-zinc-900 to-zinc-900/0">
      <Navigation />
      <Particles
        className="absolute inset-0 -z-10 animate-fade-in"
        quantity={150}
      />
      <div className="container flex items-center justify-center min-h-screen px-4 mx-auto">
        <div className="grid w-full grid-cols-1 gap-8 mx-auto mt-32 sm:mt-0 sm:grid-cols-3 lg:gap-16">
          <Card>
            <div className="text-3xl mb-10 mt-4 text-center text-zinc-400">
              İletişime geçin
            </div>
            <div className="grid grid-cols-2 gap-4 max-w-xl m-auto">
              <div className="col-span-2 lg:col-span-1">
                <input
                  type="text"
                  className="border-solid border-gray-400 rounded-md p-3 md:text-xl w-full"
                  placeholder="İsim"
                />
              </div>
              <div className="col-span-2 lg:col-span-1">
                <input
                  type="email"
                  className="border-solid border-gray-400 rounded-md p-3 md:text-xl w-full"
                  placeholder="Mail adresi"
                />
              </div>
              <div className="col-span-2">
                <input
                  type="tel"
                  className="border-solid border-gray-400 rounded-md p-3 md:text-xl w-full"
                  placeholder="Telefon"
                />
              </div>
              <div className="col-span-2">
                <textarea
                  className="border-solid border-gray-400 rounded-md p-3 md:text-xl w-full"
                  placeholder="Message"
                ></textarea>
              </div>
              <div className="col-span-2 text-right mx-auto">
                <button className="py-3 px-6 bg-gradient-to-b from-zinc-800  to-zinc-900/10 text-white font-bold w-full sm:w-32 rounded-md">
                  Kaydet
                </button>
              </div>
            </div>
          </Card>
          <Card key={socials[0].label}>
            <Link
              className="p-4 relative flex flex-col items-center gap-4 duration-700 group md:gap-8 md:py-24  lg:pb-48  md:p-16"
              href={socials[0].href!.toString()}
            >
              <span className="relative z-10 flex items-center justify-center w-12 h-12 text-sm duration-1000 border rounded-full text-zinc-200 group-hover:text-white group-hover:bg-zinc-900 border-zinc-500 bg-zinc-900 group-hover:border-zinc-200 drop-shadow-orange">
                {socials[0].icon}
              </span>{" "}
              <div className="z-10 flex flex-col items-center">
                <span className="text-xl font-medium duration-150 lg:text-3xl text-zinc-200 group-hover:text-white font-display">
                  {socials[0].handle}
                </span>
                <span className="mt-4 text-lg text-center duration-1000 text-zinc-400 group-hover:text-zinc-200">
                  {socials[0].label}
                </span>
                <span className="mt-4 text-lg text-center duration-1000 text-zinc-400 group-hover:text-zinc-200">
                  {socials[0].label2}
                </span>
              </div>
            </Link>
          </Card>
          <Card key={socials[1].label}>
            <div className="p-4 relative flex flex-col items-center gap-4 duration-700 group md:gap-8 md:py-24  lg:pb-48  md:p-16">
              <span className="relative z-10 flex items-center justify-center w-12 h-12 text-sm duration-1000 border rounded-full text-zinc-200 group-hover:text-white group-hover:bg-zinc-900 border-zinc-500 bg-zinc-900 group-hover:border-zinc-200 drop-shadow-orange">
                {socials[1].icon}
              </span>{" "}
              <div className="z-10 flex flex-col items-center">
                <span className="text-xl font-medium duration-150 lg:text-3xl text-zinc-200 group-hover:text-white font-display">
                  {socials[1].handle}
                </span>
                <span className="mt-4 text-lg text-center duration-1000 text-zinc-400 group-hover:text-zinc-200">
                  {socials[1].label}
                </span>
                <span className="mt-4 text-lg text-center duration-1000 text-zinc-400 group-hover:text-zinc-200">
                  {socials[1].label2}
                </span>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
