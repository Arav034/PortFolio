/* ============================================================
   DATA.JS — EDIT EVERYTHING HERE
   This is the ONLY file you need to touch to update your
   name, bio, projects, links, pricing, and contact info.
   No coding knowledge required — just change the text between
   the quotes " " and save the file.
   ============================================================ */

const SITE_DATA = {

  /* ---------- PERSONAL INFO ---------- */
  personal: "Aravinth T",
    brandName: "Aravinth_Cuts",
    role: "Professional Video Editor",
    tagline: "Creating High-Retention Videos That Capture Attention.",
    description:
      "I help creators and brands transform raw footage into engaging, cinematic content that increases audience retention and boosts engagement.",
    aboutParagraph:
      "I'm a video editor with a passion for turning raw, unstructured footage into stories that hold attention from the first frame to the last. Over the past few years I've cut everything from fast-paced short-form content to long-format YouTube documentaries, always with one goal — keep the viewer watching. I obsess over pacing, sound design, and color, because the difference between a video someone scrolls past and one they finish is almost always in the edit.",
    email: "aravinthmgt64@gmail.com",
    location: "Tamil Nadu, India",
    yearsExperience: 1,
    projectsCompleted: 50,
    happyClients: 25,
    viewsGenerated: "10M+"
  },

  /* ---------- SOCIAL LINKS ---------- */
  socials: {
    instagram: "https://www.instagram.com/aravinth_cuts",
    linkedin: "https://www.linkedin.com/in/aravinth63",
    youtube: "https://Youtube.com/@aravinth-63",
    drive: "https://drive.google.com/drive/folders/1tZe2BfI4IdDQv2JtSHguWzjN5xxwCGo1",
    whatsapp: "https://wa.me/910000000000",
    discord: "https://discord.com/users/aravinth"
  },

  /* ---------- SKILLS (name + proficiency 0-100) ---------- */
  skills: [
    { name: "CapCut", level: 95 },
    { name: "Motion Graphics", level: 80 },
    { name: "Color Grading", level: 88 },
    { name: "Sound Design", level: 78 },
    { name: "Short Form Editing", level: 96 },
    { name: "Long Form Editing", level: 84 }
  ],

  /* ---------- SERVICES ---------- */
  services: [
    { icon: "fa-brands fa-youtube", title: "YouTube Editing", desc: "Retention-focused long form edits with pacing that keeps viewers watching till the end." },
    { icon: "fa-brands fa-instagram", title: "Instagram Reels", desc: "Scroll-stopping vertical edits built for the algorithm and the first three seconds." },
    { icon: "fa-solid fa-bolt", title: "Short Form Content", desc: "Punchy, high-energy cuts optimized for TikTok, Reels and YouTube Shorts." },
    { icon: "fa-solid fa-gamepad", title: "Gaming Videos", desc: "Fast-cut gameplay highlights, montages and stream recaps with impact." },
    { icon: "fa-solid fa-video", title: "Vlogs", desc: "Natural, story-driven edits that keep your personality front and center." },
    { icon: "fa-solid fa-microphone", title: "Podcast Editing", desc: "Clean multicam podcast edits plus repurposed short-form clips." },
    { icon: "fa-solid fa-bullhorn", title: "Commercial Ads", desc: "Polished, brand-safe edits built to convert viewers into customers." },
    { icon: "fa-solid fa-user", title: "Talking Head Videos", desc: "Tight, jump-cut heavy edits that remove dead air and keep energy high." }
  ],

  /* ---------- PORTFOLIO PROJECTS ---------- */
  /* Add / remove objects freely — the grid updates automatically. */
  projects: [
    {
      id: 2,
      title: "Instagram Reel",
      category: "Short Form",
      duration: "0:28",
      software: "CapCut PC",
      thumbnail: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=800&auto=format&fit=crop",
      videoLink: "https://drive.google.com/drive/folders/1tZe2BfI4IdDQv2JtSHguWzjN5xxwCGo1",
      caseStudy: "A 28-second product reel edited for maximum retention with pattern-interrupt cuts every 1.5 seconds."
    },
    {
      id: 1,
      title: "Travel Cinematic",
      category: "Long Form",
      duration: "4:32",
      software: "Capcut PC",
      thumbnail: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=800&auto=format&fit=crop",
      videoLink: "https://drive.google.com/drive/folders/1tZe2BfI4IdDQv2JtSHguWzjN5xxwCGo1",
      caseStudy: "Shot over 6 days across two countries, this cinematic travel edit uses match cuts and a custom teal-orange grade to create a continuous visual rhythm."
    },
    
    {
      id: 3,
      title: "Gaming Montage",
      category: "Gaming",
      duration: "2:15",
      software: "CapCut PC",
      thumbnail: "https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=800&auto=format&fit=crop",
      videoLink: "https://drive.google.com/drive/folders/1tZe2BfI4IdDQv2JtSHguWzjN5xxwCGo1",
      caseStudy: "Beat-synced highlight reel with custom motion graphics for kill counters and sound-designed impacts."
    },
    {
      id: 4,
      title: "Daily Vlog",
      category: "Vlog",
      duration: "8:47",
      software: "CapCut PC",
      thumbnail: "https://images.unsplash.com/photo-1519501025264-65ba15a82390?q=80&w=800&auto=format&fit=crop",
      videoLink: "https://drive.google.com/drive/folders/1tZe2BfI4IdDQv2JtSHguWzjN5xxwCGo1",
      caseStudy: "A day-in-the-life vlog structured around three story beats to maintain narrative momentum."
    },
    {
      id: 5,
      title: "Podcast Clip — Tech Talk",
      category: "Podcast",
      duration: "1:02",
      software: "CapCut PC",
      thumbnail: "https://images.unsplash.com/photo-1478737270239-2f02b77fc618?q=80&w=800&auto=format&fit=crop",
      videoLink: "https://drive.google.com/drive/folders/1tZe2BfI4IdDQv2JtSHguWzjN5xxwCGo1",
      caseStudy: "Repurposed a 40-minute podcast into a punchy 62-second clip with dynamic captions."
    },
    {
      id: 6,
      title: "Product Ad — Sneaker Launch",
      category: "Commercial",
      duration: "0:45",
      software: "CapCut PC",
      thumbnail: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=800&auto=format&fit=crop",
      videoLink: "https://drive.google.com/drive/folders/1tZe2BfI4IdDQv2JtSHguWzjN5xxwCGo1",
      caseStudy: "A commercial ad combining kinetic typography and product macro shots to drive pre-orders."
    },
    // {
    //   id: 7,
    //   title: "Talking Head — Founder Story",
    //   category: "Talking Head",
    //   duration: "5:10",
    //   software: "CapCut PC",
    //   thumbnail: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=800&auto=format&fit=crop",
    //   videoLink: "https://youtube.com/example",
    //   caseStudy: "Jump-cut heavy edit that removed 40% of dead air while preserving the founder's natural tone."
    // },
    {
      id: 8,
      title: "Short Film Trailer",
      category: "Short Form",
      duration: "1:30",
      software: "CapCut PC",
      thumbnail: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?q=80&w=800&auto=format&fit=crop",
      videoLink: "https://drive.google.com/drive/folders/1tZe2BfI4IdDQv2JtSHguWzjN5xxwCGo1",
      caseStudy: "A teaser trailer cut for tension, using negative space in the sound design to build anticipation."
    }
  ],

  /* ---------- TESTIMONIALS ---------- */
  testimonials: [
    { name: "Priya Sharma", role: "YouTube Creator, 250K subs", image: "https://i.pravatar.cc/150?img=47", review: "Aravinth completely transformed my channel's retention. My average view duration went up almost 40% after he started editing.", stars: 5 },
    { name: "Marcus Webb", role: "Founder, StreamWear", image: "https://i.pravatar.cc/150?img=12", review: "Fast, communicative, and genuinely talented. Our product launch ad outperformed every previous campaign.", stars: 5 },
    { name: "Divya Menon", role: "Podcast Host", image: "https://i.pravatar.cc/150?img=32", review: "He turns a raw two-hour recording into clips that actually go viral. Can't recommend him enough.", stars: 5 },
    { name: "Jason Lee", role: "Gaming Streamer", image: "https://i.pravatar.cc/150?img=15", review: "The best gaming edits I've had — perfectly synced to the music, every single time.", stars: 5 },
    { name: "Ritika Rao", role: "Brand Manager, Lumen Co.", image: "https://i.pravatar.cc/150?img=44", review: "Professional, on time, and the storytelling in every edit is next level.", stars: 5 }
  ],

  /* ---------- WHY CHOOSE ME ---------- */
  whyChooseMe: [
    { icon: "fa-solid fa-gauge-high", title: "Fast Delivery", desc: "Most projects delivered within 48–72 hours." },
    { icon: "fa-solid fa-arrows-rotate", title: "Unlimited Revisions", desc: "We refine the edit until it's exactly right." },
    { icon: "fa-solid fa-feather-pointed", title: "Creative Storytelling", desc: "Every edit is built around a narrative, not just cuts." },
    { icon: "fa-solid fa-chart-line", title: "High Retention Editing", desc: "Pacing and structure designed to hold attention." },
    { icon: "fa-solid fa-comments", title: "Professional Communication", desc: "Clear updates at every stage of the edit." },
    { icon: "fa-solid fa-sack-dollar", title: "Affordable Pricing", desc: "Premium quality without the premium agency price tag." }
  ],

  /* ---------- WORK PROCESS ---------- */
  process: [
    { step: "01", title: "Receive Footage", desc: "You send over your raw clips, brief, and reference videos." },
    { step: "02", title: "Edit", desc: "I structure, cut, grade and sound-design the first pass." },
    { step: "03", title: "Review", desc: "You review the draft and share feedback or revisions." },
    { step: "04", title: "Final Delivery", desc: "Polished, export-ready file delivered in your required format." }
  ],

  /* ---------- PRICING ---------- */
  pricing: [
    {
      tier: "Starter",
      price: "₹499",
      unit: "/ video",
      features: ["Up to 60 sec short-form edit", "Basic color correction", "Trending audio sync", "5 revisions", "48hr delivery"],
      highlighted: false
    },
    {
      tier: "Standard",
      price: "₹799",
      unit: "/ video",
      features: ["Up to 10 min long-form edit", "Advanced color grading", "Motion graphics & captions", "8 revisions", "Sound design", "72hr delivery"],
      highlighted: true
    },
    {
      tier: "Premium",
      price: "₹1399",
      unit: "/ project",
      features: ["Full channel package (4 videos)", "Cinematic color grade", "Custom motion graphics", "Unlimited revisions", "Priority delivery", "1-on-1 strategy call"],
      highlighted: false
    }
  ],

  /* ---------- NAV LINKS ---------- */
  navLinks: [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Portfolio", href: "#portfolio" },
    { label: "Testimonials", href: "#testimonials" },
    { label: "Process", href: "#process" },
    { label: "Pricing", href: "#pricing" },
    { label: "Contact", href: "#contact" }
  ]
};
