import { Piatto } from './piatto';

export class Chef {

    decidiMenu(...piatti: Piatto[]) {
        const antipasti = piatti.filter(this.isSalato);
        const dolci = piatti.filter(this.isDolce);
        return { antipasti, dolci };
    }

    private isSalato(piatto: Piatto) {
        return piatto.getIngredienti().includes('sale');
    }

    private isDolce(piatto: Piatto) {
        return piatto.getIngredienti().includes('zucchero');
    }    
}