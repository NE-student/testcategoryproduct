import Link from 'next/link';

const Home = async () => {
  const res = await fetch('https://fakestoreapi.com/products/categories');
  const categories: string[] = await res.json();

  return (
    <div>
      <h1>Категорії товарів</h1>
      <ul>
        {categories.map((category, index) => (
          <li key={index}>
            <Link href={`/category/${category}`}>{category}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;