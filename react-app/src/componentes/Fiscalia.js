import React from "react";
import ReactDOM from "react-dom";
import { useForm } from "react-hook-form";

import "./style.css";

const Fiscalia = (props) => {

 function Form() {
  const { register, handleSubmit } = useForm();

  const onSubmit = (info) => {
    console.log(info);
  };

  const messages = {
    req: "Este campo es obligatorio"
   };
   
   const { formState: { errors } } = useForm();

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="name">Nombre</label>
      <input name="name" type="text" {...register("name",{ required: messages.req  }) } />
      {errors.mail && <p>{errors.mail.message}</p>}
      <label htmlFor="phone">Teléfono</label>
      <input name="phone" type="tel"  {...register("phone",{ required: messages.req  })} />

      <label htmlFor="direccion">Dirección</label>
      <input name="direccion" type="text" {...register("direccion",{ required: messages.req  })} />
  

      <label htmlFor="municipio">Municipio</label>
      <input name="municipio" type="text" {...register("municipio")} />
      <input type="submit" />

     
    </form>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<Form />, rootElement);
};


export default Fiscalia;