import React from 'react'
import { Navigate, useLocation, Outlet } from 'react-router-dom';
import { DataProvider } from 'contexts/data-context';
import { DatesProvider } from 'contexts/dates-context';

const DataLayer = ({ user }) => {

	const location = useLocation();

	return (
		<>
			{user?._id ? (
				<DataProvider>
					<DatesProvider>
						<Outlet />
					</DatesProvider>
				</DataProvider>
			) : (
				<Navigate
					to="/login"
					state={{ from: location }}
					replace
				/>
			)}
		</>
	)
}

export default DataLayer
