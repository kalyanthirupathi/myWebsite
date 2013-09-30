
var itemsArray = [];
var globalStr = "";

$(document)
		.ready(
				function() {

					$("#addItem").click(function() {
						var listTxt = $("#textItem").val();

						if (listTxt == "" || listTxt == "Enter a text here")

						{
							alert("enter any item");
						}

						else {
							addItem();
						}
					});

					$("#textItem").click(function() {

						$("#textItem").val("");

					});

					$("body").delegate(".delete", "click", function() {
						var deleteIndex = $(this).attr("indexOf");

						itemsArray.splice(deleteIndex, 1);
						displayItems();
					});

					function addItem() {

						var item = $("#textItem").val();
						itemsArray.push(item);
						console.log(itemsArray.length);
						displayItems();
		}

					function displayItems() {
						str = " ";
						if (itemsArray.length == 0)

						{
							str = "<b> Sorry, no items in list, please add items </b>";
						}

						else

						{

							for (i = 0; i < itemsArray.length; i++)

							{

								str = (str + "<div class='singleItem'>"
										+ itemsArray[i]
										+ "<div  class='delete' indexOf=" + i + ">[X]</div> </div>");
							}
						}

						$("#myList").html(str);
					}

					$("#delete").bind("click", function() {
						alert("hi");

					});

				});
