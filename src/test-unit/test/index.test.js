const supertest = require('supertest');
const chai = require('chai');
const app= require('../index');

const expect =chai.expect;
const request = supertest(app.listen());
//测试套件
describe('开始测试get请求',()=>{
    //测试用例
    it('测试/getstring.json',(done)=>{
        request
            .get('/getString.json')
            .expect(200)
            .end((err,res)=>{
                expect(res.body).to.be.an('object')
                expect(res.body.success).to.be.an('boolean')
                expect(res.body.data).to.be.an('string')
                done()
            });
    });
});