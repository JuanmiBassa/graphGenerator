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
          
          
          // DEMO
          titleTest: 'Test the program',

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
          

          // DEMO
          titleTest: 'Testea el programa',

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
