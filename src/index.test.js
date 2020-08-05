import {expect} from 'chai';
import jsdom from 'jsdom';
import fs from 'fs'

describe('First Test',()=>{
    it('It should just pass',()=>{
        expect(1).to.not.equal(2);//not recommended
    });
});

describe('Testing the title',()=>{
    it('Should say \'Mi loco eso ta jevi \'', (done) => {
    const index = fs.readFileSync('./src/index.html','utf-8');
    jsdom.env(index , function(err ,window){
        const h1 = window.document.getElementById('title');
        expect(h1.textContent).to.equal('Users');
        done();
        window.close();
        });
    });
});