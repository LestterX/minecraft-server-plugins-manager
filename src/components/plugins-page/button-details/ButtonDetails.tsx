import { Button } from "../../ui/button";
import {
    Dialog,
    DialogTrigger,
    DialogContent,
    DialogTitle,
    DialogDescription
} from "../../ui/dialog";
import { EditForm } from "../edit-form/EditForm";
import { Plugin } from "@prisma/client";

type TButtonDetailsProps = {
    plugin: Plugin
}

export function ButtonDetails({ plugin }: TButtonDetailsProps) {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button className="bg-yellow-500 hover:cursor-pointer hover:scale-105 w-full">Ver</Button>
            </DialogTrigger>
            <DialogContent>
                <DialogDescription />
                <DialogTitle>
                    Visualizar ou editar plugin
                </DialogTitle>
                <EditForm plugin={plugin} />
            </DialogContent>
        </Dialog>
    )
}