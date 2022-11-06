import generator from 'generate-password'
import tokenHandler from './tokenHandler.js'

const { getHashedPassword } = tokenHandler;

const passwordLogic = {

    generatePassword: async () => generator.generate({
        numbers: true,
        strict: true
    }),

    temporaryPassword: async () => {
        const password = await passwordLogic.generatePassword()
        const hashedPassword = await getHashedPassword(password)
        return {
            password,
            hashedPassword
        }
    }
}

export default passwordLogic
