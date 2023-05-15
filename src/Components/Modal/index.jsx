import { StyledBoxModal, StyledModal } from "./style";
import { VscChromeClose } from "react-icons/vsc";
import { useForm } from "react-hook-form";
import { Loading } from "../Loading";
import { useContext } from "react";
import { TechContext } from "../../Contexts/TechContext";
import { yupResolver } from "@hookform/resolvers/yup";
import { formShema } from "./ModalShema";
import { StyledSpanError } from "../Inputs/style";

export const Modal = ({ title }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onBlur",
    resolver: yupResolver(formShema),
  });
  const { setModal, loadModal, submitFormModal } = useContext(TechContext);

  return (
    <StyledModal>
      {loadModal && <Loading />}
      <StyledBoxModal>
        <header>
          <h2>{title}</h2>
          <button onClick={() => setModal(false)}>
            <VscChromeClose />
          </button>
        </header>
        <form onSubmit={handleSubmit(submitFormModal)}>
          <label>Nome</label>
          <input
            type="text"
            placeholder="Digite o nome da tecnologia"
            {...register("title")}
          />
          {errors.title?.message && (
            <StyledSpanError>{errors.title.message}</StyledSpanError>
          )}
          <label>Selecionar Status</label>
          <select name="" id="" {...register("status")}>
            <option value="">--Selecione</option>
            <option value="Iniciante">Iniciante</option>
            <option value="Intermediário">Intermediário</option>
            <option value="Avançado">Avançado</option>
          </select>
          {errors.status?.message && (
            <StyledSpanError>{errors.status.message}</StyledSpanError>
          )}
          <button type="submit">Cadastrar Tecnologia</button>
        </form>
      </StyledBoxModal>
    </StyledModal>
  );
};
