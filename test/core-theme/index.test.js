const path = require('path');
const chai = require('chai');
const CoreTheme = require('./../core-theme');
const expect = chai.expect


const themeDirName = path.join(__dirname, 'blog');
const themeCore = new CoreTheme({
  dirName: themeDirName,
});

const html = themeCore.pageRender('home');

describe( 'Test: CoreTheme', ( ) => {
  
  it('Test: CoreTheme.pageRender', ( done ) => {
    expect(html).to.be.an('string');
    expect(html).to.be.an('string');
    done();
  })
})