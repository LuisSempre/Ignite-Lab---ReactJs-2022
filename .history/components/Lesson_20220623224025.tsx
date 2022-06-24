import { CheckCircleIcon, LockClosedIcon } from '@heroicons/react/outline'
import { isPast, format } from 'date-fns'
import ptBR from 'date-fns/esm/locale/pt-BR/index.js';
import { Link } from 'react-router-dom';

interface LessonProps {
    title: string;
    slug: string;
    availableAt: Date;
    type: 'live' | 'class';
}

export function Lesson(props: LessonProps) {
    const isLessonAvailable = isPast(props.availableAt);
    const availableDateFormatted = format(props.availableAt, "EEEE' - ' 'd' de 'MMMM' - 'k'h'mm", {
        locale: ptBR, 
    }) 
    
    return (
        <Link to="#">
            <span>
                {props.availableAt.toString()}
            </span>        
            <div className="p-4 mt-2 border rounded boder-gray-500">
                <header className="flex items-center justify-between">             
                {isLessonAvailable ? (
                    <span className="flex items-center gap-2 text-sm font-medium">
                        <CheckCircleIcon className="w-4 h-4"/>
                        Conteúdo liberado
                    </span>
                ) : (
                    <span className="flex items-center gap-2 text-sm font-medium">
                        <LockClosedIcon className="w-4 h-4"/>
                        Em breve
                    </span>
                )}
                    <span className="px-2 py-1 text-xs font-bold border border-gray-500 rounded">
                        {props.type === 'class' ? 'AO VIVO' : 'AULA PRATICA'}
                    </span>
                </header>
                <strong className="block mt-5">
                    {props.title}
                </strong>
            </div>
        </Link>
    )
}