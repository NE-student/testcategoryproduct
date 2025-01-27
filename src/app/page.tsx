import Link from 'next/link';

const Home = async () => {
  const res = await fetch('https://fakestoreapi.com/products/categories');
  const categories: string[] = await res.json();

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Категорії товарів</h1>
      <ul className="space-y-2">
        {categories.map((category, index) => (
          <li key={index}>
            <Link href={`/category/${category}`} className="text-blue-500 hover:underline">
              {category}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;