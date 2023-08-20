import React from 'react'
import style from './page.module.css'
import Link from 'next/link'
const page = () => {
  return (
    <div className={style.container}>
 <h1 className={style.Title}>Choose a gallery</h1>
 <div className={style.items}>
 <Link href="/portfolio/illustrations" className={style.item}>
          <span className={style.title}>Illustrations</span>
</Link>
<Link href="/portfolio/websites" className={style.item}>
          <span className={style.title}>websites</span>
</Link>
<Link 
href="/portfolio/application" className={style.item}>
          <span className={style.title}>Application</span>
        </Link>

 </div>
      
    </div>
  )
}

export default page
