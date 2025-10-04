"use client"

import { Button } from "@/components/ui/button";
import { getAllPlayersNoFilter } from "@/lib/actions";

export function ButtonExport() {
    const handleExport = async () => {
        const players = await getAllPlayersNoFilter()
        const blob = new Blob([JSON.stringify(players, null, 2)], {
            type: 'application/json'
        });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'players.json';
        document.body.appendChild(a);   
        a.click();
        a.remove();
        URL.revokeObjectURL(url);

        // const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(players, null, 2));
        // const downloadAnchorNode = document.createElement('a');
        // downloadAnchorNode.setAttribute("href", dataStr);
        // downloadAnchorNode.setAttribute("download", "players.json");
        // document.body.appendChild(downloadAnchorNode); // required for firefox
        // downloadAnchorNode.click();
        // downloadAnchorNode.remove();
    }
    return (
        <Button className="hover:cursor-pointer" onClick={handleExport}>
            Exportar
        </Button>
    )
}