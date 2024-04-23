import React from 'react';
import { Link } from 'react-router-dom';

const Conclude = () => (
    <div style={{ marginBottom: '25vh' }}>
        

        <div className='container-fluid' style={{borderBottom: 'thin solid black', marginTop: '5vh'}}>
            <h3>In Conclusion:</h3>
            <br />
            <p>
                By remaining vigilant and adopting proactive cybersecurity measures, you can significantly reduce the risk of falling victim to phishing scams and protect your
                sensitive information from falling into the wrong hands. Remember, when it comes to online safety, caution is key.
            </p>
        </div>

        <div className='row' style={{marginTop: 50}}>
            <div className='col' align='left'>
                <Link to='/'>
                    <button className='btn btn-outline-dark rounded-0'>Home</button>
                </Link>
            </div>

            <div className='col' align='right'>
                <Link to='/phishingAssessment'>
                    <button className='btn btn-outline-dark rounded-0'>Phishing Assessment</button>
                </Link>
            </div>
        </div>


    </div>
)

const ProtectSection = () => (
    <div className='container-fluid'>


    <h3>Protecting yourself from phishing scams:</h3>

    <p style={{marginTop: '3vh', marginBottom: '3vh'}}>To safeguard yourself against phishing scams, follow these best practices:</p>

    <ul>
        <li>
            <strong>Stay Informed: </strong>Educate yourself and your family members about the tactics used by scammers and the warning signs of phishing attempts.
        </li>
        <br />
        <li>
            <strong>Use Security Software: </strong>Install reputable antivirus and anti-phishing software on your devices to detect and block malicious threats.
        </li>
        <br />
        <li>
            <strong>Verify Requests: </strong>When in doubt, contact the supposed sender through official channels (such as phone numbers or websites obtained independently)
            to verify the authenticity of any requests for personal information.
        </li>
        <br />
        <li>
            <strong>Enable Two-Factor Authentication (2FA): </strong>Implementing 2FA adds an extra layer of security by requiring a second form of verification, such as a code
            sent to your phone, when logging into accounts.
        </li>
        <br />
        <li>
            <strong>Report Suspicious Activity: </strong>If you receive a suspicious email or encounter a potential phishing attempt, report it to the appropriate authorities or
            organizations involved.
        </li>
    </ul>


    </div>
)

const SpotSection = () => (
    <div className='container-fluid'>


    <h3>How to spot phishing scams:</h3>

    <p style={{marginTop: '3vh', marginBottom: '3vh'}}>While phishing scams can be sophisticated, there are several red flags to watch out for:</p>

    <ul>
        <li>
            <strong>Urgent Requests: </strong>Be cautious of emails or messages that demand immediate action or threaten negative consequences for failing to comply. Legitimate organizations
            typically do not pressure users into providing sensitive information hastily.
        </li>
        <br />
        <li>
            <strong>Unsolicited Requests for Personal Information: </strong>Be skeptical of messages requesting sensitive information such as passwords, Social Security numbers, or credit card
            details, especially if you did not initiate the interaction.
        </li>
        <br />
        <li>
            <strong>Mismatched URLs: </strong>Always scrutinize website URLs before entering any personal information. Phishing websites often have slight variations in their URLs or use domains
            that closely resemble those of legitimate sites.
        </li>
        <br />
        <li>
            <strong>Poor Grammar and Spelling: </strong>Many phishing attempts originate from non-native English speakers or automated scripts, leading to noticeable errors in grammar, spelling,
            or punctuation within the message.
        </li>
        <br />
        <li>
            <strong>Hover Over Links: </strong>Before clicking on any links in emails or messages, hover your mouse cursor over them to preview the destination URL. If the link's destination looks
            suspicious or unrelated to the purported sender, it could be a phishing attempt.
        </li>
    </ul>


    </div>
)

const HowSection = ({}) => (
    <div className='container-fluid' style={{marginTop: '10vh'}}>


        <h3>How phishing works:</h3>

        <p style={{marginTop: '3vh', marginBottom: '3vh'}}>
            Phishing typically begins with a fraudulent email, text message, or phone call that appears to be from a legitimate source, such as a
            bank, social media platform, or government agency. The message often contains urgent language or a compelling reason to act quickly,
            creating a sense of panic or fear in the recipient.
        </p>

        <p>
            Scammers may employ various methods to trick their targets, including:
        </p>

        <ul>
            <li>
                <strong>Spoofed Websites: </strong>Phishers often create fake websites that mimic the appearance of legitimate ones, such as online banking portals or
                email login pages. Unsuspecting users may inadvertently enter their credentials into these fraudulent sites, unknowingly handing them
                over to the scammer.
            </li>
            <br />
            <li>
                <strong>Email Spoofing: </strong>By spoofing email addresses, scammers make their messages appear to come from reputable sources. They may use logos,
                graphics, and language that closely resemble those of legitimate organizations to enhance their credibility.
            </li>
            <br />
            <li>
                <strong>Social Engineering Tactics: </strong>Phishers may exploit psychological manipulation techniques to deceive their targets. This could involve pretending to be a
                friend or colleague in need of assistance or posing as a trustworthy authority figure.
            </li>
        </ul>


    </div>
)

const BannerPhoto = () => (

    <div className='container-fluid' style={{padding: 0, margin: 0}}>
        <img src={require('../assets/Phishing-promo-panel.jpg')} style={{height: '100%', width: '100%'}}/>
    </div>

)

const Header = () => (

    <div className='container-fluid' style={{marginTop: '4vh', marginBottom: '4vh'}}>
        <h1>Introduction</h1>

        <p style={{marginTop: '4vh', marginBottom: '5vh'}}>
        In today's digital age, phishing scams have become an unfortunate reality of online life. These deceptive tactics are employed by
        cybercriminals to trick unsuspecting individuals into revealing sensitive information such as passwords, credit card numbers, or
        personal identification details. Understanding how phishing works and learning to identify its telltale signs is crucial in
        protecting yourself from falling victim to these malicious schemes.
        </p>

        <div className='container-fluid' style={{align: 'left', padding: 0, margin: 0}}>
            <img src={require('../assets/phishingscammy.jpg')} style={{height: '100%', width:'100%'}}/>
        </div>

    </div>

)

const AboutPhishing = () => (
    <div className='bg bg-white'>
        
    
        <BannerPhoto />

        <div className='container-fluid' style={{textAlign: 'left', paddingLeft: '17vw', paddingRight: '17vw', fontSize: "20px"}}>

            <Header />
            <HowSection />
            <SpotSection />
            <ProtectSection />
            <Conclude />

        </div>
    </div>
);

export default AboutPhishing;