export default class User
{
    constructor(payload) {

        this.email = {
            val: payload.email,
            label: 'Email',
            required: '*',
            rules: 'required'
        }
        this.password = {
            val: payload.password,
            label: 'Password',
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
