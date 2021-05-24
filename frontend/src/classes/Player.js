export default class Player
{
    constructor(payload) {

        this.search = {
            val: payload.search,
            label: 'Search',
            required: '*',
            rules: 'required'
        };
        this.order = {
            val: payload.order,
            label: 'Order',
            required: '*',
            rules: 'required'
        };
        this.page = {
            val: payload.page,
            label: 'Page',
            required: '*',
            rules: 'required'
        };
    }

    onlyValues() {
        const keys = Object.keys(this);
        let temp = Object.create({});

        keys.forEach(key => {
            temp[key] = this[key].val
        });

        return temp;
    }
}
