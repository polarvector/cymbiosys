import axios from 'axios';

const sheetUrl =
	'https://script.google.com/macros/s/AKfycbytJrUJ_LT7g4rU30Gy5oNB1HoeDGqMHwjUhXSZ3qA4XGRDvKEboSnhMlkMSszq1XBH/exechttps://script.google.com/macros/s/AKfycbxbI6KZDlnbmLOSSTdKw9uYiqp4ufzDWAqi03MPKuv0igEAqzSoRAAmh44MWxQ6-Vb5/exec';

const submitForm = (name: string, email: string) =>
	axios
		.post(sheetUrl, { name, email })
		.then((res) => res.data)
		.catch((err) => console.error(err));

export { submitForm };
