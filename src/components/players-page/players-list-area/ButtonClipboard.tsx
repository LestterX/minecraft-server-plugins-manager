"use client"

import { Button } from "@/components/ui/button"
import { Eye } from "lucide-react"
import { toast } from "sonner"

type TButtonClipboardProps = {
    name: string
}

export function ButtonClipboard({ name }: TButtonClipboardProps) {
    {
        return (
            <Button
                className="w-6 h-6 sm:w-10 sm:h-10 bg-blue-600 text-white rounded hover:bg-blue-700 transition hover:cursor-pointer"
                onClick={() => {
                    navigator.clipboard.writeText(name)
                    toast(`Nome "${name}" copiado para área de transferência!`)
                }
                }
                title="Copiar nome para área de transferência"
            >
                <Eye />
            </Button >
        )
    }
}