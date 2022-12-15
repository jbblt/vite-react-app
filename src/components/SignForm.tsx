import { Form, FormGroup } from "react-bootstrap";
import { CustomInput } from "./lib/CustomInput";
import { FormEvent, FormEventHandler } from "react";

interface LoginFormProps {
  onSubmit: (p: { password: string; username: string }) => void;
}
export const SignForm = ({ onSubmit }: LoginFormProps) => {
  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    console.log(event);
    const { username, password } = { username: "", password: "" };
    onSubmit({ username, password });
  };
  return;
};
