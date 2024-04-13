export namespace Paginated {
    export type Request = {
        skip?: number
        take?: number
    }

    export type Response<T> = {
        data?: Array<T>
        count: number
    }
}