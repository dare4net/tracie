"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

const product = {
  id: 1,
  name: "The Allure Midi Dress",
  price: 249,
  description: "Crafted from pure silk, this piece is a testament to timeless elegance and modern sophistication. A versatile staple for any wardrobe.",
  images: [
    "https://lh3.googleusercontent.com/aida-public/AB6AXuDnOuQWPO2baIZSMA9X0M7oLcbJVVqACxrMeEqqB6wj8s9zR_o53ahcLscFrZsAhAE3e_ZVD5Qnw72X3NNnO6JhGN23q4Nh0iQoWXOEfzUE3K-D47xlmZ6AG0eMOxIV9hPDa-e_KAk__9fIc6gDS6-D7caYlGoELmCm-V-FtbMJ_0rTxcl_wgrOsyJSLU-Bed6bmrEPRdiPLtFJ63irEgN5m-_7iyeqBUfH20nnYEOUDgcRBzWklhGwidF1SBP3VJ-b7XgRkXExdBc",
    "https://lh3.googleusercontent.com/aida-public/AB6AXuD4x4w9n9YZTdt5xabVBS2qepLIBGO_O7V03yIbi3hIMAmQytWcFKKwrz24IW6_Ol5vR4eCI3L8HECMWA_c6whXlSkzl8EwzwxODmVoTrbIFgHEhg_sXXlbEblYVrc2PjcoITzotfijvT6As2gPL8ZZFDOXV683pYHyipXfLsH_LoV0kRnnyip9G8Q6TP0k9ttYRXWnm4DnaJJpEhXVVhRkj-5zBlNL7ZTp5Dx8TcW4erYCuDIbVUihANNP6EMEOV47ept5Iht4mU8",
    "https://lh3.googleusercontent.com/aida-public/AB6AXuDM8N4xmOFQuJ341CVwSKfZ_ZdQwSH3ySp2AZglqJNEtz_YHYPCdr2h3kyre518D709DRzc8NPpDGnvTjmip5uF8V7aiZfiqH46SdWN3O2OUP5ElrEw2o-yFFbR4DBvR7AJd2w3MC5P0VOEFsnQwuEzZVcKlL6C_WF3qDfc5-JRMhPFIyBqT_sCGkC1MTUceK_NdUP5WnXC8NNQKIcbGREodzjDzIcSjtZBxLqLvewkch_XEy3hVjAOQ6H9u6wVD4IXhQmxKnBCNcU",
  ],
};

const sizes = ["XS", "S", "M", "L", "XL"];

export default function ProductDetailPage() {
  const [selectedSize, setSelectedSize] = useState("S");
  const [openAccordion, setOpenAccordion] = useState<string | null>(null);

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Breadcrumbs */}
      <div className="flex flex-wrap gap-2 pb-8">
        <Link href="/" className="text-subtle-text-light dark:text-subtle-text-dark text-sm font-medium hover:text-primary">
          Home
        </Link>
        <span className="text-subtle-text-light dark:text-subtle-text-dark text-sm font-medium">/</span>
        <Link href="/shop" className="text-subtle-text-light dark:text-subtle-text-dark text-sm font-medium hover:text-primary">
          Women
        </Link>
        <span className="text-subtle-text-light dark:text-subtle-text-dark text-sm font-medium">/</span>
        <Link href="/shop" className="text-subtle-text-light dark:text-subtle-text-dark text-sm font-medium hover:text-primary">
          Dresses
        </Link>
        <span className="text-subtle-text-light dark:text-subtle-text-dark text-sm font-medium">/</span>
        <span className="text-sm font-medium">{product.name}</span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12">
        {/* Image Gallery */}
        <div className="lg:col-span-3">
          <div className="grid grid-cols-2 gap-2">
            <div className="col-span-2 row-span-2 relative aspect-[4/5] rounded-lg overflow-hidden">
              <Image src={product.images[0]} alt={product.name} fill className="object-cover" />
            </div>
            {product.images.slice(1).map((image, index) => (
              <div key={index} className="relative aspect-square rounded-lg overflow-hidden">
                <Image src={image} alt={`${product.name} view ${index + 2}`} fill className="object-cover" />
              </div>
            ))}
          </div>
        </div>

        {/* Product Details */}
        <div className="lg:col-span-2">
          <div className="flex flex-col gap-6 sticky top-28">
            <div className="flex flex-col gap-2">
              <h1 className="text-3xl font-bold tracking-tight">{product.name}</h1>
              <p className="text-subtle-text-light dark:text-subtle-text-dark text-base">{product.description}</p>
            </div>
            <p className="text-3xl font-bold tracking-tight">${product.price.toFixed(2)}</p>
            <div className="border-t border-border-light dark:border-border-dark"></div>

            {/* Size Selector */}
            <div className="flex flex-col gap-4">
              <div className="flex justify-between items-center">
                <h3 className="text-sm font-medium">Size</h3>
                <Link href="#" className="text-sm font-medium text-primary hover:underline">
                  Size guide
                </Link>
              </div>
              <div className="flex flex-wrap gap-2">
                {sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`h-10 px-4 flex items-center justify-center rounded-lg border text-sm font-medium ${
                      selectedSize === size
                        ? "bg-text-light dark:bg-text-dark text-text-dark dark:text-text-light ring-2 ring-primary"
                        : "border-border-light dark:border-border-dark hover:bg-subtle-light dark:hover:bg-subtle-dark"
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Add to Cart */}
            <button className="w-full bg-primary text-white font-bold py-3 rounded-lg hover:opacity-90 transition-opacity">
              Add to Cart
            </button>

            {/* Accordion Details */}
            <div className="flex flex-col gap-2 pt-4">
              {[
                { title: "Product Details", content: "Experience the luxury of 100% mulberry silk with this impeccably tailored midi dress. Featuring a concealed side zipper and a flattering A-line silhouette, it's designed for both comfort and style." },
                { title: "Sizing & Fit", content: "This dress offers a true-to-size fit. The model is 5'9\" (175cm) and is wearing a size S. For detailed measurements, please refer to our comprehensive size guide." },
                { title: "Shipping & Returns", content: "We offer complimentary standard shipping on all orders. Expedited shipping options are available at checkout. Enjoy free returns within 30 days of purchase." },
              ].map((item) => (
                <div key={item.title} className="border-b border-border-light dark:border-border-dark py-4">
                  <button
                    onClick={() => setOpenAccordion(openAccordion === item.title ? null : item.title)}
                    className="flex justify-between items-center w-full cursor-pointer"
                  >
                    <span className="font-medium">{item.title}</span>
                    <ChevronDown className={`h-5 w-5 transition-transform ${openAccordion === item.title ? "rotate-180" : ""}`} />
                  </button>
                  {openAccordion === item.title && (
                    <p className="text-subtle-text-light dark:text-subtle-text-dark mt-3">{item.content}</p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
