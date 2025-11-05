"use client";

import Link from "next/link";
import { Search, User, Heart, ShoppingBag, Menu } from "lucide-react";
import { useState } from "react";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border-light dark:border-border-dark bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-sm">
      <div className="container mx-auto flex items-center justify-between px-4 sm:px-10 py-3">
        <div className="flex items-center gap-8">
          <Link href="/" className="flex items-center gap-4 text-text-light dark:text-text-dark">
            <div className="size-6 text-primary">
              <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0_6_535)">
                  <path 
                    clipRule="evenodd" 
                    d="M47.2426 24L24 47.2426L0.757355 24L24 0.757355L47.2426 24ZM12.2426 21H35.7574L24 9.24264L12.2426 21Z" 
                    fill="currentColor" 
                    fillRule="evenodd"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_6_535">
                    <rect fill="white" height="48" width="48" />
                  </clipPath>
                </defs>
              </svg>
            </div>
            <h2 className="text-lg font-bold leading-tight tracking-[-0.015em]">Tracie</h2>
          </Link>
          <nav className="hidden md:flex items-center gap-9">
            <Link href="/shop" className="text-sm font-medium hover:text-primary transition-colors">
              New In
            </Link>
            <Link href="/shop?category=clothing" className="text-sm font-medium hover:text-primary transition-colors">
              Clothing
            </Link>
            <Link href="/shop?category=accessories" className="text-sm font-medium hover:text-primary transition-colors">
              Accessories
            </Link>
            <Link href="/shop?sale=true" className="text-sm font-medium hover:text-primary transition-colors">
              Sale
            </Link>
          </nav>
        </div>
        <div className="flex flex-1 justify-end items-center gap-2">
          <label className="hidden sm:flex flex-col min-w-40 !h-10 max-w-64">
            <div className="flex w-full flex-1 items-stretch rounded-lg h-full">
              <div className="text-subtle-text-light dark:text-subtle-text-dark flex bg-subtle-light dark:bg-subtle-dark items-center justify-center pl-4 rounded-l-lg">
                <Search className="h-5 w-5" />
              </div>
              <input
                className="flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-r-lg text-text-light dark:text-text-dark focus:outline-0 focus:ring-0 border-none bg-subtle-light dark:bg-subtle-dark h-full placeholder:text-subtle-text-light dark:placeholder:text-subtle-text-dark px-4 pl-2 text-base font-normal"
                placeholder="Search"
              />
            </div>
          </label>
          <div className="flex gap-2">
            <button className="flex cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 bg-subtle-light dark:bg-subtle-dark hover:bg-primary/20 dark:hover:bg-primary/30 text-text-light dark:text-text-dark transition-colors gap-2 text-sm font-bold min-w-0 px-2.5">
              <User className="h-6 w-6" />
            </button>
            <button className="flex cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 bg-subtle-light dark:bg-subtle-dark hover:bg-primary/20 dark:hover:bg-primary/30 text-text-light dark:text-text-dark transition-colors gap-2 text-sm font-bold min-w-0 px-2.5">
              <Heart className="h-6 w-6" />
            </button>
            <Link href="/cart" className="flex cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 bg-subtle-light dark:bg-subtle-dark hover:bg-primary/20 dark:hover:bg-primary/30 text-text-light dark:text-text-dark transition-colors gap-2 text-sm font-bold min-w-0 px-2.5">
              <ShoppingBag className="h-6 w-6" />
            </Link>
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden flex cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 bg-subtle-light dark:bg-subtle-dark hover:bg-primary/20 dark:hover:bg-primary/30 text-text-light dark:text-text-dark transition-colors gap-2 text-sm font-bold min-w-0 px-2.5"
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>
      {mobileMenuOpen && (
        <nav className="md:hidden border-t border-border-light dark:border-border-dark bg-background-light dark:bg-background-dark px-4 py-4 space-y-2">
          <Link href="/shop" className="block text-sm font-medium hover:text-primary transition-colors py-2">
            New In
          </Link>
          <Link href="/shop?category=clothing" className="block text-sm font-medium hover:text-primary transition-colors py-2">
            Clothing
          </Link>
          <Link href="/shop?category=accessories" className="block text-sm font-medium hover:text-primary transition-colors py-2">
            Accessories
          </Link>
          <Link href="/shop?sale=true" className="block text-sm font-medium hover:text-primary transition-colors py-2">
            Sale
          </Link>
        </nav>
      )}
    </header>
  );
}
