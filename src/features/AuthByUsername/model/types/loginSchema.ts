export interface LoginSchema {
  username: string;
  password: string;
  isLoading: boolean;
  error?: string;
}

export interface LoginFormProps {
  className?: string;
  onSuccess?: () => void;
}
