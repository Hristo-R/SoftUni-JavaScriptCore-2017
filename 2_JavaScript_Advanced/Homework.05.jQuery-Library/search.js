function search() {
  let searchText = $('#searchText').val().toLocaleLowerCase();
  let matches = 0;
  $("#towns li").each((index, item) => {
    if (item.textContent.toLocaleLowerCase().includes(searchText)) {
      $(item).css("font-weight", "bold");
      matches++;
    } else
      $(item).css("font-weight", "");
  });
  $('#result').text(matches + " matches found.");
}
