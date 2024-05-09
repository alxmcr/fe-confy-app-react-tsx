import React from 'react';

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

  if (submitted)
    return (
      <p className="">
        Payment processed. <br /> Thanks! See you soon :)
      </p>
    );

  return (
    <form className="" onSubmit={handlerSendForm} onReset={resetForm}>
      <div className="">
        <label className="text-golden-400" htmlFor="fullname">
          Cardholder name:
        </label>
        <input
          className=""
          type="text"
          id="fullname"
          name="fullname"
          value={fullname}
          onChange={(e) => setFullname(e.target.value)}
          placeholder="Write your fullname here"
        />
      </div>
      <div className="">
        <label className="" htmlFor="creditCardNumber">
          Credit card Number:
        </label>
        <input
          className=""
          type="text"
          id="creditCardNumber"
          name="creditCardNumber"
          value={creditCardNumber}
          onChange={(e) => setCreditCardNumber(e.target.value)}
          placeholder="Write your credit card number here"
        />
        <label className="" htmlFor="cvvNumber">
          CVV Number:
        </label>
        <input
          className=""
          type="text"
          id="cvvNumber"
          name="cvvNumber"
          value={cvvNumber}
          onChange={(e) => setCvvNumber(e.target.value)}
          placeholder="Write your CVV number here"
        />
      </div>
      <div className="">
        <label className="" htmlFor="expirationDate">
          Expiration Date:
        </label>
        <input
          className=""
          type="date"
          id="date"
          name="expirationDate"
          value={expirationDate}
          onChange={(e) => setExpirationDate(e.target.value)}
          placeholder="Write your experation date here"
        />
      </div>
      <div className="">
        <button disabled={isDisabledSubmit} className="" type="submit">
          Make a payment
        </button>
      </div>
    </form>
  );
}
