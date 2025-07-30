"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import Header from "../components/Header"
import Footer from "../components/Footer"
import styles from "../styles/Services.module.css"
import Breadcrumb from "../components/Breadcrumb"

const translations = {
  pt: {
    title: "Nossos Serviços",
    subtitle: "Soluções Completas para o Agronegócio",
    intro:
      "Oferecemos uma gama completa de serviços especializados para atender todas as necessidades do agronegócio moderno, desde a consultoria técnica até a comercialização internacional.",
    services: {
      consulting: {
        title: "Consultoria Agrícola",
        description: "Assessoria especializada para otimização da produção e gestão rural",
        details:
          "Nossa equipe de especialistas oferece consultoria técnica completa, incluindo análise de solo, planejamento de cultivo, gestão de recursos e otimização de processos produtivos.",
        features: ["Análise de Solo", "Planejamento de Cultivo", "Gestão de Recursos", "Otimização de Processos"],
      },
      trading: {
        title: "Trading Internacional",
        description: "Comercialização global de commodities agrícolas",
        details:
          "Facilitamos a comercialização de produtos agrícolas em mercados internacionais, oferecendo acesso a uma rede global de compradores e garantindo os melhores preços.",
        features: ["Rede Global", "Melhores Preços", "Logística Integrada", "Suporte Completo"],
      },
      logistics: {
        title: "Logística Integrada",
        description: "Soluções completas de transporte e armazenamento",
        details:
          "Gerenciamos toda a cadeia logística, desde o armazenamento até o transporte final, garantindo a qualidade e pontualidade na entrega dos produtos.",
        features: ["Armazenamento", "Transporte", "Rastreamento", "Controle de Qualidade"],
      },
      technology: {
        title: "Tecnologia Agrícola",
        description: "Implementação de tecnologias avançadas no campo",
        details:
          "Introduzimos as mais modernas tecnologias agrícolas, incluindo agricultura de precisão, drones, sensores IoT e sistemas de monitoramento inteligente.",
        features: ["Agricultura de Precisão", "Drones", "Sensores IoT", "Monitoramento Inteligente"],
      },
      financing: {
        title: "Financiamento Rural",
        description: "Soluções financeiras para o agronegócio",
        details:
          "Oferecemos diversas opções de financiamento e crédito rural, facilitando o acesso a recursos para investimento em tecnologia e expansão da produção.",
        features: ["Crédito Rural", "Financiamento de Equipamentos", "Capital de Giro", "Seguros Agrícolas"],
      },
      certification: {
        title: "Certificação e Qualidade",
        description: "Certificações internacionais para seus produtos",
        details:
          "Auxiliamos na obtenção de certificações internacionais, garantindo que seus produtos atendam aos mais rigorosos padrões de qualidade e sustentabilidade.",
        features: ["Certificação Orgânica", "Fair Trade", "ISO Standards", "Rastreabilidade"],
      },
    },
  },
  en: {
    title: "Our Services",
    subtitle: "Complete Agribusiness Solutions",
    intro:
      "We offer a complete range of specialized services to meet all the needs of modern agribusiness, from technical consulting to international commercialization.",
    services: {
      consulting: {
        title: "Agricultural Consulting",
        description: "Specialized advisory for production optimization and rural management",
        details:
          "Our team of specialists offers complete technical consulting, including soil analysis, crop planning, resource management and production process optimization.",
        features: ["Soil Analysis", "Crop Planning", "Resource Management", "Process Optimization"],
      },
      trading: {
        title: "International Trading",
        description: "Global commercialization of agricultural commodities",
        details:
          "We facilitate the commercialization of agricultural products in international markets, offering access to a global network of buyers and ensuring the best prices.",
        features: ["Global Network", "Best Prices", "Integrated Logistics", "Complete Support"],
      },
      logistics: {
        title: "Integrated Logistics",
        description: "Complete transportation and storage solutions",
        details:
          "We manage the entire logistics chain, from storage to final transport, ensuring quality and punctuality in product delivery.",
        features: ["Storage", "Transportation", "Tracking", "Quality Control"],
      },
      technology: {
        title: "Agricultural Technology",
        description: "Implementation of advanced technologies in the field",
        details:
          "We introduce the most modern agricultural technologies, including precision agriculture, drones, IoT sensors and intelligent monitoring systems.",
        features: ["Precision Agriculture", "Drones", "IoT Sensors", "Smart Monitoring"],
      },
      financing: {
        title: "Rural Financing",
        description: "Financial solutions for agribusiness",
        details:
          "We offer various rural financing and credit options, facilitating access to resources for technology investment and production expansion.",
        features: ["Rural Credit", "Equipment Financing", "Working Capital", "Agricultural Insurance"],
      },
      certification: {
        title: "Certification and Quality",
        description: "International certifications for your products",
        details:
          "We assist in obtaining international certifications, ensuring that your products meet the most rigorous quality and sustainability standards.",
        features: ["Organic Certification", "Fair Trade", "ISO Standards", "Traceability"],
      },
    },
  },
}

export default function Services() {
  const [language, setLanguage] = useState("pt")
  const [selectedService, setSelectedService] = useState("consulting")
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

      {/* Services Grid */}
      <section className={styles.servicesSection}>
        <div className={styles.sectionContainer}>
          <div className={styles.servicesGrid}>
            {Object.entries(t.services).map(([key, service], index) => (
              <motion.div
                key={key}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`${styles.serviceCard} ${selectedService === key ? styles.serviceCardActive : ""}`}
                onClick={() => setSelectedService(key)}
              >
                <div className={styles.serviceIcon}>
                  {key === "consulting" && "👨‍🌾"}
                  {key === "trading" && "🌍"}
                  {key === "logistics" && "🚛"}
                  {key === "technology" && "🚀"}
                  {key === "financing" && "💰"}
                  {key === "certification" && "🏆"}
                </div>
                <h3 className={styles.serviceTitle}>{service.title}</h3>
                <p className={styles.serviceDescription}>{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Details */}
      <section className={styles.serviceDetails}>
        <div className={styles.sectionContainer}>
          <motion.div
            key={selectedService}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className={styles.detailsContent}
          >
            <div className={styles.detailsGrid}>
              <div className={styles.detailsText}>
                <h2 className={styles.detailsTitle}>{t.services[selectedService].title}</h2>
                <p className={styles.detailsDescription}>{t.services[selectedService].details}</p>

                <div className={styles.featuresList}>
                  <h4 className={styles.featuresTitle}>Principais Características:</h4>
                  <ul className={styles.features}>
                    {t.services[selectedService].features.map((feature, index) => (
                      <li key={index} className={styles.feature}>
                        ✓ {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className={styles.detailsImage}>
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt={t.services[selectedService].title}
                  width={600}
                  height={400}
                  className={styles.serviceImage}
                />
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
            <h2 className={styles.ctaTitle}>Pronto para Transformar seu Agronegócio?</h2>
            <p className={styles.ctaDescription}>
              Entre em contato conosco e descubra como podemos ajudar sua empresa a alcançar novos patamares.
            </p>
            <button className={styles.ctaButton}>Fale Conosco</button>
          </motion.div>
        </div>
      </section>

      <Footer language={language} />
    </div>
  )
}
