export const randomizeArray = (arr:any) => {
    return arr.sort(() => 0.5-Math.random())
}