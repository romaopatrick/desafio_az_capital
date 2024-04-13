import { ClothCard } from "./cloth-card"
import { ClothsUseCase } from "@/main/use-cases/cloths-use-case"
import { alertError } from "@/main/utils/alert-error"
import { Cloth } from "@/main/domain/cloths"
import { Loading } from "@/app/components/loading"

type Props = {
    cloths: Cloth[]
    loading: boolean
    count: number
}

export function ClothsList({ cloths, loading, count }: Props) {
    return (
        <div className="flex flex-wrap gap-y-6 gap-x-6 items-center justify-center">
            {loading ? <Loading />
                : cloths.map(cloth => {
                    return (
                        <ClothCard key={cloth.id} cloth={cloth} />
                    )
                })}
            {
                !count && <p>Sem estoque disponível</p>
            }
        </div>
    )
}