export class Product {
    id: number;
    title: string; 
    description: string; 
    price: number; 
    imageUrl: string; 

    constructor(id, title, description = '', price = 0, imageUrl='../../../../../assets/images/item1.webp') {
        this.id = id
        this.title = title
        this.description = description
        this.price = price
        this.imageUrl = imageUrl 
    }
}
