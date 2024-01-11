const DonateNow = () => {
	return (
		<div
			style={{
				position: "relative",
				overflow: "hidden",
				width: "100%",
				height: "1200px",
				paddingTop: "100%",
			}}
		>
			<iframe
				title='Donation form powered by Zeffy'
				style={{
					position: "absolute",
					border: "0",
					top: "0",
					left: "0",
					bottom: "0",
					right: "0",
					width: "100%",
					height: "100%",
				}}
				src='https://www.zeffy.com/en-US/embed/donation-form/d06a0ab7-cb93-45ae-8677-8f6054efd080'
				allowpaymentrequest
				allowTransparency='true'
			></iframe>
		</div>
	);
};

export default DonateNow;
