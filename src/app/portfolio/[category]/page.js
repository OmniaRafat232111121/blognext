import React from 'react'
import style from './page.module.css'
import {items }from './data'
import Button from '../../../components/Button/Button'
import Image from 'next/image'
import { notFound } from "next/navigation";

const getData=(cat)=>{
  const data=items[cat];
  if (data){
    return data;
  }
  return notFound();
}
const page = ({params}) => {
    const data = getData(params.category);

  return (
    <div className={style.container}>
        <h1>Our work</h1>
        <h3>{params.category}</h3>

       
      {data.map((item) => (
        <div className={style.item} key={item.id}>
          <div className={style.content}>
            <h1 className={style.title}>{item.title}</h1>
            <p className={style.desc}>{item.desc}</p>
            <Button text="See More" url="#" />
          </div>
          <div className={style.imgContainer}>
            <Image
              className={style.img}
              fill={true}
              src={item.image}
              alt=""
            />
          </div>
        </div>
      ))}
      

    </div>
  )
}

export default page
