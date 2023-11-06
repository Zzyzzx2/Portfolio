import React, {useRef} from 'react'
import emailjs from '@emailjs/browser';
export default function Contact() {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_u1r6zr6', 'template_psqsiag', form.current, 'sauEv-i2Yjz_1gBWu')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        e.target.reset();
    };
    return (
        <>
            <section id='contact'>
                <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
                    <div className='bg-gradient-to-tr from-violet-700 to-fuchsia-400 shadow-black shadow-2xl text-center rounded-lg lg:w-auto'>
                        <div className="p-6">
                            <h2 className="p-4 mb-4 text-4xl tracking-tight font-extrabold text-center text-white">Contact Me</h2>
            
                            <form ref={form} onSubmit={sendEmail} className="space-y-8" method='post' >
                                <div>
                                    <label for="subject" className="block mb-2 text-sm font-medium text-white">Name</label>
                                    <input type="text" name="user_name" id="Name" className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Name" required />
                                </div>
                                <div>
                                    <label for="email" className="block mb-2 text-sm font-medium text-white">Email</label>
                                    <input type="email" name="user_email" id="email" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="email@something.com" required />
                                </div>
                               
                                <div className="sm:col-span-2">
                                    <label for="message" className="block mb-2 text-sm font-medium text-white">Message</label>
                                    <textarea id="message" name="message" rows="6" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="You can write your message here."></textarea>
                                </div>
                                <button type="submit" className="inline-block lg:mb-5 rounded-full shadow-2xl bg-violet-700 px-6 pb-2 pt-2.5 text-lg text-white transition duration-200 ease-in hover:bg-violet-950" value="Send">Send Your Message</button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}