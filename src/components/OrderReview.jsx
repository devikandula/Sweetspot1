import { useEffect } from "react";
import {
  BadgePercent,
  Truck,
  IndianRupee,
  Calculator,
  Percent,
} from "lucide-react";

export default function OrderReview({ cartItems, onTotalChange }) {
  const discount = 50;
  const shipping = 30;
  const tax = 18;

  const subtotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
  const total = subtotal - discount + shipping + tax;

  // ✅ This must be inside the component
  useEffect(() => {
    if (onTotalChange) {
      onTotalChange(total);
    }
  }, [total, onTotalChange]);

  


  return (
    <div className="bg-white p-8 rounded-3xl shadow-md max-w-4xl mx-auto font-parastoo border border-[rgba(224,99,99,0.2)]">
      {/* Quotation */}
      <p className="italic text-xl sm:text-2xl mb-8 text-center text-[rgba(224,99,99,0.85)]">
        “Every slice tells a story — savor the sweetness of your moments with
        Sweetspot.”
      </p>

      {/* Items list */}
      <div className="space-y-6">
        {cartItems.map((item) => (
          <div
            key={item.cakeId}
            className="flex gap-6 items-center border border-[rgba(224,99,99,0.2)] bg-white rounded-2xl p-4 shadow-sm"
          >
            <img
              src={item.cakeImage}
              alt={item.cakeName}
              className="w-28 h-28 object-cover rounded-lg border border-[rgba(224,99,99,0.3)]"
            />
            <div className="flex-1">
              <h3 className="text-2xl font-semibold text-[rgba(79,79,79,0.7)]">
                {item.cakeName}
              </h3>
              <p className="italic mb-1 text-[rgba(79,79,79,0.7)] text-md">
                {item.cakeDescription}
              </p>
              <p className="text-lg text-[rgba(79,79,79,0.7)]">
                Flavour:{" "}
                <span className="text-[rgba(224,99,99,0.85)] font-semibold text-md">
                  {item.cakeFlavour}
                </span>
              </p>
              <p className="text-lg text-[rgba(79,79,79,0.7)]">
                Egg Option:{" "}
                <span className="text-[rgba(224,99,99,0.85)] font-semibold text-md">
                  {item.cakeEggOptions?.length
                    ? item.cakeEggOptions.join(", ")
                    : "None"}
                </span>
              </p>
              <p className="mt-2 font-semibold text-[rgba(79,79,79,0.7)] text-md">
                Quantity: {item.quantity}
              </p>
            </div>
            <div className="text-right">
              <p className="mb-1 text-[rgba(79,79,79,0.7)] text-lg">Price</p>
              <p className="font-bold text-[rgba(224,99,99,0.85)] text-2xl">
                ₹{(item.price * item.quantity).toFixed(2)}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Summary section */}
      <div className="mt-10 pt-6 border-t border-[rgba(224,99,99,0.3)] space-y-4 text-[rgba(79,79,79,0.7)]">
        <div className="flex justify-between items-center text-xl font-semibold">
          <span className="flex items-center gap-2 text-[rgba(79,79,79,0.7)]">
            <Calculator className="w-5 h-5 text-[rgba(224,99,99,0.85)]" />
            Subtotal
          </span>
          <span className="text-[rgba(224,99,99,0.85)] font-semibold">
            ₹{subtotal.toFixed(2)}
          </span>
        </div>

        <div className="flex justify-between items-center text-xl font-semibold">
          <span className="flex items-center gap-2">
            <BadgePercent className="w-5 h-5 text-[rgba(224,99,99,0.85)]" />
            Discount
          </span>
          <span className="text-[rgba(224,99,99,0.85)]">− ₹{discount.toFixed(2)}</span>
        </div>

        <div className="flex justify-between items-center text-xl font-semibold">
          <span className="flex items-center gap-2">
            <Truck className="w-5 h-5 text-[rgba(224,99,99,0.85)]" />
            Shipping
          </span>
          <span className="text-[rgba(224,99,99,0.85)]">₹{shipping.toFixed(2)}</span>
        </div>

        <div className="flex justify-between items-center text-xl font-semibold">
          <span className="flex items-center gap-2">
            <Percent className="w-5 h-5 text-[rgba(224,99,99,0.85)]" />
            Tax
          </span>
          <span className="text-[rgba(224,99,99,0.85)]">₹{tax.toFixed(2)}</span>
        </div>

        <div className="flex justify-between text-3xl font-bold border-t pt-5 border-[rgba(224,99,99,0.3)] text-[rgba(224,99,99,0.85)]">
          <span className="flex items-center gap-3">
            <IndianRupee className="w-7 h-7" />
            Total
          </span>
          <span>₹{total.toFixed(2)}</span>
        </div>
      </div>
    </div>
  );
}