"use client"

import { presetedColors, presetedSizes } from "@/main/domain/cloths"
import { ClothsUseCase } from "@/main/use-cases/cloths-use-case"
import * as Slider from "@radix-ui/react-slider"
import { Form, Input, Select, Tag } from 'antd'
import { useEffect, useState } from "react"
type Props = {
    initialValues: ClothsUseCase.GetPaginatedClothsRequest
    onChange: (filter: ClothsUseCase.GetPaginatedClothsRequest) => void
}
export function ClothFilter({ onChange, initialValues }: Props) {
    const [filter, setFilter] = useState<ClothsUseCase.GetPaginatedClothsRequest>({ ...initialValues })

    const sizeOptions = presetedSizes.map(size => ({
        label: size.name,
        value: size.value
    }))

    const colorOptions = presetedColors.map(color => ({
        ...color,
        color: color.value
    }))

    const updateFilter = (newValue: ClothsUseCase.GetPaginatedClothsRequest) => {
        setFilter(prev => ({ ...prev, ...newValue }))
    }

    useEffect(() => {
        if (!filter.priceLimit) {
            setFilter(prev => ({ ...prev, priceLimit: 500 }))
        }

        console.log("calling on change")
        onChange(filter)
    }, [filter])

    return (
        <div className="flex  w-full z-50">
            <div className="h-fit w-full flex flex-col">
                    <Input
                        value={filter.name}
                        onChange={v => updateFilter({ ...filter, name: v.target.value })}
                        className="font-text w-full px-2 h-14 outline-none focus:border-primary focus:border-2 rounded-md"
                        placeholder="Modelo" />
                <br />
                <div>
                    <div className="flex text-white justify-between">
                        <label >Preço máximo (R$)</label>
                        <span>{filter.priceLimit}</span>
                    </div>
                    <Slider.Root value={[filter.priceLimit ?? 500]} defaultValue={[500]} onValueChange={(v) => updateFilter({ ...filter, priceLimit: v[0] })}
                        className="relative flex items-center select-none touch-none w-full h-8" min={10} max={1000} step={5}>
                        <Slider.Track className="bg-zinc-900 relative flex-grow rounded-full h-[3px]">
                            <Slider.Range className="absolute bg-primary rounded-full h-full" />
                        </Slider.Track>
                        <Slider.Thumb className="block w-5 h-5 bg-primary shadow-slide1 rounded-xl focus:outline-none focus:shadow-slide2"></Slider.Thumb>
                    </Slider.Root>
                    <div className="flex justify-between text-white">
                        <span>10</span>
                        <span>1000</span>
                    </div>
                </div>
                <br />
                <div className="flex flex-col font-text">
                    <label className="text-white">Tamanhos</label>
                    <Select
                        
                        onClick={e => e.stopPropagation()}
                        className="font-title"
                        mode="multiple"
                        showSearch={false}
                        allowClear
                        options={sizeOptions}
                        value={filter.sizes}
                        onChange={(v) => updateFilter({ ...filter, sizes: v })}
                    />
                </div>

                <br />
                <div className="flex flex-col font-text">
                    <label className="text-white">Cores</label>
                    <Select
                        className="font-title"
                        mode="multiple"
                        allowClear
                        showSearch={false}
                        tagRender={({ label, value, closable, onClose }) => {
                            return <Tag
                                onClose={onClose}
                                color={value}
                                style={{ marginInlineEnd: 4 }}
                                closable={closable}>
                                {label}
                            </Tag>
                        }}
                        value={filter.colors}
                        onChange={(v) => updateFilter({ ...filter, colors: v })}
                        options={colorOptions}
                    />
                </div>
            </div>
        </div>
    )
}