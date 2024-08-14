document.addEventListener('DOMContentLoaded', () => {
    const addButton = document.querySelector('.add-item');
    const container = document.querySelector('.itens');
    const template = document.querySelector('.item-container-template');

    addButton.addEventListener('click', () => {
        // Clone the template and remove display none
        const newContainer = template.cloneNode(true);
        newContainer.style.display = 'flex';
        newContainer.style.height = '50px';
        newContainer.style.paddingBottom = '50px';
        newContainer.style.marginTop = '5px';
        newContainer.classList.remove('item-container-template');

        // Insert the new container before the add button
        container.insertBefore(newContainer, addButton.parentElement.nextElementSibling);

        // Optionally, add a remove button to each new container
        const removeButton = document.createElement('button');
        removeButton.textContent = '-';
        removeButton.classList.add('remove-item');
        newContainer.appendChild(removeButton);

        // Handle removing the container
        removeButton.addEventListener('click', () => {
            newContainer.remove();
        });
    });
});