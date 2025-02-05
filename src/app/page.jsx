"use client";
import Photo from "@/components/Photo";
import Social from "@/components/Social";
import Stats from "@/components/Stats";
import { Button } from "@/components/ui/button";
import { Suspense, useEffect, useState } from "react";
import { FiDownload } from "react-icons/fi";

const Home = () => {
  const handleDownload = () => {
    const downloadUrl =
      "https://drive.google.com/uc?id=1OyzRZdHZa8gEeA7UXgK_ooexCp7PdcX9&export=download";
    window.open(downloadUrl, "_blank"); // Abre em uma nova aba para iniciar o download
  };

  return (
    <Suspense fallback={<h1>Loading...</h1>}>
      <section className="h-full">
        <div className="container mx-auto h-full">
          <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
            {/* text */}
            <div className="text-center xl:text-left order-2 xl:order-none">
              <span>Software Developer</span>
              <h1 className="h1 mb-6">
                Hello I`m <br />{" "}
                <span className="text-accent">Thales Henrique</span>
              </h1>
              <p className="max-w-[500px] mb-9 text-white/80">
                Full Stack Developer with an emphasis on Front-end, i’ve
                expertise in frameworks and tools like React, Next.js, and
                microfrontend architecture.
              </p>
              {/*btn and socials */}
              <div className="flex flex-col xl:flex-row items-center gap-8">
                <Button
                  variant="outline"
                  size="lg"
                  onClick={() => handleDownload()}
                  className="uppercase flex items-center gap-2"
                >
                  <span>Download CV</span>
                  <FiDownload className="text-xl" />
                </Button>
                <div className="mb-8 xl:mb-0">
                  <Social
                    containerStyles="flex gap-6"
                    iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"
                  />
                </div>
              </div>
            </div>
            {/* photo */}
            <div className="order-1 xl:order-none mb-8 xl:mb-0">
              <Photo />
            </div>
          </div>
        </div>
        <Stats />
      </section>
    </Suspense>
  );
};

export default Home;
