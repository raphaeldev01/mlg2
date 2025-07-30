"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { useParams } from "next/navigation"
import Header from "../../components/Header"
import Footer from "../../components/Footer"
import styles from "../../styles/ProductDetail.module.css"
import Breadcrumb from "../../components/Breadcrumb"

const productData = {
  soja: {
    pt: {
      name: "Soja Premium",
      category: "Grãos e Cereais",
      description: "Soja de alta qualidade, cultivada com as melhores práticas agrícolas e tecnologia de ponta.",
      specifications: {
        title: "Especificações Técnicas",
        items: [
          { label: "Proteína", value: "38-40%" },
          { label: "Óleo", value: "18-20%" },
          { label: "Umidade", value: "Máx. 14%" },
          { label: "Impurezas", value: "Máx. 2%" },
          { label: "Grãos Avariados", value: "Máx. 8%" },
          { label: "Classificação", value: "Tipo 1" },
        ],
      },
      benefits: {
        title: "Benefícios e Aplicações",
        items: [
          "Alta concentração de proteína vegetal",
          "Ideal para produção de ração animal",
          "Matéria-prima para óleo de soja",
          "Fonte de proteína para alimentação humana",
          "Certificação de qualidade internacional",
          "Rastreabilidade completa da origem",
        ],
      },
      availability: {
        title: "Disponibilidade",
        harvest: "Safra 2024/2025",
        packaging: "Granel, Big Bags de 1000kg, Sacas de 60kg",
        shipping: "FOB Santos, CIF destino",
        minimum: "Pedido mínimo: 1000 toneladas",
      },
    },
    en: {
      name: "Premium Soybeans",
      category: "Grains & Cereals",
      description: "High-quality soybeans, grown with the best agricultural practices and cutting-edge technology.",
      specifications: {
        title: "Technical Specifications",
        items: [
          { label: "Protein", value: "38-40%" },
          { label: "Oil", value: "18-20%" },
          { label: "Moisture", value: "Max. 14%" },
          { label: "Impurities", value: "Max. 2%" },
          { label: "Damaged Grains", value: "Max. 8%" },
          { label: "Classification", value: "Type 1" },
        ],
      },
      benefits: {
        title: "Benefits and Applications",
        items: [
          "High concentration of vegetable protein",
          "Ideal for animal feed production",
          "Raw material for soybean oil",
          "Protein source for human consumption",
          "International quality certification",
          "Complete origin traceability",
        ],
      },
      availability: {
        title: "Availability",
        harvest: "2024/2025 Harvest",
        packaging: "Bulk, 1000kg Big Bags, 60kg Sacks",
        shipping: "FOB Santos, CIF destination",
        minimum: "Minimum order: 1000 tons",
      },
    },
  },
}

export default function ProductDetail() {
  const [language, setLanguage] = useState("pt")
  const params = useParams()
  const slug = params.slug

  // Get product data or default to soja if not found
  const product = productData[slug] || productData.soja
  const t = product[language]

  return (
    <div className={styles.container}>
      <Header language={language} setLanguage={setLanguage} />
      <Breadcrumb language={language} />

      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <div className={styles.breadcrumbCustom}>
              <Link href="/produtos" className={styles.breadcrumbLink}>
                Produtos
              </Link>
              <span className={styles.separator}>›</span>
              <span className={styles.current}>{t.name}</span>
            </div>
            <h1 className={styles.title}>{t.name}</h1>
            <p className={styles.category}>{t.category}</p>
            <p className={styles.description}>{t.description}</p>
          </motion.div>
        </div>
      </section>

      {/* Product Details */}
      <section className={styles.detailsSection}>
        <div className={styles.sectionContainer}>
          <div className={styles.detailsGrid}>
            {/* Product Image */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className={styles.imageContainer}
            >
              <Image
                src="/placeholder.svg?height=500&width=600"
                alt={t.name}
                width={600}
                height={500}
                className={styles.productImage}
              />
            </motion.div>

            {/* Specifications */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className={styles.specificationsContainer}
            >
              <h2 className={styles.sectionTitle}>{t.specifications.title}</h2>
              <div className={styles.specsList}>
                {t.specifications.items.map((spec, index) => (
                  <div key={index} className={styles.specItem}>
                    <span className={styles.specLabel}>{spec.label}:</span>
                    <span className={styles.specValue}>{spec.value}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className={styles.benefitsSection}>
        <div className={styles.sectionContainer}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className={styles.benefitsContent}
          >
            <h2 className={styles.sectionTitle}>{t.benefits.title}</h2>
            <div className={styles.benefitsGrid}>
              {t.benefits.items.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={styles.benefitItem}
                >
                  <div className={styles.benefitIcon}>✓</div>
                  <span className={styles.benefitText}>{benefit}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Availability Section */}
      <section className={styles.availabilitySection}>
        <div className={styles.sectionContainer}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className={styles.availabilityContent}
          >
            <h2 className={styles.sectionTitle}>{t.availability.title}</h2>
            <div className={styles.availabilityGrid}>
              <div className={styles.availabilityCard}>
                <div className={styles.availabilityIcon}>🌾</div>
                <h3 className={styles.availabilityLabel}>Safra</h3>
                <p className={styles.availabilityValue}>{t.availability.harvest}</p>
              </div>
              <div className={styles.availabilityCard}>
                <div className={styles.availabilityIcon}>📦</div>
                <h3 className={styles.availabilityLabel}>Embalagem</h3>
                <p className={styles.availabilityValue}>{t.availability.packaging}</p>
              </div>
              <div className={styles.availabilityCard}>
                <div className={styles.availabilityIcon}>🚢</div>
                <h3 className={styles.availabilityLabel}>Embarque</h3>
                <p className={styles.availabilityValue}>{t.availability.shipping}</p>
              </div>
              <div className={styles.availabilityCard}>
                <div className={styles.availabilityIcon}>📊</div>
                <h3 className={styles.availabilityLabel}>Pedido Mínimo</h3>
                <p className={styles.availabilityValue}>{t.availability.minimum}</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.cta}>
        <div className={styles.ctaContainer}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className={styles.ctaContent}
          >
            <h2 className={styles.ctaTitle}>Interessado neste produto?</h2>
            <p className={styles.ctaDescription}>
              Entre em contato conosco para solicitar uma cotação personalizada e conhecer nossas condições especiais.
            </p>
            <div className={styles.ctaButtons}>
              <button className={styles.ctaButton}>Solicitar Cotação</button>
              <Link href="/produtos" className={styles.ctaButtonSecondary}>
                Ver Outros Produtos
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer language={language} />
    </div>
  )
}
