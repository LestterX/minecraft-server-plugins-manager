'use client'

import { useTransition } from "react";
import { Button } from "../../ui/button";
import { Plugin } from "@prisma/client";
import { deleteById } from "@/lib/actions";
import { toast } from "sonner";
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "../../ui/alert-dialog";

type TButtonDetailsProps = {
    plugin: Plugin
}

export function ButtonDelete({ plugin }: TButtonDetailsProps) {
    const [isPending, startTransition] = useTransition()
    return (
        <AlertDialog>
            <AlertDialogTrigger asChild>
                <Button
                    className="hover:cursor-pointer hover:scale-105 w-full"
                    variant={'destructive'}
                    disabled={isPending}
                >{isPending === true ? 'Removendo' : 'Remover'}</Button>
            </AlertDialogTrigger>
            <AlertDialogContent className="w-80">
                <AlertDialogHeader className="truncate">
                    <AlertDialogTitle>Remover plugin?</AlertDialogTitle>
                    <AlertDialogDescription className="truncate py-2">
                        Deseja remover {plugin.name.toUpperCase()}?
                    </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                    <AlertDialogAction className="hover:cursor-pointer hover:scale-105" onClick={async () => {
                        startTransition(() => {
                            deleteById(plugin.id)
                                .then(data => {
                                    if (data.success) {
                                        return toast(`${plugin.name.toUpperCase()} removido com sucesso`)
                                    }
                                })
                        })
                    }}>Continuar</AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    )
}