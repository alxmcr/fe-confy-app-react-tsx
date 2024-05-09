type Props = {
  setSubmitted: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function CardPaymentProcessed({ setSubmitted }: Props) {
  return (
    <article className="flex h-screen flex-col items-center justify-center gap-3 border">
      <h3 className="text-[28px] font-bold">Payment processed.</h3>
      <p className="text-[22px]">Thanks! See you soon :)</p>
      <button
        className="h-[50px] w-[250px] rounded-lg bg-golden-400 text-[20px] text-light-950 disabled:opacity-75"
        onClick={() => setSubmitted(false)}
      >
        Return to checkout
      </button>
    </article>
  );
}
