export default function CheckoutPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Left Column: Checkout Form */}
        <div className="flex flex-col gap-8">
          {/* Stepper */}
          <div className="flex flex-wrap gap-2">
            <span className="text-primary text-base font-medium">Shipping</span>
            <span className="text-subtle-text-light dark:text-subtle-text-dark text-base font-medium">/</span>
            <span className="text-subtle-text-light dark:text-subtle-text-dark text-base font-medium">Payment</span>
            <span className="text-subtle-text-light dark:text-subtle-text-dark text-base font-medium">/</span>
            <span className="text-subtle-text-light dark:text-subtle-text-dark text-base font-medium">Review</span>
          </div>

          {/* Shipping Address */}
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-3">
              <h2 className="text-3xl font-bold leading-tight tracking-tight">Shipping Address</h2>
              <p className="text-subtle-text-light dark:text-subtle-text-dark text-base">Please enter your shipping details.</p>
            </div>
            <div className="flex flex-col gap-4">
              <div className="flex flex-col">
                <label className="text-base font-medium mb-2" htmlFor="email">Email Address</label>
                <input
                  className="form-input w-full rounded-lg focus:outline-0 focus:ring-2 focus:ring-primary/50 border border-border-light dark:border-border-dark bg-background-light dark:bg-background-dark h-12 px-4"
                  id="email"
                  placeholder="Enter your email"
                  type="email"
                />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex flex-col">
                  <label className="text-base font-medium mb-2" htmlFor="first-name">First Name</label>
                  <input
                    className="form-input w-full rounded-lg focus:outline-0 focus:ring-2 focus:ring-primary/50 border border-border-light dark:border-border-dark bg-background-light dark:bg-background-dark h-12 px-4"
                    id="first-name"
                    placeholder="Enter your first name"
                    type="text"
                  />
                </div>
                <div className="flex flex-col">
                  <label className="text-base font-medium mb-2" htmlFor="last-name">Last Name</label>
                  <input
                    className="form-input w-full rounded-lg focus:outline-0 focus:ring-2 focus:ring-primary/50 border border-border-light dark:border-border-dark bg-background-light dark:bg-background-dark h-12 px-4"
                    id="last-name"
                    placeholder="Enter your last name"
                    type="text"
                  />
                </div>
              </div>
              <div className="flex flex-col">
                <label className="text-base font-medium mb-2" htmlFor="address">Address</label>
                <input
                  className="form-input w-full rounded-lg focus:outline-0 focus:ring-2 focus:ring-primary/50 border border-border-light dark:border-border-dark bg-background-light dark:bg-background-dark h-12 px-4"
                  id="address"
                  placeholder="Street Address"
                  type="text"
                />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="flex flex-col">
                  <label className="text-base font-medium mb-2" htmlFor="city">City</label>
                  <input
                    className="form-input w-full rounded-lg focus:outline-0 focus:ring-2 focus:ring-primary/50 border border-border-light dark:border-border-dark bg-background-light dark:bg-background-dark h-12 px-4"
                    id="city"
                    placeholder="Your City"
                    type="text"
                  />
                </div>
                <div className="flex flex-col">
                  <label className="text-base font-medium mb-2" htmlFor="state">State</label>
                  <input
                    className="form-input w-full rounded-lg focus:outline-0 focus:ring-2 focus:ring-primary/50 border border-border-light dark:border-border-dark bg-background-light dark:bg-background-dark h-12 px-4"
                    id="state"
                    placeholder="Your State"
                    type="text"
                  />
                </div>
                <div className="flex flex-col">
                  <label className="text-base font-medium mb-2" htmlFor="zip">ZIP Code</label>
                  <input
                    className="form-input w-full rounded-lg focus:outline-0 focus:ring-2 focus:ring-primary/50 border border-border-light dark:border-border-dark bg-background-light dark:bg-background-dark h-12 px-4"
                    id="zip"
                    placeholder="ZIP Code"
                    type="text"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Shipping Method */}
          <div className="flex flex-col gap-4">
            <h3 className="text-2xl font-bold">Shipping Method</h3>
            <div className="space-y-4">
              <label className="flex items-center p-4 border rounded-lg cursor-pointer bg-surface-light dark:bg-surface-dark border-primary ring-2 ring-primary/50">
                <input checked className="form-radio text-primary focus:ring-primary" name="shipping" type="radio" readOnly />
                <div className="ml-4 flex justify-between w-full">
                  <span className="font-medium">Standard Shipping</span>
                  <span className="font-bold">$5.00</span>
                </div>
              </label>
              <label className="flex items-center p-4 border rounded-lg cursor-pointer bg-surface-light dark:bg-surface-dark border-border-light dark:border-border-dark hover:border-primary/70">
                <input className="form-radio text-primary focus:ring-primary" name="shipping" type="radio" />
                <div className="ml-4 flex justify-between w-full">
                  <span className="font-medium">Express Shipping</span>
                  <span className="font-bold">$15.00</span>
                </div>
              </label>
            </div>
          </div>

          <div className="flex items-center justify-between mt-6">
            <a className="text-primary font-medium hover:underline" href="/cart">← Return to Cart</a>
            <button className="bg-primary text-white font-bold py-3 px-6 rounded-lg hover:opacity-90 transition-opacity">
              Continue to Payment
            </button>
          </div>
        </div>

        {/* Right Column: Order Summary */}
        <div className="bg-surface-light dark:bg-surface-dark p-6 lg:p-8 rounded-xl border border-border-light dark:border-border-dark h-fit sticky top-12">
          <h2 className="text-2xl font-bold mb-6">Your Order</h2>
          <div className="space-y-4 mb-6">
            <div className="flex justify-between text-subtle-text-light dark:text-subtle-text-dark">
              <span>Subtotal</span>
              <span>$430.00</span>
            </div>
            <div className="flex justify-between text-subtle-text-light dark:text-subtle-text-dark">
              <span>Shipping</span>
              <span>$5.00</span>
            </div>
            <div className="flex justify-between text-subtle-text-light dark:text-subtle-text-dark">
              <span>Taxes</span>
              <span>$35.10</span>
            </div>
          </div>
          <div className="border-t border-border-light dark:border-border-dark my-6"></div>
          <div className="flex justify-between items-center">
            <span className="text-lg font-bold">Total</span>
            <span className="text-2xl font-black">$470.10</span>
          </div>
        </div>
      </div>
    </div>
  );
}
