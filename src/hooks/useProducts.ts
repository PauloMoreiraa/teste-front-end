import { useState, useEffect } from 'react';
import type { Product } from './../components/products/carousel/carousel';

export const useProducts = (url: string) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) throw new Error('Falha ao buscar os produtos');

        const data = await response.json();

        const mappedProducts: Product[] = data.products.map((item: any, index: number) => ({
          id: index,
          nome: item.productName,
          descricao: item.descriptionShort,
          preco: Number(item.price),
          imagem: item.photo,
        }));

        setProducts(mappedProducts);
      } catch (err) {
        setError('Erro ao carregar os produtos');
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [url]);

  return { products, loading, error };
};