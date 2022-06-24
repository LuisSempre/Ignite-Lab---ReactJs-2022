import { ArrowCircleDownIcon, ArrowRightIcon, LightningBoltIcon, UserIcon } from "@heroicons/react/outline";
import { DefaultUi, Player, Youtube } from "@vime/react";
import '@vime/core/themes/default.css'
import { gql, useQuery } from "@apollo/client"

const GET_LESSON_BY_SLUG_QUERY = gql `
    query GetLessonBySlug ($slug: String) {
        lesson(where: {slug: $slug}) {
            title
            videoId
            description
            teacher {
                bio
                avatarURL
                name
            }
        }
    }
`

interface VideoProps {
    lessonSlug: string;
}

interface GetLessonBySlugResponse {
    lesson: {
        title: string;
        videoId: string;
        description: string;
        teacher: {
            bio: string;
            avatarURL: string;
            name: string;
        }
    }
}
export function Video(props: VideoProps) {
    const { data } = useQuery<GetLessonBySlugResponse>(GET_LESSON_BY_SLUG_QUERY, {
        variables: {
            slug: props.lessonSlug
        }
    })

    if(!data) {
        return (
            <div>
                <p>Carregando...</p>
            </div>
        )
    }
    return (
        <div className="flex-1">
            <div className="flex justify-center bg-black">
                <div className="h-full w-full max-w-6xl max-h-[60vh] aspect-video">
                    <Player>
                        <Youtube videoId="S-01" />
                        <DefaultUi />
                    </Player>
                </div>
            </div>
            <div className="max-w-6xl p-8 mx-auto">
                <div className="flex items-start gap-16">
                    <div className="flex-1">
                        <h1 className="text-2xl font-bold">
                            Aula 01
                        </h1>
                        <p className="mt-4">
                            Nessa aula vamos dar início ao projeto criando a estrutura base 
                            da aplicação utilizando ReactJS, Vite e TailwindCSS. 
                            Vamos também realizar o setup do nosso projeto no GraphCMS 
                            criando as entidades da aplicação e integrando a API GraphQL gerada 
                            pela plataforma no nosso front-end utilizando Apollo Client.
                        </p>

                        <div className="flex items-center gap-4 mt-6">
                            <img
                                className="w-16 h-16 border-2 border-purple-500 rounded-full"
                                src="https://github.com/luissempre.png" alt="" />
                            <div className="leading-relaxed">
                                <strong className="block text-2xl font-bold">Luis Lucas</strong>
                                <span className="block text-sm">Web Developer</span>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-4">
                        <a href="" className="flex items-center justify-center gap-2 p-4 text-sm font-bold uppercase bg-green-500 rounded">
                            <UserIcon className="w-4 h-4" />
                            Comunidade do discord
                        </a>
                        <a href="" className="flex items-center justify-center gap-2 p-4 text-sm font-bold uppercase bg-purple-500 rounded">
                            <LightningBoltIcon className="w-4 h-4" />
                            Acesse o desafio
                        </a>
                    </div>
                </div>
                <div className="grid grid-cols-2 gap-8 mt-20">
                    <a href="" className="flex items-stretch gap-6 overflow-hidden">
                        <div className="flex items-center h-full p-6 bg-green-500">
                            <ArrowCircleDownIcon className="w-8 h-8" />
                        </div>
                        <div className="py-6 leading-relaxed">
                            <strong className="text-2xl">
                                Material complementar
                            </strong>
                            <p className="mt-2 text-sm">
                                Acesse o material complementar para acelerar o seu desenvolvimento
                            </p>
                        </div>
                        <div className="flex items-center h-full p-6">
                            <ArrowRightIcon className="w-4 h-4" />
                        </div>
                    </a>
                    <a href="" className="flex items-stretch gap-6 overflow-hidden">
                        <div className="flex items-center h-full p-6 bg-green-500">
                            <ArrowCircleDownIcon className="w-8 h-8" />
                        </div>
                        <div className="py-6 leading-relaxed">
                            <strong className="text-2xl">
                                Wallpaper
                            </strong>
                            <p className="mt-2 text-sm">
                                Baixe wallpapers exclusivos do Ignite Lab.
                            </p>
                        </div>
                        <div className="flex items-center h-full p-6">
                            <ArrowRightIcon className="w-4 h-4" />
                        </div>
                    </a>
                </div>
            </div>
        </div>
    )
}