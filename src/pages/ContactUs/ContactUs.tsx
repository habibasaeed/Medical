import React, {FC,useEffect,useState} from "react";
import BreadCrumbs from "../../components/BreadCrumbs/BreadCrumbs";
import ContactMain from "../../assets/images/contact-main-img.png";
import CallIcon from "../../assets/icons/call_icon.png";
import TeethIcon from "../../assets/icons/teeth-shape.png";
import "./ContactUs.css";
import "./ContactUsResponsive.css";

interface ContactFormData{
    name:string;
    email:string;
    subject:string;
    phone:string;
    comments:string;
    captcha:string;
}

interface ContactFormErrors {
    name?:string;
    email?:string;
    subject?:string;
    phone?:string;
    comments?:string;
    captcha?:string;
}

const ContactUs: FC = () => {
    // state
    const [formData, setFormData] = useState<ContactFormData> ({
        name:"",
        email:"",
        subject:"",
        phone:"",
        comments:"",
        captcha:"",
    });

    const [captchaCode, setCaptchaCode] =useState("");
    const [errors, SetErrors] = useState<ContactFormErrors>({});

    // generate captcha code
    const generateCaptcha = () =>{
        const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        let code= "";
        for (let i = 0; i < 6; i++) {
            code += chars[Math.floor(Math.random() * chars.length)];
        }
        setCaptchaCode(code);
    };

    useEffect(() => {
        generateCaptcha();  //generate on page load
    }, []);

    // handle input change
    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        setFormData({...formData, [e.target.name]: e.target.value});
    };

    // validate fields
    const validate = (): boolean => {
        const newErrors: ContactFormErrors = {};

        if(!formData.name.trim()) newErrors.name = "Name is required";
        if (!formData.email.includes("@")) newErrors.email = "Invalid email address";
        if(!formData.subject.trim()) newErrors.subject ="Subject is required";
        if (!/^[0-9]{11}$/.test(formData.phone)) newErrors.phone ="Phone must be 11 digits";
        if (formData.comments.length < 10) newErrors.comments = "Comments must be at least 10 characters";
        // if (formData.captcha !== "5RLOpw") newErrors.captcha = "Captcha is incorrect";
        if(formData.captcha !== captchaCode) newErrors.captcha = "Captcha is incorrect";


        SetErrors (newErrors);
        return Object.keys(newErrors).length === 0; 
    };

    // handle submit
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!validate()) return;

        console.log("Form Data:", formData);
        alert("Form submitted successfully!");

        generateCaptcha(); //regenerate captcha after successful submit 
        setFormData({name: "", email: "", subject: "", phone: "", comments: "", captcha: ""})
    };

    return (
    <>
    <BreadCrumbs page="ContactUs" title="Contact Us" />


    <div className="main-contact">
        <div className="container">
            <div className="container text-center pt-5 main-wrapper">
                <div className="row">
                    {/* left side */}
                    <div className="col left-wrapper">
                        <div className="teeth">
                            <img src={TeethIcon} alt="TeethIcon" className="teeth-icon" />
                        </div>
                        <div className="main-doc-img">
                            <img src={ContactMain} alt="Contact-Main-Image" />
                        </div>
                        <div className="card left-main-card">
                            <div className="card-body d-flex main-card-contact ">
                                <img src={CallIcon} alt="Contact-Icon" className="call-icon"/>
                                <div className="card-contact-details">
                                    <h3 className="card-title fw-bold">Emergency Call</h3>
                                    <p className="card-text">24/7 - Support and easy</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* right side */}
                    <div className="col right-side">
                        <div className="title-wrapper-oneside">
                            <div className="title-oneside fw-bold">
                                CONTACT US
                            </div>
                        </div>

                        <div className="subtitle-form text-start">
                            <h2 className="fw-bold">Meet Our Specialist This Doctor Meet</h2>
                        </div>

                        <form className="contactus-form" onSubmit={handleSubmit}>

                            <div className="form-gp-input">
                                <input type="text" name="name" placeholder="Your name" value={formData.name} onChange={handleChange} required/>
                                {errors.name && <small className="error">{errors.name}</small>}
                            </div>

                            <div className="form-gp-input">
                                <input type="email" name="email" placeholder="Your email" value={formData.email} onChange={handleChange} required/>
                                {errors.email && <small className="error">{errors.email}</small>}
                            </div>

                            <div className="form-gp-input">
                                <input type="text" name="subject" placeholder="Your subject" value={formData.subject} onChange={handleChange} required/>
                                {errors.subject && <small className="error">{errors.subject}</small>}
                            </div>

                            <div className="form-gp-input">
                                <input type="text" name="phone" placeholder="Your phone" value={formData.phone} onChange={handleChange} />
                                {errors.phone && <small className="error">{errors.phone}</small>}
                            </div>

                            <div className="form-gp-input">
                                <textarea name="comments" placeholder="Your comments" rows={4} cols={65} value={formData.comments} onChange={handleChange} required className="comment-area"/>
                                {errors.comments && <small className="error">{errors.comments}</small>}
                            </div>

                            <div className="form-gp-input">
                                <input type="text" name="captcha" placeholder="Type the below word" className="type-input" value={formData.captcha} onChange={handleChange} required/>
                                {errors.captcha && <small className="error">{errors.captcha}</small>}
                            </div>

                            <div className="form-btns">
                                <input type="button" className="code" value={captchaCode} onClick={generateCaptcha} />
                                <div className="form-btn">
                                    <button type="submit">Send Request</button>
                                </div>
                            </div>
                        </form>
                    </div>

                </div>
            </div>
        </div>
    </div>

    <div className="map">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d110502.61185026474!2d31.17606205531529!3d30.059611343502706!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14583fa60b21beeb%3A0x79dfb296e8423bba!2sCairo%2C%20Cairo%20Governorate!5e0!3m2!1sen!2seg!4v1764868832304!5m2!1sen!2seg" width="600" height="450" style={{border:0}} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"/>
    </div>
    </>
    );
};

export default ContactUs;
