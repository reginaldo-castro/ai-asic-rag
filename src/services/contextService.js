async function buildContext({ userId, question}) {
    return {
        userId: userId || 'anonymous',
        question,
        filters: {},
        permissions: ['read:documents']
    }
}

module.exports = {
    buildContext
};