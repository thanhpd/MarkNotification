/**
 * Created by thanh.phan on 6/30/2015.
 */

function appendRow(courseJson) {

    for( var i = 0; i < courseJson.length; i++) {
        for(var name in courseJson[i]) {
            var col1 = document.createElement("td");
            col1.innerHTML = '<input type="checkbox" name="id" value=' + courseJson[i].id + ' />';

            var col2 = document.createElement("td");
            col2.innerHTML = courseJson[i].idcourse;

            var col3 = document.createElement("td");
            col3.innerHTML = courseJson[i].coursename;

            var col4 = document.createElement("td");
            col4.innerHTML = courseJson[i].credit;

            var col5 = document.createElement("td");
            col5.innerHTML = courseJson[i].lecturer;

            var row = document.createElement("tr");
            row.append(col1, col2, col3, col4, col5);

            $('#myTable').find('tbody:last').append(row);
        }
    }
}