import { ICar } from "../interfaces/interfaces";

const base = 'http://localhost:3000';

const garage = `${base}/garage`;
// const engine = `${base}/engine`;
// const winners = `${base}/winners`;

export const getCars = async (page = 1, limit = 7): Promise<{ items: ICar[]; count: string | null }> => {
    const response = await fetch(`${garage}?_page=${page}&_limit=${limit}`);

    // const items = await response.json();
    // // // const count = response.headers.get('X-Total-Count');
    // // console.log(items)

    // return items;

    return {
        items: await response.json(),
        count: response.headers.get('X-Total-Count'),
    }
}
