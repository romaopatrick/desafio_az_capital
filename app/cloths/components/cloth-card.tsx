import { Card } from "@/app/components/card"
import { Cloth } from "@/main/domain/cloths"
import { ClothPictureCarousel } from "./cloth-picture-carousel";

type Props = {
    cloth: Cloth
}


export function ClothCard({
    cloth
}: Props) {
    return <Card>
        <ClothPictureCarousel sources={[...cloth.pictureSources]} clothName={cloth.name} />
        <div className="p-4 font-text">
            <div className="flex justify-between">
                <h2 className="text-lg font-bold uppercase">{cloth.name}</h2>
                <h2 className="text-lg font-bold">R$ {cloth.price}</h2>
            </div>
            <br />
            <div className="flex justify-between">
                <div className="flex gap-2 max-w-[45%] font-bold">
                    {cloth.availableSizes.map((size) => (
                        <span key={size.value}>{size.name}</span>
                    ))}
                </div>
                <div className="flex gap-3 max-w-[45%] flex-wrap">
                    {cloth.availableColors.map((color) => (
                        <div className="flex items-center text-lg gap-[2px]" key={color.label}>
                            <span style={{ backgroundColor: color.value }} className="w-2 h-2 rounded-sm"></span>
                            <span>{color.label}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </Card>
}