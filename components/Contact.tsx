import ContactForm from "./ContactForm";
import Spacer from "./Spacer";

function Contact() {

    return (
        <div id="Contact" className="flex flex-col justify-evenly items-center">
            <span className="text-4xl font-semibold uppercase">contact us</span>
            <Spacer/>
            <ContactForm/>
        </div>
    )
}

export default Contact;