'use client'
import React, { useState } from 'react';

interface Product {
  name: string;
  price: number;
  category: string;
}

interface ProductListProps {
  products: Product[];
}

const ProductList: React.FC<ProductListProps> = ({ products }) => {

    const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

    const handleToggleCategory = (category: string) => {
        const index = selectedCategories.indexOf(category);
        if (index === -1) {
          setSelectedCategories([...selectedCategories, category]);
        } else {
          setSelectedCategories(selectedCategories.filter((c) => c !== category));
        }
      };

    const filteredProducts = selectedCategories.length > 0
    ? products.filter((product) => selectedCategories.includes(product.category))
    : products;

    return (
        <div className='flex'>
            <ul>
                {Array.from(new Set(products.map((product) => product.category))).map((category, index) => (
                <li key={index}>
                    <label>
                    <input
                        type="checkbox"
                        value={category}
                        checked={selectedCategories.includes(category)}
                        onChange={() => handleToggleCategory(category)}
                    />
                    {category}
                    </label>
                </li>
                ))}
            </ul>
            <ul>
            {filteredProducts.map((product, index) => (
                <li key={index}>
                <h2>{product.name}</h2>
                <p>Preço: R${product.price.toFixed(2)}</p>
                <p>Categoria: {product.category}</p>
                </li>
            ))}
            </ul>
        </div>
    );
};

export default ProductList;
