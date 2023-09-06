import {
  CEO,
  SUBCEO,
  SUBCEO_DANTE,
  facebook,
  instagram,
  linkedin,
  twitter,
  send,
  shield,
  star,
} from "../assets";

export const navLinks = [
  {
    id: "home",
    title: "Inicio",
  },
  {
    id: "features",
    title: "Características",
  },
  {
    id: "product",
    title: "Precios",
  },
  {
    id: "clients",
    title: "Referencias",
  },
  {
    id: "aboutMe",
    title: "Acerca de",
  },
];

export const features = [
  {
    id: "feature-1",
    icon: star,
    title: "Conocimientos avanzados",
    content:
      "Aprenderás desde conceptos básicos de programación como crear un sistema web, hasta conceptos complejos sobre como crear un servidor web seguro y desplegarlo en internet",
  },
  {
    id: "feature-2",
    icon: shield,
    title: "Aprendizaje asegurado",
    content:
      "Nos esforzamos para crear a detalle nuestros cursos para que puedas tener una mejor experiencia de enseñanza",
  },
  {
    id: "feature-3",
    icon: send,
    title: "Recibe asesorías personalizadas",
    content:
      "¿Problemas con tu proyecto? ¡Nosotros te ayudamos!. Al ser miembro de Salfox contarás con asesoría personalizada para tus proyectos de programación en general",
  },
];

export const feedback = [
  {
    id: "feedback-1",
    content:
      "Pienso que este proyecto ayudará mucho a las personas que desean aprender a programar. Ciertamente, entiendo su incertidumbre al encender la PC y no saber como comenzar, yo también pasé por eso hace no mas de 5 años... es por eso que estoy aquí usando mis manos para desarrollar esta plataforma y mis conocimientos para transmitirlos hacia otros como yo.",
    name: "Hiram Gabriel",
    title: "Backend Developer & CEO de Salfox",
    img: CEO,
  },
  {
    id: "feedback-2",
    content:
      "Siento que con esto lograremos ayudar a gente potencial a iniciar su carrera como programadores. Contamos con un precio mensual bastante ecónomico precisamente para que sea accesible para todos.",
    name: "Emmanuel Reyes",
    title: "C# Developer & Cofund de Salfox",
    img: SUBCEO,
  },
  {
    id: "feedback-3",
    content:
      "Cuando el CEO (Hiram) me dijo que quería hacer esto, me pareció una locura... pero bueno, él siempre tiene ideas locas y yo siempre lo apoyo asi que ya no me sorprenderá si mañana quiere crear una app con propósito de hacerse nacionalmente famosa!.",
    name: "Dante",
    title: "Frontend Developer & Cofund de Salfox",
    img: SUBCEO_DANTE,
  },
];

export const stats = [
  {
    id: "stats-1",
    title: "Python",
    value: "Aprenderás",
  },
  {
    id: "stats-2",
    title: "Javascript",
    value: "Aprenderás",
  },
  {
    id: "stats-3",
    title: "C#",
    value: "Aprenderás",
  },
];

export const footerLinks = [
  {
    title: "Principiante",
    links: [
      {
        name: "Introducción a la programación",
      },
      {
        name: "HTML5",
      },
      {
        name: "CSS3",
      },

      {
        name: "Sass",
      },
      {
        name: "JavaScript Vanilla",
      },
      {
        name: "Librerías JS",
      },
    ],
  },
  {
    title: "Ruta Backend",
    links: [
      {
        name: "NodeJS",
      },
      {
        name: "ExpressJS",
      },
      {
        name: "MongoDB",
      },
      {
        name: "Python",
      },
      {
        name: "MySQL",
      },
      {
        name: "Flask",
      },
      {
        name: "C#",
      },
    ],
  },
  {
    title: "Próximamente",
    links: [
      {
        name: "ReddisDB",
      },
      {
        name: "Taller Linux",
      },
      {
        name: "NextJS",
      },
      {
        name: "SvelteJS",
      },
    ],
  },
];

export const socialMedia = [
  {
    id: "social-media-1",
    icon: instagram,
    link: "https://www.instagram.com/",
  },
  {
    id: "social-media-2",
    icon: facebook,
    link: "https://www.facebook.com/",
  },
  {
    id: "social-media-3",
    icon: twitter,
    link: "https://www.twitter.com/",
  },
  {
    id: "social-media-4",
    icon: linkedin,
    link: "https://www.linkedin.com/",
  },
];
