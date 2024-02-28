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

          easyTitle: 'Easy To Use',
          easyText: 'This system has been designed with an intuitive interface for ease of use.',
          customizeTitle: 'Customizable',
          customizeText: 'This graphics system allows for complete customization of colors.',
          freeTitle: 'Free',
          freeText: 'This service is available free of charge to all users.',
          dependenciesTitle: 'No Dependencies',
          dependenciesText: 'This page does not require external dependencies for its correct functioning.',

          title3App: 'How To Use',

          step1Title: '1. Download JS',
          step1Text: 'To start using our application, download the necessary JavaScript files. These files contain the core functionality required for generating graphics dynamically.',
          step2Title: '2. Import Your Project',
          step2Text: 'Link the files to your HTML. This step is crucial for integrating the functionality into your project seamlessly.',
          step3Title: '3. Customize the default object',
          step3Text: 'Adjust the code to your needs. Customize the default object to match your project requirements perfectly.',
          step4Title: '4. Call global function',
          step4Text: 'Utilize globally available functions. Call the functions anywhere in your project for enhanced functionality.',

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

          easyTitle: 'Fàcil De Usar',
          easyText: 'Este sistema ha sido diseñado con una interfaz intuitiva para facilitar su uso.',
          customizeTitle: 'Personalizable',
          customizeText: 'Este sistema gráfico permite una personalización completa de los colores.',
          freeTitle: 'Gratis',
          freeText: 'Este servicio está disponible de forma gratuita para todos los usuarios.',
          dependenciesTitle: 'Sin dependencias',
          dependenciesText: 'Esta página no requiere de dependencias externas para su correcto funcionamiento.',

          title3App: 'Como Se Usa',

          step1Title: '1. Descargar JS',
          step1Text: 'Para comenzar a utilizar nuestra aplicación, descargue los archivos JavaScript necesarios. Estos archivos contienen la funcionalidad principal necesaria para generar gráficos dinámicamente.',
          step2Title: '2. Importar tu proyecto',
          step2Text: 'Vincula los archivos a tu HTML. Este paso es crucial para integrar la funcionalidad en su proyecto sin problemas.',
          step3Title: '3. Personaliza el objeto predeterminado.',
          step3Text: 'Ajusta el código a tus necesidades. Personalice el objeto predeterminado para que coincida perfectamente con los requisitos de su proyecto.',
          step4Title: '4. Llamar a la función global',
          step4Text: 'Utiliza funciones disponibles globalmente. Llama a las funciones en cualquier parte de su proyecto para obtener una funcionalidad mejorada.',

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
