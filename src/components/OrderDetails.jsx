import React from 'react';

const OrderDetails = ({ orderData }) => {
  if (!orderData) {
    return (
      <div className="p-5 bg-red-100 text-red-700 rounded-xl font-parastoo">
        No order data found. Please enter a valid Order ID.
      </div>
    );
  }

  const { orderId, user, orderItems, cakes, orderMeta } = orderData;

  return (
    <div className="p-5 bg-sweetspot-alt1/10 border border-sweetspot-alt1/20 rounded-xl font-parastoo space-y-6">

      {/* Order Summary */}
      <div>
        <h4 className="text-xl font-semibold text-[rgba(79,79,79,0.9)] mb-1">📦 Order: <span className="text-sweetspot-main">{orderId}</span></h4>
        <ul className="text-sm text-sweetspot-text list-disc ml-4 space-y-1">
          <li><strong>Delivery Location:</strong> {orderMeta.orderLocation}</li>
          <li><strong>Status:</strong> {orderMeta.orderStatus}</li>
          <li><strong>Expected By:</strong> {orderMeta.orderDeadLine}</li>
        </ul>
      </div>

      {/* User Info */}
      <div>
        <h5 className="text-lg font-semibold text-[rgba(79,79,79,0.85)] mb-1">👤 Customer Information</h5>
        <ul className="text-sm text-sweetspot-text list-disc ml-4 space-y-1">
          <li><strong>Name:</strong> {user.userName}</li>
          <li><strong>Email:</strong> {user.userEmail}</li>
          <li><strong>User ID:</strong> {user.userId}</li>
        </ul>
      </div>

      {/* Cake Items */}
      <div>
        <h5 className="text-lg font-semibold text-[rgba(79,79,79,0.85)] mb-2">🎂 Cake Items in Order</h5>
        <div className="grid sm:grid-cols-2 gap-4">
          {orderItems.map((item, index) => {
            const cake = cakes.find(c => c.cakeId === item.cakeID);

            return (
              <div key={index} className="w-[600px] border border-sweetspot-alt2/30 bg-white p-4 rounded-md shadow-sm">
                <div className="flex items-start gap-4">
                  <img
                    src={cake.cakeImage}
                    alt={cake.cakeName}
                    className="w-40 h-40 object-cover rounded-md border border-gray-200"
                  />
                  <div className="text-left space-y-1">
                    <h6 className="font-bold text-sweetspot-main text-md">{cake.cakeName}</h6>
                    <p className="text-xs italic text-sweetspot-text">{cake.cakeFlavour}</p>
                    <p className="text-sm">Weight: <strong>{item.weight} kg</strong></p>
                    <p className="text-sm">Egg Option: <strong>{item.eggOption}</strong></p>
                    <p className="text-sm">Quantity: <strong>{item.quantity}</strong></p>
                    <p className="text-sm">Message: <em>"{item.messageOnCake}"</em></p>
                    <div className="text-xs text-sweetspot-text mt-2 space-y-1">
                      <p><strong>Ingredients:</strong> {cake.cakeIngredients.join(', ')}</p>
                      <p><strong>Tags:</strong> {cake.cakeTags.join(', ')}</p>
                      <p><strong>Available Options:</strong> {cake.cakeEggOptions.join(', ')}</p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

    </div>
  );
};

export default OrderDetails;
