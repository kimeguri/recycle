// @ts-nocheck

import { useMemo, useState } from "react";


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
        Menu } from
      "lucide-react";import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";

const LINE_URL = "https://lin.ee/Pw6OOlu";




const languageOptions = [
      { code: "ja", label: "\u65E5\u672C\u8A9E / English", flag: "\u{1F1EF}\u{1F1F5}" },
      { code: "vi", label: "Ti\u1EBFng Vi\u1EC7t", flag: "\u{1F1FB}\u{1F1F3}" },
      { code: "si", label: "\u0DC3\u0DD2\u0D82\u0DC4\u0DBD", flag: "\u{1F1F1}\u{1F1F0}" },
      { code: "ne", label: "\u0928\u0947\u092A\u093E\u0932\u0940", flag: "\u{1F1F3}\u{1F1F5}" },
      { code: "id", label: "Bahasa Indonesia", flag: "\u{1F1EE}\u{1F1E9}" }];


const translations = {
        ja: {
                  subtitle: "\u65E5\u672C\u3067\u306E\u751F\u6D3B\u306B\u3001\u3084\u3055\u3057\u3044\u30EA\u30E6\u30FC\u30B9\u54C1\u3092",
                  navHome: "\u30DB\u30FC\u30E0",
                  navCategories: "\u30AB\u30C6\u30B4\u30EA\u30FC",
                  navNewItems: "\u65B0\u7740\u5546\u54C1",
                  navHowToUse: "\u4F7F\u3044\u65B9",
                  navContact: "\u304A\u554F\u3044\u5408\u308F\u305B",
                  search: "\u5546\u54C1\u3092\u691C\u7D22",
                  line: "LINE\u3067\u76F8\u8AC7",
                  photoJa: "\u5199\u771F\u3092\u8FFD\u52A0",
                  photoEn: "Add your photo",
                  heroTitle: "Discover Unique Treasures for your Home",
                  heroLead: "\u5BB6\u5177\u30FB\u5BB6\u96FB\u30FB\u65E5\u7528\u54C1\u3092\u3001\u3084\u3055\u3057\u3044\u4FA1\u683C\u3067\u304A\u5C4A\u3051\u3059\u308B\u30EA\u30E6\u30FC\u30B9\u30DE\u30FC\u30B1\u30C3\u30C8\u3067\u3059\u3002",
                  heroSub: "Affordable second-hand furniture, appliances, and daily goods for people starting a new life in Japan.",
                  viewItems: "\u5546\u54C1\u3092\u898B\u308B",
                  howFlow: "\u3054\u5229\u7528\u306E\u6D41\u308C",
                  categoriesJa: "\u30AB\u30C6\u30B4\u30EA\u30FC\u304B\u3089\u63A2\u3059",
                  categoriesEn: "Browse by category",
                  newItemsJa: "\u65B0\u7740\u5546\u54C1",
                  newItemsEn: "New Items",
                  viewAll: "\u3059\u3079\u3066\u898B\u308B",
                  featuredJa: "\u304A\u3059\u3059\u3081\u5546\u54C1",
                  featuredEn: "Featured Item",
                  popular: "\u4EBA\u6C17\u5546\u54C1",
                  popularEn: "Popular",
                  delivery: "\u53D7\u3051\u53D6\u308A\u30FB\u914D\u9001\u306B\u5BFE\u5FDC\u3067\u304D\u307E\u3059",
                  deliveryEn: "Pickup / Delivery available",
                  productNote: "\u3053\u3061\u3089\u306F\u4E2D\u53E4\u54C1\u3067\u3059\u3002\u5C0F\u3055\u306A\u30AD\u30BA\u3084\u4F7F\u7528\u611F\u304C\u3042\u308B\u5834\u5408\u304C\u3042\u308A\u307E\u3059\u304C\u3001\u307E\u3060\u6C17\u6301\u3061\u3088\u304F\u4F7F\u3048\u308B\u5546\u54C1\u3067\u3059\u3002\u65E5\u672C\u3067\u65B0\u751F\u6D3B\u3092\u59CB\u3081\u308B\u65B9\u306B\u304A\u3059\u3059\u3081\u3067\u3059\u3002",
                  checked: "\u52D5\u4F5C\u78BA\u8A8D\u6E08\u307F",
                  cleaned: "\u6E05\u6383\u6E08\u307F",
                  womenSupport: "\u5973\u6027\u30B9\u30BF\u30C3\u30D5\u5BFE\u5FDC\u53EF",
                  askLine: "\u3053\u306E\u5546\u54C1\u306B\u3064\u3044\u3066LINE\u3067\u76F8\u8AC7",
                  footerLead: "\u65E5\u672C\u3067\u306E\u65B0\u751F\u6D3B\u3092\u3001\u3084\u3055\u3057\u304F\u697D\u3057\u304F\u30B9\u30BF\u30FC\u30C8\u3002",
                  footerSub: "A gentle start to your new life in Japan.",
                  quickLinks: "\u30AF\u30A4\u30C3\u30AF\u30EA\u30F3\u30AF",
                  support: "\u30B5\u30DD\u30FC\u30C8",
                  faq: "\u3088\u304F\u3042\u308B\u8CEA\u554F",
                  deliveryFooter: "\u914D\u9001\u30FB\u53D7\u3051\u53D6\u308A",
                  payment: "\u304A\u652F\u6255\u3044\u65B9\u6CD5",
                  legal: "\u3054\u5229\u7528\u6848\u5185",
                  contactUs: "\u304A\u554F\u3044\u5408\u308F\u305B",
                  contactMail: "\u30E1\u30FC\u30EB\u3067\u76F8\u8AC7"
        },
        vi: {
                  subtitle: "\u0110\u1ED3 c\u0169 cho cu\u1ED9c s\u1ED1ng m\u1EDBi c\u1EE7a b\u1EA1n t\u1EA1i Nh\u1EADt B\u1EA3n.",
                  navHome: "Trang ch\u1EE7",
                  navCategories: "Danh m\u1EE5c",
                  navNewItems: "H\u00E0ng m\u1EDBi",
                  navHowToUse: "C\u00E1ch d\u00F9ng",
                  navContact: "Li\u00EAn h\u1EC7",
                  search: "T\u00ECm s\u1EA3n ph\u1EA9m",
                  line: "T\u01B0 v\u1EA5n qua LINE",
                  photoJa: "Th\u00EAm \u1EA3nh",
                  photoEn: "Add your photo",
                  heroTitle: "Kh\u00E1m ph\u00E1 nh\u1EEFng m\u00F3n \u0111\u1ED3 \u0111\u1ED9c \u0111\u00E1o cho ng\u00F4i nh\u00E0 c\u1EE7a b\u1EA1n",
                  heroLead: "Ch\u1EE3 \u0111\u1ED3 t\u00E1i s\u1EED d\u1EE5ng giao n\u1ED9i th\u1EA5t, \u0111\u1ED3 \u0111i\u1EC7n v\u00E0 \u0111\u1ED3 d\u00F9ng h\u1EB1ng ng\u00E0y v\u1EDBi gi\u00E1 d\u1EC5 mua.",
                  heroSub: "Affordable second-hand furniture, appliances, and daily goods for people starting a new life in Japan.",
                  viewItems: "Xem s\u1EA3n ph\u1EA9m",
                  howFlow: "C\u00E1ch s\u1EED d\u1EE5ng",
                  categoriesJa: "T\u00ECm theo danh m\u1EE5c",
                  categoriesEn: "Browse by category",
                  newItemsJa: "S\u1EA3n ph\u1EA9m m\u1EDBi",
                  newItemsEn: "New Items",
                  viewAll: "Xem t\u1EA5t c\u1EA3",
                  featuredJa: "S\u1EA3n ph\u1EA9m g\u1EE3i \u00FD",
                  featuredEn: "Featured Item",
                  popular: "S\u1EA3n ph\u1EA9m n\u1ED5i b\u1EADt",
                  popularEn: "Popular",
                  delivery: "C\u00F3 th\u1EC3 nh\u1EADn h\u00E0ng ho\u1EB7c giao h\u00E0ng",
                  deliveryEn: "Pickup / Delivery available",
                  productNote: "\u0110\u00E2y l\u00E0 h\u00E0ng \u0111\u00E3 qua s\u1EED d\u1EE5ng. C\u00F3 th\u1EC3 c\u00F3 v\u1EBFt x\u01B0\u1EDBc nh\u1ECF ho\u1EB7c d\u1EA5u hi\u1EC7u s\u1EED d\u1EE5ng, nh\u01B0ng v\u1EABn d\u00F9ng t\u1ED1t. Ph\u00F9 h\u1EE3p cho ng\u01B0\u1EDDi m\u1EDBi b\u1EAFt \u0111\u1EA7u s\u1ED1ng t\u1EA1i Nh\u1EADt.",
                  checked: "\u0110\u00E3 ki\u1EC3m tra ho\u1EA1t \u0111\u1ED9ng",
                  cleaned: "\u0110\u00E3 v\u1EC7 sinh",
                  womenSupport: "C\u00F3 h\u1ED7 tr\u1EE3 n\u1EEF",
                  askLine: "H\u1ECFi v\u1EC1 s\u1EA3n ph\u1EA9m n\u00E0y qua LINE",
                  footerLead: "B\u1EAFt \u0111\u1EA7u cu\u1ED9c s\u1ED1ng m\u1EDBi t\u1EA1i Nh\u1EADt m\u1ED9t c\u00E1ch nh\u1EB9 nh\u00E0ng v\u00E0 vui h\u01A1n.",
                  footerSub: "A gentle start to your new life in Japan.",
                  quickLinks: "Li\u00EAn k\u1EBFt nhanh",
                  support: "H\u1ED7 tr\u1EE3",
                  faq: "FAQ",
                  deliveryFooter: "Giao h\u00E0ng / nh\u1EADn h\u00E0ng",
                  payment: "Ph\u01B0\u01A1ng th\u1EE9c thanh to\u00E1n",
                  legal: "\u0110i\u1EC1u kho\u1EA3n",
                  contactUs: "T\u01B0 v\u1EA5n t\u1EA1i \u0111\u00E2y",
                  contactMail: "Li\u00EAn h\u1EC7"
        },
        si: {
                  subtitle: "\u0DA2\u0DB4\u0DCF\u0DB1\u0DBA\u0DDA \u0D94\u0DB6\u0DDA \u0DB1\u0DC0 \u0DA2\u0DD3\u0DC0\u0DD2\u0DAD\u0DBA\u0DA7 \u0DAF\u0DD9\u0DC0\u0DD0\u0DB1\u0DD2 \u0D85\u0DAD\u0DCA \u0DB7\u0DCF\u0DAB\u0DCA\u0DA9.",
                  navHome: "\u0DB8\u0DD4\u0DBD\u0DCA \u0DB4\u0DD2\u0DA7\u0DD4\u0DC0",
                  navCategories: "\u0D9A\u0DCF\u0DAB\u0DCA\u0DA9",
                  navNewItems: "\u0DB1\u0DC0 \u0DB7\u0DCF\u0DAB\u0DCA\u0DA9",
                  navHowToUse: "\u0DB7\u0DCF\u0DC0\u0DD2\u0DAD\u0DCF \u0D9A\u0DBB\u0DB1 \u0D86\u0D9A\u0DCF\u0DBB\u0DBA",
                  navContact: "\u0DC3\u0DB8\u0DCA\u0DB6\u0DB1\u0DCA\u0DB0 \u0DC0\u0DB1\u0DCA\u0DB1",
                  search: "\u0DB7\u0DCF\u0DAB\u0DCA\u0DA9 \u0DC3\u0DDC\u0DBA\u0DB1\u0DCA\u0DB1",
                  line: "LINE \u0DB8\u0D9C\u0DD2\u0DB1\u0DCA \u0DC0\u0DD2\u0DB8\u0DC3\u0DB1\u0DCA\u0DB1",
                  photoJa: "\u0DA1\u0DCF\u0DBA\u0DCF\u0DBB\u0DD6\u0DB4\u0DBA\u0D9A\u0DCA \u0D91\u0D9A\u0DCA \u0D9A\u0DBB\u0DB1\u0DCA\u0DB1",
                  photoEn: "Add your photo",
                  heroTitle: "\u0D94\u0DB6\u0DDA \u0DB1\u0DD2\u0DC0\u0DC3\u0DA7 \u0DC0\u0DD2\u0DC1\u0DDA\u0DC2 \u0DB7\u0DCF\u0DAB\u0DCA\u0DA9 \u0DC3\u0DDC\u0DBA\u0DCF\u0D9C\u0DB1\u0DCA\u0DB1",
                  heroLead: "\u0D9C\u0DD8\u0DC4 \u0DB7\u0DCF\u0DAB\u0DCA\u0DA9, \u0DC0\u0DD2\u0DAF\u0DD4\u0DBD\u0DD2 \u0D8B\u0DB4\u0D9A\u0DBB\u0DAB \u0DC3\u0DC4 \u0DAF\u0DDB\u0DB1\u0DD2\u0D9A \u0DB7\u0DCF\u0DAB\u0DCA\u0DA9 \u0DB4\u0DC4\u0DC3\u0DD4 \u0DB8\u0DD2\u0DBD\u0DA7 \u0DBD\u0DB6\u0DCF\u0DAF\u0DD9\u0DB1 \u0DBB\u0DD3\u0DBA\u0DD6\u0DC3\u0DCA \u0DB8\u0DCF\u0DBB\u0DCA\u0D9A\u0DA7\u0DCA \u0D91\u0D9A\u0D9A\u0DD2.",
                  heroSub: "Affordable second-hand furniture, appliances, and daily goods for people starting a new life in Japan.",
                  viewItems: "\u0DB7\u0DCF\u0DAB\u0DCA\u0DA9 \u0DB6\u0DBD\u0DB1\u0DCA\u0DB1",
                  howFlow: "\u0DB7\u0DCF\u0DC0\u0DD2\u0DAD\u0DCF \u0D9A\u0DBB\u0DB1 \u0D86\u0D9A\u0DCF\u0DBB\u0DBA",
                  categoriesJa: "\u0D9A\u0DCF\u0DAB\u0DCA\u0DA9 \u0D85\u0DB1\u0DD4\u0DC0 \u0DC3\u0DDC\u0DBA\u0DB1\u0DCA\u0DB1",
                  categoriesEn: "Browse by category",
                  newItemsJa: "\u0DB1\u0DC0 \u0DB7\u0DCF\u0DAB\u0DCA\u0DA9",
                  newItemsEn: "New Items",
                  viewAll: "\u0DC3\u0DD2\u0DBA\u0DBD\u0DCA\u0DBD \u0DB6\u0DBD\u0DB1\u0DCA\u0DB1",
                  featuredJa: "\u0DB1\u0DD2\u0DBB\u0DCA\u0DAF\u0DDA\u0DC1\u0DD2\u0DAD \u0DB7\u0DCF\u0DAB\u0DCA\u0DA9\u0DBA",
                  featuredEn: "Featured Item",
                  popular: "\u0DA2\u0DB1\u0DB4\u0DCA\u200D\u0DBB\u0DD2\u0DBA \u0DB7\u0DCF\u0DAB\u0DCA\u0DA9\u0DBA",
                  popularEn: "Popular",
                  delivery: "\u0D9C\u0DD0\u0DB1\u0DD3\u0DB8 / \u0DB6\u0DD9\u0DAF\u0DCF\u0DC4\u0DD0\u0DBB\u0DD3\u0DB8 \u0DC4\u0DD0\u0D9A",
                  deliveryEn: "Pickup / Delivery available",
                  productNote: "\u0DB8\u0DD9\u0DBA \u0DB7\u0DCF\u0DC0\u0DD2\u0DAD\u0DCF \u0D9A\u0DC5 \u0DB7\u0DCF\u0DAB\u0DCA\u0DA9\u0DBA\u0D9A\u0DD2. \u0D9A\u0DD4\u0DA9\u0DCF \u0DC3\u0DD3\u0DBB\u0DD3\u0DB8\u0DCA \u0DC4\u0DDD \u0DB7\u0DCF\u0DC0\u0DD2\u0DAD \u0DBD\u0D9A\u0DD4\u0DAB\u0DD4 \u0DAD\u0DD2\u0DB6\u0DD2\u0DBA \u0DC4\u0DD0\u0D9A\u0DD2 \u0DB1\u0DB8\u0DD4\u0DAD\u0DCA \u0DB7\u0DCF\u0DC0\u0DD2\u0DAD\u0DBA\u0DA7 \u0D9C\u0DD0\u0DA7\u0DBD\u0DD4\u0DC0\u0D9A\u0DCA \u0DB1\u0DD0\u0DAD. \u0DA2\u0DB4\u0DCF\u0DB1\u0DBA\u0DDA \u0DA2\u0DD3\u0DC0\u0DD2\u0DAD\u0DBA \u0D86\u0DBB\u0DB8\u0DCA\u0DB7 \u0D9A\u0DBB\u0DB1 \u0D85\u0DBA\u0DA7 \u0DC3\u0DD4\u0DAF\u0DD4\u0DC3\u0DD4\u0DBA.",
                  checked: "\u0D9A\u0DCA\u200D\u0DBB\u0DD2\u0DBA\u0DCF\u0D9A\u0DCF\u0DBB\u0DD2\u0DAD\u0DCA\u0DC0\u0DBA \u0DB4\u0DBB\u0DD3\u0D9A\u0DCA\u0DC2\u0DCF \u0D9A\u0DBB \u0D87\u0DAD",
                  cleaned: "\u0DB4\u0DD2\u0DBB\u0DD2\u0DC3\u0DD2\u0DAF\u0DD4 \u0D9A\u0DBB \u0D87\u0DAD",
                  womenSupport: "\u0D9A\u0DCF\u0DB1\u0DCA\u0DAD\u0DCF \u0DC3\u0DC4\u0DCF\u0DBA \u0D87\u0DAD",
                  askLine: "\u0DB8\u0DD9\u0DB8 \u0DB7\u0DCF\u0DAB\u0DCA\u0DA9\u0DBA \u0D9C\u0DD0\u0DB1 LINE \u0DB8\u0D9C\u0DD2\u0DB1\u0DCA \u0DC0\u0DD2\u0DB8\u0DC3\u0DB1\u0DCA\u0DB1",
                  footerLead: "\u0DA2\u0DB4\u0DCF\u0DB1\u0DBA\u0DDA \u0DB1\u0DC0 \u0DA2\u0DD3\u0DC0\u0DD2\u0DAD\u0DBA \u0DC3\u0DD0\u0DC4\u0DD0\u0DBD\u0DCA\u0DBD\u0DD4\u0DC0\u0DD9\u0DB1\u0DCA \u0DC4\u0DCF \u0DC3\u0DAD\u0DD4\u0DA7\u0DD2\u0DB1\u0DCA \u0D86\u0DBB\u0DB8\u0DCA\u0DB7 \u0D9A\u0DBB\u0DB1\u0DCA\u0DB1.",
                  footerSub: "A gentle start to your new life in Japan.",
                  quickLinks: "\u0D89\u0D9A\u0DCA\u0DB8\u0DB1\u0DCA \u0DC3\u0DB6\u0DD0\u0DB3\u0DD2",
                  support: "\u0DC3\u0DC4\u0DCF\u0DBA",
                  faq: "FAQ",
                  deliveryFooter: "\u0DB6\u0DD9\u0DAF\u0DCF\u0DC4\u0DD0\u0DBB\u0DD3\u0DB8 / \u0D9C\u0DD0\u0DB1\u0DD3\u0DB8",
                  payment: "\u0D9C\u0DD9\u0DC0\u0DD3\u0DB8\u0DCA \u0D9A\u0DCA\u200D\u0DBB\u0DB8",
                  legal: "\u0DB1\u0DD3\u0DAD\u0DD2 \u0DAD\u0DDC\u0DBB\u0DAD\u0DD4\u0DBB\u0DD4",
                  contactUs: "\u0DC0\u0DD2\u0DB8\u0DC3\u0DB1\u0DCA\u0DB1",
                  contactMail: "\u0DC3\u0DB8\u0DCA\u0DB6\u0DB1\u0DCA\u0DB0 \u0DC0\u0DB1\u0DCA\u0DB1"
        },
        ne: {
                  subtitle: "\u091C\u093E\u092A\u093E\u0928\u092E\u093E \u0924\u092A\u093E\u0908\u0902\u0915\u094B \u0928\u092F\u093E\u0901 \u091C\u0940\u0935\u0928\u0915\u093E \u0932\u093E\u0917\u093F \u0938\u0947\u0915\u0947\u0928\u094D\u0921-\u0939\u094D\u092F\u093E\u0928\u094D\u0921 \u0938\u093E\u092E\u093E\u0928\u0939\u0930\u0942\u0964",
                  navHome: "\u0939\u094B\u092E",
                  navCategories: "\u0935\u0930\u094D\u0917\u0939\u0930\u0942",
                  navNewItems: "\u0928\u092F\u093E\u0901 \u0938\u093E\u092E\u093E\u0928",
                  navHowToUse: "\u0915\u0938\u0930\u0940 \u092A\u094D\u0930\u092F\u094B\u0917 \u0917\u0930\u094D\u0928\u0947",
                  navContact: "\u0938\u092E\u094D\u092A\u0930\u094D\u0915",
                  search: "\u0938\u093E\u092E\u093E\u0928 \u0916\u094B\u091C\u094D\u0928\u0941\u0939\u094B\u0938\u094D",
                  line: "LINE \u092E\u093E \u0938\u094B\u0927\u094D\u0928\u0941\u0939\u094B\u0938\u094D",
                  photoJa: "\u092B\u094B\u091F\u094B \u0925\u092A\u094D\u0928\u0941\u0939\u094B\u0938\u094D",
                  photoEn: "Add your photo",
                  heroTitle: "\u0924\u092A\u093E\u0908\u0902\u0915\u094B \u0918\u0930\u0915\u093E \u0932\u093E\u0917\u093F \u0935\u093F\u0936\u0947\u0937 \u0938\u093E\u092E\u093E\u0928\u0939\u0930\u0942 \u092D\u0947\u091F\u094D\u091F\u093E\u0909\u0928\u0941\u0939\u094B\u0938\u094D",
                  heroLead: "\u092B\u0930\u094D\u0928\u093F\u091A\u0930, \u0907\u0932\u0947\u0915\u094D\u091F\u094D\u0930\u094B\u0928\u093F\u0915\u094D\u0938 \u0930 \u0926\u0948\u0928\u093F\u0915 \u0938\u093E\u092E\u093E\u0928\u0939\u0930\u0942 \u0938\u091C\u093F\u0932\u094B \u092E\u0942\u0932\u094D\u092F\u092E\u093E \u0909\u092A\u0932\u092C\u094D\u0927 \u0917\u0930\u093E\u0909\u0928\u0947 \u0930\u093F\u092F\u0942\u091C \u092E\u093E\u0930\u094D\u0915\u0947\u091F \u0939\u094B\u0964",
                  heroSub: "Affordable second-hand furniture, appliances, and daily goods for people starting a new life in Japan.",
                  viewItems: "\u0938\u093E\u092E\u093E\u0928 \u0939\u0947\u0930\u094D\u0928\u0941\u0939\u094B\u0938\u094D",
                  howFlow: "\u092A\u094D\u0930\u092F\u094B\u0917 \u0917\u0930\u094D\u0928\u0947 \u0924\u0930\u093F\u0915\u093E",
                  categoriesJa: "\u0935\u0930\u094D\u0917\u092C\u093E\u091F \u0916\u094B\u091C\u094D\u0928\u0941\u0939\u094B\u0938\u094D",
                  categoriesEn: "Browse by category",
                  newItemsJa: "\u0928\u092F\u093E\u0901 \u0938\u093E\u092E\u093E\u0928",
                  newItemsEn: "New Items",
                  viewAll: "\u0938\u092C\u0948 \u0939\u0947\u0930\u094D\u0928\u0941\u0939\u094B\u0938\u094D",
                  featuredJa: "\u0938\u093F\u092B\u093E\u0930\u093F\u0938 \u0917\u0930\u093F\u090F\u0915\u094B \u0938\u093E\u092E\u093E\u0928",
                  featuredEn: "Featured Item",
                  popular: "\u0932\u094B\u0915\u092A\u094D\u0930\u093F\u092F \u0938\u093E\u092E\u093E\u0928",
                  popularEn: "Popular",
                  delivery: "\u092A\u093F\u0915\u0905\u092A / \u0921\u0947\u0932\u093F\u092D\u0930\u0940 \u0909\u092A\u0932\u092C\u094D\u0927",
                  deliveryEn: "Pickup / Delivery available",
                  productNote: "\u092F\u094B \u0938\u0947\u0915\u0947\u0928\u094D\u0921-\u0939\u094D\u092F\u093E\u0928\u094D\u0921 \u0938\u093E\u092E\u093E\u0928 \u0939\u094B\u0964 \u0938\u093E\u0928\u093E \u0916\u0930\u094B\u0902\u091A \u0935\u093E \u092A\u094D\u0930\u092F\u094B\u0917\u0915\u093E \u091A\u093F\u0928\u094D\u0939 \u0939\u0941\u0928 \u0938\u0915\u094D\u091B\u0928\u094D, \u0924\u0930 \u092A\u094D\u0930\u092F\u094B\u0917\u092E\u093E \u0938\u092E\u0938\u094D\u092F\u093E \u091B\u0948\u0928\u0964 \u091C\u093E\u092A\u093E\u0928\u092E\u093E \u0928\u092F\u093E\u0901 \u091C\u0940\u0935\u0928 \u0938\u0941\u0930\u0941 \u0917\u0930\u094D\u0928\u0947\u0939\u0930\u0942\u0915\u093E \u0932\u093E\u0917\u093F \u0909\u092A\u092F\u0941\u0915\u094D\u0924 \u091B\u0964",
                  checked: "\u0915\u093E\u092E \u0917\u0930\u094D\u0928\u0947 \u091C\u093E\u0901\u091A \u0917\u0930\u093F\u090F\u0915\u094B",
                  cleaned: "\u0938\u092B\u093E \u0917\u0930\u093F\u090F\u0915\u094B",
                  womenSupport: "\u092E\u0939\u093F\u0932\u093E \u0938\u0939\u092F\u094B\u0917 \u0909\u092A\u0932\u092C\u094D\u0927",
                  askLine: "\u092F\u094B \u0938\u093E\u092E\u093E\u0928\u092C\u093E\u0930\u0947 LINE \u092E\u093E \u0938\u094B\u0927\u094D\u0928\u0941\u0939\u094B\u0938\u094D",
                  footerLead: "\u091C\u093E\u092A\u093E\u0928\u092E\u093E \u0928\u092F\u093E\u0901 \u091C\u0940\u0935\u0928 \u0938\u091C\u093F\u0932\u094B \u0930 \u0930\u092E\u093E\u0907\u0932\u094B \u0930\u0942\u092A\u092E\u093E \u0938\u0941\u0930\u0941 \u0917\u0930\u094D\u0928\u0941\u0939\u094B\u0938\u094D\u0964",
                  footerSub: "A gentle start to your new life in Japan.",
                  quickLinks: "\u091B\u093F\u091F\u094B \u0932\u093F\u0902\u0915\u0939\u0930\u0942",
                  support: "\u0938\u0939\u092F\u094B\u0917",
                  faq: "FAQ",
                  deliveryFooter: "\u0921\u0947\u0932\u093F\u092D\u0930\u0940 / \u092A\u093F\u0915\u0905\u092A",
                  payment: "\u092D\u0941\u0915\u094D\u0924\u093E\u0928\u0940 \u0935\u093F\u0927\u093F",
                  legal: "\u0928\u093F\u092F\u092E\u0939\u0930\u0942",
                  contactUs: "\u092F\u0939\u093E\u0901 \u0938\u094B\u0927\u094D\u0928\u0941\u0939\u094B\u0938\u094D",
                  contactMail: "\u0938\u092E\u094D\u092A\u0930\u094D\u0915"
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
                  contactMail: "Kontak"
        }
};




















const categories = [
      { name: "Furniture", ja: "\u5BB6\u5177", count: 12, icon: Sofa, tone: "bg-[#F7EFE8]" },
      { name: "Appliances", ja: "\u5BB6\u96FB", count: 9, icon: Refrigerator, tone: "bg-[#EEF3EF]" },
      { name: "Daily Goods", ja: "\u65E5\u7528\u54C1\u30FB\u96D1\u8CA8", count: 15, icon: Package, tone: "bg-[#F8F2E4]" },
      { name: "Kitchen", ja: "\u30AD\u30C3\u30C1\u30F3\u7528\u54C1", count: 11, icon: CookingPot, tone: "bg-[#EEF4F7]" },
      { name: "Bedding", ja: "\u5BDD\u5177", count: 8, icon: Bed, tone: "bg-[#F3F0F6]" },
      { name: "Starter Sets", ja: "\u65B0\u751F\u6D3B\u30BB\u30C3\u30C8", count: 6, icon: Armchair, tone: "bg-[#F7F1E3]" }];


const products = [
      {
              id: "R-001",
              name: "Refrigerator 120L",
              ja: "\u51B7\u8535\u5EAB 120L",
              price: "\u00A58,000",
              status: "Cleaned & Good condition",
              statusJa: "\u6E05\u6383\u6E08\u307F\u30FB\u72B6\u614B\u826F\u597D",
              badge: "\u4EBA\u6C17",
              tone: "bg-[#EDF4EC] text-[#58715A]",
              image: "https://images.unsplash.com/photo-1571175443880-49e1d25b2bc5?auto=format&fit=crop&w=700&q=80",
              imageAlt: "Clean refrigerator in a home kitchen",
              photos: "3 images",
              video: "Short operation check video",
              size: "W48 x D53 x H112 cm",
              condition: "Cleaned / minor signs of use"
      },
      {
              id: "F-002",
              name: "Wooden Dining Chair",
              ja: "\u6728\u88FD\u30C0\u30A4\u30CB\u30F3\u30B0\u30C1\u30A7\u30A2",
              price: "\u00A51,500",
              status: "Used - Good",
              statusJa: "\u826F\u54C1\u30FB\u7F8E\u54C1",
              badge: "\u304A\u3059\u3059\u3081",
              tone: "bg-[#F6ECDD] text-[#8A6640]",
              image: "https://images.unsplash.com/photo-1503602642458-232111445657?auto=format&fit=crop&w=700&q=80",
              imageAlt: "Wooden dining chair",
              photos: "3 images",
              video: "360 degree view video",
              size: "W45 x D48 x H82 cm",
              condition: "Good / small scratches"
      },
      {
              id: "K-003",
              name: "Kitchen Starter Set",
              ja: "\u30AD\u30C3\u30C1\u30F3\u7528\u54C1\u30BB\u30C3\u30C8",
              price: "\u00A52,000",
              status: "Set item",
              statusJa: "\u30BB\u30C3\u30C8\u5546\u54C1",
              badge: "\u4EBA\u6C17",
              tone: "bg-[#E9F2F7] text-[#466B82]",
              image: "https://images.unsplash.com/photo-1556911220-bff31c812dba?auto=format&fit=crop&w=700&q=80",
              imageAlt: "Kitchen tools and cookware",
              photos: "4 images",
              video: "Item overview video",
              size: "Pan / pot / tools set",
              condition: "Cleaned / set contents checked"
      },
      {
              id: "S-004",
              name: "Welcome Starter Pack",
              ja: "\u65B0\u751F\u6D3B\u30B9\u30BF\u30FC\u30C8\u30BB\u30C3\u30C8",
              price: "\u00A55,000",
              status: "Recommended",
              statusJa: "\u304A\u3059\u3059\u3081",
              badge: "\u304A\u3059\u3059\u3081",
              tone: "bg-[#F8E9E4] text-[#9B5B4D]",
              image: "https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?auto=format&fit=crop&w=700&q=80",
              imageAlt: "Home goods starter pack",
              photos: "5 images",
              video: "Set contents video",
              size: "Compact room starter set",
              condition: "Ready to use / bundle checked"
      },
      {
              id: "E-005",
              name: "Electric Kettle",
              ja: "\u96FB\u6C17\u30B1\u30C8\u30EB",
              price: "\u00A51,000",
              status: "Cleaned & Good condition",
              statusJa: "\u6E05\u6383\u6E08\u307F\u30FB\u72B6\u614B\u826F\u597D",
              tone: "bg-[#EDF4EC] text-[#58715A]",
              image: "https://images.unsplash.com/photo-1748408082799-94daff13e792?auto=format&fit=crop&w=700&q=80",
              imageAlt: "Electric kettle on a kitchen counter",
              photos: "3 images",
              video: "Boiling test video",
              size: "1.0L",
              condition: "Cleaned / tested"
      }];


const categoryNames = {
        ja: {
                  Furniture: "\u5BB6\u5177",
                  Appliances: "\u5BB6\u96FB",
                  "Daily Goods": "\u65E5\u7528\u54C1\u30FB\u96D1\u8CA8",
                  Kitchen: "\u30AD\u30C3\u30C1\u30F3\u7528\u54C1",
                  Bedding: "\u5BDD\u5177",
                  "Starter Sets": "\u65B0\u751F\u6D3B\u30BB\u30C3\u30C8"
        },
        vi: {
                  Furniture: "N\u1ED9i th\u1EA5t",
                  Appliances: "\u0110\u1ED3 \u0111i\u1EC7n",
                  "Daily Goods": "\u0110\u1ED3 d\u00F9ng h\u1EB1ng ng\u00E0y",
                  Kitchen: "\u0110\u1ED3 b\u1EBFp",
                  Bedding: "Ch\u0103n ga g\u1ED1i",
                  "Starter Sets": "B\u1ED9 \u0111\u1ED3 m\u1EDBi"
        },
        si: {
                  Furniture: "\u0D9C\u0DD8\u0DC4 \u0DB7\u0DCF\u0DAB\u0DCA\u0DA9",
                  Appliances: "\u0DC0\u0DD2\u0DAF\u0DD4\u0DBD\u0DD2 \u0D8B\u0DB4\u0D9A\u0DBB\u0DAB",
                  "Daily Goods": "\u0DAF\u0DDB\u0DB1\u0DD2\u0D9A \u0DB7\u0DCF\u0DAB\u0DCA\u0DA9",
                  Kitchen: "\u0D9A\u0DD4\u0DC3\u0DCA\u0DC3\u0DD2 \u0DB7\u0DCF\u0DAB\u0DCA\u0DA9",
                  Bedding: "\u0DB1\u0DD2\u0DAF\u0DB1 \u0DB7\u0DCF\u0DAB\u0DCA\u0DA9",
                  "Starter Sets": "\u0D86\u0DBB\u0DB8\u0DCA\u0DB7\u0D9A \u0D9A\u0DA7\u0DCA\u0DA7\u0DBD"
        },
        ne: {
                  Furniture: "\u092B\u0930\u094D\u0928\u093F\u091A\u0930",
                  Appliances: "\u0935\u093F\u0926\u094D\u092F\u0941\u0924\u0940\u092F \u0938\u093E\u092E\u093E\u0928",
                  "Daily Goods": "\u0926\u0948\u0928\u093F\u0915 \u0938\u093E\u092E\u093E\u0928",
                  Kitchen: "\u092D\u093E\u0928\u094D\u0938\u093E \u0938\u093E\u092E\u093E\u0928",
                  Bedding: "\u0913\u091B\u094D\u092F\u093E\u0928 \u0938\u093E\u092E\u093E\u0928",
                  "Starter Sets": "\u0938\u094D\u091F\u093E\u0930\u094D\u091F\u0930 \u0938\u0947\u091F"
        },
        id: {
                  Furniture: "Furnitur",
                  Appliances: "Elektronik",
                  "Daily Goods": "Barang harian",
                  Kitchen: "Peralatan dapur",
                  Bedding: "Perlengkapan tidur",
                  "Starter Sets": "Paket awal"
        }
};

const productNames = {
        ja: {
                  "R-001": { name: "\u51B7\u8535\u5EAB 120L", status: "\u6E05\u6383\u6E08\u307F\u30FB\u72B6\u614B\u826F\u597D", badge: "\u4EBA\u6C17" },
                  "F-002": { name: "\u6728\u88FD\u30C0\u30A4\u30CB\u30F3\u30B0\u30C1\u30A7\u30A2", status: "\u826F\u54C1\u30FB\u7F8E\u54C1", badge: "\u304A\u3059\u3059\u3081" },
                  "K-003": { name: "\u30AD\u30C3\u30C1\u30F3\u7528\u54C1\u30BB\u30C3\u30C8", status: "\u30BB\u30C3\u30C8\u5546\u54C1", badge: "\u4EBA\u6C17" },
                  "S-004": { name: "\u65B0\u751F\u6D3B\u30B9\u30BF\u30FC\u30C8\u30BB\u30C3\u30C8", status: "\u304A\u3059\u3059\u3081", badge: "\u304A\u3059\u3059\u3081" },
                  "E-005": { name: "\u96FB\u6C17\u30B1\u30C8\u30EB", status: "\u6E05\u6383\u6E08\u307F\u30FB\u72B6\u614B\u826F\u597D" }
        },
        vi: {
                  "R-001": { name: "T\u1EE7 l\u1EA1nh 120L", status: "\u0110\u00E3 v\u1EC7 sinh, t\u00ECnh tr\u1EA1ng t\u1ED1t", badge: "Ph\u1ED5 bi\u1EBFn" },
                  "F-002": { name: "Gh\u1EBF \u0103n g\u1ED7", status: "\u0110\u00E3 qua s\u1EED d\u1EE5ng - t\u1ED1t", badge: "G\u1EE3i \u00FD" },
                  "K-003": { name: "B\u1ED9 \u0111\u1ED3 b\u1EBFp c\u01A1 b\u1EA3n", status: "S\u1EA3n ph\u1EA9m theo b\u1ED9", badge: "Ph\u1ED5 bi\u1EBFn" },
                  "S-004": { name: "B\u1ED9 kh\u1EDFi \u0111\u1EA7u cu\u1ED9c s\u1ED1ng m\u1EDBi", status: "G\u1EE3i \u00FD", badge: "G\u1EE3i \u00FD" },
                  "E-005": { name: "\u1EA4m \u0111un n\u01B0\u1EDBc \u0111i\u1EC7n", status: "\u0110\u00E3 v\u1EC7 sinh, t\u00ECnh tr\u1EA1ng t\u1ED1t" }
        },
        si: {
                  "R-001": { name: "\u0DC1\u0DD3\u0DAD\u0D9A\u0DBB\u0DAB\u0DBA 120L", status: "\u0DB4\u0DD2\u0DBB\u0DD2\u0DC3\u0DD2\u0DAF\u0DD4 \u0D9A\u0DBB \u0D87\u0DAD, \u0DAD\u0DAD\u0DCA\u0DAD\u0DCA\u0DC0\u0DBA \u0DC4\u0DDC\u0DB3\u0DBA\u0DD2", badge: "\u0DA2\u0DB1\u0DB4\u0DCA\u200D\u0DBB\u0DD2\u0DBA" },
                  "F-002": { name: "\u0DBD\u0DD3 \u0D86\u0DC4\u0DCF\u0DBB \u0DB4\u0DD4\u0DA7\u0DD4\u0DC0", status: "\u0DB7\u0DCF\u0DC0\u0DD2\u0DAD\u0DCF \u0D9A\u0DC5 - \u0DC4\u0DDC\u0DB3\u0DBA\u0DD2", badge: "\u0DB1\u0DD2\u0DBB\u0DCA\u0DAF\u0DDA\u0DC1\u0DD2\u0DAD" },
                  "K-003": { name: "\u0D9A\u0DD4\u0DC3\u0DCA\u0DC3\u0DD2 \u0D86\u0DBB\u0DB8\u0DCA\u0DB7\u0D9A \u0D9A\u0DA7\u0DCA\u0DA7\u0DBD\u0DBA", status: "\u0D9A\u0DA7\u0DCA\u0DA7\u0DBD \u0DB7\u0DCF\u0DAB\u0DCA\u0DA9\u0DBA", badge: "\u0DA2\u0DB1\u0DB4\u0DCA\u200D\u0DBB\u0DD2\u0DBA" },
                  "S-004": { name: "\u0DB1\u0DC0 \u0DA2\u0DD3\u0DC0\u0DD2\u0DAD \u0D86\u0DBB\u0DB8\u0DCA\u0DB7\u0D9A \u0D9A\u0DA7\u0DCA\u0DA7\u0DBD\u0DBA", status: "\u0DB1\u0DD2\u0DBB\u0DCA\u0DAF\u0DDA\u0DC1\u0DD2\u0DAD", badge: "\u0DB1\u0DD2\u0DBB\u0DCA\u0DAF\u0DDA\u0DC1\u0DD2\u0DAD" },
                  "E-005": { name: "\u0DC0\u0DD2\u0DAF\u0DD4\u0DBD\u0DD2 \u0D9A\u0DD9\u0DA7\u0DCA\u0DBD\u0DCA", status: "\u0DB4\u0DD2\u0DBB\u0DD2\u0DC3\u0DD2\u0DAF\u0DD4 \u0D9A\u0DBB \u0D87\u0DAD, \u0DAD\u0DAD\u0DCA\u0DAD\u0DCA\u0DC0\u0DBA \u0DC4\u0DDC\u0DB3\u0DBA\u0DD2" }
        },
        ne: {
                  "R-001": { name: "\u092B\u094D\u0930\u093F\u091C 120L", status: "\u0938\u092B\u093E \u0917\u0930\u093F\u090F\u0915\u094B, \u0930\u093E\u092E\u094D\u0930\u094B \u0905\u0935\u0938\u094D\u0925\u093E", badge: "\u0932\u094B\u0915\u092A\u094D\u0930\u093F\u092F" },
                  "F-002": { name: "\u0915\u093E\u0920\u0915\u094B \u0921\u093E\u0907\u0928\u093F\u0919 \u0915\u0941\u0930\u094D\u0938\u0940", status: "\u092A\u094D\u0930\u092F\u094B\u0917 \u0917\u0930\u093F\u090F\u0915\u094B - \u0930\u093E\u092E\u094D\u0930\u094B", badge: "\u0938\u093F\u092B\u093E\u0930\u093F\u0938" },
                  "K-003": { name: "\u092D\u093E\u0928\u094D\u0938\u093E \u0938\u094D\u091F\u093E\u0930\u094D\u091F\u0930 \u0938\u0947\u091F", status: "\u0938\u0947\u091F \u0938\u093E\u092E\u093E\u0928", badge: "\u0932\u094B\u0915\u092A\u094D\u0930\u093F\u092F" },
                  "S-004": { name: "\u0928\u092F\u093E\u0901 \u091C\u0940\u0935\u0928 \u0938\u094D\u091F\u093E\u0930\u094D\u091F\u0930 \u092A\u094D\u092F\u093E\u0915", status: "\u0938\u093F\u092B\u093E\u0930\u093F\u0938", badge: "\u0938\u093F\u092B\u093E\u0930\u093F\u0938" },
                  "E-005": { name: "\u0907\u0932\u0947\u0915\u094D\u091F\u094D\u0930\u093F\u0915 \u0915\u0947\u0924\u0932\u0940", status: "\u0938\u092B\u093E \u0917\u0930\u093F\u090F\u0915\u094B, \u0930\u093E\u092E\u094D\u0930\u094B \u0905\u0935\u0938\u094D\u0925\u093E" }
        },
        id: {
                  "R-001": { name: "Kulkas 120L", status: "Sudah dibersihkan, kondisi baik", badge: "Populer" },
                  "F-002": { name: "Kursi makan kayu", status: "Bekas - baik", badge: "Rekomendasi" },
                  "K-003": { name: "Paket dapur awal", status: "Barang paket", badge: "Populer" },
                  "S-004": { name: "Paket awal hidup baru", status: "Rekomendasi", badge: "Rekomendasi" },
                  "E-005": { name: "Ketel listrik", status: "Sudah dibersihkan, kondisi baik" }
        }
};

const stepLabels = {
        ja: [
              { label: "\u5546\u54C1\u3092\u898B\u308B", sub: "Browse items" },
              { label: "\u6C17\u306B\u306A\u308B\u5546\u54C1\u3092\u9078\u3076", sub: "Choose an item" },
              { label: "LINE\u3067\u554F\u3044\u5408\u308F\u305B", sub: "Contact us on LINE" },
              { label: "\u5728\u5EAB\u30FB\u53D7\u3051\u6E21\u3057\u78BA\u8A8D", sub: "Confirm availability" },
              { label: "\u53D7\u3051\u53D6\u308A\u30FB\u304A\u652F\u6255\u3044", sub: "Receive & pay" }],

        vi: [
              { label: "Xem s\u1EA3n ph\u1EA9m", sub: "Browse items" },
              { label: "Ch\u1ECDn s\u1EA3n ph\u1EA9m", sub: "Choose an item" },
              { label: "Li\u00EAn h\u1EC7 qua LINE", sub: "Contact us on LINE" },
              { label: "X\u00E1c nh\u1EADn h\u00E0ng", sub: "Confirm availability" },
              { label: "Nh\u1EADn h\u00E0ng & thanh to\u00E1n", sub: "Receive & pay" }],

        si: [
              { label: "\u0DB7\u0DCF\u0DAB\u0DCA\u0DA9 \u0DB6\u0DBD\u0DB1\u0DCA\u0DB1", sub: "Browse items" },
              { label: "\u0DB7\u0DCF\u0DAB\u0DCA\u0DA9\u0DBA\u0D9A\u0DCA \u0DAD\u0DDD\u0DBB\u0DB1\u0DCA\u0DB1", sub: "Choose an item" },
              { label: "LINE \u0DB8\u0D9C\u0DD2\u0DB1\u0DCA \u0DC3\u0DB8\u0DCA\u0DB6\u0DB1\u0DCA\u0DB0 \u0DC0\u0DB1\u0DCA\u0DB1", sub: "Contact us on LINE" },
              { label: "\u0DBD\u0DB6\u0DCF\u0D9C\u0DD0\u0DB1\u0DD3\u0DB8 \u0DAD\u0DC4\u0DC0\u0DD4\u0DBB\u0DD4 \u0D9A\u0DBB\u0DB1\u0DCA\u0DB1", sub: "Confirm availability" },
              { label: "\u0DBD\u0DB6\u0DCF\u0D9C\u0DD9\u0DB1 \u0D9C\u0DD9\u0DC0\u0DB1\u0DCA\u0DB1", sub: "Receive & pay" }],

        ne: [
              { label: "\u0938\u093E\u092E\u093E\u0928 \u0939\u0947\u0930\u094D\u0928\u0941\u0939\u094B\u0938\u094D", sub: "Browse items" },
              { label: "\u0938\u093E\u092E\u093E\u0928 \u091B\u093E\u0928\u094D\u0928\u0941\u0939\u094B\u0938\u094D", sub: "Choose an item" },
              { label: "LINE \u092E\u093E \u0938\u092E\u094D\u092A\u0930\u094D\u0915", sub: "Contact us on LINE" },
              { label: "\u0909\u092A\u0932\u092C\u094D\u0927\u0924\u093E \u092A\u0941\u0937\u094D\u091F\u093F", sub: "Confirm availability" },
              { label: "\u092A\u094D\u0930\u093E\u092A\u094D\u0924\u093F \u0930 \u092D\u0941\u0915\u094D\u0924\u093E\u0928\u0940", sub: "Receive & pay" }],

        id: [
              { label: "Lihat barang", sub: "Browse items" },
              { label: "Pilih barang", sub: "Choose an item" },
              { label: "Hubungi via LINE", sub: "Contact us on LINE" },
              { label: "Konfirmasi stok", sub: "Confirm availability" },
              { label: "Terima & bayar", sub: "Receive & pay" }]

};

const howToUseSteps = [
      { ja: "\u5546\u54C1\u3092\u898B\u308B", en: "Browse items", icon: Search, tone: "bg-[#C86F58]" },
      { ja: "\u6C17\u306B\u306A\u308B\u5546\u54C1\u3092\u9078\u3076", en: "Choose an item", icon: Heart, tone: "bg-[#D7A14D]" },
      { ja: "LINE\u3067\u554F\u3044\u5408\u308F\u305B", en: "Contact us on LINE", icon: MessageCircle, tone: "bg-[#7EA86F]" },
      { ja: "\u5728\u5EAB\u30FB\u53D7\u3051\u6E21\u3057\u78BA\u8A8D", en: "Confirm availability", icon: CalendarCheck, tone: "bg-[#7AA1B8]" },
      { ja: "\u53D7\u3051\u53D6\u308A\u30FB\u304A\u652F\u6255\u3044", en: "Receive & pay", icon: Handshake, tone: "bg-[#9C83AA]" }];


function cn(...classes) {
        return classes.filter(Boolean).join(" ");
}

function Button({
        className,
        variant = "solid",
        type = "button",
        ...props
}) {
        return (/*#__PURE__*/
                  _jsx("button", {
                              type: type,
                              className: cn(
                                            "inline-flex items-center justify-center gap-2 rounded-full text-sm font-medium transition focus:outline-none focus:ring-2 focus:ring-[#C86F58]/30 disabled:pointer-events-none disabled:opacity-50",
                                            variant === "outline" && "border border-[#C8B49B] bg-white text-stone-700 hover:bg-[#FBF8F3]",
                                            variant === "solid" && "bg-[#C86F58] text-white hover:bg-[#B8614D]",
                                            className
                                          ), ...
                                          props }
                           ));

}

function Card({ className, ...props }) {
        return /*#__PURE__*/_jsx("div", { className: cn("rounded-[1.25rem] border border-[#E8DDD1] bg-white shadow-sm", className), ...props });
}

function CardContent({ className, ...props }) {
        return /*#__PURE__*/_jsx("div", { className: cn("p-5", className), ...props });
}

function PhotoPlaceholder({ large = false, t }) {
        return (/*#__PURE__*/
                  _jsxs("div", {
                              className: cn(
                                            "flex flex-col items-center justify-center rounded-[1.4rem] bg-gradient-to-br from-[#F5F0EA] to-[#EEE8E0] text-stone-400",
                                            large ? "h-full min-h-[300px]" : "h-36"
                                          ), children: [/*#__PURE__*/

                              _jsx(ImageIcon, { size: large ? 54 : 34, strokeWidth: 1.4 }), /*#__PURE__*/
                                          _jsx("div", { className: "mt-3 text-sm font-medium", children: t.photoJa }), /*#__PURE__*/
                                          _jsx("div", { className: "text-xs", children: t.photoEn })] }
                            ));

}

function SectionTitle({ ja, en, color = "bg-[#D7A18B]" }) {
        return (/*#__PURE__*/
                  _jsxs("div", { className: "mb-6 flex flex-col items-center text-center", children: [/*#__PURE__*/
                                      _jsxs("div", { className: "mb-2 flex items-center gap-3", children: [/*#__PURE__*/
                                                            _jsx("span", { className: cn("h-7 w-1.5 rounded-full", color) }), /*#__PURE__*/
                                                    _jsx("h2", { className: "text-2xl font-semibold tracking-[0.08em] text-stone-800", children: ja })] }
                                                  ), /*#__PURE__*/
                              _jsx("p", { className: "text-sm text-stone-500", children: en })] }
                            ));

}

function Header({ t }) {
        return (/*#__PURE__*/
                  _jsxs("header", { className: "sticky top-0 z-20 border-b border-[#E8DDD1] bg-[#FBF8F3]/95 backdrop-blur", children: [/*#__PURE__*/
                                        _jsxs("div", { className: "mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6", children: [/*#__PURE__*/
                                                              _jsxs("a", { href: "#top", className: "flex items-center gap-3", "aria-label": "KiMEGURi Reuse Market Home", children: [/*#__PURE__*/
                                                                                    _jsx("div", { className: "flex h-11 w-11 items-center justify-center rounded-2xl border border-[#C8B49B] bg-white text-[#54805D]", children: /*#__PURE__*/
                                                                                                             _jsx(Home, { size: 25, strokeWidth: 1.6 }) }
                                                                                                   ), /*#__PURE__*/
                                                                              _jsxs("div", { children: [/*#__PURE__*/
                                                                                                        _jsxs("div", { className: "text-xl font-semibold tracking-tight sm:text-2xl", children: [/*#__PURE__*/
                                                                                                                                    _jsx("span", { className: "text-[#C86F58]", children: "KiMEGURi" }), " Reuse Market"] }
                                                                                                                          ), /*#__PURE__*/
                                                                                                _jsx("div", { className: "hidden text-xs tracking-wide text-stone-500 sm:block", children:
                                                                                                                    t.subtitle }
                                                                                                                 )] }
                                                                                              )] }
                                                                            ), /*#__PURE__*/

                                                      _jsxs("nav", { className: "hidden items-center gap-7 text-xs text-stone-700 lg:flex", "aria-label": "Main navigation", children: [/*#__PURE__*/
                                                                              _jsxs("a", { href: "#top", className: "flex flex-col items-center gap-1 text-[#C86F58]", children: [/*#__PURE__*/_jsx(Home, { size: 18 }), t.navHome] }), /*#__PURE__*/
                                                                      _jsxs("a", { href: "#categories", className: "flex flex-col items-center gap-1 hover:text-[#C86F58]", children: [/*#__PURE__*/_jsx(Grid2X2, { size: 18 }), t.navCategories] }), /*#__PURE__*/
                                                                      _jsxs("a", { href: "#new-items", className: "flex flex-col items-center gap-1 hover:text-[#C86F58]", children: [/*#__PURE__*/_jsx(Sparkles, { size: 18 }), t.navNewItems] }), /*#__PURE__*/
                                                                      _jsxs("a", { href: "#how-to-use", className: "flex flex-col items-center gap-1 hover:text-[#C86F58]", children: [/*#__PURE__*/_jsx(BookOpen, { size: 18 }), t.navHowToUse] }), /*#__PURE__*/
                                                                      _jsxs("a", { href: "#contact", className: "flex flex-col items-center gap-1 hover:text-[#C86F58]", children: [/*#__PURE__*/_jsx(Mail, { size: 18 }), t.navContact] })] }
                                                                    ), /*#__PURE__*/

                                                      _jsxs("div", { className: "hidden items-center gap-3 md:flex", children: [/*#__PURE__*/
                                                                              _jsxs("label", { className: "flex items-center gap-2 rounded-full border border-[#E2D5C6] bg-white px-4 py-2 text-xs text-stone-400", children: [/*#__PURE__*/
                                                                                                          _jsx("span", { className: "sr-only", children: t.search }), /*#__PURE__*/
                                                                                                _jsx("input", { className: "w-24 bg-transparent outline-none placeholder:text-stone-400", placeholder: t.search }), /*#__PURE__*/
                                                                                                _jsx(Search, { size: 15 })] }
                                                                                              ), /*#__PURE__*/
                                                                      _jsxs("a", {
                                                                                        href: LINE_URL,
                                                                                        target: "_blank",
                                                                                        rel: "noreferrer",
                                                                                        className: "inline-flex items-center justify-center gap-2 rounded-full bg-[#4E9D5C] px-5 py-2.5 text-sm font-medium text-white transition hover:bg-[#438B50]", children: [/*#__PURE__*/

                                                                                        _jsx(MessageCircle, { size: 16 }), " ", t.line] }
                                                                                      )] }
                                                                    ), /*#__PURE__*/

                                                      _jsx("button", { className: "inline-flex rounded-full border border-[#E2D5C6] bg-white p-2 text-stone-700 lg:hidden", "aria-label": "Open menu", children: /*#__PURE__*/
                                                                                _jsx(Menu, { size: 22 }) }
                                                                   )] }
                                                    ), /*#__PURE__*/
                                  _jsxs("div", { className: "mx-auto flex max-w-7xl items-center gap-3 border-t border-[#E8DDD1] px-4 pb-3 pt-3 sm:px-6 md:hidden", children: [/*#__PURE__*/
                                                            _jsxs("label", { className: "flex min-w-0 flex-1 items-center gap-2 rounded-full border border-[#E2D5C6] bg-white px-4 py-3 text-xs text-stone-400", children: [/*#__PURE__*/
                                                                                          _jsx("span", { className: "sr-only", children: t.search }), /*#__PURE__*/
                                                                                  _jsx("input", { className: "min-w-0 flex-1 bg-transparent outline-none placeholder:text-stone-400", placeholder: t.search }), /*#__PURE__*/
                                                                                  _jsx(Search, { size: 16 })] }
                                                                                ), /*#__PURE__*/
                                                    _jsxs("a", {
                                                                      href: LINE_URL,
                                                                      target: "_blank",
                                                                      rel: "noreferrer",
                                                                      className: "inline-flex min-h-11 shrink-0 items-center justify-center gap-2 rounded-full bg-[#4E9D5C] px-4 text-sm font-medium text-white transition hover:bg-[#438B50]", children: [/*#__PURE__*/

                                                                      _jsx(MessageCircle, { size: 16 }), " ", t.line] }
                                                                    )] }
                                                  )] }
                           ));

}

function Hero({
        currentLanguage,
        onLanguageChange,
        t




}) {
        const [isLanguageOpen, setIsLanguageOpen] = useState(false);
        const currentOption = languageOptions.find((language) => language.code === currentLanguage) ?? languageOptions[0];

  return (/*#__PURE__*/
            _jsxs("section", { id: "top", className: "scroll-mt-40 grid gap-10 rounded-[1.8rem] border border-[#E8DDD1] bg-white p-6 shadow-sm md:grid-cols-[0.95fr_1.05fr] md:p-12", children: [/*#__PURE__*/
                                    _jsxs("div", { className: "flex flex-col justify-center", children: [/*#__PURE__*/
                                                          _jsxs("div", { className: "relative mb-6 w-fit", "aria-label": "Language support", children: [/*#__PURE__*/
                                                                                  _jsxs("button", {
                                                                                                    type: "button",
                                                                                                    "aria-label": "Choose language",
                                                                                                    "aria-expanded": isLanguageOpen,
                                                                                                    onClick: () => setIsLanguageOpen((open) => !open),
                                                                                                    className: "flex items-center gap-2 rounded-full border border-[#E8DDD1] bg-white px-4 py-2 text-sm font-medium text-[#C86F58] shadow-sm transition hover:-translate-y-0.5 hover:border-[#C86F58] hover:shadow-md", children: [/*#__PURE__*/

                                                                                                    _jsx(Globe, { size: 20, strokeWidth: 1.7 }), /*#__PURE__*/
                                                                                                                      _jsx("span", { className: "text-xl", children: currentOption.flag })] }
                                                                                                  ),
                                                                          isLanguageOpen ? /*#__PURE__*/
                                                                          _jsx("div", { className: "absolute left-0 top-14 z-30 w-56 overflow-hidden rounded-2xl border border-[#E8DDD1] bg-white py-2 shadow-xl", children:
                                                                                            languageOptions.map((language) => /*#__PURE__*/
                                                                                                                            _jsxs("button", {
                                                                                                                                  
                                                                                                                                                type: "button",
                                                                                                                                                className: cn(
                                                                                                                                                                      "flex w-full items-center gap-3 px-4 py-3 text-left text-sm font-medium transition hover:bg-[#FBF8F3] hover:text-[#C86F58]",
                                                                                                                                                                      currentLanguage === language.code ? "bg-[#FBF8F3] text-[#C86F58]" : "text-stone-700"
                                                                                                                                                                    ),
                                                                                                                                                onClick: () => {
                                                                                                                                                                      onLanguageChange(language.code);
                                                                                                                                                                      setIsLanguageOpen(false);
                                                                                                                                                      }, children: [/*#__PURE__*/
                                                                                                                                  
                                                                                                                                                _jsx("span", { className: "text-xl", children: language.flag }), /*#__PURE__*/
                                                                                                                                                                    _jsx("span", { children: language.label })] }, language.code
                                                                                                                                              )
                                                                                                                            ) }
                                                                                         ) :
                                                                          null] }
                                                                        ), /*#__PURE__*/
                                                  _jsx("h1", { className: "text-4xl font-semibold leading-[1.35] tracking-[0.04em] text-stone-900 md:text-5xl", children:
                                                                  t.heroTitle }
                                                               ), /*#__PURE__*/
                                                  _jsx("p", { className: "mt-4 text-xl font-medium tracking-wide text-[#C86F58]", children: t.heroLead }),
                                                  t.heroSub ? /*#__PURE__*/_jsx("p", { className: "mt-2 text-sm leading-6 text-stone-500", children: t.heroSub }) : null, /*#__PURE__*/
                                                  _jsxs("div", { className: "mt-8 flex flex-wrap gap-4", children: [/*#__PURE__*/
                                                                          _jsxs("a", { href: "#new-items", className: "inline-flex items-center justify-center gap-2 rounded-full bg-[#C86F58] px-7 py-4 text-sm font-medium text-white transition hover:bg-[#B8614D]", children: [/*#__PURE__*/
                                                                                                  _jsx(ShoppingBag, { size: 18 }), " ", t.viewItems] }
                                                                                          ), /*#__PURE__*/
                                                                  _jsxs("a", { href: "#how-to-use", className: "inline-flex items-center justify-center gap-2 rounded-full border border-[#C8B49B] bg-white px-7 py-4 text-sm font-medium text-stone-700 transition hover:bg-[#FBF8F3]", children: [/*#__PURE__*/
                                                                                          _jsx(BookOpen, { size: 18 }), " ", t.howFlow] }
                                                                                  )] }
                                                                )] }
                                                ), /*#__PURE__*/
                        _jsx("div", { className: "relative h-full min-h-[300px] overflow-hidden rounded-[1.4rem] bg-[#EEE8E0] shadow-inner", children: /*#__PURE__*/_jsx("img", { src: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=1200&q=80", alt: "Second-hand furniture and home goods", className: "h-full min-h-[300px] w-full object-cover" }) })] }
                      ));

}

function CategorySection({ language, t }) {
        return (/*#__PURE__*/
                  _jsxs("section", { id: "categories", className: "mt-12 scroll-mt-24", children: [/*#__PURE__*/
                                          _jsx(SectionTitle, { ja: t.categoriesJa, en: t.categoriesEn }), /*#__PURE__*/
                              _jsx("div", { className: "grid gap-4 sm:grid-cols-2 lg:grid-cols-6", children:
                                            categories.map((category) => {
                                                            const Icon = category.icon;
                                                            return (/*#__PURE__*/
                                                                              _jsx(Card, { className: cn("rounded-[1.4rem]", category.tone), children: /*#__PURE__*/
                                                                                                        _jsxs(CardContent, { className: "flex min-h-44 flex-col items-center justify-center p-5 text-center", children: [/*#__PURE__*/
                                                                                                                                            _jsx(Icon, { size: 42, strokeWidth: 1.35, className: "mb-4 text-stone-700" }), /*#__PURE__*/
                                                                                                                              _jsx("div", { className: "font-semibold tracking-wide", children: categoryNames[language][category.name] }), /*#__PURE__*/
                                                                                                                              _jsx("div", { className: "text-sm text-stone-600", children: category.name }), /*#__PURE__*/
                                                                                                                              _jsxs("div", { className: "mt-5 w-full border-t border-white/70 pt-3 text-xs text-stone-500", children: [
                                                                                                                                                      category.count, " items"] }
                                                                                                                                                    )] }
                                                                                                                            ) }, category.name
                                                                                               ));

                                            }) }
                                         )] }
                            ));

}

function ProductCard({
        product,
        isSelected,
        onSelect,
        language,
        t






}) {
        const localizedProduct = productNames[language][product.id];

  return (/*#__PURE__*/
                        _jsx("button", { type: "button", onClick: () => onSelect(product), className: "h-full w-full text-left", children: /*#__PURE__*/
                                  _jsx(Card, {
                                                className: cn(
                                                                                                                                "flex h-full flex-col overflow-hidden transition hover:-translate-y-0.5 hover:shadow-md",
                                                                isSelected && "ring-2 ring-[#C86F58]"
                                                              ), children: /*#__PURE__*/

                                                                                                _jsxs(CardContent, { className: "flex h-full flex-col p-3", children: [/*#__PURE__*/
                                                                              _jsxs("div", { className: "relative", children: [
                                                                                                product.badge ? /*#__PURE__*/
                                                                                                _jsx("span", { className: "absolute left-2 top-2 z-10 rounded-md bg-[#C86F58] px-2 py-1 text-xs text-white", children:
                                                                                                                    localizedProduct.badge ?? product.badge }
                                                                                                                 ) :
                                                                                                null, /*#__PURE__*/
                                                                                                _jsx("img", { src: product.image, alt: product.imageAlt, loading: "lazy", className: "h-44 w-full rounded-[1.2rem] object-cover sm:h-36" })] }
                                                                                              ), /*#__PURE__*/
                                                                                                                                _jsxs("div", { className: "mt-4 flex flex-1 flex-col", children: [/*#__PURE__*/
                                                                                                                                                                                    _jsx("div", { className: "min-h-[3rem] font-semibold leading-6 tracking-wide", children: localizedProduct.name }), /*#__PURE__*/
                                                                                  _jsx("div", { className: "text-xs text-stone-500", children: product.name }), /*#__PURE__*/
                                                                                  _jsx("div", { className: "mt-2 text-2xl font-semibold text-[#C86F58]", children: product.price }), /*#__PURE__*/
                                                                                  _jsxs("div", { className: cn("mt-auto rounded-xl px-3 py-2 text-center text-xs font-medium", product.tone), children: [/*#__PURE__*/
                                                                                                              _jsx("div", { children: localizedProduct.status }), /*#__PURE__*/
                                                                                                      _jsx("div", { className: "text-[11px] opacity-80", children: product.status })] }
                                                                                                    )] }
                                                                                )] }
                                                              ) }
                                             ) }
                     ));

}

function NewItemsSection({
        selected,
        onSelect,
        language,
        t





}) {
        return (/*#__PURE__*/
                  _jsxs("section", { id: "new-items", className: "mt-14 scroll-mt-24", children: [/*#__PURE__*/
                                          _jsxs("div", { className: "mb-6 flex items-center justify-between", children: [/*#__PURE__*/
                                                                _jsx("div", { className: "mx-auto md:mx-0", children: /*#__PURE__*/
                                                                                       _jsx(SectionTitle, { ja: t.newItemsJa, en: t.newItemsEn }) }
                                                                             ), /*#__PURE__*/
                                                        _jsx(Button, { variant: "outline", className: "hidden px-5 py-2.5 text-stone-600 md:inline-flex", children:
                                                                        t.viewAll }
                                                                     )] }
                                                      ), /*#__PURE__*/
                              _jsx("div", { className: "grid gap-5 sm:grid-cols-2 lg:grid-cols-5", children:
                                            products.map((product) => /*#__PURE__*/
                                                                 _jsx(ProductCard, {

                                                                                product: product,
                                                                                 isSelected: selected.id === product.id,
                                                                                 onSelect: onSelect,
                                                                                 language: language,
                                                                                 t: t }, product.id
                                                                              )
                                                                 ) }
                                         )] }
                            ));

}

function FeaturedProduct({ selected, language, t }) {
        const localizedProduct = productNames[language][selected.id];

  return (/*#__PURE__*/
            _jsxs("section", { className: "mt-10 grid gap-8 rounded-[1.7rem] border border-[#E8DDD1] bg-white p-5 shadow-sm lg:grid-cols-[0.95fr_1.55fr] lg:p-7", children: [/*#__PURE__*/
                                    _jsxs("div", { className: "relative", children: [/*#__PURE__*/
                                                          _jsxs("div", { className: "absolute left-0 top-0 z-10 rounded-br-2xl rounded-tl-[1.4rem] bg-[#D69A4E] px-4 py-3 text-sm font-medium text-white", children: [
                                                                          t.popular, /*#__PURE__*/_jsx("br", {}), /*#__PURE__*/_jsx("span", { className: "text-xs opacity-90", children: t.popularEn })] }
                                                                        ), /*#__PURE__*/
                                                  _jsx("div", { className: "h-full min-h-[300px] overflow-hidden rounded-[1.4rem] bg-[#EEE8E0]", children: /*#__PURE__*/_jsx("img", { src: selected.image, alt: selected.imageAlt, className: "h-full min-h-[300px] w-full object-cover" }) })] }
                                                ), /*#__PURE__*/

                        _jsxs("div", { className: "grid gap-6 lg:grid-cols-[0.85fr_1.15fr]", children: [/*#__PURE__*/
                                              _jsxs("div", { className: "flex flex-col justify-center", children: [/*#__PURE__*/
                                                                      _jsxs("div", { className: "mb-3 flex items-center gap-2 text-[#54805D]", children: [/*#__PURE__*/
                                                                                                _jsx("span", { className: "h-6 w-1 rounded-full bg-[#9EB99A]" }), /*#__PURE__*/
                                                                                        _jsxs("div", { children: [/*#__PURE__*/
                                                                                                                    _jsx("div", { className: "text-xl font-semibold tracking-wide", children: t.featuredJa }), /*#__PURE__*/
                                                                                                            _jsx("div", { className: "text-xs text-stone-500", children: t.featuredEn })] }
                                                                                                          )] }
                                                                                      ), /*#__PURE__*/
                                                              _jsx("h3", { className: "text-3xl font-semibold tracking-wide", children: localizedProduct.name }), /*#__PURE__*/
                                                              _jsx("p", { className: "text-stone-500", children: selected.name }), /*#__PURE__*/
                                                              _jsx("div", { className: "mt-4 text-4xl font-semibold text-[#C86F58]", children: selected.price }), /*#__PURE__*/
                                                              _jsxs("div", { className: "mt-5 space-y-3 text-sm", children: [/*#__PURE__*/
                                                                                        _jsxs("div", { className: "rounded-xl bg-[#EDF4EC] px-4 py-3 text-[#58715A]", children: [/*#__PURE__*/
                                                                                                                    _jsx(CheckCircle2, { className: "mr-2 inline", size: 17 }),
                                                                                                            localizedProduct.status, /*#__PURE__*/
                                                                                                            _jsx("br", {}), /*#__PURE__*/
                                                                                                            _jsx("span", { className: "ml-6 text-xs", children: selected.status })] }
                                                                                                          ), /*#__PURE__*/
                                                                                _jsxs("div", { className: "rounded-xl bg-[#E9F2F7] px-4 py-3 text-[#466B82]", children: [/*#__PURE__*/
                                                                                                            _jsx(Truck, { className: "mr-2 inline", size: 17 }),
                                                                                                    t.delivery, /*#__PURE__*/
                                                                                                    _jsx("br", {}), /*#__PURE__*/
                                                                                                    _jsx("span", { className: "ml-6 text-xs", children: t.deliveryEn })] }
                                                                                                  )] }
                                                                              )] }
                                                            ), /*#__PURE__*/

                                      _jsxs("div", { className: "flex flex-col justify-center", children: [/*#__PURE__*/
                                                              _jsx("p", { className: "text-sm leading-7 text-stone-700", children: t.productNote }), /*#__PURE__*/
                                                      _jsxs("div", { className: "mt-5 overflow-hidden rounded-2xl border border-[#E8DDD1] bg-[#FBF8F3]", children: [/*#__PURE__*/
                                                                                _jsxs("div", { className: "border-b border-[#E8DDD1] px-4 py-3", children: [/*#__PURE__*/
                                                                                                          _jsxs("div", { className: "text-sm font-semibold text-stone-800", children: [localizedProduct.name, " details"] }), /*#__PURE__*/
                                                                                                  _jsx("p", { className: "mt-1 text-xs leading-5 text-stone-600", children: "Photos, video, size, and condition are organized before customers ask on LINE." })] }
                                                                                               ), /*#__PURE__*/
                                                                        _jsxs("div", { className: "divide-y divide-[#E8DDD1] text-sm", children: [/*#__PURE__*/
                                                                                                  _jsxs("div", { className: "grid grid-cols-[88px_1fr] gap-3 px-4 py-3", children: [/*#__PURE__*/_jsx("div", { className: "font-semibold text-stone-800", children: "Photos" }), /*#__PURE__*/_jsx("div", { className: "text-stone-600", children: selected.photos })] }), /*#__PURE__*/
                                                                                          _jsxs("div", { className: "grid grid-cols-[88px_1fr] gap-3 px-4 py-3", children: [/*#__PURE__*/_jsx("div", { className: "font-semibold text-stone-800", children: "Video" }), /*#__PURE__*/_jsx("div", { className: "text-stone-600", children: selected.video })] }), /*#__PURE__*/
                                                                                          _jsxs("div", { className: "grid grid-cols-[88px_1fr] gap-3 px-4 py-3", children: [/*#__PURE__*/_jsx("div", { className: "font-semibold text-stone-800", children: "Size" }), /*#__PURE__*/_jsx("div", { className: "text-stone-600", children: selected.size })] }), /*#__PURE__*/
                                                                                          _jsxs("div", { className: "grid grid-cols-[88px_1fr] gap-3 px-4 py-3", children: [/*#__PURE__*/_jsx("div", { className: "font-semibold text-stone-800", children: "Condition" }), /*#__PURE__*/_jsxs("div", { className: "text-stone-600", children: [localizedProduct.status, " / ", selected.condition] })] })] }
                                                                                        )] }
                                                                      ), /*#__PURE__*/
                                                      _jsxs("div", { className: "mt-5 flex flex-wrap gap-2 text-xs", children: [/*#__PURE__*/
                                                                                _jsxs("span", { className: "inline-flex items-center gap-1 rounded-lg border border-[#D6E1D3] bg-white px-3 py-2 text-stone-600", children: [/*#__PURE__*/
                                                                                                             _jsx(ShieldCheck, { size: 14 }), " ", t.checked] }
                                                                                                  ), /*#__PURE__*/
                                                                        _jsxs("span", { className: "inline-flex items-center gap-1 rounded-lg border border-[#D6E1D3] bg-white px-3 py-2 text-stone-600", children: [/*#__PURE__*/
                                                                                                     _jsx(CheckCircle2, { size: 14 }), " ", t.cleaned] }
                                                                                          ), /*#__PURE__*/
                                                                        _jsxs("span", { className: "inline-flex items-center gap-1 rounded-lg border border-[#D6E1D3] bg-white px-3 py-2 text-stone-600", children: [/*#__PURE__*/
                                                                                                     _jsx(Heart, { size: 14 }), " ", t.womenSupport] }
                                                                                          )] }
                                                                      ), /*#__PURE__*/
                                                      _jsxs("a", {
                                                                        href: LINE_URL,
                                                                        target: "_blank",
                                                                        rel: "noreferrer",
                                                                        className: "mt-6 inline-flex items-center justify-center gap-2 rounded-xl bg-[#4E9D5C] px-5 py-4 text-sm font-medium text-white transition hover:bg-[#438B50]", children: [/*#__PURE__*/

                                                                        _jsx(MessageCircle, { size: 18 }), " ", t.askLine] }
                                                                      )] }
                                                    )] }
                                    )] }
                      ));

}

function HowToUseSection({ language, t }) {
        return (/*#__PURE__*/
                  _jsxs("section", { id: "how-to-use", className: "mt-12 scroll-mt-24", children: [/*#__PURE__*/
                                          _jsx(SectionTitle, { ja: t.howFlow, en: t.navHowToUse, color: "bg-[#E5D8C9]" }), /*#__PURE__*/
                              _jsx("div", { className: "grid gap-4 md:grid-cols-5", children:
                                            howToUseSteps.map((step, index) => {
                                                            const Icon = step.icon;
                                                            const label = stepLabels[language][index];
                                                            return (/*#__PURE__*/
                                                                              _jsxs("div", { className: "rounded-[1.25rem] border border-[#E8DDD1] bg-white p-5 text-center shadow-sm", children: [/*#__PURE__*/
                                                                                                          _jsx("div", { className: cn("mx-auto mb-3 flex h-10 w-10 items-center justify-center rounded-full text-sm font-semibold text-white", step.tone), children:
                                                                                                                                String(index + 1).padStart(2, "0") }
                                                                                                                             ), /*#__PURE__*/
                                                                                                  _jsx(Icon, { className: "mx-auto mb-3 text-stone-700", size: 28, strokeWidth: 1.4 }), /*#__PURE__*/
                                                                                                  _jsx("div", { className: "text-sm font-semibold", children: label.label }), /*#__PURE__*/
                                                                                                  _jsx("div", { className: "mt-1 text-xs text-stone-500", children: label.sub })] }, step.ja
                                                                                                ));

                                            }) }
                                         )] }
                            ));

}

function Footer({ t }) {
        return (/*#__PURE__*/
                  _jsxs("footer", { id: "contact", className: "mt-14 border-t border-[#E8DDD1] bg-[#F4EEE5]", children: [/*#__PURE__*/
                                         _jsxs("div", { className: "mx-auto grid max-w-7xl gap-8 px-6 py-8 md:grid-cols-[1.2fr_1fr_1fr_1fr]", children: [/*#__PURE__*/
                                                               _jsxs("div", { children: [/*#__PURE__*/
                                                                                       _jsxs("div", { className: "text-xl font-semibold", children: [/*#__PURE__*/_jsx("span", { className: "text-[#C86F58]", children: "KiMEGURi" }), " Reuse Market"] }), /*#__PURE__*/
                                                                               _jsx("p", { className: "mt-3 max-w-xs text-sm leading-6 text-stone-600", children: "Discover Unique Treasures for your Home" }), /*#__PURE__*/
                                                                               ] }
                                                                             ), /*#__PURE__*/
                                                       _jsxs("div", { className: "space-y-1 text-sm text-stone-600", children: [/*#__PURE__*/
                                                                               _jsx("div", { className: "mb-2 font-semibold text-stone-800", children: t.quickLinks }), /*#__PURE__*/
                                                                       _jsx("a", { href: "#top", className: "block hover:text-[#C86F58]", children: t.navHome }), /*#__PURE__*/
                                                                       _jsx("a", { href: "#categories", className: "block hover:text-[#C86F58]", children: t.navCategories }), /*#__PURE__*/
                                                                       _jsx("a", { href: "#new-items", className: "block hover:text-[#C86F58]", children: t.navNewItems }), /*#__PURE__*/
                                                                       _jsx("a", { href: "#how-to-use", className: "block hover:text-[#C86F58]", children: t.navHowToUse })] }
                                                                     ), /*#__PURE__*/
                                                       _jsxs("div", { className: "space-y-1 text-sm text-stone-600", children: [/*#__PURE__*/
                                                                               _jsx("div", { className: "mb-2 font-semibold text-stone-800", children: t.support }), /*#__PURE__*/
                                                                       _jsx("p", { children: t.faq }), /*#__PURE__*/
                                                                       _jsx("p", { children: t.deliveryFooter }), /*#__PURE__*/
                                                                       _jsx("p", { children: t.payment }), /*#__PURE__*/
                                                                       _jsx("p", { children: t.legal })] }
                                                                     ), /*#__PURE__*/
                                                       _jsxs("div", { children: [/*#__PURE__*/
                                                                               _jsx("div", { className: "mb-3 font-semibold text-stone-800", children: t.contactUs }), /*#__PURE__*/
                                                                       _jsxs("a", {
                                                                                         href: LINE_URL,
                                                                                         target: "_blank",
                                                                                         rel: "noreferrer",
                                                                                         className: "inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#4E9D5C] px-4 py-2.5 text-sm font-medium text-white transition hover:bg-[#438B50]", children: [/*#__PURE__*/

                                                                                         _jsx(MessageCircle, { size: 16 }), " ", t.line] }
                                                                                       ), /*#__PURE__*/
                                                                       _jsxs("a", {
                                                                                         href: "mailto:info@example.com",
                                                                                         className: "mt-3 inline-flex w-full items-center justify-center gap-2 rounded-full border border-[#C8B49B] bg-white px-4 py-2.5 text-sm font-medium text-stone-700 transition hover:bg-[#FBF8F3]", children: [/*#__PURE__*/

                                                                                         _jsx(Mail, { size: 16 }), " ", t.contactMail] }
                                                                                       )] }
                                                                     )] }
                                                     ), /*#__PURE__*/
                              _jsx("div", { className: "border-t border-[#E8DDD1] py-4 text-center text-xs text-stone-500", children: "(c) 2025 KiMEGURi Reuse Market. All rights reserved." }

                                         )] }
                            ));

}

export default function App() {
        const [selectedProductId, setSelectedProductId] = useState(products[0].id);
        const [language, setLanguage] = useState("ja");
        const t = translations[language];

  const selectedProduct = useMemo(() => {
            return products.find((product) => product.id === selectedProductId) ?? products[0];
  }, [selectedProductId]);

  return (/*#__PURE__*/
            _jsxs("div", { className: "min-h-screen bg-[#FBF8F3] text-stone-800 antialiased", children: [/*#__PURE__*/
                                _jsx(Header, { t: t }), /*#__PURE__*/
                        _jsxs("main", { className: "mx-auto max-w-7xl px-4 py-8 sm:px-6", children: [/*#__PURE__*/
                                               _jsx(Hero, { currentLanguage: language, onLanguageChange: setLanguage, t: t }), /*#__PURE__*/
                                      _jsx(CategorySection, { language: language, t: t }), /*#__PURE__*/
                                      _jsx(NewItemsSection, {
                                                      selected: selectedProduct,
                                                      onSelect: (product) => setSelectedProductId(product.id),
                                                      language: language,
                                                      t: t }
                                                   ), /*#__PURE__*/
                                      _jsx(FeaturedProduct, { selected: selectedProduct, language: language, t: t }), /*#__PURE__*/
                                      _jsx(HowToUseSection, { language: language, t: t })] }
                                    ), /*#__PURE__*/
                        _jsx(Footer, { t: t })] }
                      ));

}
