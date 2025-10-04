import { Button } from "../../ui/button";
import {
    Dialog,
    DialogTrigger,
    DialogContent,
    DialogTitle
} from "../../ui/dialog";
import { CreateForm } from "../create-form/CreateForm";
import { DialogDescription } from "@radix-ui/react-dialog";

export function ButtonAdd() {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button className="bg-green-500 hover:cursor-pointer hover:scale-105">Adicioanr</Button>
            </DialogTrigger>
            <DialogContent>
                <DialogDescription />
                <DialogTitle>
                    Criar plugin
                </DialogTitle>
                <CreateForm />
            </DialogContent>
        </Dialog>
    )
}