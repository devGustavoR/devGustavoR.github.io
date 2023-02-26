

export default function Header(){
    return(
        <>
        <header className="w-full fixed left-0 bottom-0 z-100 bg-cor-body">
            <nav className="max-w-screen-md h-header flex justify-between items-center ml-6 mr-6">
                <a href="#" className="no-underline bg-cor-do-titulo hover:bg-cor-principal">Gustavo</a>

                <div className="sm:fixed sm:bottom-0 sm:left-0 sm:w-full sm:bg-body sm:px-6 sm:py-8 sm:shadow sm:rounded-t-3xl">
                    <ul className="list-none gap-8 grid grid-rows-3">
                        <li>
                            <a href="#home" className="no-underline flex flex-col items-center bg-cor-do-titulo hover:bg-cor-principal">
                                <i></i>Home
                            </a>
                        </li>

                        <li>
                            <a href="#sobre" className="no-underline flex flex-col items-center bg-cor-do-titulo hover:bg-cor-principal">
                                <i></i>Sobre
                            </a>
                        </li>

                        <li>
                            <a href="#habilidades" className="no-underline flex flex-col items-center bg-cor-do-titulo hover:bg-cor-principal">
                                <i></i>Habilidades
                            </a>
                        </li>

                        <li>
                            <a href="#contatos" className="no-underline flex flex-col items-center bg-cor-do-titulo hover:bg-cor-principal">
                                <i></i>Contatos
                            </a>
                        </li>

                    </ul>
                </div>
            </nav>
        </header>
        </>
    )
}