/**
 * Created by Frolova on 21.03.2017.
 */
'use strict';
(function () {
    var HAS_SUBMENU_CLASS = 'context-menu-has-submenu';
    function ContextMenu(node, menuStructure) { //создать конструктор и єкспортировать его на глобальній уровень
        
        this.root = node;
        this.menu = this._buildMenuMarkup(menuStructure);
        this._initSubMenuBehaviour();
        document.body.appendChild(this.menu);
        this.root.addEventListener('contextmenu', this._OnRootContextMenu.bind(this), false);
    }
    window.ContextMenu = ContextMenu; //экспортирт віглядит как создание свойства в обїекте window
    
    ContextMenu.prototype._buildMenuMarkup = function (structure) {
        var root = document.createElement('ul'),
            menuItemNode;
            root.className = 'context-menu';
        for (var i = 0; i < structure.length; i+= 1){
            menuItemNode = document.createElement('li');
            menuItemNode.innerText = structure[i].title;
            if (structure[i].submenu){
                menuItemNode.className += HAS_SUBMENU_CLASS;
               menuItemNode.appendChild(this._buildMenuMarkup(structure[i].submenu));
            }else {
                menuItemNode.addEventListener('click', structure[i].action, false);
                
            }
            root.appendChild(menuItemNode);
        }
        return root;
        
    }
    ContextMenu.prototype._initSubMenuBehaviour = function () {
        var submenuHolders = this.menu.querySelectorAll('.' + HAS_SUBMENU_CLASS);
        Array.prototype.forEach.call(submenuHolders, function (submenuHolder) {
            var submenuNode = submenuHolder.querySelector('ul');
            submenuHolder.addEventListener('mouseenter', function () {
                submenuNode.style.display = 'block';
            });
            submenuHolder.addEventListener('mouseleave', function () {
                submenuNode.style.display = 'none';
            });
        })
      
    }
    ContextMenu.prototype._onGlobalClick = function (event) {
        var menu = this.menu;
        if (!topWalker(event.target, function (node) {
                return menu === node;
            })){
            this.hide();
        }
    };
    ContextMenu.prototype._OnRootContextMenu = function (event) {
        event.preventDefault();
        console.log(event);
        var x = event.clientX,
            y = event.clientY;
        this.show(x, y);
        
    }
    ContextMenu.prototype.show = function (left, top) {
        this.menu.style.display = 'block';
        this.menu.style.left = left + 'px';
        this.menu.style.top = top + 'px';
    }
    ContextMenu.prototype.hide = function () {
        this.menu.style.display = 'none';
    }
})();
