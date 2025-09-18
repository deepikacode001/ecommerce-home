// export default function Cart() {
//     // filhal dummy products use karte hain
//     const cartItems = [
//       { id: 1, name: "Perfume X", price: 2000, qty: 1 },
//       { id: 2, name: "Perfume Y", price: 1800, qty: 2 },
//     ];
  
//     const total = cartItems.reduce((sum, item) => sum + item.price * item.qty, 0);
  
//     return (
//       <div className="p-6">
//         <h1 className="text-2xl font-bold mb-4">My Cart</h1>
//         {cartItems.map((item) => (
//           <div key={item.id} className="p-4 border rounded mb-2 flex justify-between">
//             <span>{item.name} (x{item.qty})</span>
//             <span>₹{item.price * item.qty}</span>
//           </div>
//         ))}
//         <div className="mt-6 text-xl font-bold">Total: ₹{total}</div>
//         <button className="mt-4 px-6 py-2 bg-black text-white rounded">
//           Proceed to Checkout
//         </button>
//       </div>
//     );
//   }
  