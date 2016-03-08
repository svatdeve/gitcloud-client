import axios from 'axios';
import cheerio from 'cheerio';

function gitCloud (pageUrl) {
    return axios.get(pageUrl)
        .then(function (response) {
            const dom = response.data;
            const $ = cheerio.load(dom);

            const fileIndex = $('#file-index').find('a').map((index, element) => {
                const elementJq = $(element);
                return {
                    name: elementJq.text(),
                    url: elementJq.attr('href')
                };
            }).get();

            return fileIndex;
        });
}

module.exports = gitCloud;
