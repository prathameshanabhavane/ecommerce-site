import './CheckoutDetail.scss'
import { useForm, SubmitHandler } from "react-hook-form"

const CheckoutDetail = () => {
    const { register, handleSubmit, formState: {errors} } = useForm()

    console.log(errors)

    return(
        <>
            <div className="checkout-detail-page page">
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
                            <textarea placeholder="Address" {...register("address", {required:"Address field is required"})}></textarea>
                            <span className='error'>{errors.address?.message}</span>
                        </div>
                        <div className="input-field">
                            <input type="submit" value="Submit" />
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default CheckoutDetail;