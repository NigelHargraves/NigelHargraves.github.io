function inventryUpdate() {
    if (openInventMenu) {
        inventMenu.style.display = "block";
        inventMenu.style.right = c.width / 20 + "px";
        inventMenu.style.top = c.height / 8 + "px";
        inventMenu.style.width = c.width / 8 + "px";
        inventMenu.style.height = c.height / 1.5 + "px";
        if (!displayInventOnce) {
            if (inventryItems == 0) {
                inventMenu.innerText = 'Inventry \n Empty';
            } else {
                inventMenu.innerText = 'Inventry \n';
                if (burniumOreAmount > 0) {
                    inventMenu.innerText += 'Burnium Ore : ' + burniumOreAmount + ' \n';
                }
            }
            displayInventOnce = true;
        }
    } else {
        inventMenu.style.display = "none";
        displayInventOnce = false;
    }
}