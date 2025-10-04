import { getAllPlayersNoFilter } from "@/lib/actions"

export async function PlayersAreaNav() {
    const players = await getAllPlayersNoFilter()
    const playersCount = players.length
    return (
        <section className="flex justify-between items-center bg-white text-black text-3xl h-16 w-full rounded-md shadow-md">
            <span className="mr-4">Players: {playersCount}</span>
        </section>
    )
}