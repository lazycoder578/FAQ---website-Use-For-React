import React,{useState} from 'react'
import {faqsData} from './data'
import FAQ from './FAQ'
import style from './faqs.module.css'

const FAQS = () => {
    const [faqs,setFaqs]=useState(faqsData)
  return (
    <main className={style.container}>
        <section className={style.faqs}>
            {faqs.map(faq=> <FAQ key={faq.id} {...faq}/>)}
        </section>
    </main>
  )
}

export default FAQS