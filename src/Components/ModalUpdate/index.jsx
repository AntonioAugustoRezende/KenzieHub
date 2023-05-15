import { Loading } from "../Loading";
import { StyledModal } from "../Modal/style";
import { VscChromeClose } from "react-icons/vsc";
import { useForm } from "react-hook-form";
import { useContext } from "react";
import { TechContext } from "../../Contexts/TechContext";
import { StyledBoxModalUdpate } from "./style";
import { yupResolver } from "@hookform/resolvers/yup";
import { formShema } from "./ModalUpdateShema";
import { StyledSpanError } from "../Inputs/style";

export const ModalUpdate = ({ title }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onBlur",
    resolver: yupResolver(formShema),
  });
  const {
    setModalUpdate,
    loadModalUpdate,
    submitFormModalUpdate,
    titleTech,
    deleteTech,
    id,
  } = useContext(TechContext);
  return (
    <StyledModal>
      {loadModalUpdate && <Loading />}
      <StyledBoxModalUdpate>
        <header>
          <h2>{title}</h2>
          <button onClick={() => setModalUpdate(false)}>
            <VscChromeClose />
          </button>
        </header>
        <form onSubmit={handleSubmit(submitFormModalUpdate)}>
          <label>Nome</label>
          <input disabled="disabled" type="text" placeholder={titleTech} />
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
          <div>
            <button type="submit">Salvar alterações</button>
            <button
              type="button"
              onClick={() => {
                deleteTech(id);
                setModalUpdate(false);
              }}
            >
              Excluir
            </button>
          </div>
        </form>
      </StyledBoxModalUdpate>
    </StyledModal>
  );
};
