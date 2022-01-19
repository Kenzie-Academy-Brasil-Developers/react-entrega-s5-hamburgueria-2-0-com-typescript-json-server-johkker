import { ReactComponent as Logo } from "../../assets/logo-primary.svg";

import {
  FormContainer,
  IconContainer,
  LoginLinkContainer,
  LogoContainer,
  LogoInfoContainer,
  PageContainer,
} from "../../styles/Containers/styles";
import { FiShoppingBag } from "react-icons/fi";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { Heading } from "@chakra-ui/react";
import { Box, Button, TextField, Link } from "@mui/material";
import { api } from "../../api/api";
import { useHistory } from "react-router-dom";

interface SignUpData {
  name: string;
  email: string;
  password: string;
  confirmPassword?: string;
}

export const SignUp = () => {
  const history = useHistory();
  const signUpSchema = yup.object().shape({
    name: yup.string().required("Nome obrigatório"),
    email: yup.string().required("E-mail obrigatório").email("E-mail inválido"),
    password: yup.string().required("Senha obrigatória"),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password")])
      .required("As senhas não conferem"),
  });
  const {
    formState: { errors },
    register,
    handleSubmit,
  } = useForm<SignUpData>({
    resolver: yupResolver(signUpSchema),
  });

  const handleSignUp = ({ name, email, password }: SignUpData) => {
    api
      .post("/register", { name, email, password })
      .then((response) => {
        console.log("Cadastro efetuado com sucesso");
      })
      .catch((err) => {
        console.log("Cadastro não efetuado");
      });
  };

  return (
    <PageContainer>
      <LogoContainer>
        <Logo />
        <LogoInfoContainer border={1} borderColor="#f5f5f5" boxShadow={3}>
          <IconContainer>
            <FiShoppingBag size="2em" />
          </IconContainer>
          <p>
            A vida é como um sanduíche, é preciso recheá-la com os
            <b> melhores </b>
            ingredientes.
          </p>
        </LogoInfoContainer>
      </LogoContainer>
      <FormContainer boxShadow={3}>
        <LoginLinkContainer>
          <Heading>Login</Heading>
          <Link underline="hover" onClick={() => history.push("/")}>
            Retornar para o login
          </Link>
        </LoginLinkContainer>
        <Box
          component="form"
          onSubmit={handleSubmit(handleSignUp)}
          sx={{ display: "flex", flexDirection: "column", gap: "2vh" }}
        >
          <TextField
            label="Nome"
            id="outlined-basic"
            variant="outlined"
            placeholder="Insira seu nome completo"
            error={!!errors.name?.message}
            helperText={errors.name?.message}
            {...register("name")}
          />
          <TextField
            label="E-mail"
            id="outlined-basic"
            variant="outlined"
            placeholder="Insira seu e-mail"
            error={!!errors.email?.message}
            helperText={errors.email?.message}
            {...register("email")}
          />
          <TextField
            label="Senha"
            id="outlined-basic"
            variant="outlined"
            placeholder="Insira sua senha"
            type="password"
            sx={{ backgroundColor: "grey.200" }}
            error={!!errors.password?.message}
            helperText={errors.password?.message}
            {...register("password")}
          />
          <TextField
            label="Confirmação de senha"
            id="outlined-basic"
            variant="outlined"
            placeholder="Insira novamente a senha escolhida"
            type="password"
            sx={{ backgroundColor: "grey.200" }}
            error={!!errors.confirmPassword?.message}
            helperText={errors.confirmPassword?.message}
            {...register("confirmPassword")}
          />
          <Button
            variant="contained"
            color="success"
            sx={{ width: "auto", color: "white" }}
            size="large"
            type="submit"
          >
            CADASTRAR
          </Button>
        </Box>
      </FormContainer>
    </PageContainer>
  );
};
