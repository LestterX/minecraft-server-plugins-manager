import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { ButtonImport } from "./button-import/ButtonImport";
import { ButtonExport } from "./button-export/ButtonExport";

export function ButtonImportExport() {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button className="bg-yellow-600">In/Ex</Button>
            </DialogTrigger>
            <DialogContent>
                <DialogTitle>Importar/Exportar dados</DialogTitle>
                <ButtonImport />
                <ButtonExport />
            </DialogContent>
        </Dialog>
    )
}