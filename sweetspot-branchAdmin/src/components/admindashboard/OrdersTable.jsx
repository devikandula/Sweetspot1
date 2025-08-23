const OrdersTable = () => {
  const orders = [
    { id: 1, customer: 'John Doe', product: 'Chocolate Cake', status: 'Delivered' },
    { id: 2, customer: 'Jane Smith', product: 'Vanilla Cupcake', status: 'Pending' },
  ];

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white dark:bg-gray-800 border rounded-lg">
        <thead className="bg-primary text-white">
          <tr>
            <th className="px-6 py-3">Order ID</th>
            <th className="px-6 py-3">Customer</th>
            <th className="px-6 py-3">Product</th>
            <th className="px-6 py-3">Status</th>
          </tr>
        </thead>
        <tbody>
          {orders.map(order => (
            <tr key={order.id} className="text-center border-b dark:border-gray-600">
              <td className="px-6 py-4">{order.id}</td>
              <td className="px-6 py-4">{order.customer}</td>
              <td className="px-6 py-4">{order.product}</td>
              <td className="px-6 py-4">{order.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default OrdersTable;
