import { Product } from "@/types";

export const products: Product[] = [
  {
    id: "1",
    slug: "kamikaze-oversized-tee",
    name: "Kamikaze Oversized Tee",
    price: 75,
    category: "Tops",
    description:
      "Premium heavyweight cotton oversized tee. Drop shoulder cut, box fit. A cornerstone of the Kamikaze wardrobe.",
    images: [
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=800&q=80",
      "https://images.unsplash.com/photo-1503341504253-dff4815485f1?w=800&q=80",
    ],
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    featured: true,
  },
  {
    id: "2",
    slug: "tactical-cargo-pants",
    name: "Tactical Cargo Pants",
    price: 165,
    category: "Bottoms",
    description:
      "Multi-pocket cargo silhouette with a tailored twist. Heavy twill fabric, adjustable ankle cuffs.",
    images: [
      "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=800&q=80",
      "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=800&q=80",
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    featured: true,
  },
  {
    id: "3",
    slug: "void-bomber-jacket",
    name: "Void Bomber Jacket",
    price: 320,
    category: "Outerwear",
    description:
      "Satin bomber with embroidered Kamikaze insignia. Ribbed cuffs and collar. The statement piece.",
    images: [
      "https://images.unsplash.com/photo-1551537482-f2075a1d41f2?w=800&q=80",
      "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=800&q=80",
    ],
    sizes: ["S", "M", "L", "XL"],
    featured: true,
  },
  {
    id: "4",
    slug: "strike-hoodie",
    name: "Strike Hoodie",
    price: 130,
    category: "Tops",
    description:
      "400gsm French terry hoodie. Double-lined hood, kangaroo pocket with zipper compartment.",
    images: [
      "https://images.unsplash.com/photo-1556821840-3a63f15732ce?w=800&q=80",
      "https://images.unsplash.com/photo-1620799139507-2a76f79a2f4d?w=800&q=80",
    ],
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    featured: false,
  },
  {
    id: "5",
    slug: "shadow-shorts",
    name: "Shadow Shorts",
    price: 90,
    category: "Bottoms",
    description:
      "Relaxed athletic shorts with raw hem detail and woven Kamikaze label. Lightweight and breathable.",
    images: [
      "https://images.unsplash.com/photo-1562157873-818bc0726f68?w=800&q=80",
    ],
    sizes: ["S", "M", "L", "XL"],
    featured: false,
  },
  {
    id: "6",
    slug: "recon-cap",
    name: "Recon Cap",
    price: 55,
    category: "Accessories",
    description:
      "6-panel structured cap with tonal Kamikaze embroidery. Adjustable strap closure.",
    images: [
      "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?w=800&q=80",
    ],
    sizes: ["One Size"],
    featured: false,
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getFeaturedProducts(): Product[] {
  return products.filter((p) => p.featured);
}
