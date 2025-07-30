"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import styles from "../styles/Header.module.css"
import { usePathname } from "next/navigation"

const translations = {
  pt: {
    nav: {
      home: "Início",
      about: "Sobre",
      services: "Serviços",
      products: "Produtos",
      partners: "Parceiros",
      finance: "Finanças",
      contact: "Contato",
    },
  },
  en: {
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
}

export default function Header({ language, setLanguage }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const t = translations[language]
  const pathname = usePathname()

  const navItems = [
    { key: "home", href: "/" },
    { key: "about", href: "/sobre" },
    { key: "services", href: "/servicos" },
    { key: "products", href: "/produtos" },
    { key: "partners", href: "/parceiros" },
    { key: "finance", href: "/financas" },
    { key: "contact", href: "/contato" },
  ]

  return (
    <motion.header className={styles.header} initial={{ y: -100 }} animate={{ y: 0 }} transition={{ duration: 0.6 }}>
      <div className={styles.container}>
        <Link href="/" className={styles.logo}>
          <div className={styles.logoIcon}>🌾</div>
          <span className={styles.logoText}>MLG2</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className={styles.nav}>
          {navItems.map(({ key, href }) => (
            <Link
              key={key}
              href={href}
              className={`${styles.navLink} ${pathname === href ? styles.navLinkActive : ""}`}
            >
              {t.nav[key]}
            </Link>
          ))}
        </nav>

        <div className={styles.headerActions}>
          {/* Language Selector */}
          <div className={styles.languageSelector}>
            <button
              onClick={() => setLanguage("pt")}
              className={`${styles.langButton} ${language === "pt" ? styles.langActive : ""}`}
            >
              PT
            </button>
            <button
              onClick={() => setLanguage("en")}
              className={`${styles.langButton} ${language === "en" ? styles.langActive : ""}`}
            >
              EN
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className={styles.mobileMenuButton}>
            {isMenuOpen ? "✕" : "☰"}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.nav
              className={styles.mobileNav}
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              {navItems.map(({ key, href }) => (
                <Link key={key} href={href} className={styles.mobileNavLink} onClick={() => setIsMenuOpen(false)}>
                  {t.nav[key]}
                </Link>
              ))}
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  )
}
