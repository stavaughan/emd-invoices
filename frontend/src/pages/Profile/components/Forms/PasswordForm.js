import { useNavigate } from 'react-router-dom';
import { TitleDescription } from 'components/Blocks';
import { LoaderButton } from 'components/Buttons';
import { logout, reset } from 'features/auth/authSlice'
import { useClearUser } from 'hooks';
import { useDispatch } from 'react-redux';

const PasswordForm = () => {

	const navigate = useNavigate();
	const dispatch = useDispatch()

	const { setClear } = useClearUser()

	const onForgotPassword = (e) => {
		e.preventDefault()
		setClear(true)
		dispatch(logout())
		dispatch(reset())
		navigate('/forgot-password')
	};

	return (
		<div>
			<TitleDescription
				title="Update Password"
				description="To update your password, click 'Reset Password' and follow the instructions"
				className="mb-1"
			/>
			<div className="mt-3">
				<LoaderButton
					type="button"
					className="btn-primary ms-0"
					setOnclick={onForgotPassword}
					label="Reset Password"
					wait
				/>
			</div>
		</div>
	);
};

export default PasswordForm;
