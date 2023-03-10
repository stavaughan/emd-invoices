import { EncryptedGroup } from 'components/section-content';
import { EditEncryptTextCell } from 'components/Tables/components';
import { useMultiBool } from 'hooks';

// 637494ae88423c3e674f89e5

const dataItems = ({
	data,
	setMaskData,
	maskData,
	uidTest,
	selector,
	itemID,
	updateSlice,
	reqBodyFn
}) => ([
	{
		_id: 'username',
		param: uidTest(data, 'username2') && (
			<EditEncryptTextCell
				itemLabel={data.username2}
				setMask={setMaskData('username')}
				field="username2"
				selector={selector}
				itemID={itemID}
				updateSlice={updateSlice}
				mask={maskData.username}
				cid={data.username2?.cid}
				reqBodyFn={reqBodyFn('username2')}
				label="Username"
				type="dots"
				badge
			/>
		),
		inline: true,
		encrypt: true,
		name: 'Username'
	},
	{
		_id: 'password',
		param: uidTest(data, 'password2') && (
			<EditEncryptTextCell
				itemLabel={data.password2}
				setMask={setMaskData('password')}
				field="password2"
				selector={selector}
				itemID={itemID}
				updateSlice={updateSlice}
				mask={maskData.password}
				cid={data.password2?.cid}
				reqBodyFn={reqBodyFn('password2')}
				label="Password"
				//type="dots"
				badge
			/>
		),
		inline: true,
		encrypt: true,
		name: 'Password'
	},
	{
		_id: 'hint',
		param: uidTest(data, 'hint2') && (
			<EditEncryptTextCell
				itemLabel={data.hint2}
				setMask={setMaskData('hint')}
				field="hint2"
				mask={maskData.hint}
				selector={selector}
				itemID={itemID}
				updateSlice={updateSlice}
				cid={data.hint2?.cid}
				reqBodyFn={reqBodyFn('hint2')}
				label="Hint"
				type="dots"
				badge
			/>
		),
		inline: true,
		encrypt: true,
		name: 'Hint'
	},
	{
		_id: 'pin',
		param: uidTest(data, 'pin2') && (
			<EditEncryptTextCell
				itemLabel={data.pin2}
				setMask={setMaskData('pin')}
				field="pin2"
				mask={maskData.pin}
				selector={selector}
				itemID={itemID}
				updateSlice={updateSlice}
				cid={data.pin2?.cid}
				reqBodyFn={reqBodyFn('pin2')}
				label="PIN"
				type="dots"
				badge
			/>
		),
		inline: true,
		encrypt: true,
		name: 'PIN'
	},
	{
		_id: 'message',
		param: uidTest(data, 'securityMessage2') && (
			<EditEncryptTextCell
				itemLabel={data.securityMessage2}
				setMask={setMaskData('message')}
				field="securityMessage2"
				mask={maskData.message}
				selector={selector}
				itemID={itemID}
				updateSlice={updateSlice}
				cid={data.securityMessage2?.cid}
				reqBodyFn={reqBodyFn('securityMessage2')}
				label="Message"
				nested={true}
				type="dots"
				badge
			/>
		),
		encrypt: true,
		name: 'Security Message'
	}
]);

const MaskedLoginParams = ({
	login,
	selector,
	itemID,
	updateSlice,
	reqBodyFn
}) => {

	const [maskData, setMaskData] = useMultiBool({
		'message': true,
		'username': true,
		'password': true,
		'hint': true,
		'pin': true
	});

	return (
		<EncryptedGroup
			data={login}
			dataItems={dataItems}
			selector={selector}
			maskData={maskData}
			setMaskData={setMaskData}
			itemID={itemID}
			updateSlice={updateSlice}
			reqBodyFn={reqBodyFn}
		/>
	);
};

export default MaskedLoginParams;
