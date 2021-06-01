export const createUsers = () => {
    const alpha = 'abcdefghijklmnopqrstuvwxyz'
    const users = []
    while (users.length < 1000) {
        const userSize = Math.floor(Math.random() * 10) + 4
        let count = 0
        let user = ''
        while (count < userSize) {
            const randomIndex = Math.floor(Math.random() * 26)
            if (!user) {
                user += alpha[randomIndex].toUpperCase()
            } else {
                user += alpha[randomIndex]
            }
            count++
        }
        let userId
        const isOriginal = users.every(singleUser => {
            return singleUser.name !== user
        })
        if (isOriginal) {
            if (!users.length) {
                userId = 1
            } else {
                userId = users[users.length - 1].id + 1
            }
            users.push({name: user, id: userId})
        }
    }
    return users
}
