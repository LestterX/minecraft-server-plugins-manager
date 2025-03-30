import {
    Card,
    CardHeader,
    CardTitle,
    CardContent,
    CardFooter,
} from '@/components/ui/card'
import { Button } from '../ui/button'
import { ButtonDetails } from '../button-details/ButtonDetails'
import { Plugin } from '@prisma/client'
import { ButtonDelete } from '../button-delete/ButtonDelete'
import { CheckCircle, XCircle } from '@phosphor-icons/react/dist/ssr'

type TPluginCardProps = {
    plugin: Plugin
}

export function PluginCard({ plugin }: TPluginCardProps) {
    const { name: nome, link, active } = plugin
    return (
        <Card>
            <CardHeader>
                <CardTitle className='truncate'>
                    {nome}
                </CardTitle>
            </CardHeader>
            <CardContent className='flex flex-col gap-y-2'>
                <a href={link} target='_blank'>
                    <Button className='w-full hover:cursor-pointer hover:scale-105'>Abrir</Button>
                </a>
                <ButtonDetails plugin={plugin} />
                <ButtonDelete plugin={plugin} />
            </CardContent>
            <CardFooter className='flex justify-between w-full'>
                {
                    active
                        ? <>
                            <span>Ativo</span> <CheckCircle size={32} color='green' />
                        </>
                        : <>
                            <span>Inativo</span> <XCircle size={32} color='red' />
                        </>
                }
            </CardFooter>
        </Card>
    )
}