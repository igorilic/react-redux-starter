import {expect} from 'chai';
import jsdom from 'jsdom';
import cheerio from 'cheerio';
import fs from 'fs';

let index;
let $;

describe('Init test', () => {
  it('should pass', () => {
    expect(true).to.equal(true);
  });
});

describe('index.html', () => {
  beforeEach((done) => {
    index = fs.readFileSync('./src/index.html', "utf-8");
    $ = cheerio.load(index);
    done();
  });
  it('should have div with id app', () => {
    const div = $('div').first();
    expect(div.attr('id')).to.equal('app');
  });
  it('should have div with class container', () => {
    const div = $('div').first();
    expect(div.attr('class')).to.equal('container');
  })
});
