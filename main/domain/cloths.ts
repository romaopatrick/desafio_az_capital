export type Cloth = {
    id: string
    name: string
    pictureSources: string[]
    availableSizes: Size[]
    availableColors: Color[]
    price: number
}

export type Size = {
    name: string
    value: number
}

export enum DefaultSize {
    PP,
    P,
    M,
    G,
    GG,
    XGG,
    Custom,
}
export const presetedSizes: Size[] = [
    {
        name: 'PP',
        value: DefaultSize.PP,
    },
    {
        name: 'P',
        value: DefaultSize.P,
    },
    {
        name: 'M',
        value: DefaultSize.M,
    },
    {
        name: 'G',
        value: DefaultSize.G,
    },
    {
        name: 'GG',
        value: DefaultSize.GG,
    },
    {
        name: 'XGG',
        value: DefaultSize.XGG,
    },
    {
        name: 'Por encomenda',
        value: DefaultSize.Custom,
    }
]

export const presetedColors: Color[] = [
    {
        label: "Verde",
        value: "#008000",
    },
    {
        label: "Azul",
        value: "#0000FF",
    },
    {
        label: "Vermelho",
        value: "#FF0000",
    },
    {
        label: "Laranja",
        value: "#FFA500",
    },
    {
        label: "Amarelo",
        value: "#FFFF00",
    }
]

export type Color = {
    label: string
    value: string
}