import Link from "next/link";
import { Facebook, Twitter, Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-subtle-light dark:bg-subtle-dark text-subtle-text-light dark:text-subtle-text-dark">
      <div className="mx-auto max-w-7xl px-4 sm:px-10 py-12">
        <div className="flex flex-col md:flex-row justify-between gap-12">
          <div className="flex flex-col gap-4 basis-1/3">
            <h3 className="text-lg font-bold text-text-light dark:text-text-dark">Tracie</h3>
            <p className="text-sm">
              Timeless fashion for the modern wardrobe. Curated collections designed with passion and purpose.
            </p>
            <div className="flex gap-4 mt-2">
              <Link href="#" className="hover:text-primary transition-colors">
                <Facebook className="h-6 w-6" />
              </Link>
              <Link href="#" className="hover:text-primary transition-colors">
                <Twitter className="h-6 w-6" />
              </Link>
              <Link href="#" className="hover:text-primary transition-colors">
                <Instagram className="h-6 w-6" />
              </Link>
            </div>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 basis-2/3">
            <div>
              <h3 className="text-sm font-bold text-text-light dark:text-text-dark">Shop</h3>
              <ul className="mt-4 space-y-2 text-sm">
                <li>
                  <Link href="/shop" className="hover:text-primary transition-colors">
                    New In
                  </Link>
                </li>
                <li>
                  <Link href="/shop?category=clothing" className="hover:text-primary transition-colors">
                    Clothing
                  </Link>
                </li>
                <li>
                  <Link href="/shop?category=accessories" className="hover:text-primary transition-colors">
                    Accessories
                  </Link>
                </li>
                <li>
                  <Link href="/shop?sale=true" className="hover:text-primary transition-colors">
                    Sale
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-bold text-text-light dark:text-text-dark">Company</h3>
              <ul className="mt-4 space-y-2 text-sm">
                <li>
                  <Link href="/about" className="hover:text-primary transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/about#philosophy" className="hover:text-primary transition-colors">
                    Our Philosophy
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-primary transition-colors">
                    Careers
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-bold text-text-light dark:text-text-dark">Support</h3>
              <ul className="mt-4 space-y-2 text-sm">
                <li>
                  <Link href="/contact" className="hover:text-primary transition-colors">
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-primary transition-colors">
                    FAQs
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-primary transition-colors">
                    Shipping &amp; Returns
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-subtle-text-light/20 dark:border-subtle-text-dark/20 text-center text-sm">
          <p>© 2024 Tracie. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
