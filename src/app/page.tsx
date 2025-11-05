import Link from "next/link";
import Image from "next/image";

const newArrivals = [
  {
    id: 1,
    name: "Elegant Silk Blouse",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuASSAgl4OtCoClRO7J5Pl946z3Rjg9QGWQ1ZDIRklwHFw2aKx2HacPoVQvxkRAETYJFrhKqURuM1OLO8VFElFXT6kyHJDARDJDvZAMQIvQSklY6fsSGY5-E3q3NZkaBFHohlIu225xwO00f_zWWyKE0teTavGsRFPQB6M1wqAfaAhqAWlXTkXfPMMG_8RRlL0GgmB-qUn_2-3oDLLC0g3YtBYs7jc9cvYdgScJx4eOe6s5XsgfOr25AxuwVpPrU9ORnMkRrDOT3vBA",
  },
  {
    id: 2,
    name: "Tailored Wool Coat",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDzmJNn_jQwZQ89rfSadRMv_xichy50-ZQwAtrMXP0zA9nfJc1GyPoeA9nLHXitfgBemf9QEN8JcwwJHmCSrZuobJKMC1RhhiZuESreSZd5GlRnM3OVOD01FVGST6Ji9fE7DKg4vkrmF4X0o4-uE0fmocBBKtKAgGqE15Xgi9-1zO7hPHGdmtZRuTY38orSm4G43dmMQ5aemjHeidZfr5EXLXw4PjjDwjDzUeBn86QkZX0ZUchOyR_eFxVyVEY1IqqqCRr7YyprgJA",
  },
  {
    id: 3,
    name: "Classic Leather Handbag",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCwZjQSS-U0B6klEhkmLMzYhKLogJ34Y7v4YzNFPSKpzfIMtSJ6QNXpaNGQCpS3jp6lb1o_xJ5l7pH5Vq7PKVF1ZNTKt1p4r_9Jo2uprRHg2ncej3AtopXc_TdogMQvjEex1gfeysDAd6Amoa6-tzGDGk-xn2H7Sg0BVDcBbRPl5C-9VNfq-rAABOEsowu1bc-6ajyDJsdIPvsQa60AoBN8Gd85OQ5dfJZfqR4t-nXmjr6V-o4cAwIXp9wU9IA1fZtaRX306pkv_go",
  },
  {
    id: 4,
    name: "Heeled Ankle Boots",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBJnfy2-ppLfFbj_bPPvtGyacN7w6Htr4p0D7oP83iv6PwTEA2oNG3552anPwv28bZlv2j6UWnVV-qPPtbIMFXyKBKeyADnruZ1StShBAc5FDw16VPtDzrfg5l2FJYmK3hYVryT4CzT5nJBsjmQC0PkW-UWZ78LEMBaG4M3vMSlE0Ezpw2o4yAyWsF57D8lKDs4SSewG5ciAwAiq7Y0z5f2HPTqk-1Ij6E6EIxqT1KrfOZMINtoehuZ-HoPePXrRxg-nEJDyrFHWkw",
  },
];

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <div className="@container px-4 sm:px-10 py-10">
        <div
          className="flex min-h-[60vh] max-h-[720px] flex-col gap-6 bg-cover bg-center bg-no-repeat rounded-xl items-center justify-center p-4 text-center"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.4) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuBtqXrWZj3dr1vjRt8q8mtZbfY9D9NEeHN92QObMMeiiTbfRBkv65Jx_nMCdnZf0AM7diVC6HhWLxiOw_Ze4lx7SaFFftlq2sZz6JS9mxFGrlZJnl2rBzYyQt2Kb4CXdet3rTJMP5YLN1ArJvc-wKNNLGY02AhwXykZs3BfwgvDaghwq10nAzC_qxzUbrVmvjVYA2P28NfGzaW-VIyjUHMrK_j_huNKMb5PmhdLalp4aPUNUqn7bkV6ANyeYVGtvnnA_rA46PkSNEg")`,
          }}
        >
          <div className="flex flex-col gap-4">
            <h1 className="text-white text-4xl font-black leading-tight tracking-[-0.033em] @[480px]:text-6xl">
              The Autumn '24 Collection
            </h1>
            <h2 className="text-white text-base font-normal leading-normal @[480px]:text-lg">
              Discover timeless pieces designed for the modern wardrobe.
            </h2>
          </div>
          <Link
            href="/shop"
            className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-5 bg-primary text-white text-base font-bold leading-normal tracking-[0.015em] hover:opacity-90 transition-opacity"
          >
            <span className="truncate">Shop The Collection</span>
          </Link>
        </div>
      </div>

      {/* Just Arrived Section */}
      <div className="px-4 sm:px-10">
        <h2 className="text-text-light dark:text-text-dark text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
          Just Arrived
        </h2>
      </div>

      {/* Product Grid */}
      <div className="px-4 sm:px-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-4">
          {newArrivals.map((product) => (
            <Link key={product.id} href={`/products/${product.id}`} className="group">
              <div
                className="bg-cover bg-center flex flex-col rounded-lg justify-end aspect-[3/4] overflow-hidden relative"
                style={{ backgroundImage: `url("${product.image}")` }}
              >
                <div className="p-4 bg-gradient-to-t from-black/60 to-transparent transition-all duration-300 translate-y-full group-hover:translate-y-0">
                  <p className="text-white text-base font-bold leading-tight line-clamp-2">
                    {product.name}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Sale Banner */}
      <div className="px-4 sm:px-10 py-10">
        <div className="p-4">
          <div
            className="bg-cover bg-center flex flex-col items-stretch justify-end rounded-xl pt-[132px]"
            style={{
              backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuAqECqZ_Tx0qz7Jye4UQT-UJ6l6nIfhifhsehJgDeJgCyWTffsd_UE7n-KyXzwIEHt72dZucJ1xOJXmeUPRyu--HNCsER9gQQrmaYGfffQcGEAVBHKA-xV6Lfx1Mq8S3Dscb2B0g_ZeA0hcL7xnZR8dAZI-RV77P2G2gED0nRLY8fYrtU1-WUsGw3ZsVh-KlXX8TOYlW6_rE7WRYuN44FYH8s2uAnthD-tsUZZEa7zi40ryTMhUNLpmRa9WE3tsXt4hIaIBCd7RG0M")`,
            }}
          >
            <div className="flex flex-col sm:flex-row w-full items-start sm:items-end justify-between gap-4 p-6 sm:p-8">
              <div className="flex max-w-[440px] flex-1 flex-col gap-1">
                <p className="text-white text-2xl font-bold leading-tight sm:text-3xl">
                  Mid-Season Sale: Up to 40% Off
                </p>
                <p className="text-white/90 text-base font-medium leading-normal">
                  Limited time offer on select styles.
                </p>
              </div>
              <Link
                href="/shop?sale=true"
                className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-5 bg-primary text-white text-base font-bold leading-normal tracking-[0.015em] hover:opacity-90 transition-opacity"
              >
                <span className="truncate">Shop Sale</span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Brand Story Section */}
      <div className="px-4 sm:px-10 py-10">
        <div className="flex flex-col md:flex-row items-center gap-10 lg:gap-16 p-4">
          <div className="w-full md:w-1/2 relative aspect-square md:aspect-auto md:h-[500px]">
            <Image
              className="rounded-xl object-cover"
              alt="A designer sketching a fashion design in a bright, modern studio"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCMwwRBGsWRd0lQ4q15TrAnccQbrGkPYM3-08VlDeNKrqhLPkHUsQUQXIBWD6HLsHsQd6dwOLRqSYn9or3HA51EA2KxuT7G93N2wIiZJ9H5oZQVD-kYtlpf3f_iW6aTxT5TuSlc2yardqGbqRVMu_2eF57tTZpQQPbB8MoQOnJZFAvvPk34Ow_pUmiQVw3ZkPzAtAQQJQjV9XpoHSzsdSpuscof7WOSK1HecGARcv1r61x2bx9RCahyH5_OjtO2GTQDhJLKgv42VIM"
              fill
            />
          </div>
          <div className="w-full md:w-1/2 flex flex-col gap-4">
            <h2 className="text-text-light dark:text-text-dark text-3xl font-bold leading-tight">
              Behind the Seams
            </h2>
            <p className="text-subtle-text-light dark:text-subtle-text-dark text-base leading-relaxed">
              At Tracie, we believe in the power of timeless design. Our philosophy is rooted in
              creating high-quality, versatile pieces that transcend seasons. We are committed to
              sustainable practices, from sourcing eco-friendly materials to ensuring ethical
              production. Each garment is thoughtfully crafted to not only look beautiful but to
              feel incredible, empowering the modern individual with confidence and style.
            </p>
            <Link
              href="/about"
              className="text-primary font-bold text-sm hover:underline mt-2"
            >
              Learn More About Our Philosophy
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
