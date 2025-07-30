import {Link} from "react-router-dom"
import styles from "../styles/Footer.module.css"

import logo from "../assets/logo_text.png"

const translations = {
  ar: {
    description:
      "Líder global em soluções para o agronegócio, conectando o campo ao mundo através de inovação e sustentabilidade.",
    quickLinks: "Links Rápidos",
    contact: "Contato",
    rights: "Todos os direitos reservados.",
    nav: {
      home: "Início",
      about: "Sobre",
      services: "Serviços",
      products: "Produtos",
      contact: "Contato",
    },
  },
  en: {
    description:
      "Global leader in agribusiness solutions, connecting the field to the world through innovation and sustainability.",
    quickLinks: "Quick Links",
    contact: "Contact",
    rights: "All rights reserved.",
    nav: {
      home: "Home",
      about: "About",
      services: "Services",
      products: "Products",
      contact: "Contact",
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
              <img src={logo} alt="" className={styles.imgLogo} />
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
            <ul className={styles.contactInfo}>
              <li>📞 +55 (16) 99769-3321</li>
              <li>✉️ contato@mlg2.com</li>
              <li>📍 British Virgin Islands</li>
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
