import { useState } from 'react';
import { Link, Outlet } from "react-router-dom"
import { PiGraphFill } from "react-icons/pi"
import { IoIosNotifications } from "react-icons/io"
import { MdEmail } from "react-icons/md"
import { IoMdSettings } from "react-icons/io"

import { useTranslation } from 'react-i18next'
import LanguageSelector from "../language/LanguageSelector.jsx"
import i18n from '../language/I18next.jsx'

export default function Root() {
    const { t } = useTranslation();

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
                            <Link to="/graph-test">{t('navTest')}</Link>
                        </li>
                        <li className='nav-list'>
                            <MdEmail className="email-icon link-icon" />
                        </li>
                        <li className='nav-list'>
                            <IoIosNotifications className="noti-icon link-icon" />
                        </li>
                        <li className='nav-list'>
                            <IoMdSettings className="settings-icon link-icon" onClick={toggleSettings} />
                            <div className={`neum-container settings-dropdown ${isSettingsOpen ? 'active' : ''}`}>
                                <LanguageSelector i18n={i18n} />
                                
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