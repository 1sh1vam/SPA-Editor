import React, {useState} from "react"
import {Header, Profile} from "../components"

export default function HeaderConatiner() {
    const [navOpen, setNavOpen] = useState(false)
    const [profileOpen, setProfileOpen] = useState(false)

    return(
        <Header>
            <Header.Inner>
                <Header.Item>
                    <Header.HamBurger navOpen={navOpen} setNavOpen={setNavOpen} />
                    <Header.Search />
                </Header.Item>
                    
                <Header.Item>
                    <Header.Invite />
                    <Header.Notification />
                    <Header.Profile setProfileOpen={setProfileOpen}>
                        {profileOpen && <Profile>
                            <Profile.List>
                                <Profile.Element>Dark Mode</Profile.Element>
                                <Profile.Element>What's new</Profile.Element>
                                <Profile.Element>Help</Profile.Element>
                                <Profile.Element>Send Feedback</Profile.Element>
                                <Profile.Element>Log out</Profile.Element>
                            </Profile.List>
                        </Profile>}
                    </Header.Profile>
                </Header.Item>
            </Header.Inner>

            <Header.Nav navOpen={navOpen}>
                <Header.NavList>
                    <Header.NavElement>
                        <a href="#">Home</a>
                    </Header.NavElement>
                    <Header.NavElement>
                        <a href="#">Home</a>
                    </Header.NavElement>
                    <Header.NavElement>
                        <a href="#">Home</a>
                    </Header.NavElement>
                </Header.NavList>
                <Header.NavClose setNavOpen={setNavOpen} />
            </Header.Nav>
        </Header>
    )
}