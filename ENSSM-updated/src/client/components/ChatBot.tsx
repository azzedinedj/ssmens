import { useState, useRef, useEffect } from "react";
import { X, Send, Loader2, Bot, User, ChevronDown } from "lucide-react";

interface Message {
  role: "user" | "bot";
  content: string;
  timestamp: Date;
}

const KB = {
  specializations: [
    "1. الإعلام الآلي / Computer Science",
    "2. الرياضيات / Mathematics",
    "3. الفيزياء والكيمياء / Physics-Chemistry",
    "4. علوم الحياة / Biological Sciences",
    "5. الهندسة الكهربائية / Electrical Engineering",
    "6. هندسة الطرائق / Process Engineering",
    "7. اللغة العربية / Arabic",
    "8. اللغة الإنجليزية / English",
    "9. الأمازيغية / Amazigh",
    "10. اللغة الفرنسية / French",
    "11. العلوم الإسلامية / Islamic Studies",
    "12. التاريخ والجغرافيا / History-Geography",
    "13. الاقتصاد والتسيير / Economics & Management",
    "14. الرياضة / Sport",
    "15. الفنون / Arts",
  ],
  admission_steps_ar: [
    "الحصول على شهادة البكالوريا أو ما يعادلها",
    "التسجيل عبر الملف الوطني الموحد (DUN) بين جويلية وسبتمبر",
    "إجراء مقابلة تحفيزية أمام لجنة",
    "التسجيل النهائي في برنامج التكوين لمدة 6 سنوات",
  ],
  admission_steps_en: [
    "Hold the Algerian baccalaureate or equivalent",
    "Register via DUN platform (inscription.mesrs.dz) – July to September",
    "Pass a motivation interview with jury",
    "Enroll in the 6-year program",
  ],
  timeline: [
    { year: "2021", ar: "قرار رئاسي بإنشاء المدرسة", en: "Presidential decree to create the school" },
    { year: "2022", ar: "الافتتاح الرسمي من قبل وزير التعليم العالي", en: "Official inauguration by the Minister of Higher Education" },
    { year: "2023", ar: "السنة الأكاديمية الأولى – 400 طالب في 14 تخصص", en: "First academic year – 400 students in 14 specializations" },
    { year: "2024", ar: "تخرج أول دفعة – 292 معلم متخصص", en: "First graduation – 292 specialized teachers" },
    { year: "2025", ar: "الإعلان عن 636 منصب جديد", en: "636 new positions announced" },
    { year: "2026", ar: "فتح القبول لحاملي البكالوريا – برنامج 6 سنوات", en: "Baccalaureate holders admission opened – 6-year program" },
  ],
  ai_achievements: [
    "تطوير أدوات ذكاء اصطناعي للغة الإشارة",
    "نشر 8 أوراق بحثية",
    "تكوين 100+ طالب في أساسيات الذكاء الاصطناعي",
  ],
  partnerships: [
    "جامعة باريس 8 (فرنسا)",
    "جامعة تونس",
    "وزارة التربية الوطنية الجزائرية",
    "الفدرالية الوطنية للصم في الجزائر",
    "الاتحاد السعودي لرياضات الصم",
    "الأكاديمية العربية لتطوير الأنشطة التدريبية (مصر)",
    "ديوان المطبوعات الجامعية (الجزائر)",
  ],
  medical_areas: [
    "تقويم النطق / Orthophony (Speech Therapy)",
    "تكنولوجيا أجهزة السمع والقوقعة الإلكترونية",
    "أساسيات طب الأنف والأذن والحنجرة (ENT)",
    "بيداغوجيا لغة الإشارة الجزائرية",
  ],
};

function detectLang(text: string): "ar" | "fr" | "en" {
  const arabic = (text.match(/[\u0600-\u06FF]/g) || []).length;
  const french = /\b(bonjour|comment|quoi|inscription|programme|merci|depuis|ecole|où)\b/i.test(text);
  if (arabic > 2) return "ar";
  if (french) return "fr";
  return "en";
}

function getResponse(input: string): string {
  const q = input.toLowerCase().trim();
  const lang = detectLang(input);

  // Greeting
  if (/^(مرحب|سلام|أهلا|صباح|مساء|hi\b|hello|bonjour|salut|hey\b)/.test(q)) {
    if (lang === "ar") return "👋 أهلاً بك! أنا مساعد المدرسة العليا لأساتذة الصم والبكم (ENSSM).\n\nيمكنني مساعدتك في:\n• 📚 التخصصات الدراسية (15 تخصص)\n• 📋 شروط القبول والتسجيل\n• 🏛️ معلومات عن المدرسة\n• 🤖 واجهات المدرسة\n• 📅 تاريخ وإنجازات المدرسة\n\nبماذا يمكنني مساعدتك؟";
    if (lang === "fr") return "👋 Bonjour! Je suis l'assistant de l'ENSSM.\n\nJe peux vous aider sur:\n• 📚 Les 15 spécialités\n• 📋 L'admission\n• 🏛️ Informations générales\n• 🤖 Les centres\n\nComment puis-je vous aider?";
    return "👋 Hello! I'm the ENSSM assistant.\n\nI can help you with:\n• 📚 15 Study Programs\n• 📋 Admission requirements\n• 🏛️ About ENSSM\n• 🤖 Innovation Centers\n\nWhat would you like to know?";
  }

  // Specializations
  if (/تخصص|برنامج|دراس|ماذا تدرس|مادة|تخصصات|ماستر|program|specializ|cours|filière|formation/.test(q)) {
    const list = KB.specializations.join("\n");
    if (lang === "ar") return `📚 **التخصصات الدراسية في ENSSM**\n\nتقدم المدرسة **15 تخصصاً** موزعة على 5 أقسام:\n\n${list}\n\n🎓 مدة التكوين: **6 سنوات**\n• تدريب ميداني في مدارس متخصصة\n• تكوين طبي متخصص\n• بيداغوجيا لغة الإشارة\n💡 التكوين **مجاني** للطلبة الجزائريين`;
    return `📚 **ENSSM Study Programs – 15 Specializations across 5 departments:**\n\n${list}\n\n🎓 Duration: **6 years** | Includes practical internships, medical training & sign language pedagogy.\n💡 Free for Algerian students!`;
  }

  // Admission
  if (/قبول|تسجيل|كيف تسجل|شروط|dun|inscription|admission|register|apply|how to|ملف|مسابقة/.test(q)) {
    if (lang === "ar") {
      const steps = KB.admission_steps_ar.map((s, i) => `${i + 1}️⃣ ${s}`).join("\n");
      return `📋 **إجراءات القبول في ENSSM**\n\n${steps}\n\n📅 **فترة التسجيل:** جويلية – سبتمبر\n🌐 **المنصة:** inscription.mesrs.dz (DUN)\n\n✅ شهادة البكالوريا أو ما يعادلها\n✅ مقابلة تحفيزية أمام لجنة\n✅ مفتوح للطلاب العرب والأفارقة\n✅ ترتيبات خاصة للصم وضعاف السمع\n\n💡 **جديد 2026:** القبول مفتوح لحاملي البكالوريا – برنامج 6 سنوات`;
    }
    const steps = KB.admission_steps_en.map((s, i) => `${i + 1}️⃣ ${s}`).join("\n");
    return `📋 **ENSSM Admission Process**\n\n${steps}\n\n📅 Registration: **July–September** each year\n🌐 Platform: **inscription.mesrs.dz (DUN)**\n\n✅ Algerian baccalaureate or equivalent\n✅ Motivation interview with jury\n✅ Open to Arab & African students\n✅ Special accommodations for deaf candidates\n\n💡 **New 2026:** Baccalaureate holders welcome – 6-year program!`;
  }

  // Duration
  if (/سنة|سنوات|مدة|كم سنة|year|année|durée/.test(q)) {
    if (lang === "ar") return "🎓 مدة التكوين في ENSSM هي **6 سنوات** لحاملي شهادة البكالوريا.\n\nيشمل:\n• تدريب نظري وعملي متكامل\n• تربصات في مدارس متخصصة\n• تكوين طبي (تقويم النطق، أجهزة السمع، ENT)\n• بيداغوجيا لغة الإشارة";
    return "The ENSSM program lasts **6 years** for baccalaureate holders.\n\nIncludes theoretical + practical training, internships in specialized schools, medical training (speech therapy, hearing devices, ENT) and sign language pedagogy.";
  }

  // Location
  if (/أين|عنوان|موقع|location|where|adresse|وين|بني مسوس/.test(q)) {
    if (lang === "ar") return "📍 **موقع المدرسة**\n\nتقع المدرسة العليا لأساتذة الصم والبكم في:\n**بني مسوس، الجزائر العاصمة**\n\n🗺️ يمكنك فتح الموقع في خرائط جوجل من قسم 'اتصل بنا'.";
    return "📍 **Location**\n\nENSSM is located in:\n**Beni Messous, Algiers, Algeria**\n\n🗺️ Open it in Google Maps from the 'Contact' section.";
  }

  // About
  if (/ما هي|ما هو|عن المدرسة|تعريف|what is|about|présentation|مدرسة|enssm/.test(q)) {
    if (lang === "ar") return "🏛️ **المدرسة العليا لأساتذة الصم والبكم (ENSSM)**\n\nأول مؤسسة من نوعها في أفريقيا والعالم العربي\n\n📌 **المعلومات الأساسية:**\n• التأسيس: 2021 (قرار رئاسي)\n• الافتتاح: 2022\n• الموقع: بني مسوس، الجزائر العاصمة\n• المدير: أ.د زقعار فتحي\n• عدد الطلبة: 600+\n• الخريجون حتى 2026: 1085 معلم متخصص\n\n🎯 **المهمة:** تكوين أساتذة متخصصين لتعليم الصم وضعاف السمع في التعليم الثانوي الجزائري.";
    return "🏛️ **ENSSM - Higher School for Teachers of the Deaf and Mute**\n\n✨ First institution of its kind in Africa and the Arab World\n\n📌 **Key Facts:**\n• Founded: 2021 (Presidential decree)\n• Inaugurated: 2022\n• Location: Beni Messous, Algiers\n• Director: Pr. ZEGAR FETHI\n• Students: 600+\n• Graduates (2026): 1085 specialized teachers\n\n🎯 **Mission:** Training specialized secondary school teachers for deaf and hearing-impaired students.";
  }

  // Director
  if (/مدير|رئيس|director|directeur|زقعار|fethi|zegar/.test(q)) {
    if (lang === "ar") return "👨‍💼 **مدير المدرسة**\n\nالأستاذ الدكتور **زقعار فتحي** (Pr. ZEGAR FETHI)\n\nيمكنك حجز موعد مع المدير من خلال قسم 'حجز موعد' في الموقع الرسمي.";
    return "👨‍💼 **School Director**\n\n**Pr. ZEGAR FETHI** (زقعار فتحي)\n\nYou can book an appointment with the director through the 'Book Appointment' section.";
  }

  // AI House
  if (/ذكاء اصطناعي|دار الذكاء|ai house|intelligence artificielle/.test(q)) {
    const list = KB.ai_achievements.map(a => `✅ ${a}`).join("\n");
    if (lang === "ar") return `🤖 **دار الذكاء الاصطناعي في ENSSM**\n\nمركز متميز مكرّس للاستكشاف والابتكار في الذكاء الاصطناعي.\n\n**الإنجازات:**\n${list}\n\n**الأهداف:**\n• دمج الذكاء الاصطناعي في المناهج\n• تشجيع البحث الأكاديمي\n• التوعية بالتحديات الأخلاقية للذكاء الاصطناعي`;
    return `🤖 **AI House at ENSSM**\n\nDedicated center for AI exploration and innovation.\n\n**Achievements:**\n${list}\n\n**Goals:** Integrate AI in education, support research, and promote ethical AI awareness.`;
  }

  // Entrepreneurship
  if (/مقاولاتية|حاضنة|entrepreneurship|incubateur|startup|مشروع/.test(q)) {
    if (lang === "ar") return "🚀 **واجهات الأعمال في ENSSM**\n\n**1️⃣ دار المقاولاتية** (تأسست 21 جويلية 2024)\n• 72 حامل مشروع تخرج\n• 3 مشاريع مقبولة من CSVF\n• مؤتمر دولي بـ10 متدخلين من دول عربية\n• مسابقة أفضل مشروع للذوي الاحتياجات الخاصة\n\n**2️⃣ حاضنة الأعمال**\n• تكوين الطلاب أصحاب المشاريع\n• تسهيل الوصول لمصادر التمويل\n• ربط الجامعة بالمحيط الاقتصادي";
    return "🚀 **Entrepreneurship at ENSSM**\n\n**House of Entrepreneurship** (founded July 21, 2024)\n• 72 entrepreneurs graduated\n• 3 projects approved by CSVF\n• International conference with 10 Arab country speakers\n• AI competition for special needs\n\n**Business Incubator:** Trains student entrepreneurs, provides mentoring, and facilitates funding access.";
  }

  // CATI
  if (/cati|براءة اختراع|patent|wipo|inapi|ابتكار/.test(q)) {
    if (lang === "ar") return "💡 **مركز دعم الابتكار والتكنولوجيا (CATI)**\n\nشراكة بين ENSSM و INAPI (مرتبط بـ WIPO)\n\n✅ دعم تقديم براءات الاختراع\n✅ حماية الملكية الصناعية\n✅ الوصول إلى موارد OMPI/WIPO\n✅ تعزيز ثقافة الابتكار الجامعي";
    return "💡 **CATI - Technology & Innovation Support Center**\n\nPartnership between ENSSM and INAPI (linked to WIPO).\n\n✅ Patent filing support\n✅ Industrial property protection\n✅ Access to WIPO resources\n✅ Innovation promotion";
  }

  // Partnerships
  if (/شراكة|اتفاقية|تعاون|partner|partenariat|paris/.test(q)) {
    const list = KB.partnerships.map(p => `• ${p}`).join("\n");
    if (lang === "ar") return `🌍 **شراكات ENSSM الدولية (15+ شراكة)**\n\n${list}\n\nتتيح هذه الشراكات للطلبة والأساتذة الاستفادة من التبادل والتكوين الدولي.`;
    return `🌍 **ENSSM Partnerships (15+)**\n\n${list}\n\nProvide students and teachers access to international exchanges and training.`;
  }

  // History
  if (/تاريخ|متى|تأسيس|history|founded|when|création|مسيرة/.test(q)) {
    const list = KB.timeline.map(t => `🔵 **${t.year}:** ${lang === "ar" ? t.ar : t.en}`).join("\n");
    if (lang === "ar") return `📅 **تاريخ ومسيرة ENSSM**\n\n${list}\n\n🌟 المدرسة أول مؤسسة من نوعها في أفريقيا والعالم العربي!`;
    return `📅 **ENSSM Timeline**\n\n${list}\n\n🌟 First institution of its kind in Africa and the Arab World!`;
  }

  // Medical
  if (/أرطوفونيا|نطق|سمع|أجهزة|قوقعة|ent|orthophonie|speech|hearing|medical/.test(q)) {
    const list = KB.medical_areas.map((a, i) => `${i + 1}. ${a}`).join("\n");
    if (lang === "ar") return `🏥 **المجالات الطبية في تكوين ENSSM**\n\n${list}\n\nهذه المجالات مدمجة في برنامج التكوين الست سنوات.`;
    return `🏥 **Medical Training Areas at ENSSM**\n\n${list}\n\nIntegrated into the 6-year training program.`;
  }

  // Cost
  if (/رسوم|مجاني|تكاليف|fees|cost|gratuit|payant/.test(q)) {
    if (lang === "ar") return "💰 **تكاليف الدراسة**\n\n✅ **التكوين مجاني تماماً** للطلبة الجزائريين\n\nللطلبة الأجانب (العرب والأفارقة): يرجى التواصل مع إدارة المدرسة.";
    return "💰 **Tuition & Fees**\n\n✅ **100% Free** for Algerian students\n\nFor international students: Please contact the administration through the 'Contact Us' section.";
  }

  // Contact
  if (/تواصل|اتصال|contact|فيسبوك|facebook/.test(q)) {
    if (lang === "ar") return "📞 **التواصل مع ENSSM**\n\n📍 **الموقع:** بني مسوس، الجزائر العاصمة\n📘 **فيسبوك:** ابحث عن ENSSM للصفحة الرسمية\n\n💡 يمكنك أيضاً **حجز موعد مع المدير** من قسم 'حجز موعد'.";
    return "📞 **Contact ENSSM**\n\n📍 **Location:** Beni Messous, Algiers\n📘 **Facebook:** Search for ENSSM official page\n\n💡 You can also **book an appointment** with the director!";
  }

  // Sign language
  if (/لغة إشارة|لغة الاشارة|sign language|langue des signes|اشارة/.test(q)) {
    if (lang === "ar") return "🤟 **لغة الإشارة في ENSSM**\n\nلغة الإشارة الجزائرية محور أساسي في التكوين:\n\n• **بيداغوجيا لغة الإشارة:** منهجيات التدريس\n• **مركز وطني لتعليم لغة الإشارة**\n• **دار الذكاء الاصطناعي:** أدوات AI للتعرف على لغة الإشارة\n• **ورشات متقدمة** تُنظَّم بانتظام";
    return "🤟 **Sign Language at ENSSM**\n\nSign language is a core pillar of the training:\n\n• **Sign Language Pedagogy:** Teaching methodologies\n• **National Sign Language Training Center**\n• **AI House:** AI-powered sign language recognition tools\n• **Regular advanced workshops**";
  }

  // Graduates / career
  if (/خريج|توظيف|مستقبل|أين تعمل|خريجين|graduate|emploi|career/.test(q)) {
    if (lang === "ar") return "🎓 **مستقبل خريجي ENSSM**\n\n• **1085** معلم متخصص التحقوا بالتعليم حتى 2026\n• المتوقع **1500** بحلول 2027\n• توظيف في المدارس المتخصصة للصم عبر الجزائر\n• فرص في قطاعات أخرى\n\n🌟 الجزائر رائدة في التعليم الشامل في أفريقيا والعالم العربي!";
    return "🎓 **Career Outcomes**\n\n• **1085** specialized teachers placed by 2026\n• **1500** expected by 2027\n• Employment in specialized schools for deaf/HoH across Algeria\n\n🌟 Algeria leads inclusive education in Africa & the Arab World!";
  }

  // Thanks
  if (/شكرا|شكراً|merci|thank|thanks/.test(q)) {
    if (lang === "ar") return "😊 على الرحب والسعة! إذا كان لديك سؤال آخر، لا تتردد! 🎓";
    return "😊 You're welcome! Feel free to ask anything else about ENSSM! 🎓";
  }

  // Default
  if (lang === "ar") return "🤔 يمكنني مساعدتك في:\n\n• 📚 **التخصصات** (15 تخصص)\n• 📋 **القبول والتسجيل**\n• 🏛️ **معلومات عن المدرسة**\n• 🤖 **الواجهات** (دار الذكاء الاصطناعي، دار المقاولاتية...)\n• 💰 **تكاليف الدراسة**\n• 📍 **موقع المدرسة**\n• 🌍 **الشراكات الدولية**\n• 🤟 **لغة الإشارة**\n\nجرب أن تسأل بشكل أكثر تفصيلاً!";
  return "🤔 I can help you with:\n\n• 📚 **15 Study Programs**\n• 📋 **Admission & Registration**\n• 🏛️ **About ENSSM**\n• 🤖 **Innovation Centers**\n• 💰 **Tuition fees**\n• 📍 **Location**\n• 🌍 **Partnerships**\n• 🤟 **Sign Language**\n\nTry rephrasing your question!";
}

const quickActions = [
  { label: "📚 التخصصات", query: "ما هي التخصصات الدراسية؟" },
  { label: "📋 القبول", query: "كيف أتسجل في المدرسة؟" },
  { label: "🤖 الذكاء الاصطناعي", query: "ما هي دار الذكاء الاصطناعي؟" },
  { label: "📅 التاريخ", query: "ما هو تاريخ المدرسة؟" },
  { label: "🌍 الشراكات", query: "ما هي شراكات المدرسة؟" },
];

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "bot",
      content: "👋 مرحباً! أنا مساعد ENSSM.\n\nHello! I'm the ENSSM assistant.\n\nيمكنني الإجابة على أسئلتك حول:\n• التخصصات الدراسية (15 تخصص)\n• شروط القبول والتسجيل\n• المدرسة وتاريخها\n• الواجهات والمراكز\n\nI speak Arabic, French & English!",
      timestamp: new Date(),
    },
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen && !isMinimized) {
      messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, isOpen, isMinimized]);

  useEffect(() => {
    if (isOpen && !isMinimized) {
      setTimeout(() => inputRef.current?.focus(), 300);
    }
  }, [isOpen, isMinimized]);

  const sendMessage = (text: string) => {
    if (!text.trim()) return;
    setMessages((prev) => [...prev, { role: "user", content: text, timestamp: new Date() }]);
    setInput("");
    setIsLoading(true);
    setTimeout(() => {
      setMessages((prev) => [...prev, { role: "bot", content: getResponse(text), timestamp: new Date() }]);
      setIsLoading(false);
    }, 700 + Math.random() * 500);
  };

  const formatTime = (d: Date) => d.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });

  return (
    <>
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-gradient-to-br from-blue-600 to-indigo-700 text-white px-4 py-3 rounded-2xl shadow-2xl hover:shadow-blue-500/40 hover:scale-105 transition-all duration-300"
          aria-label="Open chat"
        >
          <div className="relative">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
            </svg>
            <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-green-400 rounded-full border-2 border-white animate-pulse" />
          </div>
          <span className="font-semibold text-sm hidden sm:block">مساعد ENSSM</span>
        </button>
      )}

      {isOpen && (
        <div
          className={`fixed bottom-6 right-6 z-50 w-80 sm:w-96 bg-white rounded-2xl shadow-2xl flex flex-col border border-gray-100 transition-all duration-300 overflow-hidden ${isMinimized ? "h-14" : "h-[560px]"}`}
        >
          <div className="flex items-center justify-between gap-3 px-4 py-3 bg-gradient-to-r from-blue-600 to-indigo-700 flex-shrink-0">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 bg-white/20 rounded-xl flex items-center justify-center">
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15M14.25 3.104c.251.023.501.05.75.082M19.8 15l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.607L5 14.5m14.8.5l-1.249 2.498a2.25 2.25 0 01-2.012 1.252H7.461A2.25 2.25 0 015.45 17l-1.25-2.5m0 0 1.57-.393M19.8 15l-14.3.107" />
                </svg>
              </div>
              <div>
                <p className="text-white font-bold text-sm">مساعد ENSSM</p>
                <p className="text-white/70 text-xs flex items-center gap-1">
                  <span className="w-1.5 h-1.5 bg-green-400 rounded-full" />
                  متصل • Online
                </p>
              </div>
            </div>
            <div className="flex gap-1">
              <button onClick={() => setIsMinimized(!isMinimized)} className="w-7 h-7 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors">
                <ChevronDown className={`w-4 h-4 text-white transition-transform ${isMinimized ? "rotate-180" : ""}`} />
              </button>
              <button onClick={() => { setIsOpen(false); setIsMinimized(false); }} className="w-7 h-7 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors">
                <X className="w-4 h-4 text-white" />
              </button>
            </div>
          </div>

          {!isMinimized && (
            <>
              <div className="flex-1 overflow-y-auto p-3 space-y-3 bg-gray-50">
                {messages.map((msg, idx) => (
                  <div key={idx} className={`flex gap-2 ${msg.role === "user" ? "flex-row-reverse" : "flex-row"}`}>
                    <div className={`w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-1 ${msg.role === "bot" ? "bg-gradient-to-br from-blue-500 to-indigo-600" : "bg-gray-400"}`}>
                      {msg.role === "bot"
                        ? <Bot className="w-3.5 h-3.5 text-white" />
                        : <User className="w-3.5 h-3.5 text-white" />}
                    </div>
                    <div className={`flex flex-col max-w-[80%] ${msg.role === "user" ? "items-end" : "items-start"}`}>
                      <div className={`px-3 py-2.5 rounded-2xl text-sm leading-relaxed whitespace-pre-line ${msg.role === "user" ? "bg-gradient-to-br from-blue-600 to-indigo-700 text-white rounded-tr-sm" : "bg-white text-gray-800 shadow-sm border border-gray-100 rounded-tl-sm"}`}>
                        {msg.content}
                      </div>
                      <span className="text-[10px] text-gray-400 mt-0.5 px-1">{formatTime(msg.timestamp)}</span>
                    </div>
                  </div>
                ))}
                {isLoading && (
                  <div className="flex gap-2">
                    <div className="w-6 h-6 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center">
                      <Bot className="w-3.5 h-3.5 text-white" />
                    </div>
                    <div className="bg-white border border-gray-100 shadow-sm px-4 py-3 rounded-2xl rounded-tl-sm">
                      <div className="flex gap-1">
                        <span className="w-2 h-2 bg-blue-400 rounded-full animate-bounce" style={{ animationDelay: "0ms" }} />
                        <span className="w-2 h-2 bg-blue-400 rounded-full animate-bounce" style={{ animationDelay: "150ms" }} />
                        <span className="w-2 h-2 bg-blue-400 rounded-full animate-bounce" style={{ animationDelay: "300ms" }} />
                      </div>
                    </div>
                  </div>
                )}
                <div ref={messagesEndRef} />
              </div>

              {messages.length <= 1 && (
                <div className="px-3 py-2 bg-white border-t border-gray-100 flex gap-1.5 overflow-x-auto flex-shrink-0">
                  {quickActions.map((a) => (
                    <button
                      key={a.query}
                      onClick={() => sendMessage(a.query)}
                      className="flex-shrink-0 text-xs bg-blue-50 hover:bg-blue-100 text-blue-700 px-2.5 py-1.5 rounded-full transition-colors font-medium border border-blue-100 whitespace-nowrap"
                    >
                      {a.label}
                    </button>
                  ))}
                </div>
              )}

              <div className="p-3 bg-white border-t border-gray-100 flex-shrink-0">
                <div className="flex gap-2 items-center">
                  <input
                    ref={inputRef}
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={(e) => { if (e.key === "Enter") sendMessage(input); }}
                    placeholder="اسأل عن المدرسة... / Ask about ENSSM..."
                    className="flex-1 px-3 py-2 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-blue-400 focus:bg-white transition-all"
                    disabled={isLoading}
                  />
                  <button
                    onClick={() => sendMessage(input)}
                    disabled={!input.trim() || isLoading}
                    className="w-9 h-9 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-xl flex items-center justify-center disabled:opacity-40 hover:scale-105 transition-all flex-shrink-0"
                  >
                    {isLoading ? <Loader2 className="w-4 h-4 text-white animate-spin" /> : <Send className="w-4 h-4 text-white" />}
                  </button>
                </div>
              </div>
            </>
          )}
        </div>
      )}
    </>
  );
}
