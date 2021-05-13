import React from "react";
import Logo from "./logo";

const Header = () => (
    <header>
    <div className="f1">
    <button type="button">
    <img src="/images/misc/user.png" alt="User Settings" />
    </button>
    </div>

    <div className="f1">
        <button type='button'>
            <img src="/images/misc/messages.png" />
        </button>
    </div>
);

export default Header;