import ProductCard from '@/components/products/product-card';
import { mockProducts } from '@/services/productService';

export default function ProductsPage() {
  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-12">
          <h1 className="text-4xl font-bold">Products</h1>
          <div className="flex gap-2">
            <Button variant="outline" size="sm">Grid</Button>
            <Button variant="outline" size="sm">List</Button>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {mockProducts.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </div>
    </div>
  );
}


