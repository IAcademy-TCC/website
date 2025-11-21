"use client"

import Banner from "@/components/Banner";
import Beneficios from "@/components/Beneficios";
import TopBar from "@/components/TopBar";
import DepoimentoFaq from "@/components/DepoimentoFaq";
import Cursos from "@/components/Cursos";
import CallToActionSection from "@/components/CallToActionSection"
import Footer from "@/components/Footer";

export default function Inicio(){


    return (
      <>
        <TopBar />
        <Banner />
        <Beneficios />
        <DepoimentoFaq />
        <Cursos />
        <CallToActionSection />
        <Footer />
      </>
    )
}