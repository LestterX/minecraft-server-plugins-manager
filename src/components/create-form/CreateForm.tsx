'use client'

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import {
    Form,
    FormField,
    FormItem,
    FormLabel,
    FormControl,
    FormMessage
} from "../ui/form"
import { Input } from "../ui/input"
import { useState, useTransition } from "react"
import { create } from "@/lib/actions"
import { toast } from "sonner"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select"
import { Textarea } from "../ui/textarea"
import { Button } from "../ui/button"

export function CreateForm() {
    const [isPending, startTransition] = useTransition()
    const [selectValue, setSelectValue] = useState<boolean>(false)
    const createSchema = z.object({
        name: z.string(),
        link: z.string(),
        description: z.string().optional(),
    })
    const form = useForm<z.infer<typeof createSchema>>({
        resolver: zodResolver(createSchema),
        defaultValues: {
            name: '',
            link: '',
            description: '',
        }
    })
    async function onSubmit(values: z.infer<typeof createSchema>) {
        const {
            name,
            link,
            description,
        } = values
        startTransition(() => {
            create({
                name,
                link,
                description,
                active: selectValue
            }).then(data => {
                if (data.success) {
                    const { message, pluginName } = data.success
                    return toast(`${pluginName.toUpperCase()} ${message}`)
                }
                return toast('Erro ao criar plugin')
            })
            form.reset()
        })
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <section className="space-y-4">
                    <section className="flex items-end gap-x-2 w-full">
                        <FormField
                            control={form.control}
                            name='name'
                            render={({ field }) => (
                                <FormItem className="w-full">
                                    <FormLabel>Nome</FormLabel>
                                    <FormControl>
                                        <Input disabled={isPending} {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <Select onValueChange={(value) => { setSelectValue(value === 'ativo' ? true : false) }}>
                            <SelectTrigger disabled={isPending} className="w-[150px]">
                                <SelectValue placeholder={`${selectValue === true ? 'ATIVO' : 'INATIVO'}`} />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="ativo">ATIVO</SelectItem>
                                <SelectItem value="inativo">INATIVO</SelectItem>
                            </SelectContent>
                        </Select>
                    </section>
                    <FormField
                        control={form.control}
                        name='link'
                        render={({ field }) => (
                            <FormItem className="w-full">
                                <FormLabel>Link</FormLabel>
                                <FormControl>
                                    <Input disabled={isPending} placeholder="https://" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name='description'
                        render={({ field }) => (
                            <FormItem className="w-full">
                                <FormLabel>Nome</FormLabel>
                                <FormControl>
                                    <Textarea disabled={isPending} {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                </section>
                <Button
                    type="submit"
                    className="w-full hover:cursor-pointer"
                >
                    Adicionar
                </Button>
            </form>
        </Form >
    )
}