import { InMemoryDbService } from 'angular-in-memory-web-api';

import { IProduct } from '../shared/interfaces';

export class ProductData implements InMemoryDbService {
  createDb() {
    const products: IProduct[] = [
      {
        id: 1,
        name: 'Small Fresh Salad',
        price: 683.0,
        description: 'Practical'
      },
      {
        id: 2,
        name: 'Refined Rubber Fish',
        price: 879.0,
        description: 'Licensed'
      },
      {
        id: 3,
        name: 'Licensed Wooden Keyboard',
        price: 669.0,
        description: 'Tasty'
      },
      {
        id: 4,
        name: 'Small Frozen Bacon',
        price: 145.0,
        description: 'Handcrafted'
      },
      {
        id: 5,
        name: 'Gorgeous Wooden Cheese',
        price: 483.0,
        description: 'Fantastic'
      },
      {
        id: 6,
        name: 'Fantastic Fresh Pizza',
        price: 807.0,
        description: 'Tasty'
      },
      {
        id: 7,
        name: 'Gorgeous Cotton Chair',
        price: 968.0,
        description: 'Unbranded'
      },
      {
        id: 8,
        name: 'Unbranded Granite Chair',
        price: 21.0,
        description: 'Handmade'
      },
      {
        id: 9,
        name: 'Small Cotton Chicken',
        price: 684.0,
        description: 'Small'
      },
      {
        id: 10,
        name: 'Refined Metal Pants',
        price: 251.0,
        description: 'Gorgeous'
      }
    ];
    return { products };
  }
}
