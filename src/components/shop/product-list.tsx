'use client'
import React, { ChangeEvent, useEffect, useState } from 'react';
import ProductCard from '../cart/product-card';
import { useSearchParams } from 'next/navigation';

interface Product {
  id: string;
  name: string;
  description?: string;
  sku?: string;
  price: string | number;
  currency: string;
  image: string;
  images?: string[];
  category: string;
  outlet: string;
  promotion: string
  highlights: string
}

interface ProductListProps {
  products: Product[] | undefined;
}

const ProductList: React.FC<ProductListProps> = ({ products }) => {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [outletChecked, setOutletChecked] = useState<boolean>(false);
  const [promotionChecked, setPromotionChecked] = useState<boolean>(false);
  const [highlightsChecked, setHighlightsChecked] = useState<boolean>(false);

  const searchParams = useSearchParams().get("filter")

  useEffect(() => {
    if (searchParams === "promotions") {
      setPromotionChecked(true);
    } else if (searchParams === "outlet") {
      setOutletChecked(true);
    } else if (searchParams === "highlights") {
      setHighlightsChecked(true);
    }
  }, [searchParams]);

  useEffect(() => {
    const categories = Array.from(new Set(products?.map((product) => product.category)));
  
    if (searchParams) {
      const updatedSelectedCategories = categories.filter(category => searchParams.includes(category));
      setSelectedCategories(updatedSelectedCategories);
    }
  }, [searchParams, products]);

  const handleToggleCategory = (category: string) => {
    const index = selectedCategories.indexOf(category);
    if (index === -1) {
      setSelectedCategories([...selectedCategories, category]);
    } else {
      setSelectedCategories(selectedCategories.filter((c) => c !== category));
    }
  };

  const handleToggleOutlet = () => {
    setOutletChecked(!outletChecked);
  };

  const filteredProductsByOutlet = products?.filter((product) => {
    if (outletChecked) {
      return product.outlet === 'True';
    }
    return true;
  }).filter((product) => selectedCategories.length === 0 || selectedCategories.includes(product.category));

  const handleSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const handleTogglePromotion = () => {
    setPromotionChecked(!promotionChecked);
  };

  const filteredProductsByPromotion = filteredProductsByOutlet?.filter((product) => {
    if (promotionChecked) {
      return product.promotion === 'True';
    }
    return true;
  }).filter((product) => selectedCategories.length === 0 || selectedCategories.includes(product.category));

  const handleToggleHighlights = () => {
    setHighlightsChecked(!highlightsChecked);
  };

  const filteredProductsByHighlights = filteredProductsByPromotion?.filter((product) => {
    if (highlightsChecked) {
      return product.highlights === 'True';
    }
    return true;
  }).filter((product) => selectedCategories.length === 0 || selectedCategories.includes(product.category));


  const filteredProductsBySearch = filteredProductsByHighlights?.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
        <div className='fixed px-10 pt-2'>
            <div>
                <h1 className='pb-3 text-xl font-bold'>Categorias </h1>
                <ul className=' space-y-5 pb-10'>
                {Array.from(new Set(products?.map((product) => product.category))).map((category, index) => (
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
            </div>
            <div>
                <h1 className='pb-3 text-xl font-bold'>Produtos em</h1>
                <div className='flex flex-col space-y-5'>
                    <label>
                    <input type="checkbox" checked={promotionChecked} onChange={handleTogglePromotion}/>
                        Promoções
                    </label>
                    <label>
                    <input type="checkbox" checked={highlightsChecked} onChange={handleToggleHighlights} />
                        Destaques
                    </label>
                    <label>
                    <input type="checkbox" checked={outletChecked} onChange={handleToggleOutlet}/>
                        Outlet
                    </label>
                </div>
            </div>
        </div>
        <div className='px-10 pb-10 ml-52'>
            <input
                type="text"
                placeholder="Digite para filtrar"
                value={searchTerm}
                onChange={handleSearchChange}
                className="border border-gray-300 rounded-md py-2 px-4 w-full"
            />
        <div className="grid grid-cols-4 gap-4 py-5 z-1">
                {filteredProductsBySearch?.map((p) => (
                    <ProductCard {...p} />
                ))}
            </div>
        </div>
    </div>
  );
};

export default ProductList;
