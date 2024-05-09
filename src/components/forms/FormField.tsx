type Props = {
  label: string;
  htmlFor: string;
  name: string;
  placeholder: string;
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
};

export default function FormField({
  htmlFor = 'x',
  name = 'y',
  placeholder = '',
  value = '',
  setValue,
}: Props) {
  return (
    <label htmlFor={htmlFor} className="text-golden-400">
      <span>Cardholder name:</span>
      <input
        className=""
        type="text"
        id={htmlFor}
        name={name}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder={placeholder}
      />
    </label>
  );
}
