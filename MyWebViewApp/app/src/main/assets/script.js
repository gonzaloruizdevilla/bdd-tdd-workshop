
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('button').onclick = function changeContent() {
       let input = document.getElementById('input');
       input.value = 1 + +input.value;
    }
})