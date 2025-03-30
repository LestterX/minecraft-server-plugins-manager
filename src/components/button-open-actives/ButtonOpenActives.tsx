'use client'

import { Button } from "../ui/button";
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "../ui/alert-dialog";
import { Plugin } from "@prisma/client";

type TButtonDetailsProps = {
    plugins: Plugin[]
}

export function ButtonOpenActives({ plugins }: TButtonDetailsProps) {
    let activePluginsCount = 0
    plugins.forEach((el) => { if (el.active) { activePluginsCount += 1 } })
    return (
        <AlertDialog>
            <AlertDialogTrigger asChild>
                <Button className="hover:cursor-pointer hover:scale-105 ml-4">Abrir Ativos: {activePluginsCount}</Button>
            </AlertDialogTrigger>
            <AlertDialogContent className="w-80">
                <AlertDialogHeader className="truncate">
                    <AlertDialogTitle>Abrir todos?</AlertDialogTitle>
                    <AlertDialogDescription className="truncate py-2">
                        Deseja abrir {activePluginsCount} links de uma vez?
                    </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                    <AlertDialogAction className="hover:cursor-pointer hover:scale-105" onClick={(e) => {
                        e.preventDefault()
                        plugins.forEach(el => {
                            if (el.active && el.link.startsWith('https://')) {
                                window.open(el.link, '_blank')
                            }
                        })
                    }}>Continuar</AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    )
}