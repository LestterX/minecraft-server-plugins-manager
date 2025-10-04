import { ButtonHome } from "@/components/button-home/ButtonHome";
import { PlayersListArea } from "@/components/players-page/players-list-area/PlayersListArea";
import { CardsAreaNav } from "@/components/plugins-page/cards/CardsAreaNav";
import { SearchBar } from "@/components/search-bar/SearchBar";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Suspense } from "react";

type TPlayersPageProps = {
  searchParams?: Promise<{
    query?: string;
  }>
}

export default async function PlayersPage({ searchParams }: TPlayersPageProps) {
  const search = await searchParams
  const query = search?.query ?? ''

  return (
    <section className="container mx-auto grid grid-cols-1 gap-y-2">
      <header className="text-center">
        <h1 className="text-xl sm:text-2xl md:text-4xl font-semibold ">Lista de Jogadores</h1>
        <SearchBar>
          <ButtonHome />
        </SearchBar>
      </header>
      <section className="mx-4">
        <CardsAreaNav />
        <ScrollArea>
          <Suspense fallback={'Carregando...'}>
            <PlayersListArea search={query} />
          </Suspense>
        </ScrollArea>
      </section>
    </section>
  )
}

