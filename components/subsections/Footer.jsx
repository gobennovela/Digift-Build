import React from 'react';

function Footer() {

    const company = [
        "About Us",
        "Careers",
        "FAQ"
    ]

    const resources = [
        "Documentation",
        "Developer",
        "Cookie policy"
    ]

    const products = [
        "Airtime",
        "Electricity",
        "Television",
        "eCommerce"
    ]

    const links = [
        "Facebook",
        "Twitter",
        "Instagram"
    ]

    return (
        <section className="w-[100%] flex flex-row self-center mt-[3em]">
            <div className="w-[90%] mx-auto border-t-[1.5px] py-[9vh] border-digiftBorder dark:border-headerToggleDark/25">
                <div className="w-[100%] flex flex-col lg:flex-row items-start justify-between">
                    <div>
                        <h4 className="text-[1.25em] mb-[2.5vh] md:text-[1.5em] font-bold">Digift</h4>
                        <a href="mailto:gobennovela@gmail.com" passHref className="text-[14px] font-medium max-w-[95%] text-ellipsis overflow-hidden truncate text-prevalentText dark:text-gray-300 leading-[2]">gobennovela@gmail.com</a>
                    </div>
                    <div className="grid grid-cols-2 lg:grid-cols-4 md:grid-cols-3 md:gap-[3em] justify-between items-start gap-[2em] lg:gap-[4em] mt-[3em] lg:mt-[0em]">
                        <div>
                            <h4 className="text-[0.871em] mb-[2.5vh] md:text-[.871em] font-medium">Company</h4>
                            {company.map((company) => (
                                <><div><h4 className="footerLink">{company}</h4></div></>
                            ))}
                        </div>
                        <div>
                            <h4 className="text-[0.871em] mb-[2.5vh] md:text-[.871em] font-medium">Resources</h4>
                            {resources.map((resources) => (
                                <><div><h4 className="footerLink">{resources}</h4></div></>
                            ))}
                        </div>
                        <div>
                            <h4 className="text-[0.871em] mb-[2.5vh] md:text-[.871em] font-medium">Products</h4>
                            {products.map((products) => (
                                <> <div><h4 className="footerLink">{products}</h4></div></>
                            ))}
                        </div>
                        <div>
                            <h4 className="text-[0.871em] mb-[2.5vh] md:text-[.871em] font-medium">Links</h4>
                            {links.map((links) => (
                                <><div><h4 className="footerLink">{links}</h4></div></>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="mt-[10vh] flex flex-col lg:flex-row justify-between items-center md:items-start w-[100%.871">
                    <h4 className="footerLink">© Copyright 2022 Bennovela, All rights reserved.</h4>
                    <div className="flex flex-row items-center justify-between w-[80%] lg:w-auto">
                        <h4 className="footerLink mr-[2.5vh]">Privacy Policy</h4>
                        <h4 className="footerLink">Terms and Condition</h4>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Footer;
