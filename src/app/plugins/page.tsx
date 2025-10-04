import { ButtonHome } from "@/components/button-home/ButtonHome";
import { ButtonAdd } from "@/components/plugins-page/button-add/ButtonAdd";
import { ButtonExport } from "@/components/plugins-page/button-export/ButtonExport";
import { ButtonImport } from "@/components/plugins-page/button-import/ButtonImport";
import { CardsArea } from "@/components/plugins-page/cards/CardsArea";
import { CardsAreaNav } from "@/components/plugins-page/cards/CardsAreaNav";
import { SearchBar } from "@/components/search-bar/SearchBar";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Suspense } from "react";

type TPluginsPageProps = {
  searchParams?: Promise<{
    query?: string;
  }>
}

export default async function PluginsPage({ searchParams }: TPluginsPageProps) {
  const search = await searchParams
  const query = search?.query ?? ''

  return (
    <section className="container mx-auto grid grid-cols-1 gap-y-2">
      <header className="text-center">
        <h1 className="text-xl sm:text-2xl md:text-4xl font-semibold ">Lista de Plugins</h1>
        <SearchBar>
          <ButtonAdd />
          <ButtonImport />
          <ButtonExport />
          <ButtonHome />
        </SearchBar>
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

