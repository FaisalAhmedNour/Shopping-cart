document.getElementById('ph-plus').addEventListener('click', function () {
    increase('ph-count');
});
document.getElementById('ph-minus').addEventListener('click', function () {
    decrease('ph-count');
});
document.getElementById('ph-cross').addEventListener('click', function () {
    cross('ph-count');
});

document.getElementById('cover-plus').addEventListener('click', function () {
    increase('cover-count');
});
document.getElementById('cover-minus').addEventListener('click', function () {
    decrease('cover-count');
});
document.getElementById('cover-cross').addEventListener('click', function () {
    cross('cover-count');
});

document.getElementById('ph-count').addEventListener('input', function(){
    changeValue();
});
document.getElementById('cover-count').addEventListener('input', function(){
    changeValue();
});
