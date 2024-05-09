type Props = {
  label: string;
  id: string;
  name: string;
  placeholder: string;
  maxLength?: number;
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
};

export default function FormField({
  label = '',
  id = '',
  name = '',
  placeholder = '',
  maxLength = 0,
  value = '',
  setValue,
}: Props) {
  return (
    <label htmlFor={id} className="flex w-full flex-col gap-2 text-light-950">
      <span>{label}:</span>

      {maxLength > 0 ? (
        <input
          className="rounded-md p-2"
          type={`text`}
          id={id}
          name={name}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder={placeholder}
          maxLength={maxLength}
        />
      ) : (
        <input
          className="rounded-md p-2"
          type="text"
          id={id}
          name={name}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder={placeholder}
        />
      )}
    </label>
  );
}
