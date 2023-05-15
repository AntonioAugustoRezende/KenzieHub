import * as Yup from "yup";

export const formShema = Yup.object().shape({
  name: Yup.string().required("Nome obrigatório"),
  email: Yup.string().email().required("Email is required"),
  bio: Yup.string().required("Bio obrigatório"),
  course_module: Yup.string().required("Modulo obrigatório"),
  contact: Yup.string().required("Contato obrigatório"),
  password: Yup.string()
    .required("Senha obrigatória")
    .min(8, "Deve ter no maximo 8 caracteres")
    .matches(/(?=.*?[A-Z])/, "Senha precisa de alguma letra maiúscula")
    .matches(/(?=.*?[a-z])/, "Senha precisa de alguma letra minúscula")
    .matches(/(?=.*?[0-9])/, "A senha precisa conter algum número")
    .matches(
      /(?=.*?[#?!@$%^&*-])/,
      "A senha precisa conter algum caracter especial"
    )
    .matches(/.{8,}/, "A senha precisa conter no mínimo 8 caracteres"),
  passwordConfirmation: Yup.string()
    .required("Senha de confirmação obrigatória")
    .oneOf([Yup.ref("password"), null], "Senhas não são iguais"),
});
