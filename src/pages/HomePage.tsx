import React, { useEffect, useState } from 'react';
import { getEnvironmentData } from 'worker_threads';
import { CategoryButton } from '../components/CategoryButton';
import { MovieCard } from '../components/MovieCard';
import { TextField } from '../components/TextField';
import movieimageA from '../assets/icons/images/A.jpg';
import movieimageB from "../assets/icons/images/B.jpg";
import movieimageC from "../assets/icons/images/C.jpg";

const API_KEY = '59a92fde3fe6d1c421e83c1cab77f227'


export type Category = {
  id: number;
  label: string;
  url: string;
  image: string;
 };
 
 const CATEGORY_LIST = [
  { id: 0, label: '인기있는영화', url: '/popular', image:movieimageA },
  { id: 1, label: '현재 상영작', url: '/now_playing', image: movieimageB},
  { id: 2, label: '높은 평점의 인기 영화', url: '/top_rated', image: movieimageC},
  { id: 3, label: '<기생충>과 비슷한 영화', url: '/496243/recommendations', image: movieimageA}
 ];
  
export type Movie = {
  id: number;
  title: string;
  overview: string;
  poster_path: string;
  vote_average: number;
 };
 

export const HomePage = () => {
  const [isLoading, setIsLoading] =useState(true);
  const[movies, setMovies] = useState<Movie[]> ([]);
  const [categoryIndex, setCategoryIndex]= useState(0);

  const setCategory = (index:number) => {
    setCategoryIndex(index);
  }



  const getData = async (categoryIndex:number) => {
    const url= `https://api.themoviedb.org/3/movie${CATEGORY_LIST[categoryIndex].url}?api_key=${API_KEY}&language=ko-KR&page=1`
    const response = await fetch(url);
    if(response.status === 200) {
    //데이터 잘 왔을 때 실행할 내용
    const data= await response.json();
    setMovies(data.results);

    } else {
      throw new Error ("데이터를 받아오지 못했습니다.");
    }
    setIsLoading(false);
  };

useEffect(()=> {
  getData(categoryIndex);
},[categoryIndex]);

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

{CATEGORY_LIST.map((data) => (
<CategoryButton 
key={data.id} 
category={data} 
onClick={setCategory}
isSelected={data.id === categoryIndex} />
))}

</div>
</div>



      {/*<div>
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
  </div> */}


<div className="text-2xl font-bold mb-4">Today's Special</div>

{!isLoading && movies.map((movie) => (
<MovieCard key={movie.id} movie={movie} />
))}



<div className="flex space-x-3">

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


