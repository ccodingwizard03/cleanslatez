import Header from "../component/Header";
import HomeHeaderWrap from "../component/HomeHeaderWrap";

import Absolutely from "../component/Absolutely";
import MedicalDebt from "../component/MedicalDebt";
import TensMillions from "../component/TensMillions";
export const metadata = {
  title: 'Help for Medical Bills, Hospital Debt Relief - Clean SlateZ',
  description: 'Clean SlateZ - Our Application and Wholesale programs can effectively wipe off medical debt for qualified individuals. Please consider donating today.',
}
export default function Home() {
	return (
		<>
			<HomeHeaderWrap>
				<Header/>
			</HomeHeaderWrap>
			<main>
				<MedicalDebt />
				<TensMillions />
				<Absolutely />
			</main>
		</>
	);
}
