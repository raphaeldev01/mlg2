import {Link} from "react-router-dom"
import styles from "../styles/Footer.module.css"

import logo from "../assets/logo_text.png"
import logoBranca from "../assets/logo_branco.png"

const translations = {
  ar: {
    description:
      "Líder global em soluções para o agronegócio, conectando o campo ao mundo através de inovação e sustentabilidade.",
    quickLinks: "روابط سريعة",
    contact: "اتصال",
    directContact: "اتصال مباشر",
    personalMail: "البريد الإلكتروني الشخصي: sandro.ferreira@mlg2.com",
    mobile:"الجوال: ‎+55 (16) 99769-3321",
    rights: "جميع الحقوق محفوظة.",
    location: "المواقع:",
    inter: "المقر الدولي: جزر العذراء البريطانية",
    brasil: "التواجد التشغيلي: البرازيل",
    nav: {
      home: "الرئيسية ",
      about: "من نحن‎",
      services: "الخدمات",
      products: "المنتجات",
      partners: "الشركاء",
      finance: "التمويل",
      contact: "اتصل بنا ",
    },
  },
  en: {
    description:
      "Global leader in agribusiness solutions, connecting the field to the world through innovation and sustainability.",
    quickLinks: "Quick Links",
    contact: "Contact",
    rights: "All rights reserved.",
    directContact: "Direct Contact",
    personalMail: "Personal Email: sandro.ferreira@mlg2.com",
    mobile: "Mobile: +55 (16) 99769-3321",
    inter: "International Headquarters: British Virgin Islands",
    brasil: "Operational Presence: Brazil",
    location: "Locations",
    nav: {
      home: "Home",
      about: "About",
      services: "Services",
      products: "Products",
      partners: "Partners",
      finance: "Finance",
      contact: "Contact",
    },
  },
  pt: {
    description:
      "Global leader in agribusiness solutions, connecting the field to the world through innovation and sustainability.",
    quickLinks: "Links Rapidos",
    contact: "Contato",
    rights: "Todos os direitos reservados.",
    directContact: "Contato Direto",
    personalMail: "Email Pessoal: sandro.ferreira@mlg2.com",
    mobile: "Telefone: +55 (16) 99769-3321",
    inter: "Sede internacional: British Virgin Islands",
    brasil: "Presença operacional: Brasil",
    location: "Localizações",
    nav: {
      home: "Inicio",
      about: "Sobre",
      services: "Serviços",
      products: "Produtos",
      partners: "Parceiros",
      finance: "Financeiro",
      contact: "Contato",
    },
  },
}

export default function Footer({ language }) {
  const t = translations[language]

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.footerGrid}>
          <div className={styles.footerBrand}>
            <div className={styles.logo}>
              <img src={logoBranca} alt="" className={styles.imgLogo} />
            </div>
            {/* <p className={styles.description}>{t.description}</p> */}
            <div className={styles.socialLinks}>
              <a href="#" className={styles.socialLink}>
                📘
              </a>
              <a href="#" className={styles.socialLink}>
                🐦
              </a>
              <a href="#" className={styles.socialLink}>
                📷
              </a>
              <a href="#" className={styles.socialLink}>
                💼
              </a>
            </div>
          </div>

          <div className={styles.footerSection}>
            <h4 className={styles.footerTitle}>{t.quickLinks}</h4>
            <ul className={styles.footerLinks}>
              <li>
                <Link href="/">{t.nav.home}</Link>
              </li>
              <li>
                <Link href="/sobre">{t.nav.about}</Link>
              </li>
              <li>
                <Link href="/servicos">{t.nav.services}</Link>
              </li>
              <li>
                <Link href="/produtos">{t.nav.products}</Link>
              </li>
              <li>
                <Link href="/contato">{t.nav.contact}</Link>
              </li>
            </ul>
          </div>

          <div className={styles.footerSection}>
            <h4 className={styles.footerTitle}>{t.contact}</h4>
            <ul style={{marginBottom: "1rem"}} className={styles.contactInfo}>
                <li>contato@mlg2.com</li>
            </ul>

            <h4 className={styles.footerTitle}>{t.directContact}</h4>
            <ul style={{marginBottom: "1rem"}}  className={styles.contactInfo}>
              <li>{t.personalMail}</li>
              <li>{t.mobile}</li>
            </ul>

            <h4 className={styles.footerTitle}>{t.location}</h4>
            <ul style={{marginBottom: "1rem"}}  className={styles.contactInfo}>
              <li>{t.inter}</li>
              <li>{t.brasil}</li>
            </ul>
          </div>
        </div>

        <div className={styles.footerBottom}>
          <p>&copy; 2025 MLG2. {t.rights}</p>
        </div>
      </div>
    </footer>
  )
}
