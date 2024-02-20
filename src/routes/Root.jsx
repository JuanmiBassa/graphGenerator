import { Link, Outlet } from "react-router-dom";
import '../styles/root.css'
import { PiGraphFill } from "react-icons/pi";
import { IoIosNotifications } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import { IoMdSettings } from "react-icons/io";


export default function Root() {
    return (
        <>
            <header>
                <div>
                    <Link to="/" id="logo"><PiGraphFill /></Link>
                </div>
                <nav>
                    <ul>
                        <li>
                            <MdEmail className="email_icon"/>
                        </li>
                        <li>
                            <IoIosNotifications className="noti_icon"/>
                        </li>
                        <li>
                            <IoMdSettings className="settings_icon"/>
                        </li>
                        <li>
                            <Link to="/graph-docs" className="neum_button">How to use?</Link>
                        </li>
                        <li>
                            <Link to="/graph-test">test it</Link>
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