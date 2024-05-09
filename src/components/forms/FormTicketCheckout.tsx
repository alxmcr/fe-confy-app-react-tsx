import React from 'react';
import FormField from './FormField';
import CardPaymentProcessed from '../cards/CardPaymentProcessed';

export default function FormTicketCheckout() {
  const [fullname, setFullname] = React.useState('');
  const [creditCardNumber, setCreditCardNumber] = React.useState('');
  const [cvvNumber, setCvvNumber] = React.useState('');
  const [expirationDate, setExpirationDate] = React.useState('');
  const [isDisabledSubmit, setIsDisabledSubmit] = React.useState(true);
  const [submitted, setSubmitted] = React.useState(false);

  // Button Handlers
  const handlerSendForm = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    resetForm();
  };
  const resetForm = () => {
    setFullname('');
    setCreditCardNumber('');
    setCvvNumber('');
    setExpirationDate('');
  };

  // useEffect
  React.useEffect(() => {
    const allFieldsCompleted =
      fullname.length > 0 && creditCardNumber.length > 0 && cvvNumber.length > 0 && expirationDate.length > 0;

    if (allFieldsCompleted) {
      setIsDisabledSubmit(false);
    } else {
      setIsDisabledSubmit(true);
    }
  }, [fullname, creditCardNumber, cvvNumber, expirationDate]);

  if (submitted) {
    return <CardPaymentProcessed setSubmitted={setSubmitted} />;
  }

  return (
    <form
      onSubmit={handlerSendForm}
      onReset={resetForm}
      className="flex flex-col gap-5 bg-golden-300 px-2 py-4"
    >
      <FormField
        label="Cardholder name"
        id="fullname"
        name="fullname"
        value={fullname}
        setValue={setFullname}
        placeholder="Write your fullname here"
      />
      <div className="flex gap-3">
        <FormField
          label="Credit card Number"
          id="creditCardNumber"
          name="creditCardNumber"
          maxLength={12}
          value={creditCardNumber}
          setValue={setCreditCardNumber}
          placeholder="Write your credit card number here"
        />
        <FormField
          label="CVV Number"
          id="cvvNumber"
          name="cvvNumber"
          maxLength={3}
          value={cvvNumber}
          setValue={setCvvNumber}
          placeholder="Write your CVV number here"
        />
      </div>

      <FormField
        maxLength={5}
        label="Expiration Date"
        id="expirationDate"
        name="expirationDate"
        value={expirationDate}
        setValue={setExpirationDate}
        placeholder="Write your experation date here"
      />

      <div className="">
        <button
          disabled={isDisabledSubmit}
          type="submit"
          className="h-[50px] w-full rounded-lg bg-light-950 text-[20px] text-light-50 disabled:opacity-75"
        >
          Make a payment
        </button>
      </div>
    </form>
  );
}
