import {React,useState} from "react";
import { useForm } from "react-hook-form";

export default function Form() {
  // const { register,handleSubmit} = useForm();
  const { register, handleSubmit, setValue, setError } = useForm();
  const [formData, updateFormData] = useState({
    firstName:''
  });
  // const [value,setValue] = useState('');
  const onSubmit = (data) => 
  { updateFormData(data);
    console.log("data",data.firstName);
  }
  // console.log(formData);
//   const handleSubmit = (data) => {
//     // e.preventDefault()
//     console.log("formdata1",data);
// }
console.log("formdata2",formData.firstName);
  // const handleChange = (e) => {
  //   updateFormData({
  //     ...formData,
  //     [e.target.name]: e.target.value.trim()
  //   });
  // };
   
  return (
    // <form onSubmit={handleSubmit}>
    <form onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="firstName">First Name</label>
      {/* <input {...register("firstName", { onChange: {handleChange} })}  /><br/> */}
      <input
      name="firstName"
      {...register("firstName", { required: true })}
        onChange={e => setValue("firstName", e.target.value)}
        />
      <label htmlFor="gender">Gender</label>
      <select {...register("gender")}>
        <option value="female">female</option>
        <option value="male">male</option>
        <option value="other">other</option>
      </select>
      <input type="submit" />
    </form>
  );
}