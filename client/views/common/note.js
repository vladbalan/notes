Template.note.events({
  'click .delete': function(e) {
    e.preventDefault();
    
    if (confirm("Delete this note?")) {
      var noteId = this._id;
      Notes.remove(noteId);
    }
  }
});

Template.note.helpers({
	tagsArray: function() {
		return this.tags.split(',');
	}
});