export default class Team
{
    constructor(payload) {

        this.team = {
            val: payload.team,
            label: 'Team',
            required: '*',
            rules: 'required'
        }
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
