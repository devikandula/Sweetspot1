import { useState } from "react";
import ProgressBar from "../components/ProgressBar.jsx";
import AddressSection from "../components/AddressSection.jsx";
import BillingSection from "../components/BillingSection.jsx";
import PaymentSection from "../components/PaymentSection.jsx";
import OrderReview from "../components/OrderReview.jsx";
import { mockCakeItems, mockUserProfile } from "../data/mockData.js";
import { ArrowLeft } from "lucide-react";
import DeliverySteps from "../components/DeliverySteps.jsx";
import CheckOutHeader from "../components/CheckOutHeader.jsx";
import OrderPopup from "../components/OrderPopup.jsx";
import { motion } from "framer-motion";

export default function CheckoutPage() {
  const [userProfile, setUserProfile] = useState(mockUserProfile);
  const [shippingAddress, setShippingAddress] = useState({
    street: mockUserProfile.address.street,
    city: mockUserProfile.address.city,
    zipCode: mockUserProfile.address.zipCode,
  });
  const [billingAddress, setBillingAddress] = useState({
    name: mockUserProfile.firstName + " " + mockUserProfile.lastName,
    email: mockUserProfile.email,
    phone: mockUserProfile.phone,
    street: mockUserProfile.address.street,
    city: mockUserProfile.address.city,
    zipCode: mockUserProfile.address.zipCode,
  });

  const [paymentMethod, setPaymentMethod] = useState("credit-card");
  const [sameAsShipping, setSameAsShipping] = useState(true);
  const [isEditing, setIsEditing] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);
  const [cartTotal, setCartTotal] = useState(0);
  const [showOrderModal, setShowOrderModal] = useState(false);

  const handleShippingChange = (field, value) => {
    const updatedShipping = { ...shippingAddress, [field]: value };
    setShippingAddress(updatedShipping);
    if (sameAsShipping) {
      setBillingAddress(updatedShipping);
    }
  };

  const handleBillingChange = (field, value) => {
    setBillingAddress((prev) => ({ ...prev, [field]: value }));
  };

  const handleSameAsShippingChange = (checked) => {
    setSameAsShipping(checked);
    if (checked) {
      setBillingAddress(shippingAddress);
    }
  };

  const handleToggleEdit = () => {
    setIsEditing(!isEditing);
  };

  const handleFieldChange = (field, value) => {
    setUserProfile((prev) => ({ ...prev, [field]: value }));
  };

  const goToNextStep = () => {
    setCurrentStep((prev) => prev + 1);
  };

  const goToPrevStep = () => {
    setCurrentStep((prev) => prev - 1);
  };

  const handlePayment = () => {
    setShowOrderModal(true); // Show order confirmation popup
  };

  const handleCloseOrderModal = () => {
    setShowOrderModal(false);
    // Optionally redirect to home page or orders page
    // window.location.href = '/';
  };

  const isStep1Valid = () => {
    const shippingValid =
      userProfile.firstName &&
      userProfile.lastName &&
      userProfile.email &&
      userProfile.phone &&
      shippingAddress.street &&
      shippingAddress.city &&
      shippingAddress.zipCode;

    const billingValid = sameAsShipping
      ? true
      : billingAddress.name &&
        billingAddress.email &&
        billingAddress.phone &&
        billingAddress.street &&
        billingAddress.city &&
        billingAddress.zipCode;

    return shippingValid && billingValid;
  };

  const orderId = "ORD" + Math.floor(Math.random() * 1000000);

  // Prepare order data for the popup
  const orderData = {
    orderId,
    customerName: `${userProfile.firstName} ${userProfile.lastName}`,
    email: userProfile.email,
    phone: userProfile.phone,
    shippingAddress,
    billingAddress,
    paymentMethod,
    cartItems: mockCakeItems,
    total: cartTotal,
    orderDate: new Date().toLocaleDateString(),
    estimatedDelivery: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toLocaleDateString() // 7 days from now
  };

  return (
    <div className="min-h-screen bg-white flex flex-col font-parastoo">
      <CheckOutHeader />

      <div className="flex flex-1 overflow-hidden">
        {/* Left Side */}
        <div className="w-[40%] bg-white p-6 pl-24 flex items-center justify-center pt-8">
          <div className="sticky top-20 w-full">
            <DeliverySteps />
          </div>
        </div>

        {/* Right Side */}
        <div className="w-[60%] overflow-y-auto slim-scrollbar px-12 pr-24 pl-12 py-8 bg-white">
          <div className="max-w-5xl mx-auto space-y-8">
            <ProgressBar currentStep={currentStep} />

            <div className="space-y-6">
              {currentStep === 1 && (
                <div className="space-y-6">
                  <AddressSection
                    userProfile={userProfile}
                    shippingAddress={shippingAddress}
                    isEditing={isEditing}
                    onEditToggle={handleToggleEdit}
                    onFieldChange={handleFieldChange}
                  />
                  <BillingSection
                    billingDetails={billingAddress}
                    onBillingChange={handleBillingChange}
                    sameAsShipping={sameAsShipping}
                    onSameAsShippingChange={handleSameAsShippingChange}
                  />
                </div>
              )}

              {currentStep === 2 && (
                <OrderReview cartItems={mockCakeItems} onTotalChange={setCartTotal} />
              )}

              {currentStep === 3 && (
                <PaymentSection
                  paymentMethod={paymentMethod}
                  onPaymentMethodChange={(method) => {
                    setPaymentMethod(method);
                    if (method === "cod") {
                      handlePayment(); // Auto confirm for COD
                    }
                  }}
                  onPayment={handlePayment}
                  total={cartTotal}
                />
              )}

              {/* Navigation Buttons */}
              <div className="flex justify-between pt-6">
                {currentStep > 1 && (
                  <button
                    onClick={goToPrevStep}
                    className="flex items-center gap-2 px-4 py-2 rounded-lg font-bold text-white bg-[rgba(224,99,99,0.85)] hover:bg-[rgba(224,99,99,0.65)]"
                  >
                    <ArrowLeft className="w-4 h-4" />
                    Back
                  </button>
                )}
                {currentStep < 3 && (
                  <button
                    onClick={() => {
                      if (currentStep === 1 && !isStep1Valid()) {
                        alert("Please fill out all required fields.");
                        return;
                      }
                      goToNextStep();
                    }}
                    disabled={currentStep === 1 && !isStep1Valid()}
                    className={`px-4 py-2 rounded-lg font-bold text-white ${
                      currentStep === 1 ? "ml-auto" : ""
                    } ${
                      currentStep === 1 && !isStep1Valid()
                        ? "bg-[rgba(224,99,99,0.4)] cursor-not-allowed"
                        : "bg-[rgba(224,99,99,0.85)] hover:bg-[rgba(224,99,99,0.65)]"
                    }`}
                  >
                    {currentStep === 1 ? "Proceed to Review" : "Proceed to Payment"}
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Order Confirmation Modal */}
      <OrderPopup 
        isOpen={showOrderModal}
        onClose={handleCloseOrderModal}
      />
    </div>
  );
}