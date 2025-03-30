'use client'

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { ButtonAdd } from "../button-add/ButtonAdd";
import { Input } from "../ui/input";
import { useDebouncedCallback } from 'use-debounce'

export function SearchBar() {
    const searchParams = useSearchParams()
    const { replace } = useRouter()
    const pathname = usePathname()

    const handleSearch = useDebouncedCallback((term: string) => {
        console.log(`Searching: ${term}`)
        const params = new URLSearchParams(searchParams)
        params.set('page', '1')

        if (term) {
            params.set('query', term)
        } else {
            params.delete('query')
        }

        replace(`${pathname}?${params.toString()}`)
    }, 300)

    return (
        <section className="flex gap-x-2 mx-4">
            <Input
                autoFocus
                type="search"
                placeholder="Pesquisar..."
                onChange={e => handleSearch(e.target.value)}
                defaultValue={searchParams.get('query')?.toString()}
            />
            <ButtonAdd />
        </section>
    )
}