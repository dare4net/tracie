"use client";

import Link from "next/link";
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const products = [
  { id: 1, name: "The Silk Slip Dress", price: 198, image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDNXLAEmqzDTESiF9NYPMByffM8SQV773nX5SfPzXwVu1TwSBu5DSETLTWa3ex9wuTmppgbyFOQE8nDz7e8UDz7d7DwO0fIfoaDAfWqHe4G0NRVhbl246WmysjZGAu5eVUW_zDs5vmpTPELH7EpCjQHW2lRQLWiBM1v8VovP8yXhJ3iUhI9Y6cfVHU2XzlXm4Q20KUTQLggwMabqQswvGHt40vhw0s1dQERgivafDTZRv29TNC0M2OVffshfDeKd1TXt_R6qfkMn8k" },
  { id: 2, name: "Classic Trench Coat", price: 350, image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCbZiYCXmFexM227Oh0ZgMDLvzYOw1ZN8lqXbRJ1Q0uv_PrXvFXCYZ7EY1685PcDJndzIydIRfvxD5QpHZCqANYr3K9-JxTwK2OyU8hxqeKEFOk3r0QgBmfFNUL4Tbtdt0MpE3j_H_obY3wJOB7fUHa5faW-H6yFn1yZppKKskKtxTJLDRX_5phwsN8L0psv2-_EJIoOPkHidkhlB-SSz7580F0uI6arvsQ_s4zwcbvK-Ll0dsdU8xHiikH_4HKOuusMu82ogctUS8" },
  { id: 3, name: "High-Waisted Denim", price: 120, image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBKwLYK-jIPRnd1hIwIK_z03JXruZWStBigwLxa7gvuYffeQFNOjPaOjByFuyEjSh0kRNF86wjXw9lkB6xFZLfCiQbkeBKjesaa4rMa7tuMnsHFGKTPBgMsyr4EVecq9xbN8LtU95xFEYd1WXI2m7Bh5weydlLniIUgxDaGhc-Z6v9EhB_zi24TlL8dadZe1lT9D8B_4qdhYDDtIDLisS2YW9BpdyWnqYPjmKHQYg0NiOYOBQ-L6DzpaM4IzC6c3tJcvgi0XbDaSPc" },
  { id: 4, name: "Cashmere Crewneck", price: 250, image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCcFDn0zFLbLnULxxN3kbp9hDZAz9QxDcxz0nfxV_TDcOgTSnj9V2gOox_hQ4Qox6BzecQx8YGE9IPX9-AcknqF4gcWjofmu9l9ZEDlk2c7AqIomI6ufuNfdzFIeBvQOPP4kY0ftNiMffQ68c0k7xj89YniFSZ74I1mYnsgIPhPvM9osE4nZhapvsrr59Tvp1-39FgeK0Dw0V_rA0H5Kt1tITa4U9w7GBiXJLldoQsSqFaz8MuBi_tVug3xBrmmo2IQxUj8U7CIOOE" },
  { id: 5, name: "Leather Ankle Boots", price: 280, image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCye4Ozwj4Fr8ghOttmXaeACYEug-8OYWFXi9t880khvoj8IGB1Hc0s2IIo2HU_sr9nV3lVZhq2S_VrmlDEpFxHZwBkSZ0bGL-_ClZiWlIC0cpmpNLKREWJf9b-ajojlzJC7gIx4ouNLTxLyD67rVL5HXqxWhMqARqvLhCIli46LhJ3sS9FtmvSJ0B5gG7PFI8ljx1erXGWU_77ABVI5OB6vZqUgV-ReXj810swp6zQObegDZILNlyQgl5MFSHJobp0BCGGIyTU5-I" },
  { id: 6, name: "Floral Maxi Skirt", price: 150, image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCrgrrO7LXzreK7IMAVid-cuoJUjfTFi4h0OsWVCE4poOG5EnF1PTFDMNGVCncKJx3vuyk1iEvWjs4LHkI98gXticbzLSrS14P0v1deQ8s-Ik166COdImGyC_Q-SuREqVrRh0ggJQVLbcFWmwT7AiWwHd00UJMk92z6lyBOiz1VMonYHuPnZkJT5p-ebl2S42bIx4VhVeNpFUjAlRj6_mg3ScolaSP9xOe7PFDwp_frzLKBX4KmszkGP-lj1LQv2CjDHXT4Cxc-ZcA" },
  { id: 7, name: "Oversized Blazer", price: 220, image: "https://lh3.googleusercontent.com/aida-public/AB6AXuA3AfbTksIhJc9pA7eJIAtsFvnepp2leTv3ywckLOZh9DbpIDhTMZ_oyofXNiX1HpfKWKiWFNNqcQVd8ORgH3f05PpfvQzxZUqbqCptnGNMzsGfkpHrlc1kldMPf3xwAQnIwDZ_yyIcvXAT72tzSh8wiO3G9yo5SxRJ14JDWotslCeIKZEyJrftYjVJWqzwKTENlB2l3lXX4xeYTEy-eYXufdK0E3KpF1blfeBS4SSdBXEjILi2u0dSfb8oB8OBw5UYa3kOJWzEiKc" },
  { id: 8, name: "Ribbed Knit Top", price: 88, image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCozRMHqIw6igItiqEZf8fN-LmewzOPNDYRywaQvjjoHS1sEuPT6PgeWAo3P40IhNzdxx2yJahuTQI4sK9gQCd3Gi3YILFXwPzvi8xYwjpn_qEoNnawxM8L5rDbFFy4ofAbOXWR1HfJ12JM2oDlm5xkNOOt3_AsGuWG8xdd3z_1feITFscqJpMhSL4aA0LXe78GKo9I-e249DuGFIVwDgAegvBxMPv6H4vwp8IAT9F-ChmhSv6DIFSdTqClbV1VtiMjhrxNv2HQKq0" },
];

export default function ShopPage() {
  const [selectedSize, setSelectedSize] = useState("S");
  const sizes = ["XS", "S", "M", "L", "XL"];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col gap-6 lg:flex-row lg:gap-8">
        {/* Sidebar */}
        <aside className="w-full lg:w-64 xl:w-72">
          <div className="sticky top-28 space-y-6">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-bold">Filters</h3>
              <button className="text-sm font-medium text-primary hover:underline">Clear All</button>
            </div>
            <div className="space-y-4">
              <h4 className="font-semibold">Category</h4>
              <div className="space-y-2">
                <label className="flex items-center gap-2 text-sm">
                  <input className="h-4 w-4 rounded border-subtle-text-light/50 bg-transparent text-primary focus:ring-primary/50" type="checkbox" />
                  <span>All Dresses</span>
                </label>
                <label className="flex items-center gap-2 text-sm">
                  <input className="h-4 w-4 rounded border-subtle-text-light/50 bg-transparent text-primary focus:ring-primary/50" type="checkbox" />
                  <span>Blazers &amp; Jackets</span>
                </label>
                <label className="flex items-center gap-2 text-sm">
                  <input checked className="h-4 w-4 rounded border-subtle-text-light/50 bg-transparent text-primary focus:ring-primary/50" type="checkbox" readOnly />
                  <span>Tops</span>
                </label>
                <label className="flex items-center gap-2 text-sm">
                  <input className="h-4 w-4 rounded border-subtle-text-light/50 bg-transparent text-primary focus:ring-primary/50" type="checkbox" />
                  <span>Jeans</span>
                </label>
              </div>
            </div>
            <div className="h-px w-full bg-border-light dark:bg-border-dark"></div>
            <div className="space-y-4">
              <h4 className="font-semibold">Size</h4>
              <div className="flex flex-wrap gap-2">
                {sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`flex h-9 w-9 items-center justify-center rounded-lg border text-sm ${
                      selectedSize === size
                        ? "border-primary bg-primary/20 font-bold text-primary"
                        : "border-border-light dark:border-border-dark hover:border-primary"
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>
            <div className="h-px w-full bg-border-light dark:bg-border-dark"></div>
            <div className="space-y-4">
              <h4 className="font-semibold">Color</h4>
              <div className="flex flex-wrap gap-3">
                <button className="h-6 w-6 rounded-full border-2 border-primary/50" style={{ backgroundColor: "#fff" }}></button>
                <button className="h-6 w-6 rounded-full" style={{ backgroundColor: "#000" }}></button>
                <button className="h-6 w-6 rounded-full" style={{ backgroundColor: "#7c3aed" }}></button>
                <button className="h-6 w-6 rounded-full" style={{ backgroundColor: "#22c55e" }}></button>
                <button className="h-6 w-6 rounded-full" style={{ backgroundColor: "#ef4444" }}></button>
                <button className="h-6 w-6 rounded-full" style={{ backgroundColor: "#f97316" }}></button>
              </div>
            </div>
            <div className="h-px w-full bg-border-light dark:bg-border-dark"></div>
            <div className="space-y-4">
              <h4 className="font-semibold">Price Range</h4>
              <input className="w-full" max="1000" min="0" type="range" defaultValue="500" />
              <div className="flex justify-between text-sm text-subtle-text-light dark:text-subtle-text-dark">
                <span>$0</span>
                <span>$1000</span>
              </div>
            </div>
          </div>
        </aside>

        {/* Product Grid Section */}
        <div className="flex-1">
          {/* Breadcrumbs */}
          <div className="flex flex-wrap gap-2">
            <Link href="/" className="text-sm font-medium text-subtle-text-light dark:text-subtle-text-dark hover:text-primary">
              Home
            </Link>
            <span className="text-sm font-medium text-subtle-text-light dark:text-subtle-text-dark">/</span>
            <Link href="/shop" className="text-sm font-medium text-subtle-text-light dark:text-subtle-text-dark hover:text-primary">
              Women
            </Link>
            <span className="text-sm font-medium text-subtle-text-light dark:text-subtle-text-dark">/</span>
            <span className="text-sm font-medium">Dresses</span>
          </div>

          {/* Page Heading */}
          <div className="my-6 flex flex-wrap items-end justify-between gap-4">
            <div className="flex flex-col gap-1">
              <p className="text-4xl font-black tracking-[-0.033em]">Women's Dresses</p>
              <p className="text-base text-subtle-text-light dark:text-subtle-text-dark">Showing {products.length} products</p>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-sm font-medium">Sort by:</span>
              <select className="rounded-lg border-none bg-border-light dark:bg-border-dark py-1.5 pl-3 pr-8 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-primary/50">
                <option>Newest</option>
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
                <option>Most Popular</option>
              </select>
            </div>
          </div>

          {/* Product Grid */}
          <div className="grid grid-cols-2 gap-4 md:grid-cols-3 xl:grid-cols-4">
            {products.map((product) => (
              <div key={product.id} className="group relative flex flex-col gap-3">
                <Link href={`/products/${product.id}`}>
                  <div className="relative w-full overflow-hidden rounded-lg bg-border-light dark:bg-border-dark">
                    <div
                      className="w-full bg-cover bg-center bg-no-repeat aspect-[3/4]"
                      style={{ backgroundImage: `url("${product.image}")` }}
                    ></div>
                    <button className="absolute right-2 top-2 flex h-8 w-8 items-center justify-center rounded-full bg-background-light/70 dark:bg-background-dark/70 opacity-0 transition-opacity group-hover:opacity-100">
                      <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                      </svg>
                    </button>
                  </div>
                  <div>
                    <p className="text-base font-medium">{product.name}</p>
                    <p className="text-sm text-subtle-text-light dark:text-subtle-text-dark">${product.price}</p>
                  </div>
                </Link>
              </div>
            ))}
          </div>

          {/* Pagination */}
          <div className="mt-12 flex items-center justify-center gap-2">
            <button className="flex h-10 w-10 items-center justify-center rounded-lg bg-border-light dark:bg-border-dark text-subtle-text-light dark:text-subtle-text-dark hover:bg-primary/20 hover:text-primary">
              <ChevronLeft className="h-6 w-6" />
            </button>
            <button className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-sm font-bold text-white">1</button>
            <button className="flex h-10 w-10 items-center justify-center rounded-lg text-sm font-bold hover:bg-primary/20 hover:text-primary">2</button>
            <button className="flex h-10 w-10 items-center justify-center rounded-lg text-sm font-bold hover:bg-primary/20 hover:text-primary">3</button>
            <span className="text-sm font-bold">...</span>
            <button className="flex h-10 w-10 items-center justify-center rounded-lg text-sm font-bold hover:bg-primary/20 hover:text-primary">12</button>
            <button className="flex h-10 w-10 items-center justify-center rounded-lg hover:bg-primary/20 hover:text-primary">
              <ChevronRight className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
