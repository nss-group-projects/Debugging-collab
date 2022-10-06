import { getAuthors } from "./dataAccess.js";

const authors = getAuthors()


export const bookForm = () => {
    return `
            <h2>add yer book</h2>
                <input type="text" id="addBook"></input>
                <select>
                    <option value="0">Choose Author</option>
                    ${authors.map((author) => {
                        return `<option id="${author.id}">${author.name}</option>`
                    })}
                </select>
            `
}