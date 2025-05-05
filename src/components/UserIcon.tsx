"use client";

import { useState, useRef, useEffect } from "react";
import { FaUserCircle } from "react-icons/fa";

export default function UserMen() {
    const [isOpen, setIsOpen] = useState(false);
    const menuRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        function handleClickOutside(event: MouseEvent){
            if (menuRef.current && !menuRef.current.contains(event.target as Node)){
                setIsOpen(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    return (
        <div className="relative" ref={menuRef}>
            <button onClick={() => setIsOpen(!isOpen)}>
                <FaUserCircle className="text-4xl text-gray-700 hover:text-principal" />
            </button>

            {isOpen && (
                <div className="absolute right-0 mt-2 w-40 bg-white rounded-md shadow-lg z-10">
                <ul className="flex flex-col py-2">
                  <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Meu Perfil</li>
                  <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Configurações</li>
                  <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-red-600">Sair</li>
                </ul>
              </div>
            )}
        </div>
    );
}