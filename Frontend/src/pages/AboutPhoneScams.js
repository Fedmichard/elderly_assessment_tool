import React from 'react';
import { Link } from 'react-router-dom';

const Conclude = () => (
    <div style={{ marginBottom: '25vh' }}>
        

        <div className='container-fluid' style={{borderBottom: 'thin solid black', marginTop: '5vh'}}>
            <h3>In Conclusion:</h3>
            <br />
            <p>
            By staying vigilant and practicing caution when receiving unsolicited calls, individuals can protect themselves from falling prey to phone scams and preserve
            their privacy and financial security in the digital age. Remember, it's always better to err on the side of caution when it comes to unsolicited communications.
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
                    <button className='btn btn-outline-dark rounded-0'>Phone Scam Assessment</button>
                </Link>
            </div>
        </div>


    </div>
)

const ProtectSection = () => (
    <div className='container-fluid'>


        <h3>Protecting Yourself from Phone Scams:</h3>

        <p style={{marginTop: '3vh', marginBottom: '3vh'}}>To safeguard against phone scams, consider the following precautions:</p>

        <ul>
            <li>
                <strong>Verify Caller Identity: </strong>Ask for the caller's name, organization, and contact information. If in doubt, hang up and independently verify the caller's
                identity through official channels.
            </li>
            <br />
            <li>
                <strong>Be Skeptical: </strong>Approach unsolicited calls with caution, especially if they involve requests for personal information or payments. Trust your instincts
                and refrain from divulging sensitive details to unfamiliar callers.
            </li>
            <br />
            <li>
                <strong>Register with Do Not Call Registry: </strong>Add your phone number to the National Do Not Call Registry to reduce the number of unsolicited calls from
                telemarketers and potential scammers.
            </li>
            <br />
            <li>
                <strong>Educate Yourself: </strong>Stay informed about the latest phone scams and tactics used by fraudsters. Share knowledge with friends and family to help
                them recognize and avoid falling victim to phone scams.
            </li>
        </ul>


    </div>
)

const SpotSection = () => (
    <div className='container-fluid'>


    <h3>Spotting Phone Scams:</h3>

    <p style={{marginTop: '3vh', marginBottom: '3vh'}}>Recognizing the signs of a phone scam can help individuals protect themselves from falling victim to fraudulent schemes:</p>

    <ul>
        <li>
            <strong>Pressure to Act Quickly: </strong>Scammers often create a sense of urgency or panic to coerce victims into making hasty decisions.
            Be cautious of callers who demand immediate action or threaten severe consequences for non-compliance.
        </li>
        <br />
        <li>
            <strong>Requests for Personal Information or Payments: </strong>Be wary of unsolicited calls requesting sensitive information, such as Social Security numbers,
            credit card details, or passwords. Legitimate organizations typically do not ask for such information over the phone.
        </li>
        <br />
        <li>
            <strong>Unsolicited Offers or Prizes: </strong>Exercise skepticism towards calls offering prizes, sweepstakes winnings, or unsolicited services. If an offer
            sounds too good to be true, it likely is.
        </li>
        <br />
        <li>
            <strong>Caller ID Spoofing: </strong>Take note of caller ID information, but remember that scammers can spoof numbers to appear as though they are calling from
            a trusted source.
        </li>
    </ul>


    </div>
)
{/****** */}
const HowSection = ({}) => (
    <div className='container-fluid' style={{marginTop: '10vh'}}>


        <h3>How Phone Scams Work:</h3>

        <p style={{marginTop: '3vh', marginBottom: '3vh'}}>
        Phone scammers employ a range of tactics to manipulate their victims, including:
        </p>

        <ul>
            <li>
                <strong>Impersonating Authorities: </strong>Scammers may pose as law enforcement officers, government officials, or
                representatives from utility companies, claiming that the recipient owes money or has committed a
                legal violation. They use intimidation tactics to pressure individuals into providing sensitive
                information or making immediate payments.
            </li>
            <br />
            <li>
                <strong>Spoofing Caller ID: </strong>By manipulating caller ID information, scammers can make their calls appear to
                originate from legitimate sources, such as local businesses or government agencies. This deceptive
                practice enhances their credibility and makes it more difficult for victims to discern the scam.
            </li>
            <br />
            <li>
                <strong>Prize and Sweepstakes Scams: </strong>Fraudsters often lure victims with promises of lottery winnings, free
                vacations, or valuable prizes. To claim the supposed reward, individuals are required to provide
                personal information or make advance payments, only to realize later that the offer was a scam.
            </li>
            <br />
            <li>
                <strong>Tech Support Scams: </strong>In tech support scams, fraudsters claim to be from reputable tech companies and
                allege that the victim's computer has a virus or security issue. They offer to fix the problem remotely
                for a fee or request access to sensitive information, which they can then exploit for malicious purposes.
            </li>
        </ul>


    </div>
)

const BannerPhoto = () => (

    <div className='container-fluid' style={{padding: 0, margin: 0}}>
        <img src={require('../assets/shutterstock_444744973-2000x1200.jpg')} style={{height: '100%', width: '100%'}}/>
    </div>

)

const Header = () => (

    <div className='container-fluid' style={{marginTop: '4vh', marginBottom: '4vh'}}>
        <h1>Introduction</h1>

        <p style={{marginTop: '4vh', marginBottom: '5vh'}}>
        In an era dominated by technology, phone scams have emerged as a prevalent threat to individuals'
        privacy and financial security. These fraudulent schemes often target unsuspecting victims through
        unsolicited phone calls, preying on their trust and vulnerability. From impersonating government
        officials to posing as representatives from reputable organizations, scammers employ a variety of
        tactics to deceive their targets. Understanding the common methods used in phone scams and learning
        how to recognize them is crucial in safeguarding oneself against these malicious attacks.
        </p>

        <div className='container-fluid' style={{align: 'left', padding: 0, margin: 0}}>
            <img src={require('../assets/Security-Alert.jpg')} style={{height: '100%', width:'100%'}}/>
        </div>

    </div>

)

const AboutPhoneScams = () => (
    <div className='bg bg-white'>
        
    
        <BannerPhoto />

        <div className='container-fluid' style={{textAlign: 'left', paddingLeft: '17vw', paddingRight: '17vw'}}>

            <Header />
            <HowSection />
            <SpotSection />
            <ProtectSection />
            <Conclude />

        </div>
    </div>
);

export default AboutPhoneScams;