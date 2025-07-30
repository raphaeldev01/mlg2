"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import styles from "../styles/Breadcrumb.module.css"

const translations = {
  pt: {
    home: "Início",
    sobre: "Sobre",
    servicos: "Serviços",
    produtos: "Produtos",
    parceiros: "Parceiros",
    financas: "Finanças",
    contato: "Contato",
  },
  en: {
    home: "Home",
    sobre: "About",
    servicos: "Services",
    produtos: "Products",
    parceiros: "Partners",
    financas: "Finance",
    contato: "Contact",
  },
}

export default function Breadcrumb({ language = "pt" }) {
  const pathname = usePathname()
  const t = translations[language]

  if (pathname === "/") return null

  const pathSegments = pathname.split("/").filter(Boolean)
  const currentPage = pathSegments[0]

  return (
    <nav className={styles.breadcrumb}>
      <div className={styles.container}>
        <Link href="/" className={styles.breadcrumbLink}>
          {t.home}
        </Link>
        <span className={styles.separator}>›</span>
        <span className={styles.current}>{t[currentPage] || currentPage}</span>
      </div>
    </nav>
  )
}
