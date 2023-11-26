const searchInput = document.querySelector('input[type="search"]');
const clearBtn = document.getElementById('clear-btn');

searchInput.addEventListener('input', function () {
    clearBtn.style.display = this.value ? 'inline-block' : 'none';
});

clearBtn.addEventListener('click', function () {
    searchInput.value = '';
    clearBtn.style.display = 'none';
});

