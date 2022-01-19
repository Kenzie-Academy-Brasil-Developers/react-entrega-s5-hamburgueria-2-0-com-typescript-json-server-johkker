import { ReactComponent as Logo } from "../../assets/logo-primary.svg";

import {
  FormContainer,
  IconContainer,
  LogoContainer,
  LogoInfoContainer,
  PageContainer,
} from "../../styles/Containers/styles";
import { FiShoppingBag } from "react-icons/fi";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { Heading } from "@chakra-ui/react";
import { Box, Button, TextField, Divider } from "@mui/material";
import { useHistory } from "react-router-dom";
import { useAuth } from "../../providers/authContext";
import toast, { Toaster } from "react-hot-toast";

interface SignInData {
  email: string;
  password: string;
}

export const Login = () => {
  const history = useHistory();
  const signInSchema = yup.object().shape({
    email: yup.string().required("E-mail obrigatório").email("E-mail inválido"),
    password: yup.string().required("Senha obrigatória"),
  });
  const {
    formState: { errors },
    register,
    handleSubmit,
  } = useForm<SignInData>({
    resolver: yupResolver(signInSchema),
  });

  const { logIn } = useAuth();

  const handleSignIn = (data: SignInData) => {
    logIn(data)
      .then((_: any) => {
        toast.success("Login efetuado com sucesso!");
      })

      .catch((_err: any) => {
        toast.error("Usuário ou senha inválidos");
      });
  };

  return (
    <>
      <Toaster />
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
          <Heading>Login</Heading>
          <Box
            component="form"
            onSubmit={handleSubmit(handleSignIn)}
            sx={{ display: "flex", flexDirection: "column", gap: "2vh" }}
          >
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
              error={!!errors.password?.message}
              helperText={errors.password?.message}
              {...register("password")}
            />
            <Button
              variant="contained"
              color="success"
              sx={{ width: "auto", color: "white" }}
              size="large"
              type="submit"
            >
              ENTRAR
            </Button>
            <Divider variant="middle" />
            <LogoInfoContainer>
              Crie sua conta para saborear muitas delícias e matar sua fome!
            </LogoInfoContainer>
            <Button
              onClick={() => history.push("/signup")}
              variant="contained"
              color="inherit"
              size="large"
              sx={{ width: "auto" }}
            >
              Cadastrar
            </Button>
          </Box>
        </FormContainer>
      </PageContainer>
    </>
  );
};
