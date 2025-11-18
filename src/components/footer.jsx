import React from "react"

import { FaFacebookF, FaTwitter, FaYoutube, FaTelegramPlane, FaInstagram, FaLinkedinIn } from "react-icons/fa"
import { FiPhone, FiMail } from "react-icons/fi"
import { HiArrowNarrowRight } from "react-icons/hi"
import logoMaxvel from "../assets/logoMaxvel.png"
// import logo from "../assets/img/home/logoFooter.png"


export default function Footer() {
    const styles = {
        footer: {
            background: " #161616",
            color: "#fff",
            // padding: "10px 24px 24px"
        },
        container: {
            maxWidth: "1140px",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "repeat(5, 1fr)",
            gap: "40px"

        },
        about: {
            fontSize: "12px",
            color: "#9A9CA5",
            marginTop: "16px",
            lineHeight: 1.6
        },
        social: {
            display: "flex",
            gap: "16px",
            marginTop: "16px",
            fontSize: "20px"
        },
        socialLink: {
            color: "#9A9CA5",
            transition: "0.2s"
        },
        title: {
            marginTop: "70px",
            fontWeight: 600,
            fontSize: "16px",
            marginBottom: "16px"

        },
        linkList: {
            listStyle: "none",
            padding: 0,
            margin: 0,
            display: "flex",
            flexDirection: "column",
            gap: "8px"
        },
        link: {
            textDecoration: "none",
            color: "#9A9CA5",
            fontSize: "16px",
        },
        contactRow: {
            display: "flex",
            alignItems: "center",
            gap: "8px",
            marginBottom: "8px",
            color: "#9A9CA5",
            fontSize: "16px",

        },
        newsletter: {
            display: "flex",
            marginTop: "8px",
            borderRadius: "4px",
            overflow: "hidden",
            border: "1px solid #2C2F3A",
        },
        input: {
            padding: "10px 14px",
            border: "none",
            flex: 1,
            fontSize: "14px",
            background: "#2C2F3A",
            color: "#fff"
        },
        button: {
            padding: "10px 16px",
            background: "#2C2F3A",
            border: "none",
            color: "#fff",
            fontSize: "16px",
            cursor: "pointer"
        },
        newsletterNote: {
            fontSize: "10px",
            color: "#fff",
            marginTop: "12px",
        },
        bottomBar: {
            marginTop: "40px",
            borderTop: "1px solid #2C2F3A",
            paddingTop: "16px",
            maxWidth: "1140px",
            marginRight: "auto",
            marginLeft: "auto",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            fontSize: "12px",
            color: "#9A9CA5",
        },
        bottomLink: {
            color: "#9A9CA5",
            textDecoration: "none",
            fontSize: "14px",
        },
        logo: {
            width: 110,            // змінюй на потрібний розмір
            height: "auto",
            display: "block",
            objectFit: "contain",
            background: "transparent", // явно відключаємо фон
            padding: 0,
            margin: 0,
            border: "none",
            boxShadow: "none",
        }
    }
    return (
        <footer style={styles.footer}>
            <div style={styles.container}>
                <div>
                    <img src={logoMaxvel} alt="Maxvel logo" style={styles.logo} />
                    <p style={styles.about}>
                        Createx Online School is a leader in online studying. We have lots of courses and programs from the main market experts. We provide relevant approaches to online learning, internships and employment in the largest companies in the country.
                    </p>
                    <div style={styles.social}>
                        {[FaFacebookF, FaTwitter, FaYoutube, FaTelegramPlane, FaInstagram, FaLinkedinIn].map((Icon, i) => (
                            <a
                                key={i} href="#"
                                style={styles.socialLink}
                                onMouseEnter={(e) => (e.currentTarget.style.color = "#fff")}
                                onMouseLeave={(e) => (e.currentTarget.style.color = "#9A9CA5")}>
                                <Icon />
                            </a>
                        ))}
                    </div>
                </div>
                <div>
                    <h4 style={styles.title}>SITE MAP</h4>
                    <ul style={styles.linkList}>
                        <li><a href="/" style={styles.link}>Main</a></li>
                        <li><a href="/laptop-catalog" style={styles.link}>Laptop</a></li>
                        <li><a href="/top-news" style={styles.link}>News</a></li>
                        <li><a href="/weather" style={styles.link}>Weather</a></li>
                    </ul>
                </div>
                <div>
                    <h4 style={styles.title}>CONTACT US</h4>
                    <div style={styles.contactRow}>
                        <FiPhone /> (405)555-0128

                    </div>
                    <div style={styles.contactRow}>
                        <FiMail /> hello@gmail.com

                    </div>
                </div>
                <div>
                    <h4 style={styles.title}>SIGN UP TO OUR NEWSLETTER</h4>
                    <div style={styles.newsletter}>
                        <input type="email" placeholder="Email address" style={styles.input} />
                        <button style={styles.button}><HiArrowNarrowRight /> </button>
                    </div>
                    <p style={styles.newsletterNote}>
                        *Subscribe to our newsletter to receive communications and early updates from Createx SEO Agency.
                    </p>
                </div>


            </div>
            <div style={styles.bottomBar}>
                <p>© All rights reserved.Made with by Createx Studio </p>
                <a href="#" style={styles.bottomLink}>GO TO TOP</a>

            </div>
        </footer>
    )
}
