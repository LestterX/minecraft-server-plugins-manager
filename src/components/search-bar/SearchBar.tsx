'use client'

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { Input } from "../ui/input";
import { useDebouncedCallback } from 'use-debounce'

type TSearchBarProps = {
    children?: React.ReactNode[] | React.ReactNode
}

export function SearchBar({ children }: TSearchBarProps) {
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
            { // Extra buttons or elements
                children
            }
        </section>
    )
}