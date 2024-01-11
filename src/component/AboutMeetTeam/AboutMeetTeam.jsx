"use client"
import Image from 'next/image'
import React, { useCallback, useMemo, useState } from 'react'
import classes from './AboutMeetTeam.module.css';
import { initialMeetTeam } from './meetTeamDate'
const AboutMeetTeam = () => {
    const [team, setTeam] =useState(initialMeetTeam)
    

    const showMore = useCallback((i)=>{
        let teamCopy=[...team];
        if(teamCopy[i].showMoreText){
            teamCopy[i].showMoreText= false
        }
        else{
            teamCopy[i].showMoreText=true
        }
        setTeam(teamCopy)
    },[team])
   const renderInformation = useMemo(()=> {
    return team.map((item, index)=>(
        <div className={classes.inside} key={index}>
            <div className={classes.mainImgDiv}>
                <Image className={classes.mainImg} src={item.image} alt={""}/>
            </div>
            <div className={classes.mainTitle}>{item.name}</div>
            <div className={classes.subTitle}>{item.position}</div>
            <div className={classes.description}>{item.about}</div>
            {item.showMoreText && <div className={classes.description}>{item.moreText}</div>}
            <div className={classes.view} onClick={()=>showMore(index)}>{!item.showMoreText ? "View more" : "View less"}</div>
        </div>
        )
    )
   // eslint-disable-next-line react-hooks/exhaustive-deps
   },[team])
	return (
		<section className={"container"}>
           <div className={classes.whole}>
                <div className={classes.title}>Meet the Team</div>
                <div className={classes.main}>
                    {renderInformation}
                </div>
            </div>
        </section>
	)
}

export default AboutMeetTeam