import Api from '../pages/Api';

export async function buscarTime1() {
    try {
        const resultado = await Api.get(`Api.php?apicall=getTimes`);
        return resultado.data;

    } catch (error) {
        
        console.log(error);
        return [];
    }
}