// Crear elementos del cursor
var cursor = document.createElement('div');
cursor.className = 'custom-cursor';
document.body.appendChild(cursor);

var innerCursor = document.createElement('div');
innerCursor.className = 'custom-cursor inner';
document.body.appendChild(innerCursor);

// Mover cursor
document.addEventListener('mousemove', function(e) {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
    innerCursor.style.left = e.clientX + 'px';
    innerCursor.style.top = e.clientY + 'px';
});

// Efectos hover
var elementosInteractivos = document.querySelectorAll('a, button, .hoverable');
for(var i = 0; i < elementosInteractivos.length; i++) {
    elementosInteractivos[i].addEventListener('mouseenter', function() {
        cursor.style.transform = 'scale(1.5)';
        cursor.style.borderColor = getComputedStyle(this).getPropertyValue('--cursor-color');
    });
    
    elementosInteractivos[i].addEventListener('mouseleave', function() {
        cursor.style.transform = 'scale(1)';
        cursor.style.borderColor = 'var(--cursor-color)';
    });
}
