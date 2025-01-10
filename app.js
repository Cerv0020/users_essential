function sortTable(n) {
    let table= 0,
        rows= 0,
        switching= 0,
        i= 0,
        x= 0,
        y= 0,
        shouldSw= 0,
        dc = 0,
        switchcount = 0;

    table = document.getElementById("lista");
    sw = true;
    dc = "asc";

    while (sw) {
        sw = false;
        rows = table.rows;

        for (i = 1; i < (rows.length - 1); i++) {
            shouldSw = false;
            x = rows[i].getElementsByTagName("TD")[n];
            y = rows[i + 1].getElementsByTagName("TD")[n];

            if (dc === "asc") {
                if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
                    shouldSw = true;
                    break;
                }
            } else if (dc === "desc") {
                if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
                    shouldSw = true;
                    break;
                }
            }
        }

        if (shouldSw) {
            rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
            switching = true;
            switchcount++;
        } else {
            if (switchcount === 0 && dc === "asc") {
                dc = "desc";
                switching = true;
            }
        }        

    }
}