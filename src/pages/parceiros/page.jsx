"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import Header from "../components/Header"
import Footer from "../components/Footer"
import styles from "../styles/Partners.module.css"
import Breadcrumb from "../components/Breadcrumb"

const translations = {
  pt: {
    title: "Nossos Parceiros",
    subtitle: "Conectados ao Mundo",
    intro:
      "Trabalhamos com as principais empresas e organizações do agronegócio mundial, construindo uma rede sólida de parcerias estratégicas.",
    categories: {
      distributors: {
        title: "Distribuidores",
        description: "Rede global de distribuição",
        partners: [
          { name: "AgroDistrib Global", country: "Brasil", specialty: "Distribuição Nacional" },
          { name: "FarmSupply International", country: "EUA", specialty: "Mercado Norte-Americano" },
          { name: "EuroAgri Partners", country: "Alemanha", specialty: "União Europeia" },
          { name: "AsiaFarm Network", country: "China", specialty: "Mercado Asiático" },
        ],
      },
      technology: {
        title: "Tecnologia",
        description: "Parceiros em inovação",
        partners: [
          { name: "TechAgro Solutions", country: "Brasil", specialty: "Agricultura de Precisão" },
          { name: "DroneField Systems", country: "EUA", specialty: "Monitoramento Aéreo" },
          { name: "SmartFarm IoT", country: "Israel", specialty: "Sensores Inteligentes" },
          { name: "AI Crop Analytics", country: "Canadá", specialty: "Inteligência Artificial" },
        ],
      },
      financial: {
        title: "Financeiro",
        description: "Instituições financeiras parceiras",
        partners: [
          { name: "Banco do Agronegócio", country: "Brasil", specialty: "Crédito Rural" },
          { name: "AgriCredit International", country: "EUA", specialty: "Financiamento Internacional" },
          { name: "Rural Finance Group", country: "Argentina", specialty: "Mercado Sul-Americano" },
          { name: "Farm Investment Fund", country: "Holanda", specialty: "Investimentos Sustentáveis" },
        ],
      },
      logistics: {
        title: "Logística",
        description: "Parceiros em transporte e armazenagem",
        partners: [
          { name: "LogiAgro Express", country: "Brasil", specialty: "Transporte Nacional" },
          { name: "Global Grain Shipping", country: "Singapura", specialty: "Transporte Marítimo" },
          { name: "ColdChain Solutions", country: "EUA", specialty: "Cadeia Fria" },
          { name: "Storage Systems Pro", country: "França", specialty: "Armazenagem Inteligente" },
        ],
      },
    },
    featured: {
      title: "Parceiros em Destaque",
      partners: [
        {
          name: "AgroTech Global",
          description: "Líder mundial em tecnologia agrícola",
          partnership: "Parceria estratégica desde 2018",
          benefits: ["Tecnologia de ponta", "Suporte técnico 24/7", "Treinamentos especializados"],
        },
        {
          name: "International Grain Corp",
          description: "Maior trading de grãos do mundo",
          partnership: "Parceria comercial exclusiva",
          benefits: ["Acesso a mercados globais", "Preços preferenciais", "Logística integrada"],
        },
        {
          name: "Sustainable Farms Alliance",
          description: "Rede global de agricultura sustentável",
          partnership: "Certificação e desenvolvimento",
          benefits: ["Certificações internacionais", "Práticas sustentáveis", "Mercados premium"],
        },
      ],
    },
    benefits: {
      title: "Benefícios da Parceria",
      items: [
        { title: "Acesso Global", description: "Rede mundial de contatos e mercados", icon: "🌍" },
        { title: "Tecnologia Avançada", description: "Acesso às mais modernas tecnologias", icon: "🚀" },
        { title: "Suporte Técnico", description: "Assistência especializada 24/7", icon: "🛠️" },
        { title: "Crescimento Conjunto", description: "Desenvolvimento mútuo de negócios", icon: "📈" },
      ],
    },
    cta: {
      title: "Seja Nosso Parceiro",
      description: "Junte-se à nossa rede global de parceiros e expanda seus negócios no agronegócio mundial.",
      button: "Solicitar Parceria",
    },
  },
  en: {
    title: "Our Partners",
    subtitle: "Connected to the World",
    intro:
      "We work with the main companies and organizations in global agribusiness, building a solid network of strategic partnerships.",
    categories: {
      distributors: {
        title: "Distributors",
        description: "Global distribution network",
        partners: [
          { name: "AgroDistrib Global", country: "Brazil", specialty: "National Distribution" },
          { name: "FarmSupply International", country: "USA", specialty: "North American Market" },
          { name: "EuroAgri Partners", country: "Germany", specialty: "European Union" },
          { name: "AsiaFarm Network", country: "China", specialty: "Asian Market" },
        ],
      },
      technology: {
        title: "Technology",
        description: "Innovation partners",
        partners: [
          { name: "TechAgro Solutions", country: "Brazil", specialty: "Precision Agriculture" },
          { name: "DroneField Systems", country: "USA", specialty: "Aerial Monitoring" },
          { name: "SmartFarm IoT", country: "Israel", specialty: "Smart Sensors" },
          { name: "AI Crop Analytics", country: "Canada", specialty: "Artificial Intelligence" },
        ],
      },
      financial: {
        title: "Financial",
        description: "Partner financial institutions",
        partners: [
          { name: "Agribusiness Bank", country: "Brazil", specialty: "Rural Credit" },
          { name: "AgriCredit International", country: "USA", specialty: "International Financing" },
          { name: "Rural Finance Group", country: "Argentina", specialty: "South American Market" },
          { name: "Farm Investment Fund", country: "Netherlands", specialty: "Sustainable Investments" },
        ],
      },
      logistics: {
        title: "Logistics",
        description: "Transport and storage partners",
        partners: [
          { name: "LogiAgro Express", country: "Brazil", specialty: "National Transport" },
          { name: "Global Grain Shipping", country: "Singapore", specialty: "Maritime Transport" },
          { name: "ColdChain Solutions", country: "USA", specialty: "Cold Chain" },
          { name: "Storage Systems Pro", country: "France", specialty: "Smart Storage" },
        ],
      },
    },
    featured: {
      title: "Featured Partners",
      partners: [
        {
          name: "AgroTech Global",
          description: "World leader in agricultural technology",
          partnership: "Strategic partnership since 2018",
          benefits: ["Cutting-edge technology", "24/7 technical support", "Specialized training"],
        },
        {
          name: "International Grain Corp",
          description: "World's largest grain trading company",
          partnership: "Exclusive commercial partnership",
          benefits: ["Access to global markets", "Preferential prices", "Integrated logistics"],
        },
        {
          name: "Sustainable Farms Alliance",
          description: "Global sustainable agriculture network",
          partnership: "Certification and development",
          benefits: ["International certifications", "Sustainable practices", "Premium markets"],
        },
      ],
    },
    benefits: {
      title: "Partnership Benefits",
      items: [
        { title: "Global Access", description: "Worldwide network of contacts and markets", icon: "🌍" },
        { title: "Advanced Technology", description: "Access to the most modern technologies", icon: "🚀" },
        { title: "Technical Support", description: "Specialized 24/7 assistance", icon: "🛠️" },
        { title: "Joint Growth", description: "Mutual business development", icon: "📈" },
      ],
    },
    cta: {
      title: "Become Our Partner",
      description: "Join our global network of partners and expand your business in world agribusiness.",
      button: "Request Partnership",
    },
  },
}

export default function Partners() {
  const [language, setLanguage] = useState("pt")
  const [selectedCategory, setSelectedCategory] = useState("distributors")
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

      {/* Partners Grid */}
      <section className={styles.partnersSection}>
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

            <div className={styles.partnersGrid}>
              {t.categories[selectedCategory].partners.map((partner, index) => (
                <motion.div
                  key={partner.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className={styles.partnerCard}
                >
                  <div className={styles.partnerLogo}>
                    <Image
                      src="/placeholder.svg?height=80&width=120"
                      alt={partner.name}
                      width={120}
                      height={80}
                      className={styles.logoImg}
                    />
                  </div>
                  <div className={styles.partnerInfo}>
                    <h3 className={styles.partnerName}>{partner.name}</h3>
                    <p className={styles.partnerCountry}>📍 {partner.country}</p>
                    <p className={styles.partnerSpecialty}>{partner.specialty}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Partners */}
      <section className={styles.featuredSection}>
        <div className={styles.sectionContainer}>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className={styles.featuredTitle}
          >
            {t.featured.title}
          </motion.h2>

          <div className={styles.featuredGrid}>
            {t.featured.partners.map((partner, index) => (
              <motion.div
                key={partner.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={styles.featuredCard}
              >
                <div className={styles.featuredLogo}>
                  <Image
                    src="/placeholder.svg?height=100&width=150"
                    alt={partner.name}
                    width={150}
                    height={100}
                    className={styles.featuredImg}
                  />
                </div>
                <div className={styles.featuredContent}>
                  <h3 className={styles.featuredName}>{partner.name}</h3>
                  <p className={styles.featuredDescription}>{partner.description}</p>
                  <p className={styles.featuredPartnership}>{partner.partnership}</p>
                  <ul className={styles.benefitsList}>
                    {partner.benefits.map((benefit, idx) => (
                      <li key={idx} className={styles.benefitItem}>
                        ✓ {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className={styles.benefitsSection}>
        <div className={styles.sectionContainer}>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className={styles.benefitsTitle}
          >
            {t.benefits.title}
          </motion.h2>

          <div className={styles.benefitsGrid}>
            {t.benefits.items.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={styles.benefitCard}
              >
                <div className={styles.benefitIcon}>{benefit.icon}</div>
                <h3 className={styles.benefitTitle}>{benefit.title}</h3>
                <p className={styles.benefitDescription}>{benefit.description}</p>
              </motion.div>
            ))}
          </div>
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
            <h2 className={styles.ctaTitle}>{t.cta.title}</h2>
            <p className={styles.ctaDescription}>{t.cta.description}</p>
            <button className={styles.ctaButton}>{t.cta.button}</button>
          </motion.div>
        </div>
      </section>

      <Footer language={language} />
    </div>
  )
}
