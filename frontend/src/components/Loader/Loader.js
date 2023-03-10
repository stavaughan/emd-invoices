import clsx from 'clsx'
import Classes from './Loader.module.css'

/*!
 * CSS from Loader.module.css adapted
 * from https://projects.lukehaas.me/css-loaders/
 * Copyright (c) 2014 Luke Haas
 * The MIT License (MIT)
 *
*/

const Loader = () => (
	<div className={clsx(
		Classes.loadingPage,
		'position-fixed',
		'd-flex justify-content-center align-items-center'
	)}>
		<div className={Classes.loader} />
	</div>
)

export default Loader
