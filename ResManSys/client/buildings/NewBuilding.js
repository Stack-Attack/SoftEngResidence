Template.NewBuilding.events({
   'click .fa-close' : function() {
       Session.set('newBuilding', false); //Sets the 'newBuilding' session variable to false,
   }                                                //So when you click on the close button in the new building form
});                                                 //It calls this event to say "hey, we aren't adding a new building anymore"
                                                    //If you look in buildings.html, you will see how newBuilding is used