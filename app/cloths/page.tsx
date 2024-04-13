import { ClothsUseCase } from "@/main/use-cases/cloths-use-case"
import { ClothsList } from "./components/cloths-list"
import { URLSearchParams } from "url"
import { alertError } from "@/main/utils/alert-error"

export default async function ClothsPage({ searchParams }: { searchParams: { [key: string]: string | string[] | undefined } }) {
    let loading = true
    try {
        const result = await ClothsUseCase.instance.getPaginatedCloths({ ...searchParams })
        const cloths = result.data ?? []
        const count = result.count
        loading = false
        return (
            <div className="overflow-y-auto pb-12">
                <ClothsList cloths={cloths} loading={loading} count={count} />
            </div>
        )
    } catch (e) {
        alertError(e)
    } finally {
        loading = false
    }
}