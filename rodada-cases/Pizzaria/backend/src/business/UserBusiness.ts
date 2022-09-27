export default class UserBusiness {
    public signup = async (input: any) => {
        const name = input.name;
        const email = input.email;
        const whatsapp = input.whatsapp;
        const password = input.password;
        const cep = input.cep;
        const street = input.street;
        const district= input.district;
        const number = input.number;
        const reference= input.referenc;
        if(!name) {
            throw new Error("Favor inserir nome");
        }
    }
}