'use client'

import * as Dialog from '@radix-ui/react-dialog';
import { useState } from 'react';
import { FaFilter } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
import { ClothFilter } from './cloth-filter';
import { ClothsUseCase } from '@/main/use-cases/cloths-use-case';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import QueryString from 'qs';
import { presetedColors, presetedSizes } from '@/main/domain/cloths';


export default function Header() {
    const [filter, setFilter] = useState<ClothsUseCase.GetPaginatedClothsRequest>({
        priceLimit: 500,
        colors: presetedColors.map(x => x.value),
        sizes: presetedSizes.map(x => x.value),
        name: "",
    })
    const router = useRouter()
    const pathname = usePathname()

    const onApply = () => {
        let finalFilter: typeof filter = {
            priceLimit: filter.priceLimit ?? 500,
            colors: filter.colors ?? presetedColors.map(x => x.value),
            sizes: filter.sizes ?? presetedSizes.map(x => x.value),
            name: "",
        }
        const query = QueryString.stringify({ ...finalFilter })
        console.log("query", query, filter)
        router.push(pathname + "?" + query)
    }
    return (
        <div className="flex px-4 h-[8vh] min-h-[80px] bg-black justify-between items-center ">
            <div className='flex text-white justify-center items-center font-title gap-1'>
                <img src='/logo_transp.png' width={160} />
            </div>

            <Dialog.Root>
                <Dialog.Trigger className='bg-gradient-to-r from-primary to-secondary rounded-sm h-11 w-11 flex items-center justify-center'>
                    <FaFilter size={30} />
                </Dialog.Trigger>

                <Dialog.Portal>
                    <Dialog.Overlay className="bg-[rgba(0,0,0,0.25)] flex fixed inset-0" />
                    <Dialog.Content asChild className='top-[50%] w-[90vw] max-w-[650px] min-h-[85vh] p-[20px] left-[50%] shadow-xl rounded-md -translate-x-[50%] -translate-y-[50%] bg-zinc-900 fixed '>
                        <div className='flex flex-col justify-between font-title '>
                            <div className='flex justify-between'>
                                <Dialog.Title className='font-title font-bold text-xl text-accent'>Filtro</Dialog.Title>
                                <Dialog.Close asChild>
                                    <button className="text-accent" aria-label="Close">
                                        <RxCross2 />
                                    </button>
                                </Dialog.Close>
                            </div>
                            <ClothFilter
                                initialValues={filter}
                                onChange={setFilter} />
                            <div style={{ display: 'flex', marginTop: 25, justifyContent: 'flex-end' }}>
                                <Dialog.Close onClick={onApply} className="bg-accent rounded-md w-full h-16 font-text font-bold text-zinc-100">
                                    Aplicar
                                </Dialog.Close>
                            </div>
                        </div>
                    </Dialog.Content>
                </Dialog.Portal>
            </Dialog.Root>
        </div>
    )
}