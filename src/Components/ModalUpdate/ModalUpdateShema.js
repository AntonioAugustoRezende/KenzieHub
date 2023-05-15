import * as Yup from "yup";

export const formShema = Yup.object().shape({
  status: Yup.string().required("Status obrigatório"),
});
