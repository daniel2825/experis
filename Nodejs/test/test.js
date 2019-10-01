import { expect } from 'chai';

describe('adding 2 numbers',() => {
   
    it('shor return 3', () => {
        const suma = add(1,2);
        const resultado=3;

        expect(suma).to.be(resultado);

    })

})