import Link from "next/link";
import { Button } from "../ui/button";

type TButtonGotoPageProps = {
    displayText: string
    href: string
    color?: string
}

export function ButtonGotoPage({ displayText, href, color }: TButtonGotoPageProps) {
    return (
        <Link href={href}>
            <Button className={`h-48 w-48 font-bold text-4xl hover:cursor-pointer hover:scale-105 ${color}`}>
                {displayText}
            </Button>
        </Link>
    )
}