import * as Yup from "yup";

export const formShema = Yup.object().shape({
  email: Yup.string().email().required("Email é obrigatório"),
  password: Yup.string()
    .required("Senha obrigatória")
    .matches(/.{8,}/, "A senha precisa conter no mínimo 8 caracteres"),
});
