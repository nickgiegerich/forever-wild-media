// @ts-nocheck
import { useState } from "react";

function ContactForm() {
    const [name, setName] = useState<string>('')
    const [lastName, setLastName] = useState<string>('') // honeypot to catch spammers
    const [email, setEmail] = useState<string>('')
    const [phone, setPhone] = useState<string>('')
    const [company, setCompany] = useState<string>('')
    const [message, setMessage] = useState<string>('')

    //   Form validation state
    const [errors, setErrors] = useState({});

    //   Setting button text on form submission
    const [buttonText, setButtonText] = useState("Send");

    // Setting success or failure messages states
    const [showSuccessMessage, setShowSuccessMessage] = useState(false);
    const [showFailureMessage, setShowFailureMessage] = useState(false);

    const handleValidation = () => {
        let tempErrors = {}
        let isValid = true

        if (lastName.length > 0) { // to catch spammers ONLY this field should always be zero and it is hidden from the UI
            tempErrors['lastName'] = true
            isValid = false
        }

        if (name?.length <= 0 || !name) {
            tempErrors['name'] = true;
            isValid = false
        }
        if (email?.length <= 0 || !email) {
            tempErrors['email'] = true;
            isValid = false
        }
        if (phone?.length <= 0 || !phone) {
            tempErrors['phone'] = true;
            isValid = false
        }
        if (company?.length <= 0 || !company) {
            tempErrors['company'] = true;
            isValid = false
        }
        if (message?.length <= 0 || !message) {
            tempErrors['message'] = true;
            isValid = false
        }

        setErrors({ ...tempErrors });
        console.log("errors", errors);
        return isValid;
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        let isValidForm = handleValidation();

        if (isValidForm) {
            setButtonText("Sending...");
            const res = await fetch('api/sendgrid', {
                body: JSON.stringify({
                    name: name,
                    email: email,
                    phone: phone,
                    company: company,
                    message: message
                }),
                headers: {
                    "Content-Type": "application/json",
                },
                method: "POST",
            });

            const { error } = await res.json();

            if (error) {
                console.log(error)
                setShowSuccessMessage(false);
                setShowFailureMessage(true);
                setButtonText("Send");
                return;
            }
            setShowSuccessMessage(true);
            setShowFailureMessage(false);
            setButtonText("Send");
            // Reset form fields
            setName("")
            setEmail("")
            setMessage("")
            setCompany("")
            setPhone("")
        }
        console.log(name, email, phone, company, message)
    }

    return (
        <div className="w-full max-w-sm md:max-w-3xl">
            <form onSubmit={handleSubmit} className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="name">
                        Name
                    </label>
                    <input
                        className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight shadow-lg focus:outline-none focus:bg-white"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        type="text"
                        placeholder="Jane" />
                    {errors?.name && (
                        <p className="text-red-500">Name cannot be empty.</p>
                    )}
                </div>
                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="email">
                        Email
                    </label>
                    <input
                        className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight shadow-lg focus:outline-none focus:bg-white"
                        id="email"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Jane@me.com" />
                    {errors?.email && (
                        <p className="text-red-500">Email cannot be empty.</p>
                    )}
                </div>
                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="phone">
                        Phone
                    </label>
                    <input
                        className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight shadow-lg focus:outline-none focus:bg-white"
                        id="phone"
                        type="tel"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="208-555-5555" />
                    {errors?.phone && (
                        <p className="text-red-500">Phone cannot be empty.</p>
                    )}
                </div>
                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="company">
                        Company
                    </label>
                    <input
                        className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight shadow-lg focus:outline-none focus:bg-white"
                        id="company"
                        type="text"
                        value={company}
                        onChange={(e) => setCompany(e.target.value)}
                        placeholder="Jane Inc." />
                    {errors?.company && (
                        <p className="text-red-500">Company cannot be empty. Put N/A if it does not apply to you.</p>
                    )}
                </div>

                <div className="w-full px-3">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="message">
                        Message
                    </label>
                    <textarea className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                        id="message"
                        placeholder="some message.."
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                    />
                    {errors?.message && (
                        <p className="text-red-500">Message cannot be empty.</p>
                    )}
                </div>
                <div className="w-full px-3 hidden">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="lastName">
                        Last Name
                    </label>
                    <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                        id="lastName"
                        type="text"
                        placeholder="Lastname"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                    />
                </div>
                <div className="w-full px-3">
                    <button type="submit" className="px-10 mt-8 py-2 bg-black text-slate-50 font-light shadow-lg rounded-md text-lg flex flex-row items-center transition-all duration-200 hover:scale-110 hover:shadow-2xl" >
                        {buttonText}
                        <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            className="text-slate-300-500 ml-2"
                            fill="currentColor"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M9.00967 5.12761H11.0097C12.1142 5.12761 13.468 5.89682 14.0335 6.8457L16.5089 11H21.0097C21.562 11 22.0097 11.4477 22.0097 12C22.0097 12.5523 21.562 13 21.0097 13H16.4138L13.9383 17.1543C13.3729 18.1032 12.0191 18.8724 10.9145 18.8724H8.91454L12.4138 13H5.42485L3.99036 15.4529H1.99036L4.00967 12L4.00967 11.967L2.00967 8.54712H4.00967L5.44417 11H12.5089L9.00967 5.12761Z"
                                fill="currentColor"
                            />
                        </svg>
                    </button>
                </div>
                <div className="w-full px-3 text-left">
                    {showSuccessMessage && (
                        <p className="text-green-500 font-semibold text-sm my-2">
                            Thankyou! Your Message has been delivered.
                        </p>
                    )}
                    {showFailureMessage && (
                        <p className="text-red-500">
                            Oops! Something went wrong, please try again.
                        </p>
                    )}
                </div>
            </form>
        </div>
    )
}

export default ContactForm;