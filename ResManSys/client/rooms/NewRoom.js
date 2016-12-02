Template.NewRoom.events({
   'click .fa-close' : function() {
       Session.set('newRoom', false);          
   }                                                
}); 