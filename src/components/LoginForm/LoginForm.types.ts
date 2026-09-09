export interface LoginFormProps {
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
  loading?: boolean;
}
