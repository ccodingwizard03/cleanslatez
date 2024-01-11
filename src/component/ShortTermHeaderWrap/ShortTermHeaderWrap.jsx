import React from 'react'
import classes from "./ShortTermHeaderWrap.module.css";
const ShortTermHeaderWrap = ({children}) => {
	return (
		<header className={classes.whole}>
            <div className={classes.main}>
               {children}
                    <div className={classes.middle}>
                        <div className={classes.title}> We are currently preparing our Application. We expect to have
                            this completed and available within the next 30-days. Please check back to apply for
                            assistance, or send an email to us and we will notify you when you the application is live.
                            Our email is: applicants@cleanslatez.org
                        </div>
                    </div>
            </div>
        </header>
	)
}

export default ShortTermHeaderWrap