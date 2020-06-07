// import got from 'got';

const got = require('got');
export default class ExchangeRatesJob {
    public async run(ctx): Promise<any> {
        const appId = '0c05d662ae474d6595a81ef57c4c2958';
        const url = `https://openexchangerates.org/api/latest.json?app_id=${appId}`;
        console.log('-----------3', url);
        console.log(ctx);
        const { body } = await got.get(url, {
            responseType: 'json',
        });
        console.log('----------------res', body);
        return body;
    }
}
