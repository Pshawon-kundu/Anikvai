import hero1 from "@/assests/ak.jpg";
import hero2 from "@/assests/ak8.jpeg";
import hero3 from "@/assests/ak3.jpg";
import aboutImage from "@/assests/ak8.jpeg";

export type NewsItem = {
  source: string;
  title: string;
  url: string;
  image: string;
};

export const FULL_NAME = "Anisur Rahman Khandoker Anik";
export const FACEBOOK_URL = "https://www.facebook.com/anikhasandu/";

export const heroSlides = [
  {
    image: hero1,
    title: FULL_NAME,
    subtitle: "Leader | Philanthropist | Community Builder",
  },
  { image: hero2, title: FULL_NAME, subtitle: "Voice for the People" },
  { image: hero3, title: FULL_NAME, subtitle: "Vision for a Better Tomorrow" },
];

export const newsItems: NewsItem[] = [
  {
    source: "Dhaka Times",
    title: "ছাত্রদল নেতা অনিকের সমর্থনে রাজনৈতিক অঙ্গনে নতুন সাড়া",
    url: "https://www.dhakatimes24.com/2024/01/28/341441",
    image: hero1,
  },
  {
    source: "BSS News",
    title: "জুলাইয়ের মঞ্চে মানুষের কথা বলাই ছিল লক্ষ্য: অনিক",
    url: "https://www.bssnews.net/july-uprising/300283",
    image: hero2,
  },
  {
    source: "Jago News 24",
    title: "ঢাবি কেন্দ্রীয় ছাত্র সংসদে ছাত্রদলের ক্যাম্পাস প্রচার",
    url: "https://www.jagonews24.com/campus/news/483625",
    image: hero3,
  },
  {
    source: "The Daily Campus",
    title: "নির্বাচনী ময়দানে তরুণদের পাশে অনিক",
    url: "https://thedailycampus.com/politics/258008",
    image: aboutImage,
  },
  {
    source: "BSS News",
    title: "জাতীয় রাজনীতি ও জনসম্পৃক্ততার নতুন বার্তা",
    url: "https://www.bssnews.net/bangla/national/270076",
    image: hero1,
  },
  {
    source: "Dhaka Mail",
    title: "শিক্ষা ও ক্যাম্পাস ইস্যুতে অনিকের অবস্থান",
    url: "https://dhakamail.com/education/206009",
    image: hero2,
  },
  {
    source: "Dhaka Post",
    title: "ক্যাম্পাস রাজনীতিতে ছাত্রদলের নতুন প্রস্তুতি",
    url: "https://www.dhakapost.com/campus/444851",
    image: hero3,
  },
  {
    source: "BSS Bangla",
    title: "জুলাই-উত্তর রাজনৈতিক বার্তায় অনিক",
    url: "https://www.bssnews.net/bangla/july-uprising/222539",
    image: aboutImage,
  },
  {
    source: "Protidiner Sangbad",
    title: "দৈনিক সংবাদে অনিকের রাজনৈতিক উপস্থিতি",
    url: "https://www.protidinersangbad.com/todays-newspaper/back-page/524868",
    image: hero1,
  },
  {
    source: "The Daily Campus",
    title: "নির্বাচনী প্রচারণায় ছাত্রদলের অবস্থান",
    url: "https://thedailycampus.com/politics/37120/%E0%A6%A8%E0%A6%BF%E0%A6%B0%E0%A7%8D%E0%A6%AC%E0%A6%BE%E0%A6%9A%E0%A6%A8%E0%A7%80-%E0%A6%AA%E0%A7%8D%E0%A6%B0%E0%A6%9A%E0%A6%BE%E0%A6%B0%E0%A6%A3%E0%A6%BE%E0%A7%9F-%E0%A6%B9%E0%A6%BE%E0%A6%AE%E0%A6%B2%E0%A6%BE%E0%A6%B0-%E0%A6%B6%E0%A6%BF%E0%A6%95%E0%A6%BE%E0%A6%B0-%E0%A6%A2%E0%A6%BE%E0%A6%AC%E0%A6%BF-%E0%A6%9B%E0%A6%BE%E0%A6%A4%E0%A7%8D%E0%A6%B0%E0%A6%A6%E0%A6%B2-%E0%A6%A8%E0%A7%87%E0%A6%A4%E0%A6%BE",
    image: hero2,
  },
  {
    source: "Ittefaq",
    title: "ঢাবি ছাত্রদলের সাংগঠনিক অগ্রযাত্রা",
    url: "https://www.ittefaq.com.bd/31874/%E0%A6%A1%E0%A6%BE%E0%A6%95%E0%A6%B8%E0%A7%81-%E0%A6%A8%E0%A6%BF%E0%A6%B0%E0%A7%8D%E0%A6%AC%E0%A6%BE%E0%A6%9A%E0%A6%A8%E0%A7%87-%E0%A6%9B%E0%A6%BE%E0%A6%A4%E0%A7%8D%E0%A6%B0%E0%A6%A6%E0%A6%B2%E0%A7%87%E0%A6%B0-%E0%A6%AA%E0%A7%8D%E0%A6%AF%E0%A6%BE%E0%A6%A8%E0%A7%87%E0%A6%B2-%E0%A6%98%E0%A7%8B%E0%A6%B7%E0%A6%A3%E0%A6%BE-%E0%A6%AD%E0%A6%BF%E0%A6%AA%E0%A6%BF",
    image: hero3,
  },
  {
    source: "Kalbela",
    title: "রাজনীতি, ক্যাম্পাস ও তরুণ নেতৃত্বের নতুন প্রতিবেদন",
    url: "https://www.kalbela.com/politics/63190",
    image: aboutImage,
  },
];

export const news = newsItems.map((item) => item.title);

export const featuredAwards = [
  {
    image: hero2,
    title: "National Social Service Award",
    description:
      "Recognised for years of dedicated work uplifting underserved communities through education, healthcare and disaster relief programmes.",
  },
  {
    image: hero3,
    title: "Excellence in Community Leadership",
    description:
      "Honoured for visionary leadership and grassroots mobilisation that created lasting, measurable change for thousands of families.",
  },
];

export const otherAwards = [
  { title: "Youth Icon of the Year", year: "2024" },
  { title: "Humanitarian Recognition Medal", year: "2023" },
  { title: "Outstanding Volunteer Award", year: "2022" },
  { title: "Community Development Honour", year: "2021" },
  { title: "Public Service Appreciation", year: "2020" },
];

export const appreciations = [
  { label: "March 2025", title: "Certificate of Appreciation", image: hero1 },
  { label: "December 2024", title: "Recognition of Service", image: hero2 },
  { label: "August 2024", title: "Honour on Stage", image: hero3 },
  { label: "May 2024", title: "Letter of Gratitude", image: hero1 },
  { label: "January 2024", title: "Community Plaque", image: hero2 },
];

export const socialWork = [
  {
    title: "Education for All",
    description:
      "Scholarships and learning resources for underprivileged students across the region.",
  },
  {
    title: "Healthcare Camps",
    description:
      "Free medical camps bringing essential treatment to remote and rural communities.",
  },
  {
    title: "Disaster Relief",
    description:
      "Rapid response relief with food, shelter and supplies for families in crisis.",
  },
];

export const gallery = [
  { image: hero1, title: "Community Gathering" },
  { image: hero2, title: "Public Address" },
  { image: hero3, title: "Relief Distribution" },
  { image: aboutImage, title: "Partnership Meetings" },
];

export const aboutBio =
  "A dedicated leader and community builder, Anisur Rahman Khandoker Anik has devoted his life to the service of others. Through education, healthcare and disaster relief, he has touched the lives of thousands, championing the cause of the underserved and inspiring a new generation of changemakers.";

export const aboutBioLong = [
  aboutBio,
  "From humble beginnings, Anik built a movement grounded in compassion and accountability. His initiatives span scholarships, free medical camps and rapid disaster response, each designed to create lasting, measurable impact rather than momentary relief.",
  "Today he continues to mentor young leaders, partner with organisations that share his values, and advocate tirelessly for a fairer, more inclusive society.",
];
