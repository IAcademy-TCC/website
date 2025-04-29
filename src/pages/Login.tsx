import loginImg from '../assets/img-login.png';
import Image from 'next/image';

export default function Login(){
    return (
        <>
        <div className="flex flex-row justify-between items-center m-30">
            <div className="flex flex-col">
                <div>
                    <h2 className="text-cinza-texto text-xl">Bem-vindo ao</h2>
                    <h1 className="text-foreground font-extrabold text-3xl">IAcademy</h1>
                </div>
                <div className="mt-15">
                    <button className="w-94 h-13
                     text-cinza-texto text-base border-1 border-borda rounded-xl
                     hover:bg-roxo-claro hover:text-white hover:border-0 cursor-pointer"> Google</button>
                </div>
                <div className="mt-15 flex flex-col text-cinza-texto">
                    <label className="mb-2 ml-1 font-bold">E-mail</label>
                    <input 
                        className="w-94 h-13 border-1 border-borda rounded-xl placeholder:opacity-75 pl-2"
                        placeholder="Digite seu e-mail"
                        type="email"
                    />
                </div>
                <div className="mt-8 flex flex-col text-cinza-texto">
                    <label className="mb-2 ml-1 font-bold">Senha</label>
                    <input 
                        className="w-94 h-13 border-1 border-borda rounded-xl placeholder:opacity-75 pl-2"
                        placeholder="Digite sua senha"
                    />
                </div>
                <div className="w-94 mt-2 text-right text-principal">
                    <a href="#" className="font-bold">Esqueceu a senha?</a>
                </div>
                <div className="mt-5">
                    <button
                        className="w-94 h-13 bg-principal text-background font-semibold size-22 rounded-xl hover:bg-roxo-claro hover:text-white cursor-pointer">Entrar</button>
                </div>
                <div className="w-93 mt-3 flex flex-row">
                    <p className="text-cinza-texto">Ainda não tem uma conta?</p>
                    <a href="#" className="ml-1 font-semibold text-principal">Cadastre-se</a>
                </div>
            </div>
            <div className='flex flex-col'>
                <Image src={loginImg} alt='Logo'/>
            </div>
        </div>
        </>
    )
}