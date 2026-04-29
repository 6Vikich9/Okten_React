export const getCart = async (userId: number) => {
    const res = await fetch(`https://dummyjson.com/carts/user/${userId}`);
    const data = await res.json();
    return data.carts;
};