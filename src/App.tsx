
;

import React, { useMemo, useState } from "react";
import {
      Armchair,
      Bed,
      CalendarCheck,
      CheckCircle2,
      ChevronDown,
      Grid2X2,
      Heart,
      Home,
      Image as ImageIcon,
      Mail,
      Menu,
      MessageCircle,
      Package,
      Refrigerator,
      Search,
      ShieldCheck,
      ShoppingBag,
      Sofa,
      Sparkles,
      Truck,
      Video,
} from "lucide-react";

const h = React.createElement;
const LINE_URL = "https://lin.ee/Pw6OOlu";

type LanguageCode = "ja" | "vi" | "si" | "ne" | "id";

type Product = {
      id: string;
      icon: any;
      price: string;
      tone: string;
      imageTone: string;
      category: string;
};

const languageOptions = [
    { code: "ja", label: "\u65E5\u672C\u8A9E / English", flag: "\u{1F1EF}\u{1F1F5}" },
    { code: "vi", label: "Ti\u1EBFng Vi\u1EC7t", flag: "\u{1F1FB}\u{1F1F3}" },
    { code: "si", label: "\u0DC3\u0DD2\u0D82\u0DC4\u0DBD", flag: "\u{1F1F1}\u{1F1F0}" },
    { code: "ne", label: "\u0928\u0947\u092A\u093E\u0932\u0940", flag: "\u{1F1F3}\u{1F1F5}" },
    { code: "id", label: "Bahasa Indonesia", flag: "\u{1F1EE}\u{1F1E9}" },
    ];

const translations: any = {
      ja: {
              subtitle: "\u65E5\u672C\u3067\u306E\u751F\u6D3B\u306B\u3001\u3084\u3055\u3057\u3044\u30EA\u30E6\u30FC\u30B9\u54C1\u3092",
              navHome: "\u30DB\u30FC\u30E0",
              navCategories: "\u30AB\u30C6\u30B4\u30EA\u30FC",
              navNewItems: "\u65B0\u7740\u5546\u54C1",
              navHowToUse: "\u4F7F\u3044\u65B9",
              navContact: "\u304A\u554F\u3044\u5408\u308F\u305B",
              search: "\u5546\u54C1\u3092\u691C\u7D22",
              line: "LINE\u3067\u76F8\u8AC7",
              heroTitle: "Discover Unique Treasures for your Home",
              heroLead: "\u5BB6\u5177\u30FB\u5BB6\u96FB\u30FB\u65E5\u7528\u54C1\u3092\u3001\u3084\u3055\u3057\u3044\u4FA1\u683C\u3067\u304A\u5C4A\u3051\u3059\u308B\u30EA\u30E6\u30FC\u30B9\u30DE\u30FC\u30B1\u30C3\u30C8\u3067\u3059\u3002",
              heroSub: "Affordable second-hand furniture, appliances, and daily goods for people starting a new life in Japan.",
              viewItems: "\u5546\u54C1\u3092\u898B\u308B",
              categoriesJa: "\u30AB\u30C6\u30B4\u30EA\u30FC\u304B\u3089\u63A2\u3059",
              categoriesEn: "Browse by category",
              newItemsJa: "\u65B0\u7740\u5546\u54C1",
              newItemsEn: "New Items",
              featuredJa: "\u304A\u3059\u3059\u3081\u5546\u54C1",
              featuredEn: "Featured Item",
              popular: "\u4EBA\u6C17\u5546\u54C1",
              popularEn: "Popular",
              productNote: "\u3053\u3061\u3089\u306F\u4E2D\u53E4\u54C1\u3067\u3059\u3002\u5C0F\u3055\u306A\u30AD\u30BA\u3084\u4F7F\u7528\u611F\u304C\u3042\u308B\u5834\u5408\u304C\u3042\u308A\u307E\u3059\u304C\u3001\u307E\u3060\u6C17\u6301\u3061\u3088\u304F\u4F7F\u3048\u308B\u5546\u54C1\u3067\u3059\u3002\u65E5\u672C\u3067\u751F\u6D3B\u3092\u59CB\u3081\u308B\u65B9\u306B\u304A\u3059\u3059\u3081\u3067\u3059\u3002",
              detailTitle: "\u5546\u54C1\u306E\u8A73\u3057\u3044\u8AAC\u660E",
              detailText: "\u5199\u771F\u3001\u52D5\u753B\u3001\u30B5\u30A4\u30BA\u3001\u72B6\u614B\u3001\u53D7\u3051\u6E21\u3057\u65B9\u6CD5\u3092\u3053\u3053\u306B\u8FFD\u52A0\u3067\u304D\u307E\u3059\u3002",
              photos: "\u5199\u771F",
              video: "\u52D5\u753B",
              specs: "\u8A73\u7D30",
              checked: "\u52D5\u4F5C\u78BA\u8A8D\u6E08\u307F",
              cleaned: "\u6E05\u6383\u6E08\u307F",
              support: "\u76F8\u8AC7\u3057\u3084\u3059\u3044\u30B5\u30DD\u30FC\u30C8",
              askLine: "\u3053\u306E\u5546\u54C1\u306B\u3064\u3044\u3066LINE\u3067\u76F8\u8AC7",
              delivery: "\u53D7\u3051\u53D6\u308A\u30FB\u914D\u9001\u306B\u5BFE\u5FDC\u3067\u304D\u307E\u3059",
              footerLead: "\u65E5\u672C\u3067\u306E\u751F\u6D3B\u3092\u3001\u3084\u3055\u3057\u304F\u697D\u3057\u304F\u30B9\u30BF\u30FC\u30C8\u3002",
              footerSub: "A gentle start to your life in Japan.",
      },
      vi: {
              subtitle: "\u0110\u1ED3 c\u0169 th\u00E2n thi\u1EC7n cho cu\u1ED9c s\u1ED1ng t\u1EA1i Nh\u1EADt.",
              navHome: "Trang ch\u1EE7",
              navCategories: "Danh m\u1EE5c",
              navNewItems: "H\u00E0ng m\u1EDBi",
              navHowToUse: "C\u00E1ch d\u00F9ng",
              navContact: "Li\u00EAn h\u1EC7",
              search: "T\u00ECm s\u1EA3n ph\u1EA9m",
              line: "T\u01B0 v\u1EA5n LINE",
              heroTitle: "Kh\u00E1m ph\u00E1 nh\u1EEFng m\u00F3n \u0111\u1ED3 \u0111\u1ED9c \u0111\u00E1o cho ng\u00F4i nh\u00E0 c\u1EE7a b\u1EA1n",
              heroLead: "Ch\u1EE3 \u0111\u1ED3 t\u00E1i s\u1EED d\u1EE5ng giao n\u1ED9i th\u1EA5t, \u0111\u1ED3 \u0111i\u1EC7n v\u00E0 \u0111\u1ED3 d\u00F9ng h\u1EB1ng ng\u00E0y v\u1EDBi gi\u00E1 d\u1EC5 mua.",
              heroSub: "Affordable second-hand furniture, appliances, and daily goods for people starting a new life in Japan.",
              viewItems: "Xem s\u1EA3n ph\u1EA9m",
              categoriesJa: "T\u00ECm theo danh m\u1EE5c",
              categoriesEn: "Browse by category",
              newItemsJa: "H\u00E0ng m\u1EDBi",
              newItemsEn: "New Items",
              featuredJa: "S\u1EA3n ph\u1EA9m g\u1EE3i \u00FD",
              featuredEn: "Featured Item",
              popular: "Ph\u1ED5 bi\u1EBFn",
              popularEn: "Popular",
              productNote: "\u0110\u00E2y l\u00E0 h\u00E0ng \u0111\u00E3 qua s\u1EED d\u1EE5ng. C\u00F3 th\u1EC3 c\u00F3 v\u1EBFt x\u01B0\u1EDBc nh\u1ECF, nh\u01B0ng v\u1EABn d\u00F9ng t\u1ED1t.",
              detailTitle: "Chi ti\u1EBFt s\u1EA3n ph\u1EA9m",
              detailText: "C\u00F3 th\u1EC3 th\u00EAm \u1EA3nh, video, k\u00EDch th\u01B0\u1EDBc, t\u00ECnh tr\u1EA1ng v\u00E0 c\u00E1ch nh\u1EADn h\u00E0ng.",
              photos: "\u1EA2nh",
              video: "Video",
              specs: "Chi ti\u1EBFt",
              checked: "\u0110\u00E3 ki\u1EC3m tra",
              cleaned: "\u0110\u00E3 v\u1EC7 sinh",
              support: "H\u1ED7 tr\u1EE3 d\u1EC5 h\u1ECFi",
              askLine: "H\u1ECFi qua LINE",
              delivery: "C\u00F3 nh\u1EADn h\u00E0ng ho\u1EB7c giao h\u00E0ng",
              footerLead: "B\u1EAFt \u0111\u1EA7u cu\u1ED9c s\u1ED1ng t\u1EA1i Nh\u1EADt m\u1ED9t c\u00E1ch nh\u1EB9 nh\u00E0ng.",
              footerSub: "A gentle start to your life in Japan.",
      },
      si: {
              subtitle: "\u0DA2\u0DB4\u0DCF\u0DB1\u0DBA\u0DDA \u0DA2\u0DD3\u0DC0\u0DD2\u0DAD\u0DBA\u0DA7 \u0DC3\u0DD4\u0DC4\u0DAF second-hand \u0DB7\u0DCF\u0DAB\u0DCA\u0DA9.",
              navHome: "\u0DB8\u0DD4\u0DBD\u0DCA \u0DB4\u0DD2\u0DA7\u0DD4\u0DC0",
              navCategories: "\u0D9A\u0DCF\u0DAB\u0DCA\u0DA9",
              navNewItems: "\u0DB1\u0DC0 \u0DB7\u0DCF\u0DAB\u0DCA\u0DA9",
              navHowToUse: "\u0DB7\u0DCF\u0DC0\u0DD2\u0DAD\u0DBA",
              navContact: "\u0DC3\u0DB8\u0DCA\u0DB6\u0DB1\u0DCA\u0DB0 \u0DC0\u0DB1\u0DCA\u0DB1",
              search: "\u0DB7\u0DCF\u0DAB\u0DCA\u0DA9 \u0DC3\u0DDC\u0DBA\u0DB1\u0DCA\u0DB1",
              line: "LINE \u0DC4\u0DBB\u0DC4\u0DCF \u0D85\u0DC4\u0DB1\u0DCA\u0DB1",
              heroTitle: "\u0D94\u0DB6\u0DDA \u0DB1\u0DD2\u0DC0\u0DC3\u0DA7 \u0DC0\u0DD2\u0DC1\u0DDA\u0DC2 \u0DB7\u0DCF\u0DAB\u0DCA\u0DA9 \u0DC3\u0DDC\u0DBA\u0DCF\u0D9C\u0DB1\u0DCA\u0DB1",
              heroLead: "\u0D9C\u0DD8\u0DC4 \u0DB7\u0DCF\u0DAB\u0DCA\u0DA9, \u0DC0\u0DD2\u0DAF\u0DD4\u0DBD\u0DD2 \u0D8B\u0DB4\u0D9A\u0DBB\u0DAB \u0DC3\u0DC4 \u0DAF\u0DDB\u0DB1\u0DD2\u0D9A \u0DB7\u0DCF\u0DAB\u0DCA\u0DA9 \u0DB4\u0DC4\u0DC3\u0DD4 \u0DB8\u0DD2\u0DBD\u0D9A\u0DA7 \u0DBD\u0DB6\u0DCF \u0DAF\u0DD9\u0DB1 reuse market \u0D91\u0D9A\u0D9A\u0DD2.",
              heroSub: "Affordable second-hand furniture, appliances, and daily goods for people starting a new life in Japan.",
              viewItems: "\u0DB7\u0DCF\u0DAB\u0DCA\u0DA9 \u0DB6\u0DBD\u0DB1\u0DCA\u0DB1",
              categoriesJa: "\u0D9A\u0DCF\u0DAB\u0DCA\u0DA9 \u0D85\u0DB1\u0DD4\u0DC0 \u0DC3\u0DDC\u0DBA\u0DB1\u0DCA\u0DB1",
              categoriesEn: "Browse by category",
              newItemsJa: "\u0DB1\u0DC0 \u0DB7\u0DCF\u0DAB\u0DCA\u0DA9",
              newItemsEn: "New Items",
              featuredJa: "\u0DB1\u0DD2\u0DBB\u0DCA\u0DAF\u0DDA\u0DC1\u0DD2\u0DAD \u0DB7\u0DCF\u0DAB\u0DCA\u0DA9\u0DBA",
              featuredEn: "Featured Item",
              popular: "\u0DA2\u0DB1\u0DB4\u0DCA\u200D\u0DBB\u0DD2\u0DBA",
              popularEn: "Popular",
              productNote: "\u0DB8\u0DD9\u0DBA \u0DB7\u0DCF\u0DC0\u0DD2\u0DAD\u0DCF \u0D9A\u0DC5 \u0DB7\u0DCF\u0DAB\u0DCA\u0DA9\u0DBA\u0D9A\u0DD2. \u0D9A\u0DD4\u0DA9\u0DCF \u0DC3\u0DD3\u0DBB\u0DD3\u0DB8\u0DCA \u0DAD\u0DD2\u0DB6\u0DD2\u0DBA \u0DC4\u0DD0\u0D9A\u0DD2 \u0DB1\u0DB8\u0DD4\u0DAD\u0DCA \u0DB7\u0DCF\u0DC0\u0DD2\u0DAD\u0DBA\u0DA7 \u0DC3\u0DD4\u0DAF\u0DD4\u0DC3\u0DD4\u0DBA.",
              detailTitle: "\u0DB7\u0DCF\u0DAB\u0DCA\u0DA9 \u0DC0\u0DD2\u0DC3\u0DCA\u0DAD\u0DBB",
              detailText: "\u0DA1\u0DCF\u0DBA\u0DCF\u0DBB\u0DD6\u0DB4, \u0DC0\u0DD3\u0DA9\u0DD2\u0DBA\u0DDD, \u0DB4\u0DCA\u200D\u0DBB\u0DB8\u0DCF\u0DAB\u0DBA, \u0DAD\u0DAD\u0DCA\u0DAD\u0DCA\u0DC0\u0DBA \u0DC3\u0DC4 \u0DBD\u0DB6\u0DCF\u0D9C\u0DD0\u0DB1\u0DD3\u0DB8\u0DDA \u0DC0\u0DD2\u0DC3\u0DCA\u0DAD\u0DBB \u0D91\u0D9A\u0DCA \u0D9A\u0DC5 \u0DC4\u0DD0\u0D9A.",
              photos: "\u0DA1\u0DCF\u0DBA\u0DCF\u0DBB\u0DD6\u0DB4",
              video: "\u0DC0\u0DD3\u0DA9\u0DD2\u0DBA\u0DDD",
              specs: "\u0DC0\u0DD2\u0DC3\u0DCA\u0DAD\u0DBB",
              checked: "\u0DB4\u0DBB\u0DD3\u0D9A\u0DCA\u0DC2\u0DCF \u0D9A\u0DBB \u0D87\u0DAD",
              cleaned: "\u0DB4\u0DD2\u0DBB\u0DD2\u0DC3\u0DD2\u0DAF\u0DD4 \u0D9A\u0DBB \u0D87\u0DAD",
              support: "\u0D85\u0DC4\u0DB1\u0DCA\u0DB1 \u0DB4\u0DC4\u0DC3\u0DD4 \u0DC3\u0DC4\u0DCF\u0DBA",
              askLine: "LINE \u0DC4\u0DBB\u0DC4\u0DCF \u0D85\u0DC4\u0DB1\u0DCA\u0DB1",
              delivery: "Pickup / delivery available",
              footerLead: "\u0DA2\u0DB4\u0DCF\u0DB1\u0DBA\u0DDA \u0DA2\u0DD3\u0DC0\u0DD2\u0DAD\u0DBA \u0DB4\u0DC4\u0DC3\u0DD4\u0DC0\u0DD9\u0DB1\u0DCA \u0D86\u0DBB\u0DB8\u0DCA\u0DB7 \u0D9A\u0DBB\u0DB1\u0DCA\u0DB1.",
              footerSub: "A gentle start to your life in Japan.",
      },
      ne: {
              subtitle: "\u091C\u093E\u092A\u093E\u0928\u0915\u094B \u091C\u0940\u0935\u0928\u0915\u093E \u0932\u093E\u0917\u093F \u0938\u091C\u093F\u0932\u093E reuse \u0938\u093E\u092E\u093E\u0928.",
              navHome: "\u0939\u094B\u092E",
              navCategories: "\u0936\u094D\u0930\u0947\u0923\u0940",
              navNewItems: "\u0928\u092F\u093E\u0901 \u0938\u093E\u092E\u093E\u0928",
              navHowToUse: "\u092A\u094D\u0930\u092F\u094B\u0917 \u0924\u0930\u093F\u0915\u093E",
              navContact: "\u0938\u092E\u094D\u092A\u0930\u094D\u0915",
              search: "\u0938\u093E\u092E\u093E\u0928 \u0916\u094B\u091C\u094D\u0928\u0941\u0939\u094B\u0938\u094D",
              line: "LINE \u092E\u093E \u0938\u094B\u0927\u094D\u0928\u0941\u0939\u094B\u0938\u094D",
              heroTitle: "\u0924\u092A\u093E\u0908\u0902\u0915\u094B \u0918\u0930\u0915\u093E \u0932\u093E\u0917\u093F \u0935\u093F\u0936\u0947\u0937 \u0938\u093E\u092E\u093E\u0928 \u0916\u094B\u091C\u094D\u0928\u0941\u0939\u094B\u0938\u094D",
              heroLead: "\u092B\u0930\u094D\u0928\u093F\u091A\u0930, \u0907\u0932\u0947\u0915\u094D\u091F\u094D\u0930\u094B\u0928\u093F\u0915\u094D\u0938 \u0930 \u0926\u0948\u0928\u093F\u0915 \u0938\u093E\u092E\u093E\u0928 \u0938\u091C\u093F\u0932\u094B \u092E\u0942\u0932\u094D\u092F\u092E\u093E \u0909\u092A\u0932\u092C\u094D\u0927 \u0917\u0930\u093E\u0909\u0928\u0947 reuse market \u0939\u094B\u0964",
              heroSub: "Affordable second-hand furniture, appliances, and daily goods for people starting a new life in Japan.",
              viewItems: "\u0938\u093E\u092E\u093E\u0928 \u0939\u0947\u0930\u094D\u0928\u0941\u0939\u094B\u0938\u094D",
              categoriesJa: "\u0936\u094D\u0930\u0947\u0923\u0940\u092C\u093E\u091F \u0916\u094B\u091C\u094D\u0928\u0941\u0939\u094B\u0938\u094D",
              categoriesEn: "Browse by category",
              newItemsJa: "\u0928\u092F\u093E\u0901 \u0938\u093E\u092E\u093E\u0928",
              newItemsEn: "New Items",
              featuredJa: "\u0938\u093F\u092B\u093E\u0930\u093F\u0938 \u0938\u093E\u092E\u093E\u0928",
              featuredEn: "Featured Item",
              popular: "\u0932\u094B\u0915\u092A\u094D\u0930\u093F\u092F",
              popularEn: "Popular",
              productNote: "\u092F\u094B \u0938\u0947\u0915\u0947\u0928\u094D\u0921-\u0939\u094D\u092F\u093E\u0928\u094D\u0921 \u0938\u093E\u092E\u093E\u0928 \u0939\u094B\u0964 \u0938\u093E\u0928\u093E \u092A\u094D\u0930\u092F\u094B\u0917\u0915\u093E \u091A\u093F\u0928\u094D\u0939 \u0939\u0941\u0928 \u0938\u0915\u094D\u091B\u0928\u094D \u0924\u0930 \u092A\u094D\u0930\u092F\u094B\u0917 \u0917\u0930\u094D\u0928 \u092E\u093F\u0932\u094D\u091B\u0964",
              detailTitle: "\u0938\u093E\u092E\u093E\u0928\u0915\u094B \u0935\u093F\u0935\u0930\u0923",
              detailText: "\u092B\u094B\u091F\u094B, \u092D\u093F\u0921\u093F\u092F\u094B, \u0938\u093E\u0907\u091C, \u0905\u0935\u0938\u094D\u0925\u093E \u0930 \u092A\u093F\u0915\u0905\u092A \u0935\u093F\u0935\u0930\u0923 \u092F\u0939\u093E\u0901 \u0925\u092A\u094D\u0928 \u0938\u0915\u093F\u0928\u094D\u091B\u0964",
              photos: "\u092B\u094B\u091F\u094B",
              video: "\u092D\u093F\u0921\u093F\u092F\u094B",
              specs: "\u0935\u093F\u0935\u0930\u0923",
              checked: "\u091C\u093E\u0901\u091A \u0917\u0930\u093F\u090F\u0915\u094B",
              cleaned: "\u0938\u092B\u093E \u0917\u0930\u093F\u090F\u0915\u094B",
              support: "\u0938\u094B\u0927\u094D\u0928 \u0938\u091C\u093F\u0932\u094B \u0938\u0939\u092F\u094B\u0917",
              askLine: "LINE \u092E\u093E \u0938\u094B\u0927\u094D\u0928\u0941\u0939\u094B\u0938\u094D",
              delivery: "Pickup / delivery available",
              footerLead: "\u091C\u093E\u092A\u093E\u0928\u0915\u094B \u091C\u0940\u0935\u0928 \u0938\u091C\u093F\u0932\u094B\u0938\u0901\u0917 \u0938\u0941\u0930\u0941 \u0917\u0930\u094D\u0928\u0941\u0939\u094B\u0938\u094D\u0964",
              footerSub: "A gentle start to your life in Japan.",
      },
      id: {
              subtitle: "Barang reuse ramah untuk hidup di Jepang.",
              navHome: "Beranda",
              navCategories: "Kategori",
              navNewItems: "Barang baru",
              navHowToUse: "Cara pakai",
              navContact: "Kontak",
              search: "Cari barang",
              line: "Tanya via LINE",
              heroTitle: "Temukan barang unik untuk rumah Anda",
              heroLead: "Reuse market yang mengirim furnitur, elektronik, dan barang harian dengan harga ramah.",
              heroSub: "Affordable second-hand furniture, appliances, and daily goods for people starting a new life in Japan.",
              viewItems: "Lihat barang",
              categoriesJa: "Cari dari kategori",
              categoriesEn: "Browse by category",
              newItemsJa: "Barang baru",
              newItemsEn: "New Items",
              featuredJa: "Rekomendasi",
              featuredEn: "Featured Item",
              popular: "Populer",
              popularEn: "Popular",
              productNote: "Ini barang bekas. Mungkin ada goresan kecil, tetapi masih dapat digunakan dengan baik.",
              detailTitle: "Detail produk",
              detailText: "Foto, video, ukuran, kondisi, dan detail pengambilan dapat ditambahkan di sini.",
              photos: "Foto",
              video: "Video",
              specs: "Detail",
              checked: "Sudah dicek",
              cleaned: "Sudah dibersihkan",
              support: "Dukungan mudah",
              askLine: "Tanya via LINE",
              delivery: "Pickup / delivery available",
              footerLead: "Mulai hidup di Jepang dengan ringan.",
              footerSub: "A gentle start to your life in Japan.",
      },
};

const categories = [
    { icon: Sofa, ja: "\u5BB6\u5177", en: "Furniture", count: "24" },
    { icon: Refrigerator, ja: "\u5BB6\u96FB", en: "Appliances", count: "18" },
    { icon: Package, ja: "\u65E5\u7528\u54C1", en: "Daily goods", count: "31" },
    { icon: Bed, ja: "\u5BDD\u5177", en: "Bedding", count: "12" },
    ];

const products: Product[] = [
    { id: "R-001", icon: Refrigerator, price: "\u00A512,800", tone: "bg-[#E9F2F7] text-[#466B82]", imageTone: "from-[#E9F2F7] to-[#D8E8F0]", category: "Appliance" },
    { id: "F-002", icon: Armchair, price: "\u00A53,500", tone: "bg-[#F3E8D7] text-[#8A673E]", imageTone: "from-[#F3E8D7] to-[#E5D2B6]", category: "Furniture" },
    { id: "K-003", icon: ShoppingBag, price: "\u00A52,000", tone: "bg-[#E8F0E2] text-[#55734B]", imageTone: "from-[#E8F0E2] to-[#D7E5CE]", category: "Kitchen" },
    { id: "S-004", icon: Home, price: "\u00A59,800", tone: "bg-[#F6E1DD] text-[#A05F51]", imageTone: "from-[#F6E1DD] to-[#EBCBC5]", category: "Starter set" },
    { id: "E-005", icon: Sparkles, price: "\u00A51,600", tone: "bg-[#EEE8F4] text-[#725F86]", imageTone: "from-[#EEE8F4] to-[#DFD5EA]", category: "Small appliance" },
    ];

const productNames: any = {
      ja: {
              "R-001": { name: "\u51B7\u8535\u5EAB 120L", status: "\u6E05\u6383\u6E08\u307F\u30FB\u826F\u597D", badge: "\u4EBA\u6C17" },
              "F-002": { name: "\u6728\u88FD\u30C0\u30A4\u30CB\u30F3\u30B0\u30C1\u30A7\u30A2", status: "\u4F7F\u7528\u611F\u3042\u308A\u30FB\u826F\u597D", badge: "\u304A\u3059\u3059\u3081" },
              "K-003": { name: "\u30AD\u30C3\u30C1\u30F3\u7528\u54C1\u30BB\u30C3\u30C8", status: "\u30BB\u30C3\u30C8\u5546\u54C1", badge: "\u4EBA\u6C17" },
              "S-004": { name: "\u65B0\u751F\u6D3B\u30B9\u30BF\u30FC\u30BF\u30FC\u30BB\u30C3\u30C8", status: "\u304A\u3059\u3059\u3081", badge: "\u304A\u3059\u3059\u3081" },
              "E-005": { name: "\u96FB\u6C17\u30B1\u30C8\u30EB", status: "\u6E05\u6383\u6E08\u307F\u30FB\u826F\u597D", badge: "\u65B0\u7740" },
      },
      vi: {
              "R-001": { name: "T\u1EE7 l\u1EA1nh 120L", status: "\u0110\u00E3 v\u1EC7 sinh, t\u1ED1t", badge: "Ph\u1ED5 bi\u1EBFn" },
              "F-002": { name: "Gh\u1EBF \u0103n g\u1ED7", status: "\u0110\u00E3 qua s\u1EED d\u1EE5ng - t\u1ED1t", badge: "G\u1EE3i \u00FD" },
              "K-003": { name: "B\u1ED9 \u0111\u1ED3 b\u1EBFp c\u01A1 b\u1EA3n", status: "S\u1EA3n ph\u1EA9m theo b\u1ED9", badge: "Ph\u1ED5 bi\u1EBFn" },
              "S-004": { name: "B\u1ED9 kh\u1EDFi \u0111\u1EA7u cu\u1ED9c s\u1ED1ng m\u1EDBi", status: "G\u1EE3i \u00FD", badge: "G\u1EE3i \u00FD" },
              "E-005": { name: "\u1EA4m \u0111un n\u01B0\u1EDBc \u0111i\u1EC7n", status: "\u0110\u00E3 v\u1EC7 sinh, t\u1ED1t", badge: "M\u1EDBi" },
      },
      si: {
              "R-001": { name: "\u0DC1\u0DD3\u0DAD\u0D9A\u0DBB\u0DAB\u0DBA 120L", status: "\u0DB4\u0DD2\u0DBB\u0DD2\u0DC3\u0DD2\u0DAF\u0DD4 \u0D9A\u0DBB \u0D87\u0DAD", badge: "\u0DA2\u0DB1\u0DB4\u0DCA\u200D\u0DBB\u0DD2\u0DBA" },
              "F-002": { name: "\u0DBD\u0DD3 \u0D86\u0DC4\u0DCF\u0DBB \u0DB4\u0DD4\u0DA7\u0DD4\u0DC0", status: "\u0DB7\u0DCF\u0DC0\u0DD2\u0DAD\u0DCF \u0D9A\u0DC5 - \u0DC4\u0DDC\u0DB3\u0DBA\u0DD2", badge: "\u0DB1\u0DD2\u0DBB\u0DCA\u0DAF\u0DDA\u0DC1\u0DD2\u0DAD" },
              "K-003": { name: "\u0D9A\u0DD4\u0DC3\u0DCA\u0DC3\u0DD2 \u0D86\u0DBB\u0DB8\u0DCA\u0DB7\u0D9A \u0D9A\u0DA7\u0DCA\u0DA7\u0DBD\u0DBA", status: "\u0D9A\u0DA7\u0DCA\u0DA7\u0DBD \u0DB7\u0DCF\u0DAB\u0DCA\u0DA9\u0DBA", badge: "\u0DA2\u0DB1\u0DB4\u0DCA\u200D\u0DBB\u0DD2\u0DBA" },
              "S-004": { name: "\u0DB1\u0DC0 \u0DA2\u0DD3\u0DC0\u0DD2\u0DAD \u0D86\u0DBB\u0DB8\u0DCA\u0DB7\u0D9A \u0D9A\u0DA7\u0DCA\u0DA7\u0DBD\u0DBA", status: "\u0DB1\u0DD2\u0DBB\u0DCA\u0DAF\u0DDA\u0DC1\u0DD2\u0DAD", badge: "\u0DB1\u0DD2\u0DBB\u0DCA\u0DAF\u0DDA\u0DC1\u0DD2\u0DAD" },
              "E-005": { name: "\u0DC0\u0DD2\u0DAF\u0DD4\u0DBD\u0DD2 \u0D9A\u0DD9\u0DA7\u0DCA\u0DBD\u0DCA", status: "\u0DB4\u0DD2\u0DBB\u0DD2\u0DC3\u0DD2\u0DAF\u0DD4 \u0D9A\u0DBB \u0D87\u0DAD", badge: "\u0DB1\u0DC0" },
      },
      ne: {
              "R-001": { name: "\u092B\u094D\u0930\u093F\u091C 120L", status: "\u0938\u092B\u093E \u0917\u0930\u093F\u090F\u0915\u094B", badge: "\u0932\u094B\u0915\u092A\u094D\u0930\u093F\u092F" },
              "F-002": { name: "\u0915\u093E\u0920\u0915\u094B \u0921\u093E\u0907\u0928\u093F\u0919 \u0915\u0941\u0930\u094D\u0938\u0940", status: "\u092A\u094D\u0930\u092F\u094B\u0917 \u0917\u0930\u093F\u090F\u0915\u094B - \u0930\u093E\u092E\u094D\u0930\u094B", badge: "\u0938\u093F\u092B\u093E\u0930\u093F\u0938" },
              "K-003": { name: "\u092D\u093E\u0928\u094D\u0938\u093E \u0938\u094D\u091F\u093E\u0930\u094D\u091F\u0930 \u0938\u0947\u091F", status: "\u0938\u0947\u091F \u0938\u093E\u092E\u093E\u0928", badge: "\u0932\u094B\u0915\u092A\u094D\u0930\u093F\u092F" },
              "S-004": { name: "\u0928\u092F\u093E\u0901 \u091C\u0940\u0935\u0928 \u0938\u094D\u091F\u093E\u0930\u094D\u091F\u0930 \u092A\u094D\u092F\u093E\u0915", status: "\u0938\u093F\u092B\u093E\u0930\u093F\u0938", badge: "\u0938\u093F\u092B\u093E\u0930\u093F\u0938" },
              "E-005": { name: "\u0907\u0932\u0947\u0915\u094D\u091F\u094D\u0930\u093F\u0915 \u0915\u0947\u0924\u0932\u0940", status: "\u0938\u092B\u093E \u0917\u0930\u093F\u090F\u0915\u094B", badge: "\u0928\u092F\u093E\u0901" },
      },
      id: {
              "R-001": { name: "Kulkas 120L", status: "Bersih, kondisi baik", badge: "Populer" },
              "F-002": { name: "Kursi makan kayu", status: "Bekas - baik", badge: "Rekomendasi" },
              "K-003": { name: "Set alat dapur", status: "Barang set", badge: "Populer" },
              "S-004": { name: "Paket awal hidup baru", status: "Rekomendasi", badge: "Rekomendasi" },
              "E-005": { name: "Ketel listrik", status: "Bersih, kondisi baik", badge: "Baru" },
      },
};

const flow = [
    { label: "\u5546\u54C1\u3092\u898B\u308B", sub: "Browse items", icon: Search },
    { label: "\u6C17\u306B\u306A\u308B\u5546\u54C1\u3092\u9078\u3076", sub: "Choose an item", icon: Heart },
    { label: "LINE\u3067\u554F\u3044\u5408\u308F\u305B", sub: "Contact us on LINE", icon: MessageCircle },
    { label: "\u53D7\u3051\u53D6\u308A\u3092\u78BA\u8A8D", sub: "Confirm pickup", icon: CalendarCheck },
    ];

function cn(...classes: (string | false | null | undefined)[]) {
      return classes.filter(Boolean).join(" ");
}

function Button(props: any) {
      const variant = props.variant || "primary";
      return h(
              props.href ? "a" : "button",
          {
                    href: props.href,
                    onClick: props.onClick,
                    className: cn(
                                "inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition",
                                variant === "outline"
                                  ? "border border-[#D8CABD] bg-white text-stone-700 hover:bg-[#F8F2EA]"
                                  : "bg-[#C86F58] text-white shadow-sm hover:bg-[#B95F4B]",
                                props.className
                              ),
          },
              props.children
            );
}

function SectionTitle(props: any) {
      return h("div", { className: "text-center md:text-left" },
                   h("div", { className: "text-sm font-semibold uppercase tracking-[0.18em] text-[#C86F58]" }, props.en),
                   h("h2", { className: "mt-2 text-2xl font-bold text-stone-800 md:text-3xl" }, props.ja)
                 );
}

function Header(props: any) {
      const current = languageOptions.find((option) => option.code === props.language) || languageOptions[0];
      return h("header", { className: "sticky top-0 z-50 border-b border-[#EADFD4] bg-[#FBF8F3]/95 backdrop-blur" },
                   h("div", { className: "mx-auto flex max-w-7xl items-center justify-between px-4 py-3" },
                           h("a", { href: "#top", className: "flex items-center gap-3" },
                                     h("div", { className: "grid h-11 w-11 place-items-center rounded-2xl bg-[#C86F58] text-white" }, h(Sparkles, { size: 22 })),
                                     h("div", null,
                                                 h("div", { className: "text-lg font-bold tracking-wide text-stone-800" }, h("span", { className: "text-[#C86F58]" }, "KiMEGURi"), " Reuse Market"),
                                                 h("div", { className: "text-xs text-stone-500" }, props.t.subtitle)
                                               )
                                   ),
                           h("nav", { className: "hidden items-center gap-6 text-sm font-medium text-stone-600 lg:flex" },
                                     h("a", { href: "#top" }, props.t.navHome),
                                     h("a", { href: "#categories" }, props.t.navCategories),
                                     h("a", { href: "#new-items" }, props.t.navNewItems),
                                     h("a", { href: "#how-to-use" }, props.t.navHowToUse)
                                   ),
                           h("div", { className: "flex items-center gap-2" },
                                     h("div", { className: "relative" },
                                                 h("button", {
                                                                 className: "inline-flex h-11 items-center gap-2 rounded-full border border-[#D8CABD] bg-white px-3 text-lg shadow-sm",
                                                                 onClick: () => props.setLanguageMenuOpen(!props.languageMenuOpen),
                                                                 "aria-label": "Select language",
                                                 }, h("span", null, current.flag), h(ChevronDown, { size: 16 })),
                                                 props.languageMenuOpen && h("div", { className: "absolute right-0 mt-2 w-52 rounded-2xl border border-[#E5D8CC] bg-white p-2 shadow-xl" },
                                                                                         languageOptions.map((option) =>
                                                                                                           h("button", {
                                                                                                                               key: option.code,
                                                                                                                               onClick: () => {
                                                                                                                                                     props.onLanguageChange(option.code);
                                                                                                                                                     props.setLanguageMenuOpen(false);
                                                                                                                                   },
                                                                                                                               className: cn("flex w-full items-center gap-3 rounded-xl px-3 py-2 text-left text-sm hover:bg-[#FBF3EA]", option.code === props.language && "bg-[#FBF3EA] font-semibold"),
                                                                                                               }, h("span", { className: "text-xl" }, option.flag), h("span", null, option.label))
                                                                                                                         )
                                                                                       )
                                               ),
                                     h(Button, { href: LINE_URL, className: "hidden md:inline-flex" }, h(MessageCircle, { size: 17 }), props.t.line),
                                     h("button", { className: "grid h-11 w-11 place-items-center rounded-full border border-[#D8CABD] bg-white lg:hidden" }, h(Menu, { size: 20 }))
                                   )
                         )
                 );
}

function Hero(props: any) {
      return h("section", { id: "top", className: "mx-auto grid max-w-7xl gap-8 px-4 pt-10 md:grid-cols-[1.05fr_0.95fr] md:pt-14" },
                   h("div", { className: "flex flex-col justify-center" },
                           h("div", { className: "mb-5 inline-flex w-fit items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-semibold text-[#6E8B61] shadow-sm" }, h(Sparkles, { size: 16 }), "KiMEGURi Reuse Market"),
                           h("h1", { className: "max-w-3xl text-4xl font-black leading-tight text-stone-900 md:text-6xl" }, props.t.heroTitle),
                           h("p", { className: "mt-5 max-w-2xl text-lg font-semibold leading-8 text-[#5F6F5B]" }, props.t.heroLead),
                           h("p", { className: "mt-2 max-w-2xl text-sm leading-7 text-stone-500" }, props.t.heroSub),
                           h("div", { className: "mt-8 flex flex-wrap gap-3" },
                                     h(Button, { href: "#new-items" }, h(ShoppingBag, { size: 18 }), props.t.viewItems),
                                     h(Button, { href: LINE_URL, variant: "outline" }, h(MessageCircle, { size: 18 }), props.t.line)
                                   )
                         ),
                   h("div", { className: "relative min-h-[440px] overflow-hidden rounded-[2rem] bg-[#F0E4D7] p-6 shadow-sm" },
                           h("div", { className: "absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,#fff_0,#fff8_24%,transparent_46%)]" }),
                           h("div", { className: "relative grid h-full gap-4" },
                                     products.slice(0, 4).map((product, index) => {
                                                   const Icon = product.icon;
                                                   const localized = productNames[props.language][product.id];
                                                   return h("button", {
                                                                   key: product.id,
                                                                   onClick: () => props.onSelect(product),
                                                                   className: cn("group flex items-center gap-4 rounded-2xl border bg-white/90 p-4 text-left shadow-sm transition hover:-translate-y-1", props.selected.id === product.id ? "border-[#C86F58]" : "border-white"),
                                                                   style: { marginLeft: index % 2 ? "2rem" : "0" },
                                                   },
                                                                        h("div", { className: cn("grid h-16 w-16 place-items-center rounded-2xl bg-gradient-to-br", product.imageTone) }, h(Icon, { size: 30, className: "text-stone-700" })),
                                                                        h("div", null,
                                                                                        h("div", { className: "text-xs font-semibold uppercase tracking-wider text-stone-400" }, product.category),
                                                                                        h("div", { className: "font-bold text-stone-800" }, localized.name),
                                                                                        h("div", { className: "text-[#C86F58] font-bold" }, product.price)
                                                                                      )
                                                                      );
                                     })
                                   )
                         )
                 );
}

function Categories(props: any) {
      return h("section", { id: "categories", className: "mx-auto mt-16 max-w-7xl px-4" },
                   h(SectionTitle, { ja: props.t.categoriesJa, en: props.t.categoriesEn }),
                   h("div", { className: "mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4" },
                           categories.map((category) =>
                                       h("div", { key: category.en, className: "rounded-2xl border border-[#E8DDD1] bg-white p-5 shadow-sm" },
                                                   h("div", { className: "mb-4 grid h-12 w-12 place-items-center rounded-2xl bg-[#F3E8D7] text-[#C86F58]" }, h(category.icon, { size: 24 })),
                                                   h("div", { className: "text-xl font-bold text-stone-800" }, category.ja),
                                                   h("div", { className: "mt-1 text-sm text-stone-500" }, category.en),
                                                   h("div", { className: "mt-4 text-sm font-semibold text-[#6E8B61]" }, category.count, " items")
                                                 )
                                                )
                         )
                 );
}

function ProductCard(props: any) {
      const Icon = props.product.icon;
      const localized = productNames[props.language][props.product.id];
      return h("button", {
              className: cn("rounded-2xl border bg-white p-4 text-left shadow-sm transition hover:-translate-y-1", props.isSelected ? "border-[#C86F58] ring-2 ring-[#C86F58]/20" : "border-[#E8DDD1]"),
              onClick: () => props.onSelect(props.product),
      },
                   h("div", { className: cn("grid aspect-[4/3] place-items-center rounded-2xl bg-gradient-to-br", props.product.imageTone) }, h(Icon, { size: 44, className: "text-stone-700" })),
                   h("div", { className: "mt-4" },
                           h("div", { className: "text-sm font-bold text-stone-800" }, localized.name),
                           h("div", { className: "mt-1 text-xs text-stone-500" }, props.product.category),
                           h("div", { className: "mt-2 text-xl font-black text-[#C86F58]" }, props.product.price),
                           h("div", { className: cn("mt-3 rounded-xl px-3 py-2 text-center text-xs font-semibold", props.product.tone) }, localized.status)
                         )
                 );
}

function NewItems(props: any) {
      return h("section", { id: "new-items", className: "mx-auto mt-16 max-w-7xl px-4" },
                   h(SectionTitle, { ja: props.t.newItemsJa, en: props.t.newItemsEn }),
                   h("div", { className: "mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-5" },
                           products.map((product) =>
                                       h(ProductCard, {
                                                     key: product.id,
                                                     product,
                                                     language: props.language,
                                                     isSelected: props.selected.id === product.id,
                                                     onSelect: props.onSelect,
                                       })
                                              )
                         )
                 );
}

function FeaturedProduct(props: any) {
      const product = props.selected;
      const Icon = product.icon;
      const localized = productNames[props.language][product.id];
      return h("section", { className: "mx-auto mt-10 grid max-w-7xl gap-8 px-4 lg:grid-cols-[0.9fr_1.1fr]" },
                   h("div", { className: cn("relative min-h-[360px] rounded-[2rem] bg-gradient-to-br p-8", product.imageTone) },
                           h("div", { className: "absolute left-0 top-0 rounded-br-2xl rounded-tl-[2rem] bg-[#D69A4E] px-4 py-3 text-sm font-semibold text-white" }, props.t.popular, h("br"), h("span", { className: "text-xs" }, props.t.popularEn)),
                           h("div", { className: "grid h-full place-items-center" },
                                     h("div", { className: "grid h-44 w-44 place-items-center rounded-[2rem] bg-white/70 shadow-sm" }, h(Icon, { size: 86, className: "text-stone-700" }))
                                   )
                         ),
                   h("div", { className: "rounded-[2rem] border border-[#E8DDD1] bg-white p-6 shadow-sm" },
                           h("div", { className: "text-sm font-bold uppercase tracking-[0.18em] text-[#C86F58]" }, props.t.featuredEn),
                           h("h2", { className: "mt-2 text-3xl font-black text-stone-900" }, localized.name),
                           h("div", { className: "mt-2 text-3xl font-black text-[#C86F58]" }, product.price),
                           h("p", { className: "mt-5 text-sm leading-7 text-stone-700" }, props.t.productNote),
                           h("div", { className: "mt-5 rounded-2xl border border-[#E8DDD1] bg-[#FBF8F3] p-4" },
                                     h("div", { className: "font-bold text-stone-800" }, props.t.detailTitle),
                                     h("p", { className: "mt-2 text-sm leading-7 text-stone-600" }, props.t.detailText),
                                     h("div", { className: "mt-4 grid gap-3 sm:grid-cols-3" },
                                                 h("div", { className: "rounded-xl bg-white p-3 text-sm text-stone-600" }, h(ImageIcon, { size: 18, className: "mb-2 text-[#C86F58]" }), h("b", null, props.t.photos), h("br"), "Up to 3 images"),
                                                 h("div", { className: "rounded-xl bg-white p-3 text-sm text-stone-600" }, h(Video, { size: 18, className: "mb-2 text-[#C86F58]" }), h("b", null, props.t.video), h("br"), "1 product video"),
                                                 h("div", { className: "rounded-xl bg-white p-3 text-sm text-stone-600" }, h(Grid2X2, { size: 18, className: "mb-2 text-[#C86F58]" }), h("b", null, props.t.specs), h("br"), "Condition / size")
                                               )
                                   ),
                           h("div", { className: "mt-5 flex flex-wrap gap-2 text-xs" },
                                     h("span", { className: "inline-flex items-center gap-1 rounded-lg border border-[#D6E1D3] px-3 py-2" }, h(ShieldCheck, { size: 14 }), props.t.checked),
                                     h("span", { className: "inline-flex items-center gap-1 rounded-lg border border-[#D6E1D3] px-3 py-2" }, h(CheckCircle2, { size: 14 }), props.t.cleaned),
                                     h("span", { className: "inline-flex items-center gap-1 rounded-lg border border-[#D6E1D3] px-3 py-2" }, h(Heart, { size: 14 }), props.t.support)
                                   ),
                           h(Button, { href: LINE_URL, className: "mt-6 w-full" }, h(MessageCircle, { size: 18 }), props.t.askLine)
                         )
                 );
}

function HowToUse(props: any) {
      return h("section", { id: "how-to-use", className: "mx-auto mt-16 max-w-7xl px-4" },
                   h("div", { className: "rounded-[2rem] bg-[#5F7F64] p-6 text-white md:p-8" },
                           h("div", { className: "mb-6 flex items-center gap-3" }, h(Truck, { size: 24 }), h("h2", { className: "text-2xl font-black" }, props.t.delivery)),
                           h("div", { className: "grid gap-4 md:grid-cols-4" },
                                     flow.map((item, index) =>
                                                   h("div", { key: item.sub, className: "rounded-2xl bg-white/12 p-4" },
                                                                 h("div", { className: "mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-white text-[#5F7F64] font-bold" }, index + 1),
                                                                 h(item.icon, { size: 22 }),
                                                                 h("div", { className: "mt-3 font-bold" }, item.label),
                                                                 h("div", { className: "mt-1 text-sm text-white/75" }, item.sub)
                                                               )
                                                      )
                                   )
                         )
                 );
}

function Footer(props: any) {
      return h("footer", { className: "mt-16 bg-[#3D4A3B] px-4 py-10 text-white" },
                   h("div", { className: "mx-auto flex max-w-7xl flex-col gap-5 md:flex-row md:items-center md:justify-between" },
                           h("div", null,
                                     h("div", { className: "text-xl font-black" }, h("span", { className: "text-[#F0B48B]" }, "KiMEGURi"), " Reuse Market"),
                                     h("p", { className: "mt-2 text-sm text-white/70" }, props.t.footerLead),
                                     h("p", { className: "text-sm text-white/55" }, props.t.footerSub)
                                   ),
                           h("div", { className: "flex flex-wrap gap-3" },
                                     h(Button, { href: LINE_URL }, h(MessageCircle, { size: 18 }), props.t.line),
                                     h(Button, { href: "mailto:info@example.com", variant: "outline", className: "border-white/30 bg-white/10 text-white" }, h(Mail, { size: 18 }), "Mail")
                                   )
                         ),
                   h("div", { className: "mx-auto mt-8 max-w-7xl border-t border-white/10 pt-5 text-xs text-white/45" }, "(c) 2025 KiMEGURi Reuse Market. All rights reserved.")
                 );
}

export default function App() {
      const [selectedProductId, setSelectedProductId] = useState(products[0].id);
      const [language, setLanguage] = useState("ja" as LanguageCode);
      const [languageMenuOpen, setLanguageMenuOpen] = useState(false);
      const t = translations[language];
      const selectedProduct = useMemo(() => products.find((product) => product.id === selectedProductId) || products[0], [selectedProductId]);

  return h("div", { className: "min-h-screen bg-[#FBF8F3] text-stone-800 antialiased" },
               h(Header, { t, language, onLanguageChange: setLanguage, languageMenuOpen, setLanguageMenuOpen }),
               h("main", null,
                       h(Hero, { t, language, selected: selectedProduct, onSelect: (product: Product) => setSelectedProductId(product.id) }),
                       h(Categories, { t }),
                       h(NewItems, { t, language, selected: selectedProduct, onSelect: (product: Product) => setSelectedProductId(product.id) }),
                       h(FeaturedProduct, { t, language, selected: selectedProduct }),
                       h(HowToUse, { t })
                     ),
               h(Footer, { t })
             );
}
