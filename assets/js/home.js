// function to add selected checkbox in array
function getSelectedCheckboxValues() {
    var selectedCheckboxValues = [];
    var checkboxes = document.getElementsByName('checkedItem');
    checkboxes.forEach(function (checkbox) {
        if (checkbox.checked) {
            selectedCheckboxValues.push(checkbox.getAttribute("data-id"));
        } else {
            selectedCheckboxValues.filter((id) => id === checkbox.getAttribute("data-id"))
        }
    });
    return selectedCheckboxValues;
}

document.addEventListener('DOMContentLoaded', function () {
    // det delete button from dom
    let delButton = document.getElementById("delete-button");

    // add listener to our delete button
    delButton.addEventListener('click', function () {
        const SelectedIds = getSelectedCheckboxValues();
        if (SelectedIds) {
            SelectedIds.forEach((id) => {
                window.location.href = `/delete/?id=${id}`
            })
        }
    });
});
