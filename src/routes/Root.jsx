import { useState } from 'react';
import { Link, Outlet } from "react-router-dom"
import { PiGraphFill } from "react-icons/pi"
import { IoIosNotifications } from "react-icons/io"
import { MdEmail } from "react-icons/md"
import { IoMdSettings } from "react-icons/io"
import i18n from '../language/I18next.jsx';
import { useTranslation } from 'react-i18next'

export default function Root() {
    const { t } = useTranslation();

    const changeLanguage = (language) => {
        i18n.changeLanguage(language);
    };

    const [isSettingsOpen, setIsSettingsOpen] = useState(false);
    const toggleSettings = () => setIsSettingsOpen(!isSettingsOpen);

    return (
        <>
            <header>
                <div>
                    <Link to="/" id="logo"><PiGraphFill /></Link>
                </div>
                <nav>
                    <ul>
                        <li className='nav-list'>
                            <Link to="/demo">{t('navTest')}</Link>
                        </li>
                        <li className='nav-list'>
                            <MdEmail className="email-icon link-icon" />
                        </li>
                        <li className='nav-list'>
                            <IoIosNotifications className="noti-icon link-icon" />
                        </li>
                        <li className='nav-list'>
                            <IoMdSettings className="settings-icon link-icon" onClick={toggleSettings} />
                            <div className={`settings-dropdown ${isSettingsOpen ? 'active' : ''}`}>
                                <label htmlFor="languages">{t('modalLenguage')}</label>
                                <select name="languages" id="languages" onChange={(event) => changeLanguage(event.target.value)}>
                                    <option value="en">{t('en')}</option>
                                    <option value="es">{t('es')}</option>
                                </select>
                            </div>
                        </li>
                    </ul>
                </nav>
            </header>

            <main>
                <Outlet />
            </main>
        </>
    )
}