import React, {useState} from 'react';
import { useNavigate } from "react-router-dom";
import { auth, firestore } from "../firebase";
import DefaultLayout from '../layouts/DefaultLayout'
import { Form } from 'antd'
import TextInput from '../shared/TextInput'
import PasswordInput from '../shared/PasswordInput'

// type NotificationType = 'success' | 'error'

const SignUp: React.FC = () => {
  const [form] = Form.useForm();
  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState(false as boolean)

  const onFinish = async (values: any) => {
    setIsLoading(true)
    try {
      const userCredential: any = await auth.createUserWithEmailAndPassword(values.email_address, values.password)
      await firestore.collection("users").doc(userCredential.user.uid).set({
      role: "hr",
    })
      setIsLoading(false)
      form.resetFields()
      navigate('/login')
      
    } catch (error: any) {
      setIsLoading(false)
      console.log('error', error);
    }
  }

  return (
    <DefaultLayout>
      <div className='grid grid-cols-2 h-screen'>
        <div className='bg-green-700 flex justify-center items-center px-20'>
          <h3 className='text-white text-5xl font-semibold text-center'>Create an account with Duplo</h3>
        </div>
        <div className='py-32 px-8'>
          <h3 className='text-gray-700 text-xl font-medium'>Please fill all fields</h3>
          <div className='py-5 w-[60%]'>
            <Form name='basic' onFinish={onFinish} autoComplete='off' form={form}>
              <div className='flex flex-col gap-3'>
                <p>First Name</p>
                <TextInput name="first_name" placeholder='Your first name' />
              </div>
              <div className='flex flex-col gap-3'>
                <p>Last Name</p>
                <TextInput name="last_name" placeholder='Your last name' />
              </div>
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

export default SignUp