import React from "react";
import { motion } from "framer-motion";
import {
  ChefHat,
  CalendarDays,
  MapPin,
  Phone,
  Clock,
  Users,
  CheckCircle2,
  ArrowRight,
  ClipboardCheck,
  BadgeDollarSign,
  BriefcaseBusiness,
  Sparkles,
  Video,
  CakeSlice,
  Utensils,
  Store,
  FileText,
  MessageCircle,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const applyUrl = "https://www.surveycake.com/s/aaeqp";
const brochureUrl = "https://drive.google.com/file/d/1bBIAaWZ4x5_GYQtzz69FQQIt41iClvyO/view?usp=drive_link";
const examPrepUrl = "https://book0013.netlify.app/學科全完整版";
const lineUrl = "https://lin.ee/8MNnOnSy";

const promoImages = [
  {
    src: "https://i.ibb.co/HfyDKk6j/Chat-GPT-Image-2026-5-20-08-37-27-1.png",
    title: "高額補助・超省費用",
    desc: "符合資格可免費參訓，一般失業者也享政府補助，還有機會申請職訓生活津貼。",
  },
  {
    src: "https://i.ibb.co/HfWPmsN2/Chat-GPT-Image-2026-5-20-08-37-27-3.png",
    title: "技能雙管齊下",
    desc: "320 小時訓練，同時學餐飲實作與數位行銷，提升就業與接案競爭力。",
  },
  {
    src: "https://i.ibb.co/yc1nNTWc/Chat-GPT-Image-2026-5-20-08-54-59.png",
    title: "結業即就業",
    desc: "結訓合格發給證書，提供就業輔導，職涯可銜接餐飲、烘焙、行銷或創業。",
  },
];

const courseModules = [
  {
    icon: <Utensils size={22} />,
    title: "中餐烹調技術與刀工盤飾",
    hours: "42 小時",
    desc: "建立廚務基礎能力，從刀工、盤飾到烹調流程完整訓練。",
  },
  {
    icon: <CakeSlice size={22} />,
    title: "西點烘焙與蛋糕甜點製作",
    hours: "56 小時",
    desc: "涵蓋西點、點心、蛋糕與甜點製作，累積可就業的實作技能。",
  },
  {
    icon: <Store size={22} />,
    title: "農產加工與特色商品開發",
    hours: "28 小時",
    desc: "結合地方農產與餐飲商品化思維，訓練產品開發能力。",
  },
  {
    icon: <ChefHat size={22} />,
    title: "義式料理、輕食與早午餐",
    hours: "56 小時",
    desc: "學習經典義式料理、歐風輕食與早午餐創意料理。",
  },
  {
    icon: <Sparkles size={22} />,
    title: "品牌經營與智慧餐飲應用",
    hours: "19 小時",
    desc: "理解餐飲品牌定位、服務設計與智慧餐飲應用。",
  },
  {
    icon: <Video size={22} />,
    title: "短影音與 AI 行銷企劃",
    hours: "28 小時",
    desc: "學習餐飲品牌影像行銷、短影音製作與 AI 內容企劃。",
  },
];

const highlights = [
  {
    icon: <Clock size={24} />,
    title: "320 小時完整訓練",
    desc: "從餐飲基礎、烘焙實作到品牌行銷，課程不是零碎體驗，而是就業導向訓練。",
  },
  {
    icon: <Users size={24} />,
    title: "招訓 30 名",
    desc: "名額有限，需通過筆試與口試甄選，適合真正有就業意願的人。",
  },
  {
    icon: <BadgeDollarSign size={24} />,
    title: "政府補助",
    desc: "符合資格者可全額免費；一般失業者政府補助 80%，自付 20%。",
  },
  {
    icon: <BriefcaseBusiness size={24} />,
    title: "結訓輔導就業",
    desc: "完成全期訓練並測驗合格者發給結訓證書，並協助就業銜接。",
  },
];

const jobs = [
  "烘焙坊、西點店、甜點工作室：烘焙製作、產品研發、門市管理",
  "餐廳與咖啡廳：廚務人員、早午餐料理、品牌服務設計",
  "食品企業與觀光餐飲業：產品設計、包裝與商品化開發",
  "餐飲品牌或電商平台：行銷企劃、社群經營與影音內容製作",
  "自創品牌或副業創業：甜點禮盒開發、線上接單、社群販售",
];

export default function CourseIntroWebsite() {
  return (
    <div className="min-h-screen bg-stone-50 text-stone-950">
      <header className="sticky top-0 z-40 border-b border-stone-200 bg-white/90 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <a href="#top" className="flex items-center gap-3 font-black tracking-tight">
            <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-amber-700 text-white shadow-sm">
              <ChefHat size={21} />
            </div>
            <span>埔里餐飲烘焙培訓班</span>
          </a>

          <nav className="hidden items-center gap-8 text-sm font-semibold text-stone-600 md:flex">
            <a href="#features" className="hover:text-stone-950">
              課程亮點
            </a>
            <a href="#benefits" className="hover:text-stone-950">
              三大優勢
            </a>
            <a href="#curriculum" className="hover:text-stone-950">
              訓練內容
            </a>
            <a href="#apply" className="hover:text-stone-950">
              報名資訊
            </a>
            <a href="#career" className="hover:text-stone-950">
              就業方向
            </a>
          </nav>

          <div className="flex items-center gap-2">
            <a
              href={lineUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden h-10 items-center justify-center rounded-2xl bg-green-500 px-4 py-2 text-sm font-bold text-white shadow-sm transition hover:bg-green-600 sm:inline-flex"
            >
              Line@ 聯絡我們
            </a>
            <a
              href={applyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-10 items-center justify-center rounded-2xl bg-amber-700 px-4 py-2 text-sm font-medium text-white shadow-sm transition hover:bg-amber-800"
            >
              立即報名
            </a>
          </div>
        </div>
      </header>

      <main id="top">
        <section className="relative overflow-hidden bg-[radial-gradient(circle_at_top_left,#fde68a,transparent_34%),linear-gradient(135deg,#fffbeb,#fafaf9_45%,#f5f5f4)]">
          <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-20 md:grid-cols-[1.05fr_0.95fr] md:py-28">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55 }}
            >
              <div className="mb-6 inline-flex flex-wrap items-center gap-2 rounded-full border border-amber-200 bg-white/80 px-4 py-2 text-sm font-bold text-amber-900 shadow-sm">
                勞動部勞動力發展署中彰投分署委託辦理・南投縣技職教育協會訓練
              </div>

              <h1 className="max-w-3xl text-5xl font-black leading-tight tracking-tight md:text-7xl">
                餐飲烘焙業人員培訓班
              </h1>

              <p className="mt-6 max-w-2xl text-xl leading-9 text-stone-700">
                320 小時職前訓練，從中餐烹調、西點烘焙、法式甜點、特色商品開發，到餐飲品牌經營、短影音與 AI 行銷，培養能進入餐飲、烘焙與品牌營運現場的實作人才。
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href={applyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-11 items-center justify-center rounded-2xl bg-amber-700 px-7 text-base font-medium text-white shadow-sm transition hover:bg-amber-800"
                >
                  立即線上報名
                  <ArrowRight className="ml-2" size={18} />
                </a>
                <a
                  href={brochureUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-11 items-center justify-center rounded-2xl border border-stone-300 bg-white/80 px-7 text-base font-medium text-stone-950 shadow-sm transition hover:bg-stone-100"
                >
                  下載招訓簡章
                  <FileText className="ml-2" size={18} />
                </a>
                <a
                  href={lineUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-11 items-center justify-center rounded-2xl bg-green-500 px-7 text-base font-bold text-white shadow-sm transition hover:bg-green-600"
                >
                  Line@ 聯絡我們
                  <MessageCircle className="ml-2" size={18} />
                </a>
              </div>

              <div className="mt-10 grid max-w-2xl grid-cols-2 gap-4 md:grid-cols-4">
                <Stat label="訓練時數" value="320 小時" />
                <Stat label="招訓名額" value="30 名" />
                <Stat label="上課地點" value="南投埔里" />
                <Stat label="就業導向" value="結訓輔導" />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.55, delay: 0.1 }}
            >
              <Card className="overflow-hidden rounded-[2rem] border-amber-100 bg-white shadow-2xl">
                <div className="relative aspect-[4/3] overflow-hidden bg-stone-950">
                  <img
                    src="https://i.ibb.co/5hZJS1k2/Chat-GPT-Image-2026-5-20-09-16-44.png"
                    alt="餐飲烘焙業人員培訓班主視覺"
                    className="h-full w-full object-cover"
                  />
                </div>

                <CardContent className="grid gap-4 p-6 sm:grid-cols-3">
                  <Info icon={<CalendarDays size={20} />} title="訓練日期" value="06/29–09/15" />
                  <Info icon={<Clock size={20} />} title="上課時間" value="週一至週四" />
                  <Info icon={<MapPin size={20} />} title="地點" value="埔里隆生路 99 號" />
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </section>

        <section id="features" className="mx-auto max-w-7xl px-6 py-20">
          <div className="max-w-3xl">
            <p className="mb-3 text-sm font-black uppercase tracking-[0.24em] text-amber-700">
              Course Highlights
            </p>
            <h2 className="text-4xl font-black tracking-tight md:text-5xl">
              這不是興趣班，是以就業為目標的完整訓練。
            </h2>
            <p className="mt-5 text-lg leading-8 text-stone-600">
              課程同時補強餐飲技術、商品開發、品牌行銷與求職能力。真正的價值不是「學很多菜」，而是讓學員能接近職場需求。
            </p>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-4">
            {highlights.map((item) => (
              <Card
                key={item.title}
                className="rounded-3xl border-stone-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-md"
              >
                <CardContent className="p-6">
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-100 text-amber-800">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-black">{item.title}</h3>
                  <p className="mt-3 leading-7 text-stone-600">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section id="benefits" className="bg-white py-20">
          <div className="mx-auto max-w-7xl px-6">
            <div className="max-w-3xl">
              <p className="mb-3 text-sm font-black uppercase tracking-[0.24em] text-amber-700">
                Why Join
              </p>
              <h2 className="text-4xl font-black tracking-tight md:text-5xl">
                報名前你最該知道的三件事
              </h2>
              <p className="mt-5 text-lg leading-8 text-stone-600">
                補助、技能、就業是這門課最強的三個招生賣點。這三張圖放在前段，可以讓使用者快速看懂值不值得繼續往下看。
              </p>
            </div>

            <div className="mt-10 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
              {promoImages.map((item) => (
                <Card
                  key={item.title}
                  className="overflow-hidden rounded-[2rem] border-stone-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className="aspect-square overflow-hidden bg-stone-100">
                    <img
                      src={item.src}
                      alt={item.title}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-2xl font-black">{item.title}</h3>
                    <p className="mt-3 leading-7 text-stone-600">{item.desc}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="curriculum" className="py-20">
          <div className="mx-auto max-w-7xl px-6">
            <div className="max-w-3xl">
              <p className="mb-3 text-sm font-black uppercase tracking-[0.24em] text-amber-700">
                Curriculum
              </p>
              <h2 className="text-4xl font-black tracking-tight md:text-5xl">訓練內容</h2>
              <p className="mt-5 text-lg leading-8 text-stone-600">
                課程從餐飲基礎、料理實作、烘焙甜點、商品開發，到品牌經營與數位行銷，完整銜接餐飲烘焙產業需求。
              </p>
            </div>

            <div className="mt-10 grid gap-6 lg:grid-cols-3">
              <Card className="relative overflow-hidden rounded-[2rem] border-amber-100 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
                <div className="absolute right-0 top-0 h-32 w-32 translate-x-10 -translate-y-10 rounded-full bg-amber-100" />
                <CardContent className="relative p-8">
                  <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-amber-700 text-white shadow-sm">
                    <Utensils size={28} />
                  </div>
                  <p className="text-sm font-black uppercase tracking-[0.18em] text-amber-700">Module 01</p>
                  <h3 className="mt-3 text-3xl font-black tracking-tight">餐飲料理實作</h3>
                  <p className="mt-4 leading-8 text-stone-600">
                    從廚房基本功開始，訓練刀工、盤飾、烹調流程與不同餐飲型態的料理製作能力。
                  </p>

                  <div className="mt-7 space-y-3">
                    {[
                      "中餐烹調技術與刀工盤飾",
                      "經典義式料理製作",
                      "歐風輕食與早午餐創意料理",
                      "體驗式餐飲服務設計與顧客互動策略",
                    ].map((text) => (
                      <div key={text} className="flex items-start gap-3 rounded-2xl bg-stone-50 p-4">
                        <CheckCircle2 className="mt-1 shrink-0 text-amber-700" size={20} />
                        <p className="font-semibold leading-7 text-stone-700">{text}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="relative overflow-hidden rounded-[2rem] border-amber-100 bg-stone-950 text-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
                <div className="absolute -right-10 -top-10 h-36 w-36 rounded-full bg-amber-500/20" />
                <div className="absolute -bottom-12 left-8 h-36 w-36 rounded-full bg-white/5" />
                <CardContent className="relative p-8">
                  <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-amber-400 text-stone-950 shadow-sm">
                    <CakeSlice size={28} />
                  </div>
                  <p className="text-sm font-black uppercase tracking-[0.18em] text-amber-300">Module 02</p>
                  <h3 className="mt-3 text-3xl font-black tracking-tight">烘焙甜點與商品開發</h3>
                  <p className="mt-4 leading-8 text-white/70">
                    不只學會製作甜點，更要理解產品開發、特色商品設計與節慶禮盒商品化。
                  </p>

                  <div className="mt-7 space-y-3">
                    {[
                      "西點烘焙與餐飲點心製作",
                      "烘焙食品西點蛋糕製作",
                      "冷藏水果甜點開發與商品化製作",
                      "法式手作甜點與節慶禮盒商品製作",
                      "農產加工與特色餐飲商品開發製作",
                    ].map((text) => (
                      <div key={text} className="flex items-start gap-3 rounded-2xl bg-white/10 p-4">
                        <CheckCircle2 className="mt-1 shrink-0 text-amber-300" size={20} />
                        <p className="font-semibold leading-7 text-white/75">{text}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="relative overflow-hidden rounded-[2rem] border-amber-100 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
                <div className="absolute right-0 top-0 h-full w-2 bg-amber-600" />
                <CardContent className="p-8">
                  <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-stone-100 text-stone-950 shadow-sm">
                    <Video size={28} />
                  </div>
                  <p className="text-sm font-black uppercase tracking-[0.18em] text-amber-700">Module 03</p>
                  <h3 className="mt-3 text-3xl font-black tracking-tight">品牌經營與就業力</h3>
                  <p className="mt-4 leading-8 text-stone-600">
                    補強食品安全、品牌經營、短影音、AI 行銷與求職能力，讓學員更接近實際就業場景。
                  </p>

                  <div className="mt-7 space-y-3">
                    {[
                      "食品安全衛生與營養標示實務",
                      "智慧餐飲服務與品牌經營應用",
                      "餐飲品牌影像行銷與短影音製作",
                      "AI 智慧行銷與品牌內容企劃實務",
                      "就業市場趨勢分析與求職技巧",
                      "勞動法令、職場溝通與職務認知",
                    ].map((text) => (
                      <div key={text} className="flex items-start gap-3 rounded-2xl border border-stone-200 bg-stone-50 p-4">
                        <CheckCircle2 className="mt-1 shrink-0 text-amber-700" size={20} />
                        <p className="font-semibold leading-7 text-stone-700">{text}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section id="apply" className="mx-auto max-w-7xl px-6 py-20">
          <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
            <Card className="rounded-[2rem] border-stone-200 bg-stone-950 text-white shadow-xl">
              <CardContent className="p-8 md:p-10">
                <p className="mb-3 text-sm font-black uppercase tracking-[0.24em] text-amber-300">
                  Apply
                </p>
                <h2 className="text-4xl font-black tracking-tight">報名與甄試資訊</h2>
                <div className="mt-8 space-y-5">
                  <ApplyItem
                    icon={<CalendarDays size={20} />}
                    title="報名截止"
                    text="即日起至 115 年 06 月 15 日下午 5:00 截止"
                  />
                  <ApplyItem
                    icon={<ClipboardCheck size={20} />}
                    title="甄試日期"
                    text="115 年 06 月 17 日早上 9:00 辦理甄試，合格後以電話簡訊通知錄訓"
                  />
                  <ApplyItem
                    icon={<MapPin size={20} />}
                    title="報名／上課地點"
                    text="南投縣埔里鎮隆生路 99 號"
                  />
                  <ApplyItem icon={<Phone size={20} />} title="洽詢電話" text="049-2903412" />
                </div>
              </CardContent>
            </Card>

            <div className="grid gap-5 md:grid-cols-2">
              <Card className="rounded-3xl border-stone-200 bg-white shadow-sm">
                <CardContent className="p-7">
                  <h3 className="text-2xl font-black">招訓對象</h3>
                  <p className="mt-4 leading-8 text-stone-600">
                    年滿 15 歲以上，具工作意願且工作技能不足之失業者。報名參訓須以結訓後直接就業為目標。
                  </p>
                </CardContent>
              </Card>

              <Card className="rounded-3xl border-stone-200 bg-white shadow-sm">
                <CardContent className="p-7">
                  <h3 className="text-2xl font-black">甄試方式</h3>
                  <p className="mt-4 leading-8 text-stone-600">
                    筆試採丙級技術士「中餐烹調葷食」學科選擇題、簡答題；另有口試面談。
                  </p>
                </CardContent>
              </Card>

              <Card className="rounded-3xl border-stone-200 bg-white shadow-sm md:col-span-2">
                <CardContent className="p-7">
                  <h3 className="text-2xl font-black">訓練費用</h3>
                  <div className="mt-5 grid gap-4 md:grid-cols-2">
                    <div className="rounded-2xl bg-amber-50 p-5">
                      <p className="font-black text-amber-900">符合特定資格失業者</p>
                      <p className="mt-2 text-stone-700">政府補助訓練經費 100%，全額免費。</p>
                    </div>
                    <div className="rounded-2xl bg-stone-100 p-5">
                      <p className="font-black">一般國民失業者</p>
                      <p className="mt-2 text-stone-700">
                        政府補助 80%，個人自付 20%：NT$8,011。
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section id="career" className="bg-white py-20">
          <div className="mx-auto max-w-7xl px-6">
            <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
              <div>
                <p className="mb-3 text-sm font-black uppercase tracking-[0.24em] text-amber-700">
                  Career Path
                </p>
                <h2 className="text-4xl font-black tracking-tight md:text-5xl">結訓後可發展方向</h2>
                <p className="mt-5 text-lg leading-8 text-stone-600">
                  這堂課的定位應該很清楚：不是只培養會做甜點的人，而是培養能進入餐飲、烘焙、商品開發與品牌行銷場景的人。
                </p>
              </div>

              <div className="grid gap-4">
                {jobs.map((job) => (
                  <div key={job} className="flex gap-4 rounded-3xl border border-stone-200 bg-stone-50 p-5">
                    <CheckCircle2 className="mt-1 shrink-0 text-amber-700" size={22} />
                    <p className="font-semibold leading-7 text-stone-700">{job}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-5xl px-6 py-20">
          <Card className="overflow-hidden rounded-[2rem] border-amber-100 bg-gradient-to-br from-amber-100 to-white shadow-xl">
            <CardContent className="p-8 text-center md:p-12">
              <h2 className="text-4xl font-black tracking-tight md:text-5xl">
                想進入餐飲烘焙業，別只靠興趣。
              </h2>
              <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-stone-700">
                這門訓練適合願意投入時間、完成 320 小時課程，並以結訓後直接就業為目標的人。若只是想學點心當休閒，這不是最適合你的班。
              </p>
              <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
                <a
                  href={applyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-11 items-center justify-center rounded-2xl bg-amber-700 px-8 text-base font-medium text-white shadow-sm transition hover:bg-amber-800"
                >
                  立即線上報名
                </a>
                <a
                  href={examPrepUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-11 items-center justify-center rounded-2xl border border-stone-300 bg-white px-8 text-base font-medium text-stone-950 shadow-sm transition hover:bg-stone-100"
                >
                  查看甄試準備
                </a>
              </div>
            </CardContent>
          </Card>
        </section>
      </main>

      <a
        href={lineUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-5 right-5 z-50 inline-flex items-center justify-center gap-2 rounded-full bg-green-500 px-5 py-4 text-sm font-black text-white shadow-2xl transition hover:-translate-y-1 hover:bg-green-600 md:text-base"
        aria-label="Line@ 聯絡我們"
      >
        <MessageCircle size={22} />
        Line@ 聯絡我們
      </a>

      <footer className="border-t border-stone-200 bg-white py-8">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-4 px-6 text-sm text-stone-500 md:flex-row">
          <p>餐飲烘焙業人員培訓班｜社團法人南投縣技職教育協會</p>
          
        </div>
      </footer>
    </div>
  );
}

function Stat({ label, value }) {
  return (
    <div className="rounded-3xl border border-white bg-white/75 p-4 shadow-sm backdrop-blur">
      <p className="text-sm font-bold text-stone-500">{label}</p>
      <p className="mt-1 text-xl font-black text-stone-950">{value}</p>
    </div>
  );
}

function Info({ icon, title, value }) {
  return (
    <div className="rounded-2xl bg-stone-50 p-4">
      <div className="mb-3 text-amber-700">{icon}</div>
      <p className="text-xs font-black uppercase tracking-wide text-stone-500">{title}</p>
      <p className="mt-1 font-black">{value}</p>
    </div>
  );
}

function ApplyItem({ icon, title, text }) {
  return (
    <div className="flex gap-5 rounded-3xl bg-white/10 p-6 md:p-7">
      <div className="mt-1 shrink-0 text-amber-300">{icon}</div>
      <div>
        <p className="text-xl font-black md:text-2xl">{title}</p>
        <p className="mt-3 text-lg leading-8 text-white/80 md:text-xl md:leading-9">{text}</p>
      </div>
    </div>
  );
}
