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
import { ButtonClipboard } from "./ButtonClipboard";

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
                    <TableHead className="font-semibold text-sm text-white text-center whitespace-normal break-words">Nome</TableHead>
                    <TableHead className="font-semibold text-sm text-white text-center whitespace-normal break-words">UUID</TableHead>
                    <TableHead className="font-semibold text-sm text-white text-center whitespace-normal break-words">Último Login</TableHead>
                    <TableHead className="font-semibold text-sm text-white text-center whitespace-normal break-words">Ações</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {
                    players && (
                        players.map(({ name, uuid, expiresOn }, index) => (
                            <TableRow key={index}>
                                <TableCell className="text-center text-sm whitespace-normal break-words">{name}</TableCell>
                                <TableCell className="text-center text-sm whitespace-normal break-words">{uuid}</TableCell>
                                <TableCell className="text-center text-sm whitespace-normal break-words">{expiresOn ? new Date(expiresOn).toLocaleDateString("pt-BR", {
                                    weekday: "long",
                                    day: "2-digit",
                                    month: "short",
                                    year: "2-digit",
                                    hour: "2-digit",
                                    minute: "2-digit",
                                    second: "2-digit"
                                }) : 'Nunca'
                                }</TableCell>
                                <TableCell className="text-center text-sm whitespace-normal break-words">
                                    <ButtonClipboard name={name} />
                                </TableCell>
                            </TableRow>
                        ))
                    )
                }
            </TableBody>
        </Table>
    )
}