import { notFound } from 'next/navigation';
import { mockProducts } from '@/services/productService';
import Image from 'next/image';

interface Props {
  params: { id: string };
}

export default function ProductPage({ params }: Props) {
  const product = mockProducts.find(p => p.id === params.id);
  
  if (!product) notFound();

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="bg-background rounded-2xl p-4 shadow-xl">
            <Image
              src={product.image || '/placeholder.jpg'}
              alt={product.name}
              width={600}
              height={400}
              className="w-full h-96 object-cover rounded-xl"
            />
          </div>
          <div>
            <h1 className="text-4xl font-bold mb-4">{product.name}</h1>
            <p className="text-3xl font-black text-primary mb-8">${product.price}</p>
            <div className="space-y-4 mb-8">
              <div>
                <span className="font-semibold">Condition:</span> New
              </div>
              <div>
                <span className="font-semibold">Category:</span> Electronics
              </div>
              <div className="font-semibold">Description:</div>
              <p className="text-muted-foreground leading-relaxed">{product.description}</p>
            </div>
            <Button size="lg" className="w-full mb-4">Add to Cart</Button>
            <Button variant="outline" size="lg" className="w-full">Contact Seller</Button>
          </div>
        </div>
      </div>
    </div>
  );
}

