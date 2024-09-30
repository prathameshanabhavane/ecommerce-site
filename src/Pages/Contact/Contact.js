import Container from 'react-bootstrap/Container';
import { useForm } from "react-hook-form"

const Contact = () => {
    const { register, handleSubmit, formState: {errors} } = useForm()

    return(
        <>
           <div className='contact-page page static-page'>
                <section>
                    <h1 className='page-header'>
                        Contact Us
                    </h1>
                    <Container>
                        <div className="form-detail">
                                <form onSubmit={handleSubmit((data, e) => {
                                        console.log(data)
                                        e.target.reset()
                                    })}>
                                    <div className="input-field">
                                        <input type="text" {...register("name", {required:"Name field is required"})} placeholder="Name" />
                                        <span className='error'>{errors.name?.message}</span>
                                    </div>
                                    <div className="input-field">
                                        <input type="email" {...register("email", {required:"Email field is required"})} placeholder="Email" />
                                        <span className='error'>{errors.email?.message}</span>
                                    </div>
                                    <div className="input-field">
                                        <input type="text"{...register("phone", {required:"Phone field is required"})} placeholder="Phone" />
                                        <span className='error'>{errors.phone?.message}</span>
                                    </div>
                                    <div className="input-field">
                                        <textarea placeholder="Message" {...register("message")}></textarea>
                                    </div>
                                    <div className="input-field">
                                        <input type="submit" value="Submit" className='submit' />
                                    </div>
                                </form>
                            </div>
                    </Container>
                </section>
           </div>
        </>
    )
}

export default Contact;