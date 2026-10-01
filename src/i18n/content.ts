/**
 * All translatable copy for the site.
 * `contentEn` is the source of truth for the shape; `contentAr` must match it.
 */

export type Dir = "ltr" | "rtl";

export const contentEn = {
  dir: "ltr" as Dir,
  name: "Naif Alghamdi",
  firstName: "Naif",
  lastName: "Alghamdi",
  role: "Front-End Developer",
  location: "Riyadh, Saudi Arabia",
  availability: "Available for opportunities",

  nav: [
    { id: "home", label: "Home" },
    { id: "work", label: "Work" },
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "experience", label: "Experience" },
    { id: "certificates", label: "Certificates" },
    { id: "contact", label: "Contact" },
  ],

  ui: {
    backToTop: "Back to top",
    skipToContent: "Skip to content",
    resume: "Resume",
    downloadResume: "Download Resume",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    close: "Close",
    scroll: "Scroll",
    viewWork: "View my work",
    letsTalk: "Let's talk",
    viewProject: "View project",
    caseStudy: "Case study",
    github: "GitHub",
    inDevelopment: "In development",
    viewCertificate: "View certificate",
    theme: "Switch theme",
    language: "العربية",
    languageAria: "Switch language",
  },

  hero: {
    headline: "Building clean, responsive and engaging digital experiences.",
    sub: "I'm a Front-End Developer focused on creating modern interfaces with clean code, thoughtful interactions, and responsive design.",
    portraitAlt: "Naif Alghamdi working on a laptop",
  },

  statement: {
    line: "Turning ideas into thoughtful digital experiences.",
    body: "I build responsive and user-focused interfaces with a strong interest in modern web development, clean design, and interactive experiences.",
  },

  about: {
    label: "About me",
    heading: "A developer who cares about the details.",
    body: "I'm a Front-End Developer with a background in Programming Technology & Web Development. I enjoy transforming ideas into clean, responsive and interactive web experiences.",
    basedIn: "Based in",
    education: "Education",
    focus: "Focus",
  },

  skills: {
    label: "Skills",
    heading: "Skills & Technologies",
    groups: [
      { title: "Front-End", items: ["HTML", "CSS", "JavaScript", "React", "Bootstrap"] },
      { title: "Tools", items: ["Git", "GitHub", "VS Code", "Vite", "SQL"] },
      { title: "Design & UI", items: ["Responsive Design", "UI Development"] },
    ],
  },

  work: {
    label: "Selected work",
    heading: "Projects I've built.",
    body: "A selection of projects that represent my development journey and practical work.",
    caseStudyLabel: "Case study",
    sections: {
      overview: "Overview",
      problem: "Problem",
      solution: "Solution",
      myRole: "My role",
      challenges: "Challenges",
      outcome: "Outcome",
      features: "Key features",
      tech: "Technologies",
    },
  },

  projects: [
    {
      id: "khabir",
      number: "01",
      title: "Khabir",
      tagline: "AI-Powered Resume Analyzer",
      description:
        "A smart resume analysis platform designed to evaluate resumes, identify relevant keywords, provide ATS-oriented scoring, highlight skill gaps, and match resumes with job requirements.",
      tech: ["React", "TypeScript", "Node.js", "Express", "PostgreSQL", "Tailwind CSS"],
      caseStudy: {
        overview:
          "Khabir analyses a resume against a target job description and returns structured, actionable feedback instead of a generic score.",
        problem:
          "Applicants rarely know why a resume is filtered out by applicant tracking systems, or which skills a job description expects.",
        solution:
          "A web platform that parses the resume, extracts keywords, produces an ATS-oriented score, surfaces skill gaps and matches the content against job requirements.",
        myRole:
          "Front-end development: interface structure, layout, components, responsive behaviour and presentation of the analysis results.",
        features: [
          "Resume parsing and keyword extraction",
          "ATS-oriented scoring",
          "Skill gap highlighting",
          "Job requirement matching",
          "Structured, readable analysis results",
        ],
        challenges:
          "Presenting a large amount of analysis data in a way that stays readable and calm, and keeping the interface responsive across screen sizes.",
        outcome:
          "A working platform that turns a resume into clear, structured feedback with live demo and source code below.",
      },
    },
    {
      id: "nova",
      number: "02",
      title: "NOVA",
      tagline: "SaaS product landing page",
      description:
        "A production-quality marketing page for a fictional productivity platform, built to feel like a real commercial product launch. Animated dashboard mockup, feature showcase, pricing with a billing-period toggle, testimonials and FAQ.",
      tech: ["React", "Tailwind CSS", "shadcn/ui", "Framer Motion", "JavaScript"],
      caseStudy: {
        overview:
          "NOVA is a self-initiated product exercise: a complete marketing page for a fictional productivity platform, built to the standard of a real SaaS launch rather than a portfolio template.",
        problem:
          "Landing pages are usually where a front-end portfolio looks generic. A believable commercial page needs product copy, visual hierarchy, pricing logic and motion that all agree with each other.",
        solution:
          "A single-page React app built from independent sections, with all content kept in a single data file, an animated in-browser dashboard mockup in the hero, and a full narrative: social proof, features, product showcase, use cases, pricing, testimonials, FAQ and a closing call to action.",
        myRole:
          "Front-end development end to end: section architecture, design tokens, layout and components, animation, responsive behaviour, and a content model that keeps copy separate from markup.",
        features: [
          "Sticky navigation with an animated mobile menu",
          "Hero with an animated in-browser dashboard mockup: KPI cards, charts, tasks and team activity",
          "Six-feature grid with hover interactions, plus a three-part product showcase",
          "Interactive pricing with a monthly / yearly toggle",
          "Social proof strip, testimonials and an animated FAQ accordion",
        ],
        challenges:
          "Keeping motion purposeful across a long page — entrance, scroll reveal and micro-interactions had to feel premium without becoming distracting — and holding full responsiveness from small phones to large screens while an animated mockup sits above the fold.",
        outcome:
          "A deployed, publicly accessible page that reads as a real product launch, with the source on GitHub. The brand, companies and data are fictional and used only for demonstration.",
      },
    },
    {
      id: "forge",
      number: "03",
      title: "Forge",
      tagline: "Developer platform landing page",
      description:
        "A dark, technical landing page for a fictional developer platform, modelling a full product story: a WebGL hero, an interactive CLI that runs real commands, a build-to-production pipeline, a live developer dashboard, and code and API sections.",
      tech: ["React", "Three.js", "Tailwind CSS", "shadcn/ui", "Framer Motion"],
      caseStudy: {
        overview:
          "Forge is a self-initiated showcase of a developer tool: one page that walks the whole product story, from installing a CLI to watching a deployment succeed on a dashboard.",
        problem:
          "Developer-tool marketing usually stops at a hero and a feature list. Showing how a tool is actually used means demonstrating real interactions rather than describing them.",
        solution:
          "A single-page React build where the CLI section runs clickable commands that render terminal output, the git workflow animates a build → tests → preview → production pipeline, and a dashboard mock shows health metrics, a request graph, build history and live logs — next to syntax-highlighted code samples and a tabbed API reference.",
        myRole:
          "Front-end development: interaction design and implementation for the terminal, pipeline and dashboard mocks, reusable UI primitives, a WebGL background built with Three.js, syntax highlighting and responsive layout.",
        features: [
          "Animated hero with a scripted terminal and one-click command copy",
          "Interactive CLI with clickable commands that render terminal output",
          "Git workflow animating a build → tests → preview → production pipeline",
          "Developer dashboard mock: health metrics, request graph, build history and live logs",
          "Syntax-highlighted code samples and an API section with Request / Response / JavaScript / cURL tabs",
        ],
        challenges:
          "Making simulated interactions feel real — sequencing the terminal script and the CI pipeline so they read as running processes rather than static animation — and keeping dense technical content such as code, logs and metrics legible on small screens.",
        outcome:
          "A complete single page covering an entire product narrative, with a WebGL background that respects reduced-motion preferences and no console errors.",
      },
    },
  ],

  experience: {
    label: "Experience",
    heading: "Where I've been learning by doing.",
    items: [
      {
        kind: "Cooperative Training",
        role: "Technical Support",
        description:
          "Completed cooperative training involving computer maintenance, troubleshooting, operating system installation, software deployment, device preparation, and technical support within a college environment.",
      },
    ],
  },

  education: {
    label: "Education",
    badge: "Diploma",
    items: [
      {
        degree: "Diploma in Programming Technology & Web Development",
        school: "College of Communications & Information in Riyadh",
      },
    ],
  },

  certificates: {
    label: "Certificates & learning",
    heading: "Continuous learning.",
    items: [
      { name: "SQL Fundamentals", issuer: "MCIT / Future Skills" },
      { name: "Technical Support Fundamentals", issuer: "Google" },
      { name: "Getting Started with Front-End and Web Development", issuer: "Meta / Coursera" },
      { name: "Introduction to Artificial Intelligence", issuer: "SDAIA" },
    ],
  },

  focus: {
    label: "Currently focused on",
    items: [
      "Front-End Development",
      "Responsive Web Design",
      "JavaScript",
      "UI Development",
      "Building Real Projects",
    ],
    servicesLabel: "What I can build",
    services: [
      "Responsive Websites",
      "Landing Pages",
      "Portfolio Websites",
      "Interactive User Interfaces",
      "Website Improvements",
      "Front-End Implementations",
    ],
  },

  process: {
    label: "Process",
    heading: "How I work",
    steps: [
      { step: "01", title: "Understand", body: "Understand the idea, goal, and user needs." },
      { step: "02", title: "Design", body: "Plan the structure, layout, and user experience." },
      {
        step: "03",
        title: "Build",
        body: "Develop the interface using clean and responsive code.",
      },
      { step: "04", title: "Refine", body: "Test, improve, and polish the final experience." },
    ],
  },

  contact: {
    label: "Let's connect",
    heading: "Let's build something great.",
    body: "Have an opportunity, project, or idea? I'd love to hear from you.",
    getInTouch: "Get in touch",
    email: "Email",
    elsewhere: "Elsewhere",
    name: "Name",
    message: "Message",
    namePlaceholder: "Your name",
    emailPlaceholder: "you@example.com",
    messagePlaceholder: "Tell me about the idea or opportunity.",
    send: "Send message",
    sending: "Sending…",
    errName: "Please enter your name.",
    errEmail: "Please enter a valid email.",
    errMessage: "Please write at least 10 characters.",
    errFix: "Please fix the highlighted fields.",
    mailtoNote: "Your email app is opening with the message ready to send.",
    successNote: "Thanks — your message has been sent.",
    failNote: "Something went wrong. Please email me directly instead.",
  },
};

export type Content = typeof contentEn;

export const contentAr: Content = {
  dir: "rtl" as const,
  name: "نايف الغامدي",
  firstName: "نايف",
  lastName: "الغامدي",
  role: "مطوّر واجهات أمامية",
  location: "الرياض، المملكة العربية السعودية",
  availability: "متاح للفرص الوظيفية",

  nav: [
    { id: "home", label: "الرئيسية" },
    { id: "work", label: "الأعمال" },
    { id: "about", label: "نبذة" },
    { id: "skills", label: "المهارات" },
    { id: "experience", label: "الخبرة" },
    { id: "certificates", label: "الشهادات" },
    { id: "contact", label: "تواصل" },
  ],

  ui: {
    backToTop: "العودة للأعلى",
    skipToContent: "تخطَّ إلى المحتوى",
    resume: "السيرة الذاتية",
    downloadResume: "تحميل السيرة الذاتية",
    openMenu: "فتح القائمة",
    closeMenu: "إغلاق القائمة",
    close: "إغلاق",
    scroll: "مرّر",
    viewWork: "شاهد أعمالي",
    letsTalk: "لنتحدث",
    viewProject: "زيارة المشروع",
    caseStudy: "دراسة الحالة",
    github: "GitHub",
    inDevelopment: "قيد التطوير",
    viewCertificate: "عرض الشهادة",
    theme: "تبديل المظهر",
    language: "English",
    languageAria: "تغيير اللغة",
  },

  hero: {
    headline: "أبني تجارب رقمية نظيفة، متجاوبة، وجذّابة.",
    sub: "مطوّر واجهات أمامية يركّز على بناء واجهات عصرية بكود نظيف وتفاعلات مدروسة وتصميم متجاوب.",
    portraitAlt: "نايف الغامدي يعمل على حاسوبه المحمول",
  },

  statement: {
    line: "أحوّل الأفكار إلى تجارب رقمية مدروسة.",
    body: "أبني واجهات متجاوبة تركّز على المستخدم، مع اهتمام كبير بتطوير الويب الحديث والتصميم النظيف والتجارب التفاعلية.",
  },

  about: {
    label: "نبذة عني",
    heading: "مطوّر يهتم بالتفاصيل.",
    body: "مطوّر واجهات أمامية بخلفية في تقنية البرمجة وتطوير الويب. أستمتع بتحويل الأفكار إلى تجارب ويب نظيفة ومتجاوبة وتفاعلية.",
    basedIn: "المقر",
    education: "التعليم",
    focus: "التخصص",
  },

  skills: {
    label: "المهارات",
    heading: "المهارات والتقنيات",
    groups: [
      { title: "الواجهات الأمامية", items: ["HTML", "CSS", "JavaScript", "React", "Bootstrap"] },
      { title: "الأدوات", items: ["Git", "GitHub", "VS Code", "Vite", "SQL"] },
      { title: "التصميم والواجهة", items: ["التصميم المتجاوب", "تطوير الواجهات"] },
    ],
  },

  work: {
    label: "أعمال مختارة",
    heading: "مشاريع قمت ببنائها.",
    body: "مجموعة من المشاريع التي تعكس رحلتي في التطوير وعملي العملي.",
    caseStudyLabel: "دراسة حالة",
    sections: {
      overview: "نظرة عامة",
      problem: "المشكلة",
      solution: "الحل",
      myRole: "دوري",
      challenges: "التحديات",
      outcome: "النتيجة",
      features: "أبرز المميزات",
      tech: "التقنيات",
    },
  },

  projects: [
    {
      id: "khabir",
      number: "٠١",
      title: "خبير",
      tagline: "محلّل سير ذاتية مدعوم بالذكاء الاصطناعي",
      description:
        "منصة ذكية لتحليل السير الذاتية: تقيّم السيرة، تستخرج الكلمات المفتاحية، تمنح درجة توافق مع أنظمة التوظيف، وتوضّح الفجوات في المهارات ومدى مطابقة السيرة لمتطلبات الوظيفة.",
      tech: ["React", "TypeScript", "Node.js", "Express", "PostgreSQL", "Tailwind CSS"],
      caseStudy: {
        overview:
          "يحلّل «خبير» السيرة الذاتية مقابل وصف وظيفي محدد ويعيد ملاحظات منظّمة وقابلة للتنفيذ بدل درجة عامة.",
        problem:
          "غالباً لا يعرف المتقدّم سبب استبعاد سيرته من أنظمة التوظيف، ولا المهارات التي يتوقعها الوصف الوظيفي.",
        solution:
          "منصة ويب تقرأ السيرة، تستخرج الكلمات المفتاحية، تحسب درجة توافق مع أنظمة التوظيف، وتُظهر الفجوات ومدى المطابقة مع متطلبات الوظيفة.",
        myRole:
          "تطوير الواجهة الأمامية: بنية الواجهة والتخطيط والمكوّنات والتجاوب وعرض نتائج التحليل.",
        features: [
          "قراءة السيرة الذاتية واستخراج الكلمات المفتاحية",
          "درجة توافق مع أنظمة التوظيف",
          "إبراز الفجوات في المهارات",
          "مطابقة متطلبات الوظيفة",
          "نتائج تحليل منظّمة وسهلة القراءة",
        ],
        challenges:
          "عرض كمية كبيرة من بيانات التحليل بشكل هادئ وسهل القراءة، مع الحفاظ على تجاوب الواجهة على مختلف الشاشات.",
        outcome:
          "منصة تعمل وتحوّل السيرة الذاتية إلى ملاحظات واضحة ومنظّمة، مع رابط العرض المباشر والشفرة المصدرية أدناه.",
      },
    },
    {
      id: "nova",
      number: "٠٢",
      title: "نوفا",
      tagline: "صفحة هبوط لمنصة SaaS",
      description:
        "صفحة تسويقية احترافية لمنصة إنتاجية خيالية، مبنية لتبدو كإطلاق منتج تجاري حقيقي. لوحة بيانات متحركة في الواجهة، عرض للمزايا، أسعار مع تبديل بين الدفع الشهري والسنوي، آراء العملاء وأسئلة شائعة.",
      tech: ["React", "Tailwind CSS", "shadcn/ui", "Framer Motion", "JavaScript"],
      caseStudy: {
        overview:
          "«نوفا» مشروع تصويري بادرت به: صفحة تسويقية كاملة لمنصة إنتاجية خيالية، مبنية بمستوى إطلاق منتج حقيقي لا بمستوى قالب بورتفوليو.",
        problem:
          "صفحات الهبوط هي المكان الذي تبدو فيه البورتفوليو عامةً عادةً. الصفحة التجارية المقنعة تحتاج نصوصاً متماسكة وترتيباً بصرياً منطقياً وتسعيراً وحركةً تتفق جميعها مع بعضها.",
        solution:
          "تطبيق React بصفحة واحدة مبني من أقسام مستقلة، مع كل المحتوى في ملف بيانات واحد، ولوحة بيانات متحركة داخل المتصفح في قسم الواجهة، وسرد كامل: إشارات ثقة، ومزايا، وعرض للمنتج، وحالات استخدام، وأسعار، وآراء عملاء، وأسئلة شائعة، ودعوة ختامية.",
        myRole:
          "تطوير الواجهة الأمامية بالكامل: بنية الأقسام، ورموز التصميم، والتخطيط والمكوّنات، والحركة، والتجاوب، ونموذج محتوى يفصل النصوص عن البنية.",
        features: [
          "شريط تنقّل ثابت مع قائمة جوال متحركة",
          "واجهة رئيسية مع لوحة بيانات متحركة داخل المتصفح: بطاقات مؤشرات ورسوم بيانية ومهام ونشاط الفريق",
          "شبكة مزايا بستة عناصر مع تفاعلات، إضافة إلى عرض منتج من ثلاثة أجزاء",
          "أسعار تفاعلية مع تبديل بين الدفع الشهري والسنوي",
          "شريط إشارات ثقة وآراء عملاء وأسئلة شائعة متحركة",
        ],
        challenges:
          "إبقاء الحركة مقصودة على صفحة طويلة — الدخول والظهور عند التمرير والتفاعلات الدقيقة — دون أن تشتت، مع الحفاظ على تجاوب كامل من الهواتف الصغيرة إلى الشاشات الكبيرة بينما لوحة البيانات المتحركة في أعلى الصفحة.",
        outcome:
          "صفحة منشورة ومتاحة للعموم تُقرأ كإطلاق منتج حقيقي، مع الكود على GitHub. العلامة والشركات والبيانات خيالية وتُستخدم للعرض فقط.",
      },
    },
    {
      id: "forge",
      number: "٠٣",
      title: "فورج",
      tagline: "صفحة هبوط لمنصة مطوّرين",
      description:
        "صفحة هبوط داكنة التقنية لمنصة مطوّرين خيالية، تحكي قصة منتج كاملة: خلفية ثلاثية الأبعاد، وقسم أوامر تفاعلي يُنفّذ أوامر حقيقية، ومسار من البناء حتى الإنتاج، ولوحة مطوّر حيّة، وأقسام كود وواجهة برمجية.",
      tech: ["React", "Three.js", "Tailwind CSS", "shadcn/ui", "Framer Motion"],
      caseStudy: {
        overview:
          "«فورج» عرض بادرته لأداة مطوّرين: صفحة واحدة تروي القصة الكاملة للمنتج، من تثبيت واجهة أوامر في الطرفية إلى مشاهدة نجاح النشر على لوحة التحكم.",
        problem:
          "تسويق أدوات المطوّرين يتوقف عادةً عند واجهة رئيسية وقائمة مزايا. وإظهار كيف تُستخدم الأداة فعلياً يعني تنفيذ تفاعلات حقيقية لا وصفها.",
        solution:
          "تطبيق React بصفحة واحدة، ينفّذ فيه قسم واجهة الأوامر أوامر قابلة للنقر تُظهر مخرجات طرفية واقعية، ويتحرّك فيه مسار العمل من البناء إلى الاختبارات إلى المعاينة إلى الإنتاج، وتعرض لوحة المطوّر مؤشرات الصحة ورسم الطلبات وسجل البناء والسجل الحي — إلى جانب عينات كود ملوّنة ومرجع واجهة برمجية بتبويبات.",
        myRole:
          "تطوير الواجهة الأمامية: تصميم وتنفيذ التفاعلات للطرفية ومسار النشر ولوحة التحكم، والمكوّنات القابلة لإعادة الاستخدام، وخلفية WebGL مبنية بـ Three.js، وتلوين الكود، والتخطيط المتجاوب.",
        features: [
          "واجهة رئيسية متحركة مع طرفية نصية وزر نسخ للأمر بنقرة واحدة",
          "قسم واجهة أوامر تفاعلي: أوامر قابلة للنقر تُظهر مخرجات طرفية واقعية",
          "مسار عمل Git متحرك: بناء ← اختبارات ← معاينة ← إنتاج",
          "لوحة تحكم للمطوّر: مؤشرات صحة، ورسم طلبات، وسجل بناء، وسجل حي",
          "عينات كود ملوّنة، وقسم واجهة برمجية بتبويبات الطلب والاستجابة وجافاسكربت وcURL",
        ],
        challenges:
          "جعل التفاعلات المحاكاة تبدوان حقيقيتين — بتسلسل سيناريو الطرفية ومسار التكامل المستمر حتى يُقرأا كعمليتين تعملان لا كحركة ثابتة — مع الحفاظ على وضوح المحتوى التقني الكثيف مثل الكود والسجلات والمؤشرات على الشاشات الصغيرة.",
        outcome:
          "صفحة واحدة متكاملة تغطي قصة منتج كاملة، بخلفية WebGL تحترم تفضيل تقليل الحركة وبلا أخطاء في وحدة التحكم.",
      },
    },
  ],

  experience: {
    label: "الخبرة",
    heading: "حيث تعلّمت بالممارسة.",
    items: [
      {
        kind: "تدريب تعاوني",
        role: "الدعم الفني",
        description:
          "أنهيت تدريباً تعاونياً شمل صيانة الحاسب واستكشاف الأعطال وتثبيت أنظمة التشغيل ونشر البرمجيات وتجهيز الأجهزة وتقديم الدعم الفني داخل بيئة الكلية.",
      },
    ],
  },

  education: {
    label: "التعليم",
    badge: "دبلوم",
    items: [
      {
        degree: "دبلوم تقنية البرمجة وتطوير الويب",
        school: "كلية الاتصالات والمعلومات بالرياض",
      },
    ],
  },

  certificates: {
    label: "الشهادات والتعلّم",
    heading: "تعلّم مستمر.",
    items: [
      { name: "أساسيات SQL", issuer: "وزارة الاتصالات / مستقبل المهارات" },
      { name: "أساسيات الدعم الفني", issuer: "Google" },
      { name: "مقدمة في تطوير الواجهات والويب", issuer: "ميتا / كورسيرا" },
      { name: "مقدمة في الذكاء الاصطناعي", issuer: "سدايا" },
    ],
  },

  focus: {
    label: "أركّز حالياً على",
    items: [
      "تطوير الواجهات الأمامية",
      "التصميم المتجاوب",
      "JavaScript",
      "تطوير واجهات المستخدم",
      "بناء مشاريع حقيقية",
    ],
    servicesLabel: "ما يمكنني بناؤه",
    services: [
      "مواقع متجاوبة",
      "صفحات هبوط",
      "مواقع أعمال شخصية",
      "واجهات تفاعلية",
      "تحسين المواقع القائمة",
      "تنفيذ واجهات أمامية",
    ],
  },

  process: {
    label: "المنهجية",
    heading: "كيف أعمل",
    steps: [
      { step: "٠١", title: "الفهم", body: "فهم الفكرة والهدف واحتياجات المستخدم." },
      { step: "٠٢", title: "التصميم", body: "تخطيط البنية والتنسيق وتجربة المستخدم." },
      { step: "٠٣", title: "البناء", body: "تطوير الواجهة بكود نظيف ومتجاوب." },
      { step: "٠٤", title: "التحسين", body: "الاختبار والتحسين وصقل التجربة النهائية." },
    ],
  },

  contact: {
    label: "لنتواصل",
    heading: "لنبنِ شيئاً مميزاً.",
    body: "لديك فرصة أو مشروع أو فكرة؟ يسعدني أن أسمع منك.",
    getInTouch: "تواصل معي",
    email: "البريد الإلكتروني",
    elsewhere: "روابط أخرى",
    name: "الاسم",
    message: "الرسالة",
    namePlaceholder: "اسمك",
    emailPlaceholder: "you@example.com",
    messagePlaceholder: "أخبرني عن الفكرة أو الفرصة.",
    send: "إرسال الرسالة",
    sending: "جارٍ الإرسال…",
    errName: "الرجاء إدخال اسمك.",
    errEmail: "الرجاء إدخال بريد إلكتروني صحيح.",
    errMessage: "الرجاء كتابة 10 أحرف على الأقل.",
    errFix: "الرجاء تصحيح الحقول المحددة.",
    mailtoNote: "سيتم فتح تطبيق البريد لديك والرسالة جاهزة للإرسال.",
    successNote: "شكراً — تم إرسال رسالتك.",
    failNote: "حدث خطأ ما. الرجاء مراسلتي مباشرة عبر البريد.",
  },
};
