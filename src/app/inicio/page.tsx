"use client"

import Banner from "@/components/Banner";
import Beneficios from "@/components/Beneficios";
import TopBar from "@/components/TopBar";
import Avaliacoes from "@/components/Avaliacoes"


export default function Inicio(){


    return (
        <>
            <TopBar />
            <Banner />
            <Beneficios />
            <Avaliacoes />
        </>
    );
}