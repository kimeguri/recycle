import { useMemo, useState } from "react";
import type { ButtonHTMLAttributes, HTMLAttributes, ComponentType } from "react";
import type { LucideProps } from "lucide-react";
import {
  Search,
  Home,
  Grid2X2,
  Sparkles,
  BookOpen,
  Mail,
  MessageCircle,
  ShoppingBag,
  Image as ImageIcon,
  Sofa,
  Refrigerator,
  Package,
  CookingPot,
  Bed,
  Armchair,
  CheckCircle2,
  Truck,
  ShieldCheck,
  CalendarCheck,
  Handshake,
  Heart,
  Menu,
} from "lucide-react";

const LINE_URL = "https://lin.ee/Pw6OOlu";

type IconComponent = ComponentType<LucideProps>;

type Category = {
  name: string;
  ja: string;
  count: number;
  icon: IconComponent;
  tone: string;
};

type Product = {
  id: string;
  name: string;
  ja: string;
  price: string;
  status: string;
  statusJa: string;
  badge?: string;
  tone: string;
};

const categories: Category[] = [
  { name: "Furniture", ja: "家具", count: 12, icon: Sofa, tone: "bg-[#F7EFE8]" },
  { name: "Appliances", ja: "家電", count: 9, icon: Refrigerator, tone: "bg-[#EEF3EF]" },
  { name: "Daily Goods", ja: "日用品・雑貨", count: 15, icon: Package, tone: "bg-[#F8F2E4]" },
  { name: "Kitchen", ja: "キッチン用品", count: 11, icon: CookingPot, tone: "bg-[#EEF4F7]" },
  { name: "Bedding", ja: "寝具", count: 8, icon: Bed, tone: "bg-[#F3F0F6]" },
  { name: "Starter Sets", ja: "新生活セット", count: 6, icon: Armchair, tone: "bg-[#F7F1E3]" },
];

const products: Product[] = [
  {
    id: "R-001",
    name: "Refrigerator 120L",
    ja: "冷蔵庫 120L",
    price: "¥8,000",
    status: "Cleaned & Good condition",
    statusJa: "清掃済み・状態良好",
    badge: "人気",
    tone: "bg-[#EDF4EC] text-[#58715A]",
  },
  {
    id: "F-002",
    name: "Wooden Dining Chair",
    ja: "木製ダイニングチェア",
    price: "¥1,500",
    status: "Used - Good",
    statusJa: "良品・美品",
    badge: "おすすめ",
    tone: "bg-[#F6ECDD] text-[#8A6640]",
  },
  {
    id: "K-003",
    name: "Kitchen Starter Set",
    ja: "キッチン用品セット",
    price: "¥2,000",
    status: "Set item",
    statusJa: "セット商品",
    badge: "人気",
    tone: "bg-[#E9F2F7] text-[#466B82]",
  },
  {
    id: "S-004",
    name: "Welcome Starter Pack",
    ja: "新生活スタートセット",
    price: "¥5,000",
    status: "Recommended",
    statusJa: "おすすめ",
    badge: "おすすめ",
    tone: "bg-[#F8E9E4] text-[#9B5B4D]",
  },
  {
    id: "E-005",
    name: "Electric Kettle",
    ja: "電気ケトル",
    price: "¥1,000",
    status: "Cleaned & Good condition",
    statusJa: "清掃済み・状態良好",
    tone: "bg-[#EDF4EC] text-[#58715A]",
  },
];

const howToUseSteps = [
  { ja: "商品を見る", en: "Browse items", icon: Search, tone: "bg-[#C86F58]" },
  { ja: "気になる商品を選ぶ", en: "Choose an item", icon: Heart, tone: "bg-[#D7A14D]" },
  { ja: "LINEで問い合わせ", en: "Contact us on LINE", icon: MessageCircle, tone: "bg-[#7EA86F]" },
  { ja: "在庫・受け渡し確認", en: "Confirm availability", icon: CalendarCheck, tone: "bg-[#7AA1B8]" },
  { ja: "受け取り・お支払い", en: "Receive & pay", icon: Handshake, tone: "bg-[#9C83AA]" },
];

function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

function Button({
  className,
  variant = "solid",
  type = "button",
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement> & { variant?: "solid" | "outline" }) {
  return (
    <button
      type={type}
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-full text-sm font-medium transition focus:outline-none focus:ring-2 focus:ring-[#C86F58]/30 disabled:pointer-events-none disabled:opacity-50",
        variant === "outline" && "border border-[#C8B49B] bg-white text-stone-700 hover:bg-[#FBF8F3]",
        variant === "solid" && "bg-[#C86F58] text-white hover:bg-[#B8614D]",
        className,
      )}
      {...props}
    />
  );
}

function Card({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("rounded-[1.25rem] border border-[#E8DDD1] bg-white shadow-sm", className)} {...props} />;
}

function CardContent({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("p-5", className)} {...props} />;
}

function PhotoPlaceholder({ large = false }: { large?: boolean }) {
  return (
    <div
      className={cn(
        "flex flex-col items-center justify-center rounded-[1.4rem] bg-gradient-to-br from-[#F5F0EA] to-[#EEE8E0] text-stone-400",
        large ? "h-full min-h-[300px]" : "h-36",
      )}
    >
      <ImageIcon size={large ? 54 : 34} strokeWidth={1.4} />
      <div className="mt-3 text-sm font-medium">写真を追加</div>
      <div className="text-xs">Add your photo</div>
    </div>
  );
}

function SectionTitle({ ja, en, color = "bg-[#D7A18B]" }: { ja: string; en: string; color?: string }) {
  return (
    <div className="mb-6 flex flex-col items-center text-center">
      <div className="mb-2 flex items-center gap-3">
        <span className={cn("h-7 w-1.5 rounded-full", color)} />
        <h2 className="text-2xl font-semibold tracking-[0.08em] text-stone-800">{ja}</h2>
      </div>
      <p className="text-sm text-stone-500">{en}</p>
    </div>
  );
}

function Header() {
  return (
    <header className="sticky top-0 z-20 border-b border-[#E8DDD1] bg-[#FBF8F3]/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6">
        <a href="#top" className="flex items-center gap-3" aria-label="WELCOME Reuse Market Home">
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-[#C8B49B] bg-white text-[#54805D]">
            <Home size={25} strokeWidth={1.6} />
          </div>
          <div>
            <div className="text-xl font-semibold tracking-tight sm:text-2xl">
              <span className="text-[#C86F58]">WELCOME</span> Reuse Market
            </div>
            <div className="hidden text-xs tracking-wide text-stone-500 sm:block">
              Second-hand items for your new life in Japan.
            </div>
          </div>
        </a>

        <nav className="hidden items-center gap-7 text-xs text-stone-700 lg:flex" aria-label="Main navigation">
          <a href="#top" className="flex flex-col items-center gap-1 text-[#C86F58]"><Home size={18} />Home</a>
          <a href="#categories" className="flex flex-col items-center gap-1 hover:text-[#C86F58]"><Grid2X2 size={18} />Categories</a>
          <a href="#new-items" className="flex flex-col items-center gap-1 hover:text-[#C86F58]"><Sparkles size={18} />New Items</a>
          <a href="#how-to-use" className="flex flex-col items-center gap-1 hover:text-[#C86F58]"><BookOpen size={18} />How to Use</a>
          <a href="#contact" className="flex flex-col items-center gap-1 hover:text-[#C86F58]"><Mail size={18} />Contact</a>
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <label className="flex items-center gap-2 rounded-full border border-[#E2D5C6] bg-white px-4 py-2 text-xs text-stone-400">
            <span className="sr-only">Search items</span>
            <input className="w-24 bg-transparent outline-none placeholder:text-stone-400" placeholder="Search items" />
            <Search size={15} />
          </label>
          <a
            href={LINE_URL}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-[#4E9D5C] px-5 py-2.5 text-sm font-medium text-white transition hover:bg-[#438B50]"
          >
            <MessageCircle size={16} /> LINEで相談
          </a>
        </div>

        <button className="inline-flex rounded-full border border-[#E2D5C6] bg-white p-2 text-stone-700 lg:hidden" aria-label="Open menu">
          <Menu size={22} />
        </button>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="grid gap-10 rounded-[1.8rem] border border-[#E8DDD1] bg-white p-6 shadow-sm md:grid-cols-[0.95fr_1.05fr] md:p-12">
      <div className="flex flex-col justify-center">
        <div className="mb-6 inline-flex w-fit rounded-full bg-[#C86F58] px-4 py-2 text-sm font-medium text-white">
          やさしい日本語 / English support
        </div>
        <h1 className="text-4xl font-semibold leading-[1.35] tracking-[0.04em] text-stone-900 md:text-5xl">
          新しいくらしを、<br />たのしくスタート！
        </h1>
        <p className="mt-4 text-xl font-medium tracking-wide text-[#C86F58]">
          やさしい価格で、くらしをそろえよう。
        </p>
        <p className="mt-5 max-w-xl text-sm leading-8 text-stone-700">
          家具・家電・日用品を、やさしい価格でお届けします。日本で暮らし始める外国人の方に向けた、生活用品専門のリユースマーケットです。
        </p>
        <p className="mt-3 max-w-xl text-sm leading-7 text-stone-500">
          Affordable second-hand furniture, appliances, and daily goods for people starting a new life in Japan.
        </p>
        <div className="mt-8 flex flex-wrap gap-4">
          <a href="#new-items" className="inline-flex items-center justify-center gap-2 rounded-full bg-[#C86F58] px-7 py-4 text-sm font-medium text-white transition hover:bg-[#B8614D]">
            <ShoppingBag size={18} /> 商品を見る
          </a>
          <a href="#how-to-use" className="inline-flex items-center justify-center gap-2 rounded-full border border-[#C8B49B] bg-white px-7 py-4 text-sm font-medium text-stone-700 transition hover:bg-[#FBF8F3]">
            <BookOpen size={18} /> ご利用の流れ
          </a>
        </div>
      </div>
      <PhotoPlaceholder large />
    </section>
  );
}

function CategorySection() {
  return (
    <section id="categories" className="mt-12 scroll-mt-24">
      <SectionTitle ja="カテゴリーから探す" en="Browse by category" />
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-6">
        {categories.map((category) => {
          const Icon = category.icon;
          return (
            <Card key={category.name} className={cn("rounded-[1.4rem]", category.tone)}>
              <CardContent className="flex min-h-44 flex-col items-center justify-center p-5 text-center">
                <Icon size={42} strokeWidth={1.35} className="mb-4 text-stone-700" />
                <div className="font-semibold tracking-wide">{category.ja}</div>
                <div className="text-sm text-stone-600">{category.name}</div>
                <div className="mt-5 w-full border-t border-white/70 pt-3 text-xs text-stone-500">
                  {category.count} items
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </section>
  );
}

function ProductCard({
  product,
  isSelected,
  onSelect,
}: {
  product: Product;
  isSelected: boolean;
  onSelect: (product: Product) => void;
}) {
  return (
    <button type="button" onClick={() => onSelect(product)} className="text-left">
      <Card
        className={cn(
          "overflow-hidden transition hover:-translate-y-0.5 hover:shadow-md",
          isSelected && "ring-2 ring-[#C86F58]",
        )}
      >
        <CardContent className="p-3">
          <div className="relative">
            {product.badge ? (
              <span className="absolute left-2 top-2 z-10 rounded-md bg-[#C86F58] px-2 py-1 text-xs text-white">
                {product.badge}
              </span>
            ) : null}
            <PhotoPlaceholder />
          </div>
          <div className="mt-4">
            <div className="font-semibold tracking-wide">{product.ja}</div>
            <div className="text-xs text-stone-500">{product.name}</div>
            <div className="mt-2 text-2xl font-semibold text-[#C86F58]">{product.price}</div>
            <div className={cn("mt-3 rounded-xl px-3 py-2 text-center text-xs font-medium", product.tone)}>
              <div>{product.statusJa}</div>
              <div className="text-[11px] opacity-80">{product.status}</div>
            </div>
          </div>
        </CardContent>
      </Card>
    </button>
  );
}

function NewItemsSection({ selected, onSelect }: { selected: Product; onSelect: (product: Product) => void }) {
  return (
    <section id="new-items" className="mt-14 scroll-mt-24">
      <div className="mb-6 flex items-center justify-between">
        <div className="mx-auto md:mx-0">
          <SectionTitle ja="新着アイテム" en="New Items" />
        </div>
        <Button variant="outline" className="hidden px-5 py-2.5 text-stone-600 md:inline-flex">
          すべて見る　View all
        </Button>
      </div>
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} isSelected={selected.id === product.id} onSelect={onSelect} />
        ))}
      </div>
    </section>
  );
}

function FeaturedProduct({ selected }: { selected: Product }) {
  return (
    <section className="mt-10 grid gap-8 rounded-[1.7rem] border border-[#E8DDD1] bg-white p-5 shadow-sm lg:grid-cols-[0.95fr_1.55fr] lg:p-7">
      <div className="relative">
        <div className="absolute left-0 top-0 z-10 rounded-br-2xl rounded-tl-[1.4rem] bg-[#D69A4E] px-4 py-3 text-sm font-medium text-white">
          人気商品<br /><span className="text-xs opacity-90">Popular</span>
        </div>
        <PhotoPlaceholder large />
      </div>

      <div className="grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
        <div className="flex flex-col justify-center">
          <div className="mb-3 flex items-center gap-2 text-[#54805D]">
            <span className="h-6 w-1 rounded-full bg-[#9EB99A]" />
            <div>
              <div className="text-xl font-semibold tracking-wide">おすすめ商品</div>
              <div className="text-xs text-stone-500">Featured Item</div>
            </div>
          </div>
          <h3 className="text-3xl font-semibold tracking-wide">{selected.ja}</h3>
          <p className="text-stone-500">{selected.name}</p>
          <div className="mt-4 text-4xl font-semibold text-[#C86F58]">{selected.price}</div>
          <div className="mt-5 space-y-3 text-sm">
            <div className="rounded-xl bg-[#EDF4EC] px-4 py-3 text-[#58715A]">
              <CheckCircle2 className="mr-2 inline" size={17} />
              {selected.statusJa}
              <br />
              <span className="ml-6 text-xs">{selected.status}</span>
            </div>
            <div className="rounded-xl bg-[#E9F2F7] px-4 py-3 text-[#466B82]">
              <Truck className="mr-2 inline" size={17} />
              受け取り・配送可能
              <br />
              <span className="ml-6 text-xs">Pickup / Delivery available</span>
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-center">
          <p className="text-sm leading-7 text-stone-700">
            この商品は中古品です。小さなキズや使用感がありますが、使用には問題ありません。日本での生活を始める方におすすめです。
          </p>
          <p className="mt-3 text-sm leading-6 text-stone-500">
            This is a second-hand item. Small scratches and wear may be present, but it works well. Recommended for people starting life in Japan.
          </p>
          <div className="mt-5 flex flex-wrap gap-2 text-xs">
            <span className="inline-flex items-center gap-1 rounded-lg border border-[#D6E1D3] bg-white px-3 py-2 text-stone-600">
              <ShieldCheck size={14} /> 動作確認済み
            </span>
            <span className="inline-flex items-center gap-1 rounded-lg border border-[#D6E1D3] bg-white px-3 py-2 text-stone-600">
              <CheckCircle2 size={14} /> 清掃済み
            </span>
            <span className="inline-flex items-center gap-1 rounded-lg border border-[#D6E1D3] bg-white px-3 py-2 text-stone-600">
              <Heart size={14} /> 女性対応あり
            </span>
          </div>
          <a
            href={LINE_URL}
            target="_blank"
            rel="noreferrer"
            className="mt-6 inline-flex items-center justify-center gap-2 rounded-xl bg-[#4E9D5C] px-5 py-4 text-sm font-medium text-white transition hover:bg-[#438B50]"
          >
            <MessageCircle size={18} /> この商品についてLINEで相談
          </a>
        </div>
      </div>
    </section>
  );
}

function HowToUseSection() {
  return (
    <section id="how-to-use" className="mt-12 scroll-mt-24">
      <SectionTitle ja="ご利用の流れ" en="How to Use" color="bg-[#E5D8C9]" />
      <div className="grid gap-4 md:grid-cols-5">
        {howToUseSteps.map((step, index) => {
          const Icon = step.icon;
          return (
            <div key={step.ja} className="rounded-[1.25rem] border border-[#E8DDD1] bg-white p-5 text-center shadow-sm">
              <div className={cn("mx-auto mb-3 flex h-10 w-10 items-center justify-center rounded-full text-sm font-semibold text-white", step.tone)}>
                {String(index + 1).padStart(2, "0")}
              </div>
              <Icon className="mx-auto mb-3 text-stone-700" size={28} strokeWidth={1.4} />
              <div className="text-sm font-semibold">{step.ja}</div>
              <div className="mt-1 text-xs text-stone-500">{step.en}</div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer id="contact" className="mt-14 border-t border-[#E8DDD1] bg-[#F4EEE5]">
      <div className="mx-auto grid max-w-7xl gap-8 px-6 py-8 md:grid-cols-[1.2fr_1fr_1fr_1fr]">
        <div>
          <div className="text-xl font-semibold"><span className="text-[#C86F58]">WELCOME</span> Reuse Market</div>
          <p className="mt-2 text-sm text-stone-600">日本での新しい生活を、やさしく、もっと楽しく。</p>
          <p className="mt-1 text-xs text-stone-500">A gentle start to your new life in Japan.</p>
        </div>
        <div className="space-y-1 text-sm text-stone-600">
          <div className="mb-2 font-semibold text-stone-800">クイックリンク</div>
          <p>ホーム / Home</p>
          <p>カテゴリー / Categories</p>
          <p>新着アイテム / New Items</p>
          <p>ご利用の流れ / How to Use</p>
        </div>
        <div className="space-y-1 text-sm text-stone-600">
          <div className="mb-2 font-semibold text-stone-800">サポート</div>
          <p>よくある質問 / FAQ</p>
          <p>配送・受け取り / Delivery</p>
          <p>お支払い方法 / Payment Methods</p>
          <p>利用規約 / Legal Info</p>
        </div>
        <div>
          <div className="mb-3 font-semibold text-stone-800">ご相談はこちら</div>
          <a
            href={LINE_URL}
            target="_blank"
            rel="noreferrer"
            className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#4E9D5C] px-4 py-2.5 text-sm font-medium text-white transition hover:bg-[#438B50]"
          >
            <MessageCircle size={16} /> LINEで相談
          </a>
          <a
            href="mailto:info@example.com"
            className="mt-3 inline-flex w-full items-center justify-center gap-2 rounded-full border border-[#C8B49B] bg-white px-4 py-2.5 text-sm font-medium text-stone-700 transition hover:bg-[#FBF8F3]"
          >
            <Mail size={16} /> お問い合わせ
          </a>
        </div>
      </div>
      <div className="border-t border-[#E8DDD1] py-4 text-center text-xs text-stone-500">
        © 2025 WELCOME Reuse Market. All rights reserved.
      </div>
    </footer>
  );
}

export default function App() {
  const [selectedProductId, setSelectedProductId] = useState(products[0].id);

  const selectedProduct = useMemo(() => {
    return products.find((product) => product.id === selectedProductId) ?? products[0];
  }, [selectedProductId]);

  return (
    <div className="min-h-screen bg-[#FBF8F3] text-stone-800 antialiased">
      <Header />
      <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6">
        <Hero />
        <CategorySection />
        <NewItemsSection selected={selectedProduct} onSelect={(product) => setSelectedProductId(product.id)} />
        <FeaturedProduct selected={selectedProduct} />
        <HowToUseSection />
      </main>
      <Footer />
    </div>
  );
}
