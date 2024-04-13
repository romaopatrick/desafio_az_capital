import axios, { AxiosResponse, AxiosError } from 'axios';
import { Paginated } from '@/main/use-cases/boundaries/pagination';
import { Cloth, DefaultSize } from '@/main/domain/cloths';
import QueryString from 'qs';

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || ''

const clothsData: Cloth[] = Array.from({ length: 10 }, (_, index) => ({
    id: "TSHIRT" + index.toString(),
    name: `T-shirt ${index + 1}`,
    pictureSources: [`https://i.pinimg.com/564x/36/e8/22/36e822d39c3eb1e41471cd4ad181c366.jpg`],
    availableSizes: [
        { name: 'PP', value: DefaultSize.PP },
        { name: 'P', value: DefaultSize.P },
        { name: 'M', value: DefaultSize.M },
    ],
    availableColors: [
        { label: 'Vermelho', value: 'red' },
        { label: 'Azul', value: 'blue' },
        { label: 'Verde', value: 'green' },
    ],
    price: Math.floor(Math.random() * 100) + 10, // Random price between 10 and 100
}));


export namespace ClothsUseCase {
    export type GetPaginatedClothsRequest = {
        name?: string
        priceLimit?: number,
        colors?: string[],
        sizes?: DefaultSize[],
    } & Paginated.Request

    class UseCase {
        async getPaginatedCloths(req: GetPaginatedClothsRequest): Promise<Paginated.Response<Cloth>> {
            console.log(req)
            const filtered = clothsData.filter(x =>
                (!req.name || req.name.toLowerCase().includes(x.name.toLowerCase())) &&
                (!req.colors || x.availableColors.some(color => req.colors?.includes(color.value))) &&
                (!req.sizes || x.availableSizes.some(size => x.availableSizes.includes(size))) &&
                (!req.priceLimit || x.price <= req.priceLimit)
            )

            const paginated = filtered.slice(req.skip, req.skip ?? 0 + (req.take ?? 10));
            return { count: clothsData.length, data: paginated }
        }
    }

    export const instance = new UseCase()
}
