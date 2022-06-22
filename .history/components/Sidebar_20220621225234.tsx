import { Lesson } from './Lesson'

export function Sidebar() {
    return (
        <div className="p-6 bg-gray-900 w-80">
            <span className="block pb-6 mb-6 text-xl font-bold border-b border-gray-500">
                Cronograma de aulas
            </span>
            <div className='flex flex-col gap-8'>
                <Lesson 
                    title="Aula 01"
                    slug="aula-01"
                    availableAt={new Date()}
                    type="class"
                />
            </div>
        </div>
    )
}