const documents = [
  {
    id: 'doc-1',
    title: 'Política de férias',
    content: 'Os colaboradores podem solicitar férias após completar 12 meses de trabalho. O agendamento deve ser aprovado pela liderança.'
  },
  {
    id: 'doc-2',
    title: 'Política de reembolso',
    content: 'Despesas com viagem podem ser reembolsadas mediante comprovante e aprovação do gestor responsável.'
  }
];

function getAllDocuments() {
  return documents;
}

function addDocument(doc) {
  documents.push(doc);
  return doc;
}

module.exports = { getAllDocuments, addDocument };