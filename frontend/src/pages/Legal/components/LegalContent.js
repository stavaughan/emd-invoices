import { useMobile } from 'hooks';
import clsx from 'clsx';
import { EmailLink, PhoneLink } from 'components/links';
import React from 'react';
import { Col } from 'components/HTML';
import { Global } from 'globals/js';

const LegalContent = ({ title, content }) => {

	const { isXSmall } = useMobile();

	return (
		<Col cols="12 md-8 lg-10">
			<div className={clsx(
				'd-flex flex-column',
				isXSmall ? 'px-2' : 'ps-3'
			)}>
				<h1 className="text-dark mb-4">{title}</h1>
				{content.map((item, index) => (
					<React.Fragment key={item._id}>
						<p
							key={index}
							{...isXSmall && { className: 'text-sm' }}
						>
							<span className="text-dark font-bold me-2">
								{item.title}:
							</span>
							<span className="text-secondary">
								{item.content}
							</span>
						</p>
						{item?.list && item?.list?.length ? (
							<>
								{item.list.map((listItem, index) => (
									<p
										key={index}
										{...isXSmall && { className: 'text-sm' }}
									>
										{listItem}
									</p>
								))}
							</>
						) : null}
						{item?.contact && (
							<div className={clsx(
								'border border-gray rounded p-3 mb-3',
							)}>
								<h5 className="text-dark font-semibold mb-1">
									{item.contact.name}
								</h5>
								<div className="text-secondary text-sm">
									{item.contact.streetAddress}<br />
									{item.contact.cityStateZip}
								</div>
								<div>
									<PhoneLink
										phone={item.contact.phone}
										formatted={Global.formatPhone(item.contact.phone)}
									/>
								</div>
								<EmailLink email={item.contact.email} />
							</div>
						)}
					</React.Fragment>
				))}
			</div>
		</Col>
	)
}

export default LegalContent
