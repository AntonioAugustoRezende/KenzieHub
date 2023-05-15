import * as Yup from "yup";

export const formShema = Yup.object().shape({
  title: Yup.string().required("Tecnologia obrigatória"),
  status: Yup.string().required("Status obrigatório"),
});
