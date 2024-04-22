import { Footer } from "flowbite-react";
import { Link } from "react-router-dom";
import { BsFacebook, BsInstagram, BsTwitter, BsGithub } from "react-icons/bs";

export default function FooterCom() {
    return (
        <Footer container className="border boeder-t-8 border-teal-500">
            <div className="w-full max-w-7xl mx-auto">
                <div className="grid w-full justify-between sm:flex md:grid-cols-1">
                    <div className="mt-5">
                        <Link to={"/"} className='text-lg font-bold dark:text-white'> 
                            <span className='px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white'>Brian's </span>
                            Blog
                        </Link>
                    </div>
                    <div>
                        <div className="grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-6">
                            <div id="footer-about">
                                <Footer.Title title='About' />
                                <Footer.LinkGroup col>
                                    <Footer.Link
                                        href="https://www.youtube.com"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        Youtube.com
                                    </Footer.Link>
                                    <Footer.Link
                                        href="/about"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        Brian's blog
                                    </Footer.Link>
                                </Footer.LinkGroup>
                            </div>
                            <div id="footer-follow">
                                <Footer.Title title='Follow me' />
                                <Footer.LinkGroup col>
                                    <Footer.Link
                                        href="https://github.com/H1brian"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        Github
                                    </Footer.Link>
                                    <Footer.Link
                                        href="#"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        Instagram
                                    </Footer.Link>
                                </Footer.LinkGroup>
                            </div>
                            <div id="footer-legal">
                                <Footer.Title title='Legal' />
                                <Footer.LinkGroup col>
                                    <Footer.Link
                                        href="#"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        Privacy Policy
                                    </Footer.Link>
                                    <Footer.Link
                                        href="#"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        Terms & Conditions
                                    </Footer.Link>
                                </Footer.LinkGroup>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer.Divider />
                <div className="w-full sm:flex sm:items-center sm:justify-between">
                    <div >
                        <Footer.Copyright href="#" by="Brian's blog" year={new Date().getFullYear()}/>
                    </div>
                    <div className="flex gap-6 sm:mt-0 mt-4 sm:justify-center">
                        <Footer.Icon href="#" icon={BsFacebook}/>
                        <Footer.Icon href="#" icon={BsInstagram}/>
                        <Footer.Icon href="#" icon={BsTwitter}/>
                        <Footer.Icon href="https://github.com/H1brian" icon={BsGithub}/>
                    </div>
                </div>
            </div>
        </Footer>
    )
}