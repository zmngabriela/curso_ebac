document.addEventListener('DOMContentLoaded', function() {
    const effect = document.getElementById('effect');

        effect.addEventListener('mouseover', () => {
            effect.style.fontSize = '2.3em';
        });

        effect.addEventListener('mouseout', () => {
            effect.style.fontSize = '2em';
        });
})