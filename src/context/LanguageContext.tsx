"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

export type Language = "en" | "es";

export interface Translations {
  nav: {
    home: string;
    artists: string;
    services: string;
    partners: string;
    contact: string;
  };
  footer: {
    description: string;
    contactLabel: string;
    rights: string;
  };
  home: {
    title: string;
    subtitle: string;
    applyNow: string;
    viewRoster: string;
  };
  artists: {
    title: string;
    subtitle: string;
    verifiedBadge: string;
    spotifyProfile: string;
  };
  services: {
    title: string;
    subtitle: string;
    applyCta: string;
  };
  partners: {
    title: string;
    subtitle: string;
  };
  contact: {
    title: string;
    subtitle: string;
    directEmailLabel: string;
    copyEmail: string;
    copied: string;
    form: {
      nameLabel: string;
      namePlaceholder: string;
      emailLabel: string;
      emailPlaceholder: string;
      spotifyLabel: string;
      spotifyPlaceholder: string;
      messageLabel: string;
      messagePlaceholder: string;
      submitBtn: string;
      sendingBtn: string;
      successTitle: string;
      successMessage: string;
      sendAnother: string;
    };
  };
}

const translations: Record<Language, Translations> = {
  en: {
    nav: {
      home: "Home",
      artists: "Artists",
      services: "Services",
      partners: "Partners",
      contact: "Contact",
    },
    footer: {
      description: "Music Distribution",
      contactLabel: "Contact",
      rights: "© 2026 KAVEN Distribution. All rights reserved.",
    },
    home: {
      title: "Connecting independent artists with wider audiences.",
      subtitle:
        "Digital distribution and release strategy for independent creators.",
      applyNow: "APPLY NOW",
      viewRoster: "VIEW ROSTER",
    },
    artists: {
      title: "Our Roster",
      subtitle:
        "Independent artists distributed across major global streaming platforms.",
      verifiedBadge: "Spotify Verified Artist",
      spotifyProfile: "Spotify Profile",
    },
    services: {
      title: "Our Services",
      subtitle:
        "Simple, reliable distribution and management services tailored for independent creators.",
      applyCta: "APPLY FOR DISTRIBUTION",
    },
    partners: {
      title: "Partners",
      subtitle:
        "Our distribution infrastructure and global streaming delivery network.",
    },
    contact: {
      title: "Contact",
      subtitle:
        "Get in touch for distribution inquiries, roster submissions, or catalog management.",
      directEmailLabel: "DIRECT INQUIRIES",
      copyEmail: "COPY EMAIL",
      copied: "COPIED",
      form: {
        nameLabel: "Name",
        namePlaceholder: "Your name or artist name",
        emailLabel: "Email",
        emailPlaceholder: "your@email.com",
        spotifyLabel: "Spotify Link",
        spotifyPlaceholder: "https://open.spotify.com/artist/...",
        messageLabel: "Message",
        messagePlaceholder: "Tell us about your project, upcoming releases, or catalog...",
        submitBtn: "SEND MESSAGE",
        sendingBtn: "SENDING...",
        successTitle: "Message Received",
        successMessage: "Thank you for reaching out. We will review your inquiry and get back to you soon.",
        sendAnother: "SEND ANOTHER MESSAGE",
      },
    },
  },
  es: {
    nav: {
      home: "Inicio",
      artists: "Artistas",
      services: "Servicios",
      partners: "Partners",
      contact: "Contacto",
    },
    footer: {
      description: "Distribución Musical",
      contactLabel: "Contacto",
      rights: "© 2026 KAVEN Distribution. All rights reserved.",
    },
    home: {
      title: "Llevamos artistas independientes a más audiencia.",
      subtitle:
        "Distribución digital y estrategia de lanzamientos para creadores independientes.",
      applyNow: "APLICAR AHORA",
      viewRoster: "VER ROSTER",
    },
    artists: {
      title: "Nuestro Roster",
      subtitle:
        "Artistas independientes distribuidos en las principales plataformas de streaming a nivel global.",
      verifiedBadge: "Spotify Verified Artist",
      spotifyProfile: "Perfil de Spotify",
    },
    services: {
      title: "Nuestros Servicios",
      subtitle:
        "Servicios de distribución y gestión simples, confiables y adaptados a creadores independientes.",
      applyCta: "SOLICITAR DISTRIBUCIÓN",
    },
    partners: {
      title: "Partners",
      subtitle:
        "Nuestra infraestructura de distribución y red global de entrega a plataformas de streaming.",
    },
    contact: {
      title: "Contacto",
      subtitle:
        "Contáctanos para solicitudes de distribución, envío de proyectos o gestión de catálogo.",
      directEmailLabel: "CONSULTAS DIRECTAS",
      copyEmail: "COPIAR CORREO",
      copied: "COPIADO",
      form: {
        nameLabel: "Nombre",
        namePlaceholder: "Tu nombre o nombre artístico",
        emailLabel: "Correo Electrónico",
        emailPlaceholder: "tu@correo.com",
        spotifyLabel: "Enlace de Spotify",
        spotifyPlaceholder: "https://open.spotify.com/artist/...",
        messageLabel: "Mensaje",
        messagePlaceholder: "Cuéntanos sobre tu proyecto, próximos lanzamientos o catálogo...",
        submitBtn: "ENVIAR MENSAJE",
        sendingBtn: "ENVIANDO...",
        successTitle: "Mensaje Recibido",
        successMessage: "Gracias por contactarnos. Revisaremos tu mensaje y te responderemos a la brevedad.",
        sendAnother: "ENVIAR OTRO MENSAJE",
      },
    },
  },
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: Translations;
}

const LanguageContext = createContext<LanguageContextType>({
  language: "en",
  setLanguage: () => {},
  t: translations.en,
});

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>("en");

  useEffect(() => {
    try {
      const savedLang = localStorage.getItem("kaven_lang") as Language | null;
      if (savedLang === "en" || savedLang === "es") {
        setLanguageState(savedLang);
      } else {
        const browserLang = navigator.language?.toLowerCase() || "";
        if (browserLang.startsWith("es")) {
          setLanguageState("es");
        }
      }
    } catch {
      // Ignore localStorage read errors in restricted contexts
    }
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    try {
      localStorage.setItem("kaven_lang", lang);
    } catch {
      // Ignore
    }
  };

  return (
    <LanguageContext.Provider
      value={{
        language,
        setLanguage,
        t: translations[language],
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
