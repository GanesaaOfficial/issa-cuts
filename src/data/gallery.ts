export interface GalleryItem {
  id: string;
  title: string;
  category: "fade" | "classic" | "beard" | "kids" | "creative";
  image: string;
  beforeImage?: string;
}

export const galleryItems: GalleryItem[] = [
  {
    id: "1",
    title: "Low Fade with Line Up",
    category: "fade",
    image: "/images/gallery/fade-1.jpg"
  },
  {
    id: "2",
    title: "Mid Fade Pompadour",
    category: "fade",
    image: "/images/gallery/fade-2.jpg"
  },
  {
    id: "3",
    title: "Classic Side Part",
    category: "classic",
    image: "/images/gallery/classic-1.jpg"
  },
  {
    id: "4",
    title: "Textured Crop",
    category: "classic",
    image: "/images/gallery/classic-2.jpg"
  },
  {
    id: "5",
    title: "Beard Sculpting",
    category: "beard",
    image: "/images/gallery/beard-1.jpg"
  },
  {
    id: "6",
    title: "Full Beard Trim",
    category: "beard",
    image: "/images/gallery/beard-2.jpg"
  },
  {
    id: "7",
    title: "Kids First Haircut",
    category: "kids",
    image: "/images/gallery/kids-1.jpg"
  },
  {
    id: "8",
    title: "Young Gentleman Cut",
    category: "kids",
    image: "/images/gallery/kids-2.jpg"
  },
  {
    id: "9",
    title: "Hair Design Art",
    category: "creative",
    image: "/images/gallery/creative-1.jpg"
  },
  {
    id: "10",
    title: "Pattern Fade",
    category: "creative",
    image: "/images/gallery/creative-2.jpg"
  }
];

export const categories = [
  { id: "all", name: "All Styles" },
  { id: "fade", name: "Fades" },
  { id: "classic", name: "Classic Cuts" },
  { id: "beard", name: "Beard Grooming" },
  { id: "kids", name: "Kids Cuts" },
  { id: "creative", name: "Creative Styles" }
];
