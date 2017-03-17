
/** * Created by Frolova on 02.03.2017. **/
function ContextMenu( menuExample,node) {

        this.createMenu = function (node) {
            createNode(node);
            createList(menuExample);
            document.getElementsByTagName('UL')[0].id = "contextMenu";
        };
        this.openContextMenu = function (node) {
            var node = node || "BUTTON",
                cxElement = document.getElementById("contextMenu"); // // This is the actual HTML context menu:
                
            document.body.oncontextmenu = function(e) {
                event.preventDefault();
              var target = event.target;
                if (target.nodeName != node) return;
                showContextMenu(cxElement);
            }
            clickOnMenu(menuExample);
        }


}
function clickOnMenu(menuExample) {
    //noinspection JSUnresolvedFunction
    jQuery (document).ready(init);
    
    function init(){
        //noinspection JSUnresolvedFunction
        jQuery('#contextMenu').bind('click', desc);
    }
    
    function desc(event, menu){
        var menu = menu || menuExample,
            op = event.target.outerText,
            key = op;
        
        for ( key  in menu) {
            switch (op)
            {
                case menu[key].title : menu[key].action; console.log(menu[key].action);break;
            }
            if (Array.isArray(menu[key].submenu)){  desc(event, menu[key].submenu); }
            
        }
        return menu[key];
    }
    
}
function createNode(node) {
    var node = node || 'BUTTON',
     elem = document.createElement(node),        // Create a <button> element
     t = document.createTextNode("CLICK ME");       // Create a text node
    elem.appendChild(t);                                // Append the text to <button>
    document.body.appendChild(elem);
    // Append <button> to <body>
    return elem;
}
function showContextMenu(cxElement) {
    cxElement.style.display = "block";
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
                        if (Array.isArray((item[key]))){ parent = newLi[i]; createList(item[key],listContainer, itemContainer,parent); }
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
    
}