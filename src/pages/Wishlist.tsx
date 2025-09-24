import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, ShoppingBag, Trash2 } from 'lucide-react';
import { useCart } from '@/contexts/CartContext';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import ProductCard from '@/components/ProductCard';

const Wishlist: React.FC = () => {
  const { wishlist, removeFromWishlist, addToCart } = useCart();
  const { toast } = useToast();

  const handleRemoveFromWishlist = (productId: string, productName: string) => {
    removeFromWishlist(productId);
    toast({
      title: "Removed from wishlist",
      description: `${productName} has been removed from your wishlist.`,
    });
  };

  const handleAddAllToCart = () => {
    wishlist.forEach(product => {
      addToCart(product);
    });
    toast({
      title: "Added to cart!",
      description: `${wishlist.length} items have been added to your cart.`,
      className: "success-bounce"
    });
  };

  if (wishlist.length === 0) {
    return (
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-md mx-auto text-center space-y-6">
          <div className="text-6xl mb-4">💖</div>
          <h1 className="text-2xl font-bold">Your wishlist is empty</h1>
          <p className="text-muted-foreground">
            Explore our products and save your favorites here.
          </p>
          <Link to="/">
            <Button className="btn-hero">
              <ShoppingBag className="w-4 h-4 mr-2" />
              Start Shopping
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 space-y-4 sm:space-y-0">
          <div>
            <h1 className="text-3xl font-bold flex items-center">
              <Heart className="w-8 h-8 mr-3 text-red-500 fill-current" />
              My Wishlist
            </h1>
            <p className="text-muted-foreground mt-2">
              {wishlist.length} {wishlist.length === 1 ? 'item' : 'items'} saved
            </p>
          </div>

          {wishlist.length > 0 && (
            <Button
              onClick={handleAddAllToCart}
              className="btn-hero"
            >
              <ShoppingBag className="w-4 h-4 mr-2" />
              Add All to Cart
            </Button>
          )}
        </div>

        {/* Wishlist Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {wishlist.map((product, index) => (
            <div key={product.id} className="slide-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="relative">
                <ProductCard product={product} />
                
                {/* Remove Button */}
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => handleRemoveFromWishlist(product.id, product.name)}
                  className="absolute top-2 left-2 w-8 h-8 rounded-full bg-background/80 backdrop-blur-sm hover:bg-background hover:scale-110 transition-all text-destructive"
                >
                  <Trash2 className="w-4 h-4" />
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Continue Shopping */}
        <div className="text-center mt-12">
          <Link to="/">
            <Button variant="outline" className="px-8">
              Continue Shopping
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Wishlist;