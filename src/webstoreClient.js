import fetch from 'node-fetch';
import RestClient from './restClient';

export default class WebStoreClient extends RestClient {
	constructor(options) {
		super({ baseUrl: 'https://api.blencm.com/v1', token: options.token });
	}

	static authorize = (email, adminUrl) => {
		const config = {
			method: 'post',
			body: JSON.stringify({ email, admin_url: adminUrl }),
			headers: { 'Content-Type': 'application/json' },
		};

		return fetch('https://api.blencm.com/v1/account/authorize', config).then(
			RestClient.returnStatusAndJson
		);
	};
}
