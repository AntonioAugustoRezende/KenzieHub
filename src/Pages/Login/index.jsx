import { StyledSectionLogin } from "./style";
import logo from "../../assets/LogoLogin.svg";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";
import { Form } from "../../Components/Form";
import { Inputs } from "../../Components/Inputs";
import { useContext } from "react";
import { Loading } from "../../Components/Loading";
import { UserContext } from "../../Contexts/UserContext";
import { formShema } from "./loginShema";
import { ToastLogin } from "../../Components/Toast";

export const LoginPage = () => {
  const { loading, onSubmitFormLogin } = useContext(UserContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formShema),
  });

  return (
    <>
      {loading && <Loading />}
      <ToastLogin />
      <StyledSectionLogin>
        <img src={logo} alt="logo" />

        <div>
          <h2>Login</h2>
          <Form submit={onSubmitFormLogin} handle={handleSubmit}>
            <Inputs
              text="Email"
              type="text"
              placeholder="Digite aqui seu email"
              register={register("email")}
              error={errors.email}
            />

            <Inputs
              text="Senha"
              type="password"
              placeholder="Digite aqui sua senha"
              register={register("password")}
              error={errors.password}
            />

            <button type="submit">Entrar</button>
          </Form>
          <p>Ainda não possui uma conta?</p>
          <Link to={"/register"}>Cadastrar</Link>
        </div>
      </StyledSectionLogin>
      <ToastContainer
        position="top-right"
        autoClose={1200}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </>
  );
};
