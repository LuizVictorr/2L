'use client'
import { NextPage } from 'next';
import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react'; // Importe o useState para gerenciar o estado do checkbox

interface Product {
  name: string;
  price: number;
  category: string;
}

const Home: NextPage = () => {
  const [promotions, setPromotions] = useState(false);
  const [outlet, setOutlet] = useState(false);
  const [highlights, setHighlights] = useState(false);

  const searchParams = useSearchParams().get("filtro")

  useEffect(() => {
    if (searchParams === "promotions") {
      setPromotions(true);
      setOutlet(false);
      setHighlights(false);
    } else if (searchParams === "outlet") {
      setPromotions(false);
      setOutlet(true);
      setHighlights(false);
    } else if (searchParams === "highlights") {
      setPromotions(false);
      setOutlet(false);
      setHighlights(true);
    }
  }, [searchParams]);



  return (
    <div className='flex gap-5'>
      <h1>Produtos</h1>
      <label>
        <input type="checkbox" checked={promotions} onChange={(e) => setPromotions(e.target.checked)} />
        Promoções
      </label>
      <label>
        <input type="checkbox" checked={outlet} onChange={(e) => setOutlet(e.target.checked)} />
        Outlet
      </label>
      <label>
        <input type="checkbox" checked={highlights} onChange={(e) => setHighlights(e.target.checked)} />
        Highlights
      </label>
    </div>
  );
};

export default Home;
