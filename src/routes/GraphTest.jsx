import '../styles/graphTest.css'
import { useTranslation } from 'react-i18next'

export default function GraphTest() {
    const { t } = useTranslation();

    return (
        <>
            <h1>{t('titleTest')}</h1>
            <div id="prueba">
                
            </div>
        </>
    )
}