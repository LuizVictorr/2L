import { NextPage } from 'next';
import ProductList from '@/components/teste/product-list';

interface Product {
  name: string;
  price: number;
  category: string;
}

const Home: NextPage = () => {

  const products: Product[] = [
    {
      name: "Camisa Polo",
      price: 39.99,
      category: "Roupas",
    },
    {
      name: "Tênis Esportivo",
      price: 99.99,
      category: "Calçados",
    },
    {
      name: "Celular Smartphone",
      price: 899.99,
      category: "Eletrônicos",
    },
    {
      name: "Livro de Ficção",
      price: 19.99,
      category: "Eletrônicos",
    },
    {
      name: "Fones de Ouvido Bluetooth",
      price: 49.99,
      category: "Acessórios Eletrônicos",
    },
  ];


  return (
    <div className='flex gap-5'>
      <h1>Produtos</h1>
      
      <ProductList products={products} />
    </div>
  );
};

export default Home;
