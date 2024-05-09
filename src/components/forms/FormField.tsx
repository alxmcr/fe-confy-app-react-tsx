type Props = {
  label: string;
  id: string;
  name: string;
  placeholder: string;
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
};

export default function FormField({
  label = '',
  id = '',
  name = '',
  placeholder = '',
  value = '',
  setValue,
}: Props) {
  return (
    <label htmlFor={id} className="flex w-full flex-col gap-2 text-light-950">
      <span>{label}:</span>
      <input
        className="rounded-md p-2"
        type="text"
        id={id}
        name={name}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder={placeholder}
      />
    </label>
  );
}
