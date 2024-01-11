import React from 'react'
import classes from './Faqs.module.css';
import Header from '../../component/Header'
import dynamic from 'next/dynamic'
const FaqsAccordionDynamic = dynamic(
  () => import('../../component/FaqsAccordion'),
  { ssr: false }
)
const Faqs = () => {
	return (
		<>
		<header className={classes.smallScreens}>
                <div className={classes.whole}>
                    <Header/>
                </div>
      </header>
			<FaqsAccordionDynamic />
                {/* <FAQComponent/> */}
                
		</>
	)
}

export default Faqs