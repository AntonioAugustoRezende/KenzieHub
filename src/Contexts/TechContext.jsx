import { createContext, useState } from "react";

import { toast } from "react-toastify";
import { api } from "../Services/api";

export const TechContext = createContext({});

export const ProvidersTech = ({ children }) => {
  // Loading do modal para criar techs
  const [loadModal, setLoadModal] = useState(false);
  // Loading do modal para atualizar techs
  const [loadModalUpdate, setLoadModalUpdate] = useState(false);
  // Loading do modal para deletar techs
  const [load, setLoad] = useState(false);
  //State para abrir modal para criar a Techs
  const [modal, setModal] = useState(false);
  //State para abrir modal para atualizar a Techs
  const [modalUpdate, setModalUpdate] = useState(false);
  /* State usado para salvar o title da Tech para ser usado no placeholder desabilitado modal de Update */
  const [titleTech, setTitleTech] = useState("");
  /* State usado para armazenar o ID do card clicado para ser usado para deletar a Tech do modal Update */
  const [id, setId] = useState("");

  /* Funcao do evento submit do form do modal para fazer a requisicao para criar uma Tech */
  const submitFormModal = async (data) => {
    const token = window.localStorage.getItem("@TOKEN");
    try {
      setLoadModal(true);
      api.defaults.headers.common.authorization = `Bearer ${token}`;
      const response = await api.post("/users/techs", data);
      toast.success("Tecnologia adicionada com sucesso");
      setModal(false);
      return response;
    } catch (error) {
      toast.error("Ops! Algo deu errado");
      console.error(error);
    } finally {
      setLoadModal(false);
    }
  };

  /* Funcao do evento submit do modal para atualizar as techs */
  const submitFormModalUpdate = async (data) => {
    const token = window.localStorage.getItem("@TOKEN");
    try {
      setLoadModalUpdate(true);
      api.defaults.headers.common.authorization = `Bearer ${token}`;
      const response = await api.put(`/users/techs/${id}`, data);
      toast.success("Tecnologia modificada com sucesso");
      setModalUpdate(false);
      return response;
    } catch (error) {
      toast.error("Ops! Algo deu errado");
      console.error(error);
    } finally {
      setLoadModalUpdate(false);
    }
  };

  /* Funcao para deletar as techs */

  const deleteTech = async (id) => {
    const token = window.localStorage.getItem("@TOKEN");
    try {
      setLoad(true);
      api.defaults.headers.common.authorization = `Bearer ${token}`;
      const response = await api.delete(`/users/techs/${id}`);
      toast.success("Tecnologia removida com sucesso");
      return response;
    } catch (error) {
      toast.error("Ops! Algo deu errado");
      console.error(error);
    } finally {
      setLoad(false);
    }
  };
  return (
    <TechContext.Provider
      value={{
        modal,
        setModal,
        loadModal,
        submitFormModal,
        deleteTech,
        load,
        setModalUpdate,
        modalUpdate,
        loadModalUpdate,
        submitFormModalUpdate,
        setTitleTech,
        titleTech,
        setId,
        id,
      }}
    >
      {children}
    </TechContext.Provider>
  );
};
