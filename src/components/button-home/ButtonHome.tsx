import Link from "next/link";
import { Button } from "../ui/button";

export function ButtonHome() {
    return (
        <Link href="/">
            <Button className="hover:cursor-pointer hover:scale-105 bg-blue-500">
                Início
            </Button>
        </Link>
    )
}