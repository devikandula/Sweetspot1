import React, { useState } from "react";

const initialOffers = [
  {
    title: "SWEET10",
    description: "Get 10% off on all cakes above ₹500.",
    validTill: "2025-07-31",
  },
  {
    title: "BIRTHDAY25",
    description: "Flat 25% off on birthday cakes. Use once per account.",
    validTill: "2025-08-05",
  },
  {
    title: "FREESHIP",
    description: "Enjoy free delivery on orders above ₹399.",
    validTill: "2025-08-15",
  },
  {
    title: "WELCOME50",
    description: "50% off for new customers on first purchase.",
    validTill: "2025-08-31",
  },
  {
    title: "CHOCOLATELOVER",
    description: "15% off on chocolate cakes for a limited time.",
    validTill: "2025-09-10",
  },
  {
    title: "RAKHI2025",
    description: "Special 20% off for Rakhi orders.",
    validTill: "2025-08-19",
  },
  {
    title: "EXPIREDJUNE",
    description: "Old offer no longer valid.",
    validTill: "2024-06-10",
  },
];

const isExpired = (dateStr) => {
  const today = new Date();
  const offerDate = new Date(dateStr);
  return offerDate < today;
};

const formatDate = (dateStr) => {
  return new Date(dateStr).toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });
};

const Offers = () => {
  const [offers, setOffers] = useState(
    [...initialOffers].sort((a, b) => new Date(a.validTill) - new Date(b.validTill))
  );
  const [newOffer, setNewOffer] = useState({
    title: "",
    description: "",
    validTill: "",
  });
  const [editingIndex, setEditingIndex] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const openModal = (index = null) => {
    if (index !== null) {
      setNewOffer(offers[index]);
      setEditingIndex(index);
    } else {
      setNewOffer({ title: "", description: "", validTill: "" });
      setEditingIndex(null);
    }
    setShowModal(true);
  };

  const closeModal = () => {
    setNewOffer({ title: "", description: "", validTill: "" });
    setEditingIndex(null);
    setShowModal(false);
  };

  const handleSave = () => {
    const updated = [...offers];
    if (editingIndex !== null) {
      updated[editingIndex] = newOffer;
    } else {
      updated.push(newOffer);
    }
    setOffers(updated.sort((a, b) => new Date(a.validTill) - new Date(b.validTill)));
    closeModal();
  };

  const handleDelete = (index) => {
    const updated = [...offers];
    updated.splice(index, 1);
    setOffers(updated);
  };

  return (
    <div className="px-6 py-4">
      <h1 className="text-4xl font-semibold font-[Parastoo] text-[rgba(79,79,79,0.66)] mb-6">
        Offers & Coupons
      </h1>

      <button
        onClick={() => openModal()}
        className="mb-4 bg-[rgba(224,99,99,0.85)] hover:bg-[rgba(224,99,99,1)] text-white px-5 py-2 rounded-full shadow-md transition"
      >
        Add Offer
      </button>

      <div className="grid md:grid-cols-2 gap-4">
        {offers.map((offer, idx) => (
          <div
            key={idx}
            className={`p-5 rounded-xl shadow-md border ${
              isExpired(offer.validTill)
                ? "bg-gray-100 text-gray-400 border-gray-200"
                : "bg-white border-pink-100"
            }`}
          >
            <h3 className="text-lg font-semibold text-[rgba(224,99,99,0.85)]">
              {offer.title}
            </h3>
            <p className="mt-1 text-sm text-[rgba(87,84,84,0.7)]">
              {offer.description}
            </p>
            <p className="mt-2 text-sm">
              Valid Till: <strong>{formatDate(offer.validTill)}</strong>
            </p>
            <div className="mt-4 flex gap-3">
              <button
                onClick={() => openModal(idx)}
                className="text-blue-600 text-sm hover:underline"
              >
                Edit
              </button>
              <button
                onClick={() => handleDelete(idx)}
                className="text-red-500 text-sm hover:underline"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 z-40 bg-black/40 flex items-center justify-center">
          <div className="bg-white p-6 rounded-xl shadow-xl w-[90%] md:w-[400px]">
            <h2 className="text-xl font-semibold mb-4">
              {editingIndex !== null ? "Edit Offer" : "Add Offer"}
            </h2>
            <input
              type="text"
              placeholder="Offer Code (e.g., SWEET10)"
              className="w-full border border-gray-300 rounded-md p-2 mb-3"
              value={newOffer.title}
              onChange={(e) =>
                setNewOffer({ ...newOffer, title: e.target.value })
              }
            />
            <textarea
              placeholder="Description"
              className="w-full border border-gray-300 rounded-md p-2 mb-3"
              rows={3}
              value={newOffer.description}
              onChange={(e) =>
                setNewOffer({ ...newOffer, description: e.target.value })
              }
            />
            <input
              type="date"
              className="w-full border border-gray-300 rounded-md p-2 mb-4"
              value={newOffer.validTill}
              onChange={(e) =>
                setNewOffer({ ...newOffer, validTill: e.target.value })
              }
            />
            <div className="flex justify-end gap-4">
              <button
                onClick={closeModal}
                className="px-4 py-2 text-gray-600 hover:text-black"
              >
                Cancel
              </button>
              <button
                onClick={handleSave}
                className="bg-[rgba(224,99,99,0.85)] hover:bg-[rgba(224,99,99,1)] text-white px-5 py-2 rounded-md"
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

export default Offers;
