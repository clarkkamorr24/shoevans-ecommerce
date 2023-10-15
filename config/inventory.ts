import { Image } from "sanity"

interface InventoryProduct {
  id: string
  name: string
  image: string
  images: string[]
  categories: string[]
  sizes: string[]
  colors: string[]
  price: number
  currency: string
  description: string
  sku: string
}

export interface SanityProduct extends Omit<InventoryProduct, "images"> {
  _id: string
  _createdAt: Date
  slug: string
  images: Image[]
}

export const inventory: InventoryProduct[] = [
  {
    id: "64da6006-a4bb-4555-af78-3467853eb75e",
    sku: "disney_vans_authentic",
    name: "DISNEY X VANS AUTHENTIC SHOE",
    description: `PRODUCT1`,
    price: 16800, // price in smallest currency unit (e.g. cent for PHP)
    image: require("../product-images/vans1.webp"),
    images: [
      require("../product-images/vans2.jpg"),
      require("../product-images/vans3.webp"),
      require("../product-images/vans4.webp"),
    ],
    sizes: ["one-size"],
    categories: ["bags"],
    colors: ["black"],
    currency: "PHP",
  },
  {
    id: "8d1a33a5-5650-4bd7-bb70-ba4670090700",
    sku: "khaki_tote_bag_1",
    name: "Khaki Tote Bag",
    description: `Meet your new favorite carry-on. Our supersized tote is crafted in durable waxed cotton canvas that's rugged and durable, ideal for hauling all of your stuff. This size takes you to and from the farmer's market, the gym or a weekend getaway.`,
    price: 14500,
    image: require("../product-images/vans5.webp"),
    images: [
      require("../product-images/vans5.webp"),
      require("../product-images/vans6.webp"),
      require("../product-images/vans7.webp"),
    ],
    sizes: ["one-size"],
    categories: ["bags"],
    colors: ["orange"],
    currency: "PHP",
  },

]
