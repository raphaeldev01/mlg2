"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import Header from "../components/Header"
import Footer from "../components/Footer"
import styles from "../styles/Finance.module.css"
import Breadcrumb from "../components/Breadcrumb"

const translations = {
  pt: {
    title: "MLG2 Finance",
    subtitle: "Soluções Financeiras para o Agronegócio",
    intro:
      "Oferecemos uma gama completa de serviços financeiros especializados para o agronegócio, facilitando o acesso ao crédito e investimentos para produtores rurais.",
    services: {
      credit: {
        title: "Crédito Rural",
        description: "Linhas de crédito especializadas para custeio e investimento",
        details:
          "Financiamento para custeio da safra, aquisição de insumos e capital de giro com taxas competitivas e prazos adequados ao ciclo produtivo.",
        features: ["Taxas Competitivas", "Prazos Flexíveis", "Análise Rápida", "Sem Burocracia"],
        icon: "💰",
      },
      equipment: {
        title: "Financiamento de Equipamentos",
        description: "Financiamento para máquinas e equipamentos agrícolas",
        details:
          "Aquisição de tratores, colheitadeiras, implementos e tecnologia agrícola com financiamento de até 100% do valor.",
        features: ["Até 100% Financiado", "Parcelas Fixas", "Carência Disponível", "Seguro Incluso"],
        icon: "🚜",
      },
      working: {
        title: "Capital de Giro",
        description: "Recursos para manter o fluxo de caixa da propriedade",
        details:
          "Linha de crédito rotativo para necessidades de capital de giro, pagamento de fornecedores e despesas operacionais.",
        features: ["Crédito Rotativo", "Liberação Imediata", "Juros Competitivos", "Renovação Automática"],
        icon: "💳",
      },
      insurance: {
        title: "Seguros Agrícolas",
        description: "Proteção completa para sua produção",
        details: "Seguro agrícola, de equipamentos, vida e responsabilidade civil para proteção total do seu negócio.",
        features: ["Cobertura Total", "Indenização Rápida", "Prêmios Acessíveis", "Suporte 24h"],
        icon: "🛡️",
      },
      investment: {
        title: "Investimentos",
        description: "Aplicações financeiras para o agronegócio",
        details:
          "Produtos de investimento específicos para o setor rural, com rentabilidade atrativa e liquidez adequada.",
        features: ["Alta Rentabilidade", "Baixo Risco", "Liquidez Diária", "Gestão Profissional"],
        icon: "📈",
      },
      consulting: {
        title: "Consultoria Financeira",
        description: "Assessoria especializada em finanças rurais",
        details:
          "Planejamento financeiro, análise de viabilidade de projetos e consultoria em gestão financeira rural.",
        features: ["Planejamento Estratégico", "Análise de Projetos", "Gestão de Riscos", "Relatórios Detalhados"],
        icon: "📊",
      },
    },
    advantages: {
      title: "Vantagens MLG2 Finance",
      items: [
        { title: "Especialização Rural", description: "Conhecimento profundo do agronegócio", icon: "🌾" },
        { title: "Atendimento Personalizado", description: "Soluções sob medida para cada cliente", icon: "👥" },
        { title: "Agilidade", description: "Processos rápidos e desburocratizados", icon: "⚡" },
        { title: "Taxas Competitivas", description: "Melhores condições do mercado", icon: "💎" },
      ],
    },
    process: {
      title: "Como Funciona",
      steps: [
        { title: "Consulta Inicial", description: "Análise das suas necessidades", icon: "1" },
        { title: "Proposta Personalizada", description: "Elaboração da melhor solução", icon: "2" },
        { title: "Aprovação Rápida", description: "Análise e aprovação em até 48h", icon: "3" },
        { title: "Liberação", description: "Recursos disponibilizados", icon: "4" },
      ],
    },
    cta: {
      title: "Precisa de Financiamento?",
      description: "Entre em contato conosco e descubra as melhores soluções financeiras para seu agronegócio.",
      button: "Solicitar Proposta",
    },
  },
  en: {
    title: "MLG2 Finance",
    subtitle: "Financial Solutions for Agribusiness",
    intro:
      "We offer a complete range of specialized financial services for agribusiness, facilitating access to credit and investments for rural producers.",
    services: {
      credit: {
        title: "Rural Credit",
        description: "Specialized credit lines for funding and investment",
        details:
          "Financing for crop funding, input acquisition and working capital with competitive rates and terms suitable for the production cycle.",
        features: ["Competitive Rates", "Flexible Terms", "Fast Analysis", "No Bureaucracy"],
        icon: "💰",
      },
      equipment: {
        title: "Equipment Financing",
        description: "Financing for agricultural machinery and equipment",
        details:
          "Acquisition of tractors, harvesters, implements and agricultural technology with financing up to 100% of the value.",
        features: ["Up to 100% Financed", "Fixed Installments", "Grace Period Available", "Insurance Included"],
        icon: "🚜",
      },
      working: {
        title: "Working Capital",
        description: "Resources to maintain property cash flow",
        details: "Revolving credit line for working capital needs, supplier payments and operational expenses.",
        features: ["Revolving Credit", "Immediate Release", "Competitive Interest", "Automatic Renewal"],
        icon: "💳",
      },
      insurance: {
        title: "Agricultural Insurance",
        description: "Complete protection for your production",
        details: "Agricultural, equipment, life and civil liability insurance for total business protection.",
        features: ["Total Coverage", "Fast Compensation", "Affordable Premiums", "24h Support"],
        icon: "🛡️",
      },
      investment: {
        title: "Investments",
        description: "Financial applications for agribusiness",
        details:
          "Investment products specific to the rural sector, with attractive profitability and adequate liquidity.",
        features: ["High Profitability", "Low Risk", "Daily Liquidity", "Professional Management"],
        icon: "📈",
      },
      consulting: {
        title: "Financial Consulting",
        description: "Specialized advisory in rural finance",
        details: "Financial planning, project feasibility analysis and consulting in rural financial management.",
        features: ["Strategic Planning", "Project Analysis", "Risk Management", "Detailed Reports"],
        icon: "📊",
      },
    },
    advantages: {
      title: "MLG2 Finance Advantages",
      items: [
        { title: "Rural Specialization", description: "Deep knowledge of agribusiness", icon: "🌾" },
        { title: "Personalized Service", description: "Tailor-made solutions for each client", icon: "👥" },
        { title: "Agility", description: "Fast and streamlined processes", icon: "⚡" },
        { title: "Competitive Rates", description: "Best market conditions", icon: "💎" },
      ],
    },
    process: {
      title: "How It Works",
      steps: [
        { title: "Initial Consultation", description: "Analysis of your needs", icon: "1" },
        { title: "Personalized Proposal", description: "Development of the best solution", icon: "2" },
        { title: "Fast Approval", description: "Analysis and approval within 48h", icon: "3" },
        { title: "Release", description: "Resources made available", icon: "4" },
      ],
    },
    cta: {
      title: "Need Financing?",
      description: "Contact us and discover the best financial solutions for your agribusiness.",
      button: "Request Proposal",
    },
  },
}

export default function Finance() {
  const [language, setLanguage] = useState("pt")
  const [selectedService, setSelectedService] = useState("credit")
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
                <div className={styles.serviceIcon}>{service.icon}</div>
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

      {/* Advantages Section */}
      <section className={styles.advantagesSection}>
        <div className={styles.sectionContainer}>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className={styles.advantagesTitle}
          >
            {t.advantages.title}
          </motion.h2>

          <div className={styles.advantagesGrid}>
            {t.advantages.items.map((advantage, index) => (
              <motion.div
                key={advantage.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={styles.advantageCard}
              >
                <div className={styles.advantageIcon}>{advantage.icon}</div>
                <h3 className={styles.advantageTitle}>{advantage.title}</h3>
                <p className={styles.advantageDescription}>{advantage.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className={styles.processSection}>
        <div className={styles.sectionContainer}>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className={styles.processTitle}
          >
            {t.process.title}
          </motion.h2>

          <div className={styles.processSteps}>
            {t.process.steps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className={styles.processStep}
              >
                <div className={styles.stepNumber}>{step.icon}</div>
                <div className={styles.stepContent}>
                  <h3 className={styles.stepTitle}>{step.title}</h3>
                  <p className={styles.stepDescription}>{step.description}</p>
                </div>
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
