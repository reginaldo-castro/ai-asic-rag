async function generateAnswer({systemPrompt, input, documents}) {
    if (!documents.length) {
        return 'Não encontrei informações suficiente na base para responder com segurança à pergunta: "${input}".';
    }

    const bulletDocs = documents
        .map((doc, index) => `${index + 1}. ${doc.title}: ${doc.content}`)
        .join('\n');

    return [
        `Instrução da skill: ${systemPrompt}`,
        `Pergunta: ${input}`,
        'Resposta baseada nos documentos recuperados:',
        bulletDocs,
    ].join('\n\n');
}

module.exports = {
    generateAnswer,
};
