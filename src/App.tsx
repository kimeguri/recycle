{t.productNote} <span className="mt-5 block rounded-2xl border border-[#E8DDD1] bg-[#FBF8F3] p-4"><span className="block text-sm font-semibold text-stone-800">{localizedProduct.name} Details</span>span><span className="mt-2 block text-xs leading-6 text-stone-600">Photos, video, size, condition, and pickup details can be added here.</span>span><span className="mt-4 grid gap-2 sm:grid-cols-3"><span className="rounded-xl bg-white px-3 py-2 text-xs text-stone-600"><span className="block font-semibold text-stone-800">Photo</span>span>Up to 3 images</span>span><span className="rounded-xl bg-white px-3 py-2 text-xs text-stone-600"><span className="block font-semibold text-stone-800">Video</span>span>1 product video</span>span><span className="rounded-xl bg-white px-3 py-2 text-xs text-stone-600"><span className="block font-semibold text-stone-800">Details</span>span>Condition / size</span>span></span>span></span>span></span>
import type { ButtonHTMLAttributes, HTMLAttributes, ComponentType } from "react";
import type { LucideProps } from "lucide-react";
import {
  Search,
  Home,
  Grid2X2,
  Globe,
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
type LanguageCode = "ja" | "vi" | "si" | "ne" | "id";

const languageOptions: Array<{ code: LanguageCode; label: string; flag: string }> = [ { code: "ja", label: "\u65E5\u672C\u8A9E / English", flag: "\u{1F1EF}\u{1F1F5}" },
  { code: "vi", label: "Tiếng Việt", flag: "\u{1F1FB}\u{1F1F3}" },
  { code: "si", label: "සිංහල", flag: "\u{1F1F1}\u{1F1F0}" },
  { code: "ne", label: "नेपाली", flag: "\u{1F1F3}\u{1F1F5}" },
  { code: "id", label: "Bahasa Indonesia", flag: "\u{1F1EE}\u{1F1E9}" },
];

const translations = { ja: { subtitle: "\u65E5\u672C\u3067\u306E\u751F\u6D3B\u306B\u3001\u3084\u3055\u3057\u3044\u30EA\u30E6\u30FC\u30B9\u54C1\u3092", navHome: "\u30DB\u30FC\u30E0", navCategories: "\u30AB\u30C6\u30B4\u30EA\u30FC", navNewItems: "\u65B0\u7740\u5546\u54C1", navHowToUse: "\u4F7F\u3044\u65B9", navContact: "\u304A\u554F\u3044\u5408\u308F\u305B", search: "\u5546\u54C1\u3092\u691C\u7D22", line: "LINE\u3067\u76F8\u8AC7", photoJa: "\u5199\u771F\u3092\u8FFD\u52A0", photoEn: "Add your photo", heroTitle: "Discover Unique Treasures for your Home", heroLead: "\u5BB6\u5177\u30FB\u5BB6\u96FB\u30FB\u65E5\u7528\u54C1\u3092\u3001\u3084\u3055\u3057\u3044\u4FA1\u683C\u3067\u304A\u5C4A\u3051\u3059\u308B\u30EA\u30E6\u30FC\u30B9\u30DE\u30FC\u30B1\u30C3\u30C8\u3067\u3059\u3002", heroSub: "Affordable second-hand furniture, appliances, and daily goods for people starting a new life in Japan.", viewItems: "\u5546\u54C1\u3092\u898B\u308B", howFlow: "\u3054\u5229\u7528\u306E\u6D41\u308C", categoriesJa: "\u30AB\u30C6\u30B4\u30EA\u30FC\u304B\u3089\u63A2\u3059", categoriesEn: "Browse by category", newItemsJa: "\u65B0\u7740\u5546\u54C1", newItemsEn: "New Items", viewAll: "\u3059\u3079\u3066\u898B\u308B", featuredJa: "\u304A\u3059\u3059\u3081\u5546\u54C1", featuredEn: "Featured Item", popular: "\u4EBA\u6C17\u5546\u54C1", popularEn: "Popular", delivery: "\u53D7\u3051\u53D6\u308A\u30FB\u914D\u9001\u306B\u5BFE\u5FDC\u3067\u304D\u307E\u3059", deliveryEn: "Pickup / Delivery available", productNote: "\u3053\u3061\u3089\u306F\u4E2D\u53E4\u54C1\u3067\u3059\u3002\u5C0F\u3055\u306A\u30AD\u30BA\u3084\u4F7F\u7528\u611F\u304C\u3042\u308B\u5834\u5408\u304C\u3042\u308A\u307E\u3059\u304C\u3001\u307E\u3060\u6C17\u6301\u3061\u3088\u304F\u4F7F\u3048\u308B\u5546\u54C1\u3067\u3059\u3002\u65E5\u672C\u3067\u65B0\u751F\u6D3B\u3092\u59CB\u3081\u308B\u65B9\u306B\u304A\u3059\u3059\u3081\u3067\u3059\u3002", checked: "\u52D5\u4F5C\u78BA\u8A8D\u6E08\u307F", cleaned: "\u6E05\u6383\u6E08\u307F", womenSupport: "\u5973\u6027\u30B9\u30BF\u30C3\u30D5\u5BFE\u5FDC\u53EF", askLine: "\u3053\u306E\u5546\u54C1\u306B\u3064\u3044\u3066LINE\u3067\u76F8\u8AC7", footerLead: "\u65E5\u672C\u3067\u306E\u65B0\u751F\u6D3B\u3092\u3001\u3084\u3055\u3057\u304F\u697D\u3057\u304F\u30B9\u30BF\u30FC\u30C8\u3002", footerSub: "A gentle start to your new life in Japan.", quickLinks: "\u30AF\u30A4\u30C3\u30AF\u30EA\u30F3\u30AF", support: "\u30B5\u30DD\u30FC\u30C8", faq: "\u3088\u304F\u3042\u308B\u8CEA\u554F", deliveryFooter: "\u914D\u9001\u30FB\u53D7\u3051\u53D6\u308A", payment: "\u304A\u652F\u6255\u3044\u65B9\u6CD5", legal: "\u3054\u5229\u7528\u6848\u5185", contactUs: "\u304A\u554F\u3044\u5408\u308F\u305B", contactMail: "\u30E1\u30FC\u30EB\u3067\u76F8\u8AC7", },
  vi: {
    subtitle: "Đồ cũ cho cuộc sống mới của bạn tại Nhật Bản.",
    navHome: "Trang chủ",
    navCategories: "Danh mục",
    navNewItems: "Hàng mới",
    navHowToUse: "Cách dùng",
    navContact: "Liên hệ",
    search: "Tìm sản phẩm",
    line: "Tư vấn qua LINE",
    photoJa: "Thêm ảnh",
    photoEn: "Add your photo",
    heroTitle: "Khám phá những món đồ độc đáo cho ngôi nhà của bạn",
    heroLead: "Chợ đồ tái sử dụng giao nội thất, đồ điện và đồ dùng hằng ngày với giá dễ mua.",
    heroSub: "Affordable second-hand furniture, appliances, and daily goods for people starting a new life in Japan.",
    viewItems: "Xem sản phẩm",
    howFlow: "Cách sử dụng",
    categoriesJa: "Tìm theo danh mục",
    categoriesEn: "Browse by category",
    newItemsJa: "Sản phẩm mới",
    newItemsEn: "New Items",
    viewAll: "Xem tất cả",
    featuredJa: "Sản phẩm gợi ý",
    featuredEn: "Featured Item",
    popular: "Sản phẩm nổi bật",
    popularEn: "Popular",
    delivery: "Có thể nhận hàng hoặc giao hàng",
    deliveryEn: "Pickup / Delivery available",
    productNote: "Đây là hàng đã qua sử dụng. Có thể có vết xước nhỏ hoặc dấu hiệu sử dụng, nhưng vẫn dùng tốt. Phù hợp cho người mới bắt đầu sống tại Nhật.",
    checked: "Đã kiểm tra hoạt động",
    cleaned: "Đã vệ sinh",
    womenSupport: "Có hỗ trợ nữ",
    askLine: "Hỏi về sản phẩm này qua LINE",
    footerLead: "Bắt đầu cuộc sống mới tại Nhật một cách nhẹ nhàng và vui hơn.",
    footerSub: "A gentle start to your new life in Japan.",
    quickLinks: "Liên kết nhanh",
    support: "Hỗ trợ",
    faq: "FAQ",
    deliveryFooter: "Giao hàng / nhận hàng",
    payment: "Phương thức thanh toán",
    legal: "Điều khoản",
    contactUs: "Tư vấn tại đây",
    contactMail: "Liên hệ",
  },
  si: {
    subtitle: "ජපානයේ ඔබේ නව ජීවිතයට දෙවැනි අත් භාණ්ඩ.",
    navHome: "මුල් පිටුව",
    navCategories: "කාණ්ඩ",
    navNewItems: "නව භාණ්ඩ",
    navHowToUse: "භාවිතා කරන ආකාරය",
    navContact: "සම්බන්ධ වන්න",
    search: "භාණ්ඩ සොයන්න",
    line: "LINE මගින් විමසන්න",
    photoJa: "ඡායාරූපයක් එක් කරන්න",
    photoEn: "Add your photo",
    heroTitle: "ඔබේ නිවසට විශේෂ භාණ්ඩ සොයාගන්න",
    heroLead: "ගෘහ භාණ්ඩ, විදුලි උපකරණ සහ දෛනික භාණ්ඩ පහසු මිලට ලබාදෙන රීයූස් මාර්කට් එකකි.",
    heroSub: "Affordable second-hand furniture, appliances, and daily goods for people starting a new life in Japan.",
    viewItems: "භාණ්ඩ බලන්න",
    howFlow: "භාවිතා කරන ආකාරය",
    categoriesJa: "කාණ්ඩ අනුව සොයන්න",
    categoriesEn: "Browse by category",
    newItemsJa: "නව භාණ්ඩ",
    newItemsEn: "New Items",
    viewAll: "සියල්ල බලන්න",
    featuredJa: "නිර්දේශිත භාණ්ඩය",
    featuredEn: "Featured Item",
    popular: "ජනප්‍රිය භාණ්ඩය",
    popularEn: "Popular",
    delivery: "ගැනීම / බෙදාහැරීම හැක",
    deliveryEn: "Pickup / Delivery available",
    productNote: "මෙය භාවිතා කළ භාණ්ඩයකි. කුඩා සීරීම් හෝ භාවිත ලකුණු තිබිය හැකි නමුත් භාවිතයට ගැටලුවක් නැත. ජපානයේ ජීවිතය ආරම්භ කරන අයට සුදුසුය.",
    checked: "ක්‍රියාකාරිත්වය පරීක්ෂා කර ඇත",
    cleaned: "පිරිසිදු කර ඇත",
    womenSupport: "කාන්තා සහාය ඇත",
    askLine: "මෙම භාණ්ඩය ගැන LINE මගින් විමසන්න",
    footerLead: "ජපානයේ නව ජීවිතය සැහැල්ලුවෙන් හා සතුටින් ආරම්භ කරන්න.",
    footerSub: "A gentle start to your new life in Japan.",
    quickLinks: "ඉක්මන් සබැඳි",
    support: "සහාය",
    faq: "FAQ",
    deliveryFooter: "බෙදාහැරීම / ගැනීම",
    payment: "ගෙවීම් ක්‍රම",
    legal: "නීති තොරතුරු",
    contactUs: "විමසන්න",
    contactMail: "සම්බන්ධ වන්න",
  },
  ne: {
    subtitle: "जापानमा तपाईंको नयाँ जीवनका लागि सेकेन्ड-ह्यान्ड सामानहरू।",
    navHome: "होम",
    navCategories: "वर्गहरू",
    navNewItems: "नयाँ सामान",
    navHowToUse: "कसरी प्रयोग गर्ने",
    navContact: "सम्पर्क",
    search: "सामान खोज्नुहोस्",
    line: "LINE मा सोध्नुहोस्",
    photoJa: "फोटो थप्नुहोस्",
    photoEn: "Add your photo",
    heroTitle: "तपाईंको घरका लागि विशेष सामानहरू भेट्टाउनुहोस्",
    heroLead: "फर्निचर, इलेक्ट्रोनिक्स र दैनिक सामानहरू सजिलो मूल्यमा उपलब्ध गराउने रियूज मार्केट हो।",
    heroSub: "Affordable second-hand furniture, appliances, and daily goods for people starting a new life in Japan.",
    viewItems: "सामान हेर्नुहोस्",
    howFlow: "प्रयोग गर्ने तरिका",
    categoriesJa: "वर्गबाट खोज्नुहोस्",
    categoriesEn: "Browse by category",
    newItemsJa: "नयाँ सामान",
    newItemsEn: "New Items",
    viewAll: "सबै हेर्नुहोस्",
    featuredJa: "सिफारिस गरिएको सामान",
    featuredEn: "Featured Item",
    popular: "लोकप्रिय सामान",
    popularEn: "Popular",
    delivery: "पिकअप / डेलिभरी उपलब्ध",
    deliveryEn: "Pickup / Delivery available",
    productNote: "यो सेकेन्ड-ह्यान्ड सामान हो। साना खरोंच वा प्रयोगका चिन्ह हुन सक्छन्, तर प्रयोगमा समस्या छैन। जापानमा नयाँ जीवन सुरु गर्नेहरूका लागि उपयुक्त छ।",
    checked: "काम गर्ने जाँच गरिएको",
    cleaned: "सफा गरिएको",
    womenSupport: "महिला सहयोग उपलब्ध",
    askLine: "यो सामानबारे LINE मा सोध्नुहोस्",
    footerLead: "जापानमा नयाँ जीवन सजिलो र रमाइलो रूपमा सुरु गर्नुहोस्।",
    footerSub: "A gentle start to your new life in Japan.",
    quickLinks: "छिटो लिंकहरू",
    support: "सहयोग",
    faq: "FAQ",
    deliveryFooter: "डेलिभरी / पिकअप",
    payment: "भुक्तानी विधि",
    legal: "नियमहरू",
    contactUs: "यहाँ सोध्नुहोस्",
    contactMail: "सम्पर्क",
  },
  id: {
    subtitle: "Barang bekas untuk memulai hidup baru Anda di Jepang.",
    navHome: "Beranda",
    navCategories: "Kategori",
    navNewItems: "Barang Baru",
    navHowToUse: "Cara Pakai",
    navContact: "Kontak",
    search: "Cari barang",
    line: "Konsultasi via LINE",
    photoJa: "Tambah foto",
    photoEn: "Add your photo",
    heroTitle: "Temukan barang unik untuk rumah Anda",
    heroLead: "Reuse market yang menyediakan furnitur, peralatan elektronik, dan barang harian dengan harga ramah.",
    heroSub: "Affordable second-hand furniture, appliances, and daily goods for people starting a new life in Japan.",
    viewItems: "Lihat barang",
    howFlow: "Cara pakai",
    categoriesJa: "Cari berdasarkan kategori",
    categoriesEn: "Browse by category",
    newItemsJa: "Barang baru",
    newItemsEn: "New Items",
    viewAll: "Lihat semua",
    featuredJa: "Barang rekomendasi",
    featuredEn: "Featured Item",
    popular: "Barang populer",
    popularEn: "Popular",
    delivery: "Bisa ambil sendiri / dikirim",
    deliveryEn: "Pickup / Delivery available",
    productNote: "Ini adalah barang bekas. Mungkin ada goresan kecil atau tanda pemakaian, tetapi masih dapat digunakan dengan baik. Cocok untuk orang yang baru mulai tinggal di Jepang.",
    checked: "Sudah dicek",
    cleaned: "Sudah dibersihkan",
    womenSupport: "Dukungan perempuan tersedia",
    askLine: "Tanya barang ini via LINE",
    footerLead: "Mulai hidup baru di Jepang dengan mudah dan menyenangkan.",
    footerSub: "A gentle start to your new life in Japan.",
    quickLinks: "Tautan cepat",
    support: "Bantuan",
    faq: "FAQ",
    deliveryFooter: "Pengiriman / ambil sendiri",
    payment: "Metode pembayaran",
    legal: "Info legal",
    contactUs: "Konsultasi di sini",
    contactMail: "Kontak",
  },
} satisfies Record<LanguageCode, Record<string, string>>;

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
    name: "KiMEGURi Starter Pack",
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

const categoryNames: Record<LanguageCode, Record<string, string>> = { ja: { Furniture: "\u5BB6\u5177", Appliances: "\u5BB6\u96FB", "Daily Goods": "\u65E5\u7528\u54C1\u30FB\u96D1\u8CA8", Kitchen: "\u30AD\u30C3\u30C1\u30F3\u7528\u54C1", Bedding: "\u5BDD\u5177", "Starter Sets": "\u65B0\u751F\u6D3B\u30BB\u30C3\u30C8", },
  vi: {
    Furniture: "Nội thất",
    Appliances: "Đồ điện",
    "Daily Goods": "Đồ dùng hằng ngày",
    Kitchen: "Đồ bếp",
    Bedding: "Chăn ga gối",
    "Starter Sets": "Bộ đồ mới",
  },
  si: {
    Furniture: "ගෘහ භාණ්ඩ",
    Appliances: "විදුලි උපකරණ",
    "Daily Goods": "දෛනික භාණ්ඩ",
    Kitchen: "කුස්සි භාණ්ඩ",
    Bedding: "නිදන භාණ්ඩ",
    "Starter Sets": "ආරම්භක කට්ටල",
  },
  ne: {
    Furniture: "फर्निचर",
    Appliances: "विद्युतीय सामान",
    "Daily Goods": "दैनिक सामान",
    Kitchen: "भान्सा सामान",
    Bedding: "ओछ्यान सामान",
    "Starter Sets": "स्टार्टर सेट",
  },
  id: {
    Furniture: "Furnitur",
    Appliances: "Elektronik",
    "Daily Goods": "Barang harian",
    Kitchen: "Peralatan dapur",
    Bedding: "Perlengkapan tidur",
    "Starter Sets": "Paket awal",
  },
};

const productNames: Record<LanguageCode, Record<string, { name: string; status: string; badge?: string }>> = { ja: { "R-001": { name: "\u51B7\u8535\u5EAB 120L", status: "\u6E05\u6383\u6E08\u307F\u30FB\u72B6\u614B\u826F\u597D", badge: "\u4EBA\u6C17" }, "F-002": { name: "\u6728\u88FD\u30C0\u30A4\u30CB\u30F3\u30B0\u30C1\u30A7\u30A2", status: "\u826F\u54C1\u30FB\u7F8E\u54C1", badge: "\u304A\u3059\u3059\u3081" }, "K-003": { name: "\u30AD\u30C3\u30C1\u30F3\u7528\u54C1\u30BB\u30C3\u30C8", status: "\u30BB\u30C3\u30C8\u5546\u54C1", badge: "\u4EBA\u6C17" }, "S-004": { name: "\u65B0\u751F\u6D3B\u30B9\u30BF\u30FC\u30C8\u30BB\u30C3\u30C8", status: "\u304A\u3059\u3059\u3081", badge: "\u304A\u3059\u3059\u3081" }, "E-005": { name: "\u96FB\u6C17\u30B1\u30C8\u30EB", status: "\u6E05\u6383\u6E08\u307F\u30FB\u72B6\u614B\u826F\u597D" }, },
  vi: {
    "R-001": { name: "Tủ lạnh 120L", status: "Đã vệ sinh, tình trạng tốt", badge: "Phổ biến" },
    "F-002": { name: "Ghế ăn gỗ", status: "Đã qua sử dụng - tốt", badge: "Gợi ý" },
    "K-003": { name: "Bộ đồ bếp cơ bản", status: "Sản phẩm theo bộ", badge: "Phổ biến" },
    "S-004": { name: "Bộ khởi đầu cuộc sống mới", status: "Gợi ý", badge: "Gợi ý" },
    "E-005": { name: "Ấm đun nước điện", status: "Đã vệ sinh, tình trạng tốt" },
  },
  si: {
    "R-001": { name: "ශීතකරණය 120L", status: "පිරිසිදු කර ඇත, තත්ත්වය හොඳයි", badge: "ජනප්‍රිය" },
    "F-002": { name: "ලී ආහාර පුටුව", status: "භාවිතා කළ - හොඳයි", badge: "නිර්දේශිත" },
    "K-003": { name: "කුස්සි ආරම්භක කට්ටලය", status: "කට්ටල භාණ්ඩය", badge: "ජනප්‍රිය" },
    "S-004": { name: "නව ජීවිත ආරම්භක කට්ටලය", status: "නිර්දේශිත", badge: "නිර්දේශිත" },
    "E-005": { name: "විදුලි කෙට්ල්", status: "පිරිසිදු කර ඇත, තත්ත්වය හොඳයි" },
  },
  ne: {
    "R-001": { name: "फ्रिज 120L", status: "सफा गरिएको, राम्रो अवस्था", badge: "लोकप्रिय" },
    "F-002": { name: "काठको डाइनिङ कुर्सी", status: "प्रयोग गरिएको - राम्रो", badge: "सिफारिस" },
    "K-003": { name: "भान्सा स्टार्टर सेट", status: "सेट सामान", badge: "लोकप्रिय" },
    "S-004": { name: "नयाँ जीवन स्टार्टर प्याक", status: "सिफारिस", badge: "सिफारिस" },
    "E-005": { name: "इलेक्ट्रिक केतली", status: "सफा गरिएको, राम्रो अवस्था" },
  },
  id: {
    "R-001": { name: "Kulkas 120L", status: "Sudah dibersihkan, kondisi baik", badge: "Populer" },
    "F-002": { name: "Kursi makan kayu", status: "Bekas - baik", badge: "Rekomendasi" },
    "K-003": { name: "Paket dapur awal", status: "Barang paket", badge: "Populer" },
    "S-004": { name: "Paket awal hidup baru", status: "Rekomendasi", badge: "Rekomendasi" },
    "E-005": { name: "Ketel listrik", status: "Sudah dibersihkan, kondisi baik" },
  },
};

const stepLabels: Record<LanguageCode, Array<{ label: string; sub: string }>> = { ja: [ { label: "\u5546\u54C1\u3092\u898B\u308B", sub: "Browse items" }, { label: "\u6C17\u306B\u306A\u308B\u5546\u54C1\u3092\u9078\u3076", sub: "Choose an item" }, { label: "LINE\u3067\u554F\u3044\u5408\u308F\u305B", sub: "Contact us on LINE" }, { label: "\u5728\u5EAB\u30FB\u53D7\u3051\u6E21\u3057\u78BA\u8A8D", sub: "Confirm availability" }, { label: "\u53D7\u3051\u53D6\u308A\u30FB\u304A\u652F\u6255\u3044", sub: "Receive & pay" }, ],
  vi: [
    { label: "Xem sản phẩm", sub: "Browse items" },
    { label: "Chọn sản phẩm", sub: "Choose an item" },
    { label: "Liên hệ qua LINE", sub: "Contact us on LINE" },
    { label: "Xác nhận hàng", sub: "Confirm availability" },
    { label: "Nhận hàng & thanh toán", sub: "Receive & pay" },
  ],
  si: [
    { label: "භාණ්ඩ බලන්න", sub: "Browse items" },
    { label: "භාණ්ඩයක් තෝරන්න", sub: "Choose an item" },
    { label: "LINE මගින් සම්බන්ධ වන්න", sub: "Contact us on LINE" },
    { label: "ලබාගැනීම තහවුරු කරන්න", sub: "Confirm availability" },
    { label: "ලබාගෙන ගෙවන්න", sub: "Receive & pay" },
  ],
  ne: [
    { label: "सामान हेर्नुहोस्", sub: "Browse items" },
    { label: "सामान छान्नुहोस्", sub: "Choose an item" },
    { label: "LINE मा सम्पर्क", sub: "Contact us on LINE" },
    { label: "उपलब्धता पुष्टि", sub: "Confirm availability" },
    { label: "प्राप्ति र भुक्तानी", sub: "Receive & pay" },
  ],
  id: [
    { label: "Lihat barang", sub: "Browse items" },
    { label: "Pilih barang", sub: "Choose an item" },
    { label: "Hubungi via LINE", sub: "Contact us on LINE" },
    { label: "Konfirmasi stok", sub: "Confirm availability" },
    { label: "Terima & bayar", sub: "Receive & pay" },
  ],
};

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

function PhotoPlaceholder({ large = false, t }: { large?: boolean; t: Record<string, string> }) {
  return (
    <div
      className={cn(
        "flex flex-col items-center justify-center rounded-[1.4rem] bg-gradient-to-br from-[#F5F0EA] to-[#EEE8E0] text-stone-400",
        large ? "h-full min-h-[300px]" : "h-36",
      )}
    >
      <ImageIcon size={large ? 54 : 34} strokeWidth={1.4} />
      <div className="mt-3 text-sm font-medium">{t.photoJa}</div>
      <div className="text-xs">{t.photoEn}</div>
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

function Header({ t }: { t: Record<string, string> }) {
  return (
    <header className="sticky top-0 z-20 border-b border-[#E8DDD1] bg-[#FBF8F3]/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6">
        <a href="#top" className="flex items-center gap-3" aria-label="KiMEGURi Reuse Market Home">
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-[#C8B49B] bg-white text-[#54805D]">
            <Home size={25} strokeWidth={1.6} />
          </div>
          <div>
            <div className="text-xl font-semibold tracking-tight sm:text-2xl">
              <span className="text-[#C86F58]">KiMEGURi</span> Reuse Market
            </div>
            <div className="hidden text-xs tracking-wide text-stone-500 sm:block">
              {t.subtitle}
            </div>
          </div>
        </a>

        <nav className="hidden items-center gap-7 text-xs text-stone-700 lg:flex" aria-label="Main navigation">
          <a href="#top" className="flex flex-col items-center gap-1 text-[#C86F58]"><Home size={18} />{t.navHome}</a>
          <a href="#categories" className="flex flex-col items-center gap-1 hover:text-[#C86F58]"><Grid2X2 size={18} />{t.navCategories}</a>
          <a href="#new-items" className="flex flex-col items-center gap-1 hover:text-[#C86F58]"><Sparkles size={18} />{t.navNewItems}</a>
          <a href="#how-to-use" className="flex flex-col items-center gap-1 hover:text-[#C86F58]"><BookOpen size={18} />{t.navHowToUse}</a>
          <a href="#contact" className="flex flex-col items-center gap-1 hover:text-[#C86F58]"><Mail size={18} />{t.navContact}</a>
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <label className="flex items-center gap-2 rounded-full border border-[#E2D5C6] bg-white px-4 py-2 text-xs text-stone-400">
            <span className="sr-only">{t.search}</span>
            <input className="w-24 bg-transparent outline-none placeholder:text-stone-400" placeholder={t.search} />
            <Search size={15} />
          </label>
          <a
            href={LINE_URL}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-[#4E9D5C] px-5 py-2.5 text-sm font-medium text-white transition hover:bg-[#438B50]"
          >
            <MessageCircle size={16} /> {t.line}
          </a>
        </div>

        <button className="inline-flex rounded-full border border-[#E2D5C6] bg-white p-2 text-stone-700 lg:hidden" aria-label="Open menu">
          <Menu size={22} />
        </button>
      </div>
    </header>
  );
}

function Hero({
  currentLanguage,
  onLanguageChange,
  t,
}: {
  currentLanguage: LanguageCode;
  onLanguageChange: (language: LanguageCode) => void;
  t: Record<string, string>;
}) {
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);
  const currentOption = languageOptions.find((language) => language.code === currentLanguage) ?? languageOptions[0];

  return (
    <section id="top" className="grid gap-10 rounded-[1.8rem] border border-[#E8DDD1] bg-white p-6 shadow-sm md:grid-cols-[0.95fr_1.05fr] md:p-12">
      <div className="flex flex-col justify-center">
        <div className="relative mb-6 w-fit" aria-label="Language support">
          <button
            type="button"
            aria-label="Choose language"
            aria-expanded={isLanguageOpen}
            onClick={() => setIsLanguageOpen((open) => !open)}
            className="flex items-center gap-2 rounded-full border border-[#E8DDD1] bg-white px-4 py-2 text-sm font-medium text-[#C86F58] shadow-sm transition hover:-translate-y-0.5 hover:border-[#C86F58] hover:shadow-md"
          >
            <Globe size={20} strokeWidth={1.7} />
            <span className="text-xl">{currentOption.flag}</span>
          </button>
          {isLanguageOpen ? (
            <div className="absolute left-0 top-14 z-30 w-56 overflow-hidden rounded-2xl border border-[#E8DDD1] bg-white py-2 shadow-xl">
              {languageOptions.map((language) => (
                <button
                  key={language.code}
                  type="button"
                  className={cn(
                    "flex w-full items-center gap-3 px-4 py-3 text-left text-sm font-medium transition hover:bg-[#FBF8F3] hover:text-[#C86F58]",
                    currentLanguage === language.code ? "bg-[#FBF8F3] text-[#C86F58]" : "text-stone-700",
                  )}
                  onClick={() => {
                    onLanguageChange(language.code);
                    setIsLanguageOpen(false);
                  }}
                >
                  <span className="text-xl">{language.flag}</span>
                  <span>{language.label}</span>
                </button>
              ))}
            </div>
          ) : null}
        </div>
        <h1 className="text-4xl font-semibold leading-[1.35] tracking-[0.04em] text-stone-900 md:text-5xl">
          {t.heroTitle}
        </h1>
        <p className="mt-4 text-xl font-medium tracking-wide text-[#C86F58]">{t.heroLead}</p>
        {t.heroSub ? <p className="mt-2 text-sm leading-6 text-stone-500">{t.heroSub}</p> : null}
        <div className="mt-8 flex flex-wrap gap-4">
          <a href="#new-items" className="inline-flex items-center justify-center gap-2 rounded-full bg-[#C86F58] px-7 py-4 text-sm font-medium text-white transition hover:bg-[#B8614D]">
            <ShoppingBag size={18} /> {t.viewItems}
          </a>
          <a href="#how-to-use" className="inline-flex items-center justify-center gap-2 rounded-full border border-[#C8B49B] bg-white px-7 py-4 text-sm font-medium text-stone-700 transition hover:bg-[#FBF8F3]">
            <BookOpen size={18} /> {t.howFlow}
          </a>
        </div>
      </div>
      <PhotoPlaceholder large t={t} />
    </section>
  );
}

function CategorySection({ language, t }: { language: LanguageCode; t: Record<string, string> }) {
  return (
    <section id="categories" className="mt-12 scroll-mt-24">
      <SectionTitle ja={t.categoriesJa} en={t.categoriesEn} />
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-6">
        {categories.map((category) => {
          const Icon = category.icon;
          return (
            <Card key={category.name} className={cn("rounded-[1.4rem]", category.tone)}>
              <CardContent className="flex min-h-44 flex-col items-center justify-center p-5 text-center">
                <Icon size={42} strokeWidth={1.35} className="mb-4 text-stone-700" />
                <div className="font-semibold tracking-wide">{categoryNames[language][category.name]}</div>
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
  language,
  t,
}: {
  product: Product;
  isSelected: boolean;
  onSelect: (product: Product) => void;
  language: LanguageCode;
  t: Record<string, string>;
}) {
  const localizedProduct = productNames[language][product.id];

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
                {localizedProduct.badge ?? product.badge}
              </span>
            ) : null}
            <PhotoPlaceholder t={t} />
          </div>
          <div className="mt-4">
            <div className="font-semibold tracking-wide">{localizedProduct.name}</div>
            <div className="text-xs text-stone-500">{product.name}</div>
            <div className="mt-2 text-2xl font-semibold text-[#C86F58]">{product.price}</div>
            <div className={cn("mt-3 rounded-xl px-3 py-2 text-center text-xs font-medium", product.tone)}>
              <div>{localizedProduct.status}</div>
              <div className="text-[11px] opacity-80">{product.status}</div>
            </div>
          </div>
        </CardContent>
      </Card>
    </button>
  );
}

function NewItemsSection({
  selected,
  onSelect,
  language,
  t,
}: {
  selected: Product;
  onSelect: (product: Product) => void;
  language: LanguageCode;
  t: Record<string, string>;
}) {
  return (
    <section id="new-items" className="mt-14 scroll-mt-24">
      <div className="mb-6 flex items-center justify-between">
        <div className="mx-auto md:mx-0">
          <SectionTitle ja={t.newItemsJa} en={t.newItemsEn} />
        </div>
        <Button variant="outline" className="hidden px-5 py-2.5 text-stone-600 md:inline-flex">
          {t.viewAll}
        </Button>
      </div>
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            isSelected={selected.id === product.id}
            onSelect={onSelect}
            language={language}
            t={t}
          />
        ))}
      </div>
    </section>
  );
}

function FeaturedProduct({ selected, language, t }: { selected: Product; language: LanguageCode; t: Record<string, string> }) {
  const localizedProduct = productNames[language][selected.id];

  return (
    <section className="mt-10 grid gap-8 rounded-[1.7rem] border border-[#E8DDD1] bg-white p-5 shadow-sm lg:grid-cols-[0.95fr_1.55fr] lg:p-7">
      <div className="relative">
        <div className="absolute left-0 top-0 z-10 rounded-br-2xl rounded-tl-[1.4rem] bg-[#D69A4E] px-4 py-3 text-sm font-medium text-white">
          {t.popular}<br /><span className="text-xs opacity-90">{t.popularEn}</span>
        </div>
        <PhotoPlaceholder large t={t} />
      </div>

      <div className="grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
        <div className="flex flex-col justify-center">
          <div className="mb-3 flex items-center gap-2 text-[#54805D]">
            <span className="h-6 w-1 rounded-full bg-[#9EB99A]" />
            <div>
              <div className="text-xl font-semibold tracking-wide">{t.featuredJa}</div>
              <div className="text-xs text-stone-500">{t.featuredEn}</div>
            </div>
          </div>
          <h3 className="text-3xl font-semibold tracking-wide">{localizedProduct.name}</h3>
          <p className="text-stone-500">{selected.name}</p>
          <div className="mt-4 text-4xl font-semibold text-[#C86F58]">{selected.price}</div>
          <div className="mt-5 space-y-3 text-sm">
            <div className="rounded-xl bg-[#EDF4EC] px-4 py-3 text-[#58715A]">
              <CheckCircle2 className="mr-2 inline" size={17} />
              {localizedProduct.status}
              <br />
              <span className="ml-6 text-xs">{selected.status}</span>
            </div>
            <div className="rounded-xl bg-[#E9F2F7] px-4 py-3 text-[#466B82]">
              <Truck className="mr-2 inline" size={17} />
              {t.delivery}
              <br />
              <span className="ml-6 text-xs">{t.deliveryEn}</span>
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-center">
          <p className="text-sm leading-7 text-stone-700">
            {t.productNote}            <span className="mt-5 block rounded-2xl border border-[#E8DDD1] bg-[#FBF8F3] p-4">              <span className="block text-sm font-semibold text-stone-800">{localizedProduct.name} \u306E\u8A73\u3057\u3044\u8AAC\u660E</span>              <span className="mt-2 block text-xs leading-6 text-stone-600">                \u30AD\u30BA\u30FB\u4F7F\u7528\u611F\u30FB\u30B5\u30A4\u30BA\u30FB\u53D7\u3051\u6E21\u3057\u65B9\u6CD5\u306A\u3069\u3092\u3001\u5199\u771F\u3084\u52D5\u753B\u3068\u4E00\u7DD2\u306B\u78BA\u8A8D\u3067\u304D\u307E\u3059\u3002              </span>              <span className="mt-1 block text-xs leading-6 text-stone-500">                Check condition, size, pickup details, photos, and video before asking on LINE.              </span>              <span className="mt-4 grid gap-2 sm:grid-cols-3">                <span className="rounded-xl bg-white px-3 py-2 text-xs text-stone-600">                  <span className="block font-semibold text-stone-800">\u5199\u771F</span>                  3\u679A\u307E\u3067\u8FFD\u52A0                </span>                <span className="rounded-xl bg-white px-3 py-2 text-xs text-stone-600">                  <span className="block font-semibold text-stone-800">\u52D5\u753B</span>                  1\u672C\u307E\u3067\u8FFD\u52A0                </span>                <span className="rounded-xl bg-white px-3 py-2 text-xs text-stone-600">                  <span className="block font-semibold text-stone-800">\u8A73\u7D30</span>                  \u72B6\u614B\u30FB\u30B5\u30A4\u30BA                </span>              </span>            </span>            <span className="mt-5 block rounded-2xl border border-[#E8DDD1] bg-[#FBF8F3] p-4">              <span className="block text-sm font-semibold text-stone-800">{localizedProduct.name} \u306E\u8A73\u3057\u3044\u8AAC\u660E</span>              <span className="mt-2 block text-xs leading-6 text-stone-600">                \u30AD\u30BA\u30FB\u4F7F\u7528\u611F\u30FB\u30B5\u30A4\u30BA\u30FB\u53D7\u3051\u6E21\u3057\u65B9\u6CD5\u306A\u3069\u3092\u3001\u5199\u771F\u3084\u52D5\u753B\u3068\u4E00\u7DD2\u306B\u78BA\u8A8D\u3067\u304D\u307E\u3059\u3002              </span>              <span className="mt-1 block text-xs leading-6 text-stone-500">                Check condition, size, pickup details, photos, and video before asking on LINE.              </span>              <span className="mt-4 grid gap-2 sm:grid-cols-3">                <span className="rounded-xl bg-white px-3 py-2 text-xs text-stone-600">                  <span className="block font-semibold text-stone-800">\u5199\u771F</span>                  3\u679A\u307E\u3067\u8FFD\u52A0                </span>                <span className="rounded-xl bg-white px-3 py-2 text-xs text-stone-600">                  <span className="block font-semibold text-stone-800">\u52D5\u753B</span>                  1\u672C\u307E\u3067\u8FFD\u52A0                </span>                <span className="rounded-xl bg-white px-3 py-2 text-xs text-stone-600">                  <span className="block font-semibold text-stone-800">\u8A73\u7D30</span>                  \u72B6\u614B\u30FB\u30B5\u30A4\u30BA                </span>            <span className="mt-5 block rounded-2xl border border-[#E8DDD1] bg-[#FBF8F3] p-4">              <span className="block text-sm font-semibold text-stone-800">{localizedProduct.name} \u306E\u8A73\u3057\u3044\u8AAC\u660E</span>              <span className="mt-2 block text-xs leading-6 text-stone-600">                \u30AD\u30BA\u30FB\u4F7F\u7528\u611F\u30FB\u30B5\u30A4\u30BA\u30FB\u53D7\u3051\u6E21\u3057\u65B9\u6CD5\u306A\u3069\u3092\u3001\u5199\u771F\u3084\u52D5\u753B\u3068\u4E00\u7DD2\u306B\u78BA\u8A8D\u3067\u304D\u307E\u3059\u3002              </span>              <span className="mt-1 block text-xs leading-6 text-stone-500">                Check condition, size, pickup details, photos, and video before asking on LINE.              </span>              <span className="mt-4 grid gap-2 sm:grid-cols-3">                <span className="rounded-xl bg-white px-3 py-2 text-xs text-stone-600">                  <span className="block font-semibold text-stone-800">\u5199\u771F</span>                  3\u679A\u307E\u3067\u8FFD\u52A0                </span>                <span className="rounded-xl bg-white px-3 py-2 text-xs text-stone-600">                  <span className="block font-semibold text-stone-800">\u52D5\u753B</span>                  1\u672C\u307E\u3067\u8FFD\u52A0                </span>                <span className="rounded-xl bg-white px-3 py-2 text-xs text-stone-600">                  <span className="block font-semibold text-stone-800">\u8A73\u7D30</span>            <span className="mt-5 block rounded-2xl border border-[#E8DDD1] bg-[#FBF8F3] p-4">              <span className="block text-sm font-semibold text-stone-800">{localizedProduct.name} \u306E\u8A73\u3057\u3044\u8AAC\u660E</span>              <span className="mt-2 block text-xs leading-6 text-stone-600">                \u30AD\u30BA\u30FB\u4F7F\u7528\u611F\u30FB\u30B5\u30A4\u30BA\u30FB\u53D7\u3051\u6E21\u3057\u65B9\u6CD5\u306A\u3069\u3092\u3001\u5199\u771F\u3084\u52D5\u753B\u3068\u4E00\u7DD2\u306B\u78BA\u8A8D\u3067\u304D\u307E\u3059\u3002              </span>              <span className="mt-1 block text-xs leading-6 text-stone-500">                Check condition, size, pickup details, photos, and video before asking on LINE.              </span>              <span className="mt-4 grid gap-2 sm:grid-cols-3">                <span className="rounded-xl bg-white px-3 py-2 text-xs text-stone-600">                  <span className="block font-semibold text-stone-800">\u5199\u771F</span>                  3\u679A\u307E\u3067\u8FFD\u52A0                </span>                <span className="rounded-xl bg-white px-3 py-2 text-xs text-stone-600">                  <span className="block font-semibold text-stone-800">\u52D5\u753B</span>                  1\u672C\u307E\u3067\u8FFD\u52A0                </span>            <span className="mt-5 block rounded-2xl border border-[#E8DDD1] bg-[#FBF8F3] p-4">              <span className="block text-sm font-semibold text-stone-800">{localizedProduct.name} \u306E\u8A73\u3057\u3044\u8AAC\u660E</span>              <span className="mt-2 block text-xs leading-6 text-stone-600">                \u30AD\u30BA\u30FB\u4F7F\u7528\u611F\u30FB\u30B5\u30A4\u30BA\u30FB\u53D7\u3051\u6E21\u3057\u65B9\u6CD5\u306A\u3069\u3092\u3001\u5199\u771F\u3084\u52D5\u753B\u3068\u4E00\u7DD2\u306B\u78BA\u8A8D\u3067\u304D\u307E\u3059\u3002              </span>              <span className="mt-1 block text-xs leading-6 text-stone-500">                Check condition, size, pickup details, photos, and video before asking on LINE.              </span>              <span className="mt-4 grid gap-2 sm:grid-cols-3">                <span className="rounded-xl bg-white px-3 py-2 text-xs text-stone-600">                  <span className="block font-semibold text-stone-800">\u5199\u771F</span>                  3\u679A\u307E\u3067\u8FFD\u52A0                </span>                <span className="rounded-xl bg-white px-3 py-2 text-xs text-stone-600">                  <span className="block font-semibold text-stone-800">\u52D5\u753B</span>            <span className="mt-5 block rounded-2xl border border-[#E8DDD1] bg-[#FBF8F3] p-4">              <span className="block text-sm font-semibold text-stone-800">{localizedProduct.name} \u306E\u8A73\u3057\u3044\u8AAC\u660E</span>              <span className="mt-2 block text-xs leading-6 text-stone-600">                \u30AD\u30BA\u30FB\u4F7F\u7528\u611F\u30FB\u30B5\u30A4\u30BA\u30FB\u53D7\u3051\u6E21\u3057\u65B9\u6CD5\u306A\u3069\u3092\u3001\u5199\u771F\u3084\u52D5\u753B\u3068\u4E00\u7DD2\u306B\u78BA\u8A8D\u3067\u304D\u307E\u3059\u3002              </span>              <span className="mt-1 block text-xs leading-6 text-stone-500">                Check condition, size, pickup details, photos, and video before asking on LINE.              </span>              <span className="mt-4 grid gap-2 sm:grid-cols-3">                <span className="rounded-xl bg-white px-3 py-2 text-xs text-stone-600">                  <span className="block font-semibold text-stone-800">\u5199\u771F</span>                  3\u679A\u307E\u3067\u8FFD\u52A0                </span>            <span className="mt-5 block rounded-2xl border border-[#E8DDD1] bg-[#FBF8F3] p-4">              <span className="block text-sm font-semibold text-stone-800">{localizedProduct.name} \u306E\u8A73\u3057\u3044\u8AAC\u660E</span>              <span className="mt-2 block text-xs leading-6 text-stone-600">                \u30AD\u30BA\u30FB\u4F7F\u7528\u611F\u30FB\u30B5\u30A4\u30BA\u30FB\u53D7\u3051\u6E21\u3057\u65B9\u6CD5\u306A\u3069\u3092\u3001\u5199\u771F\u3084\u52D5\u753B\u3068\u4E00\u7DD2\u306B\u78BA\u8A8D\u3067\u304D\u307E\u3059\u3002              </span>              <span className="mt-1 block text-xs leading-6 text-stone-500">                Check condition, size, pickup details, photos, and video before asking on LINE.              </span>              <span className="mt-4 grid gap-2 sm:grid-cols-3">                <span className="rounded-xl bg-white px-3 py-2 text-xs text-stone-600">                  <span className="block font-semibold text-stone-800">\u5199\u771F</span>            <span className="mt-5 block rounded-2xl border border-[#E8DDD1] bg-[#FBF8F3] p-4">              <span className="block text-sm font-semibold text-stone-800">{localizedProduct.name} \u306E\u8A73\u3057\u3044\u8AAC\u660E</span>              <span className="mt-2 block text-xs leading-6 text-stone-600">                \u30AD\u30BA\u30FB\u4F7F\u7528\u611F\u30FB\u30B5\u30A4\u30BA\u30FB\u53D7\u3051\u6E21\u3057\u65B9\u6CD5\u306A\u3069\u3092\u3001\u5199\u771F\u3084\u52D5\u753B\u3068\u4E00\u7DD2\u306B\u78BA\u8A8D\u3067\u304D\u307E\u3059\u3002              </span>              <span className="mt-1 block text-xs leading-6 text-stone-500">                Check condition, size, pickup details, photos, and video before asking on LINE.              </span>              <span className="mt-4 grid gap-2 sm:grid-cols-3">            <span className="mt-5 block rounded-2xl border border-[#E8DDD1] bg-[#FBF8F3] p-4">              <span className="block text-sm font-semibold text-stone-800">{localizedProduct.name} \u306E\u8A73\u3057\u3044\u8AAC\u660E</span>              <span className="mt-2 block text-xs leading-6 text-stone-600">                \u30AD\u30BA\u30FB\u4F7F\u7528\u611F\u30FB\u30B5\u30A4\u30BA\u30FB\u53D7\u3051\u6E21\u3057\u65B9\u6CD5\u306A\u3069\u3092\u3001\u5199\u771F\u3084\u52D5\u753B\u3068\u4E00\u7DD2\u306B\u78BA\u8A8D\u3067\u304D\u307E\u3059\u3002              </span>              <span className="mt-1 block text-xs leading-6 text-stone-500">                Check condition, size, pickup details, photos, and video before asking on LINE.            <span className="mt-5 block rounded-2xl border border-[#E8DDD1] bg-[#FBF8F3] p-4">              <span className="block text-sm font-semibold text-stone-800">{localizedProduct.name} \u306E\u8A73\u3057\u3044\u8AAC\u660E</span>              <span className="mt-2 block text-xs leading-6 text-stone-600">                \u30AD\u30BA\u30FB\u4F7F\u7528\u611F\u30FB\u30B5\u30A4\u30BA\u30FB\u53D7\u3051\u6E21\u3057\u65B9\u6CD5\u306A\u3069\u3092\u3001\u5199\u771F\u3084\u52D5\u753B\u3068\u4E00\u7DD2\u306B\u78BA\u8A8D\u3067\u304D\u307E\u3059\u3002              </span>            <span className="mt-5 block rounded-2xl border border-[#E8DDD1] bg-[#FBF8F3] p-4">              <span className="block text-sm font-semibold text-stone-800">{localizedProduct.name} \u306E\u8A73\u3057\u3044\u8AAC\u660E</span>              <span className="mt-2 block text-xs leading-6 text-stone-600">            <span className="mt-5 block rounded-2xl border border-[#E8DDD1] bg-[#FBF8F3] p-4">
          </p>
          <div className="mt-5 flex flex-wrap gap-2 text-xs">
            <span className="inline-flex items-center gap-1 rounded-lg border border-[#D6E1D3] bg-white px-3 py-2 text-stone-600">
              <ShieldCheck size={14} /> {t.checked}
            </span>
            <span className="inline-flex items-center gap-1 rounded-lg border border-[#D6E1D3] bg-white px-3 py-2 text-stone-600">
              <CheckCircle2 size={14} /> {t.cleaned}
            </span>
            <span className="inline-flex items-center gap-1 rounded-lg border border-[#D6E1D3] bg-white px-3 py-2 text-stone-600">
              <Heart size={14} /> {t.womenSupport}
            </span>
          </div>
          <a
            href={LINE_URL}
            target="_blank"
            rel="noreferrer"
            className="mt-6 inline-flex items-center justify-center gap-2 rounded-xl bg-[#4E9D5C] px-5 py-4 text-sm font-medium text-white transition hover:bg-[#438B50]"
          >
            <MessageCircle size={18} /> {t.askLine}
          </a>
        </div>
      </div>
    </section>
  );
}

function HowToUseSection({ language, t }: { language: LanguageCode; t: Record<string, string> }) {
  return (
    <section id="how-to-use" className="mt-12 scroll-mt-24">
      <SectionTitle ja={t.howFlow} en={t.navHowToUse} color="bg-[#E5D8C9]" />
      <div className="grid gap-4 md:grid-cols-5">
        {howToUseSteps.map((step, index) => {
          const Icon = step.icon;
          const label = stepLabels[language][index];
          return (
            <div key={step.ja} className="rounded-[1.25rem] border border-[#E8DDD1] bg-white p-5 text-center shadow-sm">
              <div className={cn("mx-auto mb-3 flex h-10 w-10 items-center justify-center rounded-full text-sm font-semibold text-white", step.tone)}>
                {String(index + 1).padStart(2, "0")}
              </div>
              <Icon className="mx-auto mb-3 text-stone-700" size={28} strokeWidth={1.4} />
              <div className="text-sm font-semibold">{label.label}</div>
              <div className="mt-1 text-xs text-stone-500">{label.sub}</div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

function Footer({ t }: { t: Record<string, string> }) {
  return (
    <footer id="contact" className="mt-14 border-t border-[#E8DDD1] bg-[#F4EEE5]">
      <div className="mx-auto grid max-w-7xl gap-8 px-6 py-8 md:grid-cols-[1.2fr_1fr_1fr_1fr]">
        <div>
          <div className="text-xl font-semibold"><span className="text-[#C86F58]">KiMEGURi</span> Reuse Market</div>
          <p className="mt-2 text-sm text-stone-600">{t.footerLead}</p>
          <p className="mt-1 text-xs text-stone-500">{t.footerSub}</p>
        </div>
        <div className="space-y-1 text-sm text-stone-600">
          <div className="mb-2 font-semibold text-stone-800">{t.quickLinks}</div>
          <p>{t.navHome}</p>
          <p>{t.navCategories}</p>
          <p>{t.navNewItems}</p>
          <p>{t.navHowToUse}</p>
        </div>
        <div className="space-y-1 text-sm text-stone-600">
          <div className="mb-2 font-semibold text-stone-800">{t.support}</div>
          <p>{t.faq}</p>
          <p>{t.deliveryFooter}</p>
          <p>{t.payment}</p>
          <p>{t.legal}</p>
        </div>
        <div>
          <div className="mb-3 font-semibold text-stone-800">{t.contactUs}</div>
          <a
            href={LINE_URL}
            target="_blank"
            rel="noreferrer"
            className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#4E9D5C] px-4 py-2.5 text-sm font-medium text-white transition hover:bg-[#438B50]"
          >
            <MessageCircle size={16} /> {t.line}
          </a>
          <a
            href="mailto:info@example.com"
            className="mt-3 inline-flex w-full items-center justify-center gap-2 rounded-full border border-[#C8B49B] bg-white px-4 py-2.5 text-sm font-medium text-stone-700 transition hover:bg-[#FBF8F3]"
          >
            <Mail size={16} /> {t.contactMail}
          </a>
        </div>
      </div>
      <div className="border-t border-[#E8DDD1] py-4 text-center text-xs text-stone-500">
        © 2025 KiMEGURi Reuse Market. All rights reserved.
      </div>
    </footer>
  );
}

export default function App() {
  const [selectedProductId, setSelectedProductId] = useState(products[0].id);
  const [language, setLanguage] = useState<LanguageCode>("ja");
  const t = translations[language];

  const selectedProduct = useMemo(() => {
    return products.find((product) => product.id === selectedProductId) ?? products[0];
  }, [selectedProductId]);

  return (
    <div className="min-h-screen bg-[#FBF8F3] text-stone-800 antialiased">
      <Header t={t} />
      <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6">
        <Hero currentLanguage={language} onLanguageChange={setLanguage} t={t} />
        <CategorySection language={language} t={t} />
        <NewItemsSection
          selected={selectedProduct}
          onSelect={(product) => setSelectedProductId(product.id)}
          language={language}
          t={t}
        />
        <FeaturedProduct selected={selectedProduct} language={language} t={t} />
        <HowToUseSection language={language} t={t} />
      </main>
      <Footer t={t} />
    </div>
  );
}
