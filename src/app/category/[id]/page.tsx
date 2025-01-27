import ProductCard from '@/components/Product/ProductCard'; // Импортируем новый компонент
import CartModal from '@/components/Cart/CartModal';
import CartButton from '@/components/Cart/CartButton';
import HomeButton from '@/components/HomeButton';
import { Product } from '@/types/Product';

const Category = async ({ params }: { params: { id: string } }) => {
  const { id } = params;

  const res = await fetch(`https://fakestoreapi.com/products/category/${id}`);
  const products: Product[] = await res.json();

  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-between items-center mb-4">
        <HomeButton />
        <CartButton />
      </div>
      <h1 className="text-2xl font-bold mb-4">Товари</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {products.map((product: Product) => (
          <ProductCard key={product.id} {...product} /> // Используем новый компонент
        ))}
      </div>
      <CartModal />
    </div>
  );
};

export default Category;