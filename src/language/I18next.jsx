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

          // APP
          
          
          // TEST
          titleTest: 'Test the program',
        },
      },
      es: {
        translation: {
          // ROOT
          navTest: 'Probar Demo',

          // APP
          

          // TEST
          titleTest: 'Testea el programa',
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
