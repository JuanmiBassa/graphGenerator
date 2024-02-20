import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: {
          // ROOT
          navInfo: 'How to use?',
          navTest: 'Test it',

          // APP
          greeting: 'Hello, world!',

          // TEST
          titleTest: 'Test the program',
        },
      },
      es: {
        translation: {
          // ROOT
          navInfo: '¿Cómo se usa?',
          navTest: 'Pruébalo',

          // APP
          greeting: '¡Hola, mundo!',

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
