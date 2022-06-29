const banco = []

const getBanco = () => JSON.parse(localStorage.getItem('viavarejo')) ?? [];

const setBanco = (banco) => localStorage.setItem('viavarejo', JSON.stringify(banco));

export const bancoLocal = {
    getBanco,
    setBanco,
    banco
};