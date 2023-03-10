import './custom.scss';
import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { ToastContainer, cssTransition } from 'react-toastify';
import { Provider } from 'react-redux';
import { store } from 'app/store';
import App from 'App';

import "animate.css/animate.min.css";
import "react-toastify/dist/ReactToastify.css";

const bounce = cssTransition({
	enter: "animate__animated animate__bounceIn",
	exit: "animate__animated animate__bounceOut"
});

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
		<React.StrictMode>
			<Provider store={store}>
				<BrowserRouter>
					<App />
				</BrowserRouter>
				<ToastContainer
					autoClose={3000}
					position="top-center"
					transition={bounce}
					newestOnTop={true}
				/>
			</Provider>
		</React.StrictMode>
	);
