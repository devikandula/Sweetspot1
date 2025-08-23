import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const sampleFlavours = ['Chocolate', 'Vanilla', 'Strawberry', 'Tiramisu'];
const sampleCategories = ['Birthday', 'Anniversary', '1 Year Anniversary'];
const sampleQuantities = ['0.5', '1', '2', '3', '5', '10'];

const AddCakeForm = ({ editCake = null, onAdd, onUpdate }) => {
  const initialState = {
    name: '',
    description: '',
    image: '',
    category: '',
    flavour: '',
    price: '',
    discount: '',
    quantityKg: '',
    stockCount: '',
    available: true,
  };

  const [formData, setFormData] = useState(initialState);

  useEffect(() => {
    if (editCake) {
      const {
        name, description, image, category, flavour, price,
        discount, quantityKg, stockCount, available
      } = editCake;

      setFormData({
        name,
        description,
        image,
        category,
        flavour,
        price: price.toString().replace(/[^\d]/g, ''),
        discount: discount || '',
        quantityKg,
        stockCount,
        available,
      });
    } else {
      setFormData(initialState);
    }
  }, [editCake]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const finalData = {
      ...formData,
      price: formData.price.startsWith('₹') ? formData.price : `₹${formData.price}`,
      discount: formData.discount || 0,
    };

    if (editCake) {
      finalData.id = editCake.id;
      onUpdate(finalData);
      toast.success(`${formData.name} updated successfully!`);
    } else {
      finalData.id = Date.now();
      onAdd(finalData);
      toast.success(`${formData.name} added successfully!`);
    }

    if (!editCake) {
      setFormData(initialState);
    }
  };

  return (
    <div className="bg-white shadow-xl rounded-2xl p-8 max-w-4xl mx-auto mt-10 border border-[rgba(224,99,99,0.5)] font-[Parastoo]">
      <h2 className="text-3xl font-bold text-center mb-6 text-[rgba(224,99,99,0.85)]">
        {editCake ? 'Edit Cake' : 'Add New Cake'}
      </h2>

      <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="text-[rgba(224,99,99,0.85)] font-semibold text-base">Cake Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full border border-[rgba(224,99,99,0.5)] rounded px-3 py-2 text-base"
          />
        </div>

        <div>
          <label className="text-[rgba(224,99,99,0.85)] font-semibold text-base">Description</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            required
            className="w-full border border-[rgba(224,99,99,0.5)] rounded px-3 py-2 text-base"
          />
        </div>

        <div className="md:col-span-2">
          <label className="text-[rgba(224,99,99,0.85)] font-semibold text-base">Image URL</label>
          <input
            type="text"
            name="image"
            value={formData.image}
            onChange={handleChange}
            required
            className="w-full border border-[rgba(224,99,99,0.5)] rounded px-3 py-2 text-base"
          />
        </div>

        <div>
          <label className="text-[rgba(224,99,99,0.85)] font-semibold text-base">Price (₹)</label>
          <input
            type="text"
            name="price"
            value={formData.price}
            onChange={handleChange}
            required
            className="w-full border border-[rgba(224,99,99,0.5)] rounded px-3 py-2 text-base"
          />
        </div>

        <div>
          <label className="text-[rgba(224,99,99,0.85)] font-semibold text-base">Quantity (Kg)</label>
          <input
            list="quantityOptions"
            name="quantityKg"
            value={formData.quantityKg}
            onChange={handleChange}
            required
            className="w-full border border-[rgba(224,99,99,0.5)] rounded px-3 py-2 text-base"
          />
          <datalist id="quantityOptions">
            {sampleQuantities.map((q) => (
              <option key={q} value={q} />
            ))}
          </datalist>
        </div>

        <div>
          <label className="text-[rgba(224,99,99,0.85)] font-semibold text-base">Stock Count</label>
          <input
            type="number"
            name="stockCount"
            value={formData.stockCount}
            onChange={handleChange}
            required
            className="w-full border border-[rgba(224,99,99,0.5)] rounded px-3 py-2 text-base"
          />
        </div>

        <div>
          <label className="text-[rgba(224,99,99,0.85)] font-semibold text-base">Category</label>
          <input
            list="categoryOptions"
            name="category"
            value={formData.category}
            onChange={handleChange}
            required
            className="w-full border border-[rgba(224,99,99,0.5)] rounded px-3 py-2 text-base"
          />
          <datalist id="categoryOptions">
            {sampleCategories.map((cat) => (
              <option key={cat} value={cat} />
            ))}
          </datalist>
        </div>

        <div>
          <label className="text-[rgba(224,99,99,0.85)] font-semibold text-base">Flavour</label>
          <input
            list="flavourOptions"
            name="flavour"
            value={formData.flavour}
            onChange={handleChange}
            required
            className="w-full border border-[rgba(224,99,99,0.5)] rounded px-3 py-2 text-base"
          />
          <datalist id="flavourOptions">
            {sampleFlavours.map((fl) => (
              <option key={fl} value={fl} />
            ))}
          </datalist>
        </div>

        <div>
          <label className="text-[rgba(224,99,99,0.85)] font-semibold text-base">Discount (%)</label>
          <input
            type="number"
            name="discount"
            value={formData.discount}
            onChange={handleChange}
            className="w-full border border-[rgba(224,99,99,0.5)] rounded px-3 py-2 text-base"
          />
        </div>

        <div className="flex items-center mt-6">
          <input
            type="checkbox"
            name="available"
            checked={formData.available}
            onChange={handleChange}
            className="mr-2 h-5 w-5"
          />
          <span className="text-[rgba(224,99,99,0.85)] font-semibold text-base">
            {formData.available ? 'In Stock' : 'Out of Stock'}
          </span>
        </div>

        <div className="md:col-span-2 text-center mt-6">
          <button
            type="submit"
            className="bg-[rgba(224,99,99,0.85)] hover:bg-[rgba(224,99,99,1)] text-white px-6 py-2 rounded-full shadow-md transition duration-200 text-base"
          >
            {editCake ? 'Update Cake' : 'Add Cake'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddCakeForm;