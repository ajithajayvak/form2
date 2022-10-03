import * as yup from "yup";
export const basicSchema = yup.object().shape({
  name: yup.string().required("Required"),
  email: yup.string().email("Please enter valid email").required("Required"),
  phone: yup.number().required("required"),
});
