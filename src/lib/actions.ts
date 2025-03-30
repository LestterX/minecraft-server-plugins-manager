'use server'

import { Prisma } from "@prisma/client"
import { prisma } from "./prisma"

export async function create(data: Prisma.PluginCreateInput) {
    try {
        const plugin = await prisma.plugin.create({
            data
        })
        return {
            success: {
                message: 'Criado com sucesso',
                pluginName: plugin.name
            }
        }
    } catch {
        return { error: 'Erro ao criar plugin' }
    }
}

export async function getAll(filter?: string) {
    const plugins = await prisma.plugin.findMany({
        where: {
            name: {
                contains: filter
            }
        },
        orderBy: {
            name: 'asc',
        }
    })
    return plugins
}

export async function update(id: string, data: Prisma.PluginUpdateInput) {
    try {
        const plugin = await prisma.plugin.update({
            where: { id },
            data
        })
        return {
            success: {
                message: 'Atualizado com sucesso',
                pluginName: plugin.name
            }
        }
    } catch {
        return { error: 'Erro ao atualizar plugin' }
    }
}

export async function deleteById(id: string) {
    const plugin = await prisma.plugin.delete({
        where: { id }
    })
    if (!plugin) return { error: 'Erro ao remover plugin' }
    return { success: 'Plugin removido com sucesso' }
}