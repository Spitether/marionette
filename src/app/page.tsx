import Link from 'next/link';
import { Button } from '@/components/ui/button';
import ProductCard from '@/components/products/product-card';
import { mockProducts } from '@/services/productService';

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 py-32">
        <div className="absolute inset-0 bg-black/20" />
        <div className="container mx-auto px-4 relative z-10 text-center text-white">
          <h1 className="text-6xl md:text-8xl font-black mb-6 drop-shadow-2xl leading-tight">
            Marionette
          </h1>
          <p className="text-2xl md:text-3xl mb-12 max-w-3xl mx-auto opacity-95 drop-shadow-lg leading-relaxed">
            Puppetmaster your marketplace. Control every string with seamless chat, 
            admin power, and beautiful design.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link href="/products">
              <Button size="lg" className="text-xl px-12 h-14 shadow-2xl hover:shadow-3xl bg-white/10 backdrop-blur-sm border-white/30">
                Explore Puppets
              </Button>
            </Link>
            <Link href="/auth/login">
              <Button variant="outline" size="lg" className="text-xl px-12 h-14 shadow-2xl hover:shadow-3xl border-white/50">
                Pull Strings
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-24 bg-gradient-to-b from-background to-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-black mb-6 bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
              Featured Creations
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Discover handcrafted puppets and marionettes ready to dance on your strings
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mockProducts.slice(0, 6).map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
          <div className="text-center mt-16">
            <Link href="/products">
              <Button size="lg" className="text-xl px-12">
                View All Products
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}



