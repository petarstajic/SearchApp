export default async function search(query) {
    const url = `https://jsonplaceholder.typicode.com/posts?q=${query}`;
    const response = await fetch(url);
    return await response.json();
}