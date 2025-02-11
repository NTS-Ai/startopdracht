document.addEventListener('DOMContentLoaded', function() {
    const showMoreBtn = document.getElementById('showMoreBtn');
    const moreContent = document.getElementById('moreContent');

    showMoreBtn.addEventListener('click', function() {
        if (moreContent.classList.contains('hidden')) {
            moreContent.classList.remove('hidden');
            showMoreBtn.textContent = 'Minder lezen';
        } else {
            moreContent.classList.add('hidden');
            showMoreBtn.textContent = 'Meer lezen';
        }
    });
});