export default function Wishlist() {
    // filhal dummy products use karte hain
    const wishlistItems = [
      { id: 1, name: "Perfume A", price: 1200 },
      { id: 2, name: "Perfume B", price: 1500 },
    ];
  
    return (
      <div className="p-6">
        <h1 className="text-2xl font-bold mb-4">My Wishlist</h1>
        {wishlistItems.map((item) => (
          <div key={item.id} className="p-4 border rounded mb-2 flex justify-between">
            <span>{item.name}</span>
            <span>₹{item.price}</span>
          </div>
        ))}
      </div>
    );
  }
  