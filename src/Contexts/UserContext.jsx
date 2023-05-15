import { createContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { api } from "../Services/api";

export const UserContext = createContext({});

export const Providers = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [userLoading, setUserLoading] = useState(true);
  const [responseRegister, setResponseRegister] = useState([]);
  const navigate = useNavigate();
  const { reset } = useForm();

  useEffect(() => {
    async function loaderUser() {
      const token = window.localStorage.getItem("@TOKEN");
      if (!token) {
        setUserLoading(false);
        return;
      }
      try {
        const { data } = await api.get("/profile", {
          headers: {
            authorization: `Bearer ${token}`,
          },
        });

        setUser(data);
      } catch (error) {
        window.localStorage.clear();
        console.error(error);
      } finally {
        setUserLoading(false);
      }
    }
    loaderUser();
  }, []);

  const handleNavigate = () => {
    navigate("/");
  };
  const onSubmitFormLogin = async (data) => {
    try {
      setLoading(true);
      const response = await api.post("/sessions", data);
      setUser(response.data.user);
      window.localStorage.clear();
      window.localStorage.setItem("@TOKEN", response.data.token);
      window.localStorage.setItem("@USERID", response.data.user.id);
      reset();
      navigate(`/user/${response.data.user.id}`);
    } catch (error) {
      console.log(error);

      toast.error("Algo deu errado");
    } finally {
      setLoading(false);
    }
  };

  const onSubmitFormRegister = async (data) => {
    delete data.passwordConfirmation;
    try {
      setLoading(true);
      const response = await api.post("/users", data);

      setResponseRegister(response.status);

      if (response.data.status === "error") {
        toast.error(`${response.data.message}`);
      } else {
        /* toast.success("Cadastro efetuado com sucesso"); */

        handleNavigate();
      }
    } catch (error) {
      console.log(error);
      toast.error("Algo deu errado");
    } finally {
      setLoading(false);
    }
  };

  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
        loading,
        onSubmitFormRegister,
        onSubmitFormLogin,
        userLoading,
        responseRegister,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
