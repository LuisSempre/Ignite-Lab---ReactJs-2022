export function Subscribe() {

    return (
        <div className='flex flex-col items-center min-h-screen'>
            <div className="flex items-center justify-between w-full max-w-6xl mx-auto mt-20">
                <div className="max-w-2xl">
                    <h1 className="mb-6 text-xl font-extrabold leading-tight">
                        Construa uma&nbsp;
                         <span className="block w-full text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-blue-500 to-purple-500">
                            aplicação completa,&nbsp;
                        </span>
                        do zero, com&nbsp;
                         <span className="block w-full text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-blue-500 to-purple-500">
                             ReactJS 
                        </span>
                    </h1>
                    <p className="leading-relaxed">
                        Em apenas uma semana você vai dominar na prática uma das tecnologias mais utilizadas e com alta demanda para acessar as melhores oportunidades do mercado.
                    </p>
                </div>
                <div className="p-8 border border-white rounded">
                    <strong>Inscreve-se gratuitamente</strong>
                    <form action="" className="flex flex-col w-full gap-2">
                        <input className="px-6 border border-white h-14" type="text" placeholder="Digite seu nome"/>
                        <input className="px-6 border border-white h-14" type="text" placeholder="Digite seu e-mail"/>
                    </form>
                </div>
            </div>
        </div>
    )
}


