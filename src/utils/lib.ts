export const addressConvert = (address: string | undefined | null) => {
    if (!address) return;
    return address.slice(0, 5) + "..." + address.slice(address.length - 5, address.length);
}