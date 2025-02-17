import {loadStripe} from '@stripe/stripe-js';
import SectionTitle from '../../Components/sectiontitle/SectionTitle';
import { Elements } from '@stripe/react-stripe-js';
import CheckOutForm from './CheckOutForm';

const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);
const Payment = () => {
    return (
        <div>
            <SectionTitle heading="Payment" subHeading="Please confirm your payment"></SectionTitle>
            <div>
                <Elements stripe={stripePromise}>
                    <CheckOutForm></CheckOutForm>
                </Elements>
            </div>
        </div>
    );
};

export default Payment;