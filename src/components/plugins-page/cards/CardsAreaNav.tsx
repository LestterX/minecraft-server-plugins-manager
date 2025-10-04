import { getAll } from "@/lib/actions"
import { ButtonOpenActives } from "../button-open-actives/ButtonOpenActives"

export async function CardsAreaNav() {
    const plugins = await getAll()
    const pluginsCount = plugins.length
    return (
        <section className="flex justify-between items-center bg-white text-black text-3xl h-16 w-full rounded-md shadow-md">
            <ButtonOpenActives plugins={plugins} />
            <span className="mr-4">Plugins: {pluginsCount}</span>
        </section>
    )
}