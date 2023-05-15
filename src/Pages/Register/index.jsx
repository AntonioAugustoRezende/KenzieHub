import { StyledSectionRegister } from "./style";
import logo from "../../assets/Logo.svg";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";
import { Form } from "../../Components/Form";
import { Inputs } from "../../Components/Inputs";
import { useContext } from "react";
import { Loading } from "../../Components/Loading";
import { UserContext } from "../../Contexts/UserContext";
import { formShema } from "./registerShema";

export const RegisterPage = () => {
  const { loading, onSubmitFormRegister } = useContext(UserContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onBlur",
    resolver: yupResolver(formShema),
  });

  return (
    <>
      {loading && <Loading />}
      <StyledSectionRegister>
        <div>
          <img src={logo} alt="logo" />
          <Link to={"/"}>Voltar</Link>
        </div>
        <div>
          <div>
            <h2>Crie sua conta</h2>
            <p>Rapido e grátis, vamos nessa</p>
          </div>
          <Form submit={onSubmitFormRegister} handle={handleSubmit}>
            <Inputs
              text="Nome"
              type="text"
              placeholder="Digite aqui seu nome"
              register={register("name")}
              error={errors.name}
            />

            <Inputs
              text="Email"
              type="email"
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

            <Inputs
              text="Confirmar senha"
              type="password"
              placeholder="Digite novamente sua senha"
              register={register("passwordConfirmation")}
              error={errors.passwordConfirmation}
            />

            <Inputs
              text="Bio"
              type="text"
              placeholder="Fale sobre você"
              register={register("bio")}
              error={errors.bio}
            />

            <Inputs
              text="Contato"
              type="text"
              placeholder="Opção de contato"
              register={register("contact")}
              error={errors.contact}
            />

            <label>Selecionar modulo</label>
            <select name="" id="" {...register("course_module")}>
              <option value="">--Selecione </option>
              <option value="1 Modulo">1 Modulo</option>
              <option value="2 Modulo">2 Modulo</option>
              <option value="3 Modulo">3 Modulo</option>
              <option value="4 Modulo">4 Modulo</option>
            </select>
            {errors.course_module?.message && (
              <span>{errors.course_module.message}</span>
            )}

            <button type="submit">Cadastrar</button>
          </Form>
        </div>
      </StyledSectionRegister>
    </>
  );
};
