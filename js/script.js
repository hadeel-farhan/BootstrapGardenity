$(document).ready(function () {

    $('#sidebarCollapse').on('click', function () {
        $('#sidebar').toggleClass('active');
    });

});

function createGardenList() {
    const garden1 = ["Garden #1", "Created on 10th of July (20 participants)", "dfhds fd klfds fsdhfk sdhfj sf djkfh kjshdf dh ld fklj fjkls riwe podisukj lkjdk ewriq wroq nm."];
    const garden2 = ["Garden #2", "Created on 10th of July (20 participants)", "dfhds fd klfds fsdhfk sdhfj sf djkfh kjshdf dh ld fklj fjkls riwe podisukj lkjdk ewriq wroq nm."];
    const garden3 = ["Garden #3", "Created on 10th of July (20 participants)", "dfhds fd klfds fsdhfk sdhfj sf djkfh kjshdf dh ld fklj fjkls riwe podisukj lkjdk ewriq wroq nm."];
    const gardens = [garden1, garden2, garden3];

    htmlText = "";
    for (let i = 0; i < gardens.length; i++) {
        garden = gardens[i];
        htmlText = htmlText + "<div class=\"garden-element\">";
        htmlText = htmlText + "<h3>" + garden[0] + "</h3>";
        htmlText = htmlText + "<p class=\"date\">" + garden[1] + "</p>";
        htmlText = htmlText + "<p class=\"description\">" + garden[2] + "</p>";
        htmlText = htmlText + "</div>";
    }
    console.log(htmlText);
    const gardenList = document.getElementById('gardens');
    console.log(gardenList);
    gardenList.innerHTML = htmlText;
}

window.onload = createGardenList;
