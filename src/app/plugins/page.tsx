import { CardsArea } from "@/components/cards/CardsArea";
import { CardsAreaNav } from "@/components/cards/CardsAreaNav";
import { SearchBar } from "@/components/search-bar/SearchBar";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Suspense } from "react";

type THomePageProps = {
  searchParams?: Promise<{
    query?: string;
  }>
}

export default async function PluginsPage({ searchParams }: THomePageProps) {
  const search = await searchParams
  const query = search?.query ?? ''

  return (
    <section className="container mx-auto grid grid-cols-1 gap-y-2">
      <header className="text-center">
        <h1 className="text-xl sm:text-2xl md:text-4xl font-semibold ">Gerenciador de Plugins do Servidor</h1>
        <SearchBar />
      </header>
      <section className="mx-4">
        <CardsAreaNav />
        <ScrollArea>
          <Suspense fallback={'Carregando...'}>
            <CardsArea search={query} />
          </Suspense>
        </ScrollArea>
      </section>
    </section>
  )
}

