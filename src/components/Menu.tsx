const menu = [
    { name: "Jollof Rice with Chicken", price: 3500 },
    { name: "Fried Rice with Chicken", price: 3500 },
    { name: "Egusi Soup with Semo and Beef", price: 5500 },
    { name: "Afang Soup with Water Fufu", price: 4500 },
    { name: "Ukwa with Smoked Fish", price: 5000 },
    { name: "Nkwobi", price: 4000 },
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
  