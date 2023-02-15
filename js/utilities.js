changeValue();
function changeValue() {
    const ph = parseFloat(document.getElementById('ph-count').value) * 1219;
    document.getElementById('one-ph').innerText = ph;
    const cover = parseFloat(document.getElementById('cover-count').value) * 59;
    document.getElementById('one-cover').innerText = cover;
    document.getElementById('subtotal').innerText = ph + cover;
    const tax = parseFloat(((ph + cover) * 0.1).toFixed(2));
    document.getElementById('tax').innerText = tax;
    document.getElementById('total').innerText = ph + cover + tax;
}
function increase(target) {
    count = document.getElementById(target);
    count.value = parseInt(count.value) + 1;
    changeValue()
}
function decrease(target) {
    valueStr = document.getElementById(target);
    value = parseFloat(valueStr.value);
    if (value < 1) {
        alert('It cant be happen');
        return;
    }
    valueStr.value = value - 1;
    changeValue()
}
function cross(target) {
    document.getElementById(target).value = 0;
    changeValue()
}