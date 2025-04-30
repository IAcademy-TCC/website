export default function TopBar(){
    return (
      <>
        <div className="flex flex-row w-auto h-15 align-middle">
            <div className="m-5 ml-30 flex gap-x-6 text-black font-medium">
                <a href="#" className="hover:text-roxo-claro">Inicio</a>
                <a href="#" className="hover:text-roxo-claro">Aprendizado</a>
                <a href="#" className="hover:text-roxo-claro">Comunidade</a>
                <a href="#" className="hover:text-roxo-claro">Ranking</a>
                <a href="#" className="hover:text-roxo-claro">Sobre Nós</a>
                <a href="#" className="hover:text-roxo-claro">Contato</a>
            </div>
            <div className="m-5 ml-150">
              <input type="text" className="w-80 border-1 border-roxo-claro rounded-2xl h-9 placeholder:text-sm p-2 placeholder:opacity-75 focus:border-roxo-claro" 
              placeholder="Buscar..."/>
            </div>
        </div>
      </>  
    );
}