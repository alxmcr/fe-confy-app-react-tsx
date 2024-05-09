import CardTicketCheckoutForm from '../cards/CardTicketCheckoutForm';
import BaseSection from './BaseSection';

export default function TicketsSection() {
  return (
    <BaseSection id="speakers">
      <div className="flex flex-col gap-4">
        <h2 className="font-bungee-inline text-[34px] text-golden-300">Your ticket to Confy 2024</h2>
        <CardTicketCheckoutForm />
      </div>
    </BaseSection>
  );
}
