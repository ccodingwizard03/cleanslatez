"use client"


import Image from "next/image";
import Minus from "../../../public/assets/icons/Minus.svg";
import MinusWithBackground from "../../../public/assets/icons/MinusWithbackground.svg";
import Plus from "../../../public/assets/icons/Plus.svg";
import PlusWithBackground from "../../../public/assets/icons/PlusWithBackground.svg";
import classes from "./FaqsAccordion.module.css";
// import Letter from "../../assets/files/ConsentLetter.docx";
// import pdfFile from "../../../public/assets/files/IRS.pdf";
import { useState } from 'react'
import { initialState } from './FaqsAccordionDate'
const FaqsAccordion = () => {
	const [types, setTypes] = useState(initialState);

	let handleOpenQuestions = index => {
		if (types[index].showQuestions) {
			types[index].showQuestions = false;
		} else {
			types[index].showQuestions = true;
		}
		setTypes([...types]);
	};

	let toggleAnswer = (index, inx) => {
		if (types[index].questions[inx].showAnswer) {
			types[index].questions[inx].showAnswer = false;
		} else {
			types[index].questions[inx].showAnswer = true;
		}
		setTypes([...types]);
	};

	let switchForAnswer = (parameter, answer) => {
		switch (parameter) {
			case "Are my donations tax deductible?":
				return (
					<div className={classes.answer}>
						Yes. We have received 501(c)3 status as a charity and your donations
						are 100% tax deductible. <br />
						Click
						<span style={{ marginLeft: "5px", marginRight: "5px" }}>
						<a
								style={{
									color: "#102F5E",
									textDecoration: "underlined",
									fontWeight: "bold",
									display: "inline-block"
								}}
								href={'./assets/files/IRS.pdf'}
								download='IRS 501(c)3.pdf'
								target='_blank'
								onClick={() => window.open(`./assets/files/IRS.pdf`)}
							>
								here
							</a>
						</span>
						to view our IRS 501(c)3 determination letter.
					</div>
				);
			case "Why do you need me to authorize a consent form?":
				return (
					<div className={classes.answer}>
						This form will be sent to your creditors, to provide proof that you
						have authorized us to speak on your behalf. Use of this form allows
						us to more quickly resolve medical debt, and do this without trying
						to coordinate 3-way calls with you and the creditor, or getting your
						authorization account by account. The consent form only authorizes
						us to work to resolve the medical debt that you reported to us in
						your application, nothing more.
						<br />
						Click
						<span style={{ marginLeft: "5px", marginRight: "5px" }}>
						<a
								style={{
									color: "#102F5E",
									textDecoration: "underlined",
									fontWeight: "bold",
									display: "inline-block"
								}}
								href={'./assets/files/ConsentLetter.docx'}
								download='ConsentLetter.docx'
								target='_blank'
							>
								here
							</a>
						</span>
						to view the consent form.
					</div>
				);
			default:
				return <div className={classes.answer}>{answer}</div>;
		}
	};

	const renderTypes = types.map((item, index) => (
		<>
			<div
				className={classes.typeWhole}
				key={index}
				onClick={() => handleOpenQuestions(index)}
			>
				<div className={classes.typeLeft}>{item.name}</div>
				<div className={classes.typeRight}>
					{item.showQuestions ? (
						<Image src={MinusWithBackground} alt={""} />
					) : (
						<Image src={PlusWithBackground} alt={""} />
					)}
				</div>
			</div>
			{item.showQuestions &&
				item.questions.map((single, inx) => (
					<div className={classes.questionSection} key={inx}>
						<div className={classes.upPart}>
							<div className={classes.upLeft}>
								<div className={classes.question}>{single.question}</div>
							</div>
							<div
								className={classes.upRight}
								onClick={() => {
									toggleAnswer(index, inx);
								}}
							>
								{single.showAnswer ? (
									<Image src={Minus} alt={"plus image"} />
								) : (
									<Image src={Plus} alt={"plus image"} />
								)}
							</div>
						</div>
						{single.showAnswer &&
							switchForAnswer(single.question, single.answer)}
					</div>
				))}
		</>
	));

	return (
		<div className={"container"}>
			<div className={classes.title}>How can we help?</div>
			<div className={classes.inside}>{renderTypes}</div>
		</div>
	);
};

export default FaqsAccordion;
