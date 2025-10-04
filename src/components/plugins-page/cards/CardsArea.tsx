import { getAll } from "@/lib/actions"
import { PluginCard } from "./PluginCard"

type TCardsAreaProps = {
    search?: string
}

export async function CardsArea({ search }: TCardsAreaProps) {
    const plugins = await getAll(search ?? '')
    return (
        <section className="mt-2 grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 gap-2">
            {
                plugins && (
                    plugins.map((plugin, index) => (
                        <PluginCard
                            key={index}
                            plugin={plugin}
                        />
                    ))
                )
            }
        </section>
    )
}