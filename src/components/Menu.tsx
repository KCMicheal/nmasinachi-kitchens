const menu = [
    { name: "Jollof Rice", price: 2000 },
    { name: "Egusi Soup/Semo/Beef", price: 5000 },
    { name: "Ukwa with Mangala", price: 5000 },
  ];
  
  export default function MenuA() {
    return (
      <div className="bg-white py-10 text-black">
        <h2 className="text-center text-2xl font-semibold mb-4">Our Specialties</h2>
        <ul className="space-y-2 text-center">
          {menu.map((item, idx) => (
            <li key={idx} className="text-lg">{item.name} - ₦{item.price}</li>
          ))}
        </ul>
      </div>
    );
  }
  