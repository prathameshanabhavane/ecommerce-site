import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const TermsOfServices = () => {
    return(
        <>
           <div className='terms-page page static-page'>
                <section>
                    <h1 className='page-header'>
                        Terms Of Services
                    </h1>
                    <Container>
                        <section>
                            <h2>1. Acceptance of Terms</h2>
                            <p>By accessing and using Dukan’s services, you agree to comply with and be bound by these Terms of Service. If you do not agree with any part of these terms, you must not use our services.</p>
                        </section>

                        <section>
                            <h2>2. Changes to Terms</h2>
                            <p>Dukan reserves the right to modify these Terms of Service at any time. We will notify you of any changes by posting the revised terms on our website. Your continued use of our services after changes are posted constitutes your acceptance of the new terms.</p>
                        </section>

                        <section>
                            <h2>3. Use of Services</h2>
                            <p>You agree to use our services only for lawful purposes and in accordance with these Terms. You must not use our services:</p>
                            <ul>
                                <li>In any way that violates any applicable federal, state, local, or international law or regulation.</li>
                                <li>For the purpose of exploiting, harming, or attempting to exploit or harm minors in any way.</li>
                                <li>To send, knowingly receive, upload, download, use, or re-use any material that does not comply with our content standards.</li>
                            </ul>
                        </section>

                        <section>
                            <h2>4. Account Registration</h2>
                            <p>To access certain features of our services, you may be required to create an account. You agree to provide accurate, current, and complete information during the registration process and to update such information to keep it accurate, current, and complete.</p>
                        </section>

                        <section>
                            <h2>5. Intellectual Property</h2>
                            <p>All content, trademarks, and other intellectual property on our services are the property of Dukan or our licensors. You may not reproduce, distribute, or create derivative works of any content from our services without express permission.</p>
                        </section>

                        <section>
                            <h2>6. Third-Party Links</h2>
                            <p>Our services may contain links to third-party websites. These links are provided for your convenience. We do not control and are not responsible for the content of these websites. You should review the terms and privacy policies of any third-party sites you visit.</p>
                        </section>

                        <section>
                            <h2>7. Limitation of Liability</h2>
                            <p>To the fullest extent permitted by law, Dukan will not be liable for any indirect, incidental, special, consequential, or punitive damages, including loss of profits, data, use, goodwill, or other intangible losses, resulting from:</p>
                            <ul>
                                <li>Your access to or use of (or inability to access or use) our services;</li>
                                <li>Any conduct or content of any third party on our services;</li>
                                <li>Any content obtained from our services; and</li>
                                <li>Unauthorized access, use, or alteration of your transmissions or content.</li>
                            </ul>
                        </section>

                        <section>
                            <h2>8. Indemnification</h2>
                            <p>You agree to defend, indemnify, and hold harmless Dukan, its affiliates, and their respective officers, directors, employees, agents, and licensors from and against any claims, liabilities, damages, judgments, awards, losses, costs, and expenses of any kind, including reasonable attorneys' fees, arising out of or relating to your violation of these Terms or your use of our services.</p>
                        </section>

                        <section>
                            <h2>9. Governing Law</h2>
                            <p>These Terms of Service shall be governed by and construed in accordance with the laws of [Your Jurisdiction], without regard to its conflict of law principles.</p>
                        </section>

                        <section>
                            <h2>10. Contact Us</h2>
                            <p>If you have any questions or concerns regarding these Terms of Service, please contact us at <a href="mailto:supports@dukan.com">supports@dukan.com</a>.</p>
                        </section>

                    </Container>
                </section>
           </div>
        </>
    )
}

export default TermsOfServices;