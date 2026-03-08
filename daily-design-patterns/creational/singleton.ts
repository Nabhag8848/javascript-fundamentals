class President {
    private static president: President | null = null;

    private constructor() {}

    public static get() {
        if(this.president === null) {
            this.president = new President()
        }

        return this.president;
    }
}

const president = President.get();
console.log(president)
