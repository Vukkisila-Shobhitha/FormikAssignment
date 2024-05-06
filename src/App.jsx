import { useFormik } from 'formik';


const validate = values => {
  const errors = {};

  if (!values.name) {
    errors.name = 'Name is required';
    
  }
  

if (!values.email) {
  errors.email = 'Email is required';
  
}
else if(!/^[A-Z-9._%+-]+@[A-Z-9.-]+\.[A-Z]{2,4}$/i.test(values.email))
{
  errors.email = 'Invalid email address';
}
if (!values.password) {
  errors.password = 'Password is required';
}
return errors;
}

const App = () => {

  const formik = useFormik({
    initialValues: {
      email: '',
      name:'',
      password:''
    },
    onSubmit: values => {
      console.log(values);
    }
  });

  return (
    <form onSubmit={formik.handleSubmit}>
     <input 
        type="text"
        placeholder='Name...'
        name='name'
        id='name'
        value={formik.values.name}
        onChange={formik.handleChange}
        />
        <div>
        {formik.errors.name ? <div>{formik.errors.name}</div> : null}
        </div>
        
        <br></br>
        <br></br>
      <input 
        type="email"
        placeholder='Email...'
        name='email'
        id='email'
        value={formik.values.email}
        onChange={formik.handleChange}
       
      />
      <div>
      {formik.errors.email ? <div>{formik.errors.email}</div> : null}
      </div>
      <br></br>
      <br></br>
      
       <input 
        type="password"
        placeholder='Password...'
        name='password'
        id='password'
        value={formik.values.password}
        onChange={formik.handleChange}
        />
      <button type='submit'>Signup</button>
    </form>
  )
}

export default App;