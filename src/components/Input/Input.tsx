interface InputProps {
  label: string;
  placeholder?: string;
  type?: string;
}

export function Input({ label, placeholder, type = 'text' }: InputProps) {
  return (
    <label className="flex w-full flex-col gap-2 text-base text-[#6A6A6A]">
      {label}
      <input
        type={type}
        placeholder={placeholder}
        className="h-10 rounded-[10px] border border-[#E9E9E9] px-3 text-[#AAAAAA] outline-none focus:border-[#004587]"
      />
    </label>
  );
}
