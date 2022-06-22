import { gql, useQuery } from '@apollo/client'
import { Lesson } from './Lesson'

const GET_LESSIONS_QUERY = gql`
    query {
        lessons(orderBy: availableAt_ASC, stage: PUBLISHED) {
            id
            lessonType
            availableAt
            title
            slug
        }
    }
`
interface GetLessonsQueryResponse {
    lessons: {
        id: string
        title: string
        slug: string
        availableAt: string
        lessonsType: 'live' | 'class'
    }[]
}

export function Sidebar() {
    const { data } = useQuery<GetLessonsQueryResponse>(GET_LESSIONS_QUERY)

    return (
        <div className="p-6 bg-gray-900 w-80">
            <span className="block pb-6 mb-6 text-xl font-bold border-b border-gray-500">
                Cronograma de aulas
            </span>
            <div className='flex flex-col gap-8'>
                {data?.lessons.map(lesson => {

                    <Lesson
                        title={lesson.tile}
                        slug={lesson.slug}
                        availableAt={new Date(lesson.availableAt)}
                        type={lesson.lessonType}
                    />
                })}
            </div>
        </div>
    )
}