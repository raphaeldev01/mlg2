"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import Header from "../components/Header"
import Footer from "../components/Footer"
import styles from "../styles/Products.module.css"
import Breadcrumb from "../components/Breadcrumb"

const translations = {
  pt: {
    title: "Nossos Produtos",
    subtitle: "Qualidade Premium para o Mundo",
    intro:
      "Oferecemos uma ampla variedade de produtos agrícolas de alta qualidade, cultivados com as melhores práticas sustentáveis e tecnologias avançadas.",
    categories: {
      grains: {
        title: "Grãos e Cereais",
        description: "Soja, milho, trigo e outros grãos de alta qualidade",
        products: [
          { name: "Soja", slug: "soja", description: "Soja premium para exportação" },
          { name: "Milho", slug: "milho", description: "Milho de alta qualidade" },
          { name: "Trigo", slug: "trigo", description: "Trigo especial para panificação" },
          { name: "Arroz", slug: "arroz", description: "Arroz longo fino premium" },
          { name: "Feijão", slug: "feijao", description: "Feijão carioca selecionado" },
          { name: "Sorgo", slug: "sorgo", description: "Sorgo para ração animal" },
        ],
      },
      fruits: {
        title: "Frutas Tropicais",
        description: "Frutas frescas e processadas para exportação",
        products: [
          { name: "Manga", slug: "manga", description: "Manga tommy atkins premium" },
          { name: "Abacaxi", slug: "abacaxi", description: "Abacaxi pérola doce" },
          { name: "Banana", slug: "banana", description: "Banana nanica premium" },
          { name: "Mamão", slug: "mamao", description: "Mamão formosa extra" },
          { name: "Maracujá", slug: "maracuja", description: "Maracujá azedo concentrado" },
          { name: "Açaí", slug: "acai", description: "Açaí orgânico premium" },
        ],
      },
      meat: {
        title: "Proteína Animal",
        description: "Carne bovina, suína e de frango de qualidade superior",
        products: [
          { name: "Carne Bovina", slug: "carne-bovina", description: "Carne bovina premium" },
          { name: "Carne Suína", slug: "carne-suina", description: "Carne suína especial" },
          { name: "Frango", slug: "frango", description: "Frango resfriado premium" },
          { name: "Ovos", slug: "ovos", description: "Ovos brancos extra grandes" },
          { name: "Leite", slug: "leite", description: "Leite integral pasteurizado" },
          { name: "Derivados", slug: "derivados", description: "Queijos e iogurtes premium" },
        ],
      },
      organic: {
        title: "Produtos Orgânicos",
        description: "Alimentos orgânicos certificados e sustentáveis",
        products: [
          { name: "Soja Orgânica", slug: "soja-organica", description: "Soja orgânica certificada" },
          { name: "Café Orgânico", slug: "cafe-organico", description: "Café arábica orgânico" },
          { name: "Açúcar Orgânico", slug: "acucar-organico", description: "Açúcar cristal orgânico" },
          { name: "Frutas Orgânicas", slug: "frutas-organicas", description: "Mix de frutas orgânicas" },
          { name: "Vegetais Orgânicos", slug: "vegetais-organicos", description: "Vegetais frescos orgânicos" },
          { name: "Grãos Orgânicos", slug: "graos-organicos", description: "Grãos integrais orgânicos" },
        ],
      },
    },
    quality: {
      title: "Garantia de Qualidade",
      description:
        "Todos os nossos produtos passam por rigorosos controles de qualidade e possuem certificações internacionais.",
      certifications: ["ISO 9001", "HACCP", "Orgânico", "Fair Trade", "Rainforest Alliance", "Global GAP"],
    },
  },
  en: {
    title: "Our Products",
    subtitle: "Premium Quality for the World",
    intro:
      "We offer a wide variety of high-quality agricultural products, grown with the best sustainable practices and advanced technologies.",
    categories: {
      grains: {
        title: "Grains & Cereals",
        description: "Soybeans, corn, wheat and other high-quality grains",
        products: [
          { name: "Soybeans", slug: "soja", description: "Premium soybeans for export" },
          { name: "Corn", slug: "milho", description: "High quality corn" },
          { name: "Wheat", slug: "trigo", description: "Special wheat for baking" },
          { name: "Rice", slug: "arroz", description: "Premium long grain rice" },
          { name: "Beans", slug: "feijao", description: "Selected carioca beans" },
          { name: "Sorghum", slug: "sorgo", description: "Sorghum for animal feed" },
        ],
      },
      fruits: {
        title: "Tropical Fruits",
        description: "Fresh and processed fruits for export",
        products: [
          { name: "Mango", slug: "manga", description: "Premium tommy atkins mango" },
          { name: "Pineapple", slug: "abacaxi", description: "Sweet pearl pineapple" },
          { name: "Banana", slug: "banana", description: "Premium nanica banana" },
          { name: "Papaya", slug: "mamao", description: "Extra formosa papaya" },
          { name: "Passion Fruit", slug: "maracuja", description: "Concentrated sour passion fruit" },
          { name: "Açaí", slug: "acai", description: "Premium organic açaí" },
        ],
      },
      meat: {
        title: "Animal Protein",
        description: "Superior quality beef, pork and chicken",
        products: [
          { name: "Beef", slug: "carne-bovina", description: "Premium beef" },
          { name: "Pork", slug: "carne-suina", description: "Special pork" },
          { name: "Chicken", slug: "frango", description: "Premium chilled chicken" },
          { name: "Eggs", slug: "ovos", description: "Extra large white eggs" },
          { name: "Milk", slug: "leite", description: "Pasteurized whole milk" },
          { name: "Dairy Products", slug: "derivados", description: "Premium cheeses and yogurts" },
        ],
      },
      organic: {
        title: "Organic Products",
        description: "Certified and sustainable organic foods",
        products: [
          { name: "Organic Soybeans", slug: "soja-organica", description: "Certified organic soybeans" },
          { name: "Organic Coffee", slug: "cafe-organico", description: "Organic arabica coffee" },
          { name: "Organic Sugar", slug: "acucar-organico", description: "Organic crystal sugar" },
          { name: "Organic Fruits", slug: "frutas-organicas", description: "Mix of organic fruits" },
          { name: "Organic Vegetables", slug: "vegetais-organicos", description: "Fresh organic vegetables" },
          { name: "Organic Grains", slug: "graos-organicos", description: "Organic whole grains" },
        ],
      },
    },
    quality: {
      title: "Quality Assurance",
      description: "All our products undergo rigorous quality controls and have international certifications.",
      certifications: ["ISO 9001", "HACCP", "Organic", "Fair Trade", "Rainforest Alliance", "Global GAP"],
    },
  },
}

export default function Products() {
  const [language, setLanguage] = useState("pt")
  const [selectedCategory, setSelectedCategory] = useState("grains")
  const t = translations[language]

  return (
    <div className={styles.container}>
      <Header language={language} setLanguage={setLanguage} />
      <Breadcrumb language={language} />

      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <h1 className={styles.title}>{t.title}</h1>
            <p className={styles.subtitle}>{t.subtitle}</p>
            <p className={styles.intro}>{t.intro}</p>
          </motion.div>
        </div>
      </section>

      {/* Categories Navigation */}
      <section className={styles.categoriesNav}>
        <div className={styles.navContainer}>
          <div className={styles.navButtons}>
            {Object.entries(t.categories).map(([key, category]) => (
              <button
                key={key}
                onClick={() => setSelectedCategory(key)}
                className={`${styles.navButton} ${selectedCategory === key ? styles.navButtonActive : ""}`}
              >
                {category.title}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className={styles.productsSection}>
        <div className={styles.sectionContainer}>
          <motion.div
            key={selectedCategory}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className={styles.categoryContent}
          >
            <div className={styles.categoryHeader}>
              <h2 className={styles.categoryTitle}>{t.categories[selectedCategory].title}</h2>
              <p className={styles.categoryDescription}>{t.categories[selectedCategory].description}</p>
            </div>

            <div className={styles.productsGrid}>
              {t.categories[selectedCategory].products.map((product, index) => (
                <motion.div
                  key={product.slug}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className={styles.productCard}
                >
                  <Link href={`/produtos/${product.slug}`} className={styles.productLink}>
                    <div className={styles.productImage}>
                      <Image
                        src="/placeholder.svg?height=200&width=300"
                        alt={product.name}
                        width={300}
                        height={200}
                        className={styles.productImg}
                      />
                    </div>
                    <div className={styles.productInfo}>
                      <h3 className={styles.productName}>{product.name}</h3>
                      <p className={styles.productDescription}>{product.description}</p>
                      <div className={styles.productBadge}>
                        {selectedCategory === "organic" && "🌱 Orgânico"}
                        {selectedCategory === "grains" && "🌾 Premium"}
                        {selectedCategory === "fruits" && "🍎 Fresco"}
                        {selectedCategory === "meat" && "🥩 Premium"}
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Quality Section */}
      <section className={styles.qualitySection}>
        <div className={styles.sectionContainer}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className={styles.qualityContent}
          >
            <h2 className={styles.qualityTitle}>{t.quality.title}</h2>
            <p className={styles.qualityDescription}>{t.quality.description}</p>

            <div className={styles.certificationsGrid}>
              {t.quality.certifications.map((cert, index) => (
                <motion.div
                  key={cert}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={styles.certificationBadge}
                >
                  <div className={styles.certIcon}>🏆</div>
                  <span className={styles.certName}>{cert}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className={styles.statsSection}>
        <div className={styles.sectionContainer}>
          <div className={styles.statsGrid}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className={styles.statCard}
            >
              <div className={styles.statNumber}>1M+</div>
              <div className={styles.statLabel}>Toneladas/Ano</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className={styles.statCard}
            >
              <div className={styles.statNumber}>50+</div>
              <div className={styles.statLabel}>Países Atendidos</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className={styles.statCard}
            >
              <div className={styles.statNumber}>100+</div>
              <div className={styles.statLabel}>Produtos Diferentes</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className={styles.statCard}
            >
              <div className={styles.statNumber}>25+</div>
              <div className={styles.statLabel}>Anos de Experiência</div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer language={language} />
    </div>
  )
}
