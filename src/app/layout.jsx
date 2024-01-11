import Script from "next/script";
import logo from "../../public/assets/images/CleanSlateZ.svg";
import medicalImg from "../../public/assets/images/medical.webp";
import Footer from "../component/Footer";
import "./globals.css";
// const inter = Inter({ subsets: ['latin'],variable:'--inter' })
export const metadata = {
	title: "Clean SlateZ",
	description: "",
	keywords:
		"how to get medical bills forgiven, how to get rid of hospital debt, medical debt consolidation, pay off medical debt, how to get medical bills reduced, medical collection debt, help paying medical bills, debt collection medical bills",
};

export default function RootLayout({ children }) {
	const jsonLd = {
		"@context": "https://schema.org",
		"@type": "FundingScheme",
		name: "Clean SlateZ!",
		url: "https://cleanslatez.org/",
		logo: logo.src,
		sameAs: [
			"https://www.facebook.com/profile.php?id=61553798613116",
			"https://twitter.com/cleanslatezorg",
			"https://www.linkedin.com/company/clean-slatez/about/?viewAsMember=true",
		],
	};
	return (
		<html lang='en'>
			<head>
				<meta property='og:url' content='https://cleanslatez.org/' />
				<meta property='og:type' content='website' />
				<meta property='og:title' content='Clean SlateZ ' />
				<meta
					property='og:description'
					content='Offering financial relief to those struggling with medical debt.'
				/>
				<meta property='og:image' content={medicalImg.src} />
				<meta name='twitter:card' content='summary_large_image' />
				<meta property='twitter:domain' content='cleanslatez.org' />
				<meta property='twitter:url' content='https://cleanslatez.org/' />
				<meta name='twitter:title' content='Clean SlateZ ' />
				<meta
					name='twitter:description'
					content='Offering financial relief to those struggling with medical debt.'
				/>
				<meta name='twitter:image' content={medicalImg.src} />

				<link rel='icon' href='/favicon.svg' />

				<Script id='google-analytics-gtm'>
					{`
          (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-N62Q2X8B');
        `}
				</Script>
			</head>
			<body>
				<noscript
					dangerouslySetInnerHTML={{
						__html: `<iframe
								src='https://www.googletagmanager.com/ns.html?id=GTM-N62Q2X8B'
								height='0'
								width='0'
								style='display:none;visibility:hidden'
							></iframe>`,
					}}
				></noscript>

				{children}
				<Footer />
				<Script src='https://www.googletagmanager.com/gtag/js?id=G-B6X3W7RZ1F' />

				<Script id='google-analytics'>
					{`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          
          gtag('config', 'G-B6X3W7RZ1F');;
        `}
				</Script>
				<script
					type='application/ld+json'
					dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
				/>
			</body>
		</html>
	);
}
