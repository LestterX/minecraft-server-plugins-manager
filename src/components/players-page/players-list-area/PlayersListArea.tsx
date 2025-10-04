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
    return (
        <Table>
            <TableCaption>
                Lista de jogadores que já jogaram no servidor.
            </TableCaption>
            <TableHeader>
                <TableRow>
                    <TableHead className="font-semibold text-white text-center">Nome</TableHead>
                    <TableHead className="font-semibold text-white text-center">UUID</TableHead>
                    <TableHead className="font-semibold text-white text-center">Último Login</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {
                    players && (
                        players.map(({ name, uuid, expiresOn }, index) => (
                            <TableRow key={index}>
                                <TableCell className="text-center whitespace-normal break-words">{name}</TableCell>
                                <TableCell className="text-center whitespace-normal break-words">{uuid}</TableCell>
                                <TableCell className="text-center whitespace-normal break-words">{expiresOn ? new Date(expiresOn).toLocaleDateString("pt-BR", {
                                    weekday: "long",
                                    day: "2-digit",
                                    month: "short",
                                    year: "2-digit",
                                    hour: "2-digit",
                                    minute: "2-digit",
                                    second: "2-digit"
                                }) : 'Nunca'}</TableCell>
                            </TableRow>
                        ))
                    )
                }
            </TableBody>
        </Table>
    )
}