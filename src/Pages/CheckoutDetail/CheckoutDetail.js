import './CheckoutDetail.scss'
import { useForm, SubmitHandler } from "react-hook-form"
import { useCart } from '../../Context/CartContext';

const CheckoutDetail = () => {
    const { register, handleSubmit, formState: {errors} } = useForm()
    const { cart, dispatch } = useCart();

    return(
        <>
            <div className="checkout-detail-page page">
                <div className="form-detail">
                    <form onSubmit={handleSubmit((data, e) => {
                            console.log(data)
                            e.target.reset()
                            console.log(cart);
                            dispatch({ type: 'CLEAR_CART' });
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