import React from 'react'
import ProgramsPointLeft from './ProgramsPointLeft'
import ProgramsPointRight from './ProgramsPointRight'

const ProgramsPoint = ({position}) => {
	return (
		<>
		{
				position === 'left' ? <ProgramsPointLeft /> : <ProgramsPointRight />
		}
		</>
	)
}

export default ProgramsPoint