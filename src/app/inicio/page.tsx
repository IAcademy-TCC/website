"use client"

import TopBar from "@/components/TopBar";
import { useEffect, useState } from "react";
import { UsuarioService } from "../../../service/UsuarioService";
import { Usuario } from "../types/Usuario";


export default function Inicio(){
    const [usuarios, setUsuarios] = useState<Usuario[]>([])

    useEffect(() => {
        const usuarioService = new UsuarioService();
        usuarioService.listarTodos()
        .then(res => {
            console.log(res.data);
            setUsuarios(res.data);
    })
        .catch(err => console.error("Erro ao buscar usuários:", err));
    }, []);


    return (
        <>
            <TopBar />
            <div className="p-4">
                <h1 className="text-2xl font-bold mb-4">Lista de Usuários</h1>
                {usuarios.length === 0 ? (
                    <p>Nenhum usuário encontrado.</p>
                ) : (
                    <ul className="space-y-2">
                        {usuarios.map((usuario, index) => (
                            <li 
                                key={index} 
                                className="p-4 border rounded-md shadow-md"
                            >
                                <strong>Tipo do Usuário:</strong> {usuario.tipo_usuario} <br />
                                <strong>Email:</strong> {usuario.email}
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </>
    );
}