import { Form } from "./style";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Button from "../Button";
import { useAuthContext } from "../../Providers/Auth";

interface onSubmitProps {
  email: string;
  password: string;
}

const Login = () => {
  const { SignIn } = useAuthContext();
  const formSchema = yup.object().shape({
    email: yup.string().required("User Obrigatório"),
    password: yup.string().required("Senha Obrigatória"),
  });

  const { register, handleSubmit } = useForm({
    resolver: yupResolver(formSchema),
  });

  const onSubmitFunction = (data: onSubmitProps) => {
    SignIn(data);
  };
  return (
    <>
      <h2>Faça seu Login</h2>
      <Form onSubmit={handleSubmit(onSubmitFunction)}>
        <input type="text" placeholder="Email" {...register("email")} />
        <input type="password" placeholder="Senha" {...register("password")} />
        <Button>Login</Button>
      </Form>
    </>
  );
};
export default Login;
