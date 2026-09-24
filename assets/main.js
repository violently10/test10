/**
 * D8 GALLERY - VANILLA JS ATELIER SCRIPT
 * Standalone, 0-build, 100% Cloudflare Pages Drag & Drop Ready
 */

// Global Product Catalog
const D8_PRODUCTS = [
  {
    id: "SKU-TR-18K",
    sku: "SKU-7821-AU",
    titleEn: "The Torus Band",
    titleFa: "حلقه مجسمه‌ای توروس (Torus)",
    collection: "sculptural",
    collectionFa: "فرم‌های مجسمه‌ای",
    materialFa: "طلای ۱۸ عیار ورمل خالص (Vermeil)",
    materialEn: "18K Pure Gold Vermeil",
    priceUsd: 420,
    priceFa: "۴۲۰ دلار / حدود ۴۲,۰۰۰,۰۰۰ تومان",
    salePriceUsd: null,
    stockStatus: "in_stock",
    stockStatusFa: "موجود در آتلیه (۱۲ عدد)",
    weight: "۱۴.۲ گرم",
    dimensions: "عرض باند: ۹ میلی‌متر، ضخامت ارگونومیک",
    finish: "پرداخت آینه‌ای دستی با انحنای ارگانیک",
    featured: true,
    keyPiece: true,
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBs99v8b-AQKmFJ3HTmEF2vgHWVWESl7xomwlf41YbBNb46JF1ILjIHW_6LsrU6zjae3lqHks5o8hR-eKy-t2OdFFYrzLZkMC3d3bt8aR8-yi1dqLitPP5XNy6ukJCQa3zftY0T8800uGaj9fBdamq4dLTFu_RpKuYDxq_Gkb9dLS8kQ-kkGr618QAZTw8WWzXkgqHrWXjyY1H7DhvKhgs-uReddyuxiiK7H6EvUTXUQLkXMSwgMO7cQw",
    images: [
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBs99v8b-AQKmFJ3HTmEF2vgHWVWESl7xomwlf41YbBNb46JF1ILjIHW_6LsrU6zjae3lqHks5o8hR-eKy-t2OdFFYrzLZkMC3d3bt8aR8-yi1dqLitPP5XNy6ukJCQa3zftY0T8800uGaj9fBdamq4dLTFu_RpKuYDxq_Gkb9dLS8kQ-kkGr618QAZTw8WWzXkgqHrWXjyY1H7DhvKhgs-uReddyuxiiK7H6EvUTXUQLkXMSwgMO7cQw",
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAsMH3TM1we5ES4L37xTEGixXHCFu9Pu_SHJBjPkhuB-KgAD91qLE0tMpLP2RUQFoKPgWRdyYIqg_J5cW7Gz8cENvVQK4ZbktUE54iwILpcSi5EwnU79BIIN0EsQPN7XP5J0klruqIluv93ScLPtk-syODxr1VVcM1fAA-UEbBxnNEPAZInMWP7ma50Dh8eMidj47w-asMI5_rNM2Zxw13zv4Uy0o2vgA7jsQmvvH4hUX2yowu_p0IVuQ"
    ],
    descriptionFa: "حلقه توروس جلوه‌ای از هندسه بی‌نهایت و جاودانه است. قالبی پیوسته و بدون درز که از طلای ۱۸ عیار با دست‌ریزی استادانه آفریده شده و نشانی از وقار مینی‌مالیستی در کلکسیون دائمی D8 Gallery است."
  },
  {
    id: "SKU-ARC-01",
    sku: "SKU-4910-AG",
    titleEn: "The Arc Collar",
    titleFa: "گردنبند طوق آرک (Arc Collar)",
    collection: "silver",
    collectionFa: "نقره مونولیتیک ۹۲۵",
    materialFa: "نقره استرلینگ ۹۲۵ خالص (پوشش رودیوم)",
    materialEn: "925 Sterling Silver Monolithic Cast",
    priceUsd: 590,
    priceFa: "۵۹۰ دلار / حدود ۵۹,۰۰۰,۰۰۰ تومان",
    salePriceUsd: 540,
    salePriceFa: "۵۴۰ دلار (پیشنهاد آتلیه)",
    stockStatus: "low_stock",
    stockStatusFa: "موجودی محدود (فقط ۳ عدد در گالری)",
    weight: "۷۸.۵ گرم نقره خالص",
    dimensions: "قطر داخلی: ۱۳.۵ سانتی‌متر با قفل مخفی فنری",
    finish: "صیقل ساتین و براق با خطوط معماری",
    featured: true,
    keyPiece: false,
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuA3xNPLUzbemOWcdEoI43RU0E4aUrhMsfVdEGCFqxyqpUeDqp-JByWsSBUNW64Eip2Btmx1WUendsgmOz5JTQLOU-sff5Ifc77_U2dCoqcPK7HqnVDWdxo9ys2KGGgK3sZfDJ5yoYDPVHQMcJbEQi1j1jE-A3loTIRLz3BPCZEL62mX1FzxhVfciEeac6DiUb08ktSXMf_jzHrsELecOhBatSDpygizJTGi5AwFJ6AKo_55Jt20Ct1qIg",
    images: [
      "https://lh3.googleusercontent.com/aida-public/AB6AXuA3xNPLUzbemOWcdEoI43RU0E4aUrhMsfVdEGCFqxyqpUeDqp-JByWsSBUNW64Eip2Btmx1WUendsgmOz5JTQLOU-sff5Ifc77_U2dCoqcPK7HqnVDWdxo9ys2KGGgK3sZfDJ5yoYDPVHQMcJbEQi1j1jE-A3loTIRLz3BPCZEL62mX1FzxhVfciEeac6DiUb08ktSXMf_jzHrsELecOhBatSDpygizJTGi5AwFJ6AKo_55Jt20Ct1qIg",
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBOsXmE2ubsFEkMpA9CbcAoh5OGG87_DoHRR0JtGX9dp3-Rg3dKpfM-uqFfTo68rBwAQYPByycFwe1EVvGvAKuzTSfgv3KD6HDQJJlhxmcJo_73jh1WOvqmwrAcUycjrbeSoQX_lHlR0ew4691_8MSpX-irf0cOQHFia8CS28XCHTn8e8p4zV0Okw6OJU5l8cC0aOrM8Hfk6W50Mp7goqapwAp0he7woZnvyhtsifYV6vwWUSD45zNqbw"
    ],
    descriptionFa: "عاری از هرگونه آرایه و تزیینات اضافی؛ طوق مجسمه‌ای آرک تنها بر وزن اصیل فلز، انحنای بازتاب‌دهنده نور و تراکم ملموس فرم تکیه دارد تا شکوه خطوط ترقوه را دوچندان کند."
  },
  {
    id: "SKU-FLD-02",
    sku: "SKU-8920-AU",
    titleEn: "The Fold Cuff",
    titleFa: "دستبند کاف فولد (Fold Cuff)",
    collection: "gold",
    collectionFa: "طلای خالص ۱۸ عیار",
    materialFa: "طلای زرد ۱۸ عیار دست‌کوب",
    materialEn: "18K Solid Yellow Gold",
    priceUsd: 840,
    priceFa: "۸۴۰ دلار / حدود ۸۴,۰۰۰,۰۰۰ تومان",
    salePriceUsd: null,
    stockStatus: "custom",
    stockStatusFa: "ساخت سفارشی (تحویل ۷ روزه)",
    weight: "۳۲.۸ گرم طلای عیار ۷۵۰",
    dimensions: "ارتفاع کاف: ۲۲ میلی‌متر، دهانه انعطاف‌پذیر ایمن",
    finish: "پتینه چکش‌کاری شده با بافت ارگانیک سنگ آهک",
    featured: true,
    keyPiece: false,
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuADwNeDMwtv4-IxDmvv2gm7EQErSrLV5UcZils5TGvYl2EbCFAtIM8VvBFQJ5BVyGTivLMxSwn3yO1faTKUg0-UmUuymZI9SGzg4LsSTkVjUsXr0Kdx8W7VhbnsJPtOPv2dH8yFJ6wWrCftr75XZyJJvIZOcwVqUQ9S67v6OmwddU60aBVNh8KMzZe22Tz-WEDbMVChkEk9fspMourDqZ_mh1CIib3qIN-U8qeHwpqfhRkODGgjEuKpug",
    images: [
      "https://lh3.googleusercontent.com/aida-public/AB6AXuADwNeDMwtv4-IxDmvv2gm7EQErSrLV5UcZils5TGvYl2EbCFAtIM8VvBFQJ5BVyGTivLMxSwn3yO1faTKUg0-UmUuymZI9SGzg4LsSTkVjUsXr0Kdx8W7VhbnsJPtOPv2dH8yFJ6wWrCftr75XZyJJvIZOcwVqUQ9S67v6OmwddU60aBVNh8KMzZe22Tz-WEDbMVChkEk9fspMourDqZ_mh1CIib3qIN-U8qeHwpqfhRkODGgjEuKpug",
      "https://lh3.googleusercontent.com/aida-public/AB6AXuA61kjfqGJ9cKr3oOsgLTTXhVPqbnNwcoyaIeuLQBxNqPjqdxbzxw07BNbXkW8unC4J_8dxJHGI8-1UHfMdu2fRSHnt6rSZcrt-_hG-bcnvH0qqCcB2hRpEqE2bQrRDqol0YNMyZ3fIM9KjXJOrZ25SfMdUsjTfmob8o2UqgCHFh4K1li1vICTUZdji6QbN6kUF_wXmZEPC8Q0E5zboPbtiL8xKvx4flef5nC2hyEUxl1gb-AM51S5SMw"
    ],
    descriptionFa: "لایه‌های زرین و ارگانیک که گویی از فولد‌های نرم سنگ آهک در آتلیه شکل گرفته‌اند. هر قطعه با ضربات دقیق چکش زرگری دست‌ساز شده تا اثری کاملاً یکتا برای دست صاحب آن پدید آید."
  },
  {
    id: "SKU-DRP-04",
    sku: "SKU-3120-PT",
    titleEn: "The Droplet Drops",
    titleFa: "گوشواره‌های قطره‌ای دراپلت (Droplet)",
    collection: "platinum",
    collectionFa: "پلاتین و الماس پاک",
    materialFa: "پلاتین ۹۵۰ مات (Satin Platinum)",
    materialEn: "Satin Platinum 950 with Natural Diamonds",
    priceUsd: 380,
    priceFa: "۳۸۰ دلار / حدود ۳۸,۰۰۰,۰۰۰ تومان",
    salePriceUsd: null,
    stockStatus: "in_stock",
    stockStatusFa: "موجود در گالری (۸ جفت)",
    weight: "۸.۴ گرم (توخالی و بسیار سبک روی گوش)",
    dimensions: "طول آبشاری: ۴۵ میلی‌متر",
    finish: "پرداخت ساتین پلاتینی مات با بازتاب نور مخملی",
    featured: true,
    keyPiece: false,
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCowQwy0P1ltXbgVO6DAMmjV5G_L2NS6-bMvR1M-MXNrk3SVPhXgUwBJZvUytFDTHJxSiIjIe2OxzN2sOcGNW7ik3p1nHy-2mr1fvMDkLaTXI4Osay8fBA0qMng18T4tA7Epg3tA3rbVRGLIyoxDJ8XlbtOAbqfOcu5WY_Ub1nbOg_apmnAoMHwX9XSO6ucXFHDO7dtApaH6xCR-jibRDneG06TiKrTeft1oz84_O1KNov3S4wHR-aEMw",
    images: [
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCowQwy0P1ltXbgVO6DAMmjV5G_L2NS6-bMvR1M-MXNrk3SVPhXgUwBJZvUytFDTHJxSiIjIe2OxzN2sOcGNW7ik3p1nHy-2mr1fvMDkLaTXI4Osay8fBA0qMng18T4tA7Epg3tA3rbVRGLIyoxDJ8XlbtOAbqfOcu5WY_Ub1nbOg_apmnAoMHwX9XSO6ucXFHDO7dtApaH6xCR-jibRDneG06TiKrTeft1oz84_O1KNov3S4wHR-aEMw",
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDdvSzALWvHp9BHnYdYrDZpxGALAM5P5STidilk99K5TMY63fI006H_FObJjOPhSF9e-KsOZ0qC_uicYrmOELumvILal53ClM0Iwa8Pv8Ib1DNpehtHWTCkhCqbyltBc-BohVJ9pOAh-wBfa7KfTXIBkuojyy5pm11-adskfJexnghQL109itNdR8bxwVksXIvGOCHccfKpA9f9beXyKzH2_TcTUNl7OVaQUpv6W8oP7SiuzaQO9vpGww"
    ],
    descriptionFa: "گوشواره‌های قطره‌ای با ساختار مهندسی شده توخالی (Hollow-cast) که با وجود ابعاد چشمگیر، به غایت سبک و راحت هستند. قطرات جیوه مانند پلاتین بر شانه معلق می‌مانند."
  },
  {
    id: "SKU-CYL-05",
    sku: "SKU-6520-AU",
    titleEn: "Cylinder Signet",
    titleFa: "انگشتر مهری سیلندر (Cylinder)",
    collection: "gold",
    collectionFa: "طلای خالص ۱۸ عیار",
    materialFa: "طلای ۱۸ عیار مات با نشان آتلیه",
    materialEn: "18K Matte Honey Gold",
    priceUsd: 650,
    priceFa: "۶۵۰ دلار / حدود ۶۵,۰۰۰,۰۰۰ تومان",
    salePriceUsd: 600,
    salePriceFa: "۶۰۰ دلار (قیمت ویژه آتلیه)",
    stockStatus: "in_stock",
    stockStatusFa: "موجود در آتلیه (۲۲ عدد)",
    weight: "۱۸.۹ گرم طلای سنگین",
    dimensions: "سطح مقطع: ۱۶ میلی‌متر، طراحی استوانه‌ای",
    finish: "برش میکرو و مات‌کاری مخملی دست‌ساز",
    featured: false,
    keyPiece: false,
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBEs4lE1ghayxwr_W03rgUZIqZ2-Lgx3_O1Gxu0AhiMEPKmROQaeeZkLkYduhIE2H06wefuTR9D3fCr1LY0VKA1P2QYqDyF_5bZG--mjESG9xY2IPsasZTkOZE6a0n3S1DUZNTSV_KtXXcl4OFVx3dTVclALQhg4TdBcHwINb7fv8-RHp-4OZAYmjJo_3Oamu5ilK14aS4qRSP0TIYaOe7-c7Ht-cLamE7_sc7OHIM_d_7V0CN6wIBYow",
    images: [
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBEs4lE1ghayxwr_W03rgUZIqZ2-Lgx3_O1Gxu0AhiMEPKmROQaeeZkLkYduhIE2H06wefuTR9D3fCr1LY0VKA1P2QYqDyF_5bZG--mjESG9xY2IPsasZTkOZE6a0n3S1DUZNTSV_KtXXcl4OFVx3dTVclALQhg4TdBcHwINb7fv8-RHp-4OZAYmjJo_3Oamu5ilK14aS4qRSP0TIYaOe7-c7Ht-cLamE7_sc7OHIM_d_7V0CN6wIBYow"
    ],
    descriptionFa: "فرم یکپارچه و استوانه‌ای تراش‌خورده با سطحی تخت و مهندسی‌شده که تداعی‌کننده مهر و نشان‌های تاریخی سلسله‌های کهن با زبانی معاصر و مدرن است."
  },
  {
    id: "SKU-MON-12",
    sku: "SKU-9900-AU",
    titleEn: "The Monolith Choker",
    titleFa: "طوق چوکر مونولیت (Monolith)",
    collection: "sculptural",
    collectionFa: "فرم‌های مجسمه‌ای",
    materialFa: "ترکیب پلاتین و طلای ۱۸ عیار",
    materialEn: "Bimetallic Platinum & 18K Solid Gold",
    priceUsd: 1150,
    priceFa: "۱,۱۵۰ دلار / حدود ۱۱۵,۰۰۰,۰۰۰ تومان",
    salePriceUsd: null,
    stockStatus: "custom",
    stockStatusFa: "سفارشی‌ساز آتلیه ونشن (تحویل اختصاصی)",
    weight: "۹۴ گرم فلزات گرانبها",
    dimensions: "طراحی تندیس‌وار ارگونومیک گردن",
    finish: "پولیش هایپر-کنتراست دست‌ساز",
    featured: false,
    keyPiece: false,
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAw8SPg2YjmiWcju9bvPgVLQ5oyUWBpXJlr-5ODcUMjcEBXoEaL2AsM703QgqBf6Kl8uPzKSMO06ajDQzXNHMKG2w5z-qNhBMiO57aXpAh1T6xQOBLSgiBbxE6ezewbxgak8MAic_hIVwhx1jCEI_5YAzC79NDwEZbmTS84u-M9e2k2r6_Cc-U14jPnw3Gy1aS1BUT9vkJ2sU59iW0ZlMZIHGP9vRjwrpFP8jDK_pq4vK3964YYGeIBMA",
    images: [
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAw8SPg2YjmiWcju9bvPgVLQ5oyUWBpXJlr-5ODcUMjcEBXoEaL2AsM703QgqBf6Kl8uPzKSMO06ajDQzXNHMKG2w5z-qNhBMiO57aXpAh1T6xQOBLSgiBbxE6ezewbxgak8MAic_hIVwhx1jCEI_5YAzC79NDwEZbmTS84u-M9e2k2r6_Cc-U14jPnw3Gy1aS1BUT9vkJ2sU59iW0ZlMZIHGP9vRjwrpFP8jDK_pq4vK3964YYGeIBMA"
    ],
    descriptionFa: "بیانیه‌ای تمام‌عیار از جسارت مجسمه‌سازی در طلاسازی فاخر. ساختاری سنگین و پروقار با اتصال مخفی و ارگونومیک که بر شانه و سینه فرود می‌آید."
  }
];

// Telegram Settings
const D8_CONFIG = {
  telegramUsername: "D8Gallery", // Telegram Handle
  telegramAdminPhone: "+989120000000",
  whatsappNumber: "+989120000000"
};

// Toast notification function
function showD8Toast(message, icon = "check_circle") {
  let toast = document.getElementById("d8-toast");
  if (!toast) {
    toast = document.createElement("div");
    toast.id = "d8-toast";
    document.body.appendChild(toast);
  }
  toast.innerHTML = `
    <span class="material-symbols-outlined text-[20px]" style="color: var(--color-gold);">${icon}</span>
    <span>${message}</span>
  `;
  toast.classList.add("show");
  
  if (window.d8ToastTimeout) clearTimeout(window.d8ToastTimeout);
  window.d8ToastTimeout = setTimeout(() => {
    toast.classList.remove("show");
  }, 3500);
}

// Telegram Order Handler
function orderViaTelegram(productId) {
  const item = D8_PRODUCTS.find(p => p.id === productId) || D8_PRODUCTS[0];
  const priceText = item.salePriceFa ? `${item.salePriceFa} (تخفیف ویژه)` : item.priceFa;
  
  const text = `سلام و درود به گالری دی هشت (D8 Gallery)،
مایل به ثبت سفارش و دریافت مشاوره تخصصی برای این اثر هستم:

💎 نام اثر: ${item.titleFa}
🏛️ نام لاتین: ${item.titleEn}
🔢 کد اثر: ${item.sku}
⚜️ متریال: ${item.materialFa}
💰 ارزش اثر: ${priceText}

لطفاً راهنمایی بفرمایید جهت هماهنگی ساخت و ارسال. با تشکر.`;

  const url = `https://t.me/${D8_CONFIG.telegramUsername}?text=${encodeURIComponent(text)}`;
  
  showD8Toast("در حال انتقال به تلگرام جهت نهایی‌سازی سفارش...", "send");
  setTimeout(() => {
    window.open(url, "_blank");
  }, 400);
}

// Open Specimen Inspector Drawer (Matching Stitch screen)
function openProductInspector(productId) {
  const item = D8_PRODUCTS.find(p => p.id === productId);
  if (!item) return;

  const overlay = document.getElementById("inspector-overlay");
  const drawer = document.getElementById("inspector-drawer");
  if (!overlay || !drawer) return;

  const displayPrice = item.salePriceFa 
    ? `<span style="color: var(--color-gold); font-weight:700;">${item.salePriceFa}</span> <span style="text-decoration: line-through; opacity: 0.5; font-size: 0.85em; margin-right: 0.5rem;">${item.priceFa}</span>`
    : `<span style="font-weight:700;">${item.priceFa}</span>`;

  drawer.innerHTML = `
    <div style="padding: 1.5rem; border-bottom: 1px solid var(--border-hairline); display: flex; align-items: center; justify-content: space-between; background: var(--color-canvas-bright); position: sticky; top:0; z-index: 10;">
      <div>
        <div style="font-size: 0.75rem; color: var(--color-gold-deep); text-transform: uppercase; letter-spacing: 0.1em; font-family: var(--font-mono);">
          SPECIMEN INSPECTOR · شناسه اثر
        </div>
        <h3 style="font-family: var(--font-serif); font-size: 1.35rem; margin-top: 0.2rem;">${item.titleFa}</h3>
      </div>
      <button onclick="closeProductInspector()" style="background: none; border: none; cursor: pointer; padding: 0.5rem; color: var(--color-text-muted);" title="بستن">
        <span class="material-symbols-outlined text-[24px]">close</span>
      </button>
    </div>

    <div style="padding: 1.5rem; display: flex; flex-direction: column; gap: 1.5rem;">
      <!-- Specimen Main Photo -->
      <div style="position: relative; border-radius: var(--radius-md); overflow: hidden; background: #000; aspect-ratio: 1/1; border: 1px solid var(--border-hairline);">
        <img src="${item.image}" alt="${item.titleEn}" style="width: 100%; height: 100%; object-fit: cover;" />
        <div style="position: absolute; bottom: 0.75rem; right: 0.75rem; background: rgba(0,0,0,0.75); color: #fff; padding: 0.3rem 0.75rem; border-radius: 9999px; font-size: 0.75rem; font-family: var(--font-mono); backdrop-filter: blur(8px);">
          ${item.sku}
        </div>
      </div>

      <!-- Quick Telemetry Specs -->
      <div style="background: var(--color-surface); padding: 1.25rem; border-radius: var(--radius-md); border: 1px solid var(--border-hairline); display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; font-size: 0.85rem;">
        <div>
          <span style="color: var(--color-text-muted); display: block; font-size: 0.75rem;">متریال و عیار</span>
          <strong>${item.materialFa}</strong>
        </div>
        <div>
          <span style="color: var(--color-text-muted); display: block; font-size: 0.75rem;">وزن تقریبی</span>
          <strong>${item.weight}</strong>
        </div>
        <div>
          <span style="color: var(--color-text-muted); display: block; font-size: 0.75rem;">پرداخت و سطوح</span>
          <span>${item.finish}</span>
        </div>
        <div>
          <span style="color: var(--color-text-muted); display: block; font-size: 0.75rem;">وضعیت اثر</span>
          <span style="color: var(--color-gold-deep); font-weight: 600;">${item.stockStatusFa}</span>
        </div>
      </div>

      <!-- Narrative -->
      <div>
        <h4 style="font-size: 0.85rem; color: var(--color-text-muted); margin-bottom: 0.5rem; text-transform: uppercase;">مانیفست و مشخصات طراحی</h4>
        <p style="font-size: 0.95rem; line-height: 1.8; color: var(--color-text-variant);">
          ${item.descriptionFa}
        </p>
      </div>

      <!-- Pricing and Order CTA -->
      <div style="margin-top: auto; padding-top: 1rem; border-top: 1px solid var(--border-hairline); display: flex; flex-direction: column; gap: 0.75rem;">
        <div style="display: flex; align-items: baseline; justify-content: space-between;">
          <span style="color: var(--color-text-muted); font-size: 0.85rem;">ارزش برآورد شده:</span>
          <div style="font-size: 1.15rem;">${displayPrice}</div>
        </div>

        <button onclick="orderViaTelegram('${item.id}')" class="btn btn-telegram" style="width: 100%; padding: 0.9rem; font-size: 1rem; font-weight: 600;">
          <span class="material-symbols-outlined text-[20px]">send</span>
          <span>ثبت سفارش مستقیم از طریق تلگرام</span>
        </button>

        <a href="https://wa.me/${D8_CONFIG.whatsappNumber.replace('+','')}" target="_blank" class="btn btn-outline" style="width: 100%; font-size: 0.85rem;">
          <span class="material-symbols-outlined text-[18px]">chat</span>
          <span>مشاوره در واتس‌اپ</span>
        </a>
      </div>
    </div>
  `;

  overlay.classList.add("active");
  drawer.classList.add("active");
  document.body.style.overflow = "hidden";
}

function closeProductInspector() {
  const overlay = document.getElementById("inspector-overlay");
  const drawer = document.getElementById("inspector-drawer");
  if (overlay) overlay.classList.remove("active");
  if (drawer) drawer.classList.remove("active");
  document.body.style.overflow = "";
}

// Mobile Nav Management
function toggleMobileMenu() {
  const navDrawer = document.getElementById("mobile-nav");
  const overlay = document.getElementById("nav-overlay");
  if (!navDrawer || !overlay) return;
  const isOpen = navDrawer.classList.contains("active");
  if (isOpen) {
    navDrawer.classList.remove("active");
    overlay.classList.remove("active");
    document.body.style.overflow = "";
  } else {
    navDrawer.classList.add("active");
    overlay.classList.add("active");
    document.body.style.overflow = "hidden";
  }
}

// Ambient Atelier Sound Simulator (Pure Web Audio API, Zero Assets Needed!)
let audioCtx = null;
let soundGain = null;
let isPlayingSound = false;

function toggleAtelierSound() {
  const btn = document.getElementById("sound-toggle-btn");
  if (!isPlayingSound) {
    try {
      if (!audioCtx) {
        audioCtx = new (window.AudioContext || window.webkitAudioContext)();
        soundGain = audioCtx.createGain();
        soundGain.gain.setValueAtTime(0.04, audioCtx.currentTime);
        soundGain.connect(audioCtx.destination);
      }

      // Create warm ambient chord drone
      const notes = [110, 164.81, 220, 329.63]; // A minor meditative chord
      window.ambientOscs = notes.map(freq => {
        const osc = audioCtx.createOscillator();
        osc.type = "sine";
        osc.frequency.setValueAtTime(freq, audioCtx.currentTime);
        osc.connect(soundGain);
        osc.start();
        return osc;
      });

      isPlayingSound = true;
      if (btn) {
        btn.innerHTML = `
          <span class="material-symbols-outlined text-[16px]" style="color: var(--color-gold-deep);">volume_up</span>
          <span style="color: var(--color-gold-deep);">صدای آتلیه: پخش زنده</span>
        `;
      }
      showD8Toast("نوای اتمسفریک آتلیه فعال شد", "graphic_eq");
    } catch (e) {
      console.log("Audio not allowed or supported", e);
    }
  } else {
    if (window.ambientOscs) {
      window.ambientOscs.forEach(osc => osc.stop());
      window.ambientOscs = null;
    }
    isPlayingSound = false;
    if (btn) {
      btn.innerHTML = `
        <span class="material-symbols-outlined text-[16px]">graphic_eq</span>
        <span>صدای آتلیه: بی‌صدا</span>
      `;
    }
    showD8Toast("پخش صدا متوقف شد", "volume_off");
  }
}

// Newsletter Subscription Handler
function handleNewsletterSubscribe(e) {
  if (e) e.preventDefault();
  const input = document.getElementById("newsletter-email");
  if (!input || !input.value) return;
  const val = input.value.trim();
  if (val.includes("@") || val.length >= 10) {
    showD8Toast("سپاسگزاریم. عضویت شما در فهرست اختصاصی VIP تایید شد.", "mark_email_read");
    input.value = "";
  } else {
    showD8Toast("لطفاً یک ایمیل یا شماره تماس معتبر وارد فرمایید.", "error");
  }
}

// Document Ready Bootstrap
document.addEventListener("DOMContentLoaded", () => {
  // Close inspector when clicking overlay
  const overlay = document.getElementById("inspector-overlay");
  if (overlay) {
    overlay.addEventListener("click", closeProductInspector);
  }
  
  const navOverlay = document.getElementById("nav-overlay");
  if (navOverlay) {
    navOverlay.addEventListener("click", toggleMobileMenu);
  }

  // Handle ESC key
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      closeProductInspector();
      const navDrawer = document.getElementById("mobile-nav");
      if (navDrawer && navDrawer.classList.contains("active")) {
        toggleMobileMenu();
      }
    }
  });
});
