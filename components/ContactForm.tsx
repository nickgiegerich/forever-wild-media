function ContactForm() {
    return (
        <div className="w-full max-w-sm md:max-w-3xl mb-96">
            <form className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="name">
                        Name
                    </label>
                    <input
                        className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight shadow-lg focus:outline-none focus:bg-white"
                        id="name"
                        type="text"
                        placeholder="Jane" />
                </div>
                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="email">
                        Email
                    </label>
                    <input
                        className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight shadow-lg focus:outline-none focus:bg-white"
                        id="email"
                        type="email"
                        placeholder="Jane@me.com" />
                </div>
                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="phone">
                        Phone
                    </label>
                    <input
                        className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight shadow-lg focus:outline-none focus:bg-white"
                        id="phone"
                        type="number"
                        placeholder="(208)555-5555" />
                </div>
                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="company">
                        Company
                    </label>
                    <input
                        className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight shadow-lg focus:outline-none focus:bg-white"
                        id="company"
                        type="text"
                        placeholder="Jane Inc." />
                </div>

                <div className="w-full px-3">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="message">
                        Message
                    </label>
                    <textarea className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                        id="message"
                        placeholder="some message.."
                    />
                </div>

            </form>
            {/* <form className="flex flex-row w-full justify-evenly">
                <div className="flex flex-col basis-full flex-1 text-center">
                    <div>
                        <label htmlFor="name">Name</label>
                        <input id="name" type={'text'} placeholder="Bob"/>
                    </div>
                    <div>
                        <label htmlFor="phone">Phone</label>
                        <input id="phone" type={'text'} placeholder="+1 (555)555-5555"/> 
                    </div>
                    <div>message</div>

                </div>
                <div className="flex flex-col basis-full flex-1 text-center">
                    <div>Email</div>
                    <div>Company</div>
                    <div>button</div>
                </div>
            </form> */}
        </div>
    )
}

export default ContactForm;