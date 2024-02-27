import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: {
          // ROOT
          navTest: 'Try Demo',
          modalLenguage: 'Change language',
          // ROOT - LANGUAGES
          en: 'English',
          es: 'Spanish',

          // APP
          titleApp: 'GRAPH GENERATOR',

          subtitleApp: 'Create your graph',
          textFirstSection: 'Immerse yourself in the fascinating world of charting and unlock the potential of your data by transforming it into dynamic and meaningful visualizations. Explore our tools and discover how you can turn complex information into impactful visual narratives that will help you make informed decisions and communicate your ideas effectively.',
          textButton1: 'Prove it',
          textButton2: 'How To Use?',

          title2App: 'ADVANTAGES',

          // DEMO
          titleDemo: 'Test the program',

          graphWidth: 'Max Width',
          graphHeight: 'Max Height',
          graphAddValue: 'Add value',
          graphDeleteValue: 'Remove value',
          graphScaleMarks: 'Scale marks',
          graphStyle: 'Style',
          graphStyle1: 'Circles',
          graphStyle2: 'None',
        },
      },
      es: {
        translation: {
          // ROOT
          navTest: 'Probar Demo',
          modalLenguage: 'Cambiar idioma',
          // ROOT - LANGUAGES
          en: 'Inglés',
          es: 'Español',

          // APP
          titleApp: 'GENERADOR DE GRAFICAS',

          subtitleApp: 'Crea tu grafica',
          textFirstSection: 'Sumérgete en el fascinante mundo de la creación de gráficas y desbloquea el potencial de tus datos al transformarlos en visualizaciones dinámicas y significativas. Explora nuestras herramientas y descubre cómo puedes convertir información compleja en narrativas visuales impactantes que te ayudarán a tomar decisiones informadas y a comunicar tus ideas de manera efectiva.',
          textButton1: 'Pruebalo',
          textButton2: 'Como Se Usa?',

          title2App: 'VENTAJAS',

          // DEMO
          titleDemo: 'Testea el programa',

          graphWidth: 'Anchura máxima',
          graphHeight: 'Altura máxima',
          graphAddValue: 'Agregar valor',
          graphDeleteValue: 'Eliminar valor',
          graphScaleMarks: 'Marcas de escala',
          graphStyle: 'Estilo',
          graphStyle1: 'Circulos',
          graphStyle2: 'Ninguno',
        },
      },
    },
    lng: 'en',
    fallbackLng: 'es',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
