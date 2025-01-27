import BuyButton from '@/components/Product/BuyButton';
import CartModal from '@/components/Cart/CartModal';
import CartButton from '@/components/Cart/CartButton';
import HomeButton from '@/components/HomeButton'
import { Product } from '@/types/Product';

const Category = async ({ params }: { params: { id: string } }) => {
  const { id } = params;

  const res = await fetch(`https://fakestoreapi.com/products/category/${id}`);
  const products: Product[] = await res.json();

  return (
    <div className="container mx-auto p-4">
      <HomeButton />
      <CartButton />
      <h1 className="text-2xl font-bold mb-4">Товари</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {products.map((product: Product) => (
          <div key={product.id} className="border rounded-lg p-4 shadow">
            <h2 className="font-bold">{product.title}</h2>
            <p>{product.description}</p>
            <p className="font-semibold">Ціна: {product.price} грн</p>
            <BuyButton {...product} />
          </div>
        ))}
      </div>
      <CartModal />
    </div>
  );
};

export default Category;