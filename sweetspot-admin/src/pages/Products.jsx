import React, { useState } from "react";

const sampleProducts = [
  {
    id: 1,
    name: "Chocolate Truffle",
    price: 499,
    rating: 5,
    info: "Rich chocolate layers with silky ganache.",
    eggOption: "Eggless",
    weight: "0.5kg - 2kg",
    image:
      "https://i.pinimg.com/originals/97/3c/e5/973ce57ec196aea09f570db3fcd34044.jpg",
  },
  {
    id: 2,
    name: "Red Velvet Cake",
    price: 599,
    rating: 4,
    info: "Classic red velvet with cream cheese frosting.",
    eggOption: "Contains Egg",
    weight: "1kg - 2.5kg",
    image:
      "https://plus.unsplash.com/premium_photo-1713920190025-79fb720f3ee1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHJlZCUyMHZlbHZldCUyMGNha2V8ZW58MHx8MHx8fDA%3D",
  },
  {
    id: 3,
    name: "Blueberry Cheesecake",
    price: 699,
    rating: 5,
    info: "Creamy cheesecake topped with blueberry glaze.",
    eggOption: "Eggless",
    weight: "0.5kg - 1.5kg",
    image:
      "https://www.lifeloveandsugar.com/wp-content/uploads/2021/03/Blueberry-Cheesecake4-1024x1536.jpg",
  },
  {
    id: 4,
    name: "Black Forest Cake",
    price: 549,
    rating: 4,
    info: "Layers of chocolate sponge, whipped cream & cherries.",
    eggOption: "Contains Egg",
    weight: "1kg - 3kg",
    image:
      "https://images.unsplash.com/photo-1518047601542-79f18c655718?w=600&auto=format&fit=crop&q=60",
  },
  {
    id: 5,
    name: "Pineapple Cream Cake",
    price: 459,
    rating: 4,
    info: "Light vanilla sponge with pineapple cream layers.",
    eggOption: "Eggless",
    weight: "0.5kg - 2kg",
    image:
      "https://images.unsplash.com/photo-1643910509764-1add565de3e4?w=600&auto=format&fit=crop&q=60",
  },
  {
    id: 6,
    name: "Butterscotch Delight",
    price: 499,
    rating: 5,
    info: "Crunchy caramel butterscotch with soft cream.",
    eggOption: "Contains Egg",
    weight: "1kg - 2.5kg",
    image:
      "https://images.unsplash.com/photo-1602095459485-3dc39c9b79f2?w=600&auto=format&fit=crop&q=60",
  },
  {
    id: 7,
    name: "Mango Mousse Cake",
    price: 649,
    rating: 5,
    info: "Refreshing mango mousse with soft vanilla sponge.",
    eggOption: "Eggless",
    weight: "0.5kg - 1.5kg",
    image:
      "https://images.unsplash.com/photo-1688458297155-228a3b1e5b49?w=600&auto=format&fit=crop&q=60",
  },
];

const Products = () => {
  const [products, setProducts] = useState(sampleProducts);
  const [search, setSearch] = useState("");
  const [editingProduct, setEditingProduct] = useState(null);

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(search.toLowerCase())
  );

  const handleDelete = (id) => {
    const updated = products.filter((p) => p.id !== id);
    setProducts(updated);
  };

  const handleSave = () => {
    setProducts((prev) =>
      prev.map((p) => (p.id === editingProduct.id ? editingProduct : p))
    );
    setEditingProduct(null);
  };

  const renderEggOption = (option) => {
    return option === "Eggless" ? (
      <p className="flex items-center text-sm font-medium text-green-600 mb-1">
        <span className="w-3 h-3 bg-green-600 rounded-full mr-2"></span> Veg
      </p>
    ) : (
      <p className="flex items-center text-sm font-medium text-red-600 mb-1">
        <span className="w-3 h-3 bg-red-600 rounded-full mr-2"></span> Has Egg
      </p>
    );
  };

  return (
    <div className="px-6 py-4">
      {/* Page Heading */}
      <h1 className="text-4xl font-semibold font-[Parastoo] text-[rgba(79,79,79,0.66)] mb-4">
        Product List
      </h1>

      {/* Search Bar */}
      <div className="mb-6">
        <input
          type="text"
          placeholder="Search products..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full md:w-1/3 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-300"
        />
      </div>

      {/* Product Grid */}
      {filteredProducts.length === 0 ? (
        <p className="text-gray-500 italic">No products found.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-cover rounded-t-xl"
              />
              <div className="p-4">
                <h2 className="text-xl font-semibold text-[rgba(79,79,79,0.7)] mb-1">
                  {product.name}
                </h2>
                <p className="text-pink-700 font-medium mb-1">
                  ₹{product.price} <span className="text-sm">/ half kg</span>
                </p>

                {/* Rating */}
                {/* <div className="text-yellow-500 mb-1">
                  {Array.from({ length: product.rating }).map((_, i) => (
                    <span key={i}>★</span>
                  ))}
                  {Array.from({ length: 5 - product.rating }).map((_, i) => (
                    <span key={`empty-${i}`} className="text-gray-300">
                      ☆
                    </span>
                  ))}
                </div> */}

                {/* Info */}
                <p className="text-sm text-gray-600 italic mb-2">{product.info}</p>

                {/* Egg Option */}
                {renderEggOption(product.eggOption)}

                {/* Weight */}
                <p className="text-sm font-medium text-gray-700 mb-3">
                  ⚖️ {product.weight}
                </p>

                <div className="flex space-x-3">
                  <button
                    className="bg-pink-400 hover:bg-pink-500 text-white px-4 py-1 rounded-lg text-sm"
                    onClick={() => setEditingProduct(product)}
                  >
                    Edit
                  </button>
                  <button
                    className="bg-red-400 hover:bg-red-500 text-white px-4 py-1 rounded-lg text-sm"
                    onClick={() => handleDelete(product.id)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Edit Modal */}
      {editingProduct && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-40 z-50">
          <div className="bg-white rounded-xl shadow-lg p-6 w-full max-w-md">
            <h2 className="text-xl font-semibold mb-4">Edit Cake</h2>
            <div className="space-y-3">
              <input
                type="text"
                value={editingProduct.name}
                onChange={(e) =>
                  setEditingProduct({ ...editingProduct, name: e.target.value })
                }
                className="w-full px-3 py-2 border rounded"
                placeholder="Cake Name"
              />
              <input
                type="number"
                value={editingProduct.price}
                onChange={(e) =>
                  setEditingProduct({
                    ...editingProduct,
                    price: parseInt(e.target.value, 10),
                  })
                }
                className="w-full px-3 py-2 border rounded"
                placeholder="Price"
              />
              <input
                type="text"
                value={editingProduct.info}
                onChange={(e) =>
                  setEditingProduct({
                    ...editingProduct,
                    info: e.target.value,
                  })
                }
                className="w-full px-3 py-2 border rounded"
                placeholder="Info"
              />
              <input
                type="text"
                value={editingProduct.eggOption}
                onChange={(e) =>
                  setEditingProduct({
                    ...editingProduct,
                    eggOption: e.target.value,
                  })
                }
                className="w-full px-3 py-2 border rounded"
                placeholder="Egg Option (Eggless/Contains Egg)"
              />
              <input
                type="text"
                value={editingProduct.weight}
                onChange={(e) =>
                  setEditingProduct({
                    ...editingProduct,
                    weight: e.target.value,
                  })
                }
                className="w-full px-3 py-2 border rounded"
                placeholder="Weight Range"
              />
              <input
                type="number"
                min="1"
                max="5"
                value={editingProduct.rating}
                onChange={(e) =>
                  setEditingProduct({
                    ...editingProduct,
                    rating: parseInt(e.target.value, 10),
                  })
                }
                className="w-full px-3 py-2 border rounded"
                placeholder="Rating (1-5)"
              />
              <input
                type="text"
                value={editingProduct.image}
                onChange={(e) =>
                  setEditingProduct({
                    ...editingProduct,
                    image: e.target.value,
                  })
                }
                className="w-full px-3 py-2 border rounded"
                placeholder="Image URL"
              />
            </div>
            <div className="flex justify-end space-x-3 mt-4">
              <button
                className="px-4 py-2 bg-gray-300 rounded"
                onClick={() => setEditingProduct(null)}
              >
                Cancel
              </button>
              <button
                className="px-4 py-2 bg-pink-500 text-white rounded"
                onClick={handleSave}
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Products;
