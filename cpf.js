// Seletores
const cpf = document.querySelector('#cpf')
const txt = document.querySelector('#txt')

// Quando a tecla subir a função é disparada
cpf.addEventListener('keyup', () => {
    txt.innerText = formatarCpf(cpf.value)
})

// Função para formatar CPF
function formatarCpf(cpf) {
    // Remove tudo que não é dígito
    cpf = cpf.replace(/\D/g, '')

    /*
        Para formatar em tempo real eu elaborei uma lógica que verifica do maior para o menor.
        Conforme o valor atenda as condições, ele cai no return e atualiza o valor do input.
    */
    if (cpf.length >= 14) return document.querySelector('#cpf').value = cpf.replace(/^(\d{3})(\d{3})(\d{3})(\d{2})$/, '$1.$2.$3-$4')
    if (cpf.length >= 11) return document.querySelector('#cpf').value = cpf.replace(/(\d{3})(\d{3})(\d{3})/, '$1.$2.$3-')
    if (cpf.length >= 7) return document.querySelector('#cpf').value = cpf.replace(/(\d{3})(\d{3})/, '$1.$2.')
    if (cpf.length >= 4) return document.querySelector('#cpf').value = cpf.replace(/(\d{3})/, '$1.')
}