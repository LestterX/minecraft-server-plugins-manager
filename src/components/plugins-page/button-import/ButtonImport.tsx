"use client"

import { Button } from "@/components/ui/button";
import { importData } from "@/lib/actions";
import { useState } from "react";
import { toast } from "sonner";

export function ButtonImport() {
    const [file, setFile] = useState<File | null>(null);

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files.length > 0) {
            setFile(e.target.files[0]);
        }
    };

    const handleImport = async () => {
        if (!file) return toast("Escolha um arquivo JSON primeiro");

        const text = await file.text();           // lê conteúdo do arquivo
        const dados = JSON.parse(text);           // parse para objeto JS

        const res = await importData(dados);   // chama a server action
        if (res.success) return toast("Importação concluída!");
    };
    return (
        <div className="flex flex-col gap-2">
            <input type="file" accept="application/json" onChange={handleFileChange} />
            <Button onClick={handleImport}>Importar JSON para banco</Button>
        </div>
    )
}