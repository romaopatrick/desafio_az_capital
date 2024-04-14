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
import { Modal } from 'antd';


export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false)
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

        setMenuOpen(false)
    }
    return (
        <div className="flex px-4 h-[8vh] min-h-[80px] bg-black justify-between items-center ">
            <div className='flex text-white justify-center items-center font-title gap-1'>
                <img src='/logo_transp.png' width={160} />
            </div>

            <div>
                <button onClick={() => setMenuOpen(true)} className='bg-gradient-to-r from-primary to-secondary rounded-sm h-11 w-11 flex items-center justify-center'>
                    <FaFilter size={30} />
                </button>

                <div > 
                    <Modal open={menuOpen}  title={<h1 className='font-title font-bold text-xl text-accent '>Filtro</h1>} 
                        onCancel={() => setMenuOpen(false)} onOk={onApply} className="flex flex-col">
                        <div className='flex flex-col justify-between font-title '>
                            <ClothFilter
                                initialValues={filter}
                                onChange={setFilter} />
                        </div>
                    </Modal>
                </div>
            </div>
        </div>
    )
}