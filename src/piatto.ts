export abstract class Piatto {

    protected abstract ingredienti: Array<string>;

    getIngredienti() {
        return this.ingredienti;
    }

}