import React from 'react';
import { TextField } from '../components/TextField';
export const HomePage = () => {
  return ( 
    <div className="m-4 space-y-10">
      <div className="space-y-4">
        <div className="text-2xl font-bold mb-4">New</div>
        <img src="https://images.unsplash.com/photo-1649635838591-06aed0dd9bf9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80" 
        alt=""
        className="w-full h-72 object-cover rounded-2xl" />

      </div>
      

<div className="space-y-4">
<div className="text-2xl font-bold">Category</div>

<div className='flex space-x-6'>


  <div>
    <img src='https://images.unsplash.com/photo-1579398937948-598009379315?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80' 
    alt=''
    className='w-20 h-20 object-cover rounded-full'/>
    <div className='text-center'>일식</div>
  </div>

  <div>
    <img src='https://images.unsplash.com/photo-1635685296916-95acaf58471f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=776&q=80'
    alt=''
    className='w-20 h-20 object-cover rounded-full'/>
    <div className='text-center'>중식</div>
  </div>

  <div>
    <img src='https://images.unsplash.com/photo-1608731001805-187e9c904388?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80'
    alt=''
    className='w-20 h-20 object-cover rounded-full'/>
    <div className='text-center'>한식</div>
  </div>

  <div>
    <img src='https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80'
    alt=''
    className='w-20 h-20 object-cover rounded-full'/>
    <div className='text-center'>양식</div>
  </div>

</div>


</div>




      <div>
      <div className="text-2xl font-bold mb-4">List</div>

      <div className="border p-4 rounded-md">
        <div>
        <img src='https://source.unsplash.com/random'
        alt=''
        className='w-full h-60 object-cover rounded-xl'/>
        <div className="mt-4">
          <div className="text-lg font-semibold">Card</div>
          <div className='text-gray-500'>
          Sed vel turpis adipiscing penatibus orci neque. Erat sed fermetum ipsum vel quis quam. Nunc etiam dui tortor, non in aliquan lacinia tmepor.
          </div>
<div className='mt-4 flex space-x-3 justify-end'>
  <div className='bg-gray-800 rounded-md text-white text-center py-2.5 px-4'>button</div>
  <div className='bg-gray-800 rounded-md text-white text-center py-2.5 px-4'>button</div>
  </div>
          </div>
        </div>
        </div>
        </div>

<div className='ml-3'>
<div className="text-2xl font-bold mb-4">Today's Special</div>
<div className='flex'>
<img src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80"
alt=""
className="w-32 h-48 object-cover rounded-2xl"/>
<div className='ml-4'>
<div className='font-bold text-xl mb-4'>식당 이름</div>
<div className='text-gray-700'>말이 필요 없는 서울 최고의</div>
<div className='text-gray-700 mb-1'>식당 중 하나</div>
<div className='text-gray-400'>서울시 강남구 청담동</div>
</div>
</div>

gi
<div className='py-5'></div>

<div>
<img src='https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80'
alt=''
className='w-full h-60 object-cover rounded-2xl mb-4'/>

<div>
<div className='font-bold text-xl mb-4'>이화여대 아맛나 식당</div>
<div className=''>
<div className='text-gray-700'>서울특별시 서대문구 대현동 11-1</div>
<div className='text-gray-700'>02-1234-5678</div>
<div className='text-gray-700'>MON-SUN 12:00PM - 9:00PM</div>
</div>

<div className='mt-5 bg-black text-white py-3 text-center rounded-full'>네이버 지도로 길 찾기</div>

</div>

</div>

  

</div>








        </div>


);
}


