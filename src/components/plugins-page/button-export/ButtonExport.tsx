"use client"

import { Button } from "@/components/ui/button";
import { getAllNoFilter } from "@/lib/actions";

export function ButtonExport() {
    const handleExport = async () => {
        const plugins = await getAllNoFilter()
        const blob = new Blob([JSON.stringify(plugins, null, 2)], {
            type: 'application/json'
        });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'plugins.json';
        document.body.appendChild(a);
        a.click();
        a.remove();
        URL.revokeObjectURL(url);

        // const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(plugins, null, 2));
        // const downloadAnchorNode = document.createElement('a');
        // downloadAnchorNode.setAttribute("href", dataStr);
        // downloadAnchorNode.setAttribute("download", "plugins.json");
        // document.body.appendChild(downloadAnchorNode); // required for firefox
        // downloadAnchorNode.click();
        // downloadAnchorNode.remove();
    }
    return (
        <Button onClick={handleExport}>
            Exportar
        </Button>
    )
}