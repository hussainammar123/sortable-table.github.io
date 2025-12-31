function sortTable(colIndex) {
  const table = document.getElementById("searchTable");
  let rows = Array.from(table.rows).slice(1);
  let asc = table.getAttribute("data-sort") !== "asc";

  rows.sort((a, b) => {
    let x = a.cells[colIndex].innerText.replace('%', '');
    let y = b.cells[colIndex].innerText.replace('%', '');

    x = isNaN(x) ? x.toLowerCase() : Number(x);
    y = isNaN(y) ? y.toLowerCase() : Number(y);

    return asc ? (x > y ? 1 : -1) : (x < y ? 1 : -1);
  });

  rows.forEach(row => table.tBodies[0].appendChild(row));
  table.setAttribute("data-sort", asc ? "asc" : "desc");
}
