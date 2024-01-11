import DonateCreating from "../../component/DonateCreating";
import DonateHeaderWrap from "../../component/DonateHeaderWrap";
import DonateHelp from '../../component/DonateHelp'
import DonateInfo from "../../component/DonateInfo";
import Header from "../../component/Header";
export const metadata = {
  title: 'Medical Bills, Debt Charity, Health Care Donation, Grants',
  description: 'Stand with Clean SlateZ. Change a life by erasing a medical debt. Our two transformative programs are dedicated to alleviate the obligation of medical debt.',
	keywords:"medical bill grants, medical charity organizations, charity help for medical bills, medical bills charity, health care donation"
}
export default function Donate() {
	return (
		<>
			<DonateHeaderWrap>
				<Header />
			</DonateHeaderWrap>
			<main>
				<DonateInfo />
				<DonateCreating />
        <DonateHelp />
			</main>
		</>
	);
}
