import React from 'react'
import style from './page.module.scss'

type PageProps = {
  children: any
}

export function Page(props: PageProps){
  return (
    <div className={style.wrapper}>
      { props.children }
    </div>
  )
}
