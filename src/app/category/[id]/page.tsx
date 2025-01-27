import CartButton from '@/components/CartButton';

interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
}

const Category = async ({ params }: { params: { id: string } }) => {
  const { id } = params;

  const res = await fetch(`https://fakestoreapi.com/products/category/${id}`);
  const products: Product[] = await res.json();

  return (
    <div>
      <h1>Товари</h1>
      <div>
        {products.map((product) => (
          <div key={product.id}>
            <h2>{product.title}</h2>
            <p>{product.description}</p>
            <p>Ціна: {product.price}</p>
            <CartButton {...product} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Category;