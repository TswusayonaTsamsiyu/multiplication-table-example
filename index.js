const SIZE = 20

function createTable(size) {
    const table = document.createElement("table")
    for (let i = 1; i <= size; i++) {
        const row = document.createElement("tr")
        for (let j = 1; j <= size; j++) {
            const cell = document.createElement("td")
            const content = i * j
            cell.textContent = content
            if (content % 2 === 0) {
                cell.classList.add("even")
            }
            row.appendChild(cell)
        }
        table.appendChild(row)
    }
    return table
}

document.body.appendChild(createTable(SIZE))