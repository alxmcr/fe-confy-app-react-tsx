import FormTicketCheckout from '../forms/FormTicketCheckout';

export default function CardTicketCheckoutForm() {
  return (
    <article className="flex flex-col justify-center gap-4 text-golden-400">
      <h3 className="text-center text-[30px]">$ 39</h3>
      <FormTicketCheckout />
    </article>
  );
}
