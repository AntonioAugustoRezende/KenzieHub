import { StyledCard } from "./style";
import { HiTrash } from "react-icons/hi2";
import { useContext } from "react";
import { TechContext } from "../../Contexts/TechContext";

export const CardTecnology = ({ title, status, id }) => {
  const { deleteTech, setModalUpdate, setTitleTech, setId } =
    useContext(TechContext);

  return (
    <StyledCard>
      <button
        onClick={() => {
          setModalUpdate(true);
          /* State usado para salvar o title da Tech para ser usado no placeholder desabilitado modal de Update */
          setTitleTech(title);
          /* State usado para armazenar o ID do card clicado para ser usado para deletar a Tech do modal Update */
          setId(id);
        }}
      >
        {title}
      </button>
      <div>
        <span>{status}</span>
        <button onClick={() => deleteTech(id)}>
          <HiTrash />
        </button>
      </div>
    </StyledCard>
  );
};
