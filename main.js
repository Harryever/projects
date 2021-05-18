var canvas = new fabric.Canvas ("myCanvas");

player_x = 10;
player_y = 10;

hermione_image_width = 30;
hermione_image_height = 30;


ron_image_width = 30;
ron_image_height = 30;

var player_object = "";
var block_image_object = "";

function player_update()
{
    fabric.Image.fromURL("images (1).jpg", function (Img) {
		player_object = Img;

		player_object.scaleToWidth(150);
		player_object.scaleToHeight(140);
		player_object.set({
			top: player_y,
			left: player_x,
		});
		canvas.add(player_object);
	});
}

function new_image(Hermione) {
	fabric.Image.fromURL("Hermione.png" function (Img) {
		block_image_object = Img;

		hermione_image_object.scaleToWidth(hermione_image_width);
		hermione_image_object.scaleToHeight(hermione_image_height);
		hermione_image_object.set({
			top: player_y,
			left: player_x,
		});
		canvas.add(hermione_image_object);
	});
}

