import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Users, BookOpen, MapPin, Mail, Clock, ChevronDown, Award, Heart, Globe, Menu, X, Images, ArrowRight, Sparkles, Target, Lightbulb, HandHeart, Building2, Calendar, CheckCircle2, Facebook, ExternalLink, Languages, Rocket, Building, Brain, Cog, Library, Camera, Newspaper, ChevronLeft, ChevronRight, GraduationCap, DoorOpen, Hand, Maximize2, Laptop, Calculator, FlaskConical, Dna, Zap, Cpu, BookA, Crown, Quote, Moon, TrendingUp, Trophy, Palette, ShieldCheck } from 'lucide-react';
import { Button } from '@/client/components/ui/Button';
import ChatBot from '@/client/components/ChatBot';

type Language = 'en' | 'ar';

const translations = {
  en: {
    // Navigation
    nav: {
      about: 'About',
      programs: 'Pedagogy',
      admission: 'Admission',
      wajihat: 'Wadjihat',
 	  gallery: 'Gallery',
      contact: 'Contact',
      contactUs: 'Contact Us',
      news: 'News',
      events: 'Events',
      //applyNow: 'School Zone',//
    },
    // Hero
    hero: {
      badge: 'First Institution of its Kind in Africa & Arab World',
      title1: 'Higher School for',
      title2: 'Teachers of the Deaf and Mute',
      arabicName: 'المدرسة العليا لأساتذة الصم والبكم',
      description: 'Training specialized educators to empower deaf and hearing-impaired students through quality secondary education in Algeria.',
      explorePrograms: 'Explore Programs',
      viewGallery: 'View Gallery',
    },
    // Stats
    stats: {
      studentsEnrolled: 'Students Enrolled',
      specializations: 'Specializations',
      bacProgram: 'Baccalaureate Program',
      firstGraduates: 'Graduates',
    },
// About
    about: {
      badge: 'About Our Institution',
      title1: 'Pioneering Inclusive',
title2: 'Education in Algeria',
      description: 'We prepare secondary education instructors who specialize in teaching students with special needs and abilities, serving the national education sector and other sectors as needed. Our institution provides high-level training in multiple specializations, offering adapted quality education for social and economic integration of deaf and hearing-impaired individuals. We also operate the first AI-powered sign language recognition system to support deaf education.',
      missionTitle: "Director's Word",
      missionText1: 'We proudly celebrated the graduation of national cohort of specialized teachers for deaf and mute students, with 1085 qualified teachers successfully entering the educational sector by 2026 and expected for 2027, 1500 qualified teachers. This milestone marks a significant advancement in specialized education in Algeria and supports the right to education and participation for this group. The school, the first in Africa, was approved by the Council of Ministers and offers training in 15 specializations across five departments, combining theoretical and practical learning. Additionally, a center for teaching sign language was established as a national training reference. The school aims to foster educational and social integration. It plans to develop new technical specializations like civil and electrical engineering to enhance career opportunities for deaf students and promote sign language usage. The goal is to make Algeria a leader in inclusive education in Africa and the Arab world.',
      missionText2: '',
      keyTrainingAreas: 'Key Training Areas',
      specializedTraining: 'Specialized Training',
      specializedTrainingDesc: 'Six-year program, open to baccalaureate holders, focused on cutting-edge teaching methodologies for deaf and hearing-impaired students.',
      inclusiveEducation: 'Inclusive Education',
      inclusiveEducationDesc: 'Committed to providing quality education adapted for social and economic integration of all students.',
      firstInAfrica: 'First in Africa & Arab World',
      firstInAfricaDesc: 'Pioneer institution in specialized teacher training for the deaf community across the region.',
      orthophony: 'Orthophony (Speech Therapy)',
      orthophonyDesc: 'Advanced techniques in speech rehabilitation',
      hearingDevices: 'Hearing Devices Technology',
      hearingDevicesDesc: 'Modern hearing aid and cochlear implant training',
      entMedicine: 'ENT Medicine Basics',
      entMedicineDesc: 'Understanding ear, nose, and throat conditions',
      signLanguage: 'Sign Language Pedagogy',
      signLanguageDesc: 'Teaching methodologies using sign language',
    },
    // Timeline
    timeline: {
      badge: 'Our Journey',
      title: 'Milestones & Achievements',
      presidential: 'Presidential Decision',
      presidentialDesc: 'His excellency Mr. Abdelmadjid Tebboune decides to create the Higher School for Teachers of the Deaf and Mute',
      inauguration: 'School Inauguration',
      inaugurationDesc: 'Official opening by Minister of Higher Education',
      firstYear: 'First Academic Year',
      firstYearDesc: '400 students enrolled in 14 specializations',
      firstGraduation: 'First Graduation',
      firstGraduationDesc: '292 specialized teachers graduated',
      expansion: 'Expansion',
      expansionDesc: "636 new positions announced",
      bac2026: 'Baccalaureate Admission & 6-Year Program',
      bac2026Desc: 'From the 2026 session, admission opened to baccalaureate holders with 636 new seats for a specialized six-year training program for teachers of deaf and hard-of-hearing students',
    },
    // Programs
    programs: {
      badge: 'Academic Programs',
      title1: '15 Specialized',
      title2: 'Study Programs',
      description: 'Our six-year program, open to baccalaureate holders, combines traditional academic subjects with cutting-edge training in deaf education methodologies.',
      bacProgram: 'Baccalaureate Program (6 Years)',
      bacProgramDesc: 'Our specialized six-year program, open to baccalaureate holders, equips future teachers with all the skills needed to effectively educate deaf and hearing-impaired students.',
      sixYear: '6-year training program',
      practical: 'Practical teaching internships in partner specialized schools',
      medical: 'Specialized medical training',
      career: 'Career placement support',
      faculty: 'Expert faculty guidance',
      facilities: 'Modern facilities',
    },
    // Gallery
    gallery: {
      badge: 'Campus Life',
      title1: 'Life at',
      title2: 'ENS-SM',
      campusGallery: 'Campus Gallery',
    },
    // Wajihat (Centers)
    wajihat: {
      badge: 'Our Centers',
      title1: 'Innovation &',
      title2: 'Excellence Hubs',
      description: 'Discover our specialized centers dedicated to fostering entrepreneurship, innovation, and cultural development within our institution.',
      director: 'Director',
      achievements: 'Key Achievements',
      entrepreneurship: 'House of Entrepreneurship',
      entrepreneurshipDesc: 'The Entrepreneurship Development Center at the Higher School for Deaf and Mute Teachers, founded on July 21, 2024, aims to promote university entrepreneurship through a partnership with the Ministries of Higher Education and the Knowledge Economy. The center offers training programs for entrepreneurs, from which 72 entrepreneurs have graduated. Three projects have also been approved by the CSVF committee. The Center has organized awareness-raising events, training courses, and a competition for the best project by individuals with special needs in the field of artificial intelligence. Its international conference on October 27, 2025, featured 10 speakers from several Arab countries.',
      entrepreneurshipAchievements: ['72 entrepreneurs graduated', '3 projects approved by CSVF', 'International conference with 10 speakers', 'AI competition for special needs', 'Awareness events & training courses'],
      incubator: 'Business Incubator',
      incubatorDesc: 'Aims to foster a culture of entrepreneurship within the academic community by encouraging students to innovate, take initiative, and turn their ideas into viable projects. Trains student entrepreneurs, mentors them in administrative and technical aspects, facilitates access to funding, connects the university to its economic environment, and contributes to creating a wealth-generating economy.',
      incubatorAchievements: ['Trains student entrepreneurs', 'Mentors in administrative & technical aspects', 'Facilitates access to funding', 'Connects university to economic environment', 'Creates wealth-generating economy'],
      ai: 'Artificial Intelligence House',
      aiDesc: 'The Artificial Intelligence House at the ENSSM is a distinguished AI house dedicated to exploring, learning, and innovating in the field of artificial intelligence (AI). It promotes interdisciplinary collaboration by bringing together students, researchers, and professionals from diverse backgrounds to exchange knowledge and expertise. The AI House also provides pedagogical support to students and teachers to integrate AI technologies into curricula, making education more interactive and effective. It fosters research and development by encouraging academic research projects and technical innovations aligned with global AI advancements. Furthermore, as part of its societal responsibility, the AI House raises awareness about the ethical and societal challenges associated with AI among both the university community and the general public.',
      aiAchievements: ['Developed AI-powered sign language tools', 'Published 8 research papers', 'Trained 100+ students in AI fundamentals'],
      tisc: 'Technology & Innovation Support Center (CATI)',
      tiscDesc: 'CATI is a partnership between the Higher School for Teachers of the Deaf and Mute (ENSSM) and the Algerian National Institute of Industrial Property (INAPI), the national authority in Algeria responsible for protecting and promoting industrial property, including patents, trademarks, industrial designs, and geographical indications. CATI plays a key role in the relationship between INAPI and the World Intellectual Property Organization (WIPO), and is an initiative aimed at promoting innovation by providing access to information services.',
      tiscAchievements: ['Partnership with INAPI', 'Access to WIPO resources', 'Patent filing support', 'Industrial property protection', 'Innovation promotion'],
      cultural: 'Cultural & Scientific events',
      culturalDesc: 'Promoting cultural exchange and scientific collaboration, organizing events, exhibitions, and programs that celebrate diversity and advance scientific knowledge.',
      culturalAchievements: ['Organized 25+ cultural events', 'Hosted international conferences', 'Established academic partnerships'],
    },
    // News & Events
    news: {
      badge: 'News & Updates',
      title1: 'Latest from',
      title2: 'ENSSM',
      description: 'Stay informed about admissions, events, partnerships and innovation at the Higher School for Teachers of the Deaf and Mute.',
      all: 'All',
      featured: 'Featured',
      readMore: 'Read more',
      close: 'Close',
      empty: 'No news in this category yet.',
      categories: { admissions: 'Admissions', events: 'Events', partnerships: 'Partnerships', innovation: 'Innovation' },
    },
    events: {
      badge: 'School Calendar',
      title1: 'Events &',
      title2: 'Activities',
      description: 'Discover the ceremonies, open days and workshops organized at the school.',
      date: 'Date',
      time: 'Time',
      location: 'Location',
      viewDetails: 'View details',
      close: 'Close',
      prev: 'Previous',
      next: 'Next',
    },
    // Admission
    admission: {
      badge: 'Join Us',
      title1: 'Start Your Journey',
      title2: 'Today',
      description: 'Join Algeria\'s pioneering institution for training teachers of deaf and hearing-impaired students. Apply with your baccalaureate through the national unique file (DUN).',
      processTitle: 'Admission Process',
      step1: 'Baccalaureate',
      step1Desc: 'Hold the Algerian baccalaureate or an equivalent diploma',
      step2: 'National Registration (DUN)',
      step2Desc: 'Register through the national unique file (DUN) between July and September each year',
      step3: 'Motivation Interview',
      step3Desc: 'Meet a jury for a motivation interview, with special accommodations for deaf and hard-of-hearing candidates',
      step4: 'Enrollment',
      step4Desc: 'Successful candidates enroll in the 6-year program',
      requirementsTitle: 'Requirements',
      req1: 'Algerian baccalaureate or an equivalent diploma',
      req2: 'Pass a motivation interview with a jury',
      req3: 'Show a genuine interest in special education',
      req4: 'Special accommodations for deaf and hard-of-hearing candidates',
      req5: 'Open door for international students (Arabian and African)',
      bannerLabel: 'Registration via the DUN',
      bannerMain: 'July – September',
      bannerSub: 'Free tuition for Algerian students',
    },
    // Contact
    contact: {
      badge: 'Get in Touch',
      title: 'Contact Us',
      description: "Have questions? We're here to help you start your journey in specialized education.",
      visitUs: 'Visit Us',
      followUs: 'Follow Us',
      ministry: 'Ministry',
      visitCampus: 'Visit Our Campus',
      campusLocation: 'Located in the heart of Beni Messous, Algiers',
      openInMaps: 'Open in Google Maps',
    },
    // Rendez-vous
    rendezvous: {
    badge: 'Director\'s Office',
    title1: 'Book an',
    title2: 'Appointment',
    description: 'Schedule a meeting with the school director to discuss admissions, programs, or any inquiries about the institution.',
    button: 'Book Now',
    },
    // Footer
    footer: {
      subtitle: 'Higher School for Teachers of Deaf and Mute',
      description: 'Training specialized educators for a more inclusive future. First institution of its kind in Africa and the Arab World.',
      quickLinks: 'Quick Links',
      officialLinks: 'Official Links',
      ministryLink: 'Ministry of Higher Education',
	  platformsLink: 'MESRS Platforms',
      facebookLink: 'Official Facebook Page',

      rights: 'All rights reserved.',
    },
  },
  ar: {
    // Navigation
    nav: {
      about: 'عن المدرسة',
      pedagogy: 'البيداغوجيا',
      programs: 'البرامج',
      wajihat: 'الواجهات',
      gallery: 'المعرض',
      admission: 'القبول',
      contact: 'اتصل بنا',
      contactUs: 'اتصل بنا',
      news: 'الأخبار',
      events: 'الفعاليات',
      applyNow: 'منطقة المدرسة',
    },
    // Hero
    hero: {
      badge: 'أول مؤسسة من نوعها في أفريقيا والعالم العربي',
      title1: 'المدرسة العليا',
      title2: 'لأساتذة الصم',
      arabicName: 'المدرسة العليا لأساتذة الصم والبكم',
      description: 'تدريب معلمين متخصصين لتمكين الطلاب الصم وضعاف السمع من خلال توفير تعليم ثانوي عالي الجودة في الجزائر',
      explorePrograms: 'استكشف البرامج',
      viewGallery: 'شاهد المعرض',
    },
    // Stats
    stats: {
      studentsEnrolled: 'طالب مسجل',
      specializations: 'تخصص',
      bacProgram: 'برنامج البكالوريا',
      firstGraduates: ' دفعة خريجين',
    },
    // About
    about: {
      badge: 'مدرستنا',
      title1: 'الريادة في التعليم',
      title2: 'الشامل في الجزائر',
      description: 'نقوم بإعداد معلمي التعليم الثانوي المتخصصين في تدريس الطلاب ذوي الاحتياجات والقدرات الخاصة، لخدمة قطاع التعليم الوطني والقطاعات الأخرى حسب الحاجة. توفر مؤسستنا تدريباً عالي المستوى في تخصصات متعددة، مقدمة تعليماً جيداً مكيفاً للاندماج الاجتماعي والاقتصادي للصم وضعاف السمع. كما ندير أول نظام التعرف على لغة الإشارة المدعوم بالذكاء الاصطناعي لدعم التعليم للصم.',
      missionTitle: 'مهمتنا',
      missionText1: 'احتفلنا بكل فخر بتخرّج الدفعة الوطنية من الأساتذة المتخصصين في تعليم التلاميذ الصمّ والبكم، حيث التحق 1085 أستاذًا مؤهلًا بقطاع التربية والتعليم إلى غاية سنة 2026، ومن المتوقع أن يصل عدد الأساتذة المؤهلين إلى 1500 أستاذ بحلول سنة 2027. ويشكل هذا الإنجاز خطوة مهمة في مجال التعليم المتخصص في الجزائر، كما يدعم حق هذه الفئة في التعليم والمشاركة. وقد وافق مجلس الوزراء على إنشاء هذه المدرسة، التي تعد الأولى من نوعها في أفريقيا، وهي توفر تدريباً في 15 تخصصاً موزعة على خمسة أقسام، تجمع بين التعلم النظري والعملي. بالإضافة إلى ذلك، تم إنشاء مركز لتعليم لغة الإشارة ليكون مرجعاً تدريبياً وطنياً. تهدف المدرسة إلى تعزيز الاندماج التعليمي والاجتماعي. وتخطط لتطوير تخصصات تقنية جديدة مثل الهندسة المدنية والكهربائية لتعزيز فرص العمل للطلاب الصم وتشجيع استخدام لغة الإشارة. الهدف هو جعل الجزائر رائدة في مجال التعليم الشامل في أفريقيا والعالم العربي.',

      missionText2: 'تعمل المدرسة أيضًا على تطوير تخصصات تقنية جديدة، مثل الهندسة المدنية والكهربائية، من أجل توسيع آفاق التعليم أمام الطلبة الصم وتوفير خيارات مهنية واعدة، مع تعزيز استخدام لغة الإشارة في مختلف المجالات و الفضاءات العمومية.\n\nإننا نسير بخطى ثابتة نحو مستقبل تكون فيه الجزائر نموذجًا رائدًا في التعليم الدامج، ليس فقط على الصعيد الوطني، بل أيضًا على المستوى الإفريقي والعربي. وقد لمسنا هذا الطموح من خلال الإهتمام المتزايد من دول عديدة بطلب الاستفادة من تجربتنا الفريدة.',
      keyTrainingAreas: 'مجالات التدريب الرئيسية',
      specializedTraining: 'التكوين المتخصص',
      specializedTrainingDesc: 'برنامج مدته ست سنوات مفتوح لحاملي شهادة البكالوريا، يركز على أحدث منهجيات التدريس للطلاب الصم وضعاف السمع.',
      inclusiveEducation: 'التعليم الشامل',
      inclusiveEducationDesc: 'ملتزمون بتوفير تعليم جيد مكيف للاندماج الاجتماعي والاقتصادي لجميع الطلاب.',
      firstInAfrica: 'الأولى في أفريقيا والعالم العربي',
      firstInAfricaDesc: 'مؤسسة رائدة في تدريب المعلمين المتخصصين لمجتمع الصم في المنطقة.',
      orthophony: 'تقويم النطق',
      orthophonyDesc: 'تقنيات متقدمة في إعادة تأهيل النطق',
      hearingDevices: 'تكنولوجيا أجهزة السمع',
      hearingDevicesDesc: 'تدريب على أجهزة السمع وزراعة القوقعة الحديثة',
      entMedicine: 'أساسيات طب الأنف والأذن والحنجرة',
      entMedicineDesc: 'فهم حالات الأذن والأنف والحنجرة',
      signLanguage: 'بيداغوجيا لغة الإشارة',
      signLanguageDesc: 'منهجيات التدريس باستخدام لغة الإشارة',
    },
    // Timeline
    timeline: {
      badge: 'مسيرتنا',
      title: 'المحطات والإنجازات',
      presidential: 'القرار الرئاسي',
      presidentialDesc: 'قرار الرئيس عبد المجيد تبون بإنشاء المدرسة العليا لأساتذة الصم والبكم',
      inauguration: 'افتتاح المدرسة',
      inaugurationDesc: 'الافتتاح الرسمي من قبل وزير التعليم العالي',
      firstYear: 'السنة الأكاديمية الأولى',
      firstYearDesc: '400 طالب مسجل في 14 تخصص',
      firstGraduation: 'التخرج ',
      firstGraduationDesc: 'تخرج 292 معلم متخصص',
      expansion: 'التوسع',
      expansionDesc: 'الإعلان عن 636 منصب جديد ',
      bac2026: 'القبول لحاملي البكالوريا وبرنامج التكوين (6 سنوات)',
      bac2026Desc: 'ابتداءً من دورة 2026، فُتح الالتحاق بالمدرسة لحاملي شهادة البكالوريا بتخصيص 636 مقعداً جديداً ضمن برنامج تكويني مدته 6 سنوات لإعداد أساتذة متخصصين في تعليم الصم وضعاف السمع',
    },
    // Programs
    programs: {
      badge: 'البرامج الأكاديمية',
      title1: '15 برنامجاً',
      title2: 'دراسياً متخصصاً',
      description: 'يجمع برنامجنا لمدة ست سنوات، المفتوح لحاملي شهادة البكالوريا، بين المواد الأكاديمية التقليدية والتدريب المتطور في منهجيات تعليم الصم.',
      bacProgram: 'برنامج البكالوريا (6 سنوات)',
      bacProgramDesc: 'يزود برنامجنا المتخصص لمدة ست سنوات، المفتوح لحاملي شهادة البكالوريا، المعلمين المستقبليين بجميع المهارات اللازمة لتعليم الطلاب الصم وضعاف السمع بفعالية.',
      sixYear: 'تكوين مكثف لمدة ست سنوات',
      practical: 'تربصات تطبيقية في مدارس متخصصة شريكة',
      medical: 'تدريب طبي متخصص',
      career: 'دعم التوظيف',
      faculty: 'إرشاد من أساتذة خبراء',
      facilities: 'مرافق حديثة',
    },
    // Gallery
    gallery: {
      badge: 'الحياة الجامعية',
      title1: 'الحياة في',
      title2: 'المدرسة العليا',
      campusGallery: 'معرض الحرم الجامعي',
    },
    // Wajihat (Centers)
    wajihat: {
      badge: 'واجهاتنا',
      title1: 'مراكز الابتكار',
      title2: 'والتميز',
      description: 'اكتشف مراكزنا المتخصصة المكرسة لتعزيز ريادة الأعمال والابتكار والتنمية الثقافية داخل مؤسستنا.',
      director: 'المدير',
      achievements: 'الإنجازات الرئيسية',
      entrepreneurship: 'دار المقاولاتية',
      entrepreneurshipDesc: 'مركز تطوير المقاولاتية للمدرسة العليا لأساتذة الصم والبكم، الذي تأسس في 21 جويلية 2024، يهدف إلى تعزيز المقاولاتية الجامعية من خلال شراكة مع وزارتي التعليم العالي واقتصاد المعرفة. يقدم المركز تكوينات لحاملي المشاريع، حيث تخرج منه 72 حامل مشروع. كما تم قبول 03 مشاريع من قبل لجنة CSVF. نظم المركز فعاليات تحسيسية ودورات دراسية، ومسابقة حول أفضل مشروع للذوي الاحتياجات الخاصة في الذكاء الاصطناعي. مؤتمره الدولي في 27 أكتوبر 2025 شهد مشاركة 10 متدخلين من عدة دول عربية.',
      entrepreneurshipAchievements: ['72 حامل مشروع تخرج', '03 مشاريع مقبولة من CSVF', 'مؤتمر دولي بـ 10 متدخلين', 'مسابقة ذكاء اصطناعي ذوي احتياجات', 'فعاليات تحسيسية وتكوينات'],
      incubator: 'حاضنة الاعمال',
      incubatorDesc: 'تهدف الى ترسيخ ثقافة ريادة الاعمال داخل الوسط الاكاديمي من خلال تشجيع الطلبة على الابتكار والمبادرة وتحويل أفكارهم الى مشاريع قابلة للتنغيذ. تقوم بتكوين الطلاب أصحاب المشاريع، ترافقهم وتوجههم في الجوانب الإدارية والتقنية، تسهيل الوصول لمصادر التمويل، ربط الجامعة بمحيطها الاقتصادي، والمساهمة في خلق اقتصاد منتج للثروة.',
      incubatorAchievements: ['تكوين الطلاب أصحاب المشاريع', 'المرافقة والتوجيه في الجوانب الإدارية والتقنية', 'تسهيل الوصول لمصادر التمويل', 'ربط الجامعة بالمحيط الاقتصادي', 'خلق اقتصاد منتج للثروة'],
      ai: 'دار الذكاء الاصطناعي',
      aiDesc: 'منزل الذكاء الاصطناعي في المدرسة العليا لأساتذة الصم والبكم هو منزل ذكاء اصطناعي متميز مكرس لاستكشاف وتعلم والابتكار في مجال الذكاء الاصطناعي. إنه يعزز التعاون متعدد التخصصات من خلال جمع الطلاب والباحثين والمهنيين من خلفيات متنوعة لتبادل المعرفة والخبرة. يوفر منزل الذكاء الاصطناعي أيضًا الدعم التربوي للطلاب والمعلمين لدمج تقنيات الذكاء الاصطناعي في المناهج الدراسية، مما يجعل التعليم أكثر تفاعلية وفعالية. كما يشجع البحث والتطوير من خلال تشجيع مشاريع البحث الأكاديمي والابتكارات التقنية المتوافقة مع التطورات العالمية في الذكاء الاصطناعي. علاوة على ذلك، وبصفته جزءًا من مسؤوليته الاجتماعية، يقوم منزل الذكاء الاصطناعي بالتوعية بالتحديات الأخلاقية والمجتمعية المرتبطة بالذكاء الاصطناعي بين المجتمع الجامعي وعامة الجمهور.',
      aiAchievements: ['تطوير أدوات لغة الإشارة بالذكاء الاصطناعي', 'نشر 8 أوراق بحثية', 'تدريب أكثر من 100 طالب على أساسيات الذكاء الاصطناعي'],
      tisc: 'مركز دعم الابتكار والتكنولوجيا CATI',
      tiscDesc: 'مركز دعم الابتكار والتكنولوجيا CATI هو شراكة بين المدرسة العليا لأساتذة الصم والبكم (ENSSM) والمعهد الوطني الجزائري للملكية الصناعية (INAPI) الذي يعتبر الهيئة الوطنية في الجزائر المسؤولة عن حماية وتعزيز الملكية الصناعية، بما في ذلك براءات الاختراع والعلامات التجارية والرسوم والنماذج الصناعية والمعلومات الجغرافية. يلعب CATI دورا رئيسيا في العلاقة بين INAPI والمنظمة العالمية للملكية الفكرية (OMPI)، وهو مبادرة تهدف لتعزيز الابتكار من خلال توفير الوصول إلى خدمات المعلومات.',
      tiscAchievements: ['شراكة مع INAPI', 'الوصول إلى موارد OMPI', 'دعم تقديم براءات الاختراع', 'حماية الملكية الصناعية', 'تعزيز الابتكار'],
      cultural: 'المناسبات الثقافية والعلمية',
      culturalDesc: 'تعزيز التبادل الثقافي والتعاون العلمي، وتنظيم الفعاليات والمعارض والبرامج التي تحتفي بالتنوع وتعزز المعرفة العلمية.',
      culturalAchievements: ['تنظيم أكثر من 25 فعالية ثقافية', 'استضافة مؤتمرات دولية', 'إقامة شراكات أكاديمية'],
    },
    // News & Events
    news: {
      badge: 'الأخبار والمستجدات',
      title1: 'آخر أخبار',
      title2: 'المدرسة',
      description: 'تابع آخر مستجدات القبول والفعاليات والشراكات والابتكار في المدرسة العليا لأساتذة الصم والبكم.',
      all: 'الكل',
      featured: 'مميز',
      readMore: 'اقرأ المزيد',
      close: 'إغلاق',
      empty: 'لا توجد أخبار في هذا التصنيف حالياً.',
      categories: { admissions: 'القبول', events: 'الفعاليات', partnerships: 'الشراكات', innovation: 'الابتكار' },
    },
    events: {
      badge: 'أجندة المدرسة',
      title1: 'الفعاليات',
      title2: 'والأنشطة',
      description: 'اكتشف الحفلات وأيام الأبواب المفتوحة والورشات التي تنظمها المدرسة.',
      date: 'التاريخ',
      time: 'التوقيت',
      location: 'المكان',
      viewDetails: 'عرض التفاصيل',
      close: 'إغلاق',
      prev: 'السابق',
      next: 'التالي',
    },
    // Admission
    admission: {
      badge: 'انضم إلينا',
      title1: 'ابدأ رحلتك',
      title2: 'اليوم',
      description: 'انضم إلى المؤسسة الجزائرية الرائدة في تكوين معلمي الطلاب الصم وضعاف السمع، وسجّل بشهادة البكالوريا عبر الملف الوطني الموحد (DUN).',
      processTitle: 'إجراءات القبول',
      step1: 'شهادة البكالوريا',
      step1Desc: 'الحصول على شهادة البكالوريا الجزائرية أو شهادة معادلة لها',
      step2: 'التسجيل الوطني (DUN)',
      step2Desc: 'التسجيل عبر الملف الوطني الموحد (DUN) بين شهري جويلية وسبتمبر من كل سنة',
      step3: 'المقابلة التحفيزية',
      step3Desc: 'إجراء مقابلة تحفيزية أمام لجنة، مع توفير ترتيبات خاصة للمترشحين الصم وضعاف السمع',
      step4: 'التسجيل',
      step4Desc: 'يسجل المرشحون الناجحون في برنامج التكوين لمدة ست سنوات',
      requirementsTitle: 'المتطلبات',
      req1: 'شهادة البكالوريا الجزائرية أو شهادة معادلة لها',
      req2: 'اجتياز مقابلة تحفيزية أمام لجنة',
      req3: 'إبداء اهتمام حقيقي بالتربية الخاصة',
      req4: 'ترتيبات خاصة للمترشحين الصم وضعاف السمع',
      req5: 'مفتوح للطلاب الدوليين (العرب والأفارقة)',
      bannerLabel: 'التسجيل عبر الملف الوطني الموحد',
      bannerMain: 'جويلية – سبتمبر',
      bannerSub: 'التكوين مجاني للطلبة الجزائريين',
    },
    // Contact
    contact: {
      badge: 'تواصل معنا',
      title: 'اتصل بنا',
      description: 'هل لديك أسئلة؟ نحن هنا لمساعدتك في بدء رحلتك في التعليم المتخصص.',
      visitUs: 'زورنا',
      followUs: 'تابعنا',
      ministry: 'الوزارة',
      visitCampus: 'قم بزيارة حرمنا الجامعي',
      campusLocation: 'يقع في قلب بني مسوس، الجزائر العاصمة',
      openInMaps: 'افتح في خرائط جوجل',
    },
    // Rendez-vous
    rendezvous: {
      badge: 'مكتب المدير',
      title1: 'احجز',
      title2: 'موعد',
      description: 'حدد موعدًا مع مدير المدرسة لمناقشة القبول والبرامج أو أي استفسارات حول المؤسسة.',
      button: 'احجز الآن',
    },
    // Footer
    footer: {
      subtitle: 'المدرسة العليا لأساتذة الصم والبكم',
      description: 'تدريب معلمين متخصصين من أجل مستقبل أكثر شمولاً. أول مؤسسة من نوعها في أفريقيا والعالم العربي.',
      quickLinks: 'روابط سريعة',
      officialLinks: 'الروابط الرسمية',
      ministryLink: 'وزارة التعليم العالي',
      facebookLink: 'الصفحة الرسمية على فيسبوك',
      platformsLink: 'منصات وزارة التعليم العالي',
      rights: 'جميع الحقوق محفوظة.',
    },
  },
};

type AcademicDept = 'stem' | 'languages' | 'humanities' | 'arts_sports';

interface SpecializationItem {
  id: string;
  name: string;
  nameAr: string;
  category: AcademicDept;
  categoryNameEn: string;
  categoryNameAr: string;
  icon: typeof Laptop;
  degreeEn: string;
  degreeAr: string;
  descEn: string;
  descAr: string;
  skillsEn: string[];
  skillsAr: string[];
}

const academicDepartments = [
  { id: 'all' as const, nameEn: 'All Specializations', nameAr: 'جميع التخصصات', count: 15, icon: BookOpen },
  { id: 'stem' as const, nameEn: 'Sciences & Technology', nameAr: 'العلوم والتكنولوجيا', count: 6, icon: Cpu },
  { id: 'languages' as const, nameEn: 'Languages & Literature', nameAr: 'الآداب واللغات', count: 4, icon: Languages },
  { id: 'humanities' as const, nameEn: 'Human & Social Sciences', nameAr: 'العلوم الإنسانية والاجتماعية', count: 3, icon: Globe },
  { id: 'arts_sports' as const, nameEn: 'Arts & Physical Education', nameAr: 'الفنون والتربية البدنية', count: 2, icon: Trophy },
];

const specializations: SpecializationItem[] = [
  // Sciences & Technology (6)
  {
    id: 'cs',
    name: 'Computer Science',
    nameAr: 'الإعلام الآلي',
    category: 'stem',
    categoryNameEn: 'Sciences & Technology',
    categoryNameAr: 'العلوم والتكنولوجيا',
    icon: Laptop,
    degreeEn: 'Secondary School Teacher (PES)',
    degreeAr: 'أستاذ التعليم الثانوي (PES)',
    descEn: 'Software engineering, algorithms, and AI-driven assistive technologies adapted for deaf learners.',
    descAr: 'تكوين بيداغوجي وتكنولوجي متقدم في البرمجة، هندسة النظم، وتقنيات الذكاء الاصطناعي الموجهة لتعليم الصم.',
    skillsEn: ['Coding & Sign Language', 'Educational AI', 'Accessible Platforms'],
    skillsAr: ['البرمجة ولغة الإشارة', 'الذكاء الاصطناعي البيداغوجي', 'تطوير المنصات التعليمية'],
  },
  {
    id: 'math',
    name: 'Mathematics',
    nameAr: 'الرياضيات',
    category: 'stem',
    categoryNameEn: 'Sciences & Technology',
    categoryNameAr: 'العلوم والتكنولوجيا',
    icon: Calculator,
    degreeEn: 'Secondary School Teacher (PES)',
    degreeAr: 'أستاذ التعليم الثانوي (PES)',
    descEn: 'Pure and applied mathematics taught via advanced visual pedagogy, geometry, and specialized signs.',
    descAr: 'تدريس الرياضيات المجردة والتطبيقية باستخدام أحدث الوسائط البصرية والبيداغوجيا المكيفة للصم.',
    skillsEn: ['Geometry & Analysis', 'Visual Didactics', 'Adaptive Problem Solving'],
    skillsAr: ['الهندسة والتحليل', 'الديداكتيك البصري', 'حل المسائل المكيفة'],
  },
  {
    id: 'physics',
    name: 'Physics-Chemistry',
    nameAr: 'الفيزياء والكيمياء',
    category: 'stem',
    categoryNameEn: 'Sciences & Technology',
    categoryNameAr: 'العلوم والتكنولوجيا',
    icon: FlaskConical,
    degreeEn: 'Secondary School Teacher (PES)',
    degreeAr: 'أستاذ التعليم الثانوي (PES)',
    descEn: 'Experimental sciences, laboratory protocols, and physical phenomena visual interpretation.',
    descAr: 'التجارب المخبرية الآمنة، المفاهيم الفيزيائية والكيميائية، وتبسيط العلوم التجريبية بلغة الإشارة.',
    skillsEn: ['Adaptive Lab Work', 'Safety & Chemistry', 'Visual Physics'],
    skillsAr: ['التجارب المخبرية المكيفة', 'السلامة والكيمياء العامة', 'الفيزياء البصرية'],
  },
  {
    id: 'biology',
    name: 'Biological Sciences',
    nameAr: 'علوم الحياة والأرض',
    category: 'stem',
    categoryNameEn: 'Sciences & Technology',
    categoryNameAr: 'العلوم والتكنولوجيا',
    icon: Dna,
    degreeEn: 'Secondary School Teacher (PES)',
    degreeAr: 'أستاذ التعليم الثانوي (PES)',
    descEn: 'Life sciences, human anatomy, ecology, and specialized medical and biological sign lexicons.',
    descAr: 'علوم الحياة، علم وظائف الأعضاء، وعلم الوراثة مع التركيز على النماذج التفاعلية ثلاثية الأبعاد.',
    skillsEn: ['Biological Sign Terms', '3D Anatomy Models', 'Ecology & Health'],
    skillsAr: ['المصطلحات البيولوجية الإشارية', 'النماذج ثلاثية الأبعاد', 'علوم البيئة والصحة'],
  },
  {
    id: 'electrical',
    name: 'Electrical Engineering',
    nameAr: 'الهندسة الكهربائية',
    category: 'stem',
    categoryNameEn: 'Sciences & Technology',
    categoryNameAr: 'العلوم والتكنولوجيا',
    icon: Zap,
    degreeEn: 'Secondary School Teacher (PES)',
    degreeAr: 'أستاذ التعليم الثانوي (PES)',
    descEn: 'Electric circuits, automated systems, electronics, and digital technical lab work.',
    descAr: 'الدوائر الكهربائية، الإلكترونيات الرقمية، وأنظمة الطاقة مع برامج المحاكاة الهندسية المتقدمة.',
    skillsEn: ['Electronics & Simulation', 'Automated Systems', 'Technical Workshops'],
    skillsAr: ['الإلكترونيات والمحاكاة', 'الأنظمة الآلية', 'ورشات التطبيق التقني'],
  },
  {
    id: 'process',
    name: 'Process Engineering',
    nameAr: 'هندسة الطرائق',
    category: 'stem',
    categoryNameEn: 'Sciences & Technology',
    categoryNameAr: 'العلوم والتكنولوجيا',
    icon: Cpu,
    degreeEn: 'Secondary School Teacher (PES)',
    degreeAr: 'أستاذ التعليم الثانوي (PES)',
    descEn: 'Industrial chemical transformations, thermodynamic operations, and quality control methodologies.',
    descAr: 'التحويلات الكيميائية الصناعية، مراقبة الجودة، والعمليات التحويلية المتقدمة في البيئات المهنية.',
    skillsEn: ['Transformation Processes', 'Industrial QC', 'Engineering Schematics'],
    skillsAr: ['العمليات التحويلية', 'مراقبة الجودة الصناعية', 'المخططات الهندسية'],
  },

  // Languages & Literature (4)
  {
    id: 'arabic',
    name: 'Arabic Language & Literature',
    nameAr: 'اللغة العربية وآدابها',
    category: 'languages',
    categoryNameEn: 'Languages & Literature',
    categoryNameAr: 'الآداب واللغات',
    icon: BookA,
    degreeEn: 'Secondary School Teacher (PES)',
    degreeAr: 'أستاذ التعليم الثانوي (PES)',
    descEn: 'Classical Arabic grammar, rhetoric, literary analysis, and visual reading pedagogy.',
    descAr: 'علوم اللسان العربي، الأدب، النحو، وبيداغوجيا القراءة والكتابة المكيفة للتلاميذ الصم.',
    skillsEn: ['Grammar & Rhetoric', 'Visual Reading Didactics', 'Arabic Sign Lexicons'],
    skillsAr: ['البلاغة وقواعد النحو', 'ديداكتيك القراءة البصرية', 'المعاجم الإشارية العربية'],
  },
  {
    id: 'english',
    name: 'English Language',
    nameAr: 'اللغة الإنجليزية',
    category: 'languages',
    categoryNameEn: 'Languages & Literature',
    categoryNameAr: 'الآداب واللغات',
    icon: Languages,
    degreeEn: 'Secondary School Teacher (PES)',
    degreeAr: 'أستاذ التعليم الثانوي (PES)',
    descEn: 'English linguistic mastery, written literacy development, and International Sign (IS) integration.',
    descAr: 'تعليم اللغة الإنجليزية كلغة عالمية، والترجمة بين لغة الإشارة الدولية والإنجليزية المكتوبة.',
    skillsEn: ['International Sign (IS)', 'Visual Grammar', 'Academic Translation'],
    skillsAr: ['لغة الإشارة الدولية (IS)', 'القواعد والمحادثة البصرية', 'الترجمة الأكاديمية'],
  },
  {
    id: 'french',
    name: 'French Language',
    nameAr: 'اللغة الفرنسية',
    category: 'languages',
    categoryNameEn: 'Languages & Literature',
    categoryNameAr: 'الآداب واللغات',
    icon: Quote,
    degreeEn: 'Secondary School Teacher (PES)',
    degreeAr: 'أستاذ التعليم الثانوي (PES)',
    descEn: 'French syntax, literature, visual phonology correspondence, and written composition.',
    descAr: 'الأدب واللغة الفرنسية، تقنيات التواصل اللساني المكتوب، والمقاربات البيداغوجية المتكيفة.',
    skillsEn: ['French Linguistics', 'Literary Analysis', 'Adaptive Writing Pedagogy'],
    skillsAr: ['اللسانيات الفرنسية', 'التحليل الأدبي والإنشاء', 'بيداغوجيا الكتابة المكيفة'],
  },
  {
    id: 'amazigh',
    name: 'Amazigh Language',
    nameAr: 'اللغة الأمازيغية',
    category: 'languages',
    categoryNameEn: 'Languages & Literature',
    categoryNameAr: 'الآداب واللغات',
    icon: Crown,
    degreeEn: 'Secondary School Teacher (PES)',
    degreeAr: 'أستاذ التعليم الثانوي (PES)',
    descEn: 'Tifinagh script, Amazigh linguistics, national linguistic heritage, and adaptive pedagogical signs.',
    descAr: 'تدريس اللغة الأمازيغية بخط تيفيناغ، الموروث اللغوي والثقافي، والتطبيقات الإشارية المكيفة.',
    skillsEn: ['Tifinagh & Literature', 'Heritage Sign Terms', 'Language Didactics'],
    skillsAr: ['خط تيفيناغ والأدب الأمازيغي', 'المصطلحات التراثية', 'الديداكتيك اللغوي'],
  },

  // Human & Social Sciences (3)
  {
    id: 'islamic',
    name: 'Islamic Studies',
    nameAr: 'العلوم الإسلامية',
    category: 'humanities',
    categoryNameEn: 'Human & Social Sciences',
    categoryNameAr: 'العلوم الإنسانية والاجتماعية',
    icon: Moon,
    degreeEn: 'Secondary School Teacher (PES)',
    degreeAr: 'أستاذ التعليم الثانوي (PES)',
    descEn: 'Islamic jurisprudence, ethics, theology, and standardized religious sign language terminology.',
    descAr: 'علوم الشريعة والتربية الإسلامية، فقه المعاملات، والمصطلحات الدينية بلغة الإشارة المعتمدة.',
    skillsEn: ['Islamic Values & Ethics', 'Religious Sign Lexicon', 'History & Biography'],
    skillsAr: ['القيم والأخلاق الإسلامية', 'المصطلحات الدينية الإشارية', 'السيرة والتاريخ'],
  },
  {
    id: 'history',
    name: 'History & Geography',
    nameAr: 'التاريخ والجغرافيا',
    category: 'humanities',
    categoryNameEn: 'Human & Social Sciences',
    categoryNameAr: 'العلوم الإنسانية والاجتماعية',
    icon: Globe,
    degreeEn: 'Secondary School Teacher (PES)',
    degreeAr: 'أستاذ التعليم الثانوي (PES)',
    descEn: 'Algerian and world history, modern cartography, geopolitical analysis, and interactive visual chronologies.',
    descAr: 'تاريخ الجزائر والعالم، الجغرافيا والخرائط الرقمية المعززة بالوسائط البصرية التفاعلية.',
    skillsEn: ['Cartography & GIS', 'Visual Historical Archives', 'Geopolitical Studies'],
    skillsAr: ['قراءة الخرائط والبيانات', 'التوثيق التاريخي المرئي', 'الجغرافيا السياسية والاقتصادية'],
  },
  {
    id: 'economics',
    name: 'Economics & Management',
    nameAr: 'الاقتصاد والتسيير',
    category: 'humanities',
    categoryNameEn: 'Human & Social Sciences',
    categoryNameAr: 'العلوم الإنسانية والاجتماعية',
    icon: TrendingUp,
    degreeEn: 'Secondary School Teacher (PES)',
    degreeAr: 'أستاذ التعليم الثانوي (PES)',
    descEn: 'Financial accounting, corporate management, macroeconomics, entrepreneurship, and commercial law.',
    descAr: 'مبادئ الاقتصاد والمحاسبة المالية، إدارة المؤسسات، والتسيير المالي والمقاولاتية.',
    skillsEn: ['Accounting & Financial Analysis', 'Entrepreneurship', 'Economic Legislation'],
    skillsAr: ['المحاسبة والتحليل المالي', 'إدارة المشاريع والمقاولاتية', 'التشريعات الاقتصادية'],
  },

  // Arts & Physical Education (2)
  {
    id: 'sports',
    name: 'Physical Education & Sports',
    nameAr: 'التربية البدنية والرياضية',
    category: 'arts_sports',
    categoryNameEn: 'Arts & Physical Education',
    categoryNameAr: 'الفنون والتربية البدنية',
    icon: Trophy,
    degreeEn: 'Secondary School Teacher (PES)',
    degreeAr: 'أستاذ التعليم الثانوي (PES)',
    descEn: 'Adaptive physical training, Deaflympics athletic rules, biomechanics, and sports coaching psychology.',
    descAr: 'التدريب الرياضي المكيف، الألعاب البارالمبية ورياضات الصم، والإعداد البدني والنفسي للرياضيين.',
    skillsEn: ['Deaflympics Regulations', 'Fitness & Conditioning', 'Coaching & Officiating'],
    skillsAr: ['رياضات الصم وقوانينها', 'اللياقة البدنية وإعادة التأهيل', 'التحكيم والتوجيه الرياضي'],
  },
  {
    id: 'arts',
    name: 'Fine & Visual Arts',
    nameAr: 'الفنون التشكيلية والتربية الفنية',
    category: 'arts_sports',
    categoryNameEn: 'Arts & Physical Education',
    categoryNameAr: 'الفنون والتربية البدنية',
    icon: Palette,
    degreeEn: 'Secondary School Teacher (PES)',
    degreeAr: 'أستاذ التعليم الثانوي (PES)',
    descEn: 'Visual arts expression, drawing, graphic design, artistic history, and visual sensory creativity.',
    descAr: 'التعبير الفني البصري، الرسم والتصميم الجرافيكي، تاريخ الفن، واستثمار الحاسة البصرية في الإبداع.',
    skillsEn: ['Graphic Design & Drawing', 'Aesthetics & Art History', 'Exhibitions & Workshops'],
    skillsAr: ['الرسم والتصميم الجرافيكي', 'علم الجمال وتاريخ الفن', 'المعارض والورشات الإبداعية'],
  },
];

const stats = [
  { value: 600, suffix: '+', suffixAr: '+', labelKey: 'studentsEnrolled' as const, icon: Users, color: 'from-blue-500 to-cyan-500' },
  { value: 15, suffix: '', suffixAr: '', labelKey: 'specialitie' as const, icon: BookOpen, color: 'from-purple-500 to-pink-500' },
  { value: 6, suffix: ' Years', suffixAr: ' سنوات', labelKey: 'bacProgram' as const, icon: Clock, color: 'from-orange-500 to-red-500' },
  { value: 1000, suffix: '+', suffixAr: '+', labelKey: 'firstGraduates' as const, icon: Award, color: 'from-green-500 to-emerald-500' },
];

const galleryImages: { url: string; alt: string; altAr?: string }[] = [
  { url: '/assets/university compus.jpeg', alt: 'University campus', altAr: 'الحرم الجامعي' },
  { url: '/assets/classroom.jpg', alt: 'Classroom learning', altAr: 'قاعات التدريس' },
  { url: '/assets/student studying.jpeg', alt: 'Students studying', altAr: 'الطلبة أثناء الدراسة' },
  { url: '/assets/graduation.jfif', alt: 'Graduation ceremony', altAr: 'حفل التخرج' },
  { url: '/assets/Teacher in classroom.jpeg', alt: 'Teacher in classroom', altAr: 'التكوين داخل الأقسام' },
  { url: '/assets/Education concept.jfif', alt: 'Education concept', altAr: 'المفاهيم التربوية والتعليمية' },
  { url: '/assets/gallery/1.jpg', alt: 'School Activities 1', altAr: 'أنشطة وفعاليات المدرسة 1' },
  { url: '/assets/gallery/2.jpg', alt: 'School Activities 2', altAr: 'أنشطة وفعاليات المدرسة 2' },
  { url: '/assets/gallery/3.jpg', alt: 'Campus Moments 3', altAr: 'لحظات من الحرم الجامعي 3' },
  { url: '/assets/gallery/5.jpg', alt: 'Student Training 5', altAr: 'تكوين الطلبة والأساتذة 5' },
  { url: '/assets/gallery/6.jpg', alt: 'Educational Session 6', altAr: 'جلسة تعليمية وتطبيقية 6' },
  { url: '/assets/gallery/7.jpg', alt: 'School Life 7', altAr: 'الحياة الطلابية بالمدرسة 7' },
  { url: '/assets/gallery/8.jpg', alt: 'Campus Facilities 8', altAr: 'مرافق المدرسة العليا 8' },
  { url: '/assets/gallery/10.jpg', alt: 'Academic Activities 10', altAr: 'الأنشطة الأكاديمية 10' },
  { url: '/assets/gallery/12.jpg', alt: 'Classroom Experience 12', altAr: 'التجربة الصفية 12' },
  { url: '/assets/gallery/13.jpg', alt: 'Workshops & Events 13', altAr: 'ورشات العمل والفعاليات 13' },
  { url: '/assets/gallery/14.jpg', alt: 'Teacher Training 14', altAr: 'إعداد وتكوين الأساتذة 14' },
  { url: '/assets/gallery/15.jpg', alt: 'Specialized Methods 15', altAr: 'مناهج وطرائق متخصصة 15' },
  { url: '/assets/gallery/19.jpg', alt: 'Community & Culture 19', altAr: 'التواصل والنشاط الثقافي 19' },
  { url: '/assets/gallery/22.jpg', alt: 'Campus Atmosphere 22', altAr: 'أجواء الحرم الجامعي 22' },
  { url: '/assets/gallery/45.jpg', alt: 'Educational Programs 45', altAr: 'البرامج التكوينية والتربوية 45' },
  { url: '/assets/gallery/47.jpg', alt: 'Student Collaboration 47', altAr: 'العمل الجماعي الطلابي 47' },
  { url: '/assets/gallery/49.jpg', alt: 'Honors & Milestones 49', altAr: 'التكريم والمحطات البارزة 49' },
  { url: '/assets/gallery/54.jpg', alt: 'Interactive Learning 54', altAr: 'التعلم التفاعلي 54' },
  { url: '/assets/gallery/55.jpg', alt: 'School Community 55', altAr: 'أسرة المدرسة العليا 55' },
];

type Localized = { en: string; ar: string };
type NewsCategory = 'admissions' | 'events' | 'partnerships' | 'innovation';

// TODO: replace with your real news. Each item has English + Arabic text.
const newsItems: {
  id: string;
  category: NewsCategory;
  image: string;
  date?: Localized;
  title: Localized;
  excerpt: Localized;
  body: Localized[];
}[] = [
  {
    id: 'bac-admission',
    category: 'admissions',
    image: '/assets/21.jpg',
    date: { en: '2026 session', ar: 'دورة 2026' },
    title: { en: 'Admission by Baccalaureate for the 6-Year Program', ar: 'القبول بشهادة البكالوريا في برنامج التكوين لمدة 6 سنوات' },
    excerpt: { en: 'From the 2026 session, access to the school is also open on the basis of the baccalaureate diploma.', ar: 'ابتداءً من دورة 2026، أصبح الالتحاق بالمدرسة مفتوحاً أيضاً على أساس شهادة البكالوريا.' },
    body: [
      { en: 'ENSSM offers a six-year training program for baccalaureate holders, preparing students to teach deaf and hard-of-hearing learners. From the 2026 session, admission to the school is also open on the basis of the baccalaureate.', ar: 'تقدم المدرسة برنامج تكوين مدته ست سنوات لحاملي شهادة البكالوريا، يؤهل الطلبة لتعليم الصم وضعاف السمع. وابتداءً من دورة 2026، أصبح الالتحاق بالمدرسة مفتوحاً أيضاً على أساس شهادة البكالوريا.' },
      { en: 'Registration is done through the national unique file (DUN) between July and September each year, followed by a motivation interview with a jury. Training is free for Algerian students.', ar: 'يتم التسجيل عبر الملف الوطني الموحد (DUN) بين شهري جويلية وسبتمبر من كل سنة، يليه إجراء مقابلة تحفيزية أمام لجنة. والتكوين مجاني للطلبة الجزائريين.' },
    ],
  },
  {
    id: 'graduation-2026',
    category: 'events',
    image: '/assets/c.jfif',
    date: { en: '15 July 2026', ar: '15 جويلية 2026' },
    title: { en: 'Graduation Ceremony 2026', ar: 'حفل تخرج 2026' },
    excerpt: { en: 'A celebration in the main auditorium with the opening ceremony, diploma distribution and the valedictorian speech.', ar: 'احتفال في المدرج الرئيسي يتضمن حفل الافتتاح وتوزيع الشهادات وكلمة أول الدفعة.' },
    body: [
      { en: 'The ceremony takes place in the main auditorium from 10:00 to 14:00, with the opening ceremony, the distribution of diplomas, the valedictorian speech and a reception with photos.', ar: 'يقام الحفل في المدرج الرئيسي من الساعة 10:00 إلى 14:00، ويشمل حفل الافتتاح وتوزيع الشهادات وكلمة أول الدفعة وحفل استقبال مع التقاط الصور.' },
      { en: 'Ceremonial dress is required, guests are welcome and parking is available on site.', ar: 'اللباس الرسمي مطلوب، والضيوف مرحب بهم، وتتوفر مواقف للسيارات داخل الحرم.' },
    ],
  },
  {
    id: 'open-house-2026',
    category: 'events',
    image: '/assets/11.jpg',
    date: { en: '20 August 2026', ar: '20 أوت 2026' },
    title: { en: 'Open Day 2026', ar: 'يوم الأبواب المفتوحة 2026' },
    excerpt: { en: 'Campus tours, classroom demonstrations and admission advice across the whole campus.', ar: 'زيارات للحرم الجامعي وعروض تطبيقية ونصائح حول القبول عبر كامل الحرم.' },
    body: [
      { en: 'Visitors can tour the campus, meet professors, attend classroom demonstrations, get admission advice and discover student activities, from 09:00 to 17:00.', ar: 'يمكن للزوار التجول في الحرم الجامعي ولقاء الأساتذة وحضور عروض تطبيقية داخل القاعات والحصول على نصائح حول القبول واكتشاف الأنشطة الطلابية، من الساعة 09:00 إلى 17:00.' },
    ],
  },
  {
    id: 'sign-language-workshop',
    category: 'events',
    image: '/assets/cati4.jpeg',
    date: { en: '5–7 September 2026', ar: '5 – 7 سبتمبر 2026' },
    title: { en: 'Advanced Sign Language Workshop', ar: 'ورشة متقدمة في لغة الإشارة' },
    excerpt: { en: 'Three days on advanced vocabulary, facial expression, storytelling and teaching methodologies.', ar: 'ثلاثة أيام حول المفردات المتقدمة وتعابير الوجه والسرد ومنهجيات التدريس.' },
    body: [
      { en: 'The workshop runs daily from 09:00 to 16:00 in Room 4 of the main building and covers advanced vocabulary, facial expressions and body language, storytelling in sign language and teaching methodologies.', ar: 'تقام الورشة يومياً من 09:00 إلى 16:00 في القاعة 4 بالمبنى الرئيسي، وتتناول المفردات المتقدمة وتعابير الوجه ولغة الجسد والسرد بلغة الإشارة ومنهجيات التدريس.' },
      { en: 'Places are limited to 25 participants.', ar: 'عدد المقاعد محدود بـ 25 مشاركاً.' },
    ],
  },
  {
    id: 'partnerships',
    category: 'partnerships',
    image: '/assets/35.jpg',
    title: { en: 'A Growing Network of 15+ Partnerships', ar: 'شبكة متنامية من أكثر من 15 شراكة' },
    excerpt: { en: 'ENSSM collaborates with national and international institutions on research, training and accessibility.', ar: 'تتعاون المدرسة مع مؤسسات وطنية ودولية في مجالات البحث والتكوين وإمكانية الوصول.' },
    body: [
      { en: 'ENSSM has developed more than 15 partnerships, including Paris 8 University (France), the University of Tunis, the Ministry of National Education, the National Federation of the Deaf of Algeria, the Saudi Deaf Sports Federation, the Arab Academy for the Development of Training Activities (Egypt) and the University Publications Office (Algeria).', ar: 'طورت المدرسة أكثر من 15 شراكة، من بينها جامعة باريس 8 (فرنسا)، وجامعة تونس، ووزارة التربية الوطنية، والفدرالية الوطنية للصم في الجزائر، والاتحاد السعودي لرياضات الصم، والأكاديمية العربية لتطوير الأنشطة التدريبية (مصر)، وديوان المطبوعات الجامعية (الجزائر).' },
      { en: 'These partnerships give students and teachers access to exchanges and international training.', ar: 'تتيح هذه الشراكات للطلبة والأساتذة الاستفادة من التبادل والتكوين الدولي.' },
    ],
  },
];

const newsCategories: NewsCategory[] = ['admissions', 'events', 'partnerships'];
const newsCategoryStyles: Record<NewsCategory, string> = {
  admissions: 'bg-blue-100 text-blue-700',
  events: 'bg-purple-100 text-purple-700',
  partnerships: 'bg-emerald-100 text-emerald-700',
  innovation: 'bg-orange-100 text-orange-700',
};

// Events carousel data (images: put carousel1.jpg ... carousel3.jpg in /public/assets)
const eventItems: {
  id: string;
  icon: typeof GraduationCap;
  image: string;
  fallback: string;
  grad: string;
  softText: string;
  accent: string;
  title: Localized;
  date: Localized;
  time: Localized;
  location: Localized;
  listTitle: Localized;
  list: Localized[];
  note?: Localized;
}[] = [
  {
    id: 'graduation',
    icon: GraduationCap,
    image: '/assets/carousel1.jpg',
    fallback: '/assets/21.jpg',
    grad: 'from-blue-500 to-indigo-600',
    softText: 'text-blue-300',
    accent: 'text-blue-600',
    title: { en: 'Graduation Ceremony 2026', ar: 'حفل تخرج 2026' },
    date: { en: '15 July 2026', ar: '15 جويلية 2026' },
    time: { en: '10:00 – 14:00', ar: '10:00 – 14:00' },
    location: { en: 'Main auditorium', ar: 'المدرج الرئيسي' },
    listTitle: { en: 'Event schedule', ar: 'برنامج الحفل' },
    list: [
      { en: '10:00 – Opening ceremony', ar: '10:00 – حفل الافتتاح' },
      { en: '11:00 – Diploma distribution', ar: '11:00 – توزيع الشهادات' },
      { en: '12:30 – Valedictorian speech', ar: '12:30 – كلمة أول الدفعة' },
      { en: '13:00 – Reception & photos', ar: '13:00 – حفل استقبال والتقاط الصور' },
    ],
    note: { en: 'Ceremonial dress required, guests welcome, on-site parking available.', ar: 'اللباس الرسمي مطلوب، والضيوف مرحب بهم، وتتوفر مواقف للسيارات داخل الحرم.' },
  },
  {
    id: 'openhouse',
    icon: DoorOpen,
    image: '/assets/carousel2.jpg',
    fallback: '/assets/99.jpg',
    grad: 'from-emerald-500 to-green-600',
    softText: 'text-emerald-300',
    accent: 'text-emerald-600',
    title: { en: 'Open Day 2026', ar: 'يوم الأبواب المفتوحة 2026' },
    date: { en: '20 August 2026', ar: '20 أوت 2026' },
    time: { en: '09:00 – 17:00', ar: '09:00 – 17:00' },
    location: { en: 'Entire campus', ar: 'كامل الحرم الجامعي' },
    listTitle: { en: 'What to expect', ar: 'ماذا ينتظرك' },
    list: [
      { en: 'Campus tours', ar: 'زيارات للحرم الجامعي' },
      { en: 'Meet the professors', ar: 'لقاء الأساتذة' },
      { en: 'Classroom demonstrations', ar: 'عروض تطبيقية داخل القاعات' },
      { en: 'Admission advice', ar: 'نصائح حول القبول' },
      { en: 'Student activities', ar: 'أنشطة طلابية' },
    ],
  },
  {
    id: 'workshop',
    icon: Hand,
    image: '/assets/carousel3.jpg',
    fallback: '/assets/17.jpg',
    grad: 'from-cyan-500 to-sky-600',
    softText: 'text-cyan-300',
    accent: 'text-cyan-600',
    title: { en: 'Advanced Sign Language Workshop', ar: 'ورشة متقدمة في لغة الإشارة' },
    date: { en: '5–7 September 2026', ar: '5 – 7 سبتمبر 2026' },
    time: { en: '09:00 – 16:00 daily', ar: '09:00 – 16:00 يومياً' },
    location: { en: 'Room 4, main building', ar: 'القاعة 4، المبنى الرئيسي' },
    listTitle: { en: 'Workshop topics', ar: 'محاور الورشة' },
    list: [
      { en: 'Advanced vocabulary', ar: 'مفردات متقدمة' },
      { en: 'Facial expressions and body language', ar: 'تعابير الوجه ولغة الجسد' },
      { en: 'Storytelling in sign language', ar: 'السرد بلغة الإشارة' },
      { en: 'Teaching methodologies', ar: 'منهجيات التدريس' },
    ],
    note: { en: 'Limited places: 25 participants.', ar: 'عدد المقاعد محدود: 25 مشاركاً.' },
  },
];

// <img> that falls back to another image if the first one is missing
function FallbackImage({ src, fallback, alt, className }: { src: string; fallback?: string; alt: string; className?: string }) {
  const [current, setCurrent] = useState(src);
  useEffect(() => { setCurrent(src); }, [src]);
  return (
    <img
      src={current}
      alt={alt}
      className={className}
      loading="lazy"
      onError={() => { if (fallback && current !== fallback) setCurrent(fallback); }}
    />
  );
}


function AnimatedCounter({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          let start = 0;
          const end = value;
          const duration = 2000;
          const increment = end / (duration / 16);

          const timer = setInterval(() => {
            start += increment;
            if (start >= end) {
              setCount(end);
              clearInterval(timer);
            } else {
              setCount(Math.floor(start));
            }
          }, 16);
        }
      },
      { threshold: 0.5 }
    );

    const element = document.getElementById(`counter-${value}`);
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, [value, hasAnimated]);

  return (
    <span id={`counter-${value}`} className="tabular-nums">
      {count}{suffix}
    </span>
  );
}

export default function HomePage() {
  const navigate = useNavigate();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeImage, setActiveImage] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);
  const [language, setLanguage] = useState<Language>('en');
  const [newsMenuOpen, setNewsMenuOpen] = useState(false);
  const [mobileNewsOpen, setMobileNewsOpen] = useState(false);
  const [newsFilter, setNewsFilter] = useState<'all' | NewsCategory>('all');
  const [selectedNews, setSelectedNews] = useState<(typeof newsItems)[number] | null>(null);
  const [eventIndex, setEventIndex] = useState(0);
  const [eventsPaused, setEventsPaused] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState<(typeof eventItems)[number] | null>(null);
  const [lightbox, setLightbox] = useState<{ url: string; title?: string } | null>(null);
  const [selectedDept, setSelectedDept] = useState<'all' | AcademicDept>('all');

  const t = translations[language];
  const isRTL = language === 'ar';

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'en' ? 'ar' : 'en');
  };

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setIsScrolled(window.scrollY > 50);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveImage((prev) => (prev + 1) % galleryImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  // close the News dropdown when clicking elsewhere
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (!(event.target as HTMLElement).closest('.news-dropdown')) setNewsMenuOpen(false);
    };
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  // events carousel autoplay (pauses on hover or while a modal is open)
  useEffect(() => {
    if (eventsPaused || selectedEvent) return;
    const interval = setInterval(() => {
      setEventIndex((prev) => (prev + 1) % eventItems.length);
    }, 7000);
    return () => clearInterval(interval);
  }, [eventsPaused, selectedEvent]);

  // modals: Escape closes, page scroll locked
  useEffect(() => {
    if (!selectedNews && !selectedEvent && !lightbox) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') { 
        setSelectedNews(null); 
        setSelectedEvent(null);
        setLightbox(null);
      }
    };
    document.addEventListener('keydown', onKey);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = previousOverflow;
    };
  }, [selectedNews, selectedEvent, lightbox]);

  const navBefore = [
    { key: 'about', label: t.nav.about },
    { key: 'programs', label: t.nav.programs },
    { key: 'wajihat', label: t.nav.wajihat },
  ];
  const navAfter = [
    { key: 'admission', label: t.nav.admission },
    { key: 'gallery', label: t.nav.gallery },
  ];
  const goToEvent = (i: number) => setEventIndex((i + eventItems.length) % eventItems.length);
  const loc = (x: Localized) => x[language];
  const filteredNews = newsFilter === 'all' ? newsItems : newsItems.filter((n) => n.category === newsFilter);
  const featuredNews = newsFilter === 'all' ? filteredNews[0] : undefined;
  const otherNews = featuredNews ? filteredNews.slice(1) : filteredNews;

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-white overflow-x-hidden" dir={isRTL ? 'rtl' : 'ltr'}>
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 will-change-transform ${
        isScrolled ? 'bg-white shadow-md border-b border-gray-100' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center gap-3.5 group cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
              <div className="relative">
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full flex items-center justify-center shadow-md group-hover:shadow-xl transition-all duration-300 overflow-hidden bg-white p-1 ring-2 ring-amber-400/60 group-hover:scale-105">
                  <img src="/assets/pic5.jpeg" alt="ENSSM Logo" className="w-full h-full object-contain rounded-full" />
                </div>
              </div>
              <div className="hidden sm:block">
                <span className={`font-bold text-xl tracking-tight transition-colors ${isScrolled ? 'text-gray-900' : 'text-white'}`}>ENSSM</span>
                <span className={`text-xs font-medium block transition-colors ${isScrolled ? 'text-gray-600' : 'text-white/90'}`}>{isRTL ? 'المدرسة العليا لأساتذة الصم والبكم' : 'Higher School for Teachers of Deaf and Mute'}</span>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-1">
              {navBefore.map((item) => (
                <button key={item.key} onClick={() => scrollToSection(item.key)} className={`px-4 py-2 rounded-full font-medium transition-all duration-300 hover:bg-blue-500/10 ${
                    isScrolled ? 'text-gray-700 hover:text-blue-600' : 'text-white/90 hover:text-white hover:bg-white/10'
                  }`}>
                  {item.label}
                </button>
              ))}
              {/* News dropdown */}
              <div
                className="relative news-dropdown"
                onMouseEnter={() => setNewsMenuOpen(true)}
                onMouseLeave={() => setNewsMenuOpen(false)}
              >
                <button
                  onClick={() => setNewsMenuOpen((open) => !open)}
                  aria-haspopup="true"
                  aria-expanded={newsMenuOpen}
                  className={`px-4 py-2 rounded-full font-medium transition-all duration-300 hover:bg-blue-500/10 flex items-center gap-1 ${
                    isScrolled ? 'text-gray-700 hover:text-blue-600' : 'text-white/90 hover:text-white hover:bg-white/10'
                  }`}
                >
                  {t.nav.news}
                  <ChevronDown className={`w-4 h-4 transition-transform ${newsMenuOpen ? 'rotate-180' : ''}`} />
                </button>
                {newsMenuOpen && (
                  <div className={`absolute top-full ${isRTL ? 'right-0' : 'left-0'} pt-2 w-48 z-50`}>
                    <div className="bg-white rounded-xl shadow-xl border border-gray-100 py-2">
                      <button
                        onClick={() => { scrollToSection('news'); setNewsMenuOpen(false); }}
                        className={`w-full px-4 py-3 ${isRTL ? 'text-right' : 'text-left'} text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors font-medium`}
                      >
                        {t.nav.news}
                      </button>
                      <button
                        onClick={() => { scrollToSection('events'); setNewsMenuOpen(false); }}
                        className={`w-full px-4 py-3 ${isRTL ? 'text-right' : 'text-left'} text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors font-medium`}
                      >
                        {t.nav.events}
                      </button>
                    </div>
                  </div>
                )}
              </div>
              {navAfter.map((item) => (
                <button key={item.key} onClick={() => scrollToSection(item.key)} className={`px-4 py-2 rounded-full font-medium transition-all duration-300 hover:bg-blue-500/10 ${
                    isScrolled ? 'text-gray-700 hover:text-blue-600' : 'text-white/90 hover:text-white hover:bg-white/10'
                  }`}>
                  {item.label}
                </button>
              ))}
              {/* Contact */}
              <button
                onClick={() => scrollToSection('contact')}
                className={`px-4 py-2 rounded-full font-medium transition-all duration-300 hover:bg-blue-500/10 ${
                  isScrolled ? 'text-gray-700 hover:text-blue-600' : 'text-white/90 hover:text-white hover:bg-white/10'
                }`}
              >
                {t.nav.contact}
              </button>
              {/* Language Toggle Button */}
              <button
                onClick={toggleLanguage}
                className={`px-3 py-2 rounded-full font-medium transition-all duration-300 hover:bg-blue-500/10 flex items-center gap-2 ${
                  isScrolled ? 'text-gray-700 hover:text-blue-600' : 'text-white/90 hover:text-white hover:bg-white/10'
                }`}
                title={language === 'en' ? 'Switch to Arabic' : 'التبديل إلى الإنجليزية'}
              >
                <Languages className="w-5 h-5" />
                <span className="text-sm font-semibold">{language === 'en' ? 'عربي' : 'EN'}</span>
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center gap-2">
              {/* Mobile Language Toggle */}
              <button
                onClick={toggleLanguage}
                className={`p-2 rounded-lg transition-colors flex items-center gap-1 ${isScrolled ? 'text-gray-900' : 'text-white'}`}
                title={language === 'en' ? 'Switch to Arabic' : 'التبديل إلى الإنجليزية'}
              >
                <Languages className="w-5 h-5" />
                <span className="text-xs font-semibold">{language === 'en' ? 'عربي' : 'EN'}</span>
              </button>
              <button
                className={`p-2 rounded-lg transition-colors ${isScrolled ? 'text-gray-900' : 'text-white'}`}
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className={`md:hidden absolute top-full left-0 right-0 bg-white shadow-xl transition-all duration-300 ${
          mobileMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'
        }`}>
          <div className="px-4 py-6 space-y-2">
            {navBefore.map((item) => (
              <button key={item.key} onClick={() => scrollToSection(item.key)} className={`block w-full ${isRTL ? 'text-right' : 'text-left'} py-3 px-4 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-xl transition-colors font-medium`}>
                {item.label}
              </button>
            ))}
            {/* Mobile News group */}
            <button
              onClick={() => setMobileNewsOpen((open) => !open)}
              aria-expanded={mobileNewsOpen}
              className={`flex w-full items-center justify-between py-3 px-4 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-xl transition-colors font-medium`}
            >
              {t.nav.news}
              <ChevronDown className={`w-4 h-4 transition-transform ${mobileNewsOpen ? 'rotate-180' : ''}`} />
            </button>
            {mobileNewsOpen && (
              <div className={`${isRTL ? 'pr-4 border-r-2 mr-4' : 'pl-4 border-l-2 ml-4'} border-blue-100 space-y-1`}>
                <button onClick={() => { scrollToSection('news'); setMobileNewsOpen(false); }} className={`block w-full ${isRTL ? 'text-right' : 'text-left'} py-3 px-4 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-xl transition-colors font-medium`}>
                  {t.nav.news}
                </button>
                <button onClick={() => { scrollToSection('events'); setMobileNewsOpen(false); }} className={`block w-full ${isRTL ? 'text-right' : 'text-left'} py-3 px-4 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-xl transition-colors font-medium`}>
                  {t.nav.events}
                </button>
              </div>
            )}
            {navAfter.map((item) => (
              <button key={item.key} onClick={() => scrollToSection(item.key)} className={`block w-full ${isRTL ? 'text-right' : 'text-left'} py-3 px-4 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-xl transition-colors font-medium`}>
                {item.label}
              </button>
            ))}
            {/* Mobile Contact */}
            <button
              onClick={() => scrollToSection('contact')}
              className={`block w-full ${isRTL ? 'text-right' : 'text-left'} py-3 px-4 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-xl transition-colors font-medium`}
            >
              {t.nav.contactUs}
            </button>
            
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=1920&h=1080&fit=crop"
            alt="Students"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/90 via-indigo-900/85 to-purple-900/90" />
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggZD0iTTM2IDM0djItSDI0di0yaDEyek0zNiAyNHYySDI0di0yaDEyeiIvPjwvZz48L2c+PC9zdmc+')] opacity-50" />
        </div>

        {/* Ambient Gradient Glows (GPU optimized) */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/15 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/15 rounded-full blur-3xl" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-indigo-500/10 rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
          <div className="text-center">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white px-5 py-2.5 rounded-full text-sm font-medium mb-8 border border-white/20 animate-fadeIn">
              <Sparkles className="w-4 h-4 text-yellow-300" />
              {t.hero.badge}
              <Sparkles className="w-4 h-4 text-yellow-300" />
            </div>

            {/* Main Title */}
            <h1 className={`text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 animate-slideUp ${isRTL ? 'font-arabic' : ''}`}>
              {t.hero.title1}
              <span className="block mt-2 bg-gradient-to-r from-cyan-300 via-blue-300 to-purple-300 bg-clip-text text-transparent">
                {t.hero.title2}
              </span>
            </h1>

            {/* Arabic Name (shown in English mode) or English subtitle (shown in Arabic mode) */}
            <p className={`text-2xl sm:text-3xl text-white/90 mb-6 animate-slideUp ${isRTL ? '' : 'font-arabic'}`} dir={isRTL ? 'ltr' : 'rtl'} style={{ animationDelay: '0.2s' }}>
              {t.hero.arabicName}
            </p>

            {/* Description */}
            <p className={`text-xl text-white/80 max-w-3xl mx-auto mb-10 leading-relaxed animate-slideUp ${isRTL ? 'font-arabic' : ''}`} style={{ animationDelay: '0.4s' }}>
              {t.hero.description}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slideUp" style={{ animationDelay: '0.6s' }}>
              <Button
                onClick={() => scrollToSection('programs')}
                className="group bg-white text-blue-600 hover:bg-blue-50 px-8 py-4 text-lg rounded-full shadow-2xl hover:shadow-white/25 transition-all duration-300 hover:scale-105"
              >
                {t.hero.explorePrograms}
                <ArrowRight className={`inline-block ${isRTL ? 'mr-2 rotate-180 group-hover:-translate-x-1' : 'ml-2 group-hover:translate-x-1'} w-5 h-5 transition-transform`} />
              </Button>
              <Button
                onClick={() => scrollToSection('gallery')}
                className="group bg-white text-blue-600 hover:bg-blue-50 px-8 py-4 text-lg rounded-full shadow-2xl hover:shadow-white/25 transition-all duration-300 hover:scale-105"
              >
                <Camera className={`inline-block ${isRTL ? 'ml-2' : 'mr-2'} w-5 h-5`} />
                Gallery
              </Button>
            </div>

            {/* Scroll Indicator */}
            <div className="mt-20 animate-bounce">
              <button
                onClick={() => scrollToSection('stats')}
                className="text-white/60 hover:text-white transition-colors"
              >
                <ChevronDown className="w-10 h-10" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section id="stats" className="py-20 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-50 to-white" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div
                key={stat.labelKey}
                className="group relative bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-5 rounded-3xl transition-opacity duration-500`} />
                <div className={`w-16 h-16 bg-gradient-to-br ${stat.color} rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-4xl lg:text-5xl font-bold text-gray-900 mb-2">
                  <AnimatedCounter value={stat.value} suffix={isRTL ? stat.suffixAr : stat.suffix} />
                </div>
                <div className="text-gray-600 font-medium">{t.stats[stat.labelKey]}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
        <div className={`absolute top-0 ${isRTL ? 'left-0' : 'right-0'} w-1/2 h-full bg-gradient-to-l from-blue-50 to-transparent`} />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <Building2 className="w-4 h-4" />
              {t.about.badge}
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              {t.about.title1}
              <span className="block text-blue-600">{t.about.title2}</span>
            </h2>
          </div>

          {/* Director & Mission Section */}
          <div className="grid lg:grid-cols-2 gap-12 items-stretch mb-20">
            {/* Left Side - Director Picture */}
            <div className="relative flex">
              <div className={`absolute -top-4 ${isRTL ? '-right-4' : '-left-4'} w-24 h-24 bg-blue-200 rounded-full opacity-50 blur-2xl`} />
              <div className={`absolute -bottom-4 ${isRTL ? '-left-4' : '-right-4'} w-32 h-32 bg-purple-200 rounded-full opacity-50 blur-2xl`} />
              <div className="bg-white rounded-3xl p-6 shadow-xl w-full flex flex-col justify-between border border-slate-100">
                <div 
                  onClick={() => setLightbox({ url: "/assets/director.jpeg", title: `${isRTL ? 'كلمة السيد مدير المدرسة' : "Director's Word"}: ${isRTL ? 'أ.د. زقار فتحي' : 'Pr. ZEGAR FETHI'}` })}
                  className="relative w-full aspect-[3/4] rounded-2xl overflow-hidden shadow-md mb-6 bg-gray-100 flex items-center justify-center cursor-pointer group"
                >
                  <img 
                    src="/assets/director.jpeg" 
                    alt="Director" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-30 group-hover:opacity-60 transition-opacity" />
                  <div className="absolute bottom-3 right-3 z-20">
                    <span className="p-2.5 bg-white/95 rounded-full shadow-xl text-gray-900 flex items-center gap-1.5 text-xs font-semibold transform translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                      <Maximize2 className="w-4 h-4 text-blue-600" />
                      <span>{isRTL ? 'تكبير' : 'View'}</span>
                    </span>
                  </div>
                </div>
                <div className="text-center pb-2">
                  <h3 className="text-xl font-bold text-gray-900">{isRTL ? 'مدير المدرسة العليا' : "Director of the Higher School"}</h3>
                  <p className="text-xl font-bold text-blue-600 mt-1">{isRTL ? 'أ.د. زقار فتحي' : 'Pr. ZEGAR FETHI'}</p>
                  <p className="text-xs text-gray-500 mt-1">{isRTL ? 'المدرسة العليا لأساتذة الصم والبكم - بني مسوس' : 'Higher School for Teachers of Deaf and Mute - Beni Messous'}</p>
                </div>
              </div>
            </div>

            {/* Right Side - Mission & Key Training */}
            <div className="space-y-6 flex flex-col justify-between">
              <div className="bg-white rounded-3xl p-8 sm:p-10 shadow-xl border border-slate-100 flex-1 flex flex-col justify-center">
                <h3 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                  <span className="w-2.5 h-8 bg-blue-600 rounded-full inline-block" />
                  {isRTL ? 'كلمة السيد المدير' : t.about.missionTitle}
                </h3>
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                  {t.about.missionText1}
                </p>
              </div>
            </div>
          </div>

          {/* Key Training Areas - centered */}
          <div className="max-w-4xl mx-auto mb-20">
              <div>
                <h4 className="text-2xl font-bold text-gray-900 mb-6 text-center">{t.about.keyTrainingAreas}</h4>
                <div className="grid sm:grid-cols-2 gap-4">
                  {[
                    { icon: Lightbulb, titleKey: 'orthophony', descKey: 'orthophonyDesc' },
                    { icon: Target, titleKey: 'hearingDevices', descKey: 'hearingDevicesDesc' },
                    { icon: Heart, titleKey: 'entMedicine', descKey: 'entMedicineDesc' },
                    { icon: HandHeart, titleKey: 'signLanguage', descKey: 'signLanguageDesc' },
                  ].map((item) => (
                    <div
                      key={item.titleKey}
                      className={`group flex items-start gap-4 p-4 bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 ${isRTL ? 'hover:translate-x-2' : 'hover:-translate-x-2'}`}
                    >
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform flex-shrink-0">
                        <item.icon className="w-6 h-6 text-blue-600" />
                      </div>
                      <div>
                        <h5 className="font-semibold text-gray-900">{t.about[item.titleKey as keyof typeof t.about]}</h5>
                        <p className="text-gray-600 text-sm">{t.about[item.descKey as keyof typeof t.about]}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
          </div>

          {/* Features Grid */}
          <div className="grid lg:grid-cols-3 gap-8">
            {[
              { titleKey: 'specializedTraining', descKey: 'specializedTrainingDesc', image: '/assets/specialized training.jfif' },
              { titleKey: 'inclusiveEducation', descKey: 'inclusiveEducationDesc', image: '/assets/WhatsApp Image 2026-04-13 at 19.35.28.jpeg' },
              { titleKey: 'firstInAfrica', descKey: 'firstInAfricaDesc', image: '/assets/first in africa.jfif' },
            ].map((feature) => (
              <div
                key={feature.titleKey}
                className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 flex flex-col border border-slate-100"
              >
                <div 
                  onClick={() => setLightbox({ url: feature.image, title: t.about[feature.titleKey as keyof typeof t.about] })}
                  className="relative h-64 sm:h-72 w-full overflow-hidden bg-gray-100 cursor-pointer group"
                >
                  <img
                    src={feature.image}
                    alt={t.about[feature.titleKey as keyof typeof t.about]}
                    className="w-full h-full object-cover object-top group-hover:scale-108 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-40 group-hover:opacity-70 transition-opacity" />
                  <div className="absolute bottom-3 right-3 z-20">
                    <span className="p-2.5 bg-white/95 rounded-full shadow-xl text-gray-900 flex items-center gap-1.5 text-xs font-semibold transform translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                      <Maximize2 className="w-4 h-4 text-blue-600" />
                      <span>{isRTL ? 'عرض كامل' : 'View'}</span>
                    </span>
                  </div>
                </div>

                <div className="p-7 flex flex-col flex-1 justify-between bg-white">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                      {t.about[feature.titleKey as keyof typeof t.about]}
                    </h3>
                    <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                      {t.about[feature.descKey as keyof typeof t.about]}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-24 bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggZD0iTTM2IDM0djItSDI0di0yaDEyek0zNiAyNHYySDI0di0yaDEyeiIvPjwvZz48L2c+PC9zdmc+')] opacity-30" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-white/10 text-white px-4 py-2 rounded-full text-sm font-semibold mb-6 backdrop-blur-sm">
              <Calendar className="w-4 h-4" />
              {t.timeline.badge}
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
              {t.timeline.title}
            </h2>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-400 via-purple-400 to-pink-400 hidden lg:block" />

            <div className="space-y-12">
              {[
                { year: '2021', eventKey: 'presidential', descKey: 'presidentialDesc' },
                { year: '2022', eventKey: 'inauguration', descKey: 'inaugurationDesc' },
                { year: '2023', eventKey: 'firstYear', descKey: 'firstYearDesc' },
                { year: '2024', eventKey: 'firstGraduation', descKey: 'firstGraduationDesc' },
                { year: '2025', eventKey: 'expansion', descKey: 'expansionDesc' },
                { year: '2026', eventKey: 'bac2026', descKey: 'bac2026Desc' },
              ].map((item, index) => (
                <div
                  key={item.eventKey}
                  className={`relative flex flex-col lg:flex-row items-center gap-8 ${
                    index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                  }`}
                >
                  <div className={`flex-1 ${index % 2 === 0 ? (isRTL ? 'lg:text-left' : 'lg:text-right') : (isRTL ? 'lg:text-right' : 'lg:text-left')}`}>
                    <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 hover:bg-white/20 transition-all duration-300 border border-white/10">
                      <span className="text-5xl font-bold bg-gradient-to-r from-cyan-300 to-purple-300 bg-clip-text text-transparent">
                        {item.year}
                      </span>
                      <h3 className="text-2xl font-bold text-white mt-4 mb-2">{t.timeline[item.eventKey as keyof typeof t.timeline]}</h3>
                      <p className="text-white/70">{t.timeline[item.descKey as keyof typeof t.timeline]}</p>
                    </div>
                  </div>

                  {/* Center Dot */}
                  <div className="relative z-10 w-6 h-6 bg-white rounded-full shadow-lg shadow-purple-500/50 hidden lg:block" />

                  <div className="flex-1" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section id="programs" className="py-24 bg-gradient-to-b from-white via-blue-50/20 to-white relative overflow-hidden">
        {/* Subtle ambient light */}
        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-blue-600/5 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 px-5 py-2 rounded-full text-sm font-semibold mb-6 shadow-sm border border-blue-200/80">
              <BookOpen className="w-4 h-4 text-blue-600" />
              {t.programs.badge}
            </div>
            <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-6 tracking-tight">
              {t.programs.title1}{' '}
              <span className="block bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
                {t.programs.title2}
              </span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              {t.programs.description}
            </p>
          </div>

          {/* Department Filter Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-14">
            {academicDepartments.map((dept) => {
              const DeptIcon = dept.icon;
              const isActive = selectedDept === dept.id;
              return (
                <button
                  key={dept.id}
                  onClick={() => setSelectedDept(dept.id)}
                  className={`inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
                    isActive
                      ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg shadow-blue-500/25 ring-2 ring-blue-500/30 scale-[1.03]'
                      : 'bg-white hover:bg-blue-50/60 text-gray-700 hover:text-blue-700 border border-gray-200/90 shadow-sm'
                  }`}
                >
                  <DeptIcon className={`w-4 h-4 ${isActive ? 'text-white' : 'text-gray-500'}`} />
                  <span>{isRTL ? dept.nameAr : dept.nameEn}</span>
                  <span
                    className={`text-xs px-2.5 py-0.5 rounded-full font-bold transition-colors ${
                      isActive
                        ? 'bg-white/20 text-white border border-white/30'
                        : 'bg-gray-100 text-gray-600'
                    }`}
                  >
                    {dept.count}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Academic Specializations Grid (Site Theme: Blue / Indigo / Purple) */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 mb-20">
            {specializations
              .filter((spec) => selectedDept === 'all' || spec.category === selectedDept)
              .map((spec) => {
                const SpecIcon = spec.icon;
                return (
                  <div
                    key={spec.id}
                    className="relative bg-white rounded-2xl border border-gray-200/90 shadow-sm hover:shadow-xl hover:shadow-blue-500/10 hover:border-blue-400/80 hover:-translate-y-1.5 transition-all duration-300 p-6 sm:p-7 flex flex-col justify-between overflow-hidden group"
                  >
                    {/* Top prestige gradient accent bar matching site theme */}
                    <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 opacity-90 group-hover:h-1.5 transition-all duration-300" />

                    <div>
                      {/* Top Metadata Header: Department & Degree Pill */}
                      <div className="flex items-center justify-between gap-2 mb-5">
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-purple-50 text-purple-700 border border-purple-200/70">
                          {isRTL ? spec.categoryNameAr : spec.categoryNameEn}
                        </span>
                        <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-md text-[11px] font-bold bg-blue-50 text-blue-700 border border-blue-200/80">
                          <GraduationCap className="w-3.5 h-3.5 text-blue-600" />
                          <span>PES • 6 {isRTL ? 'سنوات' : 'Years'}</span>
                        </span>
                      </div>

                      {/* Icon + Title */}
                      <div className="flex items-start gap-4 mb-4">
                        <div className="w-13 h-13 sm:w-14 sm:h-14 rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-600 text-white flex items-center justify-center shadow-md shadow-blue-500/20 group-hover:scale-105 group-hover:shadow-lg group-hover:shadow-blue-500/30 transition-all duration-300 flex-shrink-0">
                          <SpecIcon className="w-6 h-6 sm:w-7 sm:h-7" />
                        </div>
                        <div className="min-w-0 flex-1">
                          <h3 className="font-bold text-gray-900 group-hover:text-blue-600 transition-colors text-lg sm:text-xl leading-snug">
                            {isRTL ? spec.nameAr : spec.name}
                          </h3>
                          <p className="text-xs sm:text-sm font-medium text-gray-500 mt-1">
                            {isRTL ? spec.name : spec.nameAr}
                          </p>
                        </div>
                      </div>

                      {/* Academic Description */}
                      <p className="text-xs sm:text-sm text-gray-600 leading-relaxed mb-5">
                        {isRTL ? spec.descAr : spec.descEn}
                      </p>

                      {/* Skills & Competencies Tags */}
                      <div className="flex flex-wrap gap-1.5 mb-6">
                        {(isRTL ? spec.skillsAr : spec.skillsEn).map((skill, idx) => (
                          <span
                            key={idx}
                            className="inline-flex items-center gap-1 text-[11px] font-medium bg-blue-50/50 text-gray-700 px-2.5 py-1 rounded-lg border border-blue-100"
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Card Footer: Official MESRS Accreditation Seal & Degree */}
                    <div className="border-t border-gray-100 pt-4 mt-auto flex items-center justify-between text-xs">
                      <div className="flex items-center gap-1.5 text-gray-500 font-medium">
                        <ShieldCheck className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                        <span>{isRTL ? 'معتمد من وزارة التعليم العالي' : 'MESRS Accredited'}</span>
                      </div>
                      <span className="font-semibold text-blue-700 bg-blue-50 px-2.5 py-1 rounded-md border border-blue-200/80">
                        {isRTL ? spec.degreeAr : spec.degreeEn}
                      </span>
                    </div>
                  </div>
                );
              })}
          </div>

          {/* Program Highlights */}
          <div className="relative rounded-3xl overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?w=1200&h=600&fit=crop"
              alt="Students in classroom"
              className={`absolute inset-0 w-full h-full object-cover ${isRTL ? '-scale-x-100' : ''}`}
            />
            <div className={`absolute inset-0 ${isRTL ? 'bg-gradient-to-l from-purple-900/95 via-indigo-900/90 to-indigo-900/80 md:to-transparent' : 'bg-gradient-to-r from-purple-900/95 via-indigo-900/90 to-indigo-900/80 md:to-transparent'}`} />
            <div className="relative flex items-center min-h-[500px] justify-start">
              <div className="max-w-2xl p-6 sm:p-12">
                <h3 className="text-2xl sm:text-4xl font-bold text-white mb-4 sm:mb-6">{t.programs.bacProgram}</h3>
                <p className="text-base sm:text-xl text-white/80 mb-6 sm:mb-8">
                  {t.programs.bacProgramDesc}
                </p>
                <div className="grid sm:grid-cols-2 gap-4">
                  {[
                    t.programs.sixYear,
                    t.programs.practical,
                    t.programs.medical,
                    t.programs.career,
                    t.programs.faculty,
                    t.programs.facilities,
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0" />
                      <span className="text-white">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Wajihat (Centers) Section */}
      <section id="wajihat" className="py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
        <div className={`absolute top-0 ${isRTL ? 'right-0' : 'left-0'} w-1/3 h-full bg-gradient-to-r from-orange-50 to-transparent`} />
        <div className={`absolute bottom-0 ${isRTL ? 'left-0' : 'right-0'} w-1/3 h-full bg-gradient-to-l from-amber-50 to-transparent`} />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-orange-100 text-orange-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <Building2 className="w-4 h-4" />
              {t.wajihat.badge}
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              {t.wajihat.title1}
              <span className="block text-orange-600">{t.wajihat.title2}</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t.wajihat.description}
            </p>
          </div>

          {/* Centers Grid */}
          <div className="space-y-12">
            {[
{
                icon: Rocket,
                titleKey: 'incubator' as const,
                descKey: 'incubatorDesc' as const,
                achievementsKey: 'incubatorAchievements' as const,
                color: 'from-blue-500 to-indigo-500',
                bgColor: 'from-blue-50 to-indigo-50',
                logo: '/assets/pic1.jpeg',
                galleryImages: [
                  '/assets/inc1.jfif',
                  '/assets/inc2.jfif',
                  '/assets/inc3.jfif',
                  '/assets/inc4.jfif',
                ],
                facebookLink: 'https://www.facebook.com/profile.php?id=61583597491341',
              },
{
                icon: Building,
                titleKey: 'entrepreneurship' as const,
                descKey: 'entrepreneurshipDesc' as const,
                achievementsKey: 'entrepreneurshipAchievements' as const,
                color: 'from-orange-500 to-red-500',
                bgColor: 'from-orange-50 to-red-50',
                logo: '/assets/pic2.jpeg',
                galleryImages: [
                  '/assets/cde1.jfif',
                  '/assets/cde2.jpeg',
                  '/assets/cde3.jpeg',
                  '/assets/cde4.jpeg',
                ],
                facebookLink: 'https://www.facebook.com/share/18aUatyMUk/',
              },
              
              {
                icon: Brain,
                titleKey: 'ai' as const,
                descKey: 'aiDesc' as const,
                achievementsKey: 'aiAchievements' as const,
                color: 'from-purple-500 to-pink-500',
                bgColor: 'from-purple-50 to-pink-50',
                logo: '/assets/aiHouse.jfif',
                galleryImages: [
                  '/assets/ai1.jpeg',
                  '/assets/ai2.jfif',
                  '/assets/ai3.jfif',
                  '/assets/aiHouse.jpeg',
                ],
               
              },
              {
                icon: Cog,
                titleKey: 'tisc' as const,
                descKey: 'tiscDesc' as const,
                achievementsKey: 'tiscAchievements' as const,
                color: 'from-cyan-500 to-teal-500',
                bgColor: 'from-cyan-50 to-teal-50',
                logo: '/assets/pic3.jpeg',
                galleryImages: [
                  '/assets/cati1.jpeg',
                  '/assets/cati2.jpeg',
                  '/assets/cati3.jpeg',
                  '/assets/cati4.jpeg',
                ],
                facebookLink: 'https://www.facebook.com/share/1BtnJrCd33/',
              },
              {
                icon: Library,
                titleKey: 'cultural' as const,
                descKey: 'culturalDesc' as const,
                achievementsKey: 'culturalAchievements' as const,
                color: 'from-emerald-500 to-green-500',
                bgColor: 'from-emerald-50 to-green-50',
                galleryImages: [
                  '/assets/cse1.jpeg',
                  '/assets/cse2.jpeg',
                  '/assets/cse3.jpeg',
                  '/assets/cse4.jpeg',
                ],
              },
              
            ].map((center, index) => (
              <div
                key={center.titleKey}
                className="group relative bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${center.bgColor} opacity-30`} />
                <div className="relative p-8 lg:p-10">
                  <div className="flex flex-col lg:flex-row gap-8 items-start">
                    {/* Center Logo or Director Image (only when the center has one) */}
                    {(center.logo || center.directorImage) && (
                    <div className="flex-shrink-0">
                      <div className="relative">
                        <div className={`w-32 h-32 lg:w-40 lg:h-40 rounded-2xl overflow-hidden shadow-xl ring-4 ring-white bg-gradient-to-br ${center.bgColor} flex items-center justify-center`}>
                          {center.logo ? (
                            <img
                              src={center.logo}
                              alt={t.wajihat[center.titleKey]}
                              className="w-full h-full object-contain p-4"
                            />
                          ) : center.directorImage ? (
                            <img
                              src={center.directorImage}
                              alt={center.directorName}
                              className="w-full h-full object-cover"
                            />
                          ) : (
                            <center.icon className="w-12 h-12 text-gray-400" />
                          )}
                        </div>
                        {center.directorName && (
                          <div className={`absolute -bottom-3 ${isRTL ? '-left-3' : '-right-3'} w-12 h-12 bg-gradient-to-br ${center.color} rounded-xl flex items-center justify-center shadow-lg`}>
                            <center.icon className="w-6 h-6 text-white" />
                          </div>
                        )}
                      </div>
                      {center.directorName && (
                        <div className="mt-4 text-center">
                          <p className="text-sm text-gray-500 mb-1">{t.wajihat.director}</p>
                          <p className="font-semibold text-gray-900">{center.directorName}</p>
                        </div>
                      )}
                    </div>
                    )}

                    {/* Content */}
                    <div className="flex-1">
                      <div className="flex items-center gap-4 mb-4">
                        <div className={`w-14 h-14 bg-gradient-to-br ${center.color} rounded-2xl flex items-center justify-center shadow-lg`}>
                          <center.icon className="w-7 h-7 text-white" />
                        </div>
                        <h3 className="text-2xl lg:text-3xl font-bold text-gray-900">
                          {t.wajihat[center.titleKey]}
                        </h3>
                      </div>
                      {center.directorName && !center.logo && !center.directorImage && (
                        <p className="text-sm text-gray-500 mb-4">
                          {t.wajihat.director}: <span className="font-semibold text-gray-900">{center.directorName}</span>
                        </p>
                      )}
                      <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                        {t.wajihat[center.descKey]}
                      </p>

                      {/* Gallery */}
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                          <Award className="w-5 h-5 text-yellow-500" />
                          {t.wajihat.achievements}
                        </h4>
                        {center.galleryImages ? (
                          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3.5 sm:gap-4">
                            {center.galleryImages.map((img, idx) => (
                              <div
                                key={idx}
                                onClick={() => setLightbox({ url: img, title: `${t.wajihat[center.titleKey]} - ${t.wajihat.achievements} (${idx + 1})` })}
                                className="group relative aspect-[3/4] rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 cursor-pointer bg-gray-100 border border-gray-200/80 hover:-translate-y-1.5"
                              >
                                {/* Full edge-to-edge image filling the frame completely */}
                                <img
                                  src={img}
                                  alt={`${t.wajihat[center.titleKey]} ${idx + 1}`}
                                  className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700 ease-out"
                                />

                                {/* Subtle gradient overlay for contrast and depth */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/15 to-transparent opacity-60 group-hover:opacity-85 transition-opacity duration-300" />

                                {/* Floating modern glassmorphic tags and action pill */}
                                <div className="absolute bottom-3 inset-x-3 flex items-center justify-between text-white pointer-events-none">
                                  <span className="px-2.5 py-1 rounded-full bg-black/40 backdrop-blur-md text-white/95 text-xs font-semibold border border-white/20 flex items-center gap-1.5 shadow-sm">
                                    <Camera className="w-3.5 h-3.5 text-amber-300" />
                                    <span>{idx + 1}</span>
                                  </span>
                                  <span className="w-8 h-8 rounded-full bg-white text-gray-900 flex items-center justify-center shadow-lg transform translate-y-3 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                                    <Maximize2 className="w-4 h-4 text-blue-600" />
                                  </span>
                                </div>
                              </div>
                            ))}
                          </div>
                        ) : (
                          <div className="grid sm:grid-cols-3 gap-3">
                            {(t.wajihat[center.achievementsKey] as string[]).map((achievement, idx) => (
                              <div
                                key={idx}
                                className={`flex items-start gap-2 p-3 bg-gradient-to-br ${center.bgColor} rounded-xl`}
                              >
                                <CheckCircle2 className={`w-5 h-5 flex-shrink-0 mt-0.5`} style={{ color: center.color.includes('orange') ? '#f97316' : center.color.includes('blue') ? '#3b82f6' : center.color.includes('purple') ? '#a855f7' : center.color.includes('cyan') ? '#06b6d4' : '#10b981' }} />
                                <span className="text-sm text-gray-700">{achievement}</span>
                              </div>
                            ))}
                          </div>
                        )}
                        {center.facebookLink && (
                          <a
                            href={center.facebookLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                          >
                            <Facebook className="w-4 h-4" />
                            {isRTL ? 'تابعنا على فيسبوك' : 'Follow us on Facebook'}
                          </a>
                        )}
                        {center.centerLink !== undefined && (
                          <a
                            href={center.centerLink || '#'}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 mt-4 ml-2 px-4 py-2 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-lg hover:opacity-90 transition-opacity"
                          >
                            <ExternalLink className="w-4 h-4" />
                            {isRTL ? 'المزيد' : 'Learn More'}
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* News Section */}
      <section id="news" className="py-24 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-50 rounded-full blur-3xl opacity-70 -translate-y-1/2 translate-x-1/3" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-50 rounded-full blur-3xl opacity-70 translate-y-1/2 -translate-x-1/3" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <Newspaper className="w-4 h-4" />
              {t.news.badge}
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              {t.news.title1}
              <span className="block text-blue-600">{t.news.title2}</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">{t.news.description}</p>
          </div>

          {/* Category filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {(['all', ...newsCategories] as const).map((cat) => (
              <button
                key={cat}
                onClick={() => setNewsFilter(cat)}
                className={`px-5 py-2 rounded-full text-sm font-semibold border transition-all duration-300 ${
                  newsFilter === cat
                    ? 'bg-blue-600 text-white border-blue-600 shadow-lg shadow-blue-600/30'
                    : 'bg-white text-gray-600 border-gray-200 hover:border-blue-300 hover:text-blue-600'
                }`}
              >
                {cat === 'all' ? t.news.all : t.news.categories[cat]}
              </button>
            ))}
          </div>

          {/* Featured story */}
          {featuredNews && (
            <article
              onClick={() => setSelectedNews(featuredNews)}
              className="group grid lg:grid-cols-2 rounded-3xl overflow-hidden bg-gray-900 shadow-xl hover:shadow-2xl transition-shadow duration-500 cursor-pointer mb-10"
            >
              <div className="relative h-64 lg:h-auto lg:min-h-[420px] overflow-hidden bg-gray-900">
                <img
                  src={featuredNews.image}
                  alt={loc(featuredNews.title)}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-40 group-hover:opacity-60 transition-opacity" />
              </div>
              <div className="p-8 sm:p-12 flex flex-col justify-center text-white">
                <div className="flex flex-wrap items-center gap-3 mb-5">
                  <span className="inline-flex items-center gap-1 bg-yellow-400 text-gray-900 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide">
                    <Sparkles className="w-3 h-3" />
                    {t.news.featured}
                  </span>
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${newsCategoryStyles[featuredNews.category]}`}>
                    {t.news.categories[featuredNews.category]}
                  </span>
                  {featuredNews.date && (
                    <span className="inline-flex items-center gap-1 text-sm text-white/70">
                      <Calendar className="w-4 h-4" />
                      {loc(featuredNews.date)}
                    </span>
                  )}
                </div>
                <h3 className="text-2xl sm:text-4xl font-bold mb-4 leading-tight">{loc(featuredNews.title)}</h3>
                <p className="text-lg text-white/75 mb-8 leading-relaxed">{loc(featuredNews.excerpt)}</p>
                <span className="inline-flex items-center gap-2 font-semibold text-blue-300 group-hover:text-white transition-colors">
                  {t.news.readMore}
                  <ArrowRight className={`w-5 h-5 transition-transform ${isRTL ? 'rotate-180 group-hover:-translate-x-1' : 'group-hover:translate-x-1'}`} />
                </span>
              </div>
            </article>
          )}

          {/* News grid */}
          {otherNews.length > 0 ? (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {otherNews.map((item) => (
                <article
                  key={item.id}
                  onClick={() => setSelectedNews(item)}
                  className="group bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-md hover:shadow-2xl hover:-translate-y-1 transition-all duration-500 cursor-pointer flex flex-col"
                >
                  <div className="relative h-56 sm:h-60 overflow-hidden bg-gray-100">
                    <img
                      src={item.image}
                      alt={loc(item.title)}
                      className="w-full h-full object-cover object-center group-hover:scale-108 transition-transform duration-700 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-30 group-hover:opacity-50 transition-opacity" />
                    <span className={`absolute top-4 ${isRTL ? 'right-4' : 'left-4'} z-20 px-3 py-1 rounded-full text-xs font-semibold shadow-md ${newsCategoryStyles[item.category]}`}>
                      {t.news.categories[item.category]}
                    </span>
                  </div>
                  <div className="p-6 flex flex-col flex-1">
                    {item.date && (
                      <span className="inline-flex items-center gap-1 text-sm text-gray-500 mb-3">
                        <Calendar className="w-4 h-4" />
                        {loc(item.date)}
                      </span>
                    )}
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">{loc(item.title)}</h3>
                    <p className="text-gray-600 mb-5 leading-relaxed line-clamp-3">{loc(item.excerpt)}</p>
                    <span className="mt-auto inline-flex items-center gap-2 font-semibold text-blue-600">
                      {t.news.readMore}
                      <ArrowRight className={`w-4 h-4 transition-transform ${isRTL ? 'rotate-180 group-hover:-translate-x-1' : 'group-hover:translate-x-1'}`} />
                    </span>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            !featuredNews && <p className="text-center text-gray-500">{t.news.empty}</p>
          )}
        </div>
      </section>

      {/* Events Section (carousel) */}
      <section id="events" className="py-24 bg-gradient-to-br from-slate-900 via-blue-950 to-indigo-950 relative overflow-hidden">
        <div className="absolute top-10 left-10 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl" />
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <Calendar className="w-4 h-4" />
              {t.events.badge}
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              {t.events.title1}
              <span className="block text-blue-300">{t.events.title2}</span>
            </h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">{t.events.description}</p>
          </div>

          <div
            className="overflow-hidden rounded-3xl shadow-2xl"
            onMouseEnter={() => setEventsPaused(true)}
            onMouseLeave={() => setEventsPaused(false)}
          >
            <div
              className="flex transition-transform duration-700 ease-in-out"
              style={{ transform: `translateX(${isRTL ? '' : '-'}${eventIndex * 100}%)` }}
            >
              {eventItems.map((ev) => {
                const EventIcon = ev.icon;
                return (
                  <div key={ev.id} className="w-full flex-shrink-0">
                    <div className="grid md:grid-cols-2 bg-white/5 backdrop-blur border border-white/10 rounded-3xl overflow-hidden">
                      <div className="relative h-64 md:h-auto md:min-h-[420px] overflow-hidden">
                        <FallbackImage
                          src={ev.image}
                          fallback={ev.fallback}
                          alt={loc(ev.title)}
                          className="absolute inset-0 w-full h-full object-cover"
                        />
                        <div className={`absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent`} />
                        <div className={`absolute top-5 ${isRTL ? 'right-5' : 'left-5'} w-14 h-14 rounded-2xl bg-gradient-to-br ${ev.grad} flex items-center justify-center shadow-xl`}>
                          <EventIcon className="w-7 h-7 text-white" />
                        </div>
                      </div>
                      <div className="p-8 sm:p-10 flex flex-col justify-center text-white">
                        <h3 className="text-2xl sm:text-3xl font-bold mb-6">{loc(ev.title)}</h3>
                        <div className="space-y-4 mb-8">
                          <div className="flex items-center gap-3">
                            <Calendar className={`w-5 h-5 flex-shrink-0 ${ev.softText}`} />
                            <div>
                              <span className="block text-xs uppercase tracking-wide text-white/50">{t.events.date}</span>
                              <span className="font-semibold">{loc(ev.date)}</span>
                            </div>
                          </div>
                          <div className="flex items-center gap-3">
                            <Clock className={`w-5 h-5 flex-shrink-0 ${ev.softText}`} />
                            <div>
                              <span className="block text-xs uppercase tracking-wide text-white/50">{t.events.time}</span>
                              <span className="font-semibold">{loc(ev.time)}</span>
                            </div>
                          </div>
                          <div className="flex items-center gap-3">
                            <MapPin className={`w-5 h-5 flex-shrink-0 ${ev.softText}`} />
                            <div>
                              <span className="block text-xs uppercase tracking-wide text-white/50">{t.events.location}</span>
                              <span className="font-semibold">{loc(ev.location)}</span>
                            </div>
                          </div>
                        </div>
                        <button
                          onClick={() => setSelectedEvent(ev)}
                          className={`self-start inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-white bg-gradient-to-r ${ev.grad} hover:shadow-xl hover:scale-105 transition-all duration-300`}
                        >
                          {t.events.viewDetails}
                          <ArrowRight className={`w-5 h-5 ${isRTL ? 'rotate-180' : ''}`} />
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Carousel controls */}
          <div className="flex items-center justify-center gap-6 mt-8">
            <button
              onClick={() => goToEvent(eventIndex - 1)}
              aria-label={t.events.prev}
              className="w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
            >
              {isRTL ? <ChevronRight className="w-6 h-6" /> : <ChevronLeft className="w-6 h-6" />}
            </button>
            <div className="flex items-center gap-2">
              {eventItems.map((ev, i) => (
                <button
                  key={ev.id}
                  onClick={() => goToEvent(i)}
                  aria-label={loc(ev.title)}
                  className={`h-2.5 rounded-full transition-all duration-300 ${i === eventIndex ? 'w-8 bg-white' : 'w-2.5 bg-white/40 hover:bg-white/60'}`}
                />
              ))}
            </div>
            <button
              onClick={() => goToEvent(eventIndex + 1)}
              aria-label={t.events.next}
              className="w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
            >
              {isRTL ? <ChevronLeft className="w-6 h-6" /> : <ChevronRight className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </section>

      {/* News article modal */}
      {selectedNews && (
        <div className="fixed inset-0 z-[70] flex items-center justify-center p-4" role="dialog" aria-modal="true">
          <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" onClick={() => setSelectedNews(null)} />
          <div className="relative bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl">
            <div className="relative h-56 sm:h-72">
              <img src={selectedNews.image} alt={loc(selectedNews.title)} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              <button
                onClick={() => setSelectedNews(null)}
                aria-label={t.news.close}
                className={`absolute top-4 ${isRTL ? 'left-4' : 'right-4'} w-10 h-10 rounded-full bg-white/90 hover:bg-white text-gray-800 flex items-center justify-center shadow`}
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="p-6 sm:p-10">
              <div className="flex flex-wrap items-center gap-3 mb-4">
                <span className={`px-3 py-1 rounded-full text-xs font-semibold ${newsCategoryStyles[selectedNews.category]}`}>
                  {t.news.categories[selectedNews.category]}
                </span>
                {selectedNews.date && (
                  <span className="inline-flex items-center gap-1 text-sm text-gray-500">
                    <Calendar className="w-4 h-4" />
                    {loc(selectedNews.date)}
                  </span>
                )}
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-5">{loc(selectedNews.title)}</h3>
              <div className="space-y-4 text-gray-600 text-lg leading-relaxed">
                {selectedNews.body.map((p, i) => (
                  <p key={i}>{loc(p)}</p>
                ))}
              </div>
              <button
                onClick={() => setSelectedNews(null)}
                className="mt-8 px-6 py-3 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold transition-colors"
              >
                {t.news.close}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Event details modal */}
      {selectedEvent && (
        <div className="fixed inset-0 z-[70] flex items-center justify-center p-4" role="dialog" aria-modal="true">
          <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" onClick={() => setSelectedEvent(null)} />
          <div className="relative bg-white rounded-3xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl">
            <div className={`flex items-center justify-between gap-4 px-6 py-5 bg-gradient-to-r ${selectedEvent.grad} text-white`}>
              <h3 className="flex items-center gap-3 text-xl sm:text-2xl font-bold">
                <selectedEvent.icon className="w-6 h-6 flex-shrink-0" />
                {loc(selectedEvent.title)}
              </h3>
              <button
                onClick={() => setSelectedEvent(null)}
                aria-label={t.events.close}
                className="w-10 h-10 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center flex-shrink-0 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="p-6 sm:p-8 grid md:grid-cols-2 gap-8">
              <FallbackImage
                src={selectedEvent.image}
                fallback={selectedEvent.fallback}
                alt={loc(selectedEvent.title)}
                className="w-full h-64 md:h-full min-h-[260px] object-cover rounded-2xl shadow-lg"
              />
              <div>
                <div className="space-y-3 mb-5 text-gray-800">
                  <p className="flex items-center gap-3"><Calendar className={`w-5 h-5 ${selectedEvent.accent}`} /><span><strong>{t.events.date}:</strong> {loc(selectedEvent.date)}</span></p>
                  <p className="flex items-center gap-3"><Clock className={`w-5 h-5 ${selectedEvent.accent}`} /><span><strong>{t.events.time}:</strong> {loc(selectedEvent.time)}</span></p>
                  <p className="flex items-center gap-3"><MapPin className={`w-5 h-5 ${selectedEvent.accent}`} /><span><strong>{t.events.location}:</strong> {loc(selectedEvent.location)}</span></p>
                </div>
                <hr className="mb-5" />
                <h4 className="font-bold text-gray-900 mb-3">{loc(selectedEvent.listTitle)}</h4>
                <ul className="space-y-2 mb-5">
                  {selectedEvent.list.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-gray-700">
                      <CheckCircle2 className={`w-5 h-5 mt-0.5 flex-shrink-0 ${selectedEvent.accent}`} />
                      {loc(item)}
                    </li>
                  ))}
                </ul>
                {selectedEvent.note && (
                  <p className="text-sm text-gray-500 border-t pt-4">{loc(selectedEvent.note)}</p>
                )}
              </div>
            </div>
            <div className="px-6 sm:px-8 pb-6 flex justify-end">
              <button
                onClick={() => setSelectedEvent(null)}
                className="px-6 py-3 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold transition-colors"
              >
                {t.events.close}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Admission Section */}
      <section id="admission" className="py-24 bg-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-50 via-white to-purple-50" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <Award className="w-4 h-4" />
              {t.admission.badge}
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              {t.admission.title1}
              <span className="block text-green-600">{t.admission.title2}</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t.admission.description}
            </p>
            
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Admission Process */}
            <div className="bg-white rounded-3xl p-10 shadow-xl border border-gray-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center gap-3">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                  <Target className="w-6 h-6 text-blue-600" />
                </div>
                {t.admission.processTitle}
              </h3>
              <div className="space-y-8">
                {[
                  { step: 1, titleKey: 'step1', descKey: 'step1Desc' },
                  { step: 2, titleKey: 'step2', descKey: 'step2Desc' },
                  { step: 3, titleKey: 'step3', descKey: 'step3Desc' },
                  { step: 4, titleKey: 'step4', descKey: 'step4Desc' },
                ].map((item, index) => (
                  <div key={item.step} className="flex gap-6 group">
                    <div className="relative">
                      <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center text-white font-bold text-xl shadow-lg group-hover:scale-110 transition-transform">
                        {item.step}
                      </div>
                      {index < 3 && (
                        <div className={`absolute top-full ${isRTL ? 'right-1/2 translate-x-1/2' : 'left-1/2 -translate-x-1/2'} w-0.5 h-8 bg-gradient-to-b from-blue-500 to-transparent`} />
                      )}
                    </div>
                    <div className="flex-1 pb-8">
                      <h4 className="font-bold text-gray-900 text-lg mb-1">{t.admission[item.titleKey as keyof typeof t.admission]}</h4>
                      <p className="text-gray-600">{t.admission[item.descKey as keyof typeof t.admission]}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Requirements */}
            <div className="space-y-8">
              <div className="bg-white rounded-3xl p-10 shadow-xl border border-gray-100">
                <h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center gap-3">
                  <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                    <CheckCircle2 className="w-6 h-6 text-green-600" />
                  </div>
                  {t.admission.requirementsTitle}
                </h3>
                <ul className="space-y-4">
                  {[
                    t.admission.req1,
                    t.admission.req2,
                    t.admission.req3,
                    t.admission.req4,
                    t.admission.req5,
                  ].map((req) => (
                    <li key={req} className="flex items-start gap-4 p-4 bg-green-50 rounded-xl">
                      <CheckCircle2 className="w-6 h-6 text-green-500 flex-shrink-0" />
                      <span className="text-gray-700 font-medium">{req}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Registration Banner */}
              <div className="relative rounded-3xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=600&h=300&fit=crop"
                  alt="Graduation"
                  className="w-full h-48 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-green-600 to-emerald-600 opacity-90" />
                <div className="absolute inset-0 flex items-center justify-center text-center p-8">
                  <div>
                    <p className="text-green-100 font-semibold mb-2">{t.admission.bannerLabel}</p>
                    <p className="text-4xl font-bold text-white mb-2">{t.admission.bannerMain}</p>
                    <p className="text-green-100">{t.admission.bannerSub}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

{/* Gallery Section */}
      <section id="gallery" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-cyan-100 text-cyan-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <Sparkles className="w-4 h-4" />
              {t.gallery.badge}
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              {t.gallery.title1}
              <span className="block text-cyan-600">{t.gallery.title2}</span>
            </h2>
          </div>

          {/* Main Gallery Image */}
          <div 
            onClick={() => setLightbox({ 
              url: galleryImages[activeImage].url, 
              title: isRTL ? (galleryImages[activeImage].altAr || galleryImages[activeImage].alt) : galleryImages[activeImage].alt 
            })}
            className="relative rounded-3xl overflow-hidden shadow-2xl mb-8 bg-gray-900 cursor-pointer group h-[420px] sm:h-[540px]"
          >
            <img
              src={galleryImages[activeImage].url}
              alt={isRTL ? (galleryImages[activeImage].altAr || galleryImages[activeImage].alt) : galleryImages[activeImage].alt}
              className="w-full h-full object-cover object-center transition-all duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent pointer-events-none" />

            {/* Prev / Next arrows */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                setActiveImage((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
              }}
              className={`absolute top-1/2 -translate-y-1/2 ${isRTL ? 'right-4 sm:right-6' : 'left-4 sm:left-6'} z-30 w-11 h-11 rounded-full bg-black/40 hover:bg-black/70 backdrop-blur-md text-white flex items-center justify-center transition-all duration-300 opacity-80 hover:opacity-100 hover:scale-110 shadow-lg border border-white/20`}
              aria-label="Previous"
            >
              <ChevronLeft className={`w-6 h-6 ${isRTL ? 'rotate-180' : ''}`} />
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                setActiveImage((prev) => (prev + 1) % galleryImages.length);
              }}
              className={`absolute top-1/2 -translate-y-1/2 ${isRTL ? 'left-4 sm:left-6' : 'right-4 sm:right-6'} z-30 w-11 h-11 rounded-full bg-black/40 hover:bg-black/70 backdrop-blur-md text-white flex items-center justify-center transition-all duration-300 opacity-80 hover:opacity-100 hover:scale-110 shadow-lg border border-white/20`}
              aria-label="Next"
            >
              <ChevronRight className={`w-6 h-6 ${isRTL ? 'rotate-180' : ''}`} />
            </button>

            {/* Bottom Info & Counter */}
            <div className={`absolute bottom-6 sm:bottom-8 ${isRTL ? 'right-6 sm:right-8 left-6 sm:left-8' : 'left-6 sm:left-8 right-6 sm:right-8'} z-30 flex flex-wrap justify-between items-end gap-4`}>
              <div>
                <p className="text-white/80 text-sm mb-1">{t.gallery.campusGallery}</p>
                <h3 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-2">
                  <span>{isRTL ? (galleryImages[activeImage].altAr || galleryImages[activeImage].alt) : galleryImages[activeImage].alt}</span>
                  <Maximize2 className="w-4 h-4 text-white/70" />
                </h3>
              </div>
              <div className="flex items-center gap-2 bg-black/50 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/15 text-white text-xs font-semibold">
                <span>{activeImage + 1}</span>
                <span className="text-white/50">/</span>
                <span className="text-white/80">{galleryImages.length}</span>
              </div>
            </div>
          </div>

          {/* Thumbnail Grid */}
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-3 sm:gap-4">
            {galleryImages.map((image, index) => (
              <button
                key={index}
                onClick={() => setActiveImage(index)}
                className={`relative rounded-2xl overflow-hidden aspect-[4/3] sm:aspect-square transition-all duration-300 shadow-md group ${
                  activeImage === index ? 'ring-4 ring-cyan-500 scale-95 shadow-xl' : 'hover:scale-105 opacity-85 hover:opacity-100'
                }`}
              >
                <img
                  src={image.url}
                  alt={isRTL ? (image.altAr || image.alt) : image.alt}
                  className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-500"
                />
                {activeImage !== index && (
                  <div className="absolute inset-0 bg-black/30 group-hover:bg-transparent transition-colors" />
                )}
              </button>
            ))}
          </div>
</div>
      </section>

      

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className={`absolute top-0 ${isRTL ? 'right-1/4' : 'left-1/4'} w-96 h-96 bg-blue-500/20 rounded-full blur-3xl`} />
          <div className={`absolute bottom-0 ${isRTL ? 'left-1/4' : 'right-1/4'} w-96 h-96 bg-purple-500/20 rounded-full blur-3xl`} />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-white/10 text-white px-4 py-2 rounded-full text-sm font-semibold mb-6 backdrop-blur-sm">
              <Mail className="w-4 h-4" />
              {t.contact.badge}
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              {t.contact.title}
            </h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              {t.contact.description}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {[
              {
                icon: MapPin,
                titleKey: 'visitUs' as const,
                content: isRTL ? ['بني مسوس', 'الجزائر العاصمة'] : ['Beni Messous', 'Algiers, Algeria'],
                color: 'from-blue-500 to-cyan-500',
              },
              {
                icon: Facebook,
                titleKey: 'followUs' as const,
                content: ['@ENS.SourdsMuets.dz'],
                link: 'https://www.facebook.com/ENS.SourdsMuets.dz/',
                color: 'from-indigo-500 to-purple-500',
              },
              {
                icon: Globe,
                titleKey: 'ministry' as const,
                content: ['www.mesrs.dz'],
                link: 'https://www.mesrs.dz',
                color: 'from-purple-500 to-pink-500',
              },
            ].map((item) => (
              <div
                key={item.titleKey}
                className="group relative bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10 hover:bg-white/10 transition-all duration-300 hover:-translate-y-2"
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${item.color} rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform`}>
                  <item.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{t.contact[item.titleKey]}</h3>
                {item.link ? (
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/70 hover:text-white transition-colors flex items-center gap-2"
                  >
                    {item.content[0]}
                    <ExternalLink className="w-4 h-4" />
                  </a>
                ) : (
                  item.content.map((line) => (
                    <p key={line} className="text-white/70">{line}</p>
                  ))
                )}
              </div>
            ))}
          </div>

          {/* Map Section */}
          <div className="relative rounded-3xl overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1524661135-423995f22d0b?w=1200&h=400&fit=crop"
              alt="Algiers cityscape"
              className="w-full h-64 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-purple-900/90" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <MapPin className="w-16 h-16 text-white mx-auto mb-4 animate-bounce" />
                <h3 className="text-2xl font-bold text-white mb-2">{t.contact.visitCampus}</h3>
                <p className="text-white/70 mb-6">{t.contact.campusLocation}</p>
                <a
                  href="https://maps.app.goo.gl/rJwXzc4xZ3DKtVo37"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-white text-blue-600 px-6 py-3 rounded-full font-semibold hover:bg-blue-50 transition-colors"
                >
                  <MapPin className="w-5 h-5" />
                  {t.contact.openInMaps}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-950 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div className="md:col-span-2">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-20 h-20 rounded-full flex items-center justify-center shadow-2xl overflow-hidden bg-white p-1.5 ring-2 ring-amber-400/60 flex-shrink-0">
                  <img src="/assets/pic5.jpeg" alt="ENSSM Logo" className="w-full h-full object-contain rounded-full" />
                </div>
                <div>
                  <span className="font-bold text-2xl tracking-tight text-white">ENSSM</span>
                  <span className="text-gray-400 block text-sm">{t.footer.subtitle}</span>
                </div>
              </div>
              <p className="text-gray-400 mb-6 max-w-md">
                {t.footer.description}
              </p>
              <p className={`text-2xl text-gray-300 ${isRTL ? '' : 'font-arabic'}`} dir={isRTL ? 'ltr' : 'rtl'}>
                {isRTL ? 'Higher School for Teachers of Deaf and Mute' : 'المدرسة العليا لأساتذة الصم والبكم'}
              </p>
            </div>

            <div>
              <h4 className="font-bold text-lg mb-6">{t.footer.quickLinks}</h4>
              <ul className="space-y-3">
                {[
                  { key: 'about', label: t.nav.about },
                  { key: 'programs', label: t.nav.programs },
                  { key: 'wajihat', label: t.nav.wajihat },
                  { key: 'news', label: t.nav.news },
                  { key: 'events', label: t.nav.events },
                  { key: 'admission', label: t.nav.admission },
                  { key: 'gallery', label: t.nav.gallery },
                  { key: 'contactUs', label: t.nav.contactUs },
                ].map((item) => (
                  <li key={item.key}>
                    <button
                      onClick={() => item.key === 'contactUs' ? scrollToSection('contact') : scrollToSection(item.key)}
                      className="text-gray-400 hover:text-white transition-colors flex items-center gap-2 group"
                    >
                      <ArrowRight className={`w-4 h-4 opacity-0 ${isRTL ? 'translate-x-2 rotate-180 group-hover:-translate-x-0' : '-translate-x-2 group-hover:translate-x-0'} group-hover:opacity-100 transition-all`} />
                      {item.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-lg mb-6">{t.footer.officialLinks}</h4>
              <ul className="space-y-3">
                <li>
                  <a
                    href="https://www.mesrs.dz"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-colors flex items-center gap-2"
                  >
                    {t.footer.ministryLink}
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </li>
                
                <li>
                  <a
                    href="https://www.mesrs.dz/index.php/plateformes-mesrs-ar/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-colors flex items-center gap-2"
                  >
                    {t.footer.platformsLink}
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </li>
				<li>
                  <a
                    href="https://www.facebook.com/ENS.SourdsMuets.dz/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-colors flex items-center gap-2"
                  >
                    {t.footer.facebookLink}
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-gray-500 text-sm">
                &copy; {new Date().getFullYear()} ENS-SM. {t.footer.rights}
              </p>
              <p className="text-gray-500 text-sm">
                {isRTL ? 'بني مسوس، الجزائر العاصمة' : 'Beni Messous, Algiers, Algeria'}
              </p>
            </div>
          </div>
        </div>
      </footer>

      {/* CSS Animations */}
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animate-fadeIn {
          animation: fadeIn 1s ease-out forwards;
        }
        .animate-slideUp {
          animation: slideUp 1s ease-out forwards;
        }
        .font-arabic {
          font-family: 'Noto Sans Arabic', 'Segoe UI', sans-serif;
        }
      `}</style>

      {/* High-Resolution Image Lightbox Modal */}
      {lightbox && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md p-4 sm:p-6 animate-fadeIn"
          onClick={() => setLightbox(null)}
        >
          <div 
            className="relative max-w-5xl max-h-[92vh] w-full flex flex-col items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setLightbox(null)}
              className="absolute -top-12 right-0 p-2.5 rounded-full bg-white/10 hover:bg-white/25 text-white transition-all shadow-lg flex items-center gap-1.5 text-xs font-semibold"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
              <span>{isRTL ? 'إغلاق' : 'Close'}</span>
            </button>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-slate-950 flex items-center justify-center max-h-[82vh] w-auto border border-white/10">
              <img
                src={lightbox.url}
                alt={lightbox.title || 'Preview'}
                className="max-h-[82vh] max-w-full w-auto h-auto object-contain"
              />
            </div>
            {lightbox.title && (
              <p className="mt-4 text-center text-white/95 text-sm sm:text-base font-medium px-5 py-2 rounded-full bg-white/15 backdrop-blur-md border border-white/10 shadow-lg">
                {lightbox.title}
              </p>
            )}
          </div>
        </div>
      )}

      <ChatBot />
    </div>
  );
}
