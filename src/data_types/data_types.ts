export interface home {
    id: string,
    communityId: string,
    price: number,
    area: number,
    type: string    
}

export interface community {
    id: string,
    name: string,
    imgUrl: string,
    group: string
}