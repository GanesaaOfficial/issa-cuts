export interface Service {
  id: string;
  name: string;
  description: string;
  price: string;
  duration: string;
  icon: string;
}

export const services: Service[] = [
  {
    id: "classic-cut",
    name: "Classic Haircut",
    description: "Traditional cut styled to perfection. Includes wash and blow dry.",
    price: "RM 35",
    duration: "45 min",
    icon: "scissors"
  },
  {
    id: "fade-cut",
    name: "Fade Haircut",
    description: "Modern fade with sharp lines and clean finish.",
    price: "RM 40",
    duration: "60 min",
    icon: "scissors"
  },
  {
    id: "beard-trim",
    name: "Beard Trim & Shape",
    description: "Professional beard grooming with hot towel treatment.",
    price: "RM 25",
    duration: "30 min",
    icon: "razor"
  },
  {
    id: "royal-shave",
    name: "Royal Shave",
    description: "Traditional hot towel shave with premium products.",
    price: "RM 45",
    duration: "45 min",
    icon: "razor"
  },
  {
    id: "kids-cut",
    name: "Kids Haircut",
    description: "Special haircut for children under 12 years old.",
    price: "RM 25",
    duration: "30 min",
    icon: "scissors"
  },
  {
    id: "combo-package",
    name: "Combo Package",
    description: "Haircut + Beard trim + Hot towel. Best value!",
    price: "RM 65",
    duration: "90 min",
    icon: "star"
  }
];
