const disallowedConductItems = (businessName) => ([
	'upload, post, email, transmit, or otherwise make available any User Content that is unlawful, harmful,threatening, abusive, harassing, tortious,defamatory, vulgar, obscene, libelous, invasive of another’s privacy, hateful, or racially, ethnically, or otherwise objectionable',
	'harm minors in any way',
	`impersonate any person or entity, including, but not limited to, a ${businessName} official, forum leader, guide or host, or falsely state or otherwise misrepresent your affiliation with a person or entity`,
	'forge headers or otherwise manipulate identifiers in order to disguise the origin of any User Content transmitted through the Site',
	'upload, post, email, transmit, or otherwise make available any User Content that you do not have a right to make available under any law or under contractual or fiduciary relationships',
	'upload, post, email, transmit, or otherwise make available any User Content that infringes any patent, trademark, trade secret, copyright or other proprietary rights ("Rights") of any party',
	'upload, post, email, transmit, or otherwise make available any unsolicited or unauthorized advertising, promotional materials, "junk mail," "spam," "chain letters," "pyramid schemes," or any other form of solicitation, except in those areas that may be designated for such purpose',
	'upload, post, email, transmit, or otherwise make available any material that contains software viruses or any other computer code, files, or programs designed to interrupt, destroy, or limit the functionality of any computer software or hardware or telecommunications equipment',
	'disrupt the normal flow of dialogue, cause a screen to “scroll” faster than other users of the Site are able to type, or otherwise act in a manner that negatively affects other users’ ability to engage in real time exchanges',
	'interfere with or disrupt the Site or servers or networks connected to the Site, or disobey any requirements, procedures, policies or regulations of networks connected to the Site',
	'intentionally or unintentionally violate any applicable local, state, national, or international law, including, but not limited to, regulations promulgated by the U.S. Securities and Exchange Commission, any rules of any national or other securities exchange, including, without limitation, the New York Stock Exchange, the American Stock Exchange or the NASDAQ, and any regulations having the force of law',
	'"stalk" or otherwise harass another',
	'collect or store personal data about other users',
	'falsify your age or date of birth'
]);

const conductItemsString = (businessName) => {
	const items = disallowedConductItems(businessName);
	const last = items.length - 1;
	return items.reduce((acc, item, idx) => idx === last ? acc + `or ${item}.` : acc + `${item}; `, '');
};

const SiteDisclosures = {
	statement: 'This information is provided for planning services only and is not intended to represent an official account of the holdings, balances, or transactions made in your account. Please refer to your monthly account statement for the official record of all of your account activities.',
	dataSecurityNotice: (siteName) => `Our servers are protected physically and electronically. Any connection between you and ${siteName} is protected by 256-bit SSL encryption.`,
	disclaimer: (businessName) => `The information contained in this website is for general information purposes only. The information is provided by ${businessName} and while we endeavor to keep the information up to date and correct, we make no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, suitability or availability with respect to the website or the information, products, services, or related graphics contained on the website for any purpose. Any reliance you place on such information is therefore strictly at your own risk. In no event will we be liable for any loss or damage including without limitation, indirect or consequential loss or damage, or any loss or damage whatsoever arising from loss of data or profits arising out of, or in connection with, the use of this website. Through this website you are able to link to other websites which are not under the control of ${businessName}. We have no control over the nature, content and availability of those sites. The inclusion of any links does not necessarily imply a recommendation or endorse the views expressed within them. Every effort is made to keep the website up and running smoothly. However, ${businessName} takes no responsibility for, and will not be liable for, the website being temporarily unavailable due to technical issues beyond our control.`,
	copyRight: (businessName) => `© ${new Date().getFullYear()} ${businessName}. All rights reserved.`,
	statementOfGoverningLaw: (businessName) => `THIS AGREEMENT WILL BE GOVERNED BY AND CONSTRUED IN ACCORDANCE WITH THE LAWS OF THE STATE OF TEXAS, IRRESPECTIVE OF THE CONFLICT OF LAWS RULES. FURTHERMORE, BECAUSE YOU AND ${businessName.toUpperCase()} AGREE THAT THE TEXAS COURTS ARE THE EXCLUSIVE FORUM FOR RESOLVING ANY DISPUTES ARISING OUT OF THIS AGREEMENT, THE PARTIES SUBMIT THEMSELVES TO THE PERSONAL JURISDICTION OF THE TEXAS COURTS.`,
	termsOfUse: (siteName, business) => ([
		{
			_id: '1',
			title: '1. Acceptance of Terms',
			content: `By using ${siteName}, creating, or accessing your ${siteName} account, including by signing in with a third-party service or partner (such as Google, Yahoo, ADP or RBC), or by otherwise using the Services we offer, you are agreeing to be bound by the Agreement without any modification or qualification. IF YOU ARE DISSATISFIED WITH THE AGREEMENT, OUR RULES, POLICIES, GUIDELINES OR PRACTICES, OR OUR OPERATION OF THE ${siteName.toUpperCase()} WEBSITE OR THE SERVICES, YOUR SOLE AND EXCLUSIVE REMEDY IS TO DISCONTINUE USING THE ${siteName.toUpperCase()} WEBSITE AND/OR OUR SERVICES, UNLESS ANOTHER REMEDY IS EXPRESSLY SET OUT IN THIS AGREEMENT. If for any reason you are unable to meet all the conditions set forth in this Agreement or if you breach this Agreement, your permission to access or use our Services, any materials downloaded or printed by you, and ${siteName.toUpperCase()} immediately lapses.`,
		},
		{
			_id: '2',
			title: '2. Advertisements',
			content: `${siteName} generates revenue through Google ads. These advertisements may be displayed on ${siteName} and may be targeted based on your location, browsing history, and other information collected by Google. By accessing and using ${siteName}, you consent to the collection and use of your information for the purpose of serving advertisements.`,
		},
		{
			_id: '3',
			title: '3. Entire Agreement',
			content: `This Agreement, including any applicable Specific Additional Service Terms, is the entire agreement between you and us, and supersede all previous communications, representations, or agreements, either oral or written between you and us with respect to this subject matter.`,
		},
		{
			_id: '4',
			title: '4. Modification of Agreement',
			content: `We reserve the right to modify or change the Agreement at any time by posting a new or revised Agreement to the Site. Your use of ${siteName} or the creation or access to your ${siteName} account is subject to the most current Agreement posted on the Site. The most current version of the Agreement can be reviewed by clicking the “Terms of Use” hyperlink at the bottom of our Site. You may not modify or amend this Agreement in whole or in part without the written consent of one of our authorized representatives`,
		},
		{
			_id: '5',
			title: '5. Intellectual Property',
			content: `The Site and all of its content, including, but not limited to, text, graphics, logos, button icons, images, audio clips, digital downloads, data compilations, and software, and the compilation thereof (collectively, the “Content”), are the property of ${business.name} or its content suppliers and protected by United States and international copyright laws. The trademarks, logos, and service marks (collectively the “Trademarks”) displayed on the Site are registered and unregistered trademarks of ${business.name} and others. Nothing contained on the Site should be construed as granting, by implication, estoppel, or otherwise, any license or right to use any Trademark displayed on the Site without the written permission of ${business.name} or such third party that may own the Trademarks displayed on the Site. Your use of the Trademarks displayed on the Site, or any other content on the Site, except as provided in this Agreement, is strictly prohibited. You are also advised that ${business.name} will aggressively enforce its intellectual property rights to the fullest extent of the law, including the seeking of criminal prosecution.`,
		},
		{
			_id: '6',
			title: '6. User Content',
			content: `You are solely responsible for any and all of your User Content. You represent and warrant that you own or otherwise control all of the rights to the User Content that you post; that the User Content is accurate; that use of the User Content you supply does not violate this Agreement and will not cause injury to any person or entity; and that you will indemnify ${business.name} for all claims resulting from User Content you supply. ${business.name} has the right but not the obligation to monitor and edit or remove any activity or content. ${business.name} takes no responsibility and assumes no liability for any User Content posted by you or any third party.`,
		},
		{
			_id: '7',
			title: `7. Use of ${siteName}`,
			content: `${siteName} is available for personal, non-commercial use only. You may not use ${siteName} for commercial purposes or in any way that is illegal, harmful, or disruptive to ${siteName} or its users.`,
		},
		{
			_id: '8',
			title: '8. User Conduct',
			content: `You agree not to use the Site to: ${conductItemsString(business.name)}`
		},
		{
			_id: '9',
			title: '9. Links to Other Sites',
			content: `Our Site may contain links to other sites that are not owned or controlled by ${business.name}. Please be aware that we are not responsible for the content or privacy practices of such other sites. We encourage you to be aware when you leave our Site and to read the privacy statements of each and every website that collects personally identifiable information. This Agreement applies only to information collected by our Site.`,
		},
		{
			_id: '10',
			title: '10. Indemnification',
			content: `You agree to indemnify, defend and hold harmless ${business.name}, its officers, directors, employees, agents and third parties, for any losses, costs, liabilities and expenses (including reasonable attorney’s fees) relating to or arising out of your use of or inability to use the Site or services, any user postings made by you, your violation of any terms of this Agreement or your violation of any rights of a third party, or your violation of any applicable laws, rules or regulations. ${business.name} reserves the right, at its own cost, to assume the exclusive defense and control of any matter otherwise subject to indemnification by you, in which event you will fully cooperate with ${business.name} in asserting any available defenses.`,
		},
		{
			_id: '11',
			title: '11. Disclaimer of Warranties',
			content: `${siteName.toUpperCase()} IS PROVIDED ON AN "AS IS" AND "AS AVAILABLE" BASIS. ${business.name.toUpperCase()} MAKES NO REPRESENTATIONS OR WARRANTIES OF ANY KIND, EXPRESS OR IMPLIED, AS TO THE OPERATION OF ${siteName.toUpperCase()} OR THE INFORMATION, CONTENT, MATERIALS, OR PRODUCTS INCLUDED ON ${siteName.toUpperCase()}. ${business.name.toUpperCase()} DOES NOT WARRANT THAT ${siteName.toUpperCase()} WILL BE UNINTERRUPTED OR ERROR-FREE, AND ${business.name.toUpperCase()} WILL NOT BE LIABLE FOR ANY INTERRUPTIONS OR ERRORS.`,
		},
		{
			_id: '12',
			title: '12. Limitation of Liability',
			content: `${business.name} WILL NOT BE LIABLE FOR ANY DAMAGES OF ANY KIND ARISING FROM THE USE OF ${siteName.toUpperCase()}, INCLUDING BUT NOT LIMITED TO DIRECT, INDIRECT, INCIDENTAL, PUNITIVE, AND CONSEQUENTIAL DAMAGES.`,
		},
		{
			_id: '13',
			title: '13. Termination/Access Restriction',
			content: `${business.name.toUpperCase()} reserves the right, in its sole discretion, to terminate your access to the Site and the related services or any portion thereof at any time, without notice. To the maximum extent permitted by law, this Agreement is governed by the laws of the State of ${business.state} and you hereby consent to the exclusive jurisdiction and venue of courts in ${business.state} in all disputes arising out of or relating to the use of the Site. Use of the Site is unauthorized in any jurisdiction that does not give effect to all provisions of these Terms, including, without limitation, this section. You agree that no joint venture, partnership, employment, or agency relationship exists between you and ${business.name} as a result of this Agreement or use of the Site. ${business.name}’s performance of this Agreement is subject to existing laws and legal process, and nothing contained in this Agreement is in derogation of ${business.name}’s right to comply with governmental, court and law enforcement requests or requirements relating to your use of the Site or information provided to or gathered by ${business.name} with respect to such use. If any part of this Agreement is determined to be invalid or unenforceable pursuant to applicable law including, but not limited to, the warranty disclaimers and liability limitations set forth above, then the invalid or unenforceable provision will be deemed superseded by a valid, enforceable provision that most closely matches the intent of the original provision and the remainder of the Agreement shall continue in effect. Unless otherwise specified herein, this Agreement constitutes the entire agreement between you and ${business.name} with respect to the Site and it supersedes all prior or contemporaneous communications and proposals, whether electronic, oral or written, between you and ${business.name} with respect to the Site. A printed version of this Agreement and of any notice given in electronic form shall be admissible in judicial or administrative proceedings based upon or relating to this Agreement to the same extent an d subject to the same conditions as other business documents and records originally generated and maintained in printed form. It is the express wish to the parties that this Agreement and all related documents be written in English.`,
		},
		{
			_id: '14',
			title: '14. Changes to Terms',
			content: `${business.name} reserves the right to change these Terms of Use at any time, and your continued use of ${siteName} after any changes have been made constitutes your acceptance of the new Terms of Use.`,
		},
		{
			_id: '15',
			title: '15. Governing Law',
			content: `THESE TERMS OF USE WILL BE GOVERNED BY AND CONSTRUED IN ACCORDANCE WITH THE LAWS OF THE STATE OF TEXAS, AND ANY DISPUTES ARISING FROM THESE TERMS OF USE OR ${siteName.toUpperCase()} WILL BE RESOLVED IN THE COURTS OF THE STATE OF TEXAS`,
		},
		{
			_id: '16',
			title: '16. Contact Us',
			content: `If you have any questions or concerns regarding these Terms of Use of ${siteName}, please contact us at ${business.email}.`,
		},
	]),
	privacyPolicy: (siteName, business) => ([
		{
			_id: '1',
			title: '1. Introduction',
			content: `This Privacy Policy governs the manner in which ${business.name.toUpperCase()} collects, uses, maintains and discloses information collected from users (each, a “User”) of the ${siteName.toUpperCase()} website (“Site”). This privacy policy applies to the Site and all products and services offered by ${business.name.toUpperCase()}.`,
		},
		{
			_id: '2',
			title: '2. Personal identification information',
			content: `We may collect personal identification information from Users in a variety of ways, including, but not limited to, when Users visit our site, register on the site, place an order, subscribe to the newsletter, respond to a survey, fill out a form, and in connection with other activities, services, features or resources we make available on our Site. Users may be asked for, as appropriate, name, email address, mailing address, phone number. Users may, however, visit our Site anonymously. We will collect personal identification information from Users only if they voluntarily submit such information to us. Users can always refuse to supply personally identification information, except that it may prevent them from engaging in certain Site related activities.`,
		},
		{
			_id: '3',
			title: '3. Non-personal identification information',
			content: `We may collect non-personal identification information about Users whenever they interact with our Site. Non-personal identification information may include the browser name, the type of computer and technical information about Users means of connection to our Site, such as the operating system and the Internet service providers utilized and other similar information.`,
		},
		{
			_id: '4',
			title: '4. Web browser cookies',
			content: `Our Site may use “cookies” to enhance User experience. User’s web browser places cookies on their hard drive for record-keeping purposes and sometimes to track information about them. User may choose to set their web browser to refuse cookies, or to alert you when cookies are being sent. If they do so, note that some parts of the Site may not function properly.`,
		},
		{
			_id: '5',
			title: '5. How we use collected information',
			content: `${business.name} may collect and use Users personal information for the following purposes:`,
			list: [
				`- To improve customer service`,
				`- Information you provide helps us respond to your customer service requests and support needs more efficiently.`,
				`- To personalize user experience`,
				`- We may use information in the aggregate to understand how our Users as a group use the services and resources provided on our Site.`,
				`- To improve our Site`,
				`- We may use feedback you provide to improve our products and services.`,
				`- To process payments`,
				`- We may use the information Users provide about themselves when placing an order only to provide service to that order. We do not share this information with outside parties except to the extent necessary to provide the service.`,
				`- To run a promotion, contest, survey or other Site feature`,
				`- To send Users information they agreed to receive about topics we think will be of interest to them.`,
				`- To send periodic emails`,
				`- We may use the email address to send User information and updates pertaining to their order. It may also be used to respond to their inquiries, questions, and/or other requests. If User decides to opt-in to our mailing list, they will receive emails that may include company news, updates, related product or service information, etc. If at any time the User would like to unsubscribe from receiving future emails, we include detailed unsubscribe instructions at the bottom of each email.`,
			],
		},
		{
			_id: '6',
			title: '6. How we protect your information',
			content: `We adopt appropriate data collection, storage and processing practices and security measures to protect against unauthorized access, alteration, disclosure or destruction of your personal information, username, password, transaction information and data stored on our Site.`,
		},
		{
			_id: '7',
			title: '7. Sharing your personal information',
			content: `We do not sell, trade, or rent Users personal identification information to others. We may share generic aggregated demographic information not linked to any personal identification information regarding visitors and users with our business partners, trusted affiliates and advertisers for the purposes outlined above. We may use third party service providers to help us operate our business and the Site or administer activities on our behalf, such as sending out newsletters or surveys. We may share your information with these third parties for those limited purposes provided that you have given us your permission.`,
		},
		{
			_id: '8',
			title: '8. Third party websites',
			content: `Users may find advertising or other content on our Site that link to the sites and services of our partners, suppliers, advertisers, sponsors, licensors and other third parties. We do not control the content or links that appear on these sites and are not responsible for the practices employed by websites linked to or from our Site. In addition, these sites or services, including their content and links, may be constantly changing. These sites and services may have their own privacy policies and customer service policies. Browsing and interaction on any other website, including websites which have a link to our Site, is subject to that website’s own terms and policies.`,
		},
		{
			_id: '9',
			title: '9. Advertising',
			content: `Ads appearing on our site may be delivered to Users by advertising partners, who may set cookies. These cookies allow the ad server to recognize your computer each time they send you an online advertisement to compile non personal identification information about you or others who use your computer. This information allows ad networks to, among other things, deliver targeted advertisements that they believe will be of most interest to you. This privacy policy does not cover the use of cookies by any advertisers.`,
		},
		{
			_id: '10',
			title: '10. Google Adsense',
			content: `Some of the ads may be served by Google. Google’s use of the DART cookie enables it to serve ads to Users based on their visit to our Site and other sites on the Internet. DART uses “non personally identifiable information” and does NOT track personal information about you, such as your name, email address, physical address, etc. You may opt out of the use of the DART cookie by visiting the Google ad and content network privacy policy at https://www.google.com/privacy_ads.html`,
		},
		{
			_id: '11',
			title: '11. Changes to this privacy policy',
			content: `${business.name} has the discretion to update this privacy policy at any time. When we do, we will post a notification on the main page of our Site. We encourage Users to frequently check this page for any changes to stay informed about how we are helping to protect the personal information we collect. You acknowledge and agree that it is your responsibility to review this privacy policy periodically and become aware of modifications.`,
		},
		{
			_id: '12',
			title: '12. Your acceptance of these terms',
			content: `By using this Site, you signify your acceptance of this policy and [terms of service]. If you do not agree to this policy, please do not use our Site. Your continued use of the Site following the posting of changes to this policy will be deemed your acceptance of those changes.`,
		},
		{
			_id: '13',
			title: '13. Contacting us',
			content: `If you have any questions about this Privacy Policy, the practices of this site, or your dealings with this site, please contact us at:`,
			contact: {
				name: `${business.name}`,
				streetAddress: `${business.streetAddress}`,
				cityStateZip: `${business.city}, ${business.state} ${business.zipCode}`,
				phone: `${business.phone}`,
				email: `${business.email}`,
			}
		},
		{
			_id: '14',
			title: '14. This document was last updated on February 1, 2023'
		},
	])
}

export default SiteDisclosures
