import {expect} from 'chai';
import jsdom from 'jsdom';
import fs from 'fs';
import {validateEmail, validateFirstName}  from './backend'

describe('index.html', () => {
  it('should say hello', (done) => {
    const index = fs.readFileSync('./src/index.html', "utf-8");
    const backend = fs.readFileSync('./src/backend.js', "utf-8");
    jsdom.env(index, [backend], function(err, window){  // the window represents the window in the browser
      const h1 = window.document.getElementsByTagName('h1')[0];
      expect(h1.innerHTML).to.equal("Hello World!");
      done();
      window.close();
    });
  });
});


describe('Our first test', ()=> {
  it('should pass', ()=> {
    expect(true).to.equal(true);
  });
});

describe('Validate email', ()=> {
  it('should validate return false when no email is entered', ()=>{
      let result = validateEmail();
      console.log(`result is ${result}`);
      expect(result).to.equal(false);
  });

  it('should return false when it does not match the email regex pattern', () => {

  });

  it('should return true if it matches the email pattern regex', () => {

  });

});


describe('Validate First name', () => {
  it('should return false if no name is present', () => {
    let name = validateFirstName("");
    expect(name).to.equal(false);
  });
  it('should return false if name is less than 2 letters', () => {
    let name = validateFirstName("p");
    expect(name).to.equal(false);
  });
  it('should return true if name is entered an greater than 2 letters ', () => {
    var name = validateFirstName("Pelz");
    expect(name).to.equal(true);
    name = validateFirstName("Pelumzeny");
    expect(name).to.equal(true);
  });
});
