export interface Designer {
  id: string;
  name: string;
  location: string;
  bio: string;
  instagram: string;
  image: string;
  category: string[];
  featured: boolean;
}

export interface Product {
  id: string;
  name: string;
  price: number;
  designerId: string;
  images: string[];
  category: string;
  sizes: string[];
  description: string;
  colors: string[];
}

export const designers: Designer[] = [
  {
    id: '1',
    name: 'Alda Designer',
    location: 'Kerala',
    bio: 'Creating timeless ethnic wear with modern sensibilities',
    instagram: '@aldadesigner',
    image: 'https://images.unsplash.com/photo-1649930308240-0a4ae421ff77?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXNoaW9uJTIwZGVzaWduZXIlMjB3b21hbnxlbnwxfHx8fDE3NjM0OTcxNzV8MA&ixlib=rb-4.1.0&q=80&w=1080',
    category: ['Ethnic', 'Lehenga'],
    featured: true,
  },
  {
    id: '2',
    name: 'Nisha Collections',
    location: 'Mumbai',
    bio: 'Bold, contemporary fashion for the modern woman',
    instagram: '@nishacollections',
    image: 'https://images.unsplash.com/photo-1688828028702-55d50a360f6f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjBmYXNoaW9uJTIwZGVzaWduZXJ8ZW58MXx8fHwxNzYzNDk3MTc1fDA&ixlib=rb-4.1.0&q=80&w=1080',
    category: ['Western', 'Fusion'],
    featured: true,
  },
  {
    id: '3',
    name: 'Priya Couture',
    location: 'Delhi',
    bio: 'Luxury bridal wear and designer sarees',
    instagram: '@priyacouture',
    image: 'https://images.unsplash.com/photo-1753164597539-af93605a9178?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b3VuZyUyMGZlbWFsZSUyMGRlc2lnbmVyfGVufDF8fHx8MTc2MzQ5NzE3Nnww&ixlib=rb-4.1.0&q=80&w=1080',
    category: ['Ethnic', 'Bridal'],
    featured: true,
  },
  {
    id: '4',
    name: 'Zara Boutique',
    location: 'Bangalore',
    bio: 'Chic western wear with an Indian twist',
    instagram: '@zaraboutique',
    image: 'https://images.unsplash.com/photo-1760001868397-e5995a577e26?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXNoaW9uJTIwYm91dGlxdWUlMjBvd25lcnxlbnwxfHx8fDE3NjM0OTM0MzJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    category: ['Western', 'Casual'],
    featured: false,
  },
  {
    id: '5',
    name: 'Meera Fashions',
    location: 'Jaipur',
    bio: 'Traditional Rajasthani craftsmanship meets modern design',
    instagram: '@meerafashions',
    image: 'https://images.unsplash.com/photo-1626784579980-db39c1a13aa9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMGRlc2lnbmVyJTIwcG9ydHJhaXR8ZW58MXx8fHwxNzYzNDM5MDQ3fDA&ixlib=rb-4.1.0&q=80&w=1080',
    category: ['Ethnic', 'Kurti'],
    featured: false,
  },
];

export const products: Product[] = [
  {
    id: '1',
    name: 'Royal Emerald Lehenga',
    price: 12500,
    designerId: '1',
    images: [
      'https://images.unsplash.com/photo-1756483487325-2e4ea1ab00fa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXNpZ25lciUyMGxlaGVuZ2ElMjBkcmVzc3xlbnwxfHx8fDE3NjM0OTcxNzZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    ],
    category: 'Ethnic',
    sizes: ['S', 'M', 'L', 'XL'],
    description: 'Exquisite hand-embroidered lehenga with intricate zari work. Perfect for weddings and festive occasions.',
    colors: ['Emerald', 'Gold'],
  },
  {
    id: '2',
    name: 'Sunset Silk Saree',
    price: 8500,
    designerId: '3',
    images: [
      'https://images.unsplash.com/photo-1756483509177-bbabd67a3234?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXNpZ25lciUyMHNhcmVlfGVufDF8fHx8MTc2MzQ5NzE3N3ww&ixlib=rb-4.1.0&q=80&w=1080',
    ],
    category: 'Ethnic',
    sizes: ['Free Size'],
    description: 'Pure silk saree with contemporary design elements. Drapes beautifully and suitable for all occasions.',
    colors: ['Orange', 'Pink'],
  },
  {
    id: '3',
    name: 'Modern Fusion Dress',
    price: 4500,
    designerId: '2',
    images: [
      'https://images.unsplash.com/photo-1759840278511-f73a3d62fb9f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB3ZXN0ZXJuJTIwZHJlc3N8ZW58MXx8fHwxNjM0OTcxNzZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    ],
    category: 'Western',
    sizes: ['S', 'M', 'L', 'XL'],
    description: 'Contemporary fusion dress combining Western silhouettes with Indian embellishments.',
    colors: ['Black', 'White'],
  },
  {
    id: '4',
    name: 'Elegant Party Gown',
    price: 6800,
    designerId: '4',
    images: [
      'https://images.unsplash.com/photo-1761164920960-2d776a18998c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVnYW50JTIwcGFydHklMjBkcmVzc3xlbnwxfHx8fDE3NjM0OTcxNzd8MA&ixlib=rb-4.1.0&q=80&w=1080',
    ],
    category: 'Western',
    sizes: ['XS', 'S', 'M', 'L'],
    description: 'Stunning floor-length gown perfect for cocktail parties and formal events.',
    colors: ['Navy', 'Red'],
  },
  {
    id: '5',
    name: 'Designer Cotton Kurti',
    price: 2200,
    designerId: '5',
    images: [
      'https://images.unsplash.com/photo-1741847639057-b51a25d42892?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXNpZ25lciUyMGt1cnRpfGVufDF8fHx8MTc2MzQ5NzE3N3ww&ixlib=rb-4.1.0&q=80&w=1080',
    ],
    category: 'Ethnic',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    description: 'Comfortable everyday kurti with block print designs. Perfect for casual and office wear.',
    colors: ['Blue', 'Pink', 'Yellow'],
  },
  {
    id: '6',
    name: 'Traditional Anarkali',
    price: 5500,
    designerId: '1',
    images: [
      'https://images.unsplash.com/photo-1722198320931-0e97715b5dfd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxldGhuaWMlMjBpbmRpYW4lMjBkcmVzc3xlbnwxfHx8fDE3NjM0OTcxNzZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    ],
    category: 'Ethnic',
    sizes: ['S', 'M', 'L', 'XL'],
    description: 'Classic Anarkali with modern embroidery. Ideal for festive celebrations and special occasions.',
    colors: ['Red', 'Gold'],
  },
  {
    id: '7',
    name: 'Boutique Evening Dress',
    price: 7200,
    designerId: '2',
    images: [
      'https://images.unsplash.com/photo-1760287363707-851f4780b98c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxib3V0aXF1ZSUyMGZhc2hpb24lMjBkcmVzc3xlbnwxfHx8fDE3NjM0OTcxNzZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    ],
    category: 'Western',
    sizes: ['S', 'M', 'L'],
    description: 'Sophisticated evening wear with contemporary design elements.',
    colors: ['Black', 'Gold'],
  },
  {
    id: '8',
    name: 'Bridal Lehenga Set',
    price: 25000,
    designerId: '3',
    images: [
      'https://images.unsplash.com/photo-1756483487325-2e4ea1ab00fa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXNpZ25lciUyMGxlaGVuZ2ElMjBkcmVzc3xlbnwxfHx8fDE3NjM0OTcxNzZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    ],
    category: 'Ethnic',
    sizes: ['S', 'M', 'L', 'XL'],
    description: 'Luxurious bridal lehenga with heavy embellishments and detailed craftsmanship.',
    colors: ['Red', 'Maroon', 'Gold'],
  },
];

export const getDesignerById = (id: string): Designer | undefined => {
  return designers.find(d => d.id === id);
};

export const getProductsByDesigner = (designerId: string): Product[] => {
  return products.filter(p => p.designerId === designerId);
};

export const getProductById = (id: string): Product | undefined => {
  return products.find(p => p.id === id);
};
