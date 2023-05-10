export type Fruit = { name: string; id: string; emoji: string };
export type Fruits = Fruit[];
export type Shop = { name: string; id: string; products: Fruit[] };
export type FruitShops = Shop[];
