import React, {useState} from 'react';
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";
import DefaultLayout from '../layouts/DefaultLayout'
import { Form } from 'antd'
import TextInput from '../shared/TextInput'
import PasswordInput from '../shared/PasswordInput'

const Login: React.FC = () => {
  const [form] = Form.useForm();
  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState(false as boolean)

  const onFinish = async (values: any) => {
    setIsLoading(true)
    try {
      const userCredential: any = await auth.signInWithEmailAndPassword(values.email_address, values.password)
      if(userCredential.user) {
        setIsLoading(false)
        auth.currentUser?.getIdTokenResult()
        .then((idTokenResult: any) => {
          if (!!idTokenResult.claims.admin) {
            console.log('i am an admin');

          } else {
            console.log('i am a HR user');
            navigate('/hr')
          }
        })
      }
      
    } catch (error: any) {
      setIsLoading(false)
      console.log('error', error);
    }
    
  }

  return (
    <DefaultLayout>
      <div className='grid grid-cols-2 h-screen'>
        <div className='bg-green-700 flex justify-center items-center px-20'>
          <h3 className='text-white text-5xl font-semibold text-center'>Welcome back to Duplo</h3>
        </div>
        <div className='py-32 px-8'>
        <h3 className='text-gray-700 text-xl font-medium'>Please fill all fields</h3>
        <div className='py-5 w-[60%]'>
          <Form name='basic' onFinish={onFinish} autoComplete='off' form={form}>
            <div className='flex flex-col gap-3'>
              <p>Email Address</p>
              <TextInput name="email_address" placeholder='Your email address' />
            </div>
            <div className='flex flex-col gap-3'>
              <p>Password</p>
              <PasswordInput name="password" placeholder='Enter your password' />
            </div>
            <button
                type='submit'
                className='flex justify-center items-center w-full bg-black text-white py-2.5 mt-4 rounded-sm font-bold'
              >
                {isLoading ? 'submitting...' : 'Submit'
              }</button>
          </Form>
        </div>
        </div>
      </div>
    </DefaultLayout>
  )
}


export default Login;