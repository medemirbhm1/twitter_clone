import { useField } from "formik";

export const MyTextArea = ({ ...props }) => {

  const [field] = useField(props);
  return (
    <>
      <textarea className="text-area" {...field} {...props} />
    </>
  );
};
