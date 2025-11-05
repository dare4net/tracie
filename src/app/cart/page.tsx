"use client";

import Link from "next/link";
import { Minus, Plus, Trash2, ArrowLeft } from "lucide-react";

const cartItems = [
  {
    id: 1,
    name: "Classic Trench Coat",
    color: "Black",
    size: "M",
    price: 180,
    quantity: 1,
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCESzI8uvXhAdLFDNhlb5C2HiWF3nwJHmXPYRS_Af3btPCFh8O-ROSB653kS1Kijy3CGUlEPhbjg2c5VdNlFkz7yb6Zg9DaC3lHiR7FuG7Pd5q30AdiI2eiUx019TKR43VOxM60MR0wPKdaXtQCBwJfZT0cPQbsIA4k8WgLbjiRYGpTJbRQ-VTd8VgmIpqRnVpnuuDVWmEen5qvimBGdAC6Ta-q2ibH6nbVwIR2Nwv4BATqd8xaMr0k5qITVg208XJH4cATtP2SkPw",
  },
  {
    id: 2,
    name: "Leather Ankle Boots",
    color: "Black",
    size: "8",
    price: 250,
    quantity: 1,
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCjgEkWGR-gTNHwnHCZyoJoK9KDOtU4ctxIY_8kYDwEpvSbRTr8cvQzPAbjIq2Wpm96J7BQHYQ7FcPOhVR6yNCw17loDQUhUzKxS0ugfr-J5MQ4WkcYHPJbUMe-TA72Bqc2OXQbn4AVlPmoB5M379m5HHeMoXJA-0IDw-Pmc-QvgCKR5IFpIPlqfjnGtnjcSqyTbsOOKp_6MldcgZfviD3amEd4d0SDWRTseDrTVNjOTMETO4IOjYKQp55yegfotV3i692nRO_hw1c",
  },
];

export default function CartPage() {
  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const shipping = 10;
  const taxes = subtotal * 0.0817;
  const total = subtotal + shipping + taxes;

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
      {/* Breadcrumbs */}
      <div className="flex flex-wrap gap-2 mb-6">
        <Link href="/" className="text-subtle-text-light dark:text-subtle-text-dark text-sm font-medium leading-normal hover:text-primary">
          Home
        </Link>
        <span className="text-subtle-text-light dark:text-subtle-text-dark text-sm font-medium leading-normal">/</span>
        <span className="text-sm font-medium leading-normal">Shopping Bag</span>
      </div>

      {/* Page Heading */}
      <div className="flex flex-wrap justify-between items-baseline gap-3 mb-8">
        <h1 className="text-4xl font-black leading-tight tracking-[-0.033em]">My Bag</h1>
        <p className="text-subtle-text-light dark:text-subtle-text-dark">({cartItems.length} items)</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 xl:gap-12">
        {/* Left Column: Item List */}
        <div className="lg:col-span-2 flex flex-col gap-4">
          <div className="divide-y divide-border-light dark:divide-border-dark rounded-xl bg-surface-light dark:bg-surface-dark shadow-sm">
            {cartItems.map((item) => (
              <div key={item.id} className="flex flex-col sm:flex-row gap-4 px-4 py-6 justify-between items-start">
                <div className="flex items-start gap-4 w-full">
                  <div
                    className="bg-center bg-no-repeat bg-cover rounded-lg h-24 w-24 sm:h-28 sm:w-28 flex-shrink-0"
                    style={{ backgroundImage: `url("${item.image}")` }}
                  ></div>
                  <div className="flex flex-1 flex-col justify-center">
                    <p className="text-base font-bold leading-normal">{item.name}</p>
                    <p className="text-sm font-normal leading-normal text-subtle-text-light dark:text-subtle-text-dark mt-1">
                      Color: {item.color}, Size: {item.size}
                    </p>
                    <div className="flex items-center gap-2 mt-3 sm:hidden">
                      <button className="flex h-7 w-7 items-center justify-center rounded-full bg-border-light dark:bg-border-dark cursor-pointer hover:bg-primary/20 transition-colors">
                        <Minus className="h-4 w-4" />
                      </button>
                      <input
                        className="w-6 p-0 text-center bg-transparent focus:outline-0 focus:ring-0 border-none text-base font-medium"
                        type="number"
                        value={item.quantity}
                        readOnly
                      />
                      <button className="flex h-7 w-7 items-center justify-center rounded-full bg-border-light dark:bg-border-dark cursor-pointer hover:bg-primary/20 transition-colors">
                        <Plus className="h-4 w-4" />
                      </button>
                    </div>
                    <p className="text-base font-medium leading-normal mt-3 sm:mt-4">${item.price.toFixed(2)}</p>
                  </div>
                </div>
                <div className="hidden sm:flex shrink-0 items-center gap-6">
                  <div className="flex items-center gap-2">
                    <button className="flex h-7 w-7 items-center justify-center rounded-full bg-border-light dark:bg-border-dark cursor-pointer hover:bg-primary/20 transition-colors">
                      <Minus className="h-4 w-4" />
                    </button>
                    <input
                      className="w-6 p-0 text-center bg-transparent focus:outline-0 focus:ring-0 border-none text-base font-medium"
                      type="number"
                      value={item.quantity}
                      readOnly
                    />
                    <button className="flex h-7 w-7 items-center justify-center rounded-full bg-border-light dark:bg-border-dark cursor-pointer hover:bg-primary/20 transition-colors">
                      <Plus className="h-4 w-4" />
                    </button>
                  </div>
                  <button className="text-subtle-text-light dark:text-subtle-text-dark hover:text-primary transition-colors">
                    <Trash2 className="h-5 w-5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
          <Link href="/shop" className="inline-flex items-center gap-2 text-primary font-medium text-sm self-start mt-4 group hover:underline">
            <ArrowLeft className="h-4 w-4 group-hover:-translate-x-1 transition-transform" />
            Continue Shopping
          </Link>
        </div>

        {/* Right Column: Order Summary */}
        <div className="lg:col-span-1">
          <div className="sticky top-24 p-6 bg-surface-light dark:bg-surface-dark rounded-xl shadow-sm">
            <h2 className="text-xl font-bold mb-4">Order Summary</h2>
            <div className="space-y-3">
              <div className="flex justify-between items-center text-subtle-text-light dark:text-subtle-text-dark">
                <span>Subtotal</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between items-center text-subtle-text-light dark:text-subtle-text-dark">
                <span>Shipping</span>
                <span>${shipping.toFixed(2)}</span>
              </div>
              <div className="flex justify-between items-center text-subtle-text-light dark:text-subtle-text-dark">
                <span>Taxes</span>
                <span>${taxes.toFixed(2)}</span>
              </div>
            </div>
            <div className="border-t border-border-light dark:border-border-dark my-4"></div>
            <div className="flex justify-between items-center text-lg font-bold">
              <span>Total</span>
              <span>${total.toFixed(2)}</span>
            </div>
            <div className="mt-6">
              <label className="block text-sm font-medium text-subtle-text-light dark:text-subtle-text-dark mb-1" htmlFor="promo-code">
                Promo Code
              </label>
              <div className="flex gap-2">
                <input
                  className="form-input flex-grow rounded-lg bg-border-light dark:bg-border-dark border-none focus:ring-2 focus:ring-primary/50 placeholder:text-subtle-text-light dark:placeholder:text-subtle-text-dark"
                  id="promo-code"
                  placeholder="Enter code"
                  type="text"
                />
                <button className="px-4 py-2 rounded-lg bg-primary/20 text-primary font-bold text-sm hover:bg-primary/30 transition-colors">
                  Apply
                </button>
              </div>
            </div>
            <div className="mt-8 flex flex-col gap-3">
              <Link href="/checkout" className="w-full bg-primary text-white font-bold py-3 rounded-lg hover:opacity-90 transition-opacity text-center">
                Proceed to Checkout
              </Link>
              <button className="w-full bg-border-light dark:bg-border-dark font-bold py-3 rounded-lg hover:bg-primary/20 transition-colors">
                Pay with PayPal
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
