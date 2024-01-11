import BannerSection from "../../component/BannerSection";
import Header from "../../component/Header";
import ProgramsHeaderWrap from "../../component/ProgramsHeaderWrap";
import ProgramsPoint from "../../component/ProgramsPoint";
export const metadata = {
  title: 'Medical Bill Forgiveness, Debt Relief Programs, Fundraising Ideas',
  description: 'Clean SlateZ - Our Application and Wholesale programs can effectively wipe off medical debt for qualified individuals. Please consider donating today.',
	keywords:"payment plan for medical bills, medical debt forgiveness programs, medical bill forgiveness programs, medical debt relief programs"
}
const Programs = () => {
	return (
		<>
			<ProgramsHeaderWrap>
				<Header />
			</ProgramsHeaderWrap>
			<main>
				<ProgramsPoint />
				<BannerSection
					descShort={
						"While the debt erasure is less, the profound impact on the individuals is high."
					}
					descLong={
						"The Application Program has the most impact at the individual level, we cannot settle most of this debt as cheaply as we can purchase in bulk through our Wholesale Program. However, the benefit to this program is that we are targeting a complete abolishment of medical debt person-by-person. This program has the most meaningful immediate impact on each individual.  Donor dollars have an anticipated median impact of 50 to 1, meaning your $10 donation can abolish up to  $500 in debt."
					}
				/>
				<ProgramsPoint position='left' />
				<BannerSection
					descShort={
						"Any recipient of debt relief from our Wholesale Program that has remaining delinquent medical debt can apply for our Application Program to abolish their remaining debt.  Allowing us to merge these two fantastic programs into the best outcome in the least expensive manner possible"
					}
					descLong={
						"The Wholesale Program lets us stretch our donors’ dollars the farthest with a 100 x 1 impact, meaning your $10 can abolish up to $1,000 in medical debt.  The only drawback is that a significant number of families have more than one unpaid medical debt, and it could leave them with other medical debt obligations.  This program provides great value, but it is not achieving a complete clean slate that we are striving for."
					}
				/>
			</main>
		</>
	);
};

export default Programs;
