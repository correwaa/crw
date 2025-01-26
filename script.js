document.addEventListener('DOMContentLoaded', function() {
    // Crear elementos
    const cursor = document.createElement('div');
    cursor.className = 'custom-cursor';
    document.body.appendChild(cursor);
    
    const inner = document.createElement('div');
    inner.className = 'custom-cursor inner';
    document.body.appendChild(inner);

    // Actualizar posición
    document.addEventListener('mousemove', function(e) {
        cursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
        inner.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
    });

    // Efectos hover
    document.querySelectorAll('a, button, .hoverable').forEach(function(el) {
        el.addEventListener('mouseenter', function() {
            cursor.style.borderColor = '#00f3ff';
            cursor.style.transform = 'translate(-50%, -50%) scale(1.8)';
        });
        
        el.addEventListener('mouseleave', function() {
            cursor.style.borderColor = 'var(--accent-color)';
            cursor.style.transform = 'translate(-50%, -50%) scale(1)';
        });
    });
});
