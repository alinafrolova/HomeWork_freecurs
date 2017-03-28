/**
 * Created by Frolova on 28.03.2017.
 */
'use strict'; (function () {
    //constractor
    function ContextMenu(node, menuStructure) {
        
        this.root = node;
        this.menu = this._createMenu(menuStructure);
        this.root.addEventListener('contextmenu', this._OnRootContextMenu.bind(this), false);
        this.root.addEventListener('click', this._initSubMenu.bind(this, menuStructure), false);
    }
    window.ContextMenu = ContextMenu;
    
    ContextMenu.prototype._createMenu = function (menuStructure) {
        createList(menuStructure);
        document.getElementsByTagName('UL')[0].id = "contextMenu";
        return document.getElementById('contextMenu');
    }
    ContextMenu.prototype._OnRootContextMenu = function (event) {
        event.preventDefault();
        console.log(event);
        var x = event.clientX,
            y = event.clientY;
        this.show(x, y);
        
    }
    ContextMenu.prototype._initSubMenu = function (menuStructure, event) {
        desc(menuStructure, event);
    }
    ContextMenu.prototype.show = function (x, y) {
        this.menu.style.display = "block";
        this.menu.style.left = x + 'px';
        this.menu.style.top = y + 'px';
    }
    
  
    function createList(listData, listContainer, itemContainer, parent) {
        var newUL = document.createElement(listContainer || 'ul'), //create ul
            itemContainer = itemContainer || 'li',
            newLi = [],
            parent = parent || document.body;
        listData.forEach(function(item,i){
            for (var key in item) {
                newLi[i] = document.createElement(itemContainer);//create li
                newUL.appendChild(newLi[i]);
                if (Array.isArray((item[key]))){ newLi[i].innerText = newLi[i].innerText  + ">"; parent = newLi[i]; createList(item[key],listContainer, itemContainer,parent); }
                else{
                    if(typeof(item) == "object") {
                        if (key === 'title') {
                            parent.appendChild(newUL);
                            newLi[i].appendChild( document.createTextNode(item.title));
                        }
                    }
                }
            }
        });
        var masLI = document.getElementsByTagName('li');
        for (var j = 0; j < masLI.length; j++ ){
            if (!masLI[j].innerText) {masLI[j].remove();}
        }
        return newUL;
    }
    function desc(menuStructure, event){
        var menu = menu || menuStructure,
            op = event.target.outerText,
            key = op;
        
        for ( key  in menu) {
            switch (op)
            {
               case  menu[key].title :
                   try {
                       menu[key].action();
        
                   } catch (err) {
    
                       console.log("they don't have action"); break;
        
                   }
                 
            }
            if (Array.isArray(menu[key].submenu)){  desc(menu[key].submenu, event); }
            
        }
        return menu[key];
    }
})();
  