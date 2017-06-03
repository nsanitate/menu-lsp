import { QuicheLorraine } from './quiche-lorraine';
import { expect } from 'chai';
import { Chef } from './chef';
import { Piatto } from './piatto';
import { Prosciutto } from './prosciutto';
import { ProsciuttoSanDaniele } from './prosciutto-san-daniele';
import { Torta } from './torta';

describe('Menu', () => {

    let chef: Chef;

    beforeEach(() => {
        // Arrange
        chef = new Chef();
    });

    it('doverbbe mettere il prosciutto tra gli antipasti', () => {
        // Arrange
        const prosciutto = new Prosciutto();

        // Act
        const actual = chef.decidiMenu(prosciutto);

        // Assert
        expect(actual.antipasti).to.contains(prosciutto);
    });

    it('doverbbe mettere il prosciutto san daniele tra gli antipasti', () => {
        // Arrange
        const prosciutto = new ProsciuttoSanDaniele();

        // Act
        const actual = chef.decidiMenu(prosciutto);

        // Assert
        expect(actual.antipasti).to.contains(prosciutto);
    });

    it('dovrebbe mettere la torta tra i dolci', () => {
        // Arrange
        const torta = new Torta();

        // Act
        const actual = chef.decidiMenu(torta);

        // Assert
        expect(actual.dolci).to.contains(torta);
    });

    it('dovrebbe mettere la quiche lorraine tra i dolci', () => {
        // Arrange
        const torta = new QuicheLorraine();

        // Act
        const actual = chef.decidiMenu(torta);

        // Assert
        expect(actual.antipasti).to.contains(torta);
    });
    
});