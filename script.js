$(document).ready( function() {	
   
	$(document)
		.on('click', '#add_todo', function() {
			var todoDescription = $('input[name="todo_description"]').val();
			
			$('.todo_list').prepend('<div class="todo">'
				+ '<div class="checks">'
					+ '<input type="checkbox" class="check_todo" name="check_todo"/>'
				+ '</div>'
				+ '<div class="todo_description">'
					+ todoDescription
				+ '</div>'
			+ '</div>');
                        
			  
            $('#todo_form')[0].reset();
            
        })
                       
			.on('change', '.check_todo', function() {
				var todo = $(this).parent().parent();
                
              todo.effect('puff', 500, function(){todo.remove();});
			})
    
    .on('click', '.todo', function() {
        var here = $(this);
    if (here.hasClass('blue')) {
        here.removeClass('blue').addClass('todo');
    } else if (here.hasClass('red')) {
        here.removeClass('red').addClass('blue');
    } else {
        here.addClass('red');
    }
    });
			 
    
        $('#todo_form').submit(function(e) {
        e.preventDefault();
            return false;
        });	
		
    $('.todo_list').sortable();
		});  
		
		
