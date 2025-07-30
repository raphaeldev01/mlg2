"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import Header from "../components/Header"
import Footer from "../components/Footer"
import styles from "../styles/About.module.css"
import Breadcrumb from "../components/Breadcrumb"

const translations = {
  pt: {
    title: "Sobre a MLG2",
    subtitle: "Excelência em Agronegócio Internacional",
    intro:
      "Com mais de duas décadas de experiência, a MLG2 revoluciona o agronegócio através de tecnologia avançada, parcerias estratégicas e soluções sustentáveis que conectam o campo ao mundo.",
    history: {
      title: "Nossa História",
      content:
        "Fundada em 1999 por Sandro Ferreira, a MLG2 nasceu da visão de transformar o agronegócio brasileiro em uma potência global. Começamos como uma pequena empresa de consultoria agrícola e hoje somos líderes em soluções integradas para o setor.",
    },
    mission: {
      title: "Missão",
      content:
        "Conectar produtores rurais aos mercados globais através de soluções inovadoras e sustentáveis, promovendo o desenvolvimento do agronegócio mundial.",
    },
    vision: {
      title: "Visão",
      content:
        "Ser a empresa líder mundial em soluções integradas para o agronegócio, reconhecida pela excelência, inovação e compromisso com a sustentabilidade.",
    },
    values: {
      title: "Nossos Valores",
      items: {
        innovation: {
          title: "Inovação",
          description: "Buscamos constantemente novas tecnologias e métodos para otimizar a produção agrícola",
        },
        sustainability: {
          title: "Sustentabilidade",
          description: "Comprometidos com práticas responsáveis que preservam o meio ambiente",
        },
        excellence: {
          title: "Excelência",
          description: "Padrão de qualidade superior em todos os nossos produtos e serviços",
        },
        partnership: {
          title: "Parceria",
          description: "Construímos relacionamentos duradouros baseados na confiança mútua",
        },
      },
    },
    team: {
      title: "Nossa Equipe",
      description:
        "Contamos com mais de 500 profissionais especializados em diferentes áreas do agronegócio, distribuídos em escritórios ao redor do mundo.",
    },
  },
  en: {
    title: "About MLG2",
    subtitle: "Excellence in International Agribusiness",
    intro:
      "With over two decades of experience, MLG2 revolutionizes agribusiness through advanced technology, strategic partnerships and sustainable solutions that connect the field to the world.",
    history: {
      title: "Our History",
      content:
        "Founded in 1999 by Sandro Ferreira, MLG2 was born from the vision of transforming Brazilian agribusiness into a global powerhouse. We started as a small agricultural consulting company and today we are leaders in integrated solutions for the sector.",
    },
    mission: {
      title: "Mission",
      content:
        "Connect rural producers to global markets through innovative and sustainable solutions, promoting the development of world agribusiness.",
    },
    vision: {
      title: "Vision",
      content:
        "To be the world's leading company in integrated agribusiness solutions, recognized for excellence, innovation and commitment to sustainability.",
    },
    values: {
      title: "Our Values",
      items: {
        innovation: {
          title: "Innovation",
          description: "We constantly seek new technologies and methods to optimize agricultural production",
        },
        sustainability: {
          title: "Sustainability",
          description: "Committed to responsible practices that preserve the environment",
        },
        excellence: {
          title: "Excellence",
          description: "Superior quality standard in all our products and services",
        },
        partnership: {
          title: "Partnership",
          description: "We build lasting relationships based on mutual trust",
        },
      },
    },
    team: {
      title: "Our Team",
      description:
        "We have over 500 professionals specialized in different areas of agribusiness, distributed in offices around the world.",
    },
  },
}

export default function About() {
  const [language, setLanguage] = useState("pt")
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

      {/* History Section */}
      <section className={styles.section}>
        <div className={styles.sectionContainer}>
          <div className={styles.contentGrid}>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className={styles.textContent}
            >
              <h2 className={styles.sectionTitle}>{t.history.title}</h2>
              <p className={styles.sectionText}>{t.history.content}</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className={styles.imageContent}
            >
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="História da MLG2"
                width={600}
                height={400}
                className={styles.sectionImage}
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className={styles.missionVision}>
        <div className={styles.sectionContainer}>
          <div className={styles.mvGrid}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className={styles.mvCard}
            >
              <div className={styles.mvIcon}>🎯</div>
              <h3 className={styles.mvTitle}>{t.mission.title}</h3>
              <p className={styles.mvText}>{t.mission.content}</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className={styles.mvCard}
            >
              <div className={styles.mvIcon}>🔮</div>
              <h3 className={styles.mvTitle}>{t.vision.title}</h3>
              <p className={styles.mvText}>{t.vision.content}</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className={styles.values}>
        <div className={styles.sectionContainer}>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className={styles.valuesTitle}
          >
            {t.values.title}
          </motion.h2>

          <div className={styles.valuesGrid}>
            {Object.entries(t.values.items).map(([key, value], index) => (
              <motion.div
                key={key}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={styles.valueCard}
              >
                <div className={styles.valueIcon}>
                  {key === "innovation" && "🚀"}
                  {key === "sustainability" && "🌱"}
                  {key === "excellence" && "⭐"}
                  {key === "partnership" && "🤝"}
                </div>
                <h3 className={styles.valueTitle}>{value.title}</h3>
                <p className={styles.valueDescription}>{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className={styles.team}>
        <div className={styles.sectionContainer}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className={styles.teamContent}
          >
            <h2 className={styles.teamTitle}>{t.team.title}</h2>
            <p className={styles.teamDescription}>{t.team.description}</p>

            <div className={styles.teamStats}>
              <div className={styles.statItem}>
                <div className={styles.statNumber}>500+</div>
                <div className={styles.statLabel}>Profissionais</div>
              </div>
              <div className={styles.statItem}>
                <div className={styles.statNumber}>15</div>
                <div className={styles.statLabel}>Escritórios</div>
              </div>
              <div className={styles.statItem}>
                <div className={styles.statNumber}>50+</div>
                <div className={styles.statLabel}>Países</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer language={language} />
    </div>
  )
}
