import { useContext, useEffect, useState } from "react";
import { ToastContainer } from "react-toastify";
import { Header } from "../../Components/Header";
import { UserContext } from "../../Contexts/UserContext";
import { StyledMain } from "./style";
import { ImPlus } from "react-icons/im";
import { ListTecnologies } from "../../Components/ListTecnologies";
import { CardTecnology } from "../../Components/CardsTecnologies";
import { Modal } from "../../Components/Modal";
import { api } from "../../Services/api";
import "react-toastify/dist/ReactToastify.css";
import { TechContext } from "../../Contexts/TechContext";
import { Loading } from "../../Components/Loading";
import { ModalUpdate } from "../../Components/ModalUpdate";

export const DashboardPage = () => {
  const { user } = useContext(UserContext);
  const { modal, setModal, load, modalUpdate } = useContext(TechContext);
  const [techs, setTechs] = useState(user.techs);

  useEffect(() => {
    /*  console.log(techs); */

    //Atualiza as Techs do usuário quando criado no modal e quando entra na pagina

    async function atualizationTechs() {
      const token = window.localStorage.getItem("@TOKEN");
      try {
        const { data } = await api.get("/profile", {
          headers: {
            authorization: `Bearer ${token}`,
          },
        });
        // State para armazenar as Techs
        setTechs(data.techs);
      } catch (error) {
        console.error(error);
      }
    }
    atualizationTechs();
  }, [techs]);

  return (
    <>
      {load && <Loading />} {/* Efeito de loading */}
      {modal && <Modal title="Cadastrar Tecnologia" />}{" "}
      {/* Modal para criar Techs */}
      {modalUpdate && <ModalUpdate title="Tecnologia Detalhes" />}{" "}
      {/* Modal para atualizar as techs */}
      <Header />
      <StyledMain>
        <section>
          <div>
            <h2>Olá, {user.name}!</h2>
            <span>{user.course_module} - Kenzie Academy</span>
          </div>
        </section>
        <section>
          <div>
            <h2>Tecnologias</h2>
            <button onClick={() => setModal(true)}>
              <ImPlus />
            </button>
          </div>
          {/* Renderização condicional ==> Se houver techs no state vai aparecer a UL */}
          {techs !== [] && (
            <ListTecnologies>
              {techs.lenght !== 0 &&
                techs.map((tech) => {
                  return (
                    <CardTecnology
                      key={tech.id}
                      id={tech.id}
                      title={tech.title}
                      status={tech.status}
                    />
                  );
                })}
            </ListTecnologies>
          )}
        </section>
      </StyledMain>
      <ToastContainer
        position="top-right"
        autoClose={2000}
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
