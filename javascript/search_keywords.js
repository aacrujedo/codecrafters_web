function searchOnPage() {
    var keyword = document.getElementById('searchInput').value.toLowerCase();
    var paragraphs = document.getElementsByTagName('p');
    var searchResults = document.getElementById('search-results');

    // Clear previous search results
    searchResults.innerHTML = '';

    // Iterate through paragraphs and display those containing the keyword
    for (var i = 0; i < paragraphs.length; i++) {
        var text = paragraphs[i].innerText.toLowerCase();
        if (text.includes(keyword)) {
            // Highlight the keyword in the search results
            var highlightedText = text.replace(new RegExp(keyword, 'gi'), match => `<span class="highlight">${match}</span>`);
            searchResults.innerHTML += '<p>' + highlightedText + '</p>';
        }
    }

    // Prevent the form from submitting and redirecting
    return false;
}