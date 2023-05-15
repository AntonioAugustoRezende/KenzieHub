import { useContext } from "react";
import { useEffect } from "react";
import { toast } from "react-toastify";
import { UserContext } from "../../Contexts/UserContext";

export const ToastLogin = () => {
  const { responseRegister } = useContext(UserContext);
  useEffect(() => {
    if (responseRegister === 201) {
      toast.success("Cadastro feito com sucesso!");
    }
  }, [responseRegister]);
  return <></>;
};
