"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Header from "../components/Header"
import Footer from "../components/Footer"
import styles from "../styles/Contact.module.css"
import Breadcrumb from "../components/Breadcrumb"

const translations = {
  pt: {
    title: "Entre em Contato",
    subtitle: "Vamos Crescer Juntos",
    intro:
      "Estamos prontos para ajudar sua empresa a alcançar novos patamares no agronegócio. Entre em contato conosco e descubra como podemos colaborar.",
    form: {
      title: "Envie sua Mensagem",
      name: "Nome Completo",
      email: "E-mail",
      company: "Empresa",
      phone: "Telefone",
      subject: "Assunto",
      message: "Mensagem",
      send: "Enviar Mensagem",
      success: "Mensagem enviada com sucesso!",
      subjects: {
        consulting: "Consultoria Agrícola",
        trading: "Trading Internacional",
        logistics: "Logística",
        technology: "Tecnologia",
        financing: "Financiamento",
        other: "Outros",
      },
    },
    contact: {
      title: "Informações de Contato",
      headquarters: "Sede Principal",
      phone: "Telefone",
      email: "E-mail",
      address: "Endereço",
      hours: "Horário de Funcionamento",
      hoursText: "Segunda a Sexta: 8h às 18h",
    },
    offices: {
      title: "Nossos Escritórios",
      brazil: {
        name: "Brasil - São Paulo",
        address: "Av. Paulista, 1000 - São Paulo, SP",
        phone: "+55 (11) 3000-0000",
      },
      usa: {
        name: "EUA - Miami",
        address: "1200 Brickell Ave - Miami, FL",
        phone: "+1 (305) 000-0000",
      },
      argentina: {
        name: "Argentina - Buenos Aires",
        address: "Av. Corrientes, 500 - Buenos Aires",
        phone: "+54 (11) 0000-0000",
      },
    },
  },
  en: {
    title: "Get in Touch",
    subtitle: "Let's Grow Together",
    intro:
      "We are ready to help your company reach new heights in agribusiness. Contact us and discover how we can collaborate.",
    form: {
      title: "Send Your Message",
      name: "Full Name",
      email: "Email",
      company: "Company",
      phone: "Phone",
      subject: "Subject",
      message: "Message",
      send: "Send Message",
      success: "Message sent successfully!",
      subjects: {
        consulting: "Agricultural Consulting",
        trading: "International Trading",
        logistics: "Logistics",
        technology: "Technology",
        financing: "Financing",
        other: "Others",
      },
    },
    contact: {
      title: "Contact Information",
      headquarters: "Main Headquarters",
      phone: "Phone",
      email: "Email",
      address: "Address",
      hours: "Business Hours",
      hoursText: "Monday to Friday: 8am to 6pm",
    },
    offices: {
      title: "Our Offices",
      brazil: {
        name: "Brazil - São Paulo",
        address: "1200 Brickell Ave - Miami, FL",
        phone: "+1 (305) 000-0000",
      },
      usa: {
        name: "USA - Miami",
        address: "1200 Brickell Ave - Miami, FL",
        phone: "+1 (305) 000-0000",
      },
      argentina: {
        name: "Argentina - Buenos Aires",
        address: "Av. Corrientes, 500 - Buenos Aires",
        phone: "+54 (11) 0000-0000",
      },
    },
  },
}

export default function Contact() {
  const [language, setLanguage] = useState("pt")
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    subject: "",
    message: "",
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const t = translations[language]

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitted(true)
      setFormData({
        name: "",
        email: "",
        company: "",
        phone: "",
        subject: "",
        message: "",
      })
    }, 1000)
  }

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

      {/* Contact Form & Info */}
      <section className={styles.contactSection}>
        <div className={styles.sectionContainer}>
          <div className={styles.contactGrid}>
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className={styles.formContainer}
            >
              <h2 className={styles.formTitle}>{t.form.title}</h2>

              {isSubmitted ? (
                <div className={styles.successMessage}>
                  <div className={styles.successIcon}>✅</div>
                  <p>{t.form.success}</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className={styles.form}>
                  <div className={styles.formRow}>
                    <div className={styles.formGroup}>
                      <input
                        type="text"
                        name="name"
                        placeholder={t.form.name}
                        value={formData.name}
                        onChange={handleInputChange}
                        className={styles.formInput}
                        required
                      />
                    </div>
                    <div className={styles.formGroup}>
                      <input
                        type="email"
                        name="email"
                        placeholder={t.form.email}
                        value={formData.email}
                        onChange={handleInputChange}
                        className={styles.formInput}
                        required
                      />
                    </div>
                  </div>

                  <div className={styles.formRow}>
                    <div className={styles.formGroup}>
                      <input
                        type="text"
                        name="company"
                        placeholder={t.form.company}
                        value={formData.company}
                        onChange={handleInputChange}
                        className={styles.formInput}
                      />
                    </div>
                    <div className={styles.formGroup}>
                      <input
                        type="tel"
                        name="phone"
                        placeholder={t.form.phone}
                        value={formData.phone}
                        onChange={handleInputChange}
                        className={styles.formInput}
                      />
                    </div>
                  </div>

                  <div className={styles.formGroup}>
                    <select
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      className={styles.formSelect}
                      required
                    >
                      <option value="">{t.form.subject}</option>
                      {Object.entries(t.form.subjects).map(([key, value]) => (
                        <option key={key} value={key}>
                          {value}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className={styles.formGroup}>
                    <textarea
                      name="message"
                      placeholder={t.form.message}
                      value={formData.message}
                      onChange={handleInputChange}
                      className={styles.formTextarea}
                      rows={5}
                      required
                    />
                  </div>

                  <button type="submit" className={styles.submitButton}>
                    {t.form.send}
                  </button>
                </form>
              )}
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className={styles.contactInfo}
            >
              <h2 className={styles.infoTitle}>{t.contact.title}</h2>

              <div className={styles.infoCard}>
                <h3 className={styles.infoSubtitle}>{t.contact.headquarters}</h3>

                <div className={styles.infoItem}>
                  <div className={styles.infoIcon}>📞</div>
                  <div>
                    <div className={styles.infoLabel}>{t.contact.phone}</div>
                    <div className={styles.infoValue}>+55 (11) 3000-0000</div>
                  </div>
                </div>

                <div className={styles.infoItem}>
                  <div className={styles.infoIcon}>✉️</div>
                  <div>
                    <div className={styles.infoLabel}>{t.contact.email}</div>
                    <div className={styles.infoValue}>contato@mlg2.com</div>
                  </div>
                </div>

                <div className={styles.infoItem}>
                  <div className={styles.infoIcon}>📍</div>
                  <div>
                    <div className={styles.infoLabel}>{t.contact.address}</div>
                    <div className={styles.infoValue}>
                      Av. Paulista, 1000
                      <br />
                      São Paulo, SP - Brasil
                    </div>
                  </div>
                </div>

                <div className={styles.infoItem}>
                  <div className={styles.infoIcon}>🕒</div>
                  <div>
                    <div className={styles.infoLabel}>{t.contact.hours}</div>
                    <div className={styles.infoValue}>{t.contact.hoursText}</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Offices Section */}
      <section className={styles.officesSection}>
        <div className={styles.sectionContainer}>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className={styles.officesTitle}
          >
            {t.offices.title}
          </motion.h2>

          <div className={styles.officesGrid}>
            {Object.entries(t.offices)
              .filter(([key]) => key !== "title")
              .map(([key, office], index) => (
                <motion.div
                  key={key}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={styles.officeCard}
                >
                  <div className={styles.officeFlag}>
                    {key === "brazil" && "🇧🇷"}
                    {key === "usa" && "🇺🇸"}
                    {key === "argentina" && "🇦🇷"}
                  </div>
                  <h3 className={styles.officeName}>{office.name}</h3>
                  <p className={styles.officeAddress}>{office.address}</p>
                  <p className={styles.officePhone}>{office.phone}</p>
                </motion.div>
              ))}
          </div>
        </div>
      </section>

      <Footer language={language} />
    </div>
  )
}
