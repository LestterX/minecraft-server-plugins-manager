import {
    Table,
    TableHeader,
    TableBody,
    TableRow,
    TableHead,
    TableCell,
    TableCaption
} from "@/components/ui/table";
import { getAllPlayers } from "@/lib/actions";

type TPlayersListAreaProps = {
    search?: string
}

export async function PlayersListArea({ search }: TPlayersListAreaProps) {
    const players = await getAllPlayers(search ?? '')
    const currentDate = new Date()
    return (
        <Table>
            <TableCaption>
                Lista de jogadores que já jogaram no servidor.
            </TableCaption>
            <TableHeader>
                <TableRow>
                    <TableHead className="font-semibold text-white">Nome</TableHead>
                    <TableHead className="font-semibold text-white">UUID</TableHead>
                    <TableHead className="font-semibold text-white">Último Login</TableHead>
                    <TableHead className="font-semibold text-white">Tempo Offline</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {
                    players && (
                        players.map(({ name, uuid, expiresOn }, index) => (
                            <TableRow key={index}>
                                <TableCell>{name}</TableCell>
                                <TableCell>{uuid}</TableCell>
                                <TableCell>{expiresOn ? new Date(expiresOn).toString() : 'Nunca'}</TableCell>
                                        <TableCell>{expiresOn ?
                                            (() => {
                                                const diffMs = currentDate.getTime() - new Date(expiresOn).getTime()
                                                const diffSec = diffMs / 1000
                                                const days = Math.floor(diffSec / (60 * 60 * 24))
                                                const remainingAfterDays = diffSec - days * 60 * 60 * 24
                                                const minutes = Math.floor(remainingAfterDays / 60)
                                                const seconds = remainingAfterDays - minutes * 60
                                                return `${days} dias ${minutes} minutos ${seconds.toFixed(2)} segundos`
                                            })()
                                            : "N/A"
                                        }</TableCell>
                            </TableRow>
                        ))
                    )
                }
            </TableBody>
        </Table>
    )
}