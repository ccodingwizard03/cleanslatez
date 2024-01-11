import AboutClean from "../../component/AboutClean"
import AboutContact from "../../component/AboutContact";
import AboutHeaderWrap from "../../component/AboutHeaderWrap";
import AboutMeetTeam from "../../component/AboutMeetTeam";
import AboutTeam from "../../component/AboutTeam";
import Header from "../../component/Header";
export const metadata = {
  title: 'How to Pay Off Medical Bills, Hospital Debt Forgiveness',
  description: 'Our mission is to help those struggling with medical debt. Together, we can reset everyone to Clean SlateZ! Donate now!',
	keywords:"how to pay off medical bills, hospital debt forgivenessn"
}
const About = () => {
	return (
		<>
			<AboutHeaderWrap>
				<Header />
			</AboutHeaderWrap>
			<main>
				<AboutClean />
				<AboutTeam />
				<AboutMeetTeam />
				<AboutContact />
			</main>
		</>
	);
};

export default About;
