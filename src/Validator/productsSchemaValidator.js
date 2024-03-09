import * as yup from "yup";
export const newProductsSchema = yup.object().shape({
  productName: yup.string().min(3).required("Product Name is required"),
  price: yup
    .number()
    .typeError("Price must be a number")
    .min(10)
    .required("price is required"),
  description: yup.string().required("Description is required"),
  file: yup.mixed().required("Please upload at least one image"),
});
