import { useTranslation } from 'react-i18next'

function LanguageSelector() {
  const { i18n } = useTranslation();

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };

  return (
    <>
    <label htmlFor="languages">Select a language</label>
      <select name="languages" id="languages" onChange={(event) => changeLanguage(event.target.value)}>
        <option value="en">EN</option>
        <option value="es">ES</option>
      </select>
    </>
  );
}

export default LanguageSelector;
