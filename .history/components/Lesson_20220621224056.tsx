import { CheckIcon } from '@heroicons/react/solid'

export function Lesson() {
    return (
        <a href="#">
            <span>
                Terça - 22 de junho - 19h00
            </span>
            
            <div className="p-4 mt-2 border rounded boder-gray-500">
                <header className="flex items-center justify-between">
                    <span className="flex items-center gap-2 text-sm font-medium">
                        <CheckIcon className="w-4 h-4"/>
                        Conteúdo liberado
                    </span>
                    <span className="px-2 py-1 text-xs font-bold border border-gray-500 rounded">
                        AO VIVO
                    </span>
                </header>
                <strong className="block mt-5">
                    Abertura do evento Ignite Lab
                </strong>
            </div>
        </a>
    )
}