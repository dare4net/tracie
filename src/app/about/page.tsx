import { Leaf, Gem, Users } from "lucide-react";

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="w-full">
        <div
          className="flex min-h-[60vh] md:min-h-[70vh] flex-col gap-6 bg-cover bg-center bg-no-repeat items-center justify-center p-4 text-center"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.5) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuAZHebtWucFSC4EPoSJ4q81tAdHiTUVY6W6N_iJyr_9cHuV9FgAZG0sEjtLr-RTQ9gGIP4OVpcNbm9YPdZWq5oA2XqAnj5mX34NZu0Keqvnazus2SdL_e-M-8MXa4dGI1JQIIAtiQJ1juwjXYrIgM-IrIa4D6PNZ_LkgRasAeysrQHlrxLqt1HRdmlqh9PuIG2DV3ZFqT5083IspC0u92WGcyJ9x9C4xr2iKjHyM11mJ_NzA9AomyCRr_N1AOs27KxGlQeXsXBtsiU")`,
          }}
        >
          <div className="flex flex-col gap-4 max-w-4xl">
            <h1 className="text-white text-4xl font-black leading-tight tracking-[-0.033em] md:text-6xl">
              Crafting Timeless Style for the Modern Individual
            </h1>
            <p className="text-white/90 text-base font-normal leading-normal md:text-lg">
              Discover our journey, our values, and the passion woven into every piece.
            </p>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="max-w-4xl mx-auto px-6 py-16 sm:py-24 text-center">
        <h2 className="text-3xl font-bold leading-tight tracking-[-0.015em] mb-4">Our Story</h2>
        <p className="text-lg leading-relaxed">
          Born from a passion for quality, sustainability, and timeless design, Tracie creates pieces
          that are not just worn, but cherished—items that tell a story and become a part of yours. We
          believe in fashion that empowers and endures.
        </p>
      </section>

      {/* Mission & Values Section */}
      <section className="max-w-6xl mx-auto px-6 py-16 sm:py-24">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold leading-tight tracking-[-0.015em]">Our Mission &amp; Values</h2>
          <p className="mt-4 text-lg">Guiding principles that define who we are and what we create.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
          <div className="flex flex-col items-center">
            <div className="flex items-center justify-center h-16 w-16 rounded-full bg-primary/10 text-primary mb-4">
              <Leaf className="h-8 w-8" />
            </div>
            <h3 className="text-xl font-semibold">Sustainability</h3>
            <p className="mt-2 text-subtle-text-light dark:text-subtle-text-dark">
              Mindfully sourced materials and ethical production to protect our planet.
            </p>
          </div>
          <div className="flex flex-col items-center">
            <div className="flex items-center justify-center h-16 w-16 rounded-full bg-primary/10 text-primary mb-4">
              <Gem className="h-8 w-8" />
            </div>
            <h3 className="text-xl font-semibold">Exceptional Quality</h3>
            <p className="mt-2 text-subtle-text-light dark:text-subtle-text-dark">
              Timeless designs and meticulous craftsmanship that stand the test of time.
            </p>
          </div>
          <div className="flex flex-col items-center">
            <div className="flex items-center justify-center h-16 w-16 rounded-full bg-primary/10 text-primary mb-4">
              <Users className="h-8 w-8" />
            </div>
            <h3 className="text-xl font-semibold">Community</h3>
            <p className="mt-2 text-subtle-text-light dark:text-subtle-text-dark">
              Building authentic connections and celebrating individuality together.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full bg-subtle-light dark:bg-subtle-dark">
        <div className="max-w-6xl mx-auto my-16 sm:my-24 px-6 py-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Become Part of Our Story</h2>
          <p className="mb-8 max-w-xl mx-auto">
            Discover pieces designed with intention and crafted to last. Your journey into timeless style starts here.
          </p>
          <a
            href="/shop"
            className="inline-flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-6 bg-primary text-white text-base font-bold leading-normal tracking-[0.015em] hover:opacity-90 transition-opacity"
          >
            Explore the Collection
          </a>
        </div>
      </section>
    </>
  );
}
