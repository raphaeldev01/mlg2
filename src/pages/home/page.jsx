
import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import styles from "../../styles/Home.module.css"

import ceoImg from "../../assets/ceo_profile2.png"
import BannerSust from "../../assets/banner_sust.jpeg"

import brazilFLag from "../../assets/brazil_flag.png"
import virginFlag from "../../assets/virgin_flag.png"
import mlg2Logo from "../../assets/logo_text.png"
import Carrosel from "../../components/Carrosel"
import MiniCarrosel from "../../components/MiniCarrosel"

const translations = {
  ar: {
    hero: {
      title: "ربط الأعمال بالعالم بذكاء",
      subtitle: "",
      description:
        "تعمل شركة MLG2 Business Corporation في التجارة الدولية، وتقدم حلولًا مالية ذكية وتُعزز الاستدامة العالمية في كل عملية.",
      cta: "تعرّف على خدماتنا",
      stats: {
        countries: "Países Atendidos",
        farmers: "Produtores Parceiros",
        experience: "Anos de Experiência",
      },
    },
    founder: {
      title: "رسالة من المؤسس",
      name: "سـاندرو فـيريـرا",
      position: "المؤسس والرئيس التنفيذي لشركة MLG2",
      message: [
        "تأسست MLG2 بهدف تحديث قطاع الزراعة على نطاق عالمي، من خلال تعزيز التكامل بين التكنولوجيا والاستدامة والرؤية الاستراتيجية للسوق. ومنذ البداية، عملنا على وضع هذا القطاع في موقع الريادة في الاقتصاد العالمي، مع تحقيق قيمة مضافة في جميع مراحل سلسلة الإنتاج.",
        "دورنا يتجاوز مجرد الوساطة التجارية. نحن نربط بين المنتجين والمؤسسات والأسواق بعقلانية ومسؤولية ومعايير أخلاقية عالية، ونقدّم حلولاً قوية لتحديات بيئة دولية متزايدة التعقيد والتطلب.",
        "إنه مصدر فخر لنا أن نشهد تطورنا من نشاط إقليمي إلى شركة ذات حضور عالمي، معترف بها بفضل مصداقيتها وابتكارها والتزامها بالتنمية المستدامة.",
        "ونحن ماضون بعزم في مسيرتنا نحو التحول، من خلال تعزيز التحالفات الاستراتيجية ودفع عجلة قطاع زراعي أكثر حداثة وكفاءة واستعداداً للمستقبل.",
      ],
      quote: '"ليست التقاليد والابتكار والاستدامة مجرد قيم، بل هي الركائز التي تشكّل مستقبل الزراعة العالمية التنافسية والمرنة."',
    },
    about: {
      title: "تاريخنا",
      subtitle: "",
      description:
        "تُعد شركة MLG2 Business Corporation شركة دولية خاصة، يقع مقرها في جزر فيرجن البريطانية وتعمل في البرازيل، وتركز على السلع، والتمويل الدولي، والطاقة النظيفة. تحت قيادة ساندرو إلياس فيريرا، تعمل الشركة بأخلاقيات ومهنية وأمان وتميّز عالمي.",
      mission: "تعزيز الحلول المتكاملة في التجارة الخارجية والتمويل العالمي، مع المسؤولية البيئية، والأمن القانوني، والتميز في الخدمة، لربط البرازيل بالعالم.",
      vision: "أن يتم الاعتراف بها عالميًا كإحدى الشركات الرائدة في تصدير السلع البرازيلية وحلول الاستثمارات الدولية، من خلال إضافة قيمة مستدامة إلى سلاسل الإنتاج والتمويل.",
      cta: "تعرّف على تاريخنا ",
      textMission: "الرسالة",
      textVision: "الرؤية",
      textValues: "القيم",
      value1: "الأخلاق والنزاهة والشفافية",
      value2: "الالتزام بالاستدامة وحماية البيئة",
      value3: "التميز الفني والقانوني في جميع العمليات",
      value4: "احترام العملاء والشركاء والمجتمع",
      value5: "الابتكار الاستراتيجي والتكيف مع المشهد العالمي",
      value6: "الامتثال والحوكمة المؤسسية",

    },
    services: {
      title: "العمليات في السلع والتجارة الخارجية",
      subtitle: "المنتجات المُسوَّقة",
      description: "تتخصص شركة MLG2 في تصدير المنتجات الزراعية، والبروتين الحيواني، ومشتقات قصب السكر، حيث تعمل بالشراكة مع أبرز مصانع السكر والإيثانول في البرازيل، بالإضافة إلى كبرى التعاونيات في منطقة الوسط الغربي.",
      items: [
        {
          title: "السكريات ومشتقاتها:",
          description: [
            "ICUMSA 45 – سكر أبيض مكرر ممتاز",
            "ICUMSA 150 – سكر أبيض صناعي",
            "VHP (الاستقطاب العالي جدًا) – سكر خام عالي الاستقطاب",
            "الإيثانول اللامائي والمائي – للاستخدام الصناعي وكوقود حيوي",
          ],
          type: "sugar",
        },
        {
          title: "الحبوب ومشتقاتها:",
          description: [
            "فول الصويا، كسب الصويا وزيت الصويا",
            "الذرة (حبوب، كسب وزيت)",
            "القمح، الأرز، القطن، القهوة الخضراء",
            "الديزل الحيوي، الكتلة الحيوية والزيوت النباتية",

          ],
          type: "soja",
        },
        {
          title: "البروتينات الحيوانية:",
          description: [
            "لحوم الأبقار، والخنازير، والدجاج (كاملة، مقطعة وأحشاء)",
            "تصدير بشهادة HALAL للدول العربية والإسلامية",
            "التوريد إلى الأسواق الآسيوية، والأوروبية، والأفريقية",

          ],
          type: "animal",
        },
       
      ],
      cta: "عرض جميع السلع",
    },
    products: {
      title: "المحفظة والأسواق المُخدّمة",
      subtitle: "تحتفظ شركة MLG2 بعلاقات تجارية راسخة مع شركاء في:",
      description: "تتم العمليات اللوجستية الدولية عبر الموانئ الرئيسية في البرازيل: سانتوس، باراناغوا، إيتاكي، سواپي، وإيتاكواتييرا، مع مراقبة فنية ووثائقية دقيقة.",
      categories: [
        { name: "أمريكا اللاتينية: البرازيل، الأرجنتين، المكسيك، بنما", count: "", icon: "" },
        { name: "أوروبا: ألمانيا، هولندا، إسبانيا، إيطاليا", count: "", icon: "" },
        { name: "أفريقيا: مصر، المغرب، جنوب أفريقيا", count: "", icon: "" },
        { name: "الشرق الأوسط وآسيا: الإمارات العربية المتحدة، عُمان، الهند، الصين، تركيا", count: "", icon: "" },
      ],
      cta: "Explorar Produtos",
    },
    innovation: {
      title: "Inovação & Tecnologia",
      subtitle: `رقم التسجيل: 2130405`,
      description: "المقر القانوني: كراجمير تشامبرز، رود تاون، تورتولا، VG 1110 – جزر العذراء البريطانية",
      description2: "المكاتب التشغيلية: البرازيل",
      description3: "المدير التنفيذي: السيد ساندرو إلياس فرانسيسكو فيريرا",
      description4: "تم تأسيس الشركة لتكون حديثة، رقمية، شفافة وعالمية، قادرة على التكيف مع متطلبات القرن الحادي والعشرين العالمية بمرونة وذكاء سوقي.",
      technologies: [
        { name: "Agricultura de Precisão", description: "GPS e sensores para otimização", icon: "🛰️" },
        { name: "Drones Agrícolas", description: "Monitoramento aéreo inteligente", icon: "🚁" },
        { name: "IoT & Sensores", description: "Dados em tempo real do campo", icon: "📡" },
        { name: "IA & Machine Learning", description: "Análise preditiva avançada", icon: "🤖" },
      ],
    },
    sustainability: {
      title: "الاستدامة والطاقة النظيفة",
      subtitle: "تلتزم شركة MLG2 بالتنمية المستدامة، من خلال الترويج والمشاركة في مشاريع الطاقة المتجددة في المجالات التالية:",
      description: "Práticas sustentáveis que preservam o meio ambiente e garantem produtividade.",
      initiatives: [
        { title: "الوقود الحيوي (الديزل الحيوي، الإيثانول)", description: "", progress: 100 },
        { title: "الكتلة الحيوية وإعادة الاستخدام الزراعي", description: "", progress: 100 },
        { title: "الطاقة الشمسية الكهروضوئية", description: "", progress: 100 },
        { title: "شراكات مع مصانع حاصلة على شهادات لإنتاج نظيف", description: "", progress: 100 },
      ],
      text1: "الامتثال البيئي",
      text2: "تلتزم الشركة بالكامل بالتشريعات البيئية السارية:",
      text3: [
        "القانون رقم 12.305 لسنة 2010 – السياسة الوطنية للنفايات الصلبة",
        "القانون رقم 9.605 لسنة 1998 – الجرائم البيئية",
        "رينوفابيو – السياسة الوطنية للوقود الحيوي",
        "قرار كوناما رقم 237 لسنة 1997 – الترخيص البيئي",
        "المرسوم رقم 10.387 لسنة 2020 – الحوافز للمشروعات المتجددة",
      ],
      text4: "نركز على الإسهام في التحول العالمي للطاقة مع الحفاظ على التوازن بين النمو الاقتصادي والمسؤولية الاجتماعية والبيئية.",
    },
    testimonials: {
      title: "O Que Nossos Parceiros Dizem",
      subtitle: "Histórias de Sucesso Reais",
      items: [
        {
          name: "João Silva",
          position: "Produtor Rural - MT",
          text: "A MLG2 transformou nossa fazenda. Aumentamos a produtividade em 35% com suas soluções tecnológicas.",
          rating: 5,
        },
        {
          name: "Maria Santos",
          position: "Cooperativa Agrícola - RS",
          text: "Parceria excepcional! O suporte técnico e comercial da MLG2 é incomparável no mercado.",
          rating: 5,
        },
        {
          name: "Carlos Oliveira",
          position: "Exportador - SP",
          text: "Graças à MLG2, conseguimos expandir para 15 novos países. Profissionalismo total.",
          rating: 5,
        },
      ],
    },
    news: {
      title: "الحلول المالية والأصول العالمية",
      subtitle: "تشارك شركة MLG2 أيضًا في هيكلة العمليات المالية الدولية، حيث تقدم دعمًا استراتيجيًا لجمع التمويل، والعمليات العابرة للحدود، والتمويل المؤسسي، والتحركات متعددة العملات، بما في ذلك الأصول الرقمية.",
      items: [
        {
          title: "هيكلة عمليات التصدير بتمويل دولي",
          src: "https://www.shutterstock.com/image-photo/ai-cargo-ship-technology-global-600nw-2372585739.jpg"
        },
        {
          title: "جمع الاستثمارات من خلال الصناديق، والبنوك، وشركات التكنولوجيا المالية (داخل البرازيل وخارجها)",
          src: "https://images.pexels.com/photos/4175028/pexels-photo-4175028.jpeg"
        },
        {
          title: "فتح حسابات تجارية دولية",
          src: "https://media.istockphoto.com/id/179243711/photo/brazil-argentina-and-world-flags.jpg?s=612x612&w=0&k=20&c=hjuCkoXWXBIvM-GsYji4jZxv6hAu-1m5jBETU6cmNkY="
        },
        {
          title: "المعاملات باستخدام محافظ العملات الرقمية (المحافظ الباردة) لعملات مثل USDT وBTC وETH",
          src: "https://thumbs.dreamstime.com/b/cryptocurrency-tokens-featuring-bitcoin-ethereum-litecoin-logos-rest-dark-cryptocurrency-tokens-featuring-bitcoin-382012887.jpg"
        },
        {
          title: "التحوّط من تقلبات العملات (Hedge)، والامتثال، وتدقيق KYC/AML",
          src: "https://media.licdn.com/dms/image/v2/D5612AQFKFxYft2BgDw/article-cover_image-shrink_600_2000/B56ZWEzVd2HQAQ-/0/1741689805260?e=2147483647&v=beta&t=qzrVCA1XCzMVoyb_8Eo2IOm7I3vYEgRuWYrqdqw1XFs"
        },
        {
          title: "بناء علاقات مع مؤسسات في الولايات المتحدة وأوروبا وآسيا والشرق الأوسط",
          src: "https://images.stockcake.com/public/e/9/6/e96c2d89-e1f3-4aba-9d80-8971eefcf083_large/global-network-map-stockcake.jpg"
        },
        // {
        //   title: "Tecnologia de IA Aumenta Produtividade em 40%",
        //   date: "10 Dez 2024",
        //   category: "Inovação",
        //   excerpt: "Sistema proprietário de inteligência artificial revoluciona plantio...",
        // },
        // {
        //   title: "Certificação Sustentável Alcança 100% das Fazendas",
        //   date: "05 Dez 2024",
        //   category: "Sustentabilidade",
        //   excerpt: "Marco histórico: todas as propriedades parceiras agora são certificadas...",
        // },
      ],
      cta: "Ver Todas as Notícias",
    },
    partners: {
      title: "Nossos Parceiros Globais",
      subtitle: "Conectados ao Mundo",
      description: "Trabalhamos com as principais empresas e organizações do agronegócio mundial.",
    },
    certifications: {
      title: "Certificações & Qualidade",
      subtitle: "Padrões Internacionais de Excelência",
      items: ["ISO 9001", "HACCP", "Orgânico", "Fair Trade", "Rainforest Alliance", "Global GAP", "BRC", "SQF"],
    },
    cta: {
      title: "Pronto para Transformar seu Agronegócio?",
      subtitle: "Junte-se a mais de 10.000 produtores que confiam na MLG2",
      description:
        "Entre em contato conosco e descubra como podemos ajudar sua empresa a alcançar novos patamares no mercado global.",
      button: "Fale Conosco Agora",
    },
  },
  en: {
    hero: {
      title: "Connecting business to the world",
      subtitle: " with intelligence",
      description:
        "MLG2 Business Corporation operates in international trade, offering intelligent financial solutions and promoting global sustainability in every operation",
      cta: "Discover Our Services",
      stats: {
        countries: "Countries Served",
        farmers: "Partner Farmers",
        experience: "Years of Experience",
      },
    },
    founder: {
      title: "Message from the Founder",
      name: "Sandro Ferreira",
      position: "Founder & CEO of MLG2",
      message:
       [
        "MLG2 was founded with the mission of modernizing agribusiness on a global scale, fostering the integration of technology, sustainability, and a strategic market vision. From the outset, we have worked to position the sector as a key player in the global economy, generating value across all stages of the production chain.",
        "Our role goes far beyond business intermediation. We connect producers, institutions, and markets with intelligence, responsibility, and a high ethical standard, creating solid solutions for the challenges of an increasingly demanding international environment.",
        "It is a source of great pride to witness our evolution from a regional operation to a global company, recognized for its credibility, innovation, and commitment to sustainable development.",
        "We remain steadfast in our journey of transformation, driving strategic alliances and promoting a more modern, efficient, and future-ready agribusiness sector.",
       ],
      quote: '"Tradition, innovation, and sustainability are not just values they are the pillars shaping the competitive and resilient future of global agribusiness."',
    },
    about: {
      title: "Our History",
      subtitle: "",
      description:
        "MLG2 Business Corporation is a private international company, headquartered in the British Virgin Islands and operating in Brazil, focused on commodities, international finance, and clean energy. Led by Sandro Elias Ferreira, it operates with ethics, security, and global excellence.",
      mission: "To promote integrated solutions in foreign trade and global finance, with environmental responsibility, legal security, and excellence in service, connecting Brazil to the world.",
      vision: "To be globally recognized as one of the leaders in the export of Brazilian commodities and international investment solutions, adding sustainable value to productive and financial chains.",
      cta: "Learn Our Story",
      textVision: "Mission",
      textMission: "Vision",
      textValues: "Values",
      value1: "Ethics, integrity, and transparency",
      value2: "Commitment to sustainability and the environment",
      value3: "Technical and legal excellence in all processes",
      value4: "Respect for clients, partners, and society",
      value5: "Strategic innovation and adaptation to the global landscape",
      value6: "Compliance and corporate governance",
    },
    services: {
      title: "Operations in Commodities and Foreign Trade",
      subtitle: "Marketed Products",
      description: "MLG2 specializes in the export of agricultural products, animal protein, and sugarcane derivatives, operating in partnership with Brazil’s leading sugar and ethanol mills, as well as major cooperatives in the Central-West region.",
      items: [
        {
          title: "Sugars and Derivatives:",
          description: [
            "ICUMSA 45 – Premium refined white sugar",
            "ICUMSA 150 – Industrial white sugar",
            "VHP (Very High Polarization) – Raw high-polarization sugar",
            "Anhydrous and Hydrated Ethanol – For industrial use and as biofuel",
          ],
          type: "sugar",
        },
        {
          title: "Grains and By-products:",
          description: [
            "Soybeans, soybean meal, and soybean oil",
            "Corn (grain, meal, and oil)",
            "Wheat, rice, cotton, green coffee",
            "Biodiesel, biomass, and vegetable oil",

          ],
          type: "soja",
        },
        {
          title: "Animal Proteins:",
          description: [
            "Beef, pork, and chicken (whole, cuts, and offal)",
            "Export with HALAL certification for Arab and Islamic countries",
            "Supply to Asian, European, and African markets",

          ],
          type: "animal",
        },
      ],
      cta: "View All Commodities",
    },
    products: {
      title: "Portfolio and Served Markets",
      subtitle: "MLG2 maintains established negotiations with partners in:",
      description: "International logistics are carried out through Brazil's main ports: Santos, Paranaguá, Itaqui, Suape, and Itacoatiara, with technical and documentary monitoring.",
      categories: [
        { name: "Latin America: Brazil, Argentina, Mexico, Panama", count: "", icon: "" },
        { name: "Europe: Germany, Netherlands, Spain, Italy", count: "", icon: "" },
        { name: "Africa: Egypt, Morocco, South Africa", count: "", icon: "" },
        { name: "Middle East and Asia: United Arab Emirates, Oman, India, China, Turkey", count: "", icon: "" },
      ],
      cta: "Explore Products",
    },
    innovation: {
      title: "Innovation & Technology",
      subtitle: "Registration Number: 2130405",
      description: "Legal Headquarters: Craigmuir Chambers, Road Town, Tortola, VG 1110 – British Virgin Islands",
      description2: "Operational Offices: Brazil",
      description3: "CEO: Mr. Sandro Elias Francisco Ferreira",
      description4: "The company was designed to be modern, digital, transparent, and international, adapting to the global demands of the 21st century with flexibility and market intelligence.",
      technologies: [
        { name: "Precision Agriculture", description: "GPS and sensors for optimization", icon: "🛰️" },
        { name: "Agricultural Drones", description: "Intelligent aerial monitoring", icon: "🚁" },
        { name: "IoT & Sensors", description: "Real-time field data", icon: "📡" },
        { name: "AI & Machine Learning", description: "Advanced predictive analysis", icon: "🤖" },
      ],
    },
    sustainability: {
      title: "Sustainability and Clean Energy",
      subtitle: "MLG2 is committed to sustainable development, promoting and participating in renewable energy projects in the following areas:",
      description: "Sustainable practices that preserve the environment and ensure productivity.",
      initiatives: [
        { title: "Biofuels (biodiesel, ethanol)", description: "", progress: 100 },
        { title: "Biomass and agricultural reuse", description: "", progress: 100 },
        { title: "Photovoltaic solar energy", description: "", progress: 100 },
        { title: "Partnerships with certified plants for clean production", description: "", progress: 100 },
      ],
      text1: "Environmental Compliance",
      text2: "The company's operations fully comply with the current environmental legislation:",
      text3: [
        "Law No. 12.305/2010 – National Solid Waste Policy",
        "Law No. 9.605/1998 – Environmental Crimes",
        "RenovaBio – National Biofuels Policy",
        "CONAMA Resolution No. 237/1997 – Environmental Licensing",
        "Decree No. 10.387/2020 – Incentives for Renewable Projects",
      ],
      text4: "Our focus is to contribute to the global energy transition while maintaining a balance between economic growth and socio-environmental responsibility.",
    },
    testimonials: {
      title: "What Our Partners Say",
      subtitle: "Real Success Stories",
      items: [
        {
          name: "João Silva",
          position: "Rural Producer - MT",
          text: "MLG2 transformed our farm. We increased productivity by 35% with their technological solutions.",
          rating: 5,
        },
        {
          name: "Maria Santos",
          position: "Agricultural Cooperative - RS",
          text: "Exceptional partnership! MLG2's technical and commercial support is unmatched in the market.",
          rating: 5,
        },
        {
          name: "Carlos Oliveira",
          position: "Exporter - SP",
          text: "Thanks to MLG2, we managed to expand to 15 new countries. Total professionalism.",
          rating: 5,
        },
      ],
    },
    news: {
      title: "Financial Solutions and Global Assets",
      subtitle: "MLG2 is also engaged in the structuring of international financial operations, offering strategic support for fundraising, cross-border transactions, institutional funding, and multi-currency movements, including digital assets.",
      items: [
        {
          title: "Structuring of export operations with international financing",
          src: "https://www.shutterstock.com/image-photo/ai-cargo-ship-technology-global-600nw-2372585739.jpg"
        },
        {
          title: "Fundraising through investment funds, banks, and fintechs (in Brazil and abroad)",
          src: "https://images.pexels.com/photos/4175028/pexels-photo-4175028.jpeg"
        },
        {
          title: "Opening of international business accounts",
          src: "https://media.istockphoto.com/id/179243711/photo/brazil-argentina-and-world-flags.jpg?s=612x612&w=0&k=20&c=hjuCkoXWXBIvM-GsYji4jZxv6hAu-1m5jBETU6cmNkY="
        },
        {
          title: "Transactions using cryptocurrency wallets (cold wallets) for digital currencies such as USDT, BTC, ETH",
          src: "https://thumbs.dreamstime.com/b/cryptocurrency-tokens-featuring-bitcoin-ethereum-litecoin-logos-rest-dark-cryptocurrency-tokens-featuring-bitcoin-382012887.jpg"
        },
        {
          title: "Currency hedging, compliance, and KYC/AML auditing",
          src: "https://media.licdn.com/dms/image/v2/D5612AQFKFxYft2BgDw/article-cover_image-shrink_600_2000/B56ZWEzVd2HQAQ-/0/1741689805260?e=2147483647&v=beta&t=qzrVCA1XCzMVoyb_8Eo2IOm7I3vYEgRuWYrqdqw1XFs"
        },
        {
          title: "Relations with institutions in the USA, Europe, Asia, and the Middle East",
          src: "https://images.stockcake.com/public/e/9/6/e96c2d89-e1f3-4aba-9d80-8971eefcf083_large/global-network-map-stockcake.jpg"
        },
        // {
        //   title: "Tecnologia de IA Aumenta Produtividade em 40%",
        //   date: "10 Dez 2024",
        //   category: "Inovação",
        //   excerpt: "Sistema proprietário de inteligência artificial revoluciona plantio...",
        // },
        // {
        //   title: "Certificação Sustentável Alcança 100% das Fazendas",
        //   date: "05 Dez 2024",
        //   category: "Sustentabilidade",
        //   excerpt: "Marco histórico: todas as propriedades parceiras agora são certificadas...",
        // },
      ],
      cta: "View All News",
    },
    partners: {
      title: "Our Global Partners",
      subtitle: "Connected to the World",
      description: "We work with the main companies and organizations in global agribusiness.",
    },
    certifications: {
      title: "Certifications & Quality",
      subtitle: "International Standards of Excellence",
      items: ["ISO 9001", "HACCP", "Organic", "Fair Trade", "Rainforest Alliance", "Global GAP", "BRC", "SQF"],
    },
    cta: {
      title: "Ready to Transform Your Agribusiness?",
      subtitle: "Join over 10,000 producers who trust MLG2",
      description: "Contact us and discover how we can help your company reach new heights in the global market.",
      button: "Contact Us Now",
    },
  },
  pt: {
    hero: {
      title: "Conectando negócios ao mundo",
      subtitle: " com inteligência.",
      description:
        "A MLG2 Business Corporation atua no comércio internacional, oferecendo soluções financeiras inteligentes e promovendo a sustentabilidade global em cada operação.",
      cta: "Descubra nossos serviços",
      stats: {
        countries: "Countries Served",
        farmers: "Partner Farmers",
        experience: "Years of Experience",
      },
    },
    founder: {
      title: "Mensagem do Fundador",
      name: "Sandro Ferreira",
      position: "Fundador & CEO da MLG2",
      message:
       [
        "A MLG2 nasceu com a missão de modernizar o agronegócio em escala global, promovendo a integração entre tecnologia, sustentabilidade e uma visão estratégica de mercado. Desde o início, trabalhamos para posicionar o setor como protagonista da economia mundial, gerando valor em todas as pontas da cadeia produtiva.",
        "Nosso papel vai muito além de intermediar negócios. Conectamos produtores, instituições e mercados com inteligência, responsabilidade e alto padrão ético, criando soluções sólidas para os desafios de um cenário internacional cada vez mais exigente.",
        "É motivo de orgulho ver como evoluímos de uma atuação regional para uma empresa de presença global, reconhecida pela credibilidade, inovação e compromisso com o desenvolvimento sustentável.",
        "Seguimos determinados em nossa jornada de transformação, impulsionando alianças estratégicas e promovendo um agronegócio mais moderno, eficiente e preparado para o futuro.",
       ],
      quote: '""Tradição, inovação e sustentabilidade não são apenas valores — são os pilares que moldam o futuro competitivo e resiliente do agronegócio global."',
    },
    about: {
      title: "Quem Somos",
      subtitle: "",
      description:
        "A MLG2 Business Corporation é uma empresa internacional de capital privado, com sede registrada nas Ilhas Virgens Britânicas e atuação operacional no Brasil. Especializada em comércio global de commodities, soluções financeiras internacionais e projetos sustentáveis em energia limpa, a MLG2 conecta produtores, instituições e mercados com confiança, competência e alto padrão ético.\nSob a liderança do CEO Sr. Sandro Elias Francisco Ferreira, a empresa desenvolve soluções robustas e seguras, que atendem às exigências de clientes, instituições financeiras e órgãos reguladores em múltiplas jurisdições.",
      mission: "Promover soluções integradas em comércio exterior e finanças globais, com responsabilidade ambiental, segurança jurídica e excelência no atendimento, conectando o Brasil ao mundo.",
      vision: "Ser reconhecida globalmente como uma das líderes em exportação de commodities brasileiras e soluções de investimentos internacionais, agregando valor sustentável às cadeias produtivas e financeiras.",
      cta: "Learn Our Story",
      textVision: "Missão",
      textMission: "Visão",
      textValues: "Valores",
      value1: "Ética, integridade e transparência",
      value2: "Compromisso com a sustentabilidade e o meio ambiente",
      value3: "Excelência técnica e legal em todos os processos",
      value4: "Respeito ao cliente, aos parceiros e à sociedade",
      value5: "Inovação estratégica e adaptação ao cenário global",
      value6: "Conformidade e governança corporativa",
    },
    services: {
      title: "Atuação em Commodities e Comércio Exterior",
      subtitle: "Produtos Comercializados",
      description: "A MLG2 é especializada na exportação de produtos agrícolas, proteína animal e derivados de cana-de-açúcar, operando em parceria com as principais usinas de açúcar e álcool do Brasil e grandes cooperativas do Centro-Oeste..",
      items: [
        {
          title: "Açúcares e Derivados:",
          description: [
            "ICUMSA 45 – Açúcar branco refinado premium",
            "ICUMSA 150 – Açúcar branco industrial",
            "VHP (Very High Polarization) – Açúcar bruto de alta polarização",
            "Etanol anidro e hidratado – Para uso industrial e como biocombustível",
          ],
          type: "sugar",
        },
        {
          title: "Grãos e Subprodutos:",
          description: [
            "Soja em grãos, farelo e óleo",
            "Milho (grão, farelo e óleo)",
            "Trigo, arroz, algodão, café verde",
            "Biodiesel, biomassa e óleo vegetal",

          ],
          type: "soja",
        },
        {
          title: "Proteínas Animais:",
          description: [
            "Carne bovina, suína e de frango (inteiros, cortes e miúdos)",
            "Exportação com certificação HALAL para países árabes e islâmicos",
            "Atendimento ao mercado asiático, europeu e africano",

          ],
          type: "animal",
        },
        
      ],
      cta: "Ver todos Commodities",
    },
    products: {
      title: "Portfólio e Mercados Atendidos",
      subtitle: "A MLG2 mantém negociações consolidadas com parceiros em:",
      description: "A logística internacional é realizada pelos principais portos brasileiros: Santos, Paranaguá, Itaqui, Suape e Itacoatiara, com monitoramento técnico e documental.",
      categories: [
        { name: "América Latina: Brasil, Argentina, México, Panamá", count: "", icon: "" },
        { name: "Europa: Alemanha, Holanda, Espanha, Itália", count: "", icon: "" },
        { name: "África: Egito, Marrocos, África do Sul", count: "", icon: "" },
        { name: "Oriente Médio e Ásia: Emirados Árabes, Omã, Índia, China, Turquia", count: "", icon: "" },
      ],
      cta: "Explore Products",
    },
    innovation: {
      title: "Innovation & Technology",
      subtitle: "Número de Registro: 2130405",
      description: "Sede Legal: Craigmur Chambers, Road Town, Tortola, VG 1110 – British Virgin Islands",
      description2: "Escritórios Operacionais: Brasil",
      description3: "CEO: Sr. Sandro Elias Francisco Ferreira",
      description4: "A empresa foi concebida para ser moderna, digital, transparente e internacional, adaptando-se às demandas globais do século XXI com flexibilidade e inteligência de mercado.",
      technologies: [
        { name: "Precision Agriculture", description: "GPS and sensors for optimization", icon: "🛰️" },
        { name: "Agricultural Drones", description: "Intelligent aerial monitoring", icon: "🚁" },
        { name: "IoT & Sensors", description: "Real-time field data", icon: "📡" },
        { name: "AI & Machine Learning", description: "Advanced predictive analysis", icon: "🤖" },
      ],
    },
    sustainability: {
      title: "Sustentabilidade e Energia Limpa",
      subtitle: "A MLG2 está comprometida com o desenvolvimento sustentável, promovendo e participando de projetos de energia renovável nas áreas de:",
      description: "Sustainable practices that preserve the environment and ensure productivity.",
      initiatives: [
        { title: "Biocombustíveis (biodiesel, etanol)", description: "", progress: 100 },
        { title: "Biomassa e reaproveitamento agrícola", description: "", progress: 100 },
        { title: "Energia solar fotovoltaica", description: "", progress: 100 },
        { title: "Parcerias com usinas certificadas para produção limpa", description: "", progress: 100 },
      ],
      text1: "Conformidade Ambiental",
      text2: "A atuação da empresa respeita integralmente as legislações ambientais vigentes:",
      text3: [
        "Lei nº 12.305/2010 – Política Nacional de Resíduos Sólidos",
        "Lei nº 9.605/1998 – Crimes Ambientais",
        "RenovaBio – Política Nacional de Biocombustíveis",
        "CONAMA nº 237/1997 – Licenciamento ambiental",
        "Decreto nº 10.387/2020 – Incentivos para projetos renováveis",
      ],
      text4: "Nosso foco é contribuir com a transição energética global, mantendo o equilíbrio entre crescimento econômico e responsabilidade socioambiental.",
    },
    testimonials: {
      title: "What Our Partners Say",
      subtitle: "Real Success Stories",
      items: [
        {
          name: "João Silva",
          position: "Rural Producer - MT",
          text: "MLG2 transformed our farm. We increased productivity by 35% with their technological solutions.",
          rating: 5,
        },
        {
          name: "Maria Santos",
          position: "Agricultural Cooperative - RS",
          text: "Exceptional partnership! MLG2's technical and commercial support is unmatched in the market.",
          rating: 5,
        },
        {
          name: "Carlos Oliveira",
          position: "Exporter - SP",
          text: "Thanks to MLG2, we managed to expand to 15 new countries. Total professionalism.",
          rating: 5,
        },
      ],
    },
    news: {
      title: "Soluções Financeiras e Ativos Globais",
      subtitle: "MLG2 também atua na estruturação de operações financeiras internacionais, oferecendo suporte estratégico para captação de recursos, operações cross-border, funding institucional e movimentações multimoedas, incluindo ativos digitais.",
      items: [
        {
          title: "Estruturação de exportações com financiamento internacional",
          src: "https://www.shutterstock.com/image-photo/ai-cargo-ship-technology-global-600nw-2372585739.jpg"
        },
        {
          title: "Captação de investimentos por meio de fundos, bancos e fintechs (no Brasil e no exterior)",
          src: "https://images.pexels.com/photos/4175028/pexels-photo-4175028.jpeg"
        },
        
        {
          title: "Abertura de contas empresariais internacionais",
          src: "https://media.istockphoto.com/id/179243711/photo/brazil-argentina-and-world-flags.jpg?s=612x612&w=0&k=20&c=hjuCkoXWXBIvM-GsYji4jZxv6hAu-1m5jBETU6cmNkY="
        },
        {
          title: "Transações com carteiras de criptomoedas (cold wallets) para moedas digitais como USDT, BTC, ETH",
          src: "https://thumbs.dreamstime.com/b/cryptocurrency-tokens-featuring-bitcoin-ethereum-litecoin-logos-rest-dark-cryptocurrency-tokens-featuring-bitcoin-382012887.jpg"
        },
        {
          title: "Proteção cambial (hedge), compliance e auditoria KYC/AML",
          src: "https://media.licdn.com/dms/image/v2/D5612AQFKFxYft2BgDw/article-cover_image-shrink_600_2000/B56ZWEzVd2HQAQ-/0/1741689805260?e=2147483647&v=beta&t=qzrVCA1XCzMVoyb_8Eo2IOm7I3vYEgRuWYrqdqw1XFs"
        },
        {
          title: "Relacionamento com instituições nos EUA, Europa, Ásia e Oriente Médio",
          src: "https://images.stockcake.com/public/e/9/6/e96c2d89-e1f3-4aba-9d80-8971eefcf083_large/global-network-map-stockcake.jpg"
        },
        // {
        //   title: "Tecnologia de IA Aumenta Produtividade em 40%",
        //   date: "10 Dez 2024",
        //   category: "Inovação",
        //   excerpt: "Sistema proprietário de inteligência artificial revoluciona plantio...",
        // },
        // {
        //   title: "Certificação Sustentável Alcança 100% das Fazendas",
        //   date: "05 Dez 2024",
        //   category: "Sustentabilidade",
        //   excerpt: "Marco histórico: todas as propriedades parceiras agora são certificadas...",
        // },
      ],
      cta: "View All News",
    },
    partners: {
      title: "Our Global Partners",
      subtitle: "Connected to the World",
      description: "We work with the main companies and organizations in global agribusiness.",
    },
    certifications: {
      title: "Certifications & Quality",
      subtitle: "International Standards of Excellence",
      items: ["ISO 9001", "HACCP", "Organic", "Fair Trade", "Rainforest Alliance", "Global GAP", "BRC", "SQF"],
    },
    cta: {
      title: "Ready to Transform Your Agribusiness?",
      subtitle: "Join over 10,000 producers who trust MLG2",
      description: "Contact us and discover how we can help your company reach new heights in the global market.",
      button: "Contact Us Now",
    },
  },
}

export default function Home({ language }) {
  const t = translations[language]

  return (
    <div className={styles.container}>

      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroBackground}>
          <img
            src="/placeholder.svg?height=1080&width=1920"
            alt="Agricultural landscape"
            fill
            className={styles.heroImage}
          />
          <div className={styles.heroOverlay} />
        </div>

        <div className={styles.heroContent}>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className={styles.heroText}
          >
            <div className={styles.badge}></div>

            <h1 className={styles.heroTitle}>
              {t.hero.title} <span className={styles.heroTitleGradient}>{t.hero.subtitle}</span>
            </h1>

            <p className={styles.heroDescription}>{t.hero.description}</p>

            <Link href="/servicos" className={styles.ctaButton}>
              {t.hero.cta}
            </Link>
          </motion.div>

          {/* <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className={styles.stats}
          >
            <div className={styles.statItem}>
              <div className={styles.statNumber}>50+</div>
              <div className={styles.statLabel}>{t.hero.stats.countries}</div>
            </div>
            <div className={styles.statItem}>
              <div className={styles.statNumber}>10K+</div>
              <div className={styles.statLabel}>{t.hero.stats.farmers}</div>
            </div>
            <div className={styles.statItem}>
              <div className={styles.statNumber}>25+</div>
              <div className={styles.statLabel}>{t.hero.stats.experience}</div>
            </div>
          </motion.div> */}
        </div>
      </section>

      {/* About Preview Section */}
      <section className={styles.aboutPreview}>
        <div className={styles.sectionContainer}>
          <div className={styles.aboutGrid}>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className={styles.aboutContent}
            >
              <h2 className={styles.sectionTitle}>{t.about.title}</h2>
              <p className={styles.sectionSubtitle}>{t.about.subtitle}</p>
              <p className={styles.sectionDescription}>{t.about.description}</p>

              <div className={styles.missionVision}>
                <div className={styles.mvItem}>
                  <div className={styles.mvIcon}>🎯</div>
                  <div className={styles.mvContent}>
                    <h4>{t.about.textMission}</h4>
                    <p>{t.about.mission}</p>
                  </div>
                </div>
                <div className={styles.mvItem}>
                  <div className={styles.mvIcon}>🔮</div>
                  <div className={styles.mvContent}>
                    <h4>{t.about.textVision}</h4>
                    <p>{t.about.vision}</p>
                  </div>
                </div>
              </div>

              <Link href="/sobre" className={styles.sectionCta}>
                {t.about.cta}
              </Link>

            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className={styles.aboutImage}
            >
              <Carrosel  />

              {/* <img
                src={image1}
                alt="MLG2 História"
                width={600}
                height={500}
                className={styles.aboutImg}
              /> */}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className={styles.aboutValues}
            >
              <h2 className={styles.sectionTitle}>{t.about.textValues}</h2>
              <div className={styles.certificationsGrid}>
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4 }}
                  viewport={{ once: true }}
                  className={styles.certificationBadge}>
                  {t.about.value1}
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4 }}
                  viewport={{ once: true }}
                  className={styles.certificationBadge}>
                  {t.about.value2}
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4 }}
                  viewport={{ once: true }}
                  className={styles.certificationBadge}>
                  {t.about.value3}
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4 }}
                  viewport={{ once: true }}
                  className={styles.certificationBadge}>
                  {t.about.value4}
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4 }}
                  viewport={{ once: true }}
                  className={styles.certificationBadge}>
                  {t.about.value5}
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4 }}
                  viewport={{ once: true }}
                  className={styles.certificationBadge}>
                  {t.about.value6}
                </motion.div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Founder Message Section */}
      <section className={styles.founderSection}>
        <div className={styles.founderContainer}>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className={styles.founderContent}
          >
            <h2 className={styles.founderTitle}>{t.founder.title}</h2>

            <div className={styles.founderCard}>
              <div className={styles.founderImageContainer}>
                <img
                  src={ceoImg}
                  alt="Sandro Ferreira"
                  width={300}
                  height={300}
                  className={styles.founderImage}
                />
              </div>

              <div className={styles.founderText}>
                <h3 className={styles.founderName}>{t.founder.name}</h3>
                <p className={styles.founderPosition}>{t.founder.position}</p>

                <blockquote className={styles.founderQuote}>{t.founder.quote}</blockquote>

                {t.founder.message.map(msg => 
                   <p className={styles.founderMessage}>{msg}</p>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Preview Section */}
      <section className={styles.servicesPreview}>
        <div className={styles.sectionContainer}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className={styles.sectionHeader}
          >
            <h2 className={styles.sectionTitle}>{t.services.title}</h2>
            <p className={styles.sectionDescription}>{t.services.description}</p>
            <p className={styles.sectionSubtitle}>{t.services.subtitle}</p>
          </motion.div>

          <div className={styles.servicesGrid}>
            {t.services.items.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={styles.serviceCard}
              >
                <MiniCarrosel type={service.type} />
                <h3 className={styles.serviceTitle}>{service.title}</h3>
                <p className={styles.serviceDescription}>{service.description.map(i => <p>• {i}</p>)}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className={styles.sectionCtaContainer}
          >
            <Link href="/servicos" className={styles.sectionCta}>
              {t.services.cta}
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Sustainability Section */}
      <section className={styles.sustainabilitySection}>
        <div className={styles.sectionContainer}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className={styles.sectionHeader}
          >
            <h2 className={styles.sectionTitle}>{t.sustainability.title}</h2>
            <p className={styles.sectionSubtitle}>{t.sustainability.subtitle}</p>
          </motion.div>

          <div className={styles.initiativesGrid}>
            {t.sustainability.initiatives.map((initiative, index) => (
              <motion.div
                key={initiative.title}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={styles.initiativeCard}
              >
                <div className={styles.initiativeHeader}>
                  <h3 className={styles.initiativeTitle}>{initiative.title}</h3>
                  {/* <span className={styles.initiativeProgress}>{initiative.progress}%</span> */}
                </div>
                <p className={styles.initiativeDescription}>{initiative.description}</p>
                <div className={styles.progressBar}>
                  <motion.div
                    className={styles.progressFill}
                    initial={{ width: 0 }}
                    whileInView={{ width: `${initiative.progress}%` }}
                    transition={{ duration: 1, delay: index * 0.1 + 0.5 }}
                    viewport={{ once: true }}
                  />
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className={styles.aboutValues}
          >
            <h2 className={styles.sectionTitle}>{t.sustainability.text1}</h2>
              <p style={{margin: "1rem"}} className={styles.sectionDescription}>{t.sustainability.text2}</p>
            <div className={styles.certificationsGrid2}>
              {t.sustainability.text3.map(txt =>
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4 }}
                  viewport={{ once: true }}
                  style={{width: "100%"}}
                  className={styles.certificationBadge}>
                  {txt}
                </motion.div>
              )}
            </div>
              <p style={{margin: "1rem", textAlign:"center"}} className={styles.sectionDescription}>{t.sustainability.text4}</p>
          </motion.div>


        </div>
      </section>

      {/* BANNER */}
      <img src={BannerSust} className={styles.banner} alt="" />

      {/* News Section */}
      <section className={styles.newsSection}>
        <div className={styles.sectionContainer}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className={styles.sectionHeader}
          >
            <h2 className={styles.sectionTitle}>{t.news.title}</h2>
            <p className={styles.sectionSubtitle}>{t.news.subtitle}</p>
          </motion.div>

          <div className={styles.newsGrid}>
            {t.news.items.map((article, index) => (
              <motion.div
                key={article.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={styles.newsCard}
              >
                <div className={styles.newsImage}>
                  <img
                    src={article.src}
                    alt={article.title}
                    width={400}
                    height={200}
                    className={styles.newsImg}
                  />
                  <div className={styles.newsCategory}>{article.category}</div>
                </div>
                <div className={styles.newsContent}>
                  <div className={styles.newsDate}>{article.date}</div>
                  <h3 className={styles.newsTitle}>{article.title}</h3>
                  <p className={styles.newsExcerpt}>{article.excerpt}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className={styles.sectionCtaContainer}
          >
            {/* <button className={styles.sectionCta}>{t.news.cta}</button> */}
          </motion.div>
        </div>
      </section>

      {/* Innovation Section */}
      <section className={styles.innovationSection}>
        <div className={styles.sectionContainer}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className={styles.flags}
          >
            <div className={styles.flagContainer}>
              <img src={virginFlag} alt="" className={styles.flag} />
            </div>
            <div className={styles.flagContainer}>
            <img src={mlg2Logo} alt="" className={styles.flag} />
            </div>
            <div className={styles.flagContainer}>
              <img src={brazilFLag} alt="" className={styles.flag} />
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className={styles.sectionHeader}
          >
            <h2 className={styles.sectionTitle}>MLG2 BUSINESS CORPORATION</h2>
            <p className={styles.sectionSubtitle}>{t.innovation.subtitle}</p>
            <p className={styles.sectionDescription}>• {t.innovation.description}</p>
            <p className={styles.sectionDescription}>• {t.innovation.description2}</p>
            <p className={styles.sectionDescription}>• {t.innovation.description3}</p>
            <p className={styles.sectionDescription}>{t.innovation.description4}</p>
          </motion.div>

         
        </div>
      </section>

      {/* Products Preview Section */}
      <section className={styles.productsPreview}>
        <div className={styles.sectionContainer}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className={styles.sectionHeader}
          >
            <h2 className={styles.sectionTitle}>{t.products.title}</h2>
            <p className={styles.sectionSubtitle}>{t.products.subtitle}</p>
          </motion.div>

          <div className={styles.productsGrid}>
            {t.products.categories.map((category, index) => (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={styles.productCategory}
              >
                <div className={styles.categoryIcon}>{category.icon}</div>
                <h3 className={styles.categoryName}>{category.name}</h3>
                <p className={styles.categoryCount}>{category.count}</p>
              </motion.div>
            ))}
          </div>


          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className={styles.sectionCtaContainer}
          >
                        <p className={styles.sectionDescription}>{t.products.description}</p>

          </motion.div>
        </div>
      </section>


      {/* Testimonials Section */}
      {/* <section className={styles.testimonialsSection}>
        <div className={styles.sectionContainer}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className={styles.sectionHeader}
          >
            <h2 className={styles.sectionTitle}>{t.testimonials.title}</h2>
            <p className={styles.sectionSubtitle}>{t.testimonials.subtitle}</p>
          </motion.div>

          <div className={styles.testimonialsGrid}>
            {t.testimonials.items.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={styles.testimonialCard}
              >
                <div className={styles.testimonialRating}>
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className={styles.star}>
                      ⭐
                    </span>
                  ))}
                </div>
                <p className={styles.testimonialText}>"{testimonial.text}"</p>
                <div className={styles.testimonialAuthor}>
                  <div className={styles.authorAvatar}>
                    <img
                      src="/placeholder.svg?height=60&width=60"
                      alt={testimonial.name}
                      width={60}
                      height={60}
                      className={styles.avatarImg}
                    />
                  </div>
                  <div className={styles.authorInfo}>
                    <h4 className={styles.authorName}>{testimonial.name}</h4>
                    <p className={styles.authorPosition}>{testimonial.position}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section> */}

      

      {/* Partners Section */}
      {/* <section className={styles.partnersSection}>
        <div className={styles.sectionContainer}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className={styles.sectionHeader}
          >
            <h2 className={styles.sectionTitle}>{t.partners.title}</h2>
            <p className={styles.sectionSubtitle}>{t.partners.subtitle}</p>
            <p className={styles.sectionDescription}>{t.partners.description}</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className={styles.partnersLogos}
          >
            {[...Array(8)].map((_, index) => (
              <div key={index} className={styles.partnerLogo}>
                <img
                  src="/placeholder.svg?height=80&width=120"
                  alt={`Partner ${index + 1}`}
                  width={120}
                  height={80}
                  className={styles.logoImg}
                />
              </div>
            ))}
          </motion.div>
        </div>
      </section> */}

      {/* Certifications Section */}
      {/* <section className={styles.certificationsSection}>
        <div className={styles.sectionContainer}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className={styles.sectionHeader}
          >
            <h2 className={styles.sectionTitle}>{t.certifications.title}</h2>
            <p className={styles.sectionSubtitle}>{t.certifications.subtitle}</p>
          </motion.div>

          <div className={styles.certificationsGrid}>
            {t.certifications.items.map((cert, index) => (
              <motion.div
                key={cert}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                viewport={{ once: true }}
                className={styles.certificationBadge}
              >
                <div className={styles.certIcon}>🏆</div>
                <span className={styles.certName}>{cert}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Final CTA Section */}
      {/* <section className={styles.finalCta}>
        <div className={styles.ctaContainer}>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className={styles.ctaContent}
          >
            <h2 className={styles.ctaTitle}>{t.cta.title}</h2>
            <p className={styles.ctaSubtitle}>{t.cta.subtitle}</p>
            <p className={styles.ctaDescription}>{t.cta.description}</p>
            <Link href="/contato" className={styles.ctaButton}>
              {t.cta.button}
            </Link>
          </motion.div>
        </div>
      </section> */}

    </div>
  )
}