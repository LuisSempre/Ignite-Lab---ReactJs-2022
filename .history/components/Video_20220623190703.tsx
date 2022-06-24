export function Video() {
    return (
        <div className="flex-1">
            <div className="flex justify-center bg-black">
                <div className="h-full max-w-6xl max-h-[60vh] aspect-video">

                </div>
            </div>
            <div className="max-w-6xl p-8 mx-auto">
                <div className="flex items-start gap-16">
                    <div className="flex-1">
                        <h1 className="text-2xl font-bold">
                            Aula
                        </h1>
                        <p className="mt-4">
                            Nessa aula vamos dar inicio ao projeto.
                        </p>
                    </div>
                    <div className="flex flex-col gap-4">
                        <a href="" className="items-center justify-center gap-2 p-4 text-sm font-bold uppercase bg-green-500 rounded">
                            Comunidade
                        </a>
                    </div>
                </div>
                <div>
                     
                </div>
            </div>
        </div>
    )
}